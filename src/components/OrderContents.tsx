import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Your Order</h2>

      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#241711] p-1.5 flex items-center justify-center shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Quantity: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer shrink-0"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
