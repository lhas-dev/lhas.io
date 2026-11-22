// Case studies: production work told as context → investigation → contribution → outcome.
// Client names are only shown where they are already public on the experience list.

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  company: string;
  role: string;
  period: string;
  metrics: { value: string; label: string }[];
  context: string[];
  investigation: string[];
  contribution: string[];
  outcome: string[];
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "trial-activation-housecall-pro",
    title: "Turning free trials into active accounts",
    summary:
      "Owning the first surfaces every new Housecall Pro account sees, and reshaping onboarding around what new businesses actually do in their first days.",
    company: "Housecall Pro",
    role: "Senior Software Engineer · PLG Discovery",
    period: "2025 – 2026",
    metrics: [
      { value: "36%", label: "lift in trial activation" },
      { value: "200K+", label: "home-service pros on the platform" },
      { value: "14 days", label: "free-trial window to activate" },
    ],
    context: [
      "Housecall Pro is a SaaS platform for home-service businesses. New accounts get a 14-day free trial, so the first sessions decide whether a business ever becomes a paying customer.",
      "The PLG Discovery team owns those first sessions: the navigation layer, the homepage, and the onboarding experiences that sit on top of them.",
    ],
    investigation: [
      "We looked at product usage and the onboarding funnel in Snowflake to see where new accounts stalled between sign-up and activation.",
      "That analysis shaped what we prioritized and how we iterated on each onboarding surface.",
    ],
    contribution: [
      "Built and maintained the navigation layer and homepage in React and TypeScript, on top of a Ruby on Rails platform.",
      "Delivered the onboarding, Get Started and checklist experiences that guide a new business from sign-up to activation.",
      "Wrote architecture review documents and aligned with the Platform team on shared components and infrastructure, so discovery work didn't fork the rest of the app.",
      "Owned incident response for discovery surfaces in a one-week-per-month on-call rotation, with Datadog and Sentry.",
    ],
    outcome: [
      "The onboarding work contributed to a 36% lift in trial activation.",
      "Discovery surfaces stayed on shared platform components and were covered by on-call, so they could keep changing quickly without becoming a separate codebase to maintain.",
    ],
    tags: ["React", "TypeScript", "Ruby on Rails", "Snowflake", "Datadog", "Sentry"],
  },
];
