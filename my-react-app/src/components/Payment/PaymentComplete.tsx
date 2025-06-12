import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useOrder } from '../../context/OrderContext';
import { CartItem } from '../../context/CartContext';
import './Payment.css';

export default function PaymentComplete() {
  const { items, clearCart } = useCart();
  const { addOrder, clearOrder, isProcessing } = useOrder();

  // 컴포넌트가 마운트될 때 한 번만 주문을 추가
  useEffect(() => {
    if (items && items.length > 0 && !isProcessing) {
      addOrder(items);
      clearCart();
    }
  }, [items, addOrder, clearCart, isProcessing]);

  // 페이지 이동 시 주문 상태 초기화
  const handleNavigate = () => {
    clearOrder();
  };

  return (
    <div className="payment-complete">
      <div className="payment-complete-content">
        <div className="check-icon">✔</div>
        <h1>결제 완료되었습니다.</h1>
        <p>주문하신 상품의 결제가 정상적으로 완료되었습니다.</p>
        <Link to="/" onClick={handleNavigate} className="home-button">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );

} 