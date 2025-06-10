import * as React from "react";
import { FormInput } from "./FormInput";

export function ShippingForm() {
  return (
    <section className="form-section">
      <h2 className="form-title">
        배송 정보
      </h2>

      <form className="form-container">
        <FormInput placeholder="받는 분 성함" />
        <FormInput placeholder="휴대폰 번호" />
        <FormInput placeholder="배송 주소" />
        <FormInput placeholder="상세주소 (동, 호수 등)" />
      </form>
    </section>
  );
}
