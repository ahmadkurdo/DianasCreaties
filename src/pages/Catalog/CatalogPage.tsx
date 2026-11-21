import { Link } from 'react-router-dom'
import { type CatalogCategory } from '@/data/catalog'
import useCatalogItems from '@/data/useCatalogItems'
import CatalogImage from './CatalogImage'
import styles from './CatalogPage.module.scss'

interface CatalogPageProps {
  category: CatalogCategory
}

export default function CatalogPage({ category }: CatalogPageProps) {
  const { status, items } = useCatalogItems(category)
  const title = category === 'workshops' ? 'Workshops' : 'Cakes'

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <Link to="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> Terug naar overzicht
        </Link>
        <h1 className={styles.title}>{title}</h1>

        {status === 'loading' ? (
          <p className={styles.emptyState}>De catalogus wordt geladen...</p>
        ) : status === 'error' ? (
          <p className={styles.emptyState}>De catalogus is momenteel niet beschikbaar.</p>
        ) : items.length > 0 ? (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id}>
                <Link to={`/${category}/${item.id}`} className={styles.item}>
                  <CatalogImage item={item} />
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <span className={styles.sampleLabel}>
                    {item.isSample ? 'Voorbeeld · ' : ''}Meer informatie
                  </span>
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