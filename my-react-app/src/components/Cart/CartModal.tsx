import React, { useState, useEffect } from 'react';
import { QuantityControl } from './QuantityControl';
import "../../pages/Cart.css";

interface Product {
  id: number;
  title: string;
  price: string;
  image_url: string;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onAddToCart: (item: { id: number; title: string; price: string; quantity: number; image_url: string }) => void;
}

export function CartModal({ isOpen, onClose, product, onAddToCart }: CartModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
    }
  }, [isOpen]);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image_url: product.image_url
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-product-info">
          <img src={product.image_url} alt={product.title} className="modal-product-image" />
          <div className="modal-product-details">
            <h3>{product.title}</h3>
            <p className="modal-product-price">{product.price}</p>
            <div className="modal-cart-options">
              <p className="modal-cart-label">장바구니에 담기</p>
              <div className="modal-quantity-control">
                <QuantityControl
                  quantity={quantity}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal-cart-controls">
          <button className="modal-add-button" onClick={handleAddToCart}>
            담기
          </button>
        </div>
      </div>
    </div>
  );
} 