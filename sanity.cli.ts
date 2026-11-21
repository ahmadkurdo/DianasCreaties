import 'dotenv/config'
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Set SANITY_STUDIO_PROJECT_ID in .env before running Sanity CLI commands.')
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})