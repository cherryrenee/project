import * as React from "react";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const products = [
    {
      title: "라벤더 릴렉스 디퓨저",
      description: "편안한 수면을 위한 라벤더 향",
      price: "29,000원"
    },
    {
      title: "시트러스 프레시 디퓨저",
      description: "상쾌한 아침을 위한 시트러스 향",
      price: "32,000원"
    },
    {
      title: "우드 앤 머스크 디퓨저",
      description: "고급스러운 우드 머스크 향",
      price: "45,000원"
    },
    {
      title: "플로럴 가든 디퓨저",
      description: "화사한 꽃향기로 가득한 공간",
      price: "38,000원"
    }
  ];

  return (
    <section className="product-section">
      <h2 className="product-section-title">
        인기 디퓨저
      </h2>
      <div className="product-grid">
        <ProductCard
          title={products[0].title}
          description={products[0].description}
          price={products[0].price}
        />
        <ProductCard
          title={products[1].title}
          description={products[1].description}
          price={products[1].price}
        />
        <ProductCard
          title={products[2].title}
          description={products[2].description}
          price={products[2].price}
          className="hidden-md"
        />
        <ProductCard
          title={products[3].title}
          description={products[3].description}
          price={products[3].price}
          className="hidden-lg"
        />
      </div>
    </section>
  );
}
