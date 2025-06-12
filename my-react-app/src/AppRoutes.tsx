import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import PaymentPage from './pages/PaymentPage';
import Products from './pages/Products';
import Perfumes from './pages/Perfumes';
import Diffusers from './pages/Diffusers';
import PaymentComplete from './components/Payment/PaymentComplete';
import MyPage from './pages/MyPage';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="app">
      {!isLoginPage && <Header />}
      {children}
      {!isLoginPage && <Footer />}
    </div>
  );
};

// ScrollToTop 컴포넌트
function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment/complete" element={<PaymentComplete />} />
          <Route path="/products" element={<Products />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/diffusers" element={<Diffusers />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </AppLayout>
    </>
  );
} 