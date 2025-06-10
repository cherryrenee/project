import * as React from "react";

export function PaymentSummary() {
  return (
    <section className="order-summary">
      <div className="order-summary-content">
        <div className="order-summary-title">
          <h2>주문 상품</h2>
        </div>
        <div className="payment-product">
        <div className="payment-product-image" />
        <div className="payment-product-details">
          <h3 className="payment-product-name">라벤더 릴렉스 디퓨저</h3>
          <p className="payment-product-description">
            편안한 수면을 위한 라벤더 향 | 수량: 1개
          </p>
          <p className="payment-product-price">29,000원</p>
          </div>
        </div>
      </div>

      <div className="payment-summary">
        <p>상품금액: 29,000원</p>
        <p>배송비: 3,000원</p>
        <p>───────────</p>
        <p><strong>총 결제금액: 32,000원</strong></p>
      </div>
    </section>
  );
}
