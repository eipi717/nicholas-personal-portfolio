"use client";

import { useMode } from "@/context/ModeContext";
import { personal } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

export default function ContactPage() {
  const { theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const focusRing = clsx(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    themeClasses.focusRing,
    appearance === "light" ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-950"
  );

  return (
    <div className={clsx("w-full", appearanceClasses.page)}>
      <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-8">
      <header className="space-y-3">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Contact</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>Let&apos;s collaborate</h1>
        <p className={clsx("text-lg", appearanceClasses.muted)}>Pick your channel; I respond quickly.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <ContactCard
          href={`mailto:${personal.email}`}
          label="Email"
          value={personal.email}
          icon={<Mail size={18} />}
          appearanceClasses={appearanceClasses}
          themeClasses={themeClasses}
          focusRing={focusRing}
        />
        <ContactCard
          href={`tel:${personal.phone}`}
          label="Phone"
          value={personal.phone}
          icon={<Phone size={18} />}
          appearanceClasses={appearanceClasses}
          themeClasses={themeClasses}
          focusRing={focusRing}
        />
        <ContactCard
          href={personal.links.linkedin}
          label="LinkedIn"
          value="linkedin.com/in/nicholaschho"
          icon={<Linkedin size={18} />}
          appearanceClasses={appearanceClasses}
          themeClasses={themeClasses}
          focusRing={focusRing}
          external
        />
        <ContactCard
          href={personal.links.github}
          label="GitHub"
          value="github.com/eipi717"
          icon={<Github size={18} />}
          appearanceClasses={appearanceClasses}
          themeClasses={themeClasses}
          focusRing={focusRing}
          external
        />
      </div>

      <div className={clsx("flex items-center gap-3 px-4 py-3 rounded-2xl border", appearanceClasses.panel)}>
        <MapPin size={18} className={themeClasses.accentText} />
        <div>
          <p className={clsx("text-xs uppercase tracking-[0.2em]", appearanceClasses.muted)}>Location</p>
          <p className={clsx("font-semibold", appearanceClasses.strong)}>{personal.location}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

function ContactCard({
  href,
  label,
  value,
  icon,
  appearanceClasses,
  themeClasses,
  focusRing,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  appearanceClasses: ReturnType<typeof getAppearanceStyles>;
  themeClasses: ReturnType<typeof getThemeStyles>;
  focusRing: string;
  external?: boolean;
}) {
  return (
    <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={focusRing}>
      <div className={clsx("rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all hover:-translate-y-1", appearanceClasses.card, appearanceClasses.surfaceHover)}>
        <div className="flex items-center gap-3 min-w-0">
          <div className={clsx("h-10 w-10 rounded-full grid place-items-center", themeClasses.accentBg)}>
            <span className="text-white">{icon}</span>
          </div>
          <div className="min-w-0">
            <p className={clsx("text-xs uppercase tracking-[0.2em]", appearanceClasses.muted)}>{label}</p>
            <p className={clsx("font-semibold break-words", appearanceClasses.strong)}>{value}</p>
          </div>
        </div>
        <span className={themeClasses.accentText}>↗</span>
      </div>
    </Link>
  );
}
