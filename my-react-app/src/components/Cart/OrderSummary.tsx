"use client";
import * as React from "react";
import { Link } from "react-router-dom";

interface OrderSummaryProps {
  subtotal: string;
  shipping: string;
  total: string;
  onCheckout?: () => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  total,
  onCheckout
}) => {
  return (
    <aside className="order-summary">
      <div className="summary-content">
        <div className="summary-labels">
          <h2 className="summary-title">
            주문 요약
          </h2>
          <div className="summary-label">
            상품 금액
          </div>
          <div className="summary-label">
            배송비
          </div>
        </div>
        <div className="summary-values">
          <div className="summary-value">
            {subtotal}
          </div>
          <div className="summary-shipping">
            {shipping}
          </div>
        </div>
      </div>
      <hr className="summary-divider" />
      <div className="summary-total">
        <div className="total-label">
          총 결제금액
        </div>
        <div className="total-amount">
          {total}
        </div>
      </div>
      <Link to="/payment" className="checkout-button">
        주문하기
      </Link>
    </aside>
  );
};
