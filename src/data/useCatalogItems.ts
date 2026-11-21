import { useEffect, useState } from 'react'
import { fetchCatalogItems, type CatalogCategory, type CatalogItem } from './catalog'

type CatalogState =
  | { status: 'loading'; items: CatalogItem[] }
  | { status: 'ready'; items: CatalogItem[] }
  | { status: 'error'; items: CatalogItem[] }

export default function useCatalogItems(category: CatalogCategory) {
  const [state, setState] = useState<CatalogState>({ status: 'loading', items: [] })

  useEffect(() => {
    let active = true
    setState({ status: 'loading', items: [] })

    fetchCatalogItems(category)
      .then((items) => {
        if (active) setState({ status: 'ready', items })
      })
      .catch(() => {
        if (active) setState({ status: 'error', items: [] })
      })

    return () => {
      active = false
    }
  }, [category])

  return state
}