import { ProductCard } from "../components/Home/ProductCard";
import "./Products.css";

const products = [
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
    title: "로즈 릴렉스 캔들",
    description: "프리미엄 로즈 에센셜 오일을 사용한 향초",
    price: "35,000원"
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
  },
  {
    title: "오렌지 블라썸 디퓨저",
    description: "오렌지 꽃잎의 상큼한 향기로 공간을 채우는 디퓨저",
    price: "26,000원"
  },
  {
    title: "자스민 릴랙스 캔들",
    description: "프리미엄 자스민 에센셜 오일을 사용한 향초",
    price: "32,000원"
  }
];

export default function Products() {
  return (
    <main className="products-page">
      <h1>상품 목록</h1>
      <div className="products-grid">
        {products.map((product, index) => (
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