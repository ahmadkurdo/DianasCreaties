import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import ComingSoon from '@/pages/ComingSoon/ComingSoon'
import CatalogPage from '@/pages/Catalog/CatalogPage'
import CatalogDetailPage from '@/pages/Catalog/CatalogDetailPage'
import ContactPage from '@/pages/Contact/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/workshops/:id" element={<CatalogDetailPage category="workshops" />} />
        <Route path="/cakes/:id" element={<CatalogDetailPage category="cakes" />} />
        <Route path="/workshops" element={<CatalogPage category="workshops" />} />
        <Route path="/cakes" element={<CatalogPage category="cakes" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <a
        className="whatsapp-float"
        href={`https://wa.me/31615246591?text=${encodeURIComponent('Hallo Diana, ik heb een vraag over Diana\'s Creaties.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Stuur een bericht via WhatsApp (opent in een nieuw tabblad)"
        title="Stuur een bericht via WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </BrowserRouter>
  )
}
