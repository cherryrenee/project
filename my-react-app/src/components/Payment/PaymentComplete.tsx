import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useOrder } from "../../context/OrderContext";
import "./Payment.css";
import supabase from "../../supabaseClient";
import { collectPurchaseData } from "../../utils/collectPurchaseData";

export default function PaymentComplete() {
  const { items, clearCart } = useCart();
  const { addOrder, clearOrder, isProcessing, orderHistory } = useOrder();
  const hasOrdered = useRef(false);
  // 컴포넌트가 마운트될 때 한 번만 주문을 추가
  useEffect(() => {
    console.log("PaymentComplete useEffect 실행", items);
    if (!hasOrdered.current && items && items.length > 0 && !isProcessing) {
      addOrder(items);
      clearCart();
      hasOrdered.current = true;

      // supabase로 구매 데이터 저장
      const purchase_date = new Date().toISOString().split("T")[0];
      const purchaseRecords = items.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        purchase_date,
        total_price:
          parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity,
      }));

      // 테이블명은 실제 supabase 테이블명으로 변경
      supabase
        .from("purchases")
        .insert(purchaseRecords)
        .then(({ error }) => {
          if (error) {
            console.error("Supabase insert error:", error);
          }
        });

      // 2. 구매 제품 데이터(id, name, price(숫자)) 저장
      const productRecords = items.map((item) => ({
        id: item.id,
        name: item.title,
        price: parseInt(item.price.replace(/[^0-9]/g, "")), // 숫자로 변환
      }));

      supabase
        .from("purchased_products") // 실제 구매 제품 테이블명
        .insert(productRecords)
        .then(({ error }) => {
          if (error) {
            console.error("Supabase insert error:", error);
          }
        });
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
