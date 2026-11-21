import styles from './ComingSoon.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiGift, FiLayers, FiTruck } from 'react-icons/fi'
import { fetchCakeInformation, type CakeInformation } from '@/data/catalog'

type CakeInformationState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; content: CakeInformation }

export default function ComingSoon() {
  const [cakeInformation, setCakeInformation] = useState<CakeInformationState>({ status: 'loading' })

  useEffect(() => {
    let active = true

    fetchCakeInformation()
      .then((content) => {
        if (active) setCakeInformation(content ? { status: 'ready', content } : { status: 'error' })
      })
      .catch(() => {
        if (active) setCakeInformation({ status: 'error' })
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logoRing}>
          <span className={styles.logoIcon}>🧁</span>
        </div>

        <h1 className={styles.brand}>Diana's Creaties</h1>
        <p className={styles.tagline}>Ambachtelijk gebak met liefde gemaakt</p>

        <div className={styles.divider} />

        <h2 className={styles.prompt}>Ontdek wat we voor u maken</h2>

        <div className={styles.options}>
          <Link to="/workshops" className={styles.option}>
            <span className={styles.optionIcon} aria-hidden="true">🧁</span>
            <span className={styles.optionTitle}>Workshops</span>
            <span className={styles.optionHint}>Leer zelf iets lekkers maken</span>
            <span className={styles.optionArrow} aria-hidden="true">→</span>
          </Link>
          <Link to="/cakes" className={styles.option}>
            <span className={styles.optionIcon} aria-hidden="true">🎂</span>
            <span className={styles.optionTitle}>Cakes</span>
            <span className={styles.optionHint}>Bekijk ons gebak</span>
            <span className={styles.optionArrow} aria-hidden="true">→</span>
          </Link>
          <Link to="/contact" className={styles.option}>
            <span className={styles.optionIcon} aria-hidden="true">✉️</span>
            <span className={styles.optionTitle}>Contact</span>
            <span className={styles.optionHint}>Onze contactgegevens</span>
            <span className={styles.optionArrow} aria-hidden="true">→</span>
          </Link>
        </div>

      </div>

      <section className={styles.cakeInfo} aria-labelledby="cake-info-heading">
        <div className={styles.infoHeading}>
          <h2 id="cake-info-heading">
            {cakeInformation.status === 'ready' ? cakeInformation.content.heading || 'Meer over onze taarten' : 'Meer over onze taarten'}
          </h2>
        </div>

        {cakeInformation.status === 'loading' ? (
          <p className={styles.infoStatus} role="status">De taartinformatie wordt geladen...</p>
        ) : cakeInformation.status === 'error' ? (
          <p className={styles.infoStatus}>
            De taartinformatie is momenteel niet beschikbaar. <Link to="/contact">Neem contact met ons op.</Link>
          </p>
        ) : (
          <>
            <details className={styles.infoSection}>
              <summary>
                <span className={styles.infoIcon}><FiGift aria-hidden="true" /></span>
                <span className={styles.infoLabel}>
                  <span className={styles.infoTitle}>{cakeInformation.content.customCakes?.title}</span>
                  <span className={styles.infoHint}>{cakeInformation.content.customCakes?.subtitle}</span>
                </span>
                <FiChevronDown className={styles.infoChevron} aria-hidden="true" />
              </summary>
              <div className={styles.infoContent}>
                {(cakeInformation.content.customCakes?.paragraphs ?? []).map((paragraph, index) => (
                  <p key={`${index}-${paragraph}`}>{paragraph}</p>
                ))}
              </div>
            </details>

            <details className={styles.infoSection}>
              <summary>
                <span className={styles.infoIcon}><FiLayers aria-hidden="true" /></span>
                <span className={styles.infoLabel}>
                  <span className={styles.infoTitle}>{cakeInformation.content.fillings?.title}</span>
                  <span className={styles.infoHint}>{cakeInformation.content.fillings?.subtitle}</span>
                </span>
                <FiChevronDown className={styles.infoChevron} aria-hidden="true" />
              </summary>
              <div className={styles.infoContent}>
                <ul className={styles.flavourList}>
                  {(cakeInformation.content.fillings?.items ?? []).map((flavour, index) => (
                    <li key={`${index}-${flavour}`}>{flavour}</li>
                  ))}
                </ul>
              </div>
            </details>

            <details className={styles.infoSection}>
              <summary>
                <span className={styles.infoIcon}><FiTruck aria-hidden="true" /></span>
                <span className={styles.infoLabel}>
                  <span className={styles.infoTitle}>{cakeInformation.content.ordering?.title}</span>
                  <span className={styles.infoHint}>{cakeInformation.content.ordering?.subtitle}</span>
                </span>
                <FiChevronDown className={styles.infoChevron} aria-hidden="true" />
              </summary>
              <div className={styles.infoContent}>
                <h3>{cakeInformation.content.ordering?.pricingTitle}</h3>
                <ul>
                  {(cakeInformation.content.ordering?.pricingItems ?? []).map((item, index) => (
                    <li key={`${index}-${item}`}>{item}</li>
                  ))}
                </ul>
                <h3>{cakeInformation.content.ordering?.deliveryTitle}</h3>
                <ul>
                  {(cakeInformation.content.ordering?.deliveryItems ?? []).map((item, index) => (
                    <li key={`${index}-${item}`}>{item}</li>
                  ))}
                </ul>
                <h3>{cakeInformation.content.ordering?.orderTitle}</h3>
                <p>{cakeInformation.content.ordering?.orderText}</p>
                {cakeInformation.content.ordering?.contactLink && (
                  <p>
                    {cakeInformation.content.ordering.contactBefore}{' '}
                    <Link to="/contact">{cakeInformation.content.ordering.contactLink}</Link>{' '}
                    {cakeInformation.content.ordering.contactAfter}
                  </p>
                )}
              </div>
            </details>
          </>
        )}
      </section>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Diana's Creaties. Alle rechten voorbehouden.
      </footer>
    </div>
  )
}
