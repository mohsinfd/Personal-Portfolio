
import { PortfolioData } from './types';

export const DATA: PortfolioData = {
  name: "Mohsin Fazal Dingankar",
  role: "Product leader building fintech platforms, recommendation engines, and 0→1 product systems.",
  philosophy: "I work where product, platform, UX, and GTM are all still taking shape — and I help turn that ambiguity into something real.",
  location: "Gurgaon, India",
  email: "mohsinfd@gmail.com",
  github: "https://github.com/mohsinfd",
  linkedin: "https://www.linkedin.com/in/mohsindingankar",
  cv: "/mohsin-dingankar-cv.pdf",
  selectedWork: [
    {
      id: "bankkaro",
      title: "BankKaro / great.cards",
      thesis: "Building a banking aggregator with cashback, partner rails, and a rupee-accurate recommendation engine.",
      bullets: [
        "Took BankKaro and great.cards from 0→1 within ~1 year",
        "Architected an API-first platform across cards, loans, and calculators",
        "Built AI-led whitelabel frontends to accelerate demos and partner launches"
      ],
      links: [
        { label: "great.cards", href: "#" },
        { label: "BankKaro", href: "#" },
      ],
    },
    {
      id: "fanclash",
      title: "FanClash",
      thesis: "Turned a fantasy eSports product into a tighter, higher-retention live system.",
      bullets: [
        "Scaled DAUs from 3K to 40K+ in 6 months",
        "Grew paying users 300%",
        "Shipped a novel real-time fantasy format"
      ]
    },
    {
      id: "systems-at-scale",
      title: "Systems at Scale",
      thesis: "Learned how large systems actually behave: regulated flows, loyalty economics, enterprise SaaS, and booking funnels.",
      bullets: [
        "KYC and conversion at Western Union across 150+ countries",
        "700M+ loyalty profile systems at Loylty Rewardz",
        "Built Artwork Flow from MVP to 12+ enterprise clients"
      ]
    },
    {
      id: "founder-builder",
      title: "Founder / Builder",
      thesis: "My founder years taught me the habits I still trust most: speed, ownership, proximity to users, and respect for the business model.",
      bullets: [
        "Built HotelsAroundYou across product, ops, and supply",
        "Scaled to 200+ hotels across Western India"
      ]
    }
  ],
  githubProjects: [
    {
      title: "BankKaro-API-documentation",
      description: "Partner-facing API reference, integration guides, and endpoints used for Axis and SBI bank integrations.",
      essence: "The source of truth for bank partners. I built this to ensure external teams had a clear contract to integrate against before we even finished the backend.",
      tech: ["Markdown", "Docusaurus", "OpenAPI"],
      repoUrl: "https://github.com/mohsinfd/BankKaro-API-documentation",
      for: "Engineers"
    },
    {
      title: "cardgenius",
      description: "The core web experience for spend-based credit card recommendations.",
      essence: "Rapidly iterated from a spreadsheet to a functional web app to prove that users would actually input their spend categories for better recommendations.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      repoUrl: "https://github.com/mohsinfd/cardgenius",
      for: "Stakeholders"
    },
    {
      title: "bankkaro-loan-journey-mock",
      description: "Prototype of the prequalified personal-loan experience including BRE result surfaces.",
      essence: "Used to simulate the 'Happy Path' for personal loans, helping the team find UX friction points in the BRE results page early in the design phase.",
      tech: ["React", "State-Machine", "Framer-Motion"],
      repoUrl: "https://github.com/mohsinfd/bankkaro-loan-journey-mock",
      for: "Designers"
    },
    {
      title: "cgincognito",
      description: "A privacy-forward UX prototype for the CardGenius experience.",
      essence: "A targeted prototype to address a specific stakeholder concern: 'Will users trust us with their spend data?'. Proved that 'Incognito' branding reduced drop-offs.",
      tech: ["React", "LocalStorage", "Auth-Mocks"],
      repoUrl: "https://github.com/mohsinfd/cgincognito",
      for: "Designers"
    },
    {
      title: "cardgeniusAI",
      description: "Conversational R&D exploring guided discovery and recommendation flows via an AI chatbot layer.",
      essence: "Conversational R&D. Proved that AI-guided discovery could reduce cognitive load for users overwhelmed by 100+ card options.",
      tech: ["LLM-API", "Vector-DB", "Python"],
      repoUrl: "https://github.com/mohsinfd/cardgeniusAI",
      for: "Stakeholders"
    },
    {
      title: "Data-Scraper",
      description: "Web automation scripts used for scraping data for CardGenius and BankKaro datasets.",
      essence: "Proved we could automate the mapping of 100+ MITC (Most Important Terms & Conditions) tables into our benefits taxonomy in days, not months.",
      tech: ["Puppeteer", "Node.js", "JSON-Schema"],
      repoUrl: "https://github.com/mohsinfd/Data-Scraper",
      for: "Engineers"
    }
  ],
  experience: [
    {
      company: "CashKaro / BankKaro",
      role: "Associate Director of Product (Product Lead, BankKaro)",
      period: "Jun 2024 – Present",
      location: "Gurgaon, India",
      isCurrent: true,
      category: "Platform Leadership Years",
      description: [
        "Took BankKaro and great.cards from 0→1 within ~1 year, owning product strategy, platform design, UX direction, launch readiness, and ongoing iteration.",
        "Architected an API-first platform across credit cards, personal loans, recommendation engines, and calculator infrastructure.",
        "Onboarded 19 lenders to the loans platform, including 5 API-based integrations.",
        "Built complex credit card API journeys with SBI and Axis.",
        "Launched great.cards, a rupee-accurate, spend-based recommendation engine.",
        "Built and operationalized AI-led whitelabel frontends to accelerate partner demos and live launches; shipped live work for Tide.",
        "Helped shift the broader product org toward AI-assisted prototyping and MVP building, using LLMs and tools like Cursor."
      ]
    },
    {
      company: "FanClash",
      role: "Head of Product",
      period: "Jul 2022 – Aug 2023",
      location: "Gurgaon, India",
      category: "Platform Leadership Years",
      description: [
        "Led product and analytics across a 12-member team, establishing KPI reviews, experimentation cadence, and post-launch operating rhythm.",
        "Scaled DAUs from 3K to 40K+ in 6 months; grew paying users by 300%; improved MoM retention from 25% to 40%.",
        "Shipped a novel real-time fantasy format that increased engagement time from ~40 seconds to ~120 seconds.",
        "Built a B2B computer-vision scoring engine for eSports titles lacking structured scoring data."
      ]
    },
    {
      company: "Western Union, Bizongo / Artwork Flow, Zolo, Loylty Rewardz, Musafir",
      role: "Senior Product Manager / Product Lead",
      period: "2016 – 2022",
      location: "Various",
      category: "Systems & Scale Years",
      description: [
        "Owned new-user conversion and KYC/compliance journeys at Western Union across 150+ countries.",
        "Built and scaled Artwork Flow, an enterprise SaaS product, from MVP to 12+ enterprise clients; later acquired by Esko.",
        "Helped scale the product org at Zolo and shipped internal and consumer product lines with strong operational adoption.",
        "Managed 17 loyalty apps and points redemption systems at 700M+ profile scale at Loylty Rewardz.",
        "Led major booking-funnel and platform work across flights, hotels, visas, and holidays at Musafir."
      ]
    },
    {
      company: "HotelsAroundYou.com",
      role: "Co-Founder & Chief Product Officer",
      period: "Jan 2013 – May 2016",
      location: "Mumbai, India",
      category: "Founder / Builder Years",
      description: [
        "Built a seed-funded last-minute hotel deals startup from scratch across mobile, web, partner integrations, and supply operations.",
        "Scaled hotel supply to 200+ properties across Western India while owning product, commercial problem-solving, post-sales operations, and customer experience alongside the CEO.",
        "Learned the foundations that still define my work: build fast, stay close to users, understand the business model, and never outsource ownership."
      ]
    }
  ],
  writing: [
    {
      title: "Evidence‑first product pages",
      href: "#",
      tldr: "Replace fluff with real problems and measurable outcomes.",
    },
    {
      title: "Designing brand‑specific credit card surfaces",
      href: "#",
      tldr: "Users search by intent (Amazon, Flipkart); meet them there.",
    },
  ],
  personal: {
    bio: "Partner to Ragini, dad to Mizu. Building products, stories, and a sane life. Gamer at heart, reader, and design tinkerer.",
    petsDescription: "A loud, affectionate home anchored by one dog and three cats. They deserve a place here because they shape the texture of my life more than most job titles do.",
    csSkinsDescription: "A small collector’s shelf from a game I’ve loved for years. Part aesthetics, part memory, part ritual.",
  },
  pets: [
    { name: "Hopey", species: "Dog", traits: ["Indie x Jack Russell", "trained", "park sprinter"] },
    { name: "Lovu", species: "Cat", traits: ["Indie", "dominant", "black/grey/green markings"] },
    { name: "Lalu", species: "Cat", traits: ["Indie‑Persian mix", "renal diet", "no litter box"] },
    { name: "Bob", species: "Cat", traits: ["1‑year", "gentle", "newest"] },
  ],
  csSkins: [
    {
      name: "★ StatTrak™ Falchion Knife | Fade",
      wear: "Factory New",
      float: "0.01234",
      category: "Legacy",
      caption: "Not the flashiest knife ever made, but the Fade finish still does what great skins should: age well and catch light properly.",
      imageUrl: "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1d7v6tYK1iLs-SD1iWwOpzj-1gSCGn20l-tmjVmIqhdHmWa1AkCJRyFuUItBW9wNTmY7jh5ADa3o5Fy3-sinhXrnE8OtZmGks"
    },
    {
      name: "★ Hand Wraps | Cobalt Skulls",
      wear: "Minimal Wear",
      float: "0.12050",
      category: "Modern Premium",
      caption: "Less polished than sport gloves, more character. A little rougher, a little more memorable.",
      imageUrl: "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_uJzsfVhSjuqqhsmsS-MmbD7LT7CAUV7T84sBohW60fg1srnZb6zsw2Ng41MmST43C1L7is9574CBKIh_q2Big_IMOdutcNRd_iuU13QD7PQAmaY"
    },
    {
      name: "USP-S | Printstream",
      wear: "Minimal Wear",
      float: "0.08000",
      category: "Iconic",
      caption: "Clean, monochromatic, and pearlescent. A modern classic that fits perfectly into any loadout.",
      imageUrl: "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_v5kue99XD2hkBwqjDGMnYftb3yUPFR0XsNyRrNc5kO5ltziMenr5lONj4kXyi2riywc7y9o5LtQAqQ7uvqAkScWnv4"
    },
    {
      name: "AK-47 | Legion of Anubis",
      wear: "Battle-Scarred",
      float: "0.85000",
      category: "Iconic",
      caption: "Intricate Egyptian mythology artwork that still looks incredible even when heavily worn.",
      imageUrl: "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIf6GDG6D_uZzsfdwAX6yzBl34TvRn92od3zCOAJxWJR5FOMCthS5lte0Mr_jsgOIi48WmyrgznQeKe-6-wE"
    },
    {
      name: "AWP | Asiimov",
      wear: "Battle-Scarred",
      float: "0.95000",
      category: "Collector",
      caption: "Battle-scarred on paper, immortal in practice. The higher the float, the better the story.",
      imageUrl: "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6V-Kf2cGFiYxO9gqa9sSS_mwR4h4D6Az9ardyqQa1NyDpIkTOBb5ES7wYDiMOyz4lPf2YsX02yg2Ubsh123"
    },
    {
      name: "StatTrak™ M4A1-S | Printstream",
      wear: "Minimal Wear",
      float: "0.08000",
      category: "Modern Premium",
      caption: "Modern, glossy, and almost architectural — the kind of skin that makes digital objects feel over-designed in the best way.",
      imageUrl: "https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj_F7Rienhgk1tjyIpYPwJiPTcAAoCpsiEO5ZsUbpm9C2Zuni4VHW3o5EzSX62HxP7Sg96-hWVqYi_6TJz1aW0nxrkGs"
    }
  ],
  howIWork: {
    headline: "How I Work",
    subheading: "I’m most useful when the org needs both product judgment and builder energy.",
    principles: [
      {
        title: "Systems over screens",
        description: "I care about the mechanism, not just the interface. Good products change behavior because the underlying system is sound."
      },
      {
        title: "Ownership without ceremony",
        description: "I do not wait for perfect resourcing or role clarity. I move from strategy to specs to prototypes to launch support when the work demands it."
      },
      {
        title: "APIs before ornament",
        description: "In complex products, clean contracts matter more than polished mockups. Docs, data structures, and flows are part of the product."
      },
      {
        title: "Evidence over adjectives",
        description: "I prefer measurable claims, instrumented flows, and observable tradeoffs over “vision language” without operating truth."
      },
      {
        title: "Work across altitude",
        description: "I work comfortably with junior engineers, PMs, ops, senior stakeholders, and founders. A lot of product problems are really translation problems."
      }
    ]
  },
};

export const RESUME_TXT = `MOHSIN FAZAL DINGANKAR
PRODUCT LEADER | PLATFORMS, 0→1 LAUNCHES, AND AI-NATIVE EXECUTION
Gurgaon, India | +91 98206 92913 | mohsinfd@gmail.com | linkedin.com/in/mohsindingankar

Product leader with 10+ years building B2C and B2B products across fintech, gaming, travel, and loyalty. I work best in high-ambiguity environments where the product, platform, and business model are still taking shape. My edge is high ownership: I move fluidly from strategy to architecture, UX, prototyping, and launch execution, working comfortably with junior engineers, cross-functional peers, senior stakeholders, and founders. I am most useful where the org needs both product judgment and builder energy — someone who can define the system, pressure-test the details, and help create momentum before the company is fully staffed or perfectly organized.

Built systems spanning KYC/compliance flows across 150+ countries and loyalty ecosystems serving 700M+ user profiles. Across roles, the consistent pattern has been this: start with ambiguity, build structure, create leverage, and leave behind a product or platform that is more scalable than the team started with.

OPERATING RANGE
API-first fintech platforms • Cards and loans journeys • Recommendation engines and calculators • 0→1 vertical launches • KYC/compliance-aware UX • AI-led prototyping and MVP acceleration • Whitelabel product surfaces • Growth, engagement, and retention systems • Cross-functional leadership with strong IC execution

PLATFORM LEADERSHIP YEARS

CashKaro / BankKaro — Associate Director of Product (Product Lead, BankKaro)
June 2024 – Present | Gurgaon
• Took BankKaro and great.cards from 0→1 within ~1 year, owning product strategy, platform design, UX direction, launch readiness, and ongoing iteration.
• Architected an API-first platform across credit cards, personal loans, recommendation engines, and calculator infrastructure, building for both consumer journeys and future platform leverage.
• Onboarded 19 lenders to the loans platform, including 5 API-based integrations, creating a scalable blend of direct connectivity and broader partner coverage.
• Built complex credit card API journeys with SBI and Axis, capabilities still uncommon outside the largest Indian aggregators.
• Launched great.cards, a rupee-accurate, spend-based recommendation engine with category-specific calculators designed to reduce cognitive load and make financial choices more legible for users.
• Built and operationalized AI-led whitelabel frontends to accelerate partner demos and live launches with minimal engineering dependency; shipped live work for Tide and supported active partner conversations across publishers, platforms, and creators.
• Helped shift the broader product org toward AI-assisted prototyping and MVP building, using LLMs and tools like Cursor to compress iteration cycles, improve demo readiness, and increase product throughput.

FanClash — Head of Product
July 2022 – Aug 2023 | Gurgaon
• Led product and analytics across a 12-member team, establishing KPI reviews, experimentation cadence, and post-launch operating rhythm.
• Scaled DAUs from 3K to 40K+ in 6 months; grew paying users by 300%; improved MoM retention from 25% to 40%.
• Shipped a novel real-time fantasy format that increased engagement time from ~40 seconds to ~120 seconds.
• Built a B2B computer-vision scoring engine for eSports titles lacking structured scoring data.

SYSTEMS & SCALE YEARS

Western Union, Bizongo / Artwork Flow, Zolo, Loylty Rewardz, Musafir — Senior Product Manager / Product Lead
2016 – 2022
• Owned new-user conversion and KYC/compliance journeys at Western Union across 150+ countries, operating in one of the most tightly regulated product environments in consumer finance.
• Built and scaled Artwork Flow, an enterprise SaaS product, from MVP to 12+ enterprise clients; later acquired by Esko.
• Helped scale the product org at Zolo and shipped internal and consumer product lines with strong operational adoption.
• Managed 17 loyalty apps and points redemption systems at 700M+ profile scale at Loylty Rewardz.
• Led major booking-funnel and platform work across flights, hotels, visas, and holidays at Musafir.

FOUNDER / BUILDER YEARS

HotelsAroundYou.com — Co-Founder & Chief Product Officer
Jan 2013 – May 2016 | Mumbai
• Built a seed-funded last-minute hotel deals startup from scratch across mobile, web, partner integrations, and supply operations.
• Scaled hotel supply to 200+ properties across Western India while owning product, commercial problem-solving, post-sales operations, and customer experience alongside the CEO.
• Learned the foundations that still define my work: build fast, stay close to users, understand the business model, and never outsource ownership.

EDUCATION
M.A., International Relations — UC San Diego (UCSD)
B.E., Electronics Engineering — University of Mumbai
`;
