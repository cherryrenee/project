import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

export default function PaymentComplete() {
  return (
    <div className="payment-complete">
      <div className="payment-complete-content">
        <div className="check-icon">✔</div>
        <h1>결제 완료되었습니다.</h1>
        <p>주문하신 상품의 결제가 정상적으로 완료되었습니다.</p>
        <Link to="/" className="home-button">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 