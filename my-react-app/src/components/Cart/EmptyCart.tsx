import React from 'react';
import { Link } from 'react-router-dom';
import "../../pages/Cart.css";
import { useNavigate } from 'react-router-dom';

export function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <div className="empty-cart-content">
        <h2>장바구니가 비었습니다</h2>
        <p>원하는 상품을 장바구니에 담아보세요!</p>
        <button 
          className="empty-cart-button"
          onClick={() => navigate('/products')}
        >
          제품 담으러 가기
        </button>
      </div>
    </div>
  );
} 