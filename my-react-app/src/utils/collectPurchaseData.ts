type OrderItem = {
  id: number; // product_id
  price: string; // "10000원" 형태
  quantity: number;
};

type OrderRecord = {
  items: OrderItem[];
  purchase_date: string;
};

type PurchaseRecord = {
  product_id: number;
  quantity: number;
  purchase_date: string;
  total_price: number;
};

export function collectPurchaseData(
  orderHistory: OrderRecord[]
): PurchaseRecord[] {
  return orderHistory.flatMap((order) =>
    order.items.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
      purchase_date: order.purchase_date,
      total_price: parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity,
    }))
  );
}
