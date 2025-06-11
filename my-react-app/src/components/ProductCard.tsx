import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  className?: string;
}

export function ProductCard({ title, description, price, className = "" }: ProductCardProps) {
  return (
    <article className={`product-card ${className}`}>
      <div className="product-image" />
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
