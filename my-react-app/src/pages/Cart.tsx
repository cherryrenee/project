import React from 'react';
import { CartContent } from '../components/Cart/CartContent';
import { OrderSummary } from '../components/Cart/OrderSummary';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { items, updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-page">
      {items.length > 0 ? (
        <>
          <h1 className="cart-title">장바구니</h1>
          <div className="cart-layout">
            <div className="cart-items">
              <CartContent
                items={items}
                onQuantityChange={updateQuantity}
                onRemove={removeItem}
              />
            </div>
            <div className="cart-summary">
              <OrderSummary items={items} />
            </div>
          </div>
        </>
      ) : (
        <CartContent
          items={items}
          onQuantityChange={updateQuantity}
          onRemove={removeItem}
        />
      )}
    </div>
  );
}