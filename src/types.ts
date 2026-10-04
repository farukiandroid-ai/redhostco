export interface ServiceItem {
  id: string;
  category: 'web-app' | 'ai' | 'content' | 'growth';
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  icon: string;
  deliverables: string[];
  techStack: string[];
  typicalTimeline: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  tagline: string;
  client: string;
  year: string;
  overview: string;
  metrics: { label: string; value: string; detail: string }[];
  deliverables: string[];
  accentColor: string;
  type: 'saas' | 'health-app' | 'generative-3d' | 'ugc-reel';
}

export interface AiPromptTemplate {
  mode: 'GENERATE' | 'AUTOMATE' | 'CREATE' | 'ANALYZE' | 'OPTIMIZE';
  label: string;
  prompt: string;
  model: string;
  outputSample: string;
  tokensPerSec: number;
  latencyMs: number;
}
