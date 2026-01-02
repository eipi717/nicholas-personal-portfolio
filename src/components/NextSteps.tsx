"use client";

import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";

type NextStepLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function NextSteps({
  title,
  description,
  links,
  eyebrow = "Next steps",
}: {
  title: string;
  description?: string;
  links: NextStepLink[];
  eyebrow?: string;
}) {
  const { theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const focusRing = clsx(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    themeClasses.focusRing,
    appearance === "light" ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-950"
  );

  return (
    <section className={clsx("rounded-3xl border p-6 md:p-8 space-y-4", appearanceClasses.card)}>
      <div className="space-y-2">
        <p className={clsx("text-xs uppercase tracking-[0.25em]", appearanceClasses.muted)}>{eyebrow}</p>
        <h2 className={clsx("text-2xl font-semibold", appearanceClasses.strong)}>{title}</h2>
        {description ? <p className={clsx("text-sm md:text-base", appearanceClasses.muted)}>{description}</p> : null}
      </div>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => {
          const isPrimary = link.variant === "primary";
          return (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={clsx(
                "px-5 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base",
                focusRing,
                isPrimary
                  ? clsx(themeClasses.primaryButton, themeClasses.primaryButtonHover, "text-white shadow-lg")
                  : clsx("border", appearanceClasses.panel, appearanceClasses.surfaceHover, themeClasses.accentBorder, appearanceClasses.strong)
              )}
            >
              {link.label}
              <ArrowRight size={16} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
