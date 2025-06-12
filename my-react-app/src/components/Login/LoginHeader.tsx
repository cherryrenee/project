import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";


function LoginHeader() {
  return (
    <header className="login-header">
      <Link to="/" className='header-logo'>AROMA</Link>
      <Link to="/">
        <button>← 홈으로 돌아가기</button>
      </Link>
    </header>
  );
}

export default LoginHeader;
