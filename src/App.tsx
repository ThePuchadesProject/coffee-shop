import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
export default function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-yellow-950 py-5">
        <h1 className="text-center text-4xl text-white font-bold flex justify-center items-center gap-3">
          <img src="/img/coffee-shop.png" alt="Coffee Shop Logo" className="w-12 h-12 object-contain" />
          Coffee Shop
        </h1>
      </header>

      <main className="bg-amber-50 max-w-7xl mx-auto py-20 grid  md:grid-cols-2 justify-center">
        <div className="p-5">
          <h2 className="text-3xl uppercase font-black">Coffee Menu</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />

              <TipPercentageForm setTip={setTip} tip={tip} />

              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">The order is empty</p>
          )}
        </div>
      </main>
    </>
  );
}
