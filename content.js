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
  hireMeText: "Get in Touch",
  cvFile: "cv.html",  // CV page; set to null to hide the download buttons

  // ── Integrations ──────────────────────────────────────────
  // Cal.com booking link — set to your URL to add a "Book a call" button in
  // the contact section, or leave null to rely on email only.
  calLink: null,

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
    pricing:        false,
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
        description: "Useful if you want to talk through a process, work out whether automation is the right fit, or get a second opinion before committing to a build.",
        features: [
          "60-minute call or video session",
          "Honest assessment of whether automation fits your process",
          "Written notes and clear next steps",
          "Follow-up Q&A over email",
        ],
        cta:     "Book a Session",
        ctaHref: "calLink",   // uses your calLink above automatically
      },
      {
        name:        "Automation Project",
        label:       "Day Rate",
        price:       "£500",
        period:      "/ day",
        featured:    true,
        description: "A full automation project handled personally — from understanding your process at the start through to a tested, documented bot running in your environment.",
        features: [
          "Understanding your process before writing any code",
          "Bot build, start to finish",
          "Testing with your team in your own environment",
          "Deployment and documentation",
          "30 days of support after go-live",
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
        description: "Ongoing support for businesses that want to build out automation steadily, or keep existing bots running well — without the cost of a full-time hire.",
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
      "Automation Engineer at Sytner Group. I build bots, explore new tools, " +
      "and write about what I learn — mostly in RPA, Power Platform, and " +
      "anything that makes work more efficient.",
  },

  // ── Stats strip ───────────────────────────────────────────
  stats: [
    { count: 6, label: "Years in Tech"          },
    { count: 3, label: "Years in Automation"    },
    { count: 3, label: "Automation Platforms"   },
    { count: 2, label: "AA Certifications"      },
  ],

  // ── About ─────────────────────────────────────────────────
  about: {
    titleLine1: "Automate the tedious,",
    titleLine2: "build the useful.",
    body: [
      "I'm an Automation Engineer at Sytner Group, where I build and maintain " +
      "bots that handle document processing, data flows between systems, and the " +
      "kind of repetitive back-office work that used to take people hours a day. " +
      "Three years doing this in a fast-moving environment means I know what " +
      "breaks in production and how to build around it.",

      "I also have a software development background — comfortable scripting " +
      "custom logic, consuming APIs, and handling the edge cases that standard " +
      "RPA tooling wasn't designed for. The crossover between automation and " +
      "development is where I find the most interesting problems.",
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
        "Building and maintaining RPA bots across the business using Automation " +
        "Anywhere, Power Automate, and Kofax TotalAgility. Day-to-day work covers " +
        "document processing, cross-system data flows, and reducing the manual " +
        "work that operational teams have to do. Hybrid, based in Leicester.",
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
        "Hands-on bot development across document processing, back-office data " +
        "flows, and repetitive cross-system tasks. I've built and maintained " +
        "these in production — so I design for reliability from the start, " +
        "not just the happy path.",
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
        "Power Automate flows and Power Apps built around the Microsoft 365 " +
        "tools most organisations already have. I find this stack interesting " +
        "for how much you can automate without heavy infrastructure — and " +
        "where it starts to hit its limits.",
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
        "RPA bots rarely work in isolation — they talk to APIs, handle data " +
        "transforms, and sit alongside systems built by other teams. Having a " +
        "development background means I can build those connections properly " +
        "rather than working around what the RPA tool can't do alone.",
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
        "Bot development and process automation at Sytner Group — handling " +
        "document processing, cross-system data flows, and tasks that previously " +
        "relied on manual effort. Built, tested, and maintained personally using " +
        "Automation Anywhere A360, Power Automate, and Kofax TotalAgility.",
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
      "If you're working in automation, have questions about something I've " +
      "built, or just want to connect — feel free to reach out. Always happy " +
      "to talk shop about RPA, integrations, or anything in this space.",
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
