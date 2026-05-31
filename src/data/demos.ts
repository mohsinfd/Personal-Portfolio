import { GitHubProject } from '../types';

export const DEMOS_DATA: GitHubProject[] = [
  {
    title: "BankKaro API Documentation",
    subtitle: "Partner-facing API docs and integration reference",
    artifactType: "API Docs",
    description: "Public docs for the BankKaro API stack, created to make the product easier to understand, demo, and integrate.",
    tech: ["React", "TypeScript", "API Docs"],
    repoUrl: "https://github.com/mohsinfd/BankKaro-API-documentation",
    cta: "View API Docs"
  },
  {
    title: "great.cards",
    subtitle: "Rupee-accurate recommendation engine",
    artifactType: "Recommendation Engine",
    description: "A spend-based credit-card recommendation product with category calculators and rupee-level modeling.",
    tech: ["React", "TypeScript", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cardgenius",
    cta: "View Demo"
  },
  {
    title: "Statement Intelligence Engine",
    subtitle: "LLM-based spend parsing and categorization",
    artifactType: "Statement Parser",
    description: "A parser for encrypted card statements, bank password formats, spend categories, and recommendation inputs.",
    tech: ["Python", "Data Tooling", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cgincognito",
    cta: "View Repo"
  },
  {
    title: "Incognito UX Experiment",
    subtitle: "Privacy-forward recommendation flow",
    artifactType: "Privacy UX",
    description: "An experiment to see whether clearer privacy framing could make recommendation journeys feel safer and less intimidating.",
    tech: ["React", "UX Experiment"],
    repoUrl: "https://github.com/mohsinfd/cgincognito",
    cta: "View Demo"
  },
  {
    title: "great.cards AI Prototype",
    subtitle: "Conversational recommendation experiments",
    artifactType: "AI Prototype",
    description: "AI-led prototypes for chat-based discovery and guided card recommendations.",
    tech: ["Python", "Product Prototype"],
    repoUrl: "https://github.com/mohsinfd/cardgeniusAI",
    cta: "View Repo"
  },
  {
    title: "Data Scraper & Tooling",
    subtitle: "Supporting data infrastructure",
    artifactType: "Data Tooling",
    description: "Scripts and utilities for recommendation and comparison data.",
    tech: ["JavaScript", "Data Tooling"],
    repoUrl: "https://github.com/mohsinfd/Data-Scraper",
    cta: "View Repo"
  }
];
