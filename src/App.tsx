import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

export default function App() {
  const { order, addItem } = useOrder();
  return (
    <>
      <header className="bg-yellow-950 py-5">
        <h1 className="text-center text-4xl text-white font-bold">
          Coffee Shop
        </h1>
      </header>

      <main className="bg-amber-50 max-w-7xl mx-auto py-20 grid  md:grid-cols-2 justify-center">
        <div className="p-5">
          <h2 className="text-3xl uppercase font-black">Coffee Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} />
        </div>
      </main>
    </>
  );
}
