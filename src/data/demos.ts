import { GitHubProject } from '../types';

export const DEMOS_DATA: GitHubProject[] = [
  {
    title: "BankKaro API Documentation",
    subtitle: "Partner-facing API docs and integration reference",
    artifactType: "API Docs",
    description: "Public docs for the BankKaro API stack, created to make the product easier to understand, demo, and integrate.",
    whyExists: "Made the platform easier to explain to partners and easier to hand off internally.",
    tech: ["React", "TypeScript", "API Docs"],
    repoUrl: "https://github.com/mohsinfd/BankKaro-API-documentation",
    cta: "View API Docs"
  },
  {
    title: "great.cards",
    subtitle: "Rupee-accurate recommendation engine",
    artifactType: "Recommendation Engine",
    description: "A spend-based credit-card recommendation product built to make card selection easier through category calculators, recommendation flows, and consumer-facing financial modeling.",
    whyExists: "Turned an abstract card-selection problem into something users and partners could react to.",
    tech: ["React", "TypeScript", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cardgenius",
    cta: "View Demo"
  },
  {
    title: "Statement Intelligence Engine",
    subtitle: "LLM-based spend parsing and categorization",
    artifactType: "Statement Parser",
    description: "A working system for extracting transaction data from encrypted credit-card statements, handling bank-specific password formats, classifying spends into useful categories, and turning raw statements into recommendation-ready inputs.",
    whyExists: "Explored whether raw statements could become recommendation inputs without asking users to do manual categorization.",
    tech: ["Python", "Data Tooling", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cgincognito",
    cta: "View Repo"
  },
  {
    title: "Incognito UX Experiment",
    subtitle: "Privacy-forward recommendation flow",
    artifactType: "Privacy UX",
    description: "An experiment to see whether clearer privacy framing could make recommendation journeys feel safer and less intimidating.",
    whyExists: "Tested whether a more careful privacy frame could lower user anxiety in financial-data flows.",
    tech: ["React", "UX Experiment"],
    repoUrl: "https://github.com/mohsinfd/cgincognito",
    cta: "View Demo"
  },
  {
    title: "great.cards AI Prototype",
    subtitle: "Conversational recommendation experiments",
    artifactType: "AI Prototype",
    description: "AI-led prototypes exploring chat-based discovery, guided recommendation logic, and more interactive ways to help users navigate card choices.",
    whyExists: "Helped make conversational discovery concrete enough to evaluate beyond a deck or prompt demo.",
    tech: ["Python", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cardgeniusAI",
    cta: "View Repo"
  },
  {
    title: "Data Scraper & Tooling",
    subtitle: "Supporting data infrastructure",
    artifactType: "Data Tooling",
    description: "Supporting scripts and utilities used to feed recommendation and comparison workflows across BankKaro and related product experiments.",
    whyExists: "Kept product experiments supplied with cleaner comparison and recommendation data.",
    tech: ["JavaScript", "Data Tooling"],
    repoUrl: "https://github.com/mohsinfd/Data-Scraper",
    cta: "View Repo"
  }
];
