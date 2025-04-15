// DeepResearch组件的辅助函数

// 生成思维链步骤的函数
export const generateThoughtChain = (topic) => {
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

// 从市场研究结果中提取可能的竞争对手
export const extractCompetitors = (researchText) => {
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
export const extractIndustry = (query) => {
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
export const extractTargetAudience = (researchText) => {
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
export const extractProduct = (query) => {
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

// 处理API响应，将文本转换为结构化数据
export const processResearchResult = (resultText, query, thoughtChain) => {
  // 提取思维链过程
  const processedThoughtChain = thoughtChain || [];
  
  // 解析API响应
  let summary = '';
  let keyFindings = [];
  let sources = [];
  let marketOpportunities = [];
  
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
    
    // 将summary转换为Markdown格式
    let markdownSummary = summary
      // 先处理段落和基本格式
      .replace(/(\r\n|\n|\r)/gm, '\n\n')  // 确保段落之间有空行
      .replace(/([^\s])(\r\n|\n|\r)/gm, '$1\n\n') // 在句子末尾添加空行
      // 将破折号或圆点开头的行转换为Markdown列表
      .replace(/([\u002D\u2022])\s*([^\n]+)/g, '* $2')
      .trim();
      
    // 处理可能出现的多余空行
    markdownSummary = markdownSummary
      .replace(/\n{3,}/g, '\n\n'); // 将过多的空行减少为最多两个
      
    // 我们不需要手动处理标题格式，因为标准的Markdown标题格式已经可以被 ReactMarkdown 正确解析
    
    // 创建研究结果对象
    return {
      id: Date.now(), // 生成唯一ID
      query: query,
      date: new Date().toISOString().split('T')[0],
      status: 'completed',
      summary: markdownSummary,
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
      summary: resultText
        .replace(/(\r\n|\n|\r)/gm, '\n\n')
        .replace(/([^\s])(\r\n|\n|\r)/gm, '$1\n\n')
        .replace(/([\u002D\u2022])\s*([^\n]+)/g, '* $2')
        .replace(/\n{3,}/g, '\n\n')
        .trim(),
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