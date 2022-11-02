import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/product/:code" element={<ProductPage />} />
        <Route path="/*" element={<h1> NotFoundPage </h1>} />
      </Routes>
    </Router>
  );
}
