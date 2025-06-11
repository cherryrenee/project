"use client";
import React from 'react';
import { CartItem } from './CartItem';
import { EmptyCart } from './EmptyCart';
import "../../pages/Cart.css";

interface CartProduct {
  id: number;
  title: string;
  price: string;
  quantity: number;
  image_url: string;
}

interface CartContentProps {
  items: CartProduct[];
  onQuantityChange: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartContent({ items, onQuantityChange, onRemove }: CartContentProps) {
  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart-content">
      {items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
