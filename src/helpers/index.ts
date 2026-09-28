const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

export function formatCurrency(quantity: number): string {
  return currencyFormatter.format(quantity);
}
