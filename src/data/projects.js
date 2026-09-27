export const projects = [
  {
    id: "1",
    slug: "trytofindeverything",
    title: "Try to find Everything",
    category: "Next.js & Tailwind CSS",
    shortDescription: "High-performance dark mode luxury retail store built with Next.js App Router, Tailwind CSS, and custom UI components.",
    coverImage: "/one.png",
    gallery: [
      "/one.png",
      "/oneone.png"
    ],
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    client: "Startup",
    year: "2026",
    role: "Lead Web Developer & UI Designer",
    liveUrl: "https://trytofindeverything.online/",

    overview: "Nocturne is an ultra-modern luxury e-commerce web platform engineered for high conversion, minimal aesthetics, and fluid navigation. Designed in Figma and built using Next.js 14 and Tailwind CSS, featuring server-side rendering, instant product search, dynamic filtering, and seamless checkout flow.",
    keyFeatures: [
      "Dark glassmorphism UI with neon accent gradients",
      "Dynamic product detail pages with real-time stock status via MongoDB",
      "Tailwind CSS custom responsive grid system & hover state animations",
      "Integrated search and multi-facet filtering",
      "Optimized Core Web Vitals achieving 98+ Lighthouse performance score"
    ],
    designProcess: "Started with wireframing and interactive prototypes in Figma. Crafted custom visual assets in Photoshop before translating into clean, component-driven React & Next.js code."
  },
  {
    id: "2",
    slug: "lumovia",
    title: "Lumovia",
    category: "Next.js & Tailwind CSS",
    shortDescription: "Futuristic dark SaaS analytics dashboard for monitoring real-time network security threats and database metrics.",
    coverImage: "/two.png",
    gallery: [
      "/two.png",
      "/twotwo.png"
    ],
    tags: ["Next.js", "Tailwind CSS", "API"],
    client: "CyberCore Operations",
    year: "2026",
    role: "Full Stack Developer & Designer",
    liveUrl: "https://lumovia.vercel.app/",
    overview: "CyberCore Nexus is a real-time security dashboard application providing network telemetry, threat monitoring, and automated database health alerts. Built with Next.js, MongoDB aggregation pipelines, and custom dark mode charts.",
    keyFeatures: [
      "Interactive data visualizations with glowing charts and metrics",
      "MongoDB database status monitoring and log stream integration",
      "Fully responsive dark dashboard layout designed specifically for desktop & tablet power users",
      "Role-based permission controls and security event logs",
      "Custom Figma UI design system with consistent dark color palette"
    ],
    designProcess: "Conducted user workflow research to group complex network data into intuitive, digestible visual widgets with dark high-contrast hierarchy."
  },
  {
    id: "3",
    slug: "usaalbtv",
    title: "UsAlbtv",
    category: "WordPress & CMS Platform",
    coverImage: "/three.png",
    gallery: [
      "/three.png",
      "/threethree.png"
    ],
    tags: ["WordPress", "PHP"],

    year: "2024",
    role: "WordPress Architect & UI Designer",
    liveUrl: "https://example.com/astraeus",
    githubUrl: "https://github.com/example/astraeus-theme",
    overview: "A bespoke corporate portal designed to establish authority and trust for a high-net-worth advisory firm. Designed in Figma, graphics crafted in Photoshop, and engineered into a custom lightweight WordPress theme.",
    keyFeatures: [
      "Custom WordPress Gutenberg & ACF flexible layout blocks",
      "Editorial gold & midnight dark design language created in Photoshop & Figma",
      "High-speed loading with cache optimization and asset minification",
      "SEO foundation architecture yielding top-tier search rankings",
      "Multilingual CMS capabilities (English & Albanian)"
    ],
    designProcess: "Created high-fidelity Figma mockups approved by executive stakeholders before building a clean, bloat-free custom WordPress theme structure."
  },
  {
    id: "4",
    slug: "aventouralbania",
    title: "Aventour Albania",
    category: "WordPress & CMS Platform",
    coverImage: "/four.png",
    gallery: [
      "/four.png",
      "/fourfour.png"
    ],
    tags: ["Next.js", "Tailwind CSS", "Figma", "Photoshop", "Framing"],
    client: "Neon Arcade Studio",
    year: "2024",
    role: "Lead UI/UX Designer & Developer",
    liveUrl: "https://aventouralbania.com/",
    overview: "Neon Arcade is a visually captivating creative agency website designed to present portfolio projects with maximal visual impact. Features dark themes, neon glow hover states, dynamic page transitions, and lightbox photo previewing.",
    keyFeatures: [
      "Photographic image gallery showcase with instant full-screen lightbox viewing",
      "Slug-based dynamic routing for individual project story pages",
      "Rich dark theme with subtle particle glow effects and glassmorphism",
      "Responsive layout engineered for desktop, tablet, and mobile devices",
      "Figma design system with dark purple and cyan neon accent tokens"
    ],
    designProcess: "Built around a photo-first aesthetic where media items take center stage, complemented by sleek dark cards and smooth typography."
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectCategories() {
  const categories = projects.map((p) => p.category);
  return ["All", ...Array.from(new Set(categories))];
}
