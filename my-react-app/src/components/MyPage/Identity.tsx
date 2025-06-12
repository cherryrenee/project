import React from "react";
import "./Identity.css";
import { useOrder } from "../../context/OrderContext";

interface IdentityProps {
  username?: string;
  points?: number;
}

export function Identity({ username = "고객", points = 0 }: IdentityProps) {
  const { orderHistory } = useOrder(); // 추가
  const orderCount = orderHistory.length; // 주문/배송 건수

  const sections = [
    {
      title: "포인트",
      value: `${points.toLocaleString()}P`,
      icon: "💰",
    },
    {
      title: "주문/배송",
      value: `${orderCount}건`,
      icon: "📦",
    },
    {
      title: "리뷰",
      value: "0건",
      icon: "✍️",
    },
    {
      title: "나의 문의",
      value: "0건",
      icon: "💭",
    },
  ];

  return (
    <div className="identity-container">
      <div className="identity-welcome">
        <h2 className="welcome-text">어서오세요, {username}님!</h2>
        <p className="welcome-subtext">오늘도 향기로운 하루되세요</p>
      </div>

      <div className="identity-sections">
        {sections.map((section, index) => (
          <div key={index} className="identity-section">
            <div className="section-icon">{section.icon}</div>
            <div className="section-content">
              <h3 className="section-title">{section.title}</h3>
              <p className="section-value">{section.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
