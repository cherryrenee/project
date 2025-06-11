"use client";
import React from 'react';
import "../../pages/Cart.css";

interface QuantityControlProps {
  quantity: number;
  onQuantityChange?: (newQuantity: number) => void;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onQuantityChange
}) => {
  const handleDecrease = () => {
    if (quantity > 1 && onQuantityChange) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="quantity-control">
      <button
        onClick={handleDecrease}
        className="quantity-button"
        aria-label="수량 감소"
      >
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="quantity-button"
        aria-label="수량 증가"
      >
        +
      </button>
    </div>
  );
};
