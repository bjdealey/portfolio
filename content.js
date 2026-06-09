// ============================================================
//  PORTFOLIO CONTENT — edit this file to update the site
// ============================================================

const CONTENT = {

  // ── Identity ──────────────────────────────────────────────
  name:     "Brad Dealey",
  initials: "BD",
  email:    "braddealey@gmail.com",
  github:   "https://github.com/bjdealey",
  linkedin: "https://www.linkedin.com/in/brad-dealey/",

  availableForWork: true,
  hireMeText: "Hire Me",
  cvFile: "cv.html",  // CV page; set to null to hide the download buttons

  // ── Integrations ──────────────────────────────────────────
  // Cal.com booking link — shown as "Book a call" in the contact section.
  // Set to your Cal.com URL, e.g. "https://cal.com/brad-dealey/30min"
  calLink: "https://cal.com/bradjd/30min",

  // Microsoft Clarity project ID — enables heatmaps + session recordings.
  // Find it at clarity.microsoft.com → your project → Setup → get the ID string.
  clarityId: "x4i8nvzgus",

  // ── Theme ─────────────────────────────────────────────────
  // Accent colour in dark mode and light mode. Any valid CSS hex colour.
  accentDark:  "#F5A623",
  accentLight: "#2A6041",

  // ── Section visibility ────────────────────────────────────
  // Set any section to false to hide it entirely.
  sections: {
    stats:          true,
    ticker:         true,
    timeline:       true,
    expertise:      true,
    work:           true,
    certifications: true,
    pricing:        true,
  },

  // ── Pricing ───────────────────────────────────────────────
  pricing: {
    tagline: "Transparent pricing.",
    subtitle: "Fixed-scope projects or flexible hourly work — no hidden costs, no surprises.",
    plans: [
      {
        name:        "Consultation",
        label:       "Per Session",
        price:       "£150",
        period:      "/ hr",
        featured:    false,
        description: "Best for process reviews, architecture decisions, or getting expert input on an automation challenge.",
        features: [
          "60-minute focused session",
          "Process assessment & recommendations",
          "Written summary & action plan",
          "Follow-up email Q&A",
        ],
        cta:     "Book a Session",
        ctaHref: "calLink",   // uses your calLink above automatically
      },
      {
        name:        "Automation Project",
        label:       "Most Popular",
        price:       "£500",
        period:      "/ day",
        featured:    true,
        description: "End-to-end RPA delivery — from process discovery through to a tested, documented bot in production.",
        features: [
          "Process discovery & scoping workshop",
          "Bot design & development",
          "Testing & UAT support",
          "Deployment & handover documentation",
          "30-day post-launch support",
        ],
        cta:     "Start a Project",
        ctaHref: "#contact",
      },
      {
        name:        "Retainer",
        label:       "Ongoing",
        price:       "£1,200",
        period:      "/ mo",
        featured:    false,
        description: "Continuous RPA support — bot maintenance, improvements, and new automation capacity each month.",
        features: [
          "Up to 3 development days per month",
          "Priority response time",
          "Bot monitoring & maintenance",
          "Monthly review call",
          "Flexible scope each month",
        ],
        cta:     "Get in Touch",
        ctaHref: "#contact",
      },
    ],
  },

  // Skills shown in the scrolling ticker strip
  ticker: [
    "RPA", "Process Automation", "Automation Anywhere", "Power Automate",
    "Kofax TotalAgility", "Power Platform", "Azure DevOps", "Power Apps",
    "Microsoft 365", "SharePoint", "REST APIs", "JavaScript",
    "TypeScript", "Active Directory",
  ],

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    titleLine1: "Solving problems,",
    titleAccent: "one script at a time.",
    subtitle:
      "Automation Engineer at Sytner Group, available for RPA consulting. " +
      "I design and deploy bots that eliminate manual work — document processing, " +
      "cross-system integrations, and anything repetitive that's costing your team time.",
  },

  // ── Stats strip ───────────────────────────────────────────
  stats: [
    { count: 6,  label: "Years in Tech"         },
    { count: 3,  label: "Years in Automation"   },
    { count: 45, label: "Skills on LinkedIn"    },
    { count: 2,  label: "AA Certifications"     },
  ],

  // ── About ─────────────────────────────────────────────────
  about: {
    titleLine1: "Automate the tedious,",
    titleLine2: "build the useful.",
    body: [
      "I'm an Automation Engineer at Sytner Group, where I specialise in " +
      "building bots and streamlining processes using Automation Anywhere, " +
      "Power Automate, and Kofax TotalAgility. My work focuses on improving " +
      "operational efficiency and accuracy across a large, complex organisation.",

      "I also bring a software developer's background to every engagement — " +
      "comfortable scripting custom logic, consuming APIs, and handling " +
      "integrations that off-the-shelf RPA tooling can't reach alone. That " +
      "depth is what separates bots that work in a demo from ones that run " +
      "reliably in production.",
    ],
    tags: [
      "RPA",
      "Automation Anywhere",
      "Power Automate",
      "Kofax TotalAgility",
      "Power Platform",
      "Azure DevOps",
      "REST APIs",
      "JavaScript",
    ],
  },

  // ── Career timeline ───────────────────────────────────────
  timeline: [
    {
      role:    "Automation Engineer",
      company: "Sytner Group",
      period:  "Jun 2023 – Present",
      description:
        "Designing and deploying RPA bots across the business using Automation " +
        "Anywhere, Power Automate, and Kofax TotalAgility. Focused on document " +
        "processing, cross-system data flows, and improving operational efficiency " +
        "at scale. Working hybrid from Leicester.",
    },
    {
      role:    "Service Desk Analyst",
      company: "Sytner Group",
      period:  "Jun 2022 – Jun 2023",
      description:
        "Front-line IT support across the Sytner Group estate. Handling incidents, " +
        "service requests, and escalations while picking up Power Automate and RPA — " +
        "the role that led directly into automation engineering.",
    },
    {
      role:    "IT Technician",
      company: "North Warwickshire and South Leicestershire College",
      period:  "Feb 2020 – Jun 2022",
      description:
        "On-site IT support across the college — managing Active Directory, " +
        "Microsoft Endpoint Configuration Manager, and day-to-day systems " +
        "administration. Built the foundation in infrastructure that underpins " +
        "everything since.",
    },
  ],

  // ── Expertise cards ───────────────────────────────────────
  expertise: [
    {
      title: "RPA & Process Automation",
      description:
        "Designing and deploying bots that eliminate manual work — from document " +
        "processing to cross-system data flows — with measurable impact on " +
        "efficiency and accuracy.",
      items: [
        "Automation Anywhere (A360)",
        "Kofax TotalAgility",
        "Process design & mapping",
        "Azure DevOps",
      ],
    },
    {
      title: "Microsoft Power Platform",
      description:
        "Low-code automation and app solutions deeply integrated with " +
        "Microsoft 365. Power Automate flows that connect systems without " +
        "touching infrastructure.",
      items: [
        "Power Automate",
        "Power Apps",
        "Microsoft 365 integration",
        "SharePoint & Teams",
      ],
    },
    {
      title: "Technical Integration",
      description:
        "RPA bots rarely exist in isolation — they consume APIs, transform " +
        "data, and connect systems built by other teams. A developer's " +
        "background means those integrations get built properly, not worked around.",
      items: [
        "REST APIs & webhooks",
        "Custom scripting (JS / VBA)",
        "Data transformation & mapping",
        "System integration & debugging",
      ],
    },
    {
      title: "IT & Systems",
      description:
        "Grounded in hands-on IT support and systems administration before " +
        "moving into automation — I understand the infrastructure my bots " +
        "run on.",
      items: [
        "Active Directory",
        "Microsoft Endpoint Config Manager",
        "Service Desk",
        "Network & systems support",
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      featured: true,
      visual:  "flow",
      tags:    ["RPA", "Automation Anywhere", "Power Automate"],
      title:   "Enterprise Automation",
      description:
        "Production bot development at Sytner Group — automating document " +
        "processing, cross-system data flows, and operational reporting across " +
        "a large dealership network. Built and maintained using Automation " +
        "Anywhere A360, Power Automate, and Kofax TotalAgility.",
      linkText: "View LinkedIn",
      linkHref: "https://www.linkedin.com/in/brad-dealey/",
    },
    {
      visual:  "phone-cards",
      tags:    ["React Native", "TypeScript", "Personal"],
      title:   "Kamika",
      description:
        "Personal project — a Pokémon TCG collector app with live price tracking, " +
        "Pokédex completion tracking, and multi-currency value display. Built to " +
        "stay sharp on full-stack mobile development with React Native and TypeScript.",
      linkText: "View on GitHub",
      linkHref: "https://github.com/bjdealey/Kamika",
    },
    {
      visual:  "phone-list",
      tags:    ["React Native", "Expo", "Personal"],
      title:   "Pokevault",
      description:
        "Personal project — a React Native (Expo) app built with TypeScript and " +
        "Tamagui, exploring cross-platform UI and state management patterns.",
      linkText: "View on GitHub",
      linkHref: "https://github.com/bjdealey/pokevault",
    },
  ],

  // ── Certifications ────────────────────────────────────────
  certifications: [
    {
      title:        "Automation Developer Career Quest - Start Phase",
      issuer:       "Automation Anywhere",
      issuerInitials: "AA",
      issued:       "Feb 2025",
      credentialId: "132168444",
      credentialUrl: "https://certificates.automationanywhere.com/17865f3c-b70a-42f0-9924-c95a5a184c36",
    },
    {
      title:        "Automation Anywhere RPA Essentials for Students (Automation 360)",
      issuer:       "Automation Anywhere",
      issuerInitials: "AA",
      issued:       "Mar 2023",
      credentialId: "70954925",
      credentialUrl: "https://certificates.automationanywhere.com/ba5c0f35-6604-4d0a-b038-67344ec8b79e#acc.RQYN6fnK",
    },
  ],

  // ── Testimonials ──────────────────────────────────────────
  testimonials: {
    show: false,  // flip to true and add items below to show this section
    items: [
      // { initials: "AB", name: "Person Name", role: "Role, Company", quote: "Quote here." },
    ],
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    subtitle:
      "Available for RPA consulting — process automation, bot development, and " +
      "Power Platform work. Remote or hybrid, based in Leicestershire. " +
      "Got a process to automate? Let's talk.",
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    year: 2026,
    links: [
      { label: "GitHub",   href: "https://github.com/bjdealey" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/brad-dealey/" },
      { label: "Email",    href: "mailto:braddealey@gmail.com" },
    ],
  },

};
