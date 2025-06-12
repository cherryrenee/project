import React from "react";
import "./Home.css";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  className?: string;
  category?: string;
  onClick?: () => void;
}

export function ProductCard({ id, title, description, price, imageUrl, className = "", category, onClick }: ProductCardProps) {
  return (
    <article className={`product-card ${className}`} onClick={onClick}>
      <div className="product-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="product-info">
        <h3 className="product-title">
          {title}
        </h3>
        <p className="product-description">
          {description}
        </p>
        <p className="product-price">
          {price}
        </p>
      </div>
    </article>
  );
}
