"use client";

import { useMode } from "@/context/ModeContext";
import { experiences, personas } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import NextSteps from "@/components/NextSteps";

export default function Experience() {
  const { mode, theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const persona = personas[mode];
  const shouldReduceMotion = useReducedMotion();
  const filtered = experiences
    .filter((exp) => exp.category === mode)
    .sort((a, b) => a.order - b.order);

  return (
    <div className={clsx("w-full", appearanceClasses.page)}>
      <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-10">
      <header className="space-y-3">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Experience</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>Roles that {persona.verb}</h1>
        <p className={clsx("text-lg", appearanceClasses.muted)}>Curated timeline aligned to the current persona.</p>
      </header>

      <div className="relative pl-8">
        <div className={clsx("absolute left-0 top-0 bottom-0 w-px", appearance === 'light' ? "bg-slate-200" : "bg-slate-800")} />

        {filtered.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}-${exp.date}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.08 }}
            className="relative mb-10 last:mb-0"
          >
            <div
              className="absolute left-[-2.3rem] top-2 w-4 h-4 rounded-full border-2"
              style={{ background: mode === "dev" ? "#3b82f6" : "#10b981", borderColor: appearance === 'light' ? "#f8fafc" : "#020617" }}
            />

            <div className={clsx("rounded-2xl border p-5 space-y-2", appearanceClasses.card)}>
              <div className="flex items-start justify-between gap-3">
                <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>{exp.role}</h3>
                <p className={clsx("text-sm font-mono", appearanceClasses.muted)}>{exp.date}</p>
              </div>
              <p className={clsx("text-sm font-medium", appearanceClasses.strong)}>{exp.company}</p>
              <ul className={clsx("mt-3 space-y-2", appearanceClasses.muted)}>
                {exp.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={clsx("mt-2 h-1.5 w-1.5 rounded-full", themeClasses.accentBg)} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <NextSteps
        title="See the work in action"
        description={
          mode === "dev"
            ? "Dive into projects or review services tailored to the current focus."
            : "Review services or start a conversation about upcoming needs."
        }
        links={
          mode === "dev"
            ? [
                { href: "/projects", label: "Explore projects", variant: "primary" },
                { href: "/services", label: "View services" },
              ]
            : [
                { href: "/services", label: "View services", variant: "primary" },
                { href: "/contact", label: "Start a conversation" },
              ]
        }
      />

      </div>
    </div>
  );
}
