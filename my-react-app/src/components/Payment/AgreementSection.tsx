"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { useAgreement } from "../../context/AgreementContext";

export function AgreementSection() {
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    payment: false
  });
  const { setIsAllChecked, showError } = useAgreement();

  useEffect(() => {
    const allChecked = Object.values(agreements).every(value => value);
    setIsAllChecked(allChecked);
  }, [agreements, setIsAllChecked]);

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAgreements({
      terms: isChecked,
      privacy: isChecked,
      payment: isChecked
    });
  };

  const handleSingleCheck = (key: keyof typeof agreements) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreements(prev => ({
      ...prev,
      [key]: e.target.checked
    }));
  };

  return (
    <section className="agreement-section">
      <div className="agreement-item">
        <input
          type="checkbox"
          id="check-all"
          className="checkbox"
          checked={Object.values(agreements).every(value => value)}
          onChange={handleCheckAll}
        />
        <label htmlFor="check-all" className="agreement-label">
          <strong>전체 동의</strong>
        </label>
      </div>

      <div className="agreement-item">
        <input
          type="checkbox"
          id="terms"
          className="checkbox"
          checked={agreements.terms}
          onChange={handleSingleCheck('terms')}
        />
        <label htmlFor="terms" className="agreement-label">
          이용약관 동의 (필수)
        </label>
      </div>

      <div className="agreement-item">
        <input
          type="checkbox"
          id="privacy"
          className="checkbox"
          checked={agreements.privacy}
          onChange={handleSingleCheck('privacy')}
        />
        <label htmlFor="privacy" className="agreement-label">
          개인정보 수집 및 이용 동의 (필수)
        </label>
      </div>

      <div className="agreement-item">
        <input
          type="checkbox"
          id="payment"
          className="checkbox"
          checked={agreements.payment}
          onChange={handleSingleCheck('payment')}
        />
        <label htmlFor="payment" className="agreement-label">
          결제 진행 동의 (필수)
        </label>
      </div>
      
      {showError && <p className="agreement-error">동의 체크 필수</p>}
    </section>
  );
}
