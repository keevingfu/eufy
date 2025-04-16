export interface ResearchResult {
  id: string;
  query: string;
  timestamp: number;
  status: 'started' | 'completed' | 'failed';
  summary: string;
  title: string;
  keyFindings: {
    category: string;
    text: string;
  }[];
  sources: {
    name: string;
    reliability: number;
    type: string;
    date: string;
  }[];
  competitorAnalysis?: string;
  consumerInsights?: string;
  marketOpportunities?: {
    opportunity: string;
    size: string;
    competition: string;
    timeline: string;
  }[];
  internalDataIntegration?: string;
  recommendations?: {
    title: string;
    priority: string;
    description: string;
    actions?: string[];
  }[];
} 