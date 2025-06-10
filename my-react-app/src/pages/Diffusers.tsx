import { ProductCard } from "../components/Home/ProductCard";
import "./Diffusers.css";

const diffusers = [
  {
    title: "라벤더 릴렉스 디퓨저",
    description: "천연 라벤더 에센셜 오일을 함유한 디퓨저",
    price: "29,000원"
  },
  {
    title: "시트러스 리프레시 스프레이",
    description: "레몬과 라임의 상쾌한 향기로 공간을 채우는 스프레이",
    price: "15,000원"
  },
  {
    title: "자스민 릴랙스 디퓨저",
    description: "자스민의 부드러운 향기로 편안한 휴식을 선사",
    price: "29,000원"
  },
  {
    title: "시나몬 스파이스 디퓨저",
    description: "시나몬과 바닐라의 따뜻한 향기로 편안한 분위기 조성",
    price: "25,000원"
  },
  {
    title: "오렌지 블라썸 디퓨저",
    description: "오렌지 꽃잎의 상큼한 향기로 공간을 채우는 디퓨저",
    price: "26,000원"
  }
];

const candles = [
  {
    title: "로즈 릴렉스 캔들",
    description: "프리미엄 로즈 에센셜 오일을 사용한 향초",
    price: "35,000원"
  },
  {
    title: "자스민 릴랙스 캔들",
    description: "프리미엄 자스민 에센셜 오일을 사용한 향초",
    price: "32,000원"
  }
];

export default function Diffusers() {
  return (
    <main className="products-page">
      <h1>디퓨저 & 캔들 상품</h1>
      <div className="products-grid">
        {/* 디퓨저 */}
        {diffusers.map((product, index) => (
          <ProductCard
            key={`diffuser-${index}`}
            title={product.title}
            description={product.description}
            price={product.price}
            className="product-grid-item"
          />
        ))}
        {/* 캔들 */}
        {candles.map((product, index) => (
          <ProductCard
            key={`candle-${index}`}
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
