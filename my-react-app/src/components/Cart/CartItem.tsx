"use client";
import * as React from "react";
import { QuantityControl } from "./QuantityControl";

interface CartItemProps {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  onQuantityChange?: (id: string, newQuantity: number) => void;
  onRemove?: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  description,
  price,
  quantity,
  onQuantityChange,
  onRemove
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (onQuantityChange) {
      onQuantityChange(id, newQuantity);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <div className="cart-item-image" />
        <div className="cart-item-details">
          <h3 className="cart-item-name">
            {name}
          </h3>
          <p className="cart-item-description">
            {description}
          </p>
          <div className="cart-item-price">
            {price}
          </div>
        </div>
      </div>
      <div className="cart-item-controls">
        <QuantityControl
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
        <button
          onClick={handleRemove}
          className="cart-item-remove"
        >
          삭제
        </button>
      </div>
    </article>
  );
};
