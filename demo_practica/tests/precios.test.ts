import { describe, expect, it } from "vitest";
import { calcularPrecioFinal } from "../src/services/precios.ts";

describe("calcularPrecioFinal", () => {
  it("aplica un descuento del 10 %", () => {
    expect(calcularPrecioFinal(1000, 10)).toBe(900);
  });

  it("conserva el precio si el descuento es cero", () => {
    expect(calcularPrecioFinal(1000, 0)).toBe(1000);
  });
  it("devuelve cero con un descuento del 100 %", () => {
    expect(calcularPrecioFinal(1000, 100)).toBe(0);
  });

  it("rechaza descuentos superiores al 100 %", () => {
    expect(() => calcularPrecioFinal(1000, 150)).toThrow(RangeError);
  });
  it("rechazar precio menor a cero", () => {
    expect(() => calcularPrecioFinal(-100, 10)).toThrow(RangeError);
  });
  it("rechazar descuentos menores a cero", () => {
    expect(() => calcularPrecioFinal(1000, -10)).toThrow(RangeError);
  });
  it("recha precios que no sea numeros", () => {
    expect(() => calcularPrecioFinal(NaN, 80)).toThrow(RangeError);
  });
});
