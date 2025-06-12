import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo">AROMA</Link>
      <button 
        onClick={toggleMenu}
        className={isMenuOpen ? 'header-close-button' : 'header-hamburger-button'}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="header-nav-main">
          <li><Link to="/" onClick={handleLinkClick}>홈</Link></li>
          <li><Link to="/products" onClick={handleLinkClick}>상품</Link></li>
          <li><Link to="/perfumes" onClick={handleLinkClick}>향수</Link></li>
          <li><Link to="/diffusers" onClick={handleLinkClick}>디퓨저</Link></li>
          <li><Link to="/login" onClick={handleLinkClick}>로그인</Link></li>
          <li><Link to="/cart" onClick={handleLinkClick} className="nav-link">장바구니</Link></li>
          <li><Link to="/mypage" onClick={handleLinkClick} className="nav-link">마이페이지</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
