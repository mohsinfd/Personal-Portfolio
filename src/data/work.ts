import { SelectedWork } from '../types';

export const WORK_DATA: SelectedWork[] = [
  {
    id: "bankkaro",
    title: "BankKaro / great.cards",
    rootProblem: "Most card and loan products were still acting as if more listings and comparison tables would somehow create clarity. Users were left doing guesswork, while the business stayed too dependent on thin aggregator logic.",
    productBelief: "The answer was not another content page. We needed the logic underneath to improve: user spends, lender rules, card economics, cashback, and distribution had to talk to each other.",
    built: [
      "API-first flows across cards, loans, calculators, and recommendations",
      "great.cards as a rupee-accurate, spend-based card decision engine",
      "category calculators that made card trade-offs easier to see",
      "SBI and Axis card API journeys",
      "loan-side lender onboarding and API integrations",
      "AI-assisted whitelabel frontends for faster demos and partner conversations"
    ],
    whyItMattered: "It gave the business more than a cleaner frontend. The same logic layer could support consumer recommendations, partner demos, whitelabel versions, and future distribution without rebuilding the same work each time.",
    links: [
      { label: "great.cards", href: "https://great.cards" },
      { label: "BankKaro", href: "https://bankkaro.com" },
    ],
  },
  {
    id: "fanclash",
    title: "FanClash",
    rootProblem: "Fantasy eSports felt too borrowed. A lot of the product still behaved like cricket fantasy with different names, even though live eSports has a very different pace and energy.",
    productBelief: "Fantasy eSports could not just be cricket fantasy with different players. The product had to move closer to how eSports actually feels: live, fast, and constantly changing.",
    built: [
      "a tighter KPI and experimentation rhythm across product and analytics",
      "a real-time fantasy format built around live gameplay",
      "stronger engagement and retention loops",
      "support for scoring systems that were harder to structure cleanly",
      "a B2B computer-vision scoring engine where reliable game data was missing"
    ],
    whyItMattered: "It pushed the product closer to the category it was built for. The important shift was not just better numbers, but a product that felt less borrowed and more native to eSports."
  },
  {
    id: "systems-at-scale",
    title: "Systems at Scale",
    rootProblem: "At scale, products rarely fail because of one missing feature. They fail because too many fragile things are pretending to be one system: regulation, workflows, incentives, internal tools, and customer-facing experience.",
    productBelief: "Scale made me less impressed by polished screens. The product only feels good when the hidden parts are reliable enough to stay out of the user's way.",
    built: [
      "KYC and conversion flows across 150+ countries",
      "loyalty products operating at 700M+ profile scale",
      "enterprise SaaS from MVP to real client adoption",
      "booking, internal tooling, and operational systems across different business environments"
    ],
    whyItMattered: "These roles taught me to respect the parts users rarely see: fallbacks, compliance, internal tools, support paths, and the small operational details that decide whether a product can be trusted."
  },
  {
    id: "founder-builder",
    title: "Founder / Builder",
    rootProblem: "Travel discovery and booking were messy in all the familiar ways: fragmented supply, trust gaps, operational dependency, and a lot of things users only notice when they break.",
    productBelief: "In travel, the app is only half the product. The other half is supply, support, trust, and all the operational mess users never see until something goes wrong.",
    built: [
      "the product across web, mobile, and integrations",
      "a supply network across 200+ hotels",
      "customer-facing and post-sales workflows",
      "commercial and operational problem-solving alongside the CEO"
    ],
    whyItMattered: "This is where I learned the version of product work I still trust most: stay close to the user, stay close to the business model, and do not pretend operations are someone else's problem."
  }
];
