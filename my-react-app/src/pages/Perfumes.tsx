import React, { useState, useEffect } from 'react';
import { ProductCard } from "../components/Home/ProductCard";
import { CartModal } from "../components/Cart/CartModal";
import { useCart } from "../context/CartContext";
import supabase from "../supabaseClient";
import "./Perfumes.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image_url: string;
  category: string;
}

export default function Perfumes() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'perfume');
      
      if (error) {
        console.error('Error fetching perfumes:', error);
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
    <main className="perfumes-page">
      <h1>향수 제품</h1>
      <div className="perfumes-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.image_url}
            className="perfumes-grid-item"
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
