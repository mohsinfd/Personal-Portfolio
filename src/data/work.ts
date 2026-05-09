import { SelectedWork } from '../types';

export const WORK_DATA: SelectedWork[] = [
  {
    id: "bankkaro",
    title: "BankKaro / great.cards",
    rootProblem: "Most card and loan products were still acting as if more listings and comparison tables would somehow create clarity. Users were left doing guesswork, while the business stayed too dependent on thin aggregator logic.",
    productBelief: "This was not mainly a content problem. It was a systems problem: connect user behaviour, lender rails, recommendation logic, cashback economics, and distribution, and the product stops behaving like another comparison layer.",
    built: [
      "API-first rails across cards, loans, calculators, and recommendation flows",
      "great.cards as a rupee-accurate, spend-based decision engine",
      "category-specific calculators that made trade-offs easier to understand",
      "SBI and Axis card API journeys",
      "lender onboarding and API integrations across the loans side",
      "AI-led whitelabel frontends for faster demos and partner conversations"
    ],
    whyItMattered: "It gave the business something more durable than a better frontend: one system that could support consumer recommendations, partner demos, whitelabel versions, and future distribution without rebuilding the logic each time.",
    links: [
      { label: "great.cards", href: "https://great.cards" },
      { label: "BankKaro", href: "https://bankkaro.com" },
    ],
  },
  {
    id: "fanclash",
    title: "FanClash",
    rootProblem: "Fantasy eSports felt too borrowed. The mechanics, pacing, and product logic leaned heavily on older fantasy models instead of the actual nature of live eSports.",
    productBelief: "The product had to feel more native to the category: more live, more reactive, and less like a static prediction layer wrapped around a fast-moving game.",
    built: [
      "a tighter KPI and experimentation cadence across product and analytics",
      "a novel real-time fantasy format",
      "stronger engagement and retention loops around gameplay",
      "support for harder-to-structure scoring systems",
      "a B2B computer-vision scoring engine where reliable structured game data was missing"
    ],
    whyItMattered: "It moved the product closer to the category it was built on. That showed up in the numbers, but more importantly it changed the feel of the thing: less borrowed format, more eSports-native system."
  },
  {
    id: "systems-at-scale",
    title: "Systems at Scale",
    rootProblem: "At scale, products rarely fail because of one missing feature. They fail because too many fragile things pretend to be one coherent system: regulation, workflows, incentives, internal tooling, and customer-facing experience.",
    productBelief: "If the underlying system becomes more trustworthy, the visible product becomes more durable. Scale is rarely a UI problem first.",
    built: [
      "KYC and conversion flows across 150+ countries",
      "loyalty systems operating at 700M+ profile scale",
      "enterprise SaaS from MVP to real client adoption",
      "booking and internal systems across multiple business environments"
    ],
    whyItMattered: "These roles made me much less romantic about scale. They taught me that a lot of product work is really about helping a system stay legible and trustworthy under pressure."
  },
  {
    id: "founder-builder",
    title: "Founder / Builder",
    rootProblem: "Travel discovery and booking were messy in all the familiar ways: fragmented, trust-heavy, and operationally dependent on things users never see but always feel.",
    productBelief: "A tighter travel product only works if it respects both sides of the equation: the customer decision on the surface, and the operational mess holding it up underneath.",
    built: [
      "the product across web, mobile, and integrations",
      "a supply network across 200+ hotels",
      "customer-facing and post-sales workflows",
      "commercial and operational problem-solving alongside the CEO"
    ],
    whyItMattered: "This is where I learned the version of product work I still trust most: stay close to the user, stay close to the business model, and do not pretend operations are somebody else's problem."
  }
];
