import { Link, Navigate, useParams } from 'react-router-dom'
import { type CatalogCategory } from '@/data/catalog'
import useCatalogItems from '@/data/useCatalogItems'
import CatalogImage from './CatalogImage'
import styles from './CatalogDetailPage.module.scss'

interface CatalogDetailPageProps {
  category: CatalogCategory
}

const facebookUrl = 'https://www.facebook.com/share/1GNMzwspKt/'
const whatsappUrl = 'https://wa.me/31615246591'

export default function CatalogDetailPage({ category }: CatalogDetailPageProps) {
  const { status, items } = useCatalogItems(category)
  const { id: itemId } = useParams<{ id: string }>()
  const title = category === 'workshops' ? 'Workshops' : 'Cakes'

  if (status !== 'ready') {
    return (
      <main className={styles.page}>
        <section className={styles.content}>
          <Link to={`/${category}`} className={styles.backLink}>
            <span aria-hidden="true">←</span> Terug naar {title.toLowerCase()}
          </Link>
          <p className={styles.sampleNote}>
            {status === 'loading' ? 'De informatie wordt geladen...' : 'De informatie is momenteel niet beschikbaar.'}
          </p>
        </section>
      </main>
    )
  }

  const item = items.find((catalogItem) => catalogItem.id === itemId)

  if (!item) {
    return <Navigate to={`/${category}`} replace />
  }

  const message = encodeURIComponent(
    `Hallo Diana, ik heb interesse in ${item.name}. Kun je me meer vertellen over beschikbaarheid en reserveren?`,
  )

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <Link to={`/${category}`} className={styles.backLink}>
          <span aria-hidden="true">←</span> Terug naar {title.toLowerCase()}
        </Link>

        <article className={styles.detail}>
          <CatalogImage item={item} />
          <div className={styles.info}>
            {item.isSample && <span className={styles.sampleLabel}>Voorbeeld</span>}
            <h1 className={styles.title}>{item.name}</h1>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>{item.priceLabel}</p>
            <ul className={styles.detailsList}>
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>

            <section className={styles.contact} aria-labelledby="contact-heading">
              <h2 id="contact-heading">Reserveren of contact</h2>
              <p>Vraag via WhatsApp naar de actuele beschikbaarheid. Je reservering is pas bevestigd na een reactie.</p>
              <div className={styles.actions}>
                <a
                  href={`${whatsappUrl}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryAction}
                >
                  Informeer of reserveer via WhatsApp
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>
                  Facebook-groep
                </a>
              </div>
            </section>
          </div>
        </article>
        {item.isSample && (
          <p className={styles.sampleNote}>Dit is voorbeeldinformatie. Prijs, inhoud en beschikbaarheid kunnen afwijken.</p>
        )}
      </section>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Diana's Creaties. Alle rechten voorbehouden.
      </footer>
    </main>
  )
}