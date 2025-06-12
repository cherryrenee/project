import React from 'react';
import { useOrder } from '../../context/OrderContext';
import './CurrentOrder.css';

export function CurrentOrder() {
  const { completedOrder } = useOrder();

  if (!completedOrder) {
    return (
      <div className="current-order">
        <h2 className="current-order-title">현재 주문 상품</h2>
        <div className="order-card">
          <p style={{ textAlign: 'center', padding: '2rem 0', color: '#666' }}>
            아직 주문 상품이 없습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="current-order">
      <h2 className="current-order-title">현재 주문 상품</h2>
      <div className="order-card">
        <div className="order-items">
          {completedOrder.map((item) => (
            <div key={item.id} className="order-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <div className="item-info">
                  <span className="item-price">{item.price}</span>
                  <span className="item-quantity">{item.quantity}개</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-status">
          <span className="status-label">상태:</span>
          <span className="status-value">결제완료</span>
        </div>
      </div>
    </div>
  );
} 