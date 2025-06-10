"use client";
import * as React from "react";

export function PaymentButton() {
  const handlePayment = () => {
    // Payment logic would go here
    console.log("Processing payment...");
  };

  return (
    <button
      onClick={handlePayment}
      className="payment-button"
    >
      32,000원 결제하기
    </button>
  );
}
