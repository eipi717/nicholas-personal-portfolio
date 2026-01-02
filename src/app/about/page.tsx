"use client";

import { useMode } from "@/context/ModeContext";
import { personal, personas } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import NextSteps from "@/components/NextSteps";
import type { ReactNode } from "react";

export default function About() {
  const { mode, theme, appearance } = useMode();
  const persona = personas[mode];
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const shouldReduceMotion = useReducedMotion();
  const focusRing = clsx(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    themeClasses.focusRing,
    appearance === "light" ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-950"
  );

  return (
    <div className={clsx("w-full", appearanceClasses.page)}>
      <div className="min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-12 transition-colors">
      <header className="space-y-4">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>About</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>{personal.name}</h1>
        <p className={clsx("text-lg max-w-3xl", appearanceClasses.muted)}>{persona.summary}</p>
        <div className="flex flex-wrap gap-3">
          <InfoPill icon={<MapPin size={16} />} label="Location" value={personal.location} appearanceClasses={appearanceClasses} />
          <InfoPill icon={<Mail size={16} />} label="Email" value={personal.email} appearanceClasses={appearanceClasses} />
        </div>
      </header>

      <section className="space-y-6">
        <h2 className={clsx("text-2xl font-semibold", appearanceClasses.strong)}>What drives me</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {persona.highlights.map((item) => (
            <motion.div
              key={item}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
              className={clsx("p-4 rounded-2xl border", appearanceClasses.panel, appearanceClasses.surfaceHover)}
            >
              <div className="flex items-start gap-3">
                <span className={clsx("mt-1 h-2 w-2 rounded-full", themeClasses.accentBg)} />
                <p className={appearanceClasses.muted}>{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <div className={clsx("rounded-3xl border p-6 space-y-3", appearanceClasses.card)}>
          <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>Education</h3>
          {personal.education.map((edu) => (
            <div key={edu.school} className={clsx("rounded-2xl border p-4", appearanceClasses.subPanel, appearanceClasses.surfaceHover)}>
              <p className={clsx("font-semibold", appearanceClasses.strong)}>{edu.school}</p>
              <p className={clsx("text-sm", themeClasses.accentText)}>{edu.degree}</p>
              <p className={clsx("text-sm", appearanceClasses.muted)}>{edu.detail}</p>
              <p className={clsx("text-xs", appearanceClasses.muted)}>{edu.date}</p>
            </div>
          ))}
        </div>

        <div className={clsx("rounded-3xl border p-6 space-y-3", appearanceClasses.card)}>
          <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>Certifications</h3>
          <div className="space-y-2">
            {personal.certifications.map((cert) => (
              <div key={cert} className={clsx("flex items-center gap-3 rounded-2xl border p-4", appearanceClasses.subPanel, appearanceClasses.surfaceHover)}>
                <span className={clsx("h-2 w-2 rounded-full", themeClasses.accentBg)} />
                <p className={appearanceClasses.muted}>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className={clsx("h-10 w-10 rounded-full grid place-items-center", themeClasses.accentBg)}>
            <span className="text-white font-mono text-xs">SKL</span>
          </div>
          <div>
            <p className={clsx("text-sm uppercase tracking-[0.2em]", appearanceClasses.muted)}>Technical Skills</p>
            <h2 className={clsx("text-2xl font-bold", appearanceClasses.strong)}>Tools and strengths</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {persona.skills.map((skillGroup) => (
            <div
              key={skillGroup.title}
              className={clsx(
                "rounded-2xl border p-5 space-y-3 transition-colors",
                appearanceClasses.card,
                appearanceClasses.surfaceHover,
                focusRing
              )}
              tabIndex={0}
            >
              <h3 className={clsx("text-lg font-semibold", appearanceClasses.strong)}>{skillGroup.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className={clsx(
                      "text-xs px-3 py-1 rounded-full border",
                      themeClasses.accentBorder,
                      themeClasses.accentText,
                      appearanceClasses.panel
                    )}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <NextSteps
        title="Continue the story"
        description="Explore the experience timeline or see what to work on next."
        links={
          mode === "dev"
            ? [
                { href: "/experience", label: "View experience", variant: "primary" },
                { href: "/projects", label: "See projects" },
              ]
            : [
                { href: "/experience", label: "View experience", variant: "primary" },
                { href: "/services", label: "View services" },
              ]
        }
      />
      </div>
    </div>
  );
}

function InfoPill({ icon, label, value, appearanceClasses }: { icon: ReactNode; label: string; value: string; appearanceClasses: ReturnType<typeof getAppearanceStyles> }) {
  return (
    <div className={clsx("flex items-center gap-3 px-4 py-3 rounded-xl border", appearanceClasses.panel)}>
      <div className={clsx("text-sm", appearanceClasses.muted)}>{icon}</div>
      <div>
        <p className={clsx("text-xs uppercase tracking-[0.2em]", appearanceClasses.muted)}>{label}</p>
        <p className={clsx("text-sm font-semibold", appearanceClasses.strong)}>{value}</p>
      </div>
    </div>
  );
}
