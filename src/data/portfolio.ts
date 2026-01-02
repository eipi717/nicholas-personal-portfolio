// src/data/portfolio.ts

export const personalInfo = {
  name: "Chun Him Ho (Nicholas)",
  title: "Hybrid Tech Professional",
  email: "nicholasriven717@gmail.com",
  phone: "(437)-660-3280",
  location: "Toronto, Canada",
  linkedin: "https://linkedin.com/in/nicholaschho",
  github: "https://github.com/eipi717",
  medium: "https://medium.com"
};

export const cvData = {
  dev: {
    themeColor: "blue",
    role: "Software Developer",
    tagline: "Building scalable applications with Python, Java, and Modern Web Tech.",
    summary: "Software Developer with 4+ years of experience in Web development, database programming, and cybersecurity practices. Experienced in designing scalable applications, SQL optimization, and API security. Skilled in leveraging AI models (Gemma, LLaMA) to standardize data and enhance automation.",
    skills: [
      "Python", "Java", "React / Next.js", "Spring Boot", "Selenium", "FastAPI", "PostgreSQL", "Docker", "AWS/Azure", "LLM Integration"
    ],
    services: [
      { title: "Full Stack Development", desc: "End-to-end web application development using React, Next.js, and Spring Boot." },
      { title: "AI & Automation", desc: "Web scraping pipelines and LLM integration for data summarization and extraction." },
      { title: "API Design", desc: "Secure RESTful API creation with JWT authentication and RBAC." }
    ]
  },
  it: {
    themeColor: "emerald",
    role: "IT Support Specialist",
    tagline: "Ensuring operational stability, network security, and infrastructure reliability.",
    summary: "IT Support Specialist with hands-on experience providing infrastructure support and system administration. Skilled in Windows Server, VLAN setup, Sophos Firewalls, and hybrid Azure environments. Recognized for efficient on-site project delivery and troubleshooting.",
    skills: [
      "Windows Server 2019-2025", "Sophos Firewall", "VLAN & Routing", "Active Directory / Entra ID", "Office 365 Admin", "CCTV & Access Control", "Linux Admin", "PowerShell Scripting"
    ],
    services: [
      { title: "Network Infrastructure", desc: "VLAN segmentation, Firewall configuration (Sophos), and VPN setup." },
      { title: "System Administration", desc: "Active Directory management, Office 365 migration, and Backup solutions (Acronis)." },
      { title: "Hardware & Security", desc: "CCTV installation, Access Control Systems, and Workstation deployment." }
    ]
  }
};

export const experiences = [
  {
    company: "Technethon",
    role: "Junior IT Technician",
    date: "May 2024 - Present",
    type: "it", // This shows only in IT mode
    points: [
      "Provided infrastructure support for healthcare and manufacturing clients, utilizing GLPI ticketing.",
      "Configured Sophos firewalls, VLANs, and VPNs to secure remote connectivity.",
      "Installed and configured 50+ access control systems and 100+ IP cameras utilizing DMZ isolation.",
      "Managed Windows Server Active Directory and Entra ID Hybrid environments."
    ]
  },
  {
    company: "FutureSight Inc.",
    role: "Contract Developer",
    date: "Mar 2024 - May 2024",
    type: "dev", // This shows only in Dev mode
    points: [
      "Implemented a web scraping tool using GPT-4 to automate information summarization via RESTful API.",
      "Reduced manual research hours by 60% by evaluating and productionising LLM tooling.",
      "Collaborated in Agile sprints to resolve project challenges and refine features."
    ]
  },
  {
    company: "Lively Impact Technology",
    role: "Software Developer",
    date: "Aug 2022 - May 2024",
    type: "dev",
    points: [
      "Built a real-time social-tracking SaaS using React and Spring Boot; processed 3 billion data points.",
      "Automated food-recall monitoring using Selenium, saving 3 hours of manual work daily.",
      "Implemented JWT authentication and RBAC security models."
    ]
  }
];

export const projects = [
  {
    title: "PriceMatchAPI",
    category: "dev",
    tech: ["Python", "FastAPI", "Selenium", "Ollama (Gemma 2)"],
    desc: "An automated price-tracking API using LLMs to standardize product names across retailers from weekly flyers.",
    link: "#"
  },
  {
    title: "Church Management App",
    category: "dev",
    tech: ["Flutter", "Dart", "Auth API"],
    desc: "Cross-platform management system for room booking and announcements with user authentication.",
    link: "#"
  },
  {
    title: "Insect-Classifier",
    category: "dev",
    tech: ["TensorFlow", "Python", "PyQt5"],
    desc: "Deep learning project using Transfer Learning (VGG16, ResNet-50) to classify insects with a GUI frontend.",
    link: "#"
  },
  {
    title: "Secure Network Deployment",
    category: "it",
    tech: ["Sophos XG", "VLAN", "DMZ"],
    desc: "Designed segmented VLAN topology and secured 100+ cameras via DMZ isolation, reducing incidents by 40%.",
    link: "#"
  }
];

export const education = [
  {
    school: "The University of Hong Kong",
    degree: "Bachelor of Engineering (Computer Engineering)",
    date: "Sep 2018 - Jul 2023",
    note: "Minor in Mathematics"
  }
];

export const certifications = [
  "ISC2 Certified in Cybersecurity",
  "Microsoft Azure Fundamental",
  "CompTIA Security+ (Expected late 2025)"
];
