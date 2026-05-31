import { SelectedWork } from '../types';

export const WORK_DATA: SelectedWork[] = [
  {
    id: "bankkaro",
    title: "BankKaro / great.cards",
    rootProblem: "Card and loan discovery had too much listing logic and not enough decision logic.",
    built: [
      "API-first card and loan flows",
      "great.cards spend-based recommendation engine",
      "SBI and Axis card API journeys",
      "loan-side lender onboarding",
      "AI-assisted whitelabel demos"
    ],
    whyItMattered: "A shared logic layer could power consumer flows, partner demos, whitelabel launches, and future distribution.",
    links: [
      { label: "great.cards", href: "https://great.cards" },
      { label: "BankKaro", href: "https://bankkaro.com" },
    ],
  },
  {
    id: "fanclash",
    title: "FanClash",
    rootProblem: "Fantasy eSports was behaving too much like cricket fantasy with different names.",
    built: [
      "real-time fantasy format around live gameplay",
      "tighter KPI and experimentation rhythm",
      "stronger engagement and retention loops",
      "B2B computer-vision scoring engine"
    ],
    whyItMattered: "The product moved closer to how eSports actually feels: live, fast, and constantly changing."
  },
  {
    id: "systems-at-scale",
    title: "Systems at Scale",
    rootProblem: "At scale, trust depends on invisible work: compliance, fallback paths, internal tools, and support.",
    built: [
      "KYC and conversion flows across 150+ countries",
      "loyalty products operating at 700M+ profile scale",
      "enterprise SaaS from MVP to real client adoption",
      "booking and internal tooling across different business environments"
    ],
    whyItMattered: "These roles made me less impressed by polished screens and more interested in whether the product holds up."
  },
  {
    id: "founder-builder",
    title: "Founder / Builder",
    rootProblem: "In travel, the app was only half the product. Supply, support, and trust carried the rest.",
    built: [
      "web, mobile, and integration work",
      "supply network across 200+ hotels",
      "customer-facing and post-sales workflows",
      "commercial problem-solving alongside the CEO"
    ],
    whyItMattered: "This is where I learned to stay close to users, revenue, and the operational mess underneath the app."
  }
];
