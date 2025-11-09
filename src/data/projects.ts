import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cultiva-ai",
    slug: "cultiva-ai",
    title: "Cultiva.ai",
    shortDescription:
      "Get personalized growing guidance based on your space, goals, and experience level. Cultiva.ai is your intelligent cultivation companion.",
    description:
      "Your personalized cultivation guide. Discover the perfect growing setup with our intelligent guide system. We help you optimize your cultivation based on size, amount, and desired effects. Targeted to medicinal cannabis patients, Cultiva.ai provides tailored advice to ensure you achieve the best results from your grow space.",
    thumbnail: "/projects/cultiva-ai.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "TensorFlow",
      "LLM Integration",
      "Python",
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
