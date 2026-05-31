import { GitHubProject } from '../types';

export const DEMOS_DATA: GitHubProject[] = [
  {
    title: "BankKaro API Documentation",
    subtitle: "Partner-facing API docs and integration reference",
    artifactType: "API Docs",
    output: "public repo: docs",
    description: "A sanitized public version of partner API docs: endpoint schemas, sample payloads, validation notes, and product navigation for card and loan flows.",
    tech: ["React", "TypeScript", "API Docs"],
    repoUrl: "https://github.com/mohsinfd/BankKaro-API-documentation",
    cta: "View Repo"
  },
  {
    title: "great.cards",
    subtitle: "Spend-based card recommendation product",
    artifactType: "Recommendation Product",
    output: "live product: great.cards",
    description: "A rupee-aware card recommendation surface built around spend patterns, category calculators, card economics, and clearer trade-offs.",
    tech: ["Product Logic", "Fintech", "Recommendations"],
    repoUrl: "https://great.cards",
    cta: "View great.cards"
  },
  {
    title: "BK Validator",
    subtitle: "Benefit-data consistency auditor",
    artifactType: "Data Auditor",
    output: "public repo: validator",
    description: "A Streamlit tool for checking backend card-benefit logic against frontend or marketing data using SQL dumps, Excel workbooks, and LLM-assisted review.",
    tech: ["Python", "Streamlit", "Data QA"],
    repoUrl: "https://github.com/mohsinfd/BK-Validator",
    cta: "View Repo"
  },
  {
    title: "CardGenius AI v2",
    subtitle: "Conversational card recommendation prototype",
    artifactType: "AI Prototype",
    output: "public repo: prototype",
    description: "A Next.js prototype that turns natural-language spend descriptions into structured profiles, asks follow-up questions, and calls a configurable recommendation backend.",
    tech: ["Next.js", "TypeScript", "OpenAI"],
    repoUrl: "https://github.com/mohsinfd/CardGeniusAIv2",
    cta: "View Repo"
  },
  {
    title: "CardGenius Batch Recommendations",
    subtitle: "Spreadsheet-to-recommendation tooling",
    artifactType: "Batch Tooling",
    output: "public repo: batch runner",
    description: "A Python toolkit for running card recommendations from spreadsheet inputs, with column mapping, retries, output shaping, and a Streamlit dashboard.",
    tech: ["Python", "Streamlit", "FastAPI"],
    repoUrl: "https://github.com/mohsinfd/cgonck",
    cta: "View Repo"
  }
];
