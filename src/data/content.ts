import { ServiceItem, CaseStudy, AiPromptTemplate } from '../types';

export const REDHOST_LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1VOdmX8byOjgO_S8F2g-QCkv_kMHyZ8WJJ5gK5-rjDQDUS4uQGMEVqJ2ye54EPdg4hUAm2sSVnxh_R4uBstj4ReUDl1doWjc-fIAiuFkixxtlrW6SI1Lw0YAqP_VPAvGsQFI_bTBK6hIjoVL5CIBoUV3XFGgmK9Er9VPvA7rke1eXQmMilFZ2miiaaIyudGM_LAPu406GS3AHdr1jvgZgz5ycLoL1RO60X6C2IlstkB6XxQf5ckcriLlfE0';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-development',
    category: 'web-app',
    title: 'Website Development',
    shortDesc: 'Modern websites, high-conversion landing pages, business platforms, portfolios and hyper-fast digital flagships.',
    fullDesc: 'We build responsive, accessibility-first web flagships engineered with modern frameworks (Next.js, React, Tailwind). Designed to balance editorial beauty with sub-second page performance and maximum organic discovery.',
    tags: ['Responsive design', 'Modern UI/UX', 'SEO-ready structure', 'Fast performance'],
    icon: 'Globe',
    deliverables: ['Custom Responsive Frontend', 'Headless CMS Integration', 'Core Web Vitals 98+ Score', 'Semantic SEO Architecture'],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel / Cloudflare'],
    typicalTimeline: '3 – 5 weeks'
  },
  {
    id: 'app-development',
    category: 'web-app',
    title: 'App Development',
    shortDesc: 'User-friendly mobile and web applications designed around real business workflows, user needs, and fault-tolerant cloud backends.',
    fullDesc: 'From intuitive client portals to cross-platform mobile experiences, we engineer robust applications tailored for high user retention, seamless offline capabilities, and zero-latency state sync.',
    tags: ['Web apps', 'Mobile apps', 'Dashboards', 'Custom interfaces'],
    icon: 'Smartphone',
    deliverables: ['Full-stack Application Architecture', 'iOS & Android Native / PWA Build', 'Real-time WebSocket & API Layer', 'Comprehensive Auth & RBAC'],
    techStack: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    typicalTimeline: '6 – 10 weeks'
  },
  {
  id: 'ai-solutions',
  category: 'ai',
  title: 'AI Solutions & Training',
  shortDesc: 'Helping businesses adopt the right AI tools, streamline everyday work, automate tasks, and build practical AI skills through guided training.',
  fullDesc: 'We help businesses discover, integrate, and effectively use AI tools for content creation, marketing, customer support, productivity, data analysis, and everyday operations. Our practical courses and hands-on training help teams understand AI, choose the right tools, create efficient workflows, and use AI confidently in their daily work.',
  tags: ['AI Tool Integration', 'AI Automation', 'Business AI Training', 'AI Courses'],
  icon: 'Cpu',
  deliverables: [
    'AI Tool Selection & Integration',
    'Business AI Workflow Setup',
    'Hands-on AI Courses & Training',
    'Team AI Productivity Workshops'
  ],
  techStack: [
    'Gemini',
    'ChatGPT',
    'Claude',
    'Canva AI',
    'Google AI Tools',
    'AI Automation Tools'
  ],
  typicalTimeline: '1 – 4 weeks'
},
  {
    id: 'digital-content',
    category: 'content',
    title: 'Digital Content Creation',
    shortDesc: 'Creative digital media engineered for contemporary social ecosystems, algorithmic momentum, and high brand retention.',
    fullDesc: 'We conceptualize and deploy high-converting creative media: TikTok/Reels direct-response hooks, stylized 3D product visuals, dynamic sound design, and brand asset libraries built to capture attention in saturated feeds.',
    tags: ['Reels & Shorts', 'Graphics', 'UGC concepts', 'Video concepts'],
    icon: 'Film',
    deliverables: ['Short-form Viral Video Batches', '3D Photorealistic Key Visuals', 'Algorithm-optimized Script Frameworks', 'Audio Design & Sound Identity'],
    techStack: ['Blender / Cinema4D', 'After Effects', 'Midjourney v6.1', 'Premiere Pro'],
    typicalTimeline: '2 – 4 weeks'
  },
  {
    id: 'online-promotion',
    category: 'growth',
    title: 'Online Promotion',
    shortDesc: 'Scale visibility and revenue velocity through calculated digital campaigns, strategic social distribution, and data-backed testing.',
    fullDesc: 'Performance marketing systems that marry creative storytelling with rigorous mathematical distribution. We optimize ad creative velocity, multi-variant landing funnels, and programmatic growth loops.',
    tags: ['Social media', 'Campaign creatives', 'Content strategy', 'Paid acquisition'],
    icon: 'TrendingUp',
    deliverables: ['Full-Funnel Paid Acquisition Strategy', 'Creative A/B Testing Matrix', 'Conversion Rate Optimization (CRO)', 'Real-time Analytics Dashboard'],
    techStack: ['Meta Ads API', 'Google Ads', 'PostHog', 'Mixpanel', 'GA4'],
    typicalTimeline: 'Ongoing / Sprints'
  },
  {
    id: 'ai-tools-learning',
    category: 'ai',
    title: 'AI Tools & Learning',
    shortDesc: 'Master and integrate modern neural tooling through practical playbooks, prompt engineering frameworks, and live team workshops.',
    fullDesc: 'Hands-on enablement programs for engineering, marketing, and executive leadership. We demystify generative AI into repeatable, compliant team workflows with custom prompt systems and automation toolkits.',
    tags: ['AI tool training', 'Prompt systems', 'AI productivity', 'Workshops'],
    icon: 'GraduationCap',
    deliverables: ['Interactive Team Training Workshops', 'Proprietary Prompt Engineering Playbook', 'AI Governance & Compliance Guidelines', 'Custom Tool Sandbox Access'],
    techStack: ['Google AI Studio', 'Cursor', 'Claude Workspaces', 'Custom Internal Assistants'],
    typicalTimeline: '1 – 3 weeks'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'novapay',
    category: 'Web Design • SaaS Architecture',
    title: 'NovaPay Cloud Platform',
    tagline: 'High-throughput payment orchestration and real-time ledger portal.',
    client: 'NovaPay Global Inc.',
    year: '2025',
    overview: 'NovaPay required an ultra-low latency treasury and payout dashboard capable of processing $4M+ daily settlement volume without visual lag or transaction ambiguity. We engineered a reactive Next.js portal with sub-10ms UI latency.',
    metrics: [
      { label: 'Gross Daily Volume', value: '$4.28M', detail: 'Settled daily with zero downtime' },
      { label: 'Settlement Rate', value: '99.98%', detail: 'Instant multi-rail verification' },
      { label: 'API / UI Latency', value: '8.2ms', detail: 'Tabular rendering speed' }
    ],
    deliverables: ['Complete Brand Refresh', 'Dashboard Architecture & Design System', 'Reactive Next.js & TypeScript Portal', 'Sub-second WebSocket Ledger Streaming'],
    accentColor: '#5d3bce',
    type: 'saas'
  },
  {
    id: 'aura-health',
    category: 'App Design • Mobile Product',
    title: 'Aura Health & Fitness',
    tagline: 'Ambient biometrics streaming and recovery score companion app.',
    client: 'Aura Labs LLC',
    year: '2025',
    overview: 'Aura wanted to replace clinical medical charts with an intuitive, calm daily recovery interface. We designed and developed a native iOS/Android biometric streaming app featuring ambient color shifts based on strain and sleep quality.',
    metrics: [
      { label: 'Daily Active Strain', value: '14.8', detail: 'Average user optimal readiness' },
      { label: 'User Retention (D30)', value: '72.4%', detail: 'Significantly above fitness category average' },
      { label: 'Sleep Score Precision', value: '99.1%', detail: 'Continuous Bluetooth sync' }
    ],
    deliverables: ['Cross-platform React Native / Expo App', 'Custom Fluid Canvas Heart Rate Visualizer', 'Calm Theme Design Language', 'Offline-First HealthKit Sync Engine'],
    accentColor: '#006973',
    type: 'health-app'
  },
  {
    id: 'synthetix',
    category: 'AI Creative • Generative 3D',
    title: 'Synthetix AI Brand Campaign',
    tagline: 'Over 1,200 generative key visuals produced for global product launch.',
    client: 'Synthetix Neural Corp',
    year: '2026',
    overview: 'For their flagship worldwide release, Synthetix needed a cohesive visual universe bridging physical luxury with quantum neural computing. We built an automated Midjourney and ComfyUI pipeline that generated consistent iridescent glass branding.',
    metrics: [
      { label: 'Assets Generated', value: '1,200+', detail: 'Cohesive 8K campaign assets' },
      { label: 'Production Time Saved', value: '78%', detail: 'Compared to conventional 3D rendering' },
      { label: 'Global Media Reach', value: '18.4M', detail: 'Total digital impressions' }
    ],
    deliverables: ['Custom Neural ComfyUI Workflow', 'Multi-format Billboard & Social Key Visuals', 'Prismatic Interactive Web GL Shader', 'Global Brand Identity Guidelines'],
    accentColor: '#7657e8',
    type: 'generative-3d'
  },
  {
    id: 'kinetix',
    category: 'Social Content System • TikTok • Reels',
    title: 'Kinetix Apparel UGC Engine',
    tagline: 'Automated creator seeding, dynamic hook generation, and scale deployment.',
    client: 'Kinetix Athletics',
    year: '2025',
    overview: 'Kinetix struggled to scale creative ad variations efficiently. We established an automated short-form video assembly line: algorithmic trend scraping, direct-response script templates, and daily micro-creator video deployment.',
    metrics: [
      { label: 'Campaign Reach', value: '4.8M', detail: 'Organic & paid views across TikTok/IG' },
      { label: 'Return On Ad Spend', value: '4.8x', detail: 'Average blended ROAS' },
      { label: 'Top Reel Views', value: '1.2M', detail: 'Viral organic hook performance' }
    ],
    deliverables: ['30 Direct-Response Script Frameworks', 'Creator Selection & Onboarding Matrix', 'Modular CapCut & Premiere Motion Templates', 'Multi-variant Paid Ad Testing Suite'],
    accentColor: '#38c4d4',
    type: 'ugc-reel'
  }
];

export const AI_PROMPT_TEMPLATES: AiPromptTemplate[] = [
  {
    mode: 'GENERATE',
    label: 'Landing Page Strategy',
    prompt: 'Synthesize omnichannel retail consumer sentiment, extract key conversion inhibitors, output production-ready React micro-components for immediate A/B staging.',
    model: 'Gemini 2.5 Flash + Custom RAG',
    outputSample: `// Strategic Synthesis:
• Primary Friction: 64% of drop-offs occur on secondary checkout options.
• Solution: Consolidate express payment (Apple Pay / Shop Pay) above the fold with 1-click tokenization.
• Generated Component: <ExpressConversionStripe trustBadge={true} latency="12ms" />`,
    tokensPerSec: 256,
    latencyMs: 38
  },
  {
    mode: 'AUTOMATE',
    label: 'Lead Routing Agent',
    prompt: 'Evaluate incoming enterprise intake inquiries, score technical feasibility, assign partner architect, and draft tailored scope estimate response.',
    model: 'Gemini 2.5 Pro Agent Pipeline',
    outputSample: `// Autonomous Workflow Dispatch:
• Intake ID: #7829-Apex-Corp
• Feasibility: High (Technical match: Web + Custom AI RAG)
• Estimated Scope: $25k-$35k (6-week delivery)
• Auto-Drafted NDA & Technical Brief queued for Senior Partner signoff.`,
    tokensPerSec: 184,
    latencyMs: 44
  },
  {
    mode: 'CREATE',
    label: 'Viral Reel Hook Engine',
    prompt: 'Generate 3 high-retention direct response video hooks for a modern B2B SaaS product targeting engineering founders.',
    model: 'Creative Diffusion & Copy Engine',
    outputSample: `Hook 01: "Why 90% of SaaS startups rewrite their landing pages 3 months after launch (and the 1 fix to avoid it)..."
Hook 02: "Show your customers what you built in 14 seconds without saying 'AI-powered' once."
Hook 03: "The exact 3-step technical stack REDHOST uses to ship products in 3 weeks instead of 6 months."`,
    tokensPerSec: 312,
    latencyMs: 29
  },
  {
    mode: 'ANALYZE',
    label: 'Core Web Vitals Audit',
    prompt: 'Inspect simulated DOM layout, identify render-blocking CSS/JS, and recommend critical path optimizations.',
    model: 'DOM Telemetry Analyzer',
    outputSample: `// Performance Audit Report:
• Largest Contentful Paint (LCP): 0.82s (Optimal)
• Cumulative Layout Shift (CLS): 0.002 (Virtually Zero)
• First Input Delay (FID): 6ms
• Optimization: Font display swap verified; CSS inline critical path cached.`,
    tokensPerSec: 290,
    latencyMs: 31
  },
  {
    mode: 'OPTIMIZE',
    label: 'Conversion Rate Engineering',
    prompt: 'Run multi-armed bandit simulation on button micro-copy and visual hierarchy for SaaS checkout flow.',
    model: 'Algorithmic Optimization Engine',
    outputSample: `// Simulation Results (10,000 passes):
• Variant B ("Start a Project" + Subtle Ambient Violet Ring): +28.4% conversion uplift.
• Variant A (Flat Grey "Contact Sales"): -14.2% engagement baseline.
• Recommended Action: Deploy Variant B globally with 100% traffic allocation.`,
    tokensPerSec: 270,
    latencyMs: 35
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    phase: 'PHASE 1',
    title: 'DISCOVER',
    description: 'Understand the idea, audience, competitive edge and conversion goals through structured discovery sprints.',
    deliverable: 'Scope & Tech Architecture',
    duration: 'Week 1',
    color: '#5d3bce'
  },
  {
    step: '02',
    phase: 'PHASE 2',
    title: 'DESIGN',
    description: 'Build the visual direction, design systems, UX architecture and high-fidelity prototypes in collaborative Figma environments.',
    deliverable: 'Design Tokens & Interactive Prototypes',
    duration: 'Weeks 2 – 3',
    color: '#006973'
  },
  {
    step: '03',
    phase: 'PHASE 3',
    title: 'BUILD',
    description: 'Develop the website, scalable app, AI workflow or automated content pipeline with modern continuous integration pipelines.',
    deliverable: 'Staging Deployment & Quality Assurance',
    duration: 'Weeks 4 – 6',
    color: '#171c26'
  },
  {
    step: '04',
    phase: 'PHASE 4',
    title: 'LAUNCH',
    description: 'Test, optimize performance, deploy with zero downtime and provide ongoing growth telemetry and iteration.',
    deliverable: 'Production Release & Growth Hand-off',
    duration: 'Week 7+',
    color: '#7657e8'
  }
];

export const PHILOSOPHY_POINTS = [
  {
    title: 'DESIGN FIRST',
    description: 'Beautiful interfaces built around effortless usability and brand prestige. We don’t settle for off-the-shelf templates; every experience is custom tailored to your identity.',
    icon: 'Palette',
  
    accent: '#5d3bce'
  },
  {
    title: 'AI INTEGRATION',
    description: 'Modern AI tools integrated into practical workflows that save hours each day. From continuous ingestion to customer routing, we leverage Business growth with AI tools.',
    icon: 'Terminal',
    accent: '#006973'
  },
  {
    title: 'CREATIVE THINKING',
    description: 'Technology combined with visual storytelling that cuts through the noise. We understand algorithmic attention mechanics across short-form video and high-end digital publishing.',
    icon: 'Lightbulb',
    
    accent: '#7657e8'
  },
  {
    title: 'BUSINESS FOCUSED',
    description: 'Every digital product is engineered with measurable ROI and purpose. We focus on conversion rates, retention curves, organic authority, and tangible bottom-line expansion.',
    icon: 'TrendingUp',
    accent: '#141923'
  }
];
