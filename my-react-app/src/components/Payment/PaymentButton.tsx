"use client";
import * as React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAgreement } from "../../context/AgreementContext";
import { useOrder } from "../../context/OrderContext";

export function PaymentButton() {
  const { items } = useCart();
  const navigate = useNavigate();
  const { isAllChecked, setShowError } = useAgreement();
  const { setCompletedOrder } = useOrder();

  const calculateTotal = () => {
    const subtotal = items.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + (price * item.quantity);
    }, 0);
    const shipping = subtotal >= 50000 ? 0 : 3000;
    return subtotal + shipping;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  const handlePayment = () => {
    if (!isAllChecked) {
      setShowError(true);
      // 에러 메시지가 보이도록 스크롤
      const agreementSection = document.querySelector('.agreement-section');
      if (agreementSection) {
        agreementSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    setShowError(false);
    // 결제 처리 시뮬레이션
    const orderItems = items.map(item => ({
      id: item.id,
      name: item.title,
      price: formatPrice(parseInt(item.price.replace(/[^0-9]/g, ''))),
      quantity: item.quantity,
      image: item.image_url
    }));
    setCompletedOrder(orderItems);
    
    setTimeout(() => {
      navigate('/payment/complete');
    }, 1000);
  };

  return (
    <button className="payment-button" onClick={handlePayment}>
      {formatPrice(calculateTotal())} 결제하기
    </button>
  );
}
