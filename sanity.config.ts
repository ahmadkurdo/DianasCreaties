import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import catalogItem from './studio/schemaTypes/catalogItem'
import cakeInformation from './studio/schemaTypes/cakeInformation'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Set SANITY_STUDIO_PROJECT_ID in .env before starting Sanity Studio.')
}

export default defineConfig({
  name: 'dianas-creaties',
  title: "Diana's Creaties",
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool({
    structure: (builder) => builder.list().title('Inhoud').items([
      builder.documentTypeListItem('catalogItem'),
      builder.listItem().title('Taartinformatie').child(
        builder.document().schemaType('cakeInformation').documentId('cakeInformation'),
      ),
    ]),
  })],
  schema: {
    types: [catalogItem, cakeInformation],
    templates: (templates) => templates.filter((template) => template.schemaType !== 'cakeInformation'),
  },
})