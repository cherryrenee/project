"use client";
import React from 'react';
import { useState } from "react";
import InputField from "./InputField";
import SocialLoginButtons from "../components/SocialLoginButtons";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <section className="login-form">
      <h2>로그인</h2>
      <p className="login-form-subtitle">
        AROMA 계정으로 향기로운 쇼핑을 시작하세요
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="이메일"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={setEmail}
          isFirst={true}
        />

        <InputField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={setPassword}
          isFirst={false}
        />

        <div className="login-options">
          <label className="auto-login-label">
            <input
              type="checkbox"
              checked={autoLogin}
              onChange={(e) => setAutoLogin(e.target.checked)}
              className="auto-login-checkbox"
            />
            <span className="checkbox-icon">
              {autoLogin ? "☑" : "☐"}
            </span>
            자동 로그인
          </label>
          <button type="button" className="forgot-password">
            비밀번호 찾기
          </button>
        </div>

        <button type="submit" className="login-button">
          로그인
        </button>
      </form>

      <div className="social-divider">
        ──────────── 또는 ────────────
      </div>

      <SocialLoginButtons />
    </section>
  );
}

export default LoginForm;
