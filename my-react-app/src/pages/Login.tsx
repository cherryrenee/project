"use client";
import * as React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import {Footer} from "../components/Footer";

function Login() {
  return (
    <div className="login-page">
      <LoginHeader />
      <main className="login-form-container">
        <LoginForm />
        <div className="signup-section">
          <p className="signup-text">
            아직 계정이 없으신가요?
          </p>
          <button className="signup-link">
            회원가입
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
