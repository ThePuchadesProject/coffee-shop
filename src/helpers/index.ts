// Creo un formato de moneda para evitar repetirlo en todo el código
const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

// Función que formatea el número según la configuración
export function formatCurrency(quantity: number): string {
  return currencyFormatter.format(quantity);
}
