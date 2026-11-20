import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ComingSoon from '@/pages/ComingSoon/ComingSoon'
import CatalogPage from '@/pages/Catalog/CatalogPage'
import CatalogDetailPage from '@/pages/Catalog/CatalogDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/workshops/:id" element={<CatalogDetailPage category="workshops" />} />
        <Route path="/cakes/:id" element={<CatalogDetailPage category="cakes" />} />
        <Route path="/workshops" element={<CatalogPage category="workshops" />} />
        <Route path="/cakes" element={<CatalogPage category="cakes" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
