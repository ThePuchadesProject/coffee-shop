import type { MenuItem, OrderItem } from "../types";

// Defino las acciones que puede recibir mi reducer
export type OrderActions =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "place-order" }
  | { type: "add-tip"; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};
export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions,
) => {
  if (action.type === "add-item") {
    // Busco si el producto ya existe en el carrito
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id,
    );
    let updatedOrder: OrderItem[] = [];
    if (itemExist) {
      // Si existe, incremento su cantidad en 1
      updatedOrder = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem,
      );
    } else {
      // Si no existe, lo añado como nuevo artículo
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      updatedOrder = [...state.order, newItem];
    }
    return { ...state, order: updatedOrder };
  }

  if (action.type === "remove-item") {
    // Elimino el producto filtrando todos menos el que coincide con el ID
    let updatedOrder: OrderItem[] = [];
    updatedOrder = state.order.filter((item) => item.id !== action.payload.id);
    return { ...state, order: updatedOrder };
  }

  if (action.type === "place-order") {
    // Vacío el carrito y reinicio la propina al realizar el pedido
    return { ...state, order: [], tip: 0 };
  }

  if (action.type === "add-tip") {
    // Actualizo el valor de la propina seleccionada
    const tip = action.payload.value;
    return { ...state, tip };
  }

  return state;
};
