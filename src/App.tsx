import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";

export default function App() {
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
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="uppercase">Your order</h2>
        </div>
      </main>
    </>
  );
}
