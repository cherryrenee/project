"use client";
import * as React from "react";
import "../components/Payment/Payment.css";
import { PaymentSummary } from "../components/Payment/PaymentSummary";
import { ShippingForm } from "../components/Payment/ShippingForm";
import { PaymentMethods } from "../components/Payment/PaymentMethods";
import { CustomerForm } from "../components/Payment/CustomerForm";
import { AgreementSection } from "../components/Payment/AgreementSection";
import { PaymentButton } from "../components/Payment/PaymentButton";

export default function PaymentPage() {
  return (
    <main className="payment-main">
      <header className="payment-title">
        결제하기
      </header>

      <section className="payment-section">
        <div className="payment-row">
          <div className="payment-column">
            <PaymentSummary />
          </div>
          <div className="payment-column-right">
            <ShippingForm />
          </div>
        </div>
      </section>

      <section className="payment-section-bottom">
        <div className="payment-row">
          <div className="payment-column">
            <PaymentMethods />
          </div>
          <div className="payment-column-right">
            <CustomerForm />
          </div>
        </div>
      </section>

      <AgreementSection />

      <div className="payment-spacer" />

      <PaymentButton />
    </main>
  );
}
