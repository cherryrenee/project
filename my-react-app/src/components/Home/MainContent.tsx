import React, { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { ProductCard } from "./ProductCard";
import { CartModal } from "../Cart/CartModal";
import { useCart } from "../../context/CartContext";
import supabase from "../../supabaseClient";
import "./Home.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image_url: string;
  category: string;
}

export function MainContent() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      // 향수 1개와 디퓨저 2개를 가져옵니다
      const { data: perfumeData, error: perfumeError } = await supabase
        .from("products")
        .select("*")
        .eq("category", "perfume")
        .limit(1);

      const { data: diffuserData, error: diffuserError } = await supabase
        .from("products")
        .select("*")
        .eq("category", "diffuser")
        .limit(2);

      if (perfumeError) {
        console.error("Error fetching perfume:", perfumeError);
      }
      if (diffuserError) {
        console.error("Error fetching diffusers:", diffuserError);
      }

      const combinedProducts = [
        ...(perfumeData || []),
        ...(diffuserData || []),
      ];

      setFeaturedProducts(combinedProducts);
    };

    fetchFeaturedProducts();
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
    <>
      <HeroSection />
      <main className="main-content">
        <section className="featured-section">
          <h2 className="product-section-title">추천 상품</h2>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.image_url}
                className="featured-product"
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </section>
        {selectedProduct && (
          <CartModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            product={selectedProduct}
            onAddToCart={addItem}
          />
        )}
      </main>
    </>
  );
}

export default MainContent;
