import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AgreementProvider } from './context/AgreementContext';
import { OrderProvider } from './context/OrderContext';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <OrderProvider>
          <AgreementProvider>
            <AppRoutes />
          </AgreementProvider>
        </OrderProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
