import { Link } from 'react-router-dom'
import { cakes, workshops, type CatalogItem } from '@/data/catalog'
import CatalogImage from './CatalogImage'
import styles from './CatalogPage.module.scss'

type CatalogCategory = 'workshops' | 'cakes'

interface CatalogPageProps {
  category: CatalogCategory
}

const catalogConfig: Record<CatalogCategory, { title: string; items: CatalogItem[] }> = {
  workshops: { title: 'Workshops', items: workshops },
  cakes: { title: 'Cakes', items: cakes },
}

export default function CatalogPage({ category }: CatalogPageProps) {
  const { title, items } = catalogConfig[category]

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <Link to="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> Terug naar overzicht
        </Link>
        <h1 className={styles.title}>{title}</h1>

        {items.length > 0 ? (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id}>
                <Link to={`/${category}/${item.id}`} className={styles.item}>
                  <CatalogImage item={item} />
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <span className={styles.sampleLabel}>Voorbeeld · Meer informatie</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.emptyState}>
            Er zijn op dit moment geen {category === 'workshops' ? 'workshops' : 'cakes'} beschikbaar.
          </p>
        )}
      </section>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Diana's Creaties. Alle rechten voorbehouden.
      </footer>
    </main>
  )
}