"use client";

import { useMode } from "@/context/ModeContext";
import { getAppearanceStyles } from "@/lib/theme";
import clsx from "clsx";
import type { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  const { appearance } = useMode();
  const appearanceClasses = getAppearanceStyles(appearance);

  return (
    <div className={clsx("min-h-screen transition-colors duration-300 w-full", appearanceClasses.page)}>
      {children}
    </div>
  );
}
