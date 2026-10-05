import { useCallback, type ActionDispatch } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import type { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: ActionDispatch<[action: OrderActions]>;
};

export default function OrderTotals({
  order,
  tip,
  dispatch,
}: OrderTotalsProps) {
  const subTotalAmount = useCallback(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order],
  );
  const tipAmount = useCallback(() => subTotalAmount() * tip, [tip, order]);

  const totalAmount = useCallback(
    () => subTotalAmount() + tipAmount(),
    [order, tip],
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Order Summary:</h2>
        <p>
          Subtotal:{""}{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount())}</span>
        </p>

        <p>
          Tip:{""}{" "}
          <span className="font-bold">{formatCurrency(tipAmount())}</span>
        </p>

        <p>
          Total:{""}{" "}
          <span className="font-bold">{formatCurrency(totalAmount())}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 cursor-pointer disabled:opacity-10"
        disabled={totalAmount() === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Place Order
      </button>
    </>
  );
}
