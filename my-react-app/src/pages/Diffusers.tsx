import React, { useState, useEffect } from 'react';
import { ProductCard } from "../components/Home/ProductCard";
import { CartModal } from "../components/Cart/CartModal";
import { useCart } from "../context/CartContext";
import supabase from "../supabaseClient";
import "./Diffusers.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image_url: string;
  category: string;
}

export default function Diffusers() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .in('category', ['diffuser', 'candle', 'spray']);
      
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data || []);
      }
    };

    fetchProducts();
  }, []);

  // 카테고리별로 제품 필터링
  const diffusers = products.filter(product => product.category === 'diffuser');
  const candles = products.filter(product => product.category === 'candle');
  const sprays = products.filter(product => product.category === 'spray');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className="diffusers-page">
      <h1>디퓨저 & 캔들 상품</h1>
      <div className="diffusers-grid">
        {/* 디퓨저 */}
        <h2 className="category-title">디퓨저</h2>
        <div className="category-grid">
          {diffusers.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.image_url}
              className="diffusers-grid-item"
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* 스프레이 */}
        <h2 className="category-title">스프레이</h2>
        <div className="category-grid">
          {sprays.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.image_url}
              className="diffusers-grid-item"
            />
          ))}
        </div>

        {/* 캔들 */}
        <h2 className="category-title">캔들</h2>
        <div className="category-grid">
          {candles.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.image_url}
              className="diffusers-grid-item"
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <CartModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
          onAddToCart={addItem}
        />
      )}
    </main>
  );
}
