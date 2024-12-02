import { useEffect } from "react";
import { ColorScheme } from "@/type/tenantData";

// Función para convertir HEX a HSL
const hexToHsl = (hex: string): string => {
  // Asegúrate de que el formato HEX esté correcto
  const regex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;
  if (!regex.test(hex)) {
    console.error(`El valor HEX no es válido: ${hex}`);
    return hex;
  }

  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }

  // Convertir el HEX a valores RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Encontrar el valor máximo y mínimo de RGB
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number;
  const l: number = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  const hue = Math.round(h * 360);
  const saturation = Math.round(s * 100);
  const lightness = Math.round(l * 100);

  return `${hue} ${saturation}% ${lightness}%`;
};

export const useTenantTheme = (colors: ColorScheme | undefined): void => {
  useEffect(() => {
    if (colors) {
      const root = document.documentElement;
      // Validar y convertir colores HEX a HSL, y establecer las propiedades CSS
      root.style.setProperty(
        "--color-primary",
        hexToHsl(colors.primary.background),
      );
      root.style.setProperty(
        "--color-primary-text",
        hexToHsl(colors.primary.text),
      );
      root.style.setProperty(
        "--color-secondary",
        hexToHsl(colors.secondary.background),
      );
      root.style.setProperty(
        "--color-secondary-text",
        hexToHsl(colors.secondary.text),
      );
      root.style.setProperty(
        "--color-tertiary",
        hexToHsl(colors.tertiary.background),
      );
      root.style.setProperty(
        "--color-tertiary-text",
        hexToHsl(colors.tertiary.text),
      );
    }
  }, [colors]);
};
