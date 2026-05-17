import styles from './ComingSoon.module.scss'

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

        <div className={styles.badge}>Binnenkort beschikbaar</div>

        <p className={styles.message}>
          We zijn druk bezig met het bakken van iets bijzonders voor u.
          <br />
          Kom snel terug voor onze nieuwe website!
        </p>

        <div className={styles.contact}>
          <p>Meer informatie vindt u op onze Facebook-groep of neem contact op via WhatsApp:</p>
          <div className={styles.contactLinks}>
            <a
              href="https://www.facebook.com/share/1GNMzwspKt/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              Facebook-groep
            </a>
            <a
              href="https://wa.me/31615246591"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Diana's Creaties. Alle rechten voorbehouden.
      </footer>
    </div>
  )
}
