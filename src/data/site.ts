// Single source of truth for profile, links, experience and skills.
// Everything on the home page and in the SEO tags is generated from this file.

export const site = {
  name: "Luiz Almeida",
  role: "Senior Full-Stack Engineer",
  url: "https://lhas.io",
  image: "https://lhas.io/me.jpg",
  stack: ["React", "TypeScript", "Ruby on Rails"],
  availability: "Open to new opportunities",
  location: "Porto Alegre, Brazil · Remote",
  headline:
    "10+ years shipping web and mobile products for US and Brazilian companies — from onboarding flows and design systems to APIs, observability and on-call.",
  description:
    "Senior Full-Stack Engineer with 10+ years building web and mobile products with React, TypeScript, Next.js and Ruby on Rails. Most recently at Housecall Pro. Based in Brazil, working remotely.",
  email: "luizhrqas@gmail.com",
  resume: "/resume.pdf",
  github: "https://github.com/lhas-dev",
  linkedin: "https://www.linkedin.com/in/luizhrqas/",
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  highlights: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    company: "Housecall Pro",
    role: "Senior Software Engineer · Contract",
    period: "Jul 2025 – Nov 2026",
    location: "Remote · Colorado, US",
    summary:
      "Product-led growth (PLG Discovery) team on a SaaS platform used by 200K+ home-service pros.",
    highlights: [
      "Built and maintained the navigation layer and homepage — the first surfaces every new account sees during the 14-day free trial.",
      "Delivered onboarding, Get Started and checklist experiences that guide new businesses from sign-up to activation, contributing to a 36% lift in trial activation.",
      "Wrote architecture review documents and drove technical alignment with the Platform team on shared components and infrastructure.",
      "Owned incident response for discovery surfaces in a one-week-per-month on-call rotation, using Datadog and Sentry.",
      "Analyzed product usage and onboarding funnel data in Snowflake to inform prioritization and feature iterations.",
    ],
    tags: ["React", "TypeScript", "Ruby on Rails", "Datadog", "Sentry", "Snowflake"],
  },
  {
    company: "RoVRstack.ai",
    role: "Senior Software Engineer",
    period: "Dec 2024 – Sep 2025",
    location: "Remote · New York, US",
    highlights: [
      "Led front-end architecture for an AI platform in Next.js and TypeScript, improving overall performance by 40%.",
      "Built a dynamic onboarding experience with conditional flows, reducing drop-off by 25%.",
      "Implemented secure authentication with OAuth2, JWT and 2FA.",
      "Integrated a FastAPI backend and multiple LLM endpoints for real-time AI inference features.",
    ],
    tags: ["Next.js", "TypeScript", "React", "LLMs", "FastAPI", "Framer Motion"],
  },
  {
    company: "JoVE",
    role: "Senior Software Engineer",
    period: "Nov 2023 – Dec 2024",
    location: "Remote · Cambridge, US",
    highlights: [
      "Built and maintained web applications on Next.js, Strapi and WordPress serving 2M+ monthly users.",
      "Cut page load times by 35% through code splitting and asset optimization.",
      "Improved mobile responsiveness and cross-browser compatibility, increasing average session time by 18%.",
      "Helped establish a design system for consistent UI across teams.",
    ],
    tags: ["Next.js", "React", "Strapi", "WordPress", "Design System"],
  },
  {
    company: "Lojas Renner",
    role: "Front-end Engineer",
    period: "Feb 2022 – Oct 2023",
    location: "Remote · São Paulo, BR",
    highlights: [
      "Refactored legacy web and mobile apps for Brazil's largest fashion retailer, raising Lighthouse performance scores by 50+ points.",
      "Led WCAG 2.1 accessibility compliance across experiences with 30M+ monthly visits.",
      "Contributed to a mobile shopping revamp that increased conversion by 12%.",
    ],
    tags: ["React", "React Native", "TypeScript", "Accessibility"],
  },
  {
    company: "mLabs",
    role: "Front-end Engineer",
    period: "Jan 2021 – Apr 2022",
    location: "Remote · São Paulo, BR",
    highlights: [
      "Delivered React and Redux UI for a social media management SaaS with 100k+ daily active users.",
      "Reduced average rendering time by 30% with lazy loading and DOM optimizations.",
      "Led a front-end migration that cut tech debt and made team deployments 3x faster.",
    ],
    tags: ["React", "Redux", "Ruby", "Node.js"],
  },
  {
    company: "Hortifruti",
    role: "Front-end Engineer",
    period: "Jul 2021 – Feb 2022",
    location: "Remote · São Paulo, BR",
    highlights: [
      "Rebuilt the checkout flow with React and Vue, reducing cart abandonment by 20%.",
      "Integrated analytics and A/B testing, driving a 15% lift in weekly transactions.",
    ],
    tags: ["React", "Vue", "A/B Testing"],
  },
];

export const earlierExperience = [
  { company: "Udacity", role: "Tech Advisor, React Nanodegree", period: "2018 – 2021" },
  { company: "Proenem", role: "Front-end Engineer", period: "2019 – 2020" },
  { company: "Grifo", role: "Full-stack Engineer", period: "2018 – 2019" },
  { company: "Taylor", role: "Senior Front-end Engineer", period: "2018" },
  { company: "PDVend", role: "Head of Front-end", period: "2016 – 2017" },
  { company: "Object Edge", role: "Lead Front-end Engineer", period: "2015 – 2016" },
  { company: "Xtech Commerce", role: "Lead Web Developer", period: "2013 – 2015" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Next.js", "React Native", "Vue", "Redux", "Tailwind CSS", "Framer Motion", "Astro"],
  },
  {
    group: "Backend",
    items: ["Ruby on Rails", "Hotwire", "Node.js", "NestJS", "PostgreSQL", "Redis", "REST & GraphQL APIs", "WebSockets"],
  },
  {
    group: "Cloud & Delivery",
    items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel"],
  },
  {
    group: "Quality & Observability",
    items: ["Datadog", "Sentry", "Accessibility (WCAG 2.1)", "Web Performance", "A/B Testing", "Design Systems"],
  },
  {
    group: "AI",
    items: ["LLM integrations", "OpenAI API", "AI-assisted development (Claude Code, Cursor)"],
  },
];
