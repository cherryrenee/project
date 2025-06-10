import React from 'react';
import { HeroSection } from './HeroSection';

const MainContent: React.FC = () => {
  return (
    <>
    <HeroSection />
      <section className="product-section">
        <h2 className="product-section-title">베스트 상품</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3 className="product-title">천연 향수</h3>
              <p className="product-description">100% 자연에서 온 향기</p>
              <p className="product-price">89,000원</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3 className="product-title">수제작 향수</h3>
              <p className="product-description">장인의 손길로 만드는 향수</p>
              <p className="product-price">129,000원</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3 className="product-title">맞춤 향수</h3>
              <p className="product-description">당신만을 위한 특별한 향기</p>
              <p className="product-price">159,000원</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3 className="product-title">시그니처 향수</h3>
              <p className="product-description">AROMA의 시그니처 향기</p>
              <p className="product-price">199,000원</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent; 