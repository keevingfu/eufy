import { useState, useEffect } from 'react';
import { createDeepModel, DeepModel } from './deepmodel';
import {
  Search,
  Brain,
  Database,
  Zap,
  Filter,
  Target,
  TrendingUp,
  Download,
  Share2,
  RefreshCw,
  Check,
  X,
  MessageCircle,
  Tag,
  Clipboard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './deepresearchstyles.css';

const DeepResearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [analysisInProgress, setAnalysisInProgress] = useState(false);
  const [deepModel, setDeepModel] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [streamingThoughtChain, setStreamingThoughtChain] = useState([]);
  const [streamingResult, setStreamingResult] = useState('');
  const [currentThoughtStep, setCurrentThoughtStep] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 当前执行的步骤（1-4）
  const [stepProgress, setStepProgress] = useState(0); // 当前步骤的进度（0-100）
  
  // 定义研究主题
  const researchTopics = [
    'Gen Z shopping behaviors in US market',
    'Disney product licensing trends 2025',
    'Campus life essentials market analysis',
    'Stationary market competitive analysis'
  ];
 
  
  // 模拟研究详情数据
  const mockResearchDetail = {
    summary: "Gen Z消费者（出生于1997-2012年）在美国市场展现出独特的购物行为。他们重视真实性、可持续性和社会责任，偏好支持其价值观的品牌。数字原生的特性使他们在购买前进行广泛的在线研究，但仍然重视实体店体验。社交媒体对其购买决策有重大影响，特别是通过KOC和同龄人推荐。他们追求个性化产品和体验，愿意为符合其价值观和审美的产品支付溢价。品牌需要采用全渠道策略，强调可持续性，提供沉浸式体验，并通过社交媒体和KOC建立真实联系，以有效吸引这一关键消费群体。",
    sources: [
      { name: "Pew Research Center", type: "市场研究", date: "2025", reliability: 95 },
      { name: "McKinsey Consumer Insights", type: "咨询报告", date: "2024", reliability: 92 },
      { name: "NRF Consumer Survey", type: "行业协会", date: "2025", reliability: 88 },
      { name: "Eufy内部销售数据", type: "内部数据", date: "2025", reliability: 97 },
      { name: "Social Media Trend Analysis", type: "数据分析", date: "2025", reliability: 85 }
    ],
    keyFindings: [
      { category: "价值观", text: "Gen Z消费者优先考虑与其个人价值观一致的品牌，包括可持续性、多样性和社会责任" },
      { category: "购物习惯", text: "虽然是数字原生代，但78%的Gen Z消费者仍然喜欢实体店购物体验，特别是那些提供互动和沉浸式元素的店铺" },
      { category: "影响因素", text: "社交媒体是主要影响渠道，其中TikTok和Instagram对购买决策的影响力超过传统广告" },
      { category: "价格敏感度", text: "虽然预算有限，但愿意为符合其价值观和审美的产品支付溢价，尤其是限量版和联名系列" },
      { category: "忠诚度", text: "品牌忠诚度不如前几代高，65%的Gen Z消费者表示会为了更好的价值主张或更符合其价值观的选择而更换品牌" }
    ],
    marketOpportunities: [
      { opportunity: "可持续产品线扩展", size: "Large", competition: "Medium", timeline: "Q3 2025" },
      { opportunity: "社交媒体原生购物体验", size: "Large", competition: "High", timeline: "Q2 2025" },
      { opportunity: "校园生活必需品个性化定制", size: "Medium", competition: "Low", timeline: "Q3 2025" },
      { opportunity: "限量版联名系列", size: "Medium", competition: "Medium", timeline: "Q4 2025" },
      { opportunity: "沉浸式实体店体验", size: "Large", competition: "Medium", timeline: "Q1 2026" }
    ],
    internalDataInsights: {
      topPerformingCharacters: [
        { name: "Mickey Mouse", performance: 82 },
        { name: "Stitch", performance: 78 },
        { name: "Winnie the Pooh", performance: 65 },
        { name: "Marvel Heroes", performance: 61 },
        { name: "Toy Story", performance: 58 }
      ],
      channelPerformance: [
        { channel: "TikTok", engagement: 76, conversion: 8.2 },
        { channel: "Instagram", engagement: 68, conversion: 7.5 },
        { channel: "Campus Activations", engagement: 82, conversion: 9.1 },
        { channel: "WeChat Mini Program", engagement: 65, conversion: 6.8 }
      ],
      kocStrategy: [
        { strategy: "Campus KOC Program", effectiveness: 85, implementation: 60 },
        { strategy: "Unboxing Content Series", effectiveness: 78, implementation: 72 },
        { strategy: "Sustainability Storytelling", effectiveness: 82, implementation: 45 },
        { strategy: "Character-based UGC", effectiveness: 90, implementation: 65 }
      ]
    },
    recommendations: [
      { text: "扩大可持续产品线，强调环保材料和包装，并通过透明的供应链实践建立信任", priority: "High", impact: "High", effort: "Medium" },
      { text: "增强校园KOC计划，将覆盖范围扩大到50所顶尖大学，重点关注真实的用户生成内容", priority: "High", impact: "High", effort: "Medium" },
      { text: "开发基于Disney角色的限量版系列，特别关注Stitch和Mickey Mouse，这两个角色在Gen Z中表现最佳", priority: "Medium", impact: "High", effort: "Medium" },
      { text: "在TikTok上推出沉浸式购物体验，整合UGC和KOC内容，简化从发现到购买的路径", priority: "High", impact: "Medium", effort: "High" },
      { text: "改造旗舰店以提供更多互动体验，包括个性化站点和社交分享机会", priority: "Medium", impact: "Medium", effort: "High" }
    ]
  };
  
  // 生成思维链步骤的函数
  const generateThoughtChain = (topic) => {
    return [
      `第1步：确定研究范围 - 分析"${topic}"的市场规模、主要参与者和消费者行为`,
      `第2步：收集数据 - 整合行业报告、消费者调查和竞争对手分析`,
      `第3步：识别关键趋势 - 发现市场中的新兴模式和消费者偏好变化`,
      `第4步：分析竞争格局 - 评估主要参与者的优势、劣势和市场策略`,
      `第5步：提取消费者洞察 - 理解目标受众的需求、痛点和购买决策因素`,
      `第6步：识别机会 - 发现未满足的需求和潜在的市场空白`,
      `第7步：制定建议 - 基于分析结果提出具体的行动建议`
    ];
  };
  
  
    // 初始化DeepModel实例
  useEffect(() => {
    // 从环境变量中获取API密钥
    // 注意：在生产环境中，应该使用环境变量而不是硬编码API密钥
    // 这里为了演示和调试目的临时使用硬编码密钥
    const apiKey = "";
    
    // 检查API密钥是否存在
    if (!apiKey) {
      console.error('API密钥未找到，请检查环境变量配置');
      setApiError('API密钥未找到，请检查环境变量配置');
      return;
    }
    
    try {
      console.log('正在初始化DeepModel，API密钥长度:', apiKey.length);
      const model = createDeepModel(apiKey);
      setDeepModel(model);
      console.log('DeepModel初始化成功');
    } catch (error) {
      console.error('初始化DeepModel失败:', error);
      console.error('错误详情:', error.message);
      console.error('错误堆栈:', error.stack);
      setApiError(`无法初始化AI模型，请检查API配置。错误信息: ${error.message}`);
    }
  }, []);
  
  // 不再默认选中研究，让用户主动选择或搜索
  // useEffect(() => {
  //   // 创建默认研究数据
  //   if (researchTopics.length > 0 && !selectedResearch) {
  //     const defaultTopic = researchTopics[0];
  //     const defaultResearch = {
  //       id: 1,
  //       query: defaultTopic,
  //       date: '2025-03-01',
  //       status: 'completed',
  //       thoughtChain: generateThoughtChain(defaultTopic),
  //       summary: mockResearchDetail.summary,
  //       sources: mockResearchDetail.sources,
  //       keyFindings: mockResearchDetail.keyFindings,
  //       marketOpportunities: mockResearchDetail.marketOpportunities,
  //       internalDataInsights: mockResearchDetail.internalDataInsights,
  //       recommendations: mockResearchDetail.recommendations
  //     };
  //     
  //     handleSelectResearch(defaultResearch);
  //   }
  // }, [researchTopics, selectedResearch]);
  
  // 简化的步骤进度更新函数 - 不再根据实际进度更新
  const updateStepProgress = () => {
    // 不需要做任何事情，因为进度条现在是自动动画
    // 保留此函数是为了兼容现有代码调用
  };

  // 简化的进度条动画效果
  useEffect(() => {
    // 不再需要复杂的进度计算逻辑
    // 进度条现在使用CSS动画自动从左到右循环
    
    // 当分析开始或结束时，更新状态
    if (analysisInProgress && currentStep > 0) {
      // 分析开始时，确保进度条处于活动状态
      setStepProgress(1); // 只需设置一个非零值来激活进度条
    } else {
      // 分析结束时，重置进度条
      setStepProgress(0);
    }
  }, [analysisInProgress, currentStep]);

  // 处理研究搜索
  const handleSearch = async () => {
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
      // 开始分析过程
      setTimeout(() => {
        setIsSearching(false);
        setAnalysisInProgress(true);
      }, 1000);
      
      // 第一步：生成思维链并实时流式输出
      setCurrentStep(1);
      console.log("第1步：开始生成思维链...");
      const thoughtChainResult = await deepModel.streamThoughtChain(
        searchQuery,
        // 处理单个思维步骤的回调
        (step, completedSteps) => {
          setCurrentThoughtStep(step);
          setStreamingThoughtChain(completedSteps);
          // 根据完成的步骤数更新进度
          const progress = (completedSteps.length / 7) * 100; // 假设总共有7个思维步骤
          updateStepProgress(Math.min(progress, 95));
        },
        // 思维链完成的回调
        (thoughtChain) => {
          setStreamingThoughtChain(thoughtChain);
          setIsThinking(false);
          updateStepProgress(100); // 设置为100%表示完成
          console.log("第1步完成：思维链生成完毕");
        },
        // 处理分析结果的回调（包括模型思考过程）
        (delta, fullResponse) => {
          setStreamingResult(fullResponse);
        }
      );
      
      // 创建初始研究数据结构，仅包含思维链
      let researchData = processResearchResult(
        "正在进行市场研究分析...", 
        searchQuery, 
        thoughtChainResult.thoughtChain
      );
      
      // 更新UI显示第一步结果
      setSelectedResearch(researchData);
      
      // 第二步：基于思维链进行市场研究（不使用流式输出）
      setCurrentStep(2);
      setStepProgress(0); // 重置进度条
      console.log("第2步：开始市场研究分析...");
      const marketResearchResult = await deepModel.marketResearch(
        searchQuery,
        null,
        (delta, fullResponse) => {
          // 根据响应长度估算进度
          const progress = Math.min((fullResponse.length / 2000) * 100, 95);
          updateStepProgress(progress);
        },
        true // 使用流式输出来更新进度
      );
      updateStepProgress(100); // 设置为100%表示完成
      console.log("第2步完成：市场研究分析完成");
      
      // 更新研究数据，添加市场研究结果
      researchData = processResearchResult(
        marketResearchResult.result, 
        searchQuery, 
        thoughtChainResult.thoughtChain
      );
      
      // 更新UI显示第二步结果
      setSelectedResearch({...researchData});
      
      // 第三步：提取关键竞争对手并进行分析
      setCurrentStep(3);
      setStepProgress(0); // 重置进度条
      console.log("第3步：开始竞争对手分析...");
      const competitors = extractCompetitors(marketResearchResult.result);
      const competitorAnalysisResult = await deepModel.competitorAnalysis(
        competitors,
        extractIndustry(searchQuery),
        // 添加进度回调函数
        (delta, fullResponse) => {
          // 根据响应长度估算进度
          const progress = Math.min((fullResponse.length / 1500) * 100, 95);
          updateStepProgress(progress);
        }
      );
      updateStepProgress(100); // 设置为100%表示完成
      console.log("第3步完成：竞争对手分析完成");
      
      // 更新研究数据，添加竞争对手分析结果
      researchData.competitorAnalysis = competitorAnalysisResult.result;
      
      // 立即更新UI显示第三步结果
      setSelectedResearch({...researchData});
      
      // 第四步：提取目标受众并生成消费者洞察
      setCurrentStep(4);
      setStepProgress(0); // 重置进度条
      console.log("第4步：开始消费者洞察分析...");
      const targetAudience = extractTargetAudience(marketResearchResult.result);
      const product = extractProduct(searchQuery);
      const consumerInsightsResult = await deepModel.consumerInsights(
        targetAudience,
        product,
        // 添加进度回调函数
        (delta, fullResponse) => {
          // 根据响应长度估算进度
          const progress = Math.min((fullResponse.length / 1500) * 100, 95);
          updateStepProgress(progress);
        }
      );
      updateStepProgress(100); // 设置为100%表示完成
      console.log("第4步完成：消费者洞察分析完成");
      
      // 更新研究数据，添加消费者洞察结果
      researchData.consumerInsights = consumerInsightsResult.result;
      
      // 整合所有结果
      const combinedResult = {
        thoughtChain: thoughtChainResult.thoughtChain,
        marketResearch: marketResearchResult.result,
        competitorAnalysis: competitorAnalysisResult.result,
        consumerInsights: consumerInsightsResult.result
      };
      
      // 分析完成后显示最终结果
      setCurrentStep(0); // 重置当前步骤
      setAnalysisInProgress(false);
      setSelectedResearch({...researchData});
      setActiveTab('overview'); // 默认显示概览标签页
      console.log("所有步骤完成：研究分析全部完成");
    } catch (error) {
      console.error('研究分析失败:', error);
      setIsSearching(false);
      setAnalysisInProgress(false);
      setIsThinking(false);
      setApiError(`研究分析失败: ${error.message}`);
    }
  };
  
  // 从市场研究结果中提取可能的竞争对手
  const extractCompetitors = (researchText) => {
    // 默认竞争对手，如果无法从文本中提取
    const defaultCompetitors = ['竞争对手A', '竞争对手B', '竞争对手C'];
    
    try {
      // 尝试从文本中提取竞争对手信息
      const competitorSection = researchText.match(/竞争[^]*?(?=##|$)/i) || 
                               researchText.match(/competitor[^]*?(?=##|$)/i);
      
      if (competitorSection) {
        // 提取公司名称（假设公司名称是大写字母开头的词组）
        const companyNames = competitorSection[0].match(/[A-Z][a-zA-Z]*(?:\s+[A-Z][a-zA-Z]*)*/g);
        if (companyNames && companyNames.length > 0) {
          return companyNames.slice(0, 5); // 最多返回5个竞争对手
        }
      }
      
      return defaultCompetitors;
    } catch (error) {
      console.error('提取竞争对手失败:', error);
      return defaultCompetitors;
    }
  };
  
  // 从查询中提取行业信息
  const extractIndustry = (query) => {
    // 默认行业
    const defaultIndustry = '零售业';
    
    try {
      // 尝试从查询中提取行业信息
      const industryMatch = query.match(/(零售|电商|服装|食品|科技|教育|医疗|金融|旅游|娱乐|游戏)(?:业|行业|市场)/);
      if (industryMatch) {
        return `${industryMatch[1]}业`;
      }
      
      return defaultIndustry;
    } catch (error) {
      console.error('提取行业信息失败:', error);
      return defaultIndustry;
    }
  };
  
  // 从市场研究结果中提取目标受众
  const extractTargetAudience = (researchText) => {
    // 默认目标受众
    const defaultAudience = '18-35岁年轻消费者';
    
    try {
      // 尝试从文本中提取目标受众信息
      const audienceSection = researchText.match(/目标[^]*?(?=##|$)/i) || 
                             researchText.match(/消费者[^]*?(?=##|$)/i) ||
                             researchText.match(/用户[^]*?(?=##|$)/i);
      
      if (audienceSection) {
        // 提取年龄段或人群描述
        const audienceMatch = audienceSection[0].match(/(\d+-\d+岁[^,，。]*)|([^,，。]*年轻人[^,，。]*)|([^,，。]*学生[^,，。]*)|([^,，。]*女性[^,，。]*)|([^,，。]*男性[^,，。]*)/);
        if (audienceMatch) {
          return audienceMatch[0].trim();
        }
      }
      
      return defaultAudience;
    } catch (error) {
      console.error('提取目标受众失败:', error);
      return defaultAudience;
    }
  };
  
  // 从查询中提取产品或服务信息
  const extractProduct = (query) => {
    // 默认产品
    const defaultProduct = '消费品';
    
    try {
      // 尝试从查询中提取产品信息
      const productMatch = query.match(/(产品|服务|商品|解决方案)/);
      if (productMatch) {
        // 提取产品前后的上下文
        const beforeProduct = query.substring(0, productMatch.index).trim().split(/\s+/).pop() || '';
        const afterProduct = query.substring(productMatch.index + productMatch[0].length).trim().split(/\s+/)[0] || '';
        
        if (beforeProduct) {
          return `${beforeProduct}${productMatch[0]}`;
        } else if (afterProduct) {
          return `${productMatch[0]}${afterProduct}`;
        } else {
          return defaultProduct;
        }
      }
      
      return defaultProduct;
    } catch (error) {
      console.error('提取产品信息失败:', error);
      return defaultProduct;
    }
  };
  
  // 处理API响应，将文本转换为结构化数据，支持流式输出
  const processResearchResult = (resultText, query, thoughtChain) => {
    // 提取思维链过程
    const processedThoughtChain = thoughtChain || [];
    
    // 解析API响应
    let summary = '';
    let keyFindings = [];
    let sources = [];
    let marketOpportunities = [];
    
    // 模拟流式输出的处理
    const streamOutput = (text, callback, speed = 30) => {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          callback(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      
      return () => clearInterval(timer); // 返回清理函数
    };
    
    try {
      // 尝试解析为JSON（如果API返回的是JSON字符串）
      let jsonResult;
      try {
        jsonResult = JSON.parse(resultText);
      } catch (e) {
        // 如果不是JSON，使用完整文本
        summary = resultText;
        
        // 尝试从文本中提取关键发现
        const findingsMatch = resultText.match(/关键发现([\s\S]*?)(?=##|$)/i);
        if (findingsMatch) {
          const findingsText = findingsMatch[1];
          const findings = findingsText.split(/\n\s*[-•]\s*/).filter(f => f.trim());
          keyFindings = findings.map(f => ({
            category: '发现',
            text: f.trim()
          }));
        }
        
        // 尝试从文本中提取来源
        const sourcesMatch = resultText.match(/来源([\s\S]*?)(?=##|$)/i);
        if (sourcesMatch) {
          const sourcesText = sourcesMatch[1];
          const sourcesList = sourcesText.split(/\n\s*[-•]\s*/).filter(s => s.trim());
          sources = sourcesList.map(s => ({
            name: s.trim(),
            type: '研究来源',
            date: new Date().getFullYear() + '',
            reliability: Math.floor(Math.random() * 15) + 80 // 随机可靠性分数，仅用于演示
          }));
        }
        
        // 尝试从文本中提取市场机会
        const opportunitiesMatch = resultText.match(/机会([\s\S]*?)(?=##|$)/i);
        if (opportunitiesMatch) {
          const opportunitiesText = opportunitiesMatch[1];
          const opportunitiesList = opportunitiesText.split(/\n\s*[-•]\s*/).filter(o => o.trim());
          marketOpportunities = opportunitiesList.map(o => ({
            opportunity: o.trim(),
            size: ['Small', 'Medium', 'Large'][Math.floor(Math.random() * 3)], // 随机大小，仅用于演示
            competition: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)], // 随机竞争程度，仅用于演示
            timeline: `Q${Math.floor(Math.random() * 4) + 1} ${new Date().getFullYear()}`
          }));
        }
      }
      
      // 如果成功解析为JSON，使用JSON数据
      if (jsonResult) {
        summary = jsonResult.summary || jsonResult.executiveSummary || resultText;
        
        if (jsonResult.keyFindings) {
          keyFindings = jsonResult.keyFindings.map(f => ({
            category: f.category || '发现',
            text: f.text || f
          }));
        }
        
        if (jsonResult.sources) {
          sources = jsonResult.sources.map(s => ({
            name: s.name || s,
            type: s.type || '研究来源',
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
      
      // 创建研究结果对象
      return {
        id: Date.now(), // 生成唯一ID
        query: query,
        date: new Date().toISOString().split('T')[0],
        status: 'completed',

        summary: summary,
        thoughtChain: processedThoughtChain,
        sources: sources.length > 0 ? sources : [
          { name: "行业报告", type: "市场研究", date: new Date().getFullYear() + "", reliability: 92 },
          { name: "消费者调查", type: "用户研究", date: new Date().getFullYear() + "", reliability: 88 }
        ],
        keyFindings: keyFindings.length > 0 ? keyFindings : [
          { category: '趋势', text: '从API响应中提取的关键趋势' },
          { category: '市场', text: '从API响应中提取的市场信息' }
        ],
        marketOpportunities: marketOpportunities.length > 0 ? marketOpportunities : [
          { opportunity: '基于研究的市场机会', size: 'Medium', competition: 'Medium', timeline: `Q${Math.floor(Math.random() * 4) + 1} ${new Date().getFullYear()}` }
        ],
        // 添加其他必要的字段，但不使用模拟数据
        internalDataInsights: {
          topPerformingCharacters: [],
          channelPerformance: [],
          kocStrategy: []
        },
        recommendations: []
      };
    } catch (error) {
      console.error('处理研究结果时出错:', error);
      // 发生错误时返回基本结构
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
  
  // Handle selecting a research from history
  const handleSelectResearch = (research) => {
    // 不再使用模拟数据，而是直接使用传入的研究数据
    // 检查sources是否为数组，如果不是则创建默认数组
    let sourcesArray = [];
    if (Array.isArray(research.sources)) {
      sourcesArray = research.sources;
    } else if (typeof research.sources === 'number') {
      // 如果sources是数字，创建一个包含默认来源对象的数组
      sourcesArray = [
        { name: "行业报告", type: "市场研究", date: new Date().getFullYear() + "", reliability: 92 },
        { name: "消费者调查", type: "用户研究", date: new Date().getFullYear() + "", reliability: 88 }
      ];
    }
    
    setSelectedResearch({
      id: research.id,
      query: research.query,
      date: research.date,
      status: research.status,
      thoughtChain: research.thoughtChain || [],
      summary: research.summary || "暂无摘要信息",
      sources: sourcesArray,
      keyFindings: research.keyFindings || [],
      marketOpportunities: research.marketOpportunities || [],
      internalDataInsights: research.internalDataInsights || {
        topPerformingCharacters: [],
        channelPerformance: [],
        kocStrategy: []
      },
      recommendations: research.recommendations || []
    });
  };


  return (
    <div className="module-container">
      <header className="module-header">
        <h1>Deep Research</h1>
        <p className="module-description">Integrated Market Intelligence and Strategic Insights</p>
      </header>
      
      <div className="content-area">
        <div className="search-section">
          <h2 className="section-title">Research Query</h2>
          <div className="search-input-container">
            <div className="search-input-wrapper">
            <input
              type="text"
                placeholder="Enter a detailed market analysis research query..."
                className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
              <div className="search-icon">
                <Brain size={20} />
              </div>
          </div>
          <button 
              className={`search-button ${isSearching ? 'disabled' : ''}`}
            onClick={handleSearch}
            disabled={isSearching || !searchQuery.trim()}
          >
              {isSearching ? <RefreshCw size={20} className="icon spinning" /> : <Search size={20} className="icon" />}
            {isSearching ? 'Researching...' : 'Research'}
          </button>
        </div>
        
          <div className="suggested-topics">
            <div className="topic-label">Suggested topics:</div>
            <button className="topic-tag" onClick={() => setSearchQuery('Consumer trends in eco-friendly stationery')}>
            Consumer trends in eco-friendly stationery
          </button>
            <button className="topic-tag" onClick={() => setSearchQuery('Gen Z campus life product preferences')}>
            Gen Z campus life product preferences
          </button>
            <button className="topic-tag" onClick={() => setSearchQuery('Holiday gift market forecast 2025')}>
            Holiday gift market forecast 2025
          </button>
        </div>
      </div>
      
      {!analysisInProgress && !selectedResearch && (
        <div className="research-results">
          <div className="research-history">
            <div className="history-header">
              <h3>Thought Chain</h3>
              <button className="filter-button">
                <Filter size={18} />
              </button>
            </div>
            <div className="history-list">
              <div className="placeholder-content">
                <p>Your research thought Chain will appear here.</p>
              </div>
            </div>
          </div>
          
          <div className="research-detail">
            <div className="detail-header">
              <div>
                <h2>Deep Research</h2>
                <p>Use the search above to start a new market research analysis.</p>
              </div>
              <div className="progress-indicator">
                <Zap size={28} className="text-blue-600" />
              </div>
            </div>
            
            <div className="analysis-progress-detail">
              <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-1 mx-auto mt-6">
                <div className="bg-gray-400 h-2.5 rounded-full" style={{width: '0%'}}></div>
              </div>
              <div className="flex w-full max-w-md justify-between text-xs text-gray-500 mx-auto">
                <span>Data Collection</span>
                <span>Integration</span>
                <span>Analysis</span>
                <span>Synthesis</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {analysisInProgress ? (
        <div className="research-results">
          <div className="research-history">
            <div className="history-header">
              <h3>Thought Chain</h3>
              <button className="filter-button">
                <Filter size={18} />
              </button>
            </div>
            <div className="history-list">
              {/* 思维链过程显示 */}
              {streamingThoughtChain.map((step, index) => (
                <div key={index} className="history-item">
                  <div className="history-item-header">
                    <div className="step-number-circle">{index + 1}</div>
                    <h4>{step}</h4>
                  </div>
                </div>
              ))}
              {isThinking && currentThoughtStep && (
                <div className="history-item active">
                  <div className="history-item-header">
                    <div className="step-number-circle">{streamingThoughtChain.length + 1}</div>
                    <h4>
                      <span className="thinking-indicator">思考中...</span>
                      {currentThoughtStep}
                    </h4>
                  </div>
                </div>
              )}
              
              {/* 结果实时输出 */}
              {streamingResult && (
                <div className="history-item result-item">
                  <div className="history-item-header">
                    <div className="step-number-circle">
                      <Zap size={14} />
                    </div>
                    <h4>分析结果</h4>
                  </div>
                  <div className="history-item-content">
                    <div className="streaming-result-content">
                      {streamingResult}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="research-detail">
            <div className="detail-header">
              <div>
                <h2>Deep Analysis in Progress</h2>
                <p>analyzing data from multiple sources and integrating insights from Eufy platform modules.</p>
              </div>
              <div className="progress-indicator">
                <Zap size={28} className="text-blue-600 animate-pulse" />
              </div>
            </div>
                        
            {streamingThoughtChain.length >= 2 && (
              <div className="detail-tabs">
                <button
                  className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`tab ${activeTab === 'internal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('internal')}
                >
                  Eufy Data Integration
                </button>
                <button
                  className={`tab ${activeTab === 'recommendations' ? 'active' : ''}`}
                  onClick={() => setActiveTab('recommendations')}
                >
                  Recommendations
                </button>
              </div>
            )}
            
            {activeTab === 'overview' && (
              <div className="tab-content">
                <div className="summary-section">
                  {/* 步骤进度指示器 */}
                  <div className="step-dots">
                    <div className={`step-dot ${currentStep >= 1 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 2 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 3 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 4 ? 'active' : ''}`}></div>
                  </div>
                  
                  {/* 步骤状态指示器 */}
                  <div className="step-status-section">
                    <h3>研究进度</h3>
                    <div className="step-status-list">
                      <div className={`step-status-item ${currentStep > 1 ? 'completed' : currentStep === 1 ? 'in-progress' : ''}`}>
                        <div className="step-status-icon">
                          {currentStep > 1 ? <Check size={16} /> : currentStep === 1 ? <div className="waiting-animation"></div> : ''}
                        </div>
                        <div className="step-status-text">
                          <span className="step-name">第1步：思维链生成</span>
                          <span className="step-status">
                            {currentStep > 1 ? '已完成' : currentStep === 1 ? '进行中...' : '等待中...'}
                          </span>
                        </div>
                        {currentStep === 1 && (
                          <div className="step-progress">
                            <div className="step-progress-bar">
                              <div className="step-progress-fill active" style={{ width: `${stepProgress}%` }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className={`step-status-item ${currentStep > 2 ? 'completed' : currentStep === 2 ? 'in-progress' : ''}`}>
                        <div className="step-status-icon">
                          {currentStep > 2 ? <Check size={16} /> : currentStep === 2 ? <div className="waiting-animation"></div> : ''}
                        </div>
                        <div className="step-status-text">
                          <span className="step-name">第2步：市场研究分析</span>
                          <span className="step-status">
                            {currentStep > 2 ? '已完成' : currentStep === 2 ? '进行中...' : '等待中...'}
                          </span>
                        </div>
                        {currentStep === 2 && (
                          <div className="step-progress">
                            <div className="step-progress-bar">
                              <div className="step-progress-fill active" style={{ width: `${stepProgress}%` }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className={`step-status-item ${currentStep > 3 ? 'completed' : currentStep === 3 ? 'in-progress' : ''}`}>
                        <div className="step-status-icon">
                          {currentStep > 3 ? <Check size={16} /> : currentStep === 3 ? <div className="waiting-animation"></div> : ''}
                        </div>
                        <div className="step-status-text">
                          <span className="step-name">第3步：竞争对手分析</span>
                          <span className="step-status">
                            {currentStep > 3 ? '已完成' : currentStep === 3 ? '进行中...' : '等待中...'}
                          </span>
                        </div>
                        {currentStep === 3 && (
                          <div className="step-progress">
                            <div className="step-progress-bar">
                              <div className="step-progress-fill active" style={{ width: `${stepProgress}%` }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className={`step-status-item ${currentStep > 4 ? 'completed' : currentStep === 4 ? 'in-progress' : ''}`}>
                        <div className="step-status-icon">
                          {currentStep > 4 ? <Check size={16} /> : currentStep === 4 ? <div className="waiting-animation"></div> : ''}
                        </div>
                        <div className="step-status-text">
                          <span className="step-name">第4步：消费者洞察分析</span>
                          <span className="step-status">
                            {currentStep > 4 ? '已完成' : currentStep === 4 ? '进行中...' : '等待中...'}
                          </span>
                        </div>
                        {currentStep === 4 && (
                          <div className="step-progress">
                            <div className="step-progress-bar">
                              <div className="step-progress-fill active" style={{ width: `${stepProgress}%` }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : selectedResearch && (
          <div className="research-results">
            <div className="research-history">
              <div className="history-header">
                <h3>Thought Chain</h3>
                <button className="filter-button">
                <Filter size={18} />
              </button>
            </div>
              <div className="history-list">
              {selectedResearch.thoughtChain && selectedResearch.thoughtChain.map((step, index) => {
                // 从步骤文本中提取步骤号和内容
                return (
                  <div key={index} className={`history-item`}>
                    <div className="history-item-header">
                      <div className="step-number-circle">{index + 1}</div>
                      <h4>{step}</h4>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        
            <div className="research-detail">
              <div className="detail-header">
                  <div>
                  <h2>{selectedResearch.query}</h2>
                  <p>Completed on {selectedResearch.date} • Analyzed {selectedResearch.sources.length} sources</p>
                  </div>
                <div className="detail-actions">
                  <button className="action-button">
                      <Download size={18} />
                    </button>
                  <button className="action-button">
                      <Share2 size={18} />
                    </button>
                </div>
              </div>
              
              <div className="detail-tabs">
                    <button
                  className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                    </button>
                    <button
                  className={`tab ${activeTab === 'internal' ? 'active' : ''}`}
                      onClick={() => setActiveTab('internal')}
                    >
                      Eufy Data Integration
                    </button>
                    <button
                  className={`tab ${activeTab === 'recommendations' ? 'active' : ''}`}
                      onClick={() => setActiveTab('recommendations')}
                    >
                      Recommendations
                    </button>
                </div>
                
                {activeTab === 'overview' && (
                <div className="tab-content">
                  <div className="summary-section">
                    <h3>Executive Summary</h3>
                    <p>{selectedResearch.summary}</p>
                    
                    <div className="insights-grid">
                      <div className="insight-card">
                        <h4>
                          <Zap size={18} className="card-icon" /> 
                            Key Findings
                          </h4>
                        <div className="findings-list">
                            {selectedResearch.keyFindings.map((finding, index) => (
                            <div key={index} className="finding-item">
                              <span className="category-tag">
                                  {finding.category}
                                </span>
                              <p>{finding.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                      <div className="insight-card">
                        <h4>
                          <Database size={18} className="card-icon" /> 
                            Information Sources
                          </h4>
                        <div className="sources-list">
                            {selectedResearch.sources.map((source, index) => (
                            <div key={index} className="source-item">
                              <div className="source-header">
                                <p className="source-name">{source.name}</p>
                                <span className={`reliability-badge ${
                                  source.reliability > 90 ? 'high' :
                                  source.reliability > 80 ? 'medium' :
                                  'low'
                                }`}>
                                  {source.reliability}% Reliability
                                  </span>
                              </div>
                              <p className="source-meta">{source.type} • {source.date}</p>
                              </div>
                            ))}
                        </div>
                        </div>
                      </div>
                    </div>
                    
                  {/* 竞争对手分析部分 */}
                  {selectedResearch.competitorAnalysis && (
                    <div className="competitor-analysis-section">
                      <h3>竞争对手分析</h3>
                      <div className="competitor-content">
                        <p>{selectedResearch.competitorAnalysis}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* 消费者洞察部分 */}
                  {selectedResearch.consumerInsights && (
                    <div className="consumer-insights-section">
                      <h3>消费者洞察</h3>
                      <div className="consumer-content">
                        <p>{selectedResearch.consumerInsights}</p>
                      </div>
                    </div>
                  )}
                    
                  <div className="opportunities-section">
                    <h3>Market Opportunities</h3>
                    <div className="opportunities-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Opportunity</th>
                            <th>Market Size</th>
                            <th>Competition</th>
                            <th>Timeline</th>
                            <th>Actions</th>
                            </tr>
                          </thead>
                        <tbody>
                            {selectedResearch.marketOpportunities.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <div className="opportunity-name">{item.opportunity}</div>
                                </td>
                              <td>
                                <span className={`size-badge ${item.size.toLowerCase()}`}>
                                    {item.size}
                                  </span>
                                </td>
                              <td>
                                <span className={`competition-badge ${item.competition.toLowerCase()}`}>
                                    {item.competition}
                                  </span>
                                </td>
                              <td>{item.timeline}</td>
                              <td>
                                <button className="explore-button">Explore</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'internal' && (
                <div className="tab-content">
                  <div className="integration-notice">
                    <Zap size={20} className="notice-icon" />
                  <div>
                      <h3>Integrated Analysis</h3>
                      <p>This analysis combines external research with internal Eufy data from Insight, KOC&KOL, Content Distribution, and Private Domain modules to provide comprehensive strategic recommendations.</p>
                    </div>
                  </div>
                  
                  <div className="data-insights-grid">
                    <div className="data-card">
                      <h3>Top Performing Disney Characters</h3>
                      <div className="performance-chart">
                        {selectedResearch.internalDataInsights.topPerformingCharacters.map((character, index) => (
                          <div key={index} className="performance-item">
                            <div className="performance-header">
                              <span>{character.name}</span>
                              <span>{character.performance}%</span>
                            </div>
                            <div className="performance-bar-bg">
                              <div className="performance-bar" style={{ width: `${character.performance}%` }}></div>
                        </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="data-card">
                      <h3>Channel Performance</h3>
                      <div className="channel-list">
                        {selectedResearch.internalDataInsights.channelPerformance.map((channel, index) => (
                          <div key={index} className="channel-item">
                            <div className="channel-header">
                              <span>{channel.channel}</span>
                            </div>
                            <div className="channel-metrics">
                              <div className="metric">
                                <div className="metric-header">
                                      <span>Engagement Rate</span>
                                      <span>{channel.engagement}%</span>
                                    </div>
                                <div className="metric-bar-bg">
                                  <div className="engagement-bar" style={{ width: `${channel.engagement}%` }}></div>
                                    </div>
                                  </div>
                              <div className="metric">
                                <div className="metric-header">
                                      <span>Conversion Rate</span>
                                      <span>{channel.conversion}%</span>
                                    </div>
                                <div className="metric-bar-bg">
                                  <div className="conversion-bar" style={{ width: `${channel.conversion * 10}%` }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      </div>
                    </div>
                    
                  <div className="strategy-section">
                    <h3>KOC Strategy Effectiveness</h3>
                    <div className="strategy-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Strategy</th>
                            <th>Effectiveness</th>
                            <th>Implementation Level</th>
                            <th>Gap</th>
                            </tr>
                          </thead>
                        <tbody>
                            {selectedResearch.internalDataInsights.kocStrategy.map((strategy, index) => {
                              const gap = strategy.effectiveness - strategy.implementation;
                              return (
                              <tr key={index}>
                                <td>
                                  <div className="strategy-name">{strategy.strategy}</div>
                                  </td>
                                <td>
                                  <div className="metric-display">
                                    <div className="metric-bar-bg small">
                                      <div className="effectiveness-bar" style={{ width: `${strategy.effectiveness}%` }}></div>
                                    </div>
                                    <span>{strategy.effectiveness}%</span>
                                    </div>
                                  </td>
                                <td>
                                  <div className="metric-display">
                                    <div className="metric-bar-bg small">
                                      <div className="implementation-bar" style={{ width: `${strategy.implementation}%` }}></div>
                                    </div>
                                    <span>{strategy.implementation}%</span>
                                    </div>
                                  </td>
                                <td>
                                  <span className={`gap-badge ${
                                    gap > 20 ? 'high' :
                                    gap > 10 ? 'medium' :
                                    'low'
                                    }`}>
                                      {gap}%
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                  <div className="cross-module-insights">
                    <h4>
                      <Clipboard size={18} className="insights-icon" /> 
                        Cross-Module Insights
                      </h4>
                    <div className="insights-list">
                      <div className="insight-item">
                        <Tag size={14} className="tag-icon" />
                        <p>
                          <span className="module-name">Insight + KOC&KOL:</span> Disney character preferences from VOC analysis align with KOC content performance, suggesting natural synergy.
                          </p>
                        </div>
                      <div className="insight-item">
                        <Tag size={14} className="tag-icon" />
                        <p>
                          <span className="module-name">Content Distribution + Private Domain:</span> Disney product ads show higher conversion rates in markets where landing pages have been optimized with character-specific content.
                          </p>
                        </div>
                      <div className="insight-item">
                        <Tag size={14} className="tag-icon" />
                        <p>
                          <span className="module-name">KOC&KOL + Content Distribution:</span> Limited edition unboxing videos on TikTok generated 38% higher ad recall than standard product showcases.
                        </p>
                      </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'recommendations' && (
                <div className="tab-content">
                  <div className="recommendations-section">
                    <h3>Strategic Recommendations</h3>
                    <div className="recommendations-list">
                        {selectedResearch.recommendations.map((recommendation, index) => (
                        <div key={index} className="recommendation-card">
                          <div className="recommendation-icon">
                            <TrendingUp size={16} className={`icon-${recommendation.priority.toLowerCase()}`} />
                              </div>
                          <div className="recommendation-content">
                            <p className="recommendation-text">{recommendation.text}</p>
                            <div className="recommendation-tags">
                              <span className={`tag priority-${recommendation.priority.toLowerCase()}`}>
                                    Priority: {recommendation.priority}
                                  </span>
                              <span className={`tag impact-${recommendation.impact.toLowerCase()}`}>
                                    Impact: {recommendation.impact}
                                  </span>
                              <span className={`tag effort-${recommendation.effort.toLowerCase()}`}>
                                    Effort: {recommendation.effort}
                                  </span>
                                </div>
                              </div>
                          <div className="recommendation-actions">
                            <button className="action-icon comment">
                                  <MessageCircle size={16} />
                                </button>
                            <button className="action-icon approve">
                                  <Check size={16} />
                                </button>
                            <button className="action-icon reject">
                                  <X size={16} />
                                </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                  <div className="roadmap-section">
                    <h3>Implementation Roadmap</h3>
                    <div className="roadmap-timeline">
                      <div className="timeline-item current">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>Q2 2025: Initial Implementation</h4>
                          <p>
                                Launch TikTok campaign for limited edition Disney collections and optimize landing pages for character-specific content.
                              </p>
                            </div>
                          </div>
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>Q3 2025: Expansion</h4>
                          <p>
                                Develop sustainable Disney product line and begin development of AR experiences for physical products.
                              </p>
                            </div>
                          </div>
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>Q4 2025: Regional Customization</h4>
                          <p>
                                Launch regional Disney character collections based on local preferences identified through KOC feedback.
                              </p>
                            </div>
                          </div>
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>Q1 2026: Innovation Phase</h4>
                          <p>
                                Test Disney digital collectibles with physical product bundles and evaluate performance-based licensing models.
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeepResearch;
