// DeepResearch组件使用的数据类型定义

// 研究主题类型
export const ResearchTopics = [
  'Gen Z shopping behaviors in US market',
  'Disney product licensing trends 2025',
  'Campus life essentials market analysis',
  'Stationary market competitive analysis'
];

// 研究详情结构
export const defaultResearchDetail = {
  summary: "",
  sources: [],
  keyFindings: [],
  marketOpportunities: [],
  internalDataInsights: {
    topPerformingCharacters: [],
    channelPerformance: [],
    kocStrategy: []
  },
  recommendations: []
};

// 默认状态
export const initialState = {
  searchQuery: '',
  isSearching: false,
  selectedResearch: null,
  activeTab: 'overview',
  analysisInProgress: false,
  deepModel: null,
  apiError: null,
  streamingThoughtChain: [],
  streamingResult: '',
  currentThoughtStep: '',
  isThinking: false,
  currentStep: 0,
  stepProgress: 0
}; 