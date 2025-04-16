import { createDeepModel } from './deepmodel.js';

// Create an empty object as default export
const DeepResearch = {
  // You can add required properties and methods here
};

export default DeepResearch;

export const researchTopics = [
  'Consumer Trends for Smart Home Cleaning Products in the Chinese Market',
  'Gen Z Usage Preferences and Pain Points Analysis for Smart Home Products',
  '2025 Smart Cleaning Appliances Market Forecast and Opportunities',
  'Market Potential for 3D Printing Integration with Smart Home Products'
];


export const updateStepProgress = (progress, stepProgress, setStepProgress) => {
  if (Math.abs(progress - stepProgress) > 10) {
    const startProgress = stepProgress;
    const endProgress = progress;
    const duration = 500; 
    const startTime = Date.now();
    
    const animateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const progressFraction = Math.min(elapsedTime / duration, 1);
      
      const easeOutQuad = t => t * (2 - t);
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

export const extractCompetitors = (researchText) => {
  const defaultCompetitors = ['Competitor A', 'Competitor B', 'Competitor C'];
  
  if (!researchText) {
    return defaultCompetitors;
  }
  
  try {
    const competitorSection = researchText.match(/competitor[^]*?(?=##|$)/i);
    
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

export const extractIndustry = (query) => {
  const defaultIndustry = 'Retail Industry';
  
  try {
    const industryMatch = query.match(/(retail|e-commerce|fashion|food|technology|education|healthcare|finance|tourism|entertainment|gaming)(?:\s+industry|\s+market)?/i);
    if (industryMatch) {
      const industryMap = {
        'retail': 'Retail',
        'e-commerce': 'E-commerce',
        'fashion': 'Fashion',
        'food': 'Food',
        'technology': 'Technology',
        'education': 'Education',
        'healthcare': 'Healthcare',
        'finance': 'Finance',
        'tourism': 'Tourism',
        'entertainment': 'Entertainment',
        'gaming': 'Gaming'
      };
      return `${industryMap[industryMatch[1]] || industryMatch[1]} Industry`;
    }
    
    return defaultIndustry;
  } catch (error) {
    return defaultIndustry;
  }
};

export const extractTargetAudience = (researchText) => {
  const defaultAudience = 'Young consumers aged 18-35';
  
  if (!researchText) {
    return defaultAudience;
  }
  
  try {
    const audienceSection = researchText.match(/target[^]*?(?=##|$)/i) ||
                           researchText.match(/consumer[^]*?(?=##|$)/i) ||
                           researchText.match(/user[^]*?(?=##|$)/i);
    
    if (audienceSection) {
      const audienceMatch = audienceSection[0].match(/(\d+-\d+\s*years\s*old[^,]*)|([^,]*young\s*people[^,]*)|([^,]*students[^,]*)|([^,]*female[^,]*)|([^,]*male[^,]*)/i);
      if (audienceMatch) {
        const audience = audienceMatch[0].trim();
        return audience;
      }
    }
    
    return defaultAudience;
  } catch (error) {
    return defaultAudience;
  }
};

export const extractProduct = (query) => {
  const defaultProduct = 'Consumer Goods';
  
  try {
    const productMatch = query.match(/(product|service|goods|solution)/i);
    if (productMatch) {
      const beforeProduct = query.substring(0, productMatch.index).trim().split(/\s+/).pop() || '';
      const afterProduct = query.substring(productMatch.index + productMatch[0].length).trim().split(/\s+/)[0] || '';
      
      const productTypeMap = {
        'product': 'Product',
        'service': 'Service',
        'goods': 'Goods',
        'solution': 'Solution'
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

export const processResearchResult = (resultText, query, thoughtChain, streamResult = '') => {
  const processedThoughtChain = thoughtChain || [];
  
  if (!resultText) {
    resultText = 'No research results';
  }
  
  if (streamResult === undefined) {
    streamResult = '';
  }
  
  let summary = '';
  let keyFindings = [];
  let sources = [];
  let marketOpportunities = [];
  
  try {
    let jsonResult;
    try {
      jsonResult = JSON.parse(resultText);
    } catch (e) {
      summary = resultText;
      
      const findingsMatch = resultText.match(/Key Findings([\s\S]*?)(?=##|$)/i);
      if (findingsMatch) {
        const findingsText = findingsMatch[1];
        const findings = findingsText.split(/\n\s*[-•]\s*/).filter(f => f.trim());
        keyFindings = findings.map(f => ({
          category: 'Finding',
          text: f.trim()
        }));
      }
      
      const sourcesMatch = resultText.match(/Sources([\s\S]*?)(?=##|$)/i);
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
      
      const opportunitiesMatch = resultText.match(/Opportunities([\s\S]*?)(?=##|$)/i);
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
        keyFindings = jsonResult.keyFindings.map(f => ({
          category: f.category || 'Finding',
          text: f.text || f
        }));
      }
      
      if (jsonResult.sources) {
        sources = jsonResult.sources.map(s => ({
          name: s.name || s,
          type: s.type || 'Research Source',
          date: s.date || new Date().getFullYear() + '',
          reliability: s.reliability || Math.floor(Math.random() * 15) + 80
        }));
      }
      
      if (jsonResult.marketOpportunities) {
        marketOpportunities = jsonResult.marketOpportunities.map(o => ({
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
      recommendations: []
    };
  } catch (error) {
    return {
      id: Date.now(),
      query: query,
      date: new Date().toISOString().split('T')[0],
      status: 'completed',
      summary: resultText,
      thoughtChain: processedThoughtChain,
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
  }
};

export const handleSearch = async (
  searchQuery, 
  deepModel, 
  setIsSearching, 
  setApiError, 
  setStreamingThoughtChain, 
  setStreamingResult, 
  setCurrentThoughtStep, 
  setIsThinking, 
  setCurrentStep, 
  setStepProgress, 
  setAnalysisInProgress, 
  setSelectedResearch, 
  setActiveTab,
  updateStepProgress
) => {
  // Get current stepProgress value
  let stepProgress = 0;
  
  // Create a wrapper function to update stepProgress value and call setStepProgress
  const updateStepProgressWrapper = (progress) => {
    stepProgress = progress; // Update local variable
    setStepProgress(progress); // Update React state
  };
  if (!searchQuery.trim() || !deepModel) return;
  
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
    setApiError(`Research analysis failed: ${error.message}`);
    return null;
  }
};
