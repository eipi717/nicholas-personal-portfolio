"use client";

import { useMode } from "@/context/ModeContext";
import { personas, personal } from "@/data/site";
import { getAppearanceStyles, getThemeStyles } from "@/lib/theme";
import clsx from "clsx";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

const SERVICE_SETS = {
  dev: [
    { title: "Full-Stack Delivery", desc: "Design, build, and ship web apps with React/Next.js + Python/FastAPI or Java/Spring." },
    { title: "APIs & Integrations", desc: "Secure REST APIs with auth, observability, and documentation your team can own." },
    { title: "Automation & LLMs", desc: "Scraping, data cleanup, and LLM-assisted workflows to remove repetitive toil." },
  ],
  it: [
    { title: "Network & Security", desc: "VLAN design, Sophos firewalls, VPN hardening, and DMZ isolation for critical devices." },
    { title: "Identity & Devices", desc: "Hybrid AD/Entra ID governance, Intune hardening, and M365 administration." },
    { title: "On-site Delivery", desc: "CCTV/access control rollouts, server upgrades, and resilient backup/recovery plans." },
  ],
};

export default function ServicesPage() {
  const { mode, theme, appearance } = useMode();
  const themeClasses = getThemeStyles(theme);
  const appearanceClasses = getAppearanceStyles(appearance);
  const persona = personas[mode];
  const services = SERVICE_SETS[mode];
  const focusRing = clsx(
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    themeClasses.focusRing,
    appearance === "light" ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-950"
  );

  return (
    <div className={clsx("w-full", appearanceClasses.page)}>
      <div className="min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-10">
      <header className="space-y-3">
        <p className={clsx("uppercase tracking-[0.25em] text-sm", appearanceClasses.muted)}>Services</p>
        <h1 className={clsx("text-4xl font-bold", appearanceClasses.strong)}>Engage me as your {persona.role}</h1>
        <p className={clsx("text-lg", appearanceClasses.muted)}>Modular offerings tailored to how your team works.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={clsx("rounded-2xl border p-6 space-y-3 transition-all hover:-translate-y-1", appearanceClasses.card, appearanceClasses.surfaceHover)}
          >
            <h3 className={clsx("text-lg font-semibold", appearanceClasses.strong)}>{service.title}</h3>
            <p className={clsx("text-sm", appearanceClasses.muted)}>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className={clsx("rounded-3xl border p-8 text-center space-y-6", appearanceClasses.card)}>
        <h2 className={clsx("text-2xl font-semibold", appearanceClasses.strong)}>Ready when you are</h2>
        <p className={clsx("text-lg max-w-3xl mx-auto", appearanceClasses.muted)}>
          Whether it&apos;s a sprint-sized build or a network stabilization project, I can integrate quickly, ship clearly, and leave documentation behind.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`mailto:${personal.email}`}
            className={clsx(
              "px-5 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base",
              themeClasses.primaryButton,
              themeClasses.primaryButtonHover,
              focusRing,
              "text-white"
            )}
          >
            <Mail size={18} /> Email
          </Link>
          {mode === "dev" ? (
            <Link
              href="/projects"
              className={clsx(
                "px-5 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 border w-full sm:w-auto text-sm sm:text-base",
                appearanceClasses.panel,
                appearanceClasses.surfaceHover,
                themeClasses.accentBorder,
                focusRing
              )}
            >
              View projects
            </Link>
          ) : null}
          <Link
            href={personal.links.linkedin}
            target="_blank"
            className={clsx(
              "px-5 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 border w-full sm:w-auto text-sm sm:text-base",
              appearanceClasses.panel,
              appearanceClasses.surfaceHover,
              themeClasses.accentBorder,
              focusRing
            )}
          >
            <Linkedin size={18} /> LinkedIn
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
