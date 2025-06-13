import React from "react";
import { Identity } from "../components/MyPage/Identity";
import { CurrentOrder } from "../components/MyPage/CurrentOrder";
import "./MyPage.css";
import { useOrder } from "../context/OrderContext";
import { collectPurchaseData } from "../utils/collectPurchaseData";

function MyPage() {
  const { orderHistory } = useOrder();
  const purchaseRecords = collectPurchaseData(orderHistory);
  console.log(purchaseRecords);

  // 실제 구현시에는 사용자 정보를 상태나 context에서 가져올 수 있습니다
  const mockUser = {
    username: "고객",
    points: 1000,
  };

  return (
    <div className="mypage-container">
      <h1 className="mypage-title">마이페이지</h1>
      <Identity username={mockUser.username} points={mockUser.points} />
      <CurrentOrder />
    </div>
  );
}

export default MyPage;
