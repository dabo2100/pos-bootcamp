import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutMain from './layouts/LayoutMain';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="w-full h-dvh overflow-hidden bg-creamy text-black">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<h1>Dashboard Page</h1>} />
            <Route path="order" element={<h1>Food & Drinks Page</h1>} />
            <Route path="invoices" element={<h1>All Invoices Page</h1>} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Protected Route (protected )
// Static Route  /dashboard =>
// Dyanimc Route /:productId => useParams()
// Nested Route

// 2 Layouts
// Home App
// Login/Register/404 Page
