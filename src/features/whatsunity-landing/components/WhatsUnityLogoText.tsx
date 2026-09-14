import React from "react";
import { useTheme } from "@/features/portfolio/presentation/theme/ThemeProvider";

interface WhatsUnityLogoTextProps {
  fontSize?: number | string;
  color?: string;
  whatsColor?: string;
  unityColor?: string;
  className?: string;
}

/**
 * Direct React port of Flutter's WhatsUnityLogoText.
 * Pure typographic logo with Montserrat, weight 500 (Whats) + weight 800 (Unity),
 * and dynamic light/dark mode colors with -0.5px letter-spacing. No icons.
 */
export function WhatsUnityLogoText({
  fontSize,
  color,
  whatsColor,
  unityColor,
  className = "",
}: WhatsUnityLogoTextProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const effectiveWhatsColor =
    color ?? whatsColor ?? (isDark ? "#818CF8" : "#64748B");
  const effectiveUnityColor =
    color ?? unityColor ?? (isDark ? "#2DD4BF" : "#0F172A");

  const sizeStyle =
    fontSize !== undefined
      ? typeof fontSize === "number"
        ? `${fontSize}px`
        : fontSize
      : undefined;

  return (
    <span
      dir="ltr"
      className={`inline-flex items-baseline select-none transition-colors duration-200 ${className}`}
      style={{
        fontFamily: '"Montserrat", sans-serif',
        ...(sizeStyle ? { fontSize: sizeStyle } : {}),
        letterSpacing: "-0.8px",
        lineHeight: 1,
      }}
    >
      <span
        style={{
          fontWeight: 300,
          color: effectiveWhatsColor,
        }}
      >
        Whats
      </span>
      <span
        style={{
          fontWeight: 600,
          color: effectiveUnityColor,
        }}
      >
        Unity
      </span>
    </span>
  );
}

export default WhatsUnityLogoText;
