import { Link } from 'react-router-dom'
import styles from './ContactPage.module.scss'

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Link to="/" className={styles.backLink}>
          <span aria-hidden="true">←</span> Terug naar overzicht
        </Link>

        <h1 className={styles.title}>Contact</h1>
        <p className={styles.intro}>Heeft u vragen of wilt u iets bestellen? Stuur ons een e-mail.</p>
        <p className={styles.message}>
          Wij streven ernaar om binnen 2 dagen antwoord te geven. Heeft u na 2 dagen niets gehoord,
          controleer dan uw spambox of probeer het telefonisch.
        </p>

        <section className={styles.details} aria-labelledby="details-heading">
          <h2 id="details-heading">Diana's Creaties</h2>
          <address className={styles.address}>
            Johan de Wittstraat 111<br />
            3135 RH Vlaardingen
          </address>

          <dl className={styles.detailsList}>
            <div><dt>Mobiel</dt><dd><a href="tel:+31615246591">06-15246591</a></dd></div>
            <div><dt>E-mail</dt><dd><a href="mailto:info@dianascreaties.nl">info@dianascreaties.nl</a></dd></div>
            <div><dt>KVK nr.</dt><dd>55972756</dd></div>
            <div><dt>BTW nr.</dt><dd>NL001627537B16</dd></div>
            <div><dt>ING rekeningnr.</dt><dd>NL15 INGB 0007 0678 49</dd></div>
          </dl>
        </section>

        <div className={styles.socialLinks}>
          <a href="https://wa.me/31615246591" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.facebook.com/share/1GNMzwspKt/" target="_blank" rel="noopener noreferrer">Facebook-groep</a>
        </div>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Diana's Creaties. Alle rechten voorbehouden.
      </footer>
    </div>
  )
}