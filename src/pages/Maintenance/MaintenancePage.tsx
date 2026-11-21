import homeStyles from '../ComingSoon/ComingSoon.module.scss'
import styles from './MaintenancePage.module.scss'

export default function MaintenancePage() {
  return (
    <div className={homeStyles.page}>
      <main className={`${homeStyles.card} ${styles.card}`}>
        <div className={homeStyles.logoRing} aria-hidden="true">
          <span className={homeStyles.logoIcon}>🧁</span>
        </div>
        <h1 className={homeStyles.brand}>Diana's Creaties</h1>
        <p className={homeStyles.tagline}>Ambachtelijk gebak met liefde gemaakt</p>
        <div className={homeStyles.divider} />

        <h2 className={styles.heading}>Binnenkort beschikbaar</h2>
        <p className={styles.message}>
          We zijn druk bezig met het bakken van iets bijzonders voor u.
          Kom snel terug voor onze nieuwe website!
        </p>

        <div className={styles.contact}>
          <h2>Contact</h2>
          <p>Neem contact met ons op via WhatsApp of bezoek onze Facebook-groep.</p>
          <div className={styles.links}>
            <a href="https://wa.me/31615246591" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.facebook.com/share/1GNMzwspKt/" target="_blank" rel="noopener noreferrer">Facebook-groep</a>
          </div>
        </div>
      </main>
      <footer className={homeStyles.footer}>
        &copy; {new Date().getFullYear()} Diana's Creaties. Alle rechten voorbehouden.
      </footer>
    </div>
  )
}