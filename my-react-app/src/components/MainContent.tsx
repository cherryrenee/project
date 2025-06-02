import React from 'react';

const MainContent: React.FC = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">향기로운 당신의 일상</h2>
          <p className="hero-description">AROMA와 함께하는 특별한 순간</p>
          <button className="hero-button">자세히 보기</button>
        </div>
      </section>
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
          <div className="product-card hidden-md">
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