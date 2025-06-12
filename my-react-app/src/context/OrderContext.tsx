import React, { createContext, useContext, useState } from 'react';

interface OrderItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface OrderContextType {
  completedOrder: OrderItem[] | null;
  setCompletedOrder: (items: OrderItem[] | null) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [completedOrder, setCompletedOrder] = useState<OrderItem[] | null>(null);

  return (
    <OrderContext.Provider value={{ completedOrder, setCompletedOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
} 