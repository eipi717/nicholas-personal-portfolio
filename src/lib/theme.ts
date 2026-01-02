export type ThemeName = "blue" | "emerald";
export type AppearanceName = "dark" | "light";

// Pre-declared Tailwind classes to avoid dynamic `bg-${theme}` strings breaking the build.
export const themeStyles: Record<
  ThemeName,
  {
    accentText: string;
    accentBg: string;
    accentBorder: string;
    accentBgSoft: string;
    accentGlow: string;
    primaryButton: string;
    primaryButtonHover: string;
    accentBorderHover: string;
    focusRing: string;
  }
> = {
  blue: {
    accentText: "text-blue-400",
    accentBg: "bg-blue-500",
    accentBorder: "border-blue-500/30",
    accentBgSoft: "bg-blue-500/10",
    accentGlow: "bg-blue-600/20",
    primaryButton: "bg-blue-600",
    primaryButtonHover: "hover:bg-blue-500",
    accentBorderHover: "hover:border-blue-500/50",
    focusRing: "focus-visible:ring-blue-500/60",
  },
  emerald: {
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500",
    accentBorder: "border-emerald-500/30",
    accentBgSoft: "bg-emerald-500/10",
    accentGlow: "bg-emerald-600/20",
    primaryButton: "bg-emerald-600",
    primaryButtonHover: "hover:bg-emerald-500",
    accentBorderHover: "hover:border-emerald-500/50",
    focusRing: "focus-visible:ring-emerald-500/60",
  },
};

export function getThemeStyles(theme: ThemeName) {
  return themeStyles[theme];
}

export function getAppearanceStyles(appearance: AppearanceName) {
  const isLight = appearance === "light";
  return {
    page: isLight ? "bg-slate-50 text-slate-950" : "bg-slate-950 text-slate-200",
    card: isLight ? "bg-white/90 border-slate-200 text-slate-900" : "bg-slate-950/80 border-slate-800 text-slate-200",
    panel: isLight ? "bg-white/80 border-slate-200" : "bg-slate-900/70 border-slate-800",
    muted: isLight ? "text-slate-600" : "text-slate-400",
    strong: isLight ? "text-slate-900" : "text-white",
    subPanel: isLight ? "bg-slate-100/80 border-slate-200" : "bg-slate-900/60 border-slate-800",
    surfaceHover: isLight ? "hover:border-slate-300" : "hover:border-slate-700",
    focusRingOffset: isLight ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-950",
  };
}
