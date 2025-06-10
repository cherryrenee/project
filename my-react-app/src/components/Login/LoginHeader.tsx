import React from 'react';
import { Link } from 'react-router-dom';

function LoginHeader() {
  return (
    <header className="login-header">
      <h1>AROMA</h1>
      <Link to="/">
        <button>← 홈으로 돌아가기</button>
      </Link>
    </header>
  );
}

export default LoginHeader;
