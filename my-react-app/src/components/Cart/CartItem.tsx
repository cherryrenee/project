"use client";
import React from 'react';
import { QuantityControl } from './QuantityControl';
import "../../pages/Cart.css";

interface CartItemProps {
  id: number;
  title: string;
  price: string;
  quantity: number;
  image_url: string;
  onQuantityChange: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({ id, title, price, quantity, image_url, onQuantityChange, onRemove }: CartItemProps) {
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <div className="cart-item-image-container">
          <img src={image_url} alt={title} className="cart-item-image" />
        </div>
        <div className="cart-item-details">
          <h3 className="cart-item-title">{title}</h3>
          <p className="cart-item-price">{price}</p>
          <div className="cart-item-controls">
            <QuantityControl
              quantity={quantity}
              onQuantityChange={(newQuantity) => onQuantityChange(id, newQuantity)}
            />
            <button 
              className="cart-item-remove"
              onClick={() => onRemove(id)}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
