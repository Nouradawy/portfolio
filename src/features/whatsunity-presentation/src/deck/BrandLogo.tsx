import React from "react";
import logoImg from "../assets/logo.png";

interface BrandLogoProps {
  size?: number;
  className?: string;
  withText?: boolean;
  theme?: "white" | "dark";
  showSubtitle?: boolean;
}

export default function BrandLogo({
  size = 36,
  className = "",
  withText = true,
  theme = "dark",
  showSubtitle = false,
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl"
        style={{
          width: size,
          height: size,
          background: theme === "white" ? "rgba(0, 168, 102, 0.06)" : "rgba(255, 255, 255, 0.05)",
          border: theme === "white" ? "1px solid rgba(0, 168, 102, 0.2)" : "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <img
          src={logoImg}
          alt="WhatsUnity"
          className="h-full w-full object-contain p-0.5"
          style={{
            filter:
              theme === "white"
                ? "drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                : "drop-shadow(0 2px 6px rgba(0,226,138,0.25))",
          }}
        />
      </div>

      {withText && (
        <div className="flex flex-col leading-none">
          <span
            dir="ltr"
            className="text-base font-extrabold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: theme === "white" ? "#0f172a" : "#ffffff",
            }}
          >
            Whats<span style={{ color: "#00e28a" }}>Unity</span>
          </span>
          {showSubtitle && (
            <span
              dir="ltr"
              className="mt-0.5 text-[9.5px] tracking-[0.2em] font-semibold"
              style={{
                fontFamily: "var(--font-mono)",
                color: theme === "white" ? "#64748b" : "rgba(255, 255, 255, 0.4)",
              }}
            >
              COMPOUND OS
            </span>
          )}
        </div>
      )}
    </div>
  );
}
