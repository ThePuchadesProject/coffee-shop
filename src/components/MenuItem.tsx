import type { ActionDispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: ActionDispatch<[action: OrderActions]>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="border-2 border-amber-950 hover:bg-amber-200 w-full p-3 flex flex-col hover:cursor-pointer transition-colors"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <div className="bg-[#241711] w-full aspect-square rounded-xl p-3 flex items-center justify-center overflow-hidden mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between text-left w-full">
        <div>
          <span className="text-sm font-semibold text-amber-800">
            {item.price} €
          </span>
          <h3 className="font-bold text-gray-900 text-base leading-tight mt-1">
            {item.name}
          </h3>
          <p className="text-xs text-gray-700 mt-1.5 leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>
    </button>
  );
}
