import styles from './ComingSoon.module.scss'
import { Link } from 'react-router-dom'

export default function ComingSoon() {
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
        </div>

        <div className={styles.socialLinks}>
          <div className={styles.contactIntro}>
            <h2 className={styles.contactTitle}>Contact</h2>
            <p className={styles.contactHint}>Stuur ons een bericht via WhatsApp of bezoek onze Facebook-groep.</p>
          </div>
          <a
            href="https://www.facebook.com/share/1GNMzwspKt/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Facebook-groep
          </a>
          <a
            href="https://wa.me/31615246591"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Diana's Creaties. Alle rechten voorbehouden.
      </footer>
    </div>
  )
}
