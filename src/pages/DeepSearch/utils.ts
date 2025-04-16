import { DeepModel } from './DeepModel';

export const researchTopics = [
  'Gen Z shopping behaviors in US market',
  'Disney product licensing trends 2025',
  'Campus life essentials market analysis',
  'Stationary market competitive analysis'
];

export const updateStepProgress = (
  progress: number, 
  stepProgress: number, 
  setStepProgress: (progress: number) => void
): void => {
  if (Math.abs(progress - stepProgress) > 10) {
    const startProgress = stepProgress;
    const endProgress = progress;
    const duration = 500; 
    const startTime = Date.now();
    
    const animateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const progressFraction = Math.min(elapsedTime / duration, 1);
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentProgress = startProgress + (endProgress - startProgress) * easeOutQuad(progressFraction);
      
      setStepProgress(currentProgress);
      
      if (progressFraction < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        setStepProgress(endProgress);
      }
    };
    
    requestAnimationFrame(animateProgress);
  } else {
    setStepProgress(progress);
  }
};

export const extractCompetitors = (researchText: string): string[] => {
  const defaultCompetitors = ['Competitor A', 'Competitor B', 'Competitor C'];
  
  if (!researchText) {
    return defaultCompetitors;
  }
  
  try {
    const competitorSection = researchText.match(/竞争[^]*?(?=##|$)/i) || 
                             researchText.match(/competitor[^]*?(?=##|$)/i);
    
    if (competitorSection) {
      const companyNames = competitorSection[0].match(/[A-Z][a-zA-Z]*(?:\s+[A-Z][a-zA-Z]*)*/g);
      if (companyNames && companyNames.length > 0) {
        return companyNames.slice(0, 5); 
      }
    }
    
    return defaultCompetitors;
  } catch (error) {
    return defaultCompetitors;
  }
};

export const extractIndustry = (query: string): string => {
  const defaultIndustry = 'Retail Industry';
  
  try {
    const industryMatch = query.match(/(零售|电商|服装|食品|科技|教育|医疗|金融|旅游|娱乐|游戏)(?:业|行业|市场)/);
    if (industryMatch) {
      const industryMap: {[key: string]: string} = {
        '零售': 'Retail',
        '电商': 'E-commerce',
        '服装': 'Fashion',
        '食品': 'Food',
        '科技': 'Technology',
        '教育': 'Education',
        '医疗': 'Healthcare',
        '金融': 'Finance',
        '旅游': 'Tourism',
        '娱乐': 'Entertainment',
        '游戏': 'Gaming'
      };
      return `${industryMap[industryMatch[1]] || industryMatch[1]} Industry`;
    }
    
    return defaultIndustry;
  } catch (error) {
    return defaultIndustry;
  }
};

export const extractTargetAudience = (researchText: string): string => {
  const defaultAudience = 'Young consumers aged 18-35';
  
  if (!researchText) {
    return defaultAudience;
  }
  
  try {
    const audienceSection = researchText.match(/目标[^]*?(?=##|$)/i) || 
                           researchText.match(/消费者[^]*?(?=##|$)/i) ||
                           researchText.match(/用户[^]*?(?=##|$)/i) ||
                           researchText.match(/target[^]*?(?=##|$)/i) ||
                           researchText.match(/consumer[^]*?(?=##|$)/i) ||
                           researchText.match(/user[^]*?(?=##|$)/i);
    
    if (audienceSection) {
      const audienceMatch = audienceSection[0].match(/(\d+-\d+岁[^,，。]*)|([^,，。]*年轻人[^,，。]*)|([^,，。]*学生[^,，。]*)|([^,，。]*女性[^,，。]*)|([^,，。]*男性[^,，。]*)/);
      if (audienceMatch) {
        const audience = audienceMatch[0].trim();
        // Translate common Chinese audience descriptions
        if (audience.includes('岁')) {
          return audience.replace(/(\d+)-(\d+)岁/, 'Aged $1-$2')
                        .replace('年轻消费者', 'young consumers')
                        .replace('消费者', 'consumers')
                        .replace('用户', 'users');
        } else if (audience.includes('年轻人')) {
          return audience.replace('年轻人', 'Young people');
        } else if (audience.includes('学生')) {
          return audience.replace('学生', 'Students');
        } else if (audience.includes('女性')) {
          return audience.replace('女性', 'Female');
        } else if (audience.includes('男性')) {
          return audience.replace('男性', 'Male');
        }
        return audience;
      }
    }
    
    return defaultAudience;
  } catch (error) {
    return defaultAudience;
  }
};

export const extractProduct = (query: string): string => {
  const defaultProduct = 'Consumer Goods';
  
  try {
    const productMatch = query.match(/(产品|服务|商品|解决方案)/);
    if (productMatch && productMatch.index !== undefined) {
      const beforeProduct = query.substring(0, productMatch.index).trim().split(/\s+/).pop() || '';
      const afterProduct = query.substring(productMatch.index + productMatch[0].length).trim().split(/\s+/)[0] || '';
      
      const productTypeMap: {[key: string]: string} = {
        '产品': 'Product',
        '服务': 'Service',
        '商品': 'Goods',
        '解决方案': 'Solution'
      };
      
      const translatedType = productTypeMap[productMatch[0]] || 'Product';
      
      if (beforeProduct) {
        return `${beforeProduct} ${translatedType}`;
      } else if (afterProduct) {
        return `${translatedType} ${afterProduct}`;
      } else {
        return defaultProduct;
      }
    }
    
    return defaultProduct;
  } catch (error) {
    return defaultProduct;
  }
};

export interface KeyFinding {
  category: string;
  text: string;
}

export interface Source {
  name: string;
  type: string;
  date: string;
  reliability: number;
}

export interface MarketOpportunity {
  opportunity: string;
  size: string;
  competition: string;
  timeline: string;
}

export interface InternalDataInsights {
  topPerformingCharacters: any[];
  channelPerformance: any[];
  kocStrategy: any[];
}

export interface ResearchResult {
  id: number;
  query: string;
  date: string;
  status: string;
  summary: string;
  title: string;
  thoughtChain: string[];
  streamingResult: string;
  sources: Source[];
  keyFindings: KeyFinding[];
  marketOpportunities: MarketOpportunity[];
  internalDataInsights: InternalDataInsights;
  internalDataIntegration?: string;
  recommendations: any[];
  competitorAnalysis?: string;
  consumerInsights?: string;
}

export const processResearchResult = (
  resultText: string, 
  query: string, 
  thoughtChain: string[] | null, 
  streamResult: string = ''
): ResearchResult => {
  const processedThoughtChain = thoughtChain || [];
  
  if (!resultText) {
    resultText = 'No research results';
  }
  
  let summary = '';
  let keyFindings: KeyFinding[] = [];
  let sources: Source[] = [];
  let marketOpportunities: MarketOpportunity[] = [];
  
  try {
    let jsonResult;
    try {
      jsonResult = JSON.parse(resultText);
    } catch (e) {
      summary = resultText;
      
      const findingsMatch = resultText.match(/关键发现|Key Findings([\s\S]*?)(?=##|$)/i);
      if (findingsMatch) {
        const findingsText = findingsMatch[1];
        const findings = findingsText.split(/\n\s*[-•]\s*/).filter(f => f.trim());
        keyFindings = findings.map(f => ({
          category: 'Finding',
          text: f.trim()
        }));
      }
      
      const sourcesMatch = resultText.match(/来源|Sources([\s\S]*?)(?=##|$)/i);
      if (sourcesMatch) {
        const sourcesText = sourcesMatch[1];
        const sourcesList = sourcesText.split(/\n\s*[-•]\s*/).filter(s => s.trim());
        sources = sourcesList.map(s => ({
          name: s.trim(),
          type: 'Research Source',
          date: new Date().getFullYear() + '',
          reliability: Math.floor(Math.random() * 15) + 80 // Random reliability score, for demonstration only
        }));
      }
      
      const opportunitiesMatch = resultText.match(/机会|Opportunities([\s\S]*?)(?=##|$)/i);
      if (opportunitiesMatch) {
        const opportunitiesText = opportunitiesMatch[1];
        const opportunitiesList = opportunitiesText.split(/\n\s*[-•]\s*/).filter(o => o.trim());
        marketOpportunities = opportunitiesList.map(o => ({
          opportunity: o.trim(),
          size: ['Small', 'Medium', 'Large'][Math.floor(Math.random() * 3)], // Random size, for demonstration only
          competition: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)], // Random competition level, for demonstration only
          timeline: `Q${Math.floor(Math.random() * 4) + 1} ${new Date().getFullYear()}`
        }));
      }
    }
    
    if (jsonResult) {
      summary = jsonResult.summary || jsonResult.executiveSummary || resultText;
      
      if (jsonResult.keyFindings) {
        keyFindings = jsonResult.keyFindings.map((f: any) => ({
          category: f.category || 'Finding',
          text: f.text || f
        }));
      }
      
      if (jsonResult.sources) {
        sources = jsonResult.sources.map((s: any) => ({
          name: s.name || s,
          type: s.type || 'Research Source',
          date: s.date || new Date().getFullYear() + '',
          reliability: s.reliability || Math.floor(Math.random() * 15) + 80
        }));
      }
      
      if (jsonResult.marketOpportunities) {
        marketOpportunities = jsonResult.marketOpportunities.map((o: any) => ({
          opportunity: o.opportunity || o,
          size: o.size || ['Small', 'Medium', 'Large'][Math.floor(Math.random() * 3)],
          competition: o.competition || ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
          timeline: o.timeline || `Q${Math.floor(Math.random() * 4) + 1} ${new Date().getFullYear()}`
        }));
      }
    }
    
    return {
      id: Date.now(), 
      query: query,
      date: new Date().toISOString().split('T')[0],
      status: 'completed',
      summary: summary,
      title: `Research: ${query.substring(0, 50)}${query.length > 50 ? '...' : ''}`,
      thoughtChain: processedThoughtChain,
      streamingResult: streamResult, 
      sources: sources.length > 0 ? sources : [
        { name: "Industry Report", type: "Market Research", date: new Date().getFullYear() + "", reliability: 92 },
        { name: "Consumer Survey", type: "User Research", date: new Date().getFullYear() + "", reliability: 88 }
      ],
      keyFindings: keyFindings.length > 0 ? keyFindings : [
        { category: 'Trend', text: 'Key trends extracted from API response' },
        { category: 'Market', text: 'Market information extracted from API response' }
      ],
      marketOpportunities: marketOpportunities.length > 0 ? marketOpportunities : [
        { opportunity: 'Market opportunity based on research', size: 'Medium', competition: 'Medium', timeline: `Q${Math.floor(Math.random() * 4) + 1} ${new Date().getFullYear()}` }
      ],
      internalDataInsights: {
        topPerformingCharacters: [],
        channelPerformance: [],
        kocStrategy: []
      },
      internalDataIntegration: "此研究还未整合内部数据",
      recommendations: []
    };
  } catch (error) {
    return {
      id: Date.now(),
      query: query,
      date: new Date().toISOString().split('T')[0],
      status: 'completed',
      summary: resultText,
      title: `Research: ${query.substring(0, 50)}${query.length > 50 ? '...' : ''}`,
      thoughtChain: processedThoughtChain,
      streamingResult: streamResult,
      sources: [],
      keyFindings: [],
      marketOpportunities: [],
      internalDataInsights: {
        topPerformingCharacters: [],
        channelPerformance: [],
        kocStrategy: []
      },
      internalDataIntegration: "此研究还未整合内部数据",
      recommendations: []
    };
  }
};

export const handleSearch = async (
  searchQuery: string, 
  deepModel: DeepModel | null, 
  setIsSearching: (isSearching: boolean) => void, 
  setApiError: (error: string | null) => void, 
  setStreamingThoughtChain: (chain: string[]) => void, 
  setStreamingResult: (result: string) => void, 
  setCurrentThoughtStep: (step: string) => void, 
  setIsThinking: (isThinking: boolean) => void, 
  setCurrentStep: (step: number) => void, 
  setStepProgress: (progress: number) => void, 
  setAnalysisInProgress: (inProgress: boolean) => void, 
  setSelectedResearch: (research: ResearchResult) => void, 
  setActiveTab: (tab: 'overview' | 'internal' | 'recommendations') => void
): Promise<ResearchResult | null> => {
  // 获取当前的stepProgress值
  let stepProgress = 0;
  
  // 创建一个包装函数，用于更新stepProgress值并调用setStepProgress
  const updateStepProgressWrapper = (progress: number) => {
    stepProgress = progress; // 更新本地变量
    setStepProgress(progress); // 更新React状态
  };
  
  if (!searchQuery.trim() || !deepModel) return null;
  
  setIsSearching(true);
  setApiError(null);
  setStreamingThoughtChain([]);
  setStreamingResult('');
  setCurrentThoughtStep('');
  setIsThinking(true);
  setCurrentStep(0);
  setStepProgress(0);
  
  try {
    setTimeout(() => {
      setIsSearching(false);
      setAnalysisInProgress(true);
    }, 1000);
    
    setCurrentStep(1);
    const thoughtChainResult = await deepModel.streamThoughtChain(
      searchQuery,
      (step, completedSteps) => {
        setCurrentThoughtStep(step);
        setStreamingThoughtChain(completedSteps);
        const progress = (completedSteps.length / 7) * 100; 
        updateStepProgress(Math.min(progress, 95), stepProgress, updateStepProgressWrapper);
      },
      (thoughtChain) => {
        setStreamingThoughtChain(thoughtChain);
        setIsThinking(false);
        updateStepProgress(100, stepProgress, updateStepProgressWrapper); 
      },
      (delta, fullResponse) => {
        setStreamingResult(fullResponse);
      }
    );
    
    let researchData = processResearchResult(
      "Conducting market research analysis...", 
      searchQuery, 
      thoughtChainResult.thoughtChain,
      thoughtChainResult.analysisResult || '' // Use analysisResult or empty string
    );
    
    setSelectedResearch(researchData);
    
    setCurrentStep(2);
    setStepProgress(0); 
    const marketResearchResult = await deepModel.marketResearch(
      searchQuery,
      null,
      (delta, fullResponse) => {
        const progress = Math.min((fullResponse.length / 2000) * 100, 95);
        updateStepProgress(progress, stepProgress, updateStepProgressWrapper);
      },
      true 
    );
    updateStepProgress(100, stepProgress, updateStepProgressWrapper); 
    
    const streamingResultBeforeStep2 = researchData.streamingResult;
    
    researchData = processResearchResult(
      marketResearchResult.result, 
      searchQuery, 
      thoughtChainResult.thoughtChain,
      streamingResultBeforeStep2 
    );
    
    setSelectedResearch({...researchData});
    
    setCurrentStep(3);
    setStepProgress(0); 
    const competitors = extractCompetitors(marketResearchResult.result);
    const competitorAnalysisResult = await deepModel.competitorAnalysis(
      competitors,
      extractIndustry(searchQuery),
      (delta, fullResponse) => {
        const progress = Math.min((fullResponse.length / 1500) * 100, 95);
        updateStepProgress(progress, stepProgress, updateStepProgressWrapper);
      }
    );
    updateStepProgress(100, stepProgress, updateStepProgressWrapper); 
    
    const streamingResultBeforeStep3 = researchData.streamingResult;
    
    const updatedResearchData = {
      ...researchData,
      competitorAnalysis: competitorAnalysisResult.result,
      streamingResult: streamingResultBeforeStep3
    };
    
    researchData = updatedResearchData;
    
    setSelectedResearch({...researchData});
    
    setCurrentStep(4);
    setStepProgress(0); 
    const targetAudience = extractTargetAudience(marketResearchResult.result);
    const product = extractProduct(searchQuery);
    const consumerInsightsResult = await deepModel.consumerInsights(
      targetAudience,
      product,
      (delta, fullResponse) => {
        const progress = Math.min((fullResponse.length / 1500) * 100, 95);
        updateStepProgress(progress, stepProgress, updateStepProgressWrapper);
      }
    );
    updateStepProgress(100, stepProgress, updateStepProgressWrapper); // Set to 100% to indicate completion
    
    const streamingResultBeforeStep4 = researchData.streamingResult;
    
    const updatedResearchDataStep4 = {
      ...researchData,
      consumerInsights: consumerInsightsResult.result,
      streamingResult: streamingResultBeforeStep4
    };
    
    researchData = updatedResearchDataStep4;
    
    setCurrentStep(0); 
    setAnalysisInProgress(false);
    
    setSelectedResearch({...researchData});
    setActiveTab('overview'); 
    
    return researchData;
  } catch (error) {
    setIsSearching(false);
    setAnalysisInProgress(false);
    setIsThinking(false);
    setApiError(`Research analysis failed: ${error instanceof Error ? error.message : String(error)}`);
    return null;
  }
};
