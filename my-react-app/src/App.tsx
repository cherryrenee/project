import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AgreementProvider } from "./context/AgreementContext";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AgreementProvider>
          <AppRoutes />
        </AgreementProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
