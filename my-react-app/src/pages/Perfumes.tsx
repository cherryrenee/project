import { ProductCard } from "../components/Home/ProductCard";
import "./Perfumes.css";

const perfumes = [
  {
    title: "피치 블로섬 향수",
    description: "피치와 꽃잎의 달콤한 향기로 매력적인 향수",
    price: "45,000원"
  },
  {
    title: "그린 티 향수",
    description: "자연 그대로의 녹차 향기로 우아한 향수",
    price: "40,000원"
  },
  {
    title: "바닐라 릴랙스 향수",
    description: "바닐라의 달콤하고 편안한 향기로 매력적인 향수",
    price: "43,000원"
  }
];

export default function Perfumes() {
  return (
    <main className="products-page">
      <h1>향수 상품</h1>
      <div className="products-grid">
        {perfumes.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
            className="product-grid-item"
          />
        ))}
      </div>
    </main>
  );
}
