import React, { useState, useEffect } from "react";
import { ProductCard } from "../components/Home/ProductCard";
import { CartModal } from "../components/Cart/CartModal";
import { useCart } from "../context/CartContext";
import supabase from "../supabaseClient";
import "./Products.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image_url: string; // 예시: 제품 이미지 URL 추가 (필요한 경우)
}

interface CartItem {
  id: number;
  title: string;
  price: string;
  quantity: number;
  image_url: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItem } = useCart();
  
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className="products-page">
      <h1>전체 상품</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.image_url}
            className="product-grid-item"
            onClick={() => handleProductClick(product)}
          />
        ))}
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