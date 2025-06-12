import React, { useEffect } from 'react';
import { useOrder } from '../../context/OrderContext';
import './CurrentOrder.css';
import { PaymentButton } from '../Payment/PaymentButton';
import supabase from '../../supabaseClient';

export function CurrentOrder() {
  const { orderHistory } = useOrder();
  // const { orderItems } = PaymentButton();

  // 주문 내역이 없을 때 표시할 기본 메시지
  const defaultMessage = '주문 내역이 없습니다.';

  useEffect(() => {
    console.log("현재 주문 내역:", orderHistory); // 상태가 잘 업데이트 되었는지 확인용
  }, [orderHistory]);

  // const { data, error } = await supabase
  //     .from('purchases')
  //     .insert([
  //       { 
  //         // product_id: orderHistory.title,
  //         // quantity: orderHistory.quantity,
  //         purchase_date: new Date().toISOString(),
  //         total_price: orderItems.price 
  //       }
  //     ]);

  //   if (error) {
  //     console.error('Error logging purchase:', error);
  //   } else {
  //     console.log('Purchase logged successfully:', data);
  //   }

  return (
    <>
      <h2 className="current-order-title">현재 주문 내역</h2>
      {orderHistory.length > 0 ? (
        orderHistory.map((order, orderIndex) => (
          <div key={orderIndex} className="order-card">
            <div className="order-date">주문일자: {new Date().toLocaleDateString()}</div>
            <div className="order-items">
              {order.map((item) => (
                <div key={item.id} className="order-item">
                  <div className="item-image">
                    <img src={item.image_url} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.title}</h3>
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
                    <span className="status-value">결제 완료</span>
                  </div>
          </div>
        ))
      ) : (
        <p className="no-orders">{defaultMessage}</p>
      )}
    </>
  );
}