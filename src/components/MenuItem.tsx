import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <button className="border-2 border-amber-950 hover:bg-amber-200 w-full p-3 flex justify-between hover:cursor-pointer">
      <p>{item.name}</p>
      <p className="font-black">{item.price} €</p>
    </button>
  );
}
