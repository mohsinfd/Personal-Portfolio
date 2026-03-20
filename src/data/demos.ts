import { GitHubProject } from '../types';

export const DEMOS_DATA: GitHubProject[] = [
  {
    title: "BankKaro API Documentation",
    subtitle: "Partner-facing API docs and integration reference",
    description: "A public documentation surface for the BankKaro API stack, created to make platform capabilities easier to understand, demo, and integrate.",
    tech: ["React", "TypeScript", "API Docs"],
    repoUrl: "https://github.com/mohsinfd/BankKaro-API-documentation",
    cta: "View API Docs"
  },
  {
    title: "great.cards",
    subtitle: "Rupee-accurate recommendation engine",
    description: "A spend-based credit-card recommendation experience built to make card selection more legible through category calculators, recommendation flows, and consumer-facing financial modeling.",
    tech: ["React", "TypeScript", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cardgenius",
    cta: "View Demo"
  },
  {
    title: "Statement Intelligence Engine",
    subtitle: "LLM-based spend parsing and categorization",
    description: "A working system for extracting transaction data from encrypted credit-card statements, handling bank-specific password formats, classifying spends into useful categories, and turning raw statements into recommendation-ready inputs.",
    tech: ["Python", "Data Tooling", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cgincognito",
    cta: "View Repo"
  },
  {
    title: "Incognito UX Experiment",
    subtitle: "Privacy-forward recommendation flow",
    description: "An experimental surface created to explore whether privacy-first framing could make recommendation journeys feel more trust-forward and less intimidating.",
    tech: ["React", "UX Experiment"],
    repoUrl: "https://github.com/mohsinfd/cgincognito",
    cta: "View Demo"
  },
  {
    title: "great.cards AI Prototype",
    subtitle: "Conversational recommendation experiments",
    description: "AI-led prototypes exploring chat-based discovery, guided recommendation logic, and more interactive ways to help users navigate card choices.",
    tech: ["Python", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cardgeniusAI",
    cta: "View Repo"
  },
  {
    title: "Data Scraper & Tooling",
    subtitle: "Supporting data infrastructure",
    description: "Supporting scripts and utilities used to feed recommendation and comparison workflows across BankKaro and related product experiments.",
    tech: ["JavaScript", "Data Tooling"],
    repoUrl: "https://github.com/mohsinfd/Data-Scraper",
    cta: "View Repo"
  }
];
