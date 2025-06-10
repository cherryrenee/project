import * as React from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <video className="hero-video" autoPlay loop muted>
        <source src="/diffuservideo.mp4" type="video/mp4" />
        <source src="/diffuservideo.webm" type="video/webm" />
        <source src="/diffuservideo.ogv" type="video/ogg" />
      </video>
      <div className="hero-content">
        <h2 className="hero-title">
          향기로운 공간을 만드는 프리미엄 디퓨저
        </h2>
        <p className="hero-description">
          집, 사무실, 카페... 어디든 당신만의 특별한 향을 만들어보세요
        </p>
        <Link to="/products" className="hero-button">
          제품 둘러보기
        </Link>
      </div>
    </section>
  );
}
