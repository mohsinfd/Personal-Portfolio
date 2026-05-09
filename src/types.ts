
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  isCurrent?: boolean;
  category: "Platform Leadership" | "Systems & Scale" | "Founder / Builder";
}

export interface Skin {
  name: string;
  wear: string;
  float: string;
  category: string;
  caption: string;
  imageUrl: string;
}

export interface Highlight {
  kpi: string;
  label: string;
}

export interface CaseStudyLink {
  label: string;
  href: string;
}

export interface SelectedWork {
  id: string;
  title: string;
  rootProblem: string;
  productBelief: string;
  built: string[];
  whyItMattered: string;
  links?: CaseStudyLink[];
}

export interface GitHubProject {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  artifactType?: string;
  whyExists?: string;
  repoUrl: string;
  cta: string;
}

export interface PersonalLink {
  label: string;
  href: string;
}

export interface Pet {
  name: string;
  species: string;
  traits: string[];
}

export interface CSSkin {
  id: string;
  name: string;
  weapon?: string;
  wear?: string;
  float?: string;
  category?: string;
  caption?: string;
  imageUrl?: string;
}

export interface WorkPrinciple {
  title: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  philosophy: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  selectedWork: SelectedWork[];
  githubProjects: GitHubProject[];
  experience: Experience[];
  writing: { title: string; href: string; tldr: string }[];
  personal: {
    bio: string;
    petsDescription: string;
    csSkinsDescription: string;
  };
  pets: Pet[];
  csSkins: CSSkin[];
  howIWork: {
    headline: string;
    subheading: string;
    principles: WorkPrinciple[];
    closingLine: string;
  };
}

