import * as React from "react";
import { FormInput } from "./FormInput";

export function CustomerForm() {
  return (
    <section className="form-section-white">
      <h2 className="form-title">
        주문자 정보
      </h2>

      <form className="form-container-small">
        <FormInput placeholder="주문자 성함" />
        <FormInput placeholder="이메일 주소 (주문 확인용)" />
      </form>
    </section>
  );
}
