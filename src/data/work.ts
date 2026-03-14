import { SelectedWork } from '../types';

export const WORK_DATA: SelectedWork[] = [
  {
    id: "bankkaro",
    title: "BankKaro / great.cards",
    thesis: "Building a banking platform with cashback, lender rails, and a rupee-accurate recommendation engine.",
    description: "Took BankKaro and great.cards from 0→1 within ~1 year, shaping the product across loans, cards, APIs, recommendation infrastructure, whitelabel demos, and launch readiness.",
    bullets: [
      "Architected an API-first system across credit cards, personal loans, calculators, and recommendation flows",
      "Onboarded 19 lenders for loans, including 5 API-based integrations",
      "Built complex credit-card API journeys with SBI and Axis",
      "Launched great.cards as a rupee-accurate, spend-based decision engine",
      "Built AI-led whitelabel frontends to create partner-ready demos and reduce the time between first conversation and working proof"
    ],
    whyItMattered: "Built the foundation for a consumer-facing recommendation experience and a partner-ready platform model, instead of a one-off aggregator frontend.",
    tag: "Platform build • fintech rails • AI-native execution",
    links: [
      { label: "great.cards", href: "https://great.cards" },
      { label: "BankKaro", href: "https://bankkaro.com" },
    ],
  },
  {
    id: "fanclash",
    title: "FanClash",
    thesis: "Turned a fantasy eSports product into a tighter, higher-retention live system.",
    description: "Led product and analytics across the platform, tightening loops, pushing experimentation cadence, and shipping new mechanics that materially improved engagement and growth.",
    bullets: [
      "Scaled DAUs from 3K to 40K+ in 6 months",
      "Grew paying users by 300%",
      "Improved MoM retention from 25% to 40%",
      "Shipped a novel real-time fantasy format that increased engagement time from ~40s to ~120s",
      "Built a B2B computer-vision scoring engine for eSports titles without reliable structured score data"
    ],
    whyItMattered: "This was a pure product-systems problem: retention, engagement, monetization, and novelty all had to work together.",
    tag: "Consumer growth • retention loops • novel mechanics"
  },
  {
    id: "systems-at-scale",
    title: "Systems at Scale",
    thesis: "Learned how large systems actually behave: regulated flows, loyalty economics, enterprise SaaS, and booking funnels.",
    description: "Across Western Union, Loylty Rewardz, Artwork Flow, Zolo, and Musafir, I worked on products where compliance, operating reality, or platform scale mattered as much as the UI.",
    bullets: [
      "Owned KYC and conversion journeys at Western Union across 150+ countries",
      "Managed loyalty systems serving 700M+ user profiles",
      "Built Artwork Flow from MVP to 12+ enterprise clients before acquisition by Esko",
      "Worked across internal ops systems, consumer booking funnels, and enterprise product surfaces"
    ],
    whyItMattered: "These roles taught me how product decisions hold up under regulation, scale, and operational complexity.",
    tag: "Regulated systems • enterprise product • scale discipline"
  },
  {
    id: "founder-builder",
    title: "Founder / Builder",
    thesis: "My founder years taught me the habits I still trust most: speed, ownership, and respect for the business model.",
    description: "At HotelsAroundYou, I built across product, web, mobile, supply, customer experience, and post-sales operations. It taught me to stay close to users, understand the unit economics, and never outsource ownership.",
    bullets: [
      "Built the platform across mobile, web, and integrations",
      "Scaled supply to 200+ hotels across Western India",
      "Worked directly across product, ops, partnerships, and customer-facing problems"
    ],
    whyItMattered: "This is where the operating instinct came from: build fast, stay close to the customer, and understand what actually makes the business work.",
    tag: "Startup grit • full-stack ownership • commercial reality"
  }
];
