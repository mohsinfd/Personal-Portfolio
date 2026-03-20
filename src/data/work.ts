import { SelectedWork } from '../types';

export const WORK_DATA: SelectedWork[] = [
  {
    id: "bankkaro",
    title: "BankKaro / great.cards",
    rootProblem: "Most card and loan experiences were still pretending that more listings meant more clarity. Users were being asked to navigate financial decisions through static pages, shallow comparisons, and a lot of implicit guesswork.",
    productBelief: "The real opportunity was not a better comparison page. It was a system that could connect user behavior, lender rails, recommendation logic, cashback economics, and distribution into something that actually helped people decide.",
    built: [
      "an API-first layer across cards, loans, calculators, and recommendation flows",
      "great.cards as a rupee-accurate, spend-based decision engine",
      "category-specific calculators that made trade-offs easier to understand",
      "SBI and Axis card API journeys",
      "lender onboarding and API integrations across the loans side",
      "AI-led whitelabel frontends to reduce the distance between idea, demo, and partner conversation"
    ],
    whyItMattered: "This gave the business a more defensible shape: not just a frontend for discovery, but a system that could support consumer recommendation, partner distribution, and future platform leverage.",
    links: [
      { label: "great.cards", href: "https://great.cards" },
      { label: "BankKaro", href: "https://bankkaro.com" },
    ],
  },
  {
    id: "fanclash",
    title: "FanClash",
    rootProblem: "Fantasy eSports was still borrowing too much from older fantasy formats. The product was relatively static, engagement was fragile, and the experience wasn’t behaving like it belonged to a live, volatile game ecosystem.",
    productBelief: "If fantasy eSports was going to become more compelling, it had to feel more native to the underlying games: more live, more reactive, and less like a static prediction layer.",
    built: [
      "a tighter KPI and experimentation cadence across product and analytics",
      "a novel real-time fantasy format",
      "stronger engagement and retention loops around gameplay",
      "support for harder-to-structure scoring systems",
      "a B2B computer-vision scoring engine where reliable structured game data was missing"
    ],
    whyItMattered: "The product stopped feeling like a fantasy template laid on top of eSports and started behaving more like a system shaped by the category itself — which showed up in growth, retention, and time spent."
  },
  {
    id: "systems-at-scale",
    title: "Systems at Scale",
    rootProblem: "At scale, product failure usually comes less from missing features and more from systems that stop holding together: regulation, broken workflows, messy incentives, weak internal rails, and too many moving parts pretending to be one thing.",
    productBelief: "If the underlying system becomes more trustworthy, the visible product becomes more durable. Scale is rarely a UI problem first.",
    built: [
      "KYC and conversion flows across 150+ countries",
      "loyalty systems operating at 700M+ profile scale",
      "enterprise SaaS from MVP to real client adoption",
      "booking and internal systems across multiple business environments"
    ],
    whyItMattered: "These roles taught me how product decisions behave once regulation, operational complexity, and scale stop being edge cases and become the environment."
  },
  {
    id: "founder-builder",
    title: "Founder / Builder",
    rootProblem: "Travel discovery and booking were messy in all the familiar ways: too fragmented, too trust-heavy, and too operationally dependent on things users never see but always feel.",
    productBelief: "A tighter product could only work if it respected both the customer decision and the business reality underneath it.",
    built: [
      "the product across web, mobile, and integrations",
      "a supply network across 200+ hotels",
      "customer-facing and post-sales workflows",
      "commercial and operational problem-solving alongside the CEO"
    ],
    whyItMattered: "This is where I learned the part of product work that never leaves you: business model, customer trust, operational mess, and product quality are not separate subjects."
  }
];
