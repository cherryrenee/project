"use client";
import * as React from "react";
import { CartItem } from "./CartItem";
import { OrderSummary } from "./OrderSummary";
import "./Cart.css";

interface CartItemData {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
}

const initialCartItems: CartItemData[] = [
  {
    id: "1",
    name: "라벤더 릴렉스 디퓨저",
    description: "편안한 수면을 위한 라벤더 향",
    price: "29,000원",
    quantity: 1
  },
  {
    id: "2",
    name: "유칼립투스 프레시 디퓨저",
    description: "상쾌하고 깔끔한 유칼립투스 향",
    price: "35,000원",
    quantity: 2
  }
];

export default function CartContent() {
  const [cartItems, setCartItems] = React.useState<CartItemData[]>(initialCartItems);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Checkout logic would go here
    console.log("Proceeding to checkout...");
  };

  return (
    <main className="cart-container">
      <div className="cart-layout">
        <section className="cart-main">
          <div className="cart-content">
            <h1 className="cart-title">
              장바구니
            </h1>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                />
              ))
            ) : (
              <div className="empty-cart">
                장바구니가 비어있습니다.
              </div>
            )}
          </div>
        </section>
        <section className="cart-sidebar">
          <OrderSummary
            subtotal="99,000원"
            shipping="3,000원"
            total="102,000원"
            onCheckout={handleCheckout}
          />
        </section>
      </div>
    </main>
  );
}
