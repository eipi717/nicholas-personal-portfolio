"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Terminal,
  Server,
  Code2,
  Shield,
  ExternalLink,
  ChevronRight,
  MapPin,
} from "lucide-react";
import clsx from "clsx";

// Data for Dev and IT modes
const DATA = {
  personal: {
    name: "Chun Him Ho (Nicholas)",
    email: "nicholasriven717@gmail.com",
    phone: "(437)-660-3280",
    location: "Toronto, Canada",
    linkedin: "https://linkedin.com/in/nicholaschho",
    github: "https://github.com/eipi717",
  },
  dev: {
    role: "Software Developer",
    tagline: "Building scalable web apps & AI automation pipelines.",
    summary:
      "Software Developer with 4+ years of experience in web development, database programming, and cybersecurity practices. Specialized in building scalable applications with Next.js and Spring Boot, and leveraging AI models (GPT-4, LLaMA) to automate complex data workflows.",
    skills: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"] },
      { category: "Backend", items: ["Python", "Java", "Spring Boot", "FastAPI", "Node.js"] },
      { category: "AI & Data", items: ["Selenium", "LLM Integration (GPT/Llama)", "SQL Optimization", "Web Scraping"] },
      { category: "Infra", items: ["Docker", "AWS", "Azure", "Git", "CI/CD"] },
    ],
    projects: [
      {
        title: "PriceMatchAPI",
        desc: "Automated price-tracking API using Selenium and local LLMs (Gemma 2) to standardize product names across retailers.",
        tags: ["FastAPI", "Python", "LLM", "Selenium"],
        link: "#",
      },
      {
        title: "AI Marketing Scraper",
        desc: "GPT-4 driven web-scraping service delivering real-time competitive intelligence feeds.",
        tags: ["GPT-4", "React", "Data Pipeline"],
        link: "#",
      },
      {
        title: "Social Sentiment SaaS",
        desc: "Real-time social tracking dashboard processing 3B+ data points with sub-second latency.",
        tags: ["React", "Spring Boot", "Microservices"],
        link: "#",
      },
      {
        title: "Insect Classifier",
        desc: "Deep learning model (ResNet-50) for insect classification with a PyQt5 GUI.",
        tags: ["TensorFlow", "Computer Vision", "Python"],
        link: "#",
      },
    ],
  },
  it: {
    role: "IT Support Specialist",
    tagline: "Ensuring infrastructure stability & network security.",
    summary:
      "IT Specialist with hands-on experience providing infrastructure support and system administration for healthcare and manufacturing sectors. Skilled in Windows Server management, VLAN segmentation, firewall configuration (Sophos), and hybrid Azure environments.",
    skills: [
      { category: "Networking", items: ["VLAN/Subnetting", "Sophos Firewall", "VPN (SSL/Site-to-Site)", "TCP/IP"] },
      { category: "Admin", items: ["Active Directory", "Azure Entra ID", "Office 365", "Group Policy"] },
      { category: "Hardware", items: ["Server Maintenance", "CCTV Systems", "Access Control", "Workstation Deployment"] },
      { category: "Security", items: ["RBAC", "IPS/IDS", "Acronis Backup", "Disaster Recovery"] },
    ],
    projects: [
      {
        title: "Secure Network Deployment",
        desc: "Designed segmented VLAN topology and secured 100+ cameras via DMZ isolation, reducing security incidents by 40%.",
        tags: ["Networking", "VLAN", "Sophos XG"],
        link: "#",
      },
      {
        title: "Hybrid Cloud Migration",
        desc: "Managed Windows Server Active Directory and Entra ID Hybrid environment setup for seamless identity management.",
        tags: ["Azure", "Active Directory", "Migration"],
        link: "#",
      },
      {
        title: "Automated Switch Config",
        desc: "Scripted VLAN and DHCP switch configurations, reducing site deployment time by 50%.",
        tags: ["PowerShell", "Automation", "Networking"],
        link: "#",
      },
      {
        title: "Ransomware Recovery",
        desc: "Executed disaster recovery plan using Acronis to restore systems fully after a security incident.",
        tags: ["Security", "Backup", "Incident Response"],
        link: "#",
      },
    ],
  },
  experience: [
    {
      id: 1,
      company: "Technethon",
      role: "Junior IT Technician",
      period: "May 2024 - Present",
      type: "it",
      desc: [
        "Provided infrastructure support for healthcare and manufacturing clients.",
        "Configured Sophos firewalls, IPS rules, and DMZ for 100+ IP cameras.",
        "Automated switch rollouts with batch files, improving consistency by 70%.",
      ],
    },
    {
      id: 2,
      company: "FutureSight Inc.",
      role: "Contract Developer",
      period: "Mar 2024 - May 2024",
      type: "dev",
      desc: [
        "Built a GPT-4 driven web-scraping pipeline for competitive intelligence.",
        "Productionised LLM tooling, reducing manual research hours by 60%.",
        "Collaborated in Agile sprints to refine API specifications.",
      ],
    },
    {
      id: 3,
      company: "Lively Impact Technology",
      role: "Software Developer",
      period: "Aug 2022 - May 2024",
      type: "dev",
      desc: [
        "Built a real-time social-tracking SaaS (React/Spring Boot) processing 3B+ data points.",
        "Automated government food-recall monitoring with Selenium, saving 3 hrs/day.",
        "Implemented JWT authentication and RBAC security models.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Engineering (Computer Engineering)",
    school: "The University of Hong Kong",
    period: "Sep 2018 - Jul 2023",
    note: "Minor in Mathematics",
  },
};

const THEME = {
  dev: {
    primary: "text-blue-400",
    bgPrimary: "bg-blue-500",
    bgSoft: "bg-blue-500/10",
    border: "border-blue-500/20",
    gradient: "from-blue-600/20 via-blue-500/10 to-purple-900/20",
    button: "bg-blue-600 hover:bg-blue-500",
    shadow: "shadow-blue-900/20",
    selection: "selection:bg-blue-500 selection:text-white",
    projectTag: "text-blue-300",
  },
  it: {
    primary: "text-emerald-400",
    bgPrimary: "bg-emerald-500",
    bgSoft: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    gradient: "from-emerald-600/20 via-emerald-500/10 to-teal-900/20",
    button: "bg-emerald-600 hover:bg-emerald-500",
    shadow: "shadow-emerald-900/20",
    selection: "selection:bg-emerald-500 selection:text-white",
    projectTag: "text-emerald-300",
  },
} as const;

export default function TestPage() {
  const [mode, setMode] = useState<"dev" | "it">("dev");
  const isDev = mode === "dev";
  const theme = THEME[mode];
  const content = DATA[mode];

  return (
    <div className={clsx("min-h-screen bg-slate-950 text-slate-200 font-sans", theme.selection)}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <span className={theme.primary}>{isDev ? "<Nicholas />" : "[Nicholas]"}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
            </div>

            <div className="bg-slate-900 p-1 rounded-full border border-slate-800 flex relative w-36 h-9">
              <motion.div
                layout
                className={clsx("absolute top-1 bottom-1 rounded-full", theme.bgPrimary)}
                initial={false}
                animate={{ x: isDev ? 0 : "100%" }}
                style={{ width: "calc(50% - 4px)", left: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <button
                onClick={() => setMode("dev")}
                className={clsx(
                  "relative z-10 w-1/2 flex items-center justify-center gap-1 text-xs font-bold transition-colors",
                  isDev ? "text-white" : "text-slate-400"
                )}
              >
                <Code2 size={14} /> DEV
              </button>
              <button
                onClick={() => setMode("it")}
                className={clsx(
                  "relative z-10 w-1/2 flex items-center justify-center gap-1 text-xs font-bold transition-colors",
                  !isDev ? "text-white" : "text-slate-400"
                )}
              >
                <Server size={14} /> IT
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 relative overflow-hidden">
          <div className={clsx("absolute inset-0 bg-gradient-to-br opacity-30 blur-[100px] -z-10", theme.gradient)} />

          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-center space-y-8"
          >
            <div
              className={clsx(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-medium",
                theme.border,
                theme.bgSoft,
                theme.primary
              )}
            >
              {isDev ? <Terminal size={16} /> : <Shield size={16} />}
              <span>{content.role}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              {isDev ? "Code that " : "Systems that "}
              <span
                className={clsx(
                  "text-transparent bg-clip-text bg-gradient-to-r",
                  isDev ? "from-blue-400 to-violet-400" : "from-emerald-400 to-teal-400"
                )}
              >
                {isDev ? "Innovates." : "Connects."}
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">{content.tagline}</p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="#contact"
                className={clsx(
                  "px-8 py-3.5 rounded-lg text-white font-semibold transition-all shadow-lg",
                  theme.shadow,
                  theme.button
                )}
              >
                Contact Me
              </a>
              <a
                href={DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-lg bg-slate-900 text-white font-semibold border border-slate-800 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 border-t border-slate-900">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">About Me</h2>
              <motion.div
                key={mode + "about"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-400 leading-relaxed text-lg"
              >
                {content.summary}
              </motion.div>

              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className={theme.primary} size={20} />
                  {DATA.personal.location}
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className={theme.primary} size={20} />
                  {DATA.personal.email}
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <FileText size={18} className="text-slate-400" /> Education
              </h3>
              <div className="space-y-1">
                <p className="text-slate-200 font-medium">{DATA.education.school}</p>
                <p className={clsx("text-sm", theme.primary)}>{DATA.education.degree}</p>
                <p className="text-xs text-slate-500">{DATA.education.period}</p>
                <p className="text-xs text-slate-500 italic mt-2">{DATA.education.note}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Certifications</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>ISC2 Certified in Cybersecurity</li>
                  <li>Microsoft Azure Fundamental</li>
                  <li>CompTIA Security+ (In Progress)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-6 bg-slate-900/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.skills.map((skillSet, idx) => (
                <motion.div
                  key={skillSet.category + mode}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors"
                >
                  <h3 className={clsx("font-bold mb-4", theme.primary)}>{skillSet.category}</h3>
                  <ul className="space-y-2">
                    {skillSet.items.map((item) => (
                      <li key={item} className="text-slate-400 text-sm flex items-center gap-2">
                        <span className={clsx("w-1.5 h-1.5 rounded-full", theme.bgPrimary)} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>

            <div className="space-y-12 border-l border-slate-800 pl-8 ml-4">
              {DATA.experience
                .filter((exp) => exp.type === mode || !exp.type)
                .map((job, idx) => (
                  <motion.div
                    key={job.id + mode}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={clsx("absolute -left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-slate-950", theme.bgPrimary)} />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <span className="text-slate-500 text-sm font-mono">{job.period}</span>
                    </div>

                    <div className={clsx("text-lg font-medium mb-4", theme.primary)}>{job.company}</div>

                    <ul className="space-y-3">
                      {job.desc.map((point, i) => (
                        <li key={i} className="text-slate-400 leading-relaxed flex items-start gap-3 text-sm">
                          <ChevronRight size={16} className={clsx("mt-1 shrink-0", theme.primary)} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                {content.projects.map((project) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-8 group hover:border-slate-600 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                      <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    <p className="text-slate-400 mb-6 min-h-[3rem]">{project.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={clsx(
                            "text-xs px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 opacity-80",
                            theme.projectTag
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-24 px-6 border-t border-slate-900 bg-slate-950">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-white">Ready to Collaborate?</h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              {isDev ? "I'm currently open to software development opportunities." : "I'm currently open to IT operations opportunities."}{" "}
              Let's build something great together.
            </p>

            <div className="flex justify-center gap-6">
              <a
                href={`mailto:${DATA.personal.email}`}
                className={clsx(
                  "flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-colors",
                  theme.button
                )}
              >
                <Mail size={18} /> Email Me
              </a>
              <a
                href={DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>

            <div className="pt-16 text-slate-600 text-sm">
              <p>© {new Date().getFullYear()} {DATA.personal.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
