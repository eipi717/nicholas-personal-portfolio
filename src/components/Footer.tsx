"use client";

import { useMode } from "@/context/ModeContext";
import { getAppearanceStyles } from "@/lib/theme";
import clsx from "clsx";

export default function Footer() {
  const { appearance } = useMode();
  const appearanceClasses = getAppearanceStyles(appearance);

  return (
    <footer
      className={clsx(
        "py-8 text-center text-sm border-t transition-colors",
        appearance === "light" ? "border-slate-200 bg-slate-50 text-slate-600" : "border-slate-800 bg-slate-950 text-slate-500"
      )}
    >
      © {new Date().getFullYear()} Nicholas Ho. All rights reserved.
    </footer>
  );
}
