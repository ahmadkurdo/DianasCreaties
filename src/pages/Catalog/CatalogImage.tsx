import { useState } from 'react'
import type { CatalogItem } from '@/data/catalog'
import styles from './CatalogPage.module.scss'

interface CatalogImageProps {
  item: CatalogItem
}

export default function CatalogImage({ item }: CatalogImageProps) {
  const [hasImage, setHasImage] = useState(Boolean(item.imageUrl))

  return (
    <div className={styles.imageFrame}>
      {hasImage ? (
        <img
          className={styles.image}
          src={item.imageUrl}
          alt={item.imageLabel}
          loading="lazy"
          onError={() => setHasImage(false)}
        />
      ) : (
        <div className={styles.imagePlaceholder} role="img" aria-label={`${item.imageLabel}, foto volgt`}>
          <span className={styles.placeholderIcon} aria-hidden="true">🧁</span>
          <span>Foto volgt</span>
        </div>
      )}
    </div>
  )
}