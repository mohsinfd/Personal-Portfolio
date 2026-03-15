import { SelectedWork } from '../types';

export const WORK_DATA: SelectedWork[] = [
  {
    id: "bankkaro",
    title: "BankKaro / great.cards",
    rootProblem: "Card and loan discovery was fragmented, shallow, and too cognitively expensive for users. Most aggregator experiences still depended on content, filters, and thin listing logic.",
    productBelief: "The real opportunity was not a better comparison page. It was a platform that combined recommendation logic, lender rails, cashback economics, and partner-ready distribution.",
    built: [
      "API-first platform across cards, loans, calculators, and recommendation flows",
      "great.cards as a rupee-accurate, spend-based recommendation engine",
      "category-specific calculators",
      "SBI and Axis card API journeys",
      "lender onboarding and API integrations across loans",
      "AI-led whitelabel frontends for demos and launches"
    ],
    whyItMattered: "This moved the business closer to a platform model: stronger recommendation depth for users, stronger distribution leverage for partners, and a more defensible system than a standard aggregator frontend.",
    links: [
      { label: "great.cards", href: "https://great.cards" },
      { label: "BankKaro", href: "https://bankkaro.com" },
    ],
  },
  {
    id: "fanclash",
    title: "FanClash",
    rootProblem: "Fantasy eSports was still too static, too shallow, and too borrowed from older fantasy formats. Engagement and retention were fragile, and the product was not fully built for the live, dynamic nature of eSports.",
    productBelief: "The category would only get stronger if the product behaved more like a live system: more reactive, more native to gameplay, and more deeply engaging over time.",
    built: [
      "tighter KPI and experimentation cadence",
      "a novel real-time fantasy format",
      "stronger engagement and retention loops",
      "system support for harder-to-structure scoring",
      "a B2B computer-vision scoring engine for unreliable or missing game data"
    ],
    whyItMattered: "The product became materially stronger on growth and behavior: higher DAUs, better retention, more paying users, and much deeper engagement during play."
  },
  {
    id: "systems-at-scale",
    title: "Systems at Scale",
    rootProblem: "At scale, product failure usually doesn't come from flashy feature gaps. It comes from complexity: regulation, fragmented workflows, messy incentives, inconsistent data, and systems that stop holding together under real operational pressure.",
    productBelief: "If the underlying rails are stronger, the user-facing experience becomes more trustworthy, scalable, and commercially durable.",
    built: [
      "KYC and conversion flows across 150+ countries",
      "loyalty systems operating at 700M+ profile scale",
      "enterprise SaaS from MVP to real client adoption",
      "booking and internal systems across multiple product environments"
    ],
    whyItMattered: "These roles taught me how product decisions survive contact with real scale, regulation, and operating constraints."
  },
  {
    id: "founder-builder",
    title: "Founder / Builder",
    rootProblem: "Travel discovery and booking were still fragmented, trust-heavy, and operationally messy, especially for time-sensitive hotel decisions.",
    productBelief: "A tighter, more focused platform could simplify choice and create a better last-minute booking experience.",
    built: [
      "product across web, mobile, and integrations",
      "supply network across 200+ hotels",
      "customer-facing and post-sales workflows",
      "commercial and operational problem-solving alongside the CEO"
    ],
    whyItMattered: "This is where I learned that product is inseparable from business model, ops reality, and customer trust."
  }
];
