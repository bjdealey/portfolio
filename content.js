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

  // Skills shown in the scrolling ticker strip
  ticker: [
    "RPA", "Automation Anywhere", "Power Automate", "JavaScript",
    "React Native", "TypeScript", "Supabase", "Kofax TotalAgility",
    "Azure DevOps", "REST APIs", "Expo", "Power Platform",
    "Active Directory", "Process Automation", "App Development",
    "Power Apps", "SharePoint", "Microsoft 365",
  ],

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    titleLine1: "Solving problems,",
    titleAccent: "one script at a time.",
    subtitle:
      "Automation Engineer at Sytner Group and full-stack app developer. " +
      "I specialise in RPA, Power Platform, and building apps with React Native — " +
      "automating the tedious and making ideas real.",
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
      "operational efficiency and customer experience.",

      "Outside of work I design and build full-stack mobile apps with React " +
      "Native, TypeScript, and modern API integrations. JavaScript runs through " +
      "both sides of my work, and I'm always learning new tools by actually " +
      "building with them.",
    ],
    tags: [
      "RPA",
      "Automation Anywhere",
      "Power Automate",
      "JavaScript",
      "React Native",
      "Supabase",
      "Kofax TotalAgility",
      "Azure DevOps",
    ],
  },

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
      title: "App Development",
      description:
        "Full-stack mobile and web apps built with modern tooling. " +
        "I learn by building — often taking an idea from zero to working " +
        "product solo.",
      items: [
        "React Native / Expo",
        "Supabase",
        "REST APIs",
        "JavaScript / Node.js",
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
      tags:    ["React Native", "TypeScript", "Mobile"],
      title:   "Kamika",
      description:
        "A mobile app for Pokémon TCG collectors — track, value, and celebrate " +
        "your card collection all in one place. Features smart card search, live " +
        "price tracking powered by real-time market data, Pokédex completion " +
        "tracking, custom folder organisation, and multi-currency value display. " +
        "Built with React Native and TypeScript.",
      linkText: "View on GitHub",
      linkHref: "https://github.com/bjdealey/Kamika",
    },
    {
      tags:    ["React Native", "Expo", "TypeScript"],
      title:   "Pokevault",
      description:
        "A React Native (Expo) mobile app built with TypeScript and Tamagui. " +
        "Another personal project exploring cross-platform UI and state management.",
      linkText: "View on GitHub",
      linkHref: "https://github.com/bjdealey/pokevault",
    },
    {
      tags:    ["RPA", "Professional", "Sytner Group"],
      title:   "Enterprise Automation",
      description:
        "Bot development and process automation at Sytner Group — " +
        "streamlining operations across the business using Automation " +
        "Anywhere, Power Automate, and Kofax TotalAgility.",
      linkText: "View LinkedIn",
      linkHref: "https://www.linkedin.com/in/brad-dealey/",
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
      "Open to automation, app dev, and full-stack work — hybrid or remote, " +
      "based in Leicestershire. Got a process to automate or an app to build? " +
      "Let's talk.",
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
