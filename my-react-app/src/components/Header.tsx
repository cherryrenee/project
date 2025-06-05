import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo">AROMA</Link>
      <button 
        onClick={toggleMenu}
        className={isMenuOpen ? 'header-close-button' : 'header-hamburger-button'}
      >
        {isMenuOpen ? 'X' : '☰'}
      </button>
      <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="header-nav-main">
          <li><Link to="/">홈</Link></li>
          <li><Link to="/products">제품</Link></li>
          <li><Link to="/perfume">향수</Link></li>
          <li><Link to="/diffuser">디퓨저</Link></li>
          <li><Link to="/brand">브랜드</Link></li>
          <li><Link to="/service">고객센터</Link></li>
          <li><Link to="/login">로그인</Link></li>
          <li><Link to="/cart">장바구니</Link></li>
          <li><Link to="/mypage">마이페이지</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
