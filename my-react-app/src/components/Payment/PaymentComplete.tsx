import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useOrder } from "../../context/OrderContext";
import "./Payment.css";

export default function PaymentComplete() {
  const { items, clearCart } = useCart();
  const { addOrder, clearOrder, isProcessing } = useOrder();
  const hasOrdered = useRef(false);
  // 컴포넌트가 마운트될 때 한 번만 주문을 추가
  useEffect(() => {
    console.log("PaymentComplete useEffect 실행", items);
    if (!hasOrdered.current && items && items.length > 0 && !isProcessing) {
      addOrder(items);
      clearCart();
      hasOrdered.current = true;
    }
  }, []);

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
