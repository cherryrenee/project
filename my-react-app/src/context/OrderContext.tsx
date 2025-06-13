import React, { createContext, useContext, useState } from "react";

interface OrderItem {
  id: number;
  title: string;
  price: string;
  quantity: number;
  image_url: string;
}

interface OrderRecord {
  items: OrderItem[];
  purchase_date: string; // 주문일자 추가
}

interface OrderContextType {
  orderHistory: OrderRecord[];
  addOrder: (items: OrderItem[]) => void;
  clearOrder: () => void;
  isProcessing: boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orderHistory, setOrderHistory] = useState<OrderRecord[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addOrder = (items: OrderItem[]) => {
    console.log("addOrder 호출", items);
    const purchase_date = new Date().toISOString().split("T")[0];
    if (!isProcessing) {
      setIsProcessing(true);
      setOrderHistory((prev) => [...prev, { items, purchase_date }]);
      // 페이지 이동 시 주문 상태 초기화
      setTimeout(() => {
        setIsProcessing(false);
      }, 500);
    }
  };

  const clearOrder = () => {
    setIsProcessing(false);
    setOrderHistory([]);
  };

  return (
    <OrderContext.Provider
      value={{ orderHistory, addOrder, clearOrder, isProcessing }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
