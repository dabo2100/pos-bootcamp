import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutMain from './layouts/LayoutMain';

export default function App() {
  return (
    <div className="w-full h-dvh overflow-hidden bg-creamy text-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<h1>Home Page</h1>} />
            <Route path="dashboard" element={<h1>Dashboard Page</h1>} />
            <Route path="order" element={<h1>Food & Drinks Page</h1>} />
            <Route path="invoices" element={<h1>All Invoices Page</h1>} />
          </Route>

          <Route path="login" element={<h1>Login Page</h1>} />
          <Route path="register" element={<h1>Register Page</h1>} />

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
