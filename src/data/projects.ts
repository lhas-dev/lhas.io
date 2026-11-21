import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cultiva-ai",
    slug: "cultiva-ai",
    title: "Cultiva.ai",
    shortDescription:
      "Rails 8 SaaS that turns a grower's space, goals and budget into an AI-generated, step-by-step cultivation guide.",
    description:
      "A product I designed and built end to end, from landing page to payments.\n\nUsers go through a multi-step wizard (grow space, monthly harvest goal, desired effects and budget). A background job calls an LLM API to generate a personalized guide, and the page updates automatically when it is ready, rendered as a book-like reader with chapters. Guides are unlocked through a Stripe-powered paywall.\n\nBuilt with Ruby on Rails 8 and Hotwire to keep the stack small and ship fast, with PostgreSQL and background jobs underneath. Targeted at medicinal cannabis patients, the product is now evolving into a grow diary focused on fast daily logging.",
    thumbnail: "/projects/cultiva-ai.jpg",
    technologies: [
      "Ruby on Rails 8",
      "Hotwire",
      "PostgreSQL",
      "LLM Integration",
      "Stripe",
      "Background Jobs",
    ],
    links: {
      live: "https://cultiva.ai",
    },
  },
  {
    id: "buy-the-dip-btc",
    slug: "buy-the-dip-btc-strategy-monitor",
    title: "Buy the Dip BTC Strategy Monitor",
    shortDescription:
      "Real-time Bitcoin investment strategy tracker with automated dip detection",
    description:
      'A sophisticated monitoring tool designed for Bitcoin investors following the "Buy the Dip" strategy. The application tracks market trends, identifies optimal buying opportunities based on historical data and technical indicators, and provides real-time alerts when strategic entry points are detected.',
    thumbnail: "/projects/buy-the-dip-btc.jpg",
    technologies: [
      "Python",
      "WebSockets",
      "Telegram API",
      "Bot",
      "Cryptocurrency APIs",
    ],
    links: {
      github: "https://github.com/lhas-dev/monitor-btc",
    },
  },
];
