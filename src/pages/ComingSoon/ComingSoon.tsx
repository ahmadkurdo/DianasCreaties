import styles from './ComingSoon.module.scss'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiGift, FiLayers, FiTruck } from 'react-icons/fi'

const fillingFlavours = [
  'Vanille',
  'Aardbei',
  'Lemon',
  'Bosvruchten',
  'Mango',
  'Sinaasappel',
  'Peer',
  'Ananas',
  'Sinaasappel/perzik',
  'Chocolade (wit, melk of puur)',
  'Nutella met geroosterde hazelnoten',
  'Bonbonbloc',
  'Toblerone',
  'Oreo',
  'Bokkenpootjes',
  'Amaretto (meerprijs € 0,50 p.p.)',
  'Baileys (meerprijs € 0,50 p.p.)',
  'Likeur 43 (meerprijs € 0,50 p.p.)',
  'Champagne (meerprijs € 0,50 p.p.)',
  'Aardbeienjam',
  'Bosvruchtenjam',
  'Lemoncurd',
  'Vlaaivulling (aardbei/kersen)',
  'Seizoensfruit stukjes in de vulling (meerprijs € 0,25 p.p.)',
]

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
          <h2 id="cake-info-heading">Meer over onze taarten</h2>
        </div>

        <details className={styles.infoSection}>
          <summary>
            <span className={styles.infoIcon}><FiGift aria-hidden="true" /></span>
            <span className={styles.infoLabel}>
              <span className={styles.infoTitle}>Taarten op maat</span>
              <span className={styles.infoHint}>Uw wensen, kleuren en decoraties</span>
            </span>
            <FiChevronDown className={styles.infoChevron} aria-hidden="true" />
          </summary>
          <div className={styles.infoContent}>
            <p>
              Onze taarten worden gemaakt van biscuitdeeg en gevuld met crème en een laagje jam.
              Naar wens en afhankelijk van het seizoen kan er ook vers fruit in verwerkt worden.
            </p>
            <p>
              De taart wordt bekleed met marsepein of fondant in een kleur naar keuze. Decoraties
              kunnen bij een thema passen en een fotoprint is ook mogelijk. Geef uw wensen aan ons door.
            </p>
          </div>
        </details>

        <details className={styles.infoSection}>
          <summary>
            <span className={styles.infoIcon}><FiLayers aria-hidden="true" /></span>
            <span className={styles.infoLabel}>
              <span className={styles.infoTitle}>Smaken van vullingen</span>
              <span className={styles.infoHint}>Van fruitig tot chocolade</span>
            </span>
            <FiChevronDown className={styles.infoChevron} aria-hidden="true" />
          </summary>
          <div className={styles.infoContent}>
            <ul className={styles.flavourList}>
              {fillingFlavours.map((flavour) => <li key={flavour}>{flavour}</li>)}
            </ul>
          </div>
        </details>

        <details className={styles.infoSection}>
          <summary>
            <span className={styles.infoIcon}><FiTruck aria-hidden="true" /></span>
            <span className={styles.infoLabel}>
              <span className={styles.infoTitle}>Prijzen, bezorgen en bestellen</span>
              <span className={styles.infoHint}>Alles voor uw bestelling</span>
            </span>
            <FiChevronDown className={styles.infoChevron} aria-hidden="true" />
          </summary>
          <div className={styles.infoContent}>
            <h3>Prijsindicatie</h3>
            <ul>
              <li>Vanaf € 5,50 per persoon, afhankelijk van de vulling en uitvoering.</li>
              <li>Puzzelplaatjes op een taart: € 10,00 extra.</li>
              <li>3-dimensionale taarten: € 6,50 per persoon.</li>
            </ul>
            <h3>Bezorgen</h3>
            <ul>
              <li>Binnen Vlaardingen: € 15,00.</li>
              <li>Buiten Vlaardingen: € 1,50 per km, heen en terug.</li>
            </ul>
            <h3>Bestellen en betalen</h3>
            <p>
              Bestellen kan telefonisch, per e-mail of persoonlijk. De bestelling moet van tevoren
              worden betaald op ING rekeningnummer NL15 INGB 0007 0678 49 ten name van Diana's Creaties te Vlaardingen.
            </p>
            <p>
              Neem <Link to="/contact">contact met ons op</Link> om uw wensen, de actuele prijs en beschikbaarheid te bespreken.
            </p>
          </div>
        </details>
      </section>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Diana's Creaties. Alle rechten voorbehouden.
      </footer>
    </div>
  )
}
