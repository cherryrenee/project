import * as React from "react";
import { useCart } from "../../context/CartContext";

interface CartItem {
  id: number;
  title: string;
  price: string;
  quantity: number;
  image_url: string;
}

export function PaymentSummary() {
  const { items } = useCart();

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal >= 50000 ? 0 : 3000; // 5만원 이상 무료배송
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  return (
    <section className="payment-summary">
      <div className="payment-summary-content">
        <div className="payment-summary-title">
          <h2>주문 상품</h2>
        </div>
        {items.map((item) => (
          <div key={item.id} className="payment-product">
            <div 
              className="payment-product-image" 
              style={{ 
                backgroundImage: `url(${item.image_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="payment-product-details">
              <h3 className="payment-product-name">{item.title}</h3>
              <p className="payment-product-description">
                수량: {item.quantity}개
              </p>
              <p className="payment-product-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="payment-summary-total">
        <div className="payment-summary-row">
          <div className="payment-summary-labels">
            <p>상품금액</p>
            <p>배송비</p>
          </div>
          <div className="payment-summary-values">
            <p>{formatPrice(subtotal)}</p>
            <p>{formatPrice(shipping)}</p>
          </div>
        </div>
        <hr className="payment-summary-divider" />
        <div style={{fontSize: '1.25rem'}} className="payment-summary-row">
          <div className="payment-summary-labels">
            <p><strong>총 결제금액</strong></p>
          </div>
          <div className="payment-summary-values">
            <p><strong>{formatPrice(total)}</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}
