import * as React from "react";
import "./Login.css";


function SocialLoginButtons() {
  const handleKakaoLogin = () => {
    // Handle Kakao login logic
  };

  const handleNaverLogin = () => {
    // Handle Naver login logic
  };

  return (
    <div className="social-buttons">
      <button onClick={handleKakaoLogin} className="kakao-button">
        카카오 로그인
      </button>
      <button onClick={handleNaverLogin} className="naver-button">
        네이버 로그인
      </button>
    </div>
  );
}

export default SocialLoginButtons;
