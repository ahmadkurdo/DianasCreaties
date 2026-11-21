import { createClient } from '@sanity/client'

export type CatalogCategory = 'workshops' | 'cakes'

export interface CatalogItem {
  id: string
  name: string
  description: string
  imageLabel: string
  imageUrl: string
  priceLabel: string
  details: string[]
  isSample: boolean
}

export interface CakeInformation {
  heading?: string
  customCakes?: { title?: string; subtitle?: string; paragraphs?: string[] }
  fillings?: { title?: string; subtitle?: string; items?: string[] }
  ordering?: {
    title?: string
    subtitle?: string
    pricingTitle?: string
    pricingItems?: string[]
    deliveryTitle?: string
    deliveryItems?: string[]
    orderTitle?: string
    orderText?: string
    contactBefore?: string
    contactLink?: string
    contactAfter?: string
  }
}

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim()
const dataset = import.meta.env.VITE_SANITY_DATASET?.trim() || 'production'

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2025-02-19',
      useCdn: true,
      perspective: 'published',
    })
  : null

const catalogQuery = `*[_type == "catalogItem" && category == $category && defined(slug.current)] | order(_createdAt desc) {
  "id": slug.current,
  name,
  description,
  "imageLabel": coalesce(image.alt, name),
  "imageUrl": coalesce(image.asset->url, imageUrl, ""),
  "priceLabel": coalesce(priceLabel, ""),
  "details": coalesce(details, []),
  "isSample": coalesce(isSample, false)
}`

export async function fetchCatalogItems(category: CatalogCategory): Promise<CatalogItem[]> {
  if (!client) {
    throw new Error('Set VITE_SANITY_PROJECT_ID to connect to the CMS.')
  }

  return client.fetch<CatalogItem[]>(catalogQuery, { category })
}

export async function fetchCakeInformation(): Promise<CakeInformation | null> {
  if (!client) {
    throw new Error('Set VITE_SANITY_PROJECT_ID to connect to the CMS.')
  }

  return client.fetch<CakeInformation | null>(
    '*[_type == "cakeInformation" && _id == $id][0]{heading, customCakes, fillings, ordering}',
    { id: 'cakeInformation' },
  )
}