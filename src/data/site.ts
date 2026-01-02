import { Terminal, ShieldCheck } from "lucide-react";

export type PersonaKey = "dev" | "it";

export const personal = {
  name: "Chun Him Ho (Nicholas)",
  title: "Backend Developer | IT Support Specialist",
  email: "nicholasriven717@gmail.com",
  phone: "437-660-3280",
  location: "Toronto, Ontario, Canada",
  links: {
    github: "https://github.com/eipi717",
    linkedin: "https://www.linkedin.com/in/nicholaschho",
    resume: "mailto:nicholasriven717@gmail.com",
  },
  education: [
    { school: "The University of Hong Kong", degree: "BEng (Computer Engineering)", detail: "Minor in Mathematics", date: "2018 - 2023" },
  ],
  certifications: [
    "ISC2 Certified in Cybersecurity",
    "Microsoft Azure Fundamentals",
    "CompTIA Security+ (in progress)",
  ],
};

export const personas = {
  dev: {
    role: "Backend Developer",
    verb: "drive impact",
    headline: "Backend systems that scale.",
    tagline: "APIs, automation, and data pipelines that cut manual effort and improve reliability.",
    summary: "Backend engineer focused on resilient services, automation, and data accuracy. I build systems that are easy to operate, document, and extend.",
    resume: "/assets/Resume_ChunHim_Ho_Nicholas_DEV.pdf",
    highlights: [
      "API design with clear contracts, observability, and secure defaults.",
      "Automation workflows that reduce repetitive manual work.",
      "Production-ready services built with Python and Java.",
    ],
    icon: Terminal,
    skills: [
      {
        title: "Programming Languages",
        items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Shell Scripting"],
      },
      {
        title: "Frameworks & Libraries",
        items: ["Spring Boot", "FastAPI", "ExpressJS", "React", "Selenium", "Django", "Hibernate"],
      },
      {
        title: "Backend & API Development",
        items: ["RESTful API Design", "JWT Authentication", "Role-Based Access Control (RBAC)", "Secure API Development"],
      },
      {
        title: "Automation & Data Processing",
        items: ["Web Scraping", "Data Extraction", "Data Normalization", "Automation Pipelines"],
      },
      {
        title: "AI & LLM Integration",
        items: ["LLM-Powered Automation", "Local LLM Hosting (Ollama)"],
      },
      {
        title: "Tools & Platforms",
        items: ["Linux", "Docker", "Git", "GitHub", "Postman", "Agile", "Jira"],
      },
    ],
  },
  it: {
    role: "IT Support Specialist",
    verb: "keep teams online",
    headline: "Infrastructure that stays online.",
    tagline: "Network hardening, endpoint security, and on-site delivery that keep teams productive.",
    summary: "IT specialist focused on uptime, security, and fast response. I harden networks, manage endpoints, and document systems so support stays reliable.",
    resume: "/assets/Resume_ChunHim_Ho_Nicholas_IT.docx.pdf",
    highlights: [
      "Firewall, VPN, and VLAN hardening aligned to compliance needs.",
      "Proactive monitoring and backups to reduce downtime risk.",
      "L1/L2 support with documented runbooks and fast resolution.",
    ],
    icon: ShieldCheck,
    skills: [
      {
        title: "Operating Systems",
        items: ["Windows 10", "Windows 11", "Windows Server 2019-2025", "macOS", "Linux"],
      },
      {
        title: "Networking & Security",
        items: [
          "VLAN",
          "DMZ",
          "DHCP",
          "DNS",
          "Sophos Firewall (XG)",
          "VPN (Site-to-Site, Remote Access)",
          "IPS",
          "IDS",
          "Email Filtering",
          "Access Control Lists (ACL)",
          "Wireshark",
        ],
      },
      {
        title: "Switching & Wireless",
        items: [
          "Cisco Switches",
          "Aruba Switches",
          "TP-Link Switches",
          "UniFi Switches",
          "UniFi Access Points",
          "UniFi Cloud Key",
          "Trunk Ports",
          "Link Aggregation (LAG)",
        ],
      },
      {
        title: "Servers, Identity & Storage",
        items: [
          "Active Directory (On-Premises)",
          "Microsoft Entra ID (Azure AD Hybrid)",
          "QNAP NAS",
          "File Server Management",
          "SMB File Sharing",
          "User Permissions",
          "Virtualization Station",
          "Windows Server Virtual Machines",
          "QNAP Sync",
        ],
      },
      {
        title: "Physical Security Systems",
        items: [
          "CCTV Installation and Configuration (Hikvision, Dahua, Axis)",
          "Access Control Systems (EyeonGate, ICT)",
          "Alarm Systems (Alarm.com, DSC, PowerG, 2GIG/Qolsys)",
        ],
      },
      {
        title: "Backup & Endpoint Security",
        items: ["Acronis Backup", "BackupAssist", "Endpoint Protection (ESET, Symantec, Norton 365)"],
      },
      {
        title: "Hardware & IT Support",
        items: [
          "PC Assembly and Repair",
          "RAM Upgrade",
          "SSD/HDD/NVMe Replacement",
          "NAS Management",
          "UPS Systems",
          "Printers and Peripherals",
          "Remote Support: TeamViewer, AnyDesk, Remote Desktop (RDP)",
        ],
      },
      {
        title: "Tools & Scripting",
        items: ["GLPI Ticketing System", "PowerShell", "Python"],
      },
    ],
  },
} as const;

export const experiences = [
  {
    company: "Technethon",
    role: "IT Administrator (Contract)",
    date: "Jul 2025 - Present",
    category: "it",
    order: 1,
    bullets: [
      "Configured and maintained Sophos firewalls, including firewall rules, IPS policies, and VPNs (SSL and site-to-site).",
      "Designed and implemented VLAN-segmented networks, trunk ports, and managed switch configurations.",
      "Built and administered Windows Server (2019-2025) environments, including Active Directory and hybrid Microsoft Entra.",
      "Created and managed Microsoft 365 accounts, mailboxes, licenses, and supported Outlook and MFA issues.",
      "Deployed and administered NAS as file servers; configured SMB permissions, hosted Windows Server VMs, and implemented QNAP Sync.",
      "Installed and configured routers, switches, wireless access points, and Cat6 Ethernet cabling; documented IP addressing.",
      "Managed system backups and restores using Acronis and BackupAssist.",
      "Performed Windows 10 -> 11 upgrades, workstation deployments, and hardware replacements.",
    ],
  },
  {
    company: "Technethon",
    role: "Junior IT Technician",
    date: "May 2024 - Jul 2025",
    category: "it",
    order: 2,
    bullets: [
      "Delivered IT support and infrastructure setup for clients in healthcare and manufacturing sectors.",
      "Installed and configured 50+ CCTV, access control, and alarm systems to enhance physical security.",
      "Secured IP camera networks using DMZ architecture to isolate them from internal networks.",
      "Built and maintained Windows Server environments with Active Directory and hybrid Entra ID.",
      "Managed file and folder permissions, network shares, and group access rights.",
      "Provided remote and on-site infrastructure support using TeamViewer, AnyDesk, and RDP.",
      "Assisted with new employee onboarding, device provisioning, and printer/scanner setup.",
      "Installed and maintained standard business applications (Office 365, Teams, Zoom, Adobe).",
      "Provided remote support and documented work using GLPI.",
    ],
  },
  {
    company: "FutureSight Inc.",
    role: "Contract Developer",
    date: "Mar 2024 - May 2024",
    category: "dev",
    order: 1,
    bullets: [
      "Implemented a web scraping tool using a large language model to automate summarization and database updates via REST APIs for marketing solutions.",
    ],
  },
  {
    company: "Lively Impact Technology Limited",
    role: "Software Developer (Part-time)",
    date: "Aug 2023 - May 2024",
    category: "dev",
    order: 2,
    bullets: [
      "Maintained and expanded Selenium + BeautifulSoup scrapers for 40+ food-recall sites, eliminating manual collection.",
      "Authored and updated API specifications and UAT plans to align releases with client requirements.",
      "Supported release testing and bug fixes to keep client dashboards reliable.",
    ],
  },
  {
    company: "Lively Impact Technology Limited",
    role: "Software Developer",
    date: "Aug 2022 - Jul 2023",
    category: "dev",
    order: 3,
    bullets: [
      "Built a data processing system with Spring Boot and Apache Flink, including an interactive UI for 3B+ records.",
      "Troubleshot a predictive churn model for a telecom client, processing 1B+ data points to improve accuracy.",
      "Developed Selenium + BeautifulSoup scrapers for 40+ food-recall sites to remove manual data collection.",
      "Built core services for a social tracking system with sentiment analysis and dashboards using React and Spring Boot.",
    ],
  },
  {
    company: "WildFaces.ai",
    role: "AI Specialist",
    date: "May 2022 - Aug 2022",
    category: "dev",
    order: 4,
    bullets: [
      "Researched the correlation between facial angles and gender identification.",
      "Implemented OpenCV + Python experiments achieving 60%+ accuracy in predictive analysis.",
      "Gathered and curated facial datasets to improve model quality.",
    ],
  },
  {
    company: "M Learning",
    role: "Tutor",
    date: "Oct 2021 - May 2022",
    category: "dev",
    order: 5,
    bullets: [
      "Developed and customized teaching materials for primary and secondary students.",
      "Assessed learning needs and created tailored education plans aligned to goals.",
      "Tracked student progress and provided consistent feedback to students and parents.",
      "Maintained detailed records of achievements to support long-term development.",
    ],
  },
  {
    company: "Pi Innovation",
    role: "STEM Intern",
    date: "Jun 2021 - Aug 2021",
    category: "dev",
    order: 6,
    bullets: [
      "Crafted interactive teaching materials to increase hands-on learning.",
      "Delivered 3D printing tutorials using TinkerCAD.",
      "Taught programming with Micro:Bit to build coding fundamentals.",
      "Designed a STEM-focused curriculum for primary education.",
      "Taught STEM courses centered on science and logic.",
    ],
  },
  {
    company: "The Hong Kong Polytechnic University",
    role: "Student Assistant",
    date: "May 2018 - Aug 2019",
    category: "dev",
    order: 7,
    bullets: [
      "Mentored college students in calculus, statistics, and linear algebra.",
      "Taught an enhancement course to improve mastery of abstract concepts and raise pass rates.",
    ],
  },
] as const;

export const projects = [
  {
    title: "PriceMatchAPI",
    slug: "pricematchapi",
    category: "dev",
    tech: ["Python", "FastAPI", "Selenium", "Ollama (Gemma 2)"],
    desc: "Automated price-tracking API that standardizes product names with LLMs.",
    link: "https://github.com/eipi717",
    linkLabel: "GitHub",
    caseStudy: [
      "Goal: automate price tracking while normalizing product naming.",
      "Delivery: API endpoints supported by LLM-assisted normalization.",
      "Stack: Python, FastAPI, Selenium, Ollama (Gemma 2).",
    ],
  },
  {
    title: "Church Management App",
    slug: "church-management-app",
    category: "dev",
    tech: ["Flutter", "Dart", "Auth API"],
    desc: "Cross-platform booking and announcements system with authenticated access.",
    link: "https://github.com/eipi717",
    linkLabel: "GitHub",
    caseStudy: [
      "Goal: centralize bookings and announcements across devices.",
      "Delivery: authenticated Flutter experience with API-backed data.",
      "Stack: Flutter, Dart, Auth API.",
    ],
  },
  {
    title: "Secure Network Deployment",
    slug: "secure-network-deployment",
    category: "it",
    tech: ["Sophos XG", "VLAN", "DMZ"],
    desc: "Segmented VLAN topology protecting 100+ cameras via DMZ isolation.",
    link: "https://www.linkedin.com/in/nicholaschho/",
    linkLabel: "LinkedIn",
    caseStudy: [
      "Goal: isolate camera networks and reduce security risk.",
      "Delivery: segmented VLAN topology with firewall policy tuning.",
      "Stack: Sophos XG, VLAN, DMZ.",
    ],
  },
  {
    title: "Incident Playbooks",
    slug: "incident-playbooks",
    category: "it",
    tech: ["PowerShell", "Intune", "O365"],
    desc: "Automated remediation scripts for onboarding, patching, and device recovery.",
    link: "https://www.linkedin.com/in/nicholaschho/",
    linkLabel: "LinkedIn",
    caseStudy: [
      "Goal: speed up onboarding, patching, and recovery workflows.",
      "Delivery: scripted playbooks aligned to device management.",
      "Stack: PowerShell, Intune, O365.",
    ],
  },
] as const;
