/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (!Number.isFinite(precio) || precio <= 0) throw new RangeError();
  if (!Number.isFinite(descuento) || descuento > 100 || descuento < 0)
    throw new RangeError();
  if (isNaN(precio) || isNaN(descuento)) throw new RangeError();
  return precio - (precio * descuento) / 100;
}
