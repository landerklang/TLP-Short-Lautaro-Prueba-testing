/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (!Number.isFinite(precio) || precio <= 0) throw new RangeError();
  if (descuento > 100) throw new RangeError();
  return precio - (precio * descuento) / 100;
}
