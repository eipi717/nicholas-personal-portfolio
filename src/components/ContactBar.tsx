"use client";

import { useMode } from "@/context/ModeContext";
import { personal } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

export default function ContactBar() {
  const { mode, theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const focusRing = clsx(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    themeClasses.focusRing,
    appearance === "light" ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-950"
  );

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 md:px-0">
      <div
        className={clsx(
          "w-full max-w-4xl rounded-2xl shadow-lg backdrop-blur-md px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border",
          appearanceClasses.card
        )}
      >
        <div className="flex items-center gap-3">
          <div className={clsx("h-10 w-10 rounded-full grid place-items-center", themeClasses.accentBg)}>
            <Mail size={16} className="text-white" />
          </div>
          <div>
            <p className={clsx("text-xs uppercase tracking-[0.2em]", appearanceClasses.muted)}>Quick contact</p>
            <p className={clsx("text-sm font-semibold", appearanceClasses.strong)}>
              {mode === "dev" ? "Ready for roles or projects" : "Ready for roles or infrastructure support"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          <ContactLink href={`mailto:${personal.email}`} icon={<Mail size={16} />} label="Email" themeClasses={themeClasses} appearanceClasses={appearanceClasses} focusRing={focusRing} />
          <ContactLink href={`tel:${personal.phone}`} icon={<Phone size={16} />} label="Call" themeClasses={themeClasses} appearanceClasses={appearanceClasses} focusRing={focusRing} />
          <ContactLink href={personal.links.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" themeClasses={themeClasses} appearanceClasses={appearanceClasses} focusRing={focusRing} external />
          <ContactLink href={personal.links.github} icon={<Github size={16} />} label="GitHub" themeClasses={themeClasses} appearanceClasses={appearanceClasses} focusRing={focusRing} external />
        </div>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  themeClasses,
  appearanceClasses,
  focusRing,
  external,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  themeClasses: ReturnType<typeof getThemeStyles>;
  appearanceClasses: ReturnType<typeof getAppearanceStyles>;
  focusRing: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={clsx(
        "flex items-center justify-center gap-2 px-3 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto whitespace-normal",
        appearanceClasses.subPanel,
        appearanceClasses.surfaceHover,
        themeClasses.accentBorder,
        appearanceClasses.strong,
        focusRing
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
