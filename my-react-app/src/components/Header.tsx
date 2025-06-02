import * as React from "react";

export function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">
        AROMA
      </h1>
      <nav className="header-nav">
        <ul className="header-nav-main">
          <li>홈</li>
          <li>제품</li>
          <li>향수</li>
          <li>디퓨저</li>
          <li>브랜드</li>
          <li>고객센터</li>
        </ul>
        <ul className="header-nav-user">
          <li>로그인</li>
          <li>장바구니</li>
          <li>마이페이지</li>
        </ul>
      </nav>
      <button className="header-menu-button">☰</button>
    </header>
  );
}
