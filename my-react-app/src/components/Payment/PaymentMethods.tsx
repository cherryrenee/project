"use client";
import * as React from "react";
import { RadioButton } from "./RadioButton";

export function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = React.useState("card");

  return (
    <section className="payment-methods">
      <div className="payment-methods-content">
        <div className="payment-methods-main">
          <h2 className="form-title">결제 수단</h2>

          <fieldset className="payment-options">
            <legend className="sr-only">결제 방법 선택</legend>

            <div className="payment-option">
              <RadioButton
                name="paymentMethod"
                value="card"
                checked={selectedMethod === "card"}
                onChange={() => setSelectedMethod("card")}
              />
              <label>신용카드/체크카드</label>
            </div>

            <div className="payment-option">
              <RadioButton
                name="paymentMethod"
                value="transfer"
                checked={selectedMethod === "transfer"}
                onChange={() => setSelectedMethod("transfer")}
              />
              <label>실시간 계좌이체</label>
            </div>
          </fieldset>
        </div>

        <div className="payment-option-single">
          <RadioButton
            name="paymentMethod"
            value="kakaopay"
            checked={selectedMethod === "kakaopay"}
            onChange={() => setSelectedMethod("kakaopay")}
          />
          <label>카카오페이</label>
        </div>
      </div>

      <div className="payment-security">
        안전한 결제를 위해 SSL 보안이 적용됩니다.
        <br />
        개인정보는 암호화되어 처리되며, 결제 정보는 저장되지 않습니다.
      </div>
    </section>
  );
}
