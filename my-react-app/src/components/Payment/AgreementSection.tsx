"use client";
import * as React from "react";
import { Checkbox } from "./Checkbox";

export function AgreementSection() {
  const [agreements, setAgreements] = React.useState({
    orderInfo: false,
    privacy: false,
  });

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="agreement-section">
      <fieldset>
        <legend className="sr-only">주문 동의 사항</legend>

        <div className="agreement-item">
          <Checkbox
            checked={agreements.orderInfo}
            onChange={() => handleAgreementChange("orderInfo")}
            id="orderInfo"
          />
          <label htmlFor="orderInfo" className="agreement-label">
            주문 내용을 확인했으며, 정보 제공에 동의합니다. (필수)
          </label>
        </div>

        <div className="agreement-item">
          <Checkbox
            checked={agreements.privacy}
            onChange={() => handleAgreementChange("privacy")}
            id="privacy"
          />
          <label htmlFor="privacy" className="agreement-label">
            개인정보 수집·이용 및 제3자 제공에 동의합니다. (필수)
          </label>
        </div>
      </fieldset>
    </section>
  );
}
