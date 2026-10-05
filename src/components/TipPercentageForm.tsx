import type { ActionDispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  tip: number;
  dispatch: ActionDispatch<[action: OrderActions]>;
};
export default function TipPercentageForm({
  tip,
  dispatch,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Add a tip:</h3>

      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>

            <input
              id={tipOption.id}
              type="radio"
              name="tipOption"
              value={tipOption.value}
              onChange={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +e.target.value },
                })
              } // El + convierte rapidamente de string a number
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
