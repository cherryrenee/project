"use client";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../pages/Cart.css";
import { Link } from "react-router-dom";

interface OrderSummaryProps {
  items: Array<{
    price: string;
    quantity: number;
  }>;
}

export function OrderSummary({ items }: OrderSummaryProps) {
  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal >= 50000 ? 0 : 3000; // 5만원 이상 무료배송
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  return (
    <aside className="order-summary">
          <h2 className="summary-title">
            주문 요약
          </h2>
          <div className="summary-content">
          <div className="summary-labels">
          <div className="summary-label">
            상품 금액
          </div>
          <div className="summary-label">
            배송비
          </div>
        </div>
        <div className="summary-values">
          <div className="summary-value">
            {formatPrice(subtotal)}
          </div>
          <div className="summary-shipping">
            {formatPrice(shipping)}
            {shipping === 0 && <small className="free-shipping">(무료배송)</small>}
          </div>
        </div>
      </div>
      <hr className="summary-divider" />
      <div className="summary-total">
        <div className="total-label">
          총 결제금액
        </div>
        <div className="total-amount">
          {formatPrice(total)}
        </div>
      </div>
      <Link to="/payment" className="checkout-button">
        주문하기
      </Link>
    </aside>
  );
}
