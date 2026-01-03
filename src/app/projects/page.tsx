"use client";

import { useMode } from "@/context/ModeContext";
import { projects, personas } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import NextSteps from "@/components/NextSteps";
import Link from "next/link";

export default function ProjectsPage() {
  const { mode, theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const persona = personas[mode];
  const shouldReduceMotion = useReducedMotion();
  const focusRing = clsx(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    themeClasses.focusRing,
    appearance === "light" ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-950"
  );
  const filtered = projects.filter((project) => project.category === mode);
  const projectsPending = true;

  if (mode !== "dev") {
    return (
      <div className={clsx("w-full", appearanceClasses.page)}>
        <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-10">
          <header className="space-y-3">
            <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Projects</p>
            <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>Projects are shown for developers</h1>
            <p className={clsx("text-lg", appearanceClasses.muted)}>
              Switch to the developer persona in the header to view project work, or explore services and contact options below.
            </p>
          </header>
          <div className={clsx("rounded-3xl border p-6 md:p-8 space-y-4", appearanceClasses.card)}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className={clsx(
                  "px-5 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base",
                  themeClasses.primaryButton,
                  themeClasses.primaryButtonHover,
                  focusRing,
                  "text-white"
                )}
              >
                View services
              </Link>
              <Link
                href="/contact"
                className={clsx(
                  "px-5 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 border text-sm sm:text-base",
                  appearanceClasses.panel,
                  appearanceClasses.surfaceHover,
                  themeClasses.accentBorder,
                  focusRing
                )}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectsPending) {
    return (
      <div className={clsx("w-full", appearanceClasses.page)}>
        <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-10">
          <header className="space-y-3">
            <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Projects</p>
            <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>To be confirmed</h1>
            <p className={clsx("text-lg", appearanceClasses.muted)}>
              Project details will be shared once the final list is confirmed.
            </p>
          </header>
          <NextSteps
            title="Need something similar?"
            description="Review services or start a conversation about your project."
            links={[
              { href: "/services", label: "See services", variant: "primary" },
              { href: "/contact", label: "Start a conversation" },
            ]}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={clsx("w-full", appearanceClasses.page)}>
      <div className="min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-10">
      <header className="space-y-3">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Projects</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>Projects that {persona.verb}</h1>
        <p className={clsx("text-lg", appearanceClasses.muted)}>Recent work aligned with the current focus.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project, index) => (
          <motion.article
            key={project.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.08 }}
            className={clsx(
              "relative overflow-hidden rounded-2xl border transition-all hover:-translate-y-1",
              appearanceClasses.card,
              appearanceClasses.surfaceHover
            )}
          >
            <div className="relative h-36 md:h-40 overflow-hidden">
              <div className={clsx(
                "absolute inset-0",
                appearance === "light"
                  ? "bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(16,185,129,0.3),transparent_35%),linear-gradient(120deg,rgba(15,23,42,0.95),rgba(2,6,23,0.9))]"
                  : "bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(16,185,129,0.3),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.95),rgba(15,23,42,0.9))]"
              )} />
              <div className={clsx("absolute -top-10 right-6 h-40 w-40 rounded-full blur-3xl opacity-60", themeClasses.accentGlow)} />
              <div className={clsx("absolute -bottom-16 left-0 h-40 w-40 rounded-full blur-3xl opacity-50", themeClasses.accentGlow)} />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
              <div className="relative z-10 h-full p-4 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Case study</p>
                <p className="text-lg font-semibold text-white">{project.title}</p>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div>
                <p className={clsx("text-lg font-semibold", appearanceClasses.strong)}>{project.title}</p>
                <p className={clsx("text-sm mt-1", appearanceClasses.muted)}>{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className={clsx(
                      "text-xs px-3 py-1 rounded-full border",
                      themeClasses.accentBorder,
                      themeClasses.accentText,
                      appearanceClasses.panel
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`#${project.slug}`}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm font-semibold border transition-colors inline-flex items-center gap-2",
                    appearanceClasses.panel,
                    appearanceClasses.surfaceHover,
                    themeClasses.accentBorder,
                    focusRing
                  )}
                >
                  Case study <ArrowRight size={14} />
                </Link>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm font-semibold border transition-colors inline-flex items-center gap-2",
                    appearanceClasses.panel,
                    appearanceClasses.surfaceHover,
                    themeClasses.accentBorder,
                    focusRing
                  )}
                  aria-label={`${project.title} link`}
                >
                  {project.linkLabel ?? "View link"} <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className={clsx("h-10 w-10 rounded-full grid place-items-center", themeClasses.accentBg)}>
            <span className="text-white font-mono text-xs">CS</span>
          </div>
          <div>
            <p className={clsx("text-sm uppercase tracking-[0.2em]", appearanceClasses.muted)}>Case studies</p>
            <h2 className={clsx("text-2xl font-bold", appearanceClasses.strong)}>How the work lands</h2>
          </div>
        </div>

        <div className="space-y-6">
          {filtered.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className={clsx("rounded-3xl border p-6 space-y-4 scroll-mt-28", appearanceClasses.card)}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="space-y-2">
                  <h3 className={clsx("text-xl font-semibold", appearanceClasses.strong)}>{project.title}</h3>
                  <p className={clsx("text-sm", appearanceClasses.muted)}>{project.desc}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={clsx(
                    "inline-flex items-center gap-2 text-sm font-semibold",
                    themeClasses.accentText,
                    focusRing
                  )}
                >
                  {project.linkLabel ?? "View link"} <ExternalLink size={14} />
                </a>
              </div>
              <ul className={clsx("space-y-2 text-sm", appearanceClasses.muted)}>
                {project.caseStudy.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={clsx("mt-2 h-1.5 w-1.5 rounded-full", themeClasses.accentBg)} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className={clsx(
                      "text-xs px-3 py-1 rounded-full border",
                      themeClasses.accentBorder,
                      themeClasses.accentText,
                      appearanceClasses.panel
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <NextSteps
        title="Need something similar?"
        description="Review services or start a conversation about your project."
        links={[
          { href: "/services", label: "See services", variant: "primary" },
          { href: "/contact", label: "Start a conversation" },
        ]}
      />
      </div>
    </div>
  );
}
