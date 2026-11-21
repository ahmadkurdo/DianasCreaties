import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import catalogItem from './studio/schemaTypes/catalogItem'

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
  plugins: [structureTool()],
  schema: {
    types: [catalogItem],
  },
})