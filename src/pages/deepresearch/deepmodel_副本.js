import Anthropic from '@anthropic-ai/sdk';

/**
 * Claude 3.7 Sonnet模型调用接口
 * 提供与Claude AI模型交互的方法
 */
export class DeepModel {
  /**
   * 初始化DeepModel实例
   * @param {string} apiKey Anthropic API密钥
   */
  constructor(apiKey) {
    this.anthropic = new Anthropic({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true, // 允许在浏览器环境中运行
    });
    this.model = 'claude-3-5-sonnet-20240620';
  }

  /**
   * 发送文本请求到Claude模型并获取响应
   * @param {string} query 用户查询文本
   * @param {string} systemPrompt 系统提示（可选）
   * @param {number} maxTokens 最大生成令牌数（默认为1000）
   * @returns {Promise<string>} 模型响应文本
   */
  async query(query, systemPrompt, maxTokens = 1000) {
    try {
      const response = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: maxTokens,
        system: systemPrompt || "你是一个专业的市场研究和数据分析助手，提供详细、准确和有洞察力的回答。",
        messages: [
          { role: "user", content: query }
        ]
      });

      // 检查内容类型并提取文本
      if (response.content[0].type === 'text') {
        return response.content[0].text;
      } else {
        throw new Error('响应内容不是文本类型');
      }
    } catch (error) {
      console.error('Claude API调用失败:', error);
      throw new Error(`调用Claude模型失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * 发送多轮对话请求到Claude模型
   * @param {Array<{role: 'user' | 'assistant', content: string}>} messages 消息数组，包含角色和内容
   * @param {string} systemPrompt 系统提示（可选）
   * @param {number} maxTokens 最大生成令牌数（默认为1000）
   * @returns {Promise<string>} 模型响应文本
   */
  async conversation(messages, systemPrompt, maxTokens = 1000) {
    try {
      const formattedMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: maxTokens,
        system: systemPrompt || "你是一个专业的市场研究和数据分析助手，提供详细、准确和有洞察力的回答。",
        messages: formattedMessages
      });

      // 检查内容类型并提取文本
      if (response.content[0].type === 'text') {
        return response.content[0].text;
      } else {
        throw new Error('响应内容不是文本类型');
      }
    } catch (error) {
      console.error('Claude API多轮对话调用失败:', error);
      throw new Error(`调用Claude模型失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * 流式输出查询结果
   * @param {string} query 用户查询文本
   * @param {string} systemPrompt 系统提示（可选）
   * @param {number} maxTokens 最大生成令牌数（默认为1000）
   * @param {function} onDelta 处理每个增量文本的回调函数
   * @param {function} onComplete 处理完成时的回调函数
   * @param {function} onError 处理错误的回调函数
   */
  async streamQuery(query, systemPrompt, maxTokens = 1000, onDelta, onComplete, onError) {
    try {
      const stream = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: maxTokens,
        system: systemPrompt || "你是一个专业的市场研究和数据分析助手，提供详细、准确和有洞察力的回答。",
        messages: [
          { role: "user", content: query }
        ],
        stream: true
      });

      let fullResponse = '';
      
      for await (const chunk of stream) {
        if (chunk.type === 'content_block_delta' && chunk.delta.text) {
          const delta = chunk.delta.text;
          fullResponse += delta;
          if (onDelta) {
            onDelta(delta, fullResponse);
          }
        }
      }

      if (onComplete) {
        onComplete(fullResponse);
      }
    } catch (error) {
      console.error('Claude API流式调用失败:', error);
      if (onError) {
        onError(error);
      }
    }
  }

  /**
   * 生成思维链过程
   * @param {string} topic 研究主题
   * @returns {Promise<string[]>} 思维链步骤数组
   */
  async generateThoughtChain(topic) {
    // 默认步骤，在各种错误情况下返回
    const defaultSteps = [
      `确定研究范围 - 分析"${topic}"的市场规模、主要参与者和消费者行为`,
      `收集数据 - 整合行业报告、消费者调查和竞争对手分析`,
      `识别关键趋势 - 发现市场中的新兴模式和消费者偏好变化`,
      `分析竞争格局 - 评估主要参与者的优势、劣势和市场策略`,
      `提取消费者洞察 - 理解目标受众的需求、痛点和购买决策因素`,
      `识别机会 - 发现未满足的需求和潜在的市场空白`,
      `制定建议 - 基于分析结果提出具体的行动建议`
    ];
    
    // 使用AI模型动态生成思维链过程
    const question = topic;
    
    const prompt = `你是一个专业的搜索规划助手。请分析用户的问题并制定搜索计划。
用户问题: ${question}
请按照以下步骤思考:
1. 分析问题的核心意图和关键概念
  可用参考如下几个方向 但是要考虑实际问题(${defaultSteps})
2. 将问题分解为可搜索的子问题
3. 为每个子问题设计合适的搜索查询词
4. 规划搜索结果的整合方式
以JSON格式输出你的规划:
{
"intent": "问题的核心意图",
"key_concepts": ["概念1","概念2", ...],
"sub_tasks": [
{
"id": "子任务1",
"description": "子任务描述",
"search_query": "搜索查询词",
"expected_info": "期望获取的信息"
},...],
"integration_plan": "结果整合计划"
}
`;

    try {
      // 调用Claude API获取规划结果
      const response = await this.query(prompt, null, 2000);
      
      // 提取JSON部分
      const jsonMatch = response.match(/```(?:json)?\s*({[\s\S]*?})```/);
      if (!jsonMatch) {
        console.log('无法从响应中提取JSON，尝试直接解析响应');
        try {
          // 尝试直接解析整个响应
          const planData = JSON.parse(response);
          
          // 提取子任务作为步骤
          if (planData.sub_tasks && Array.isArray(planData.sub_tasks)) {
            return planData.sub_tasks.map(task => task.description || task.id);
          }
        } catch (parseError) {
          console.error('直接解析响应失败:', parseError);
          console.log('返回默认思维链步骤');
          return defaultSteps;
        }
        
        // 如果没有返回，则使用默认步骤
        return defaultSteps;
      }
      
      try {
        // 解析JSON
        const planData = JSON.parse(jsonMatch[1]);
        
        // 提取子任务作为步骤
        if (planData.sub_tasks && Array.isArray(planData.sub_tasks)) {
          return planData.sub_tasks.map(task => task.description || task.id);
        } else {
          console.error('规划数据中没有有效的子任务');
          return defaultSteps;
        }
      } catch (jsonError) {
        console.error('解析JSON失败:', jsonError);
        return defaultSteps;
      }
    } catch (error) {
      console.error('生成思维链失败:', error);
      return defaultSteps;
    }
  }

  /**
   * 流式输出思维链过程
   * @param {string} topic 研究主题
   * @param {function} onThoughtStep 处理每个思维步骤的回调函数
   * @param {number} delayBetweenSteps 步骤之间的延迟时间（毫秒）
   */
  async streamThoughtChain(topic, onThoughtStep, delayBetweenSteps = 1000) {
    // 获取思维链步骤（等待异步结果）
    const steps = await this.generateThoughtChain(topic);
    
    // 模拟AI思考过程，逐步输出思维链
    for (let i = 0; i < steps.length; i++) {
      // 延迟一段时间，模拟思考过程
      await new Promise(resolve => setTimeout(resolve, delayBetweenSteps));
      
      // 调用回调函数，传递当前步骤和完成的步骤数组
      if (onThoughtStep) {
        onThoughtStep(steps[i], steps.slice(0, i + 1));
      }
    }
    
    return steps;
  }

  /**
   * 发送市场研究分析请求
   * @param {string} topic 研究主题
   * @param {string} additionalContext 额外的上下文信息（可选）
   * @param {function} onThoughtStep 处理每个思维步骤的回调函数
   * @param {function} onThoughtChain 处理完整思维链的回调函数
   * @param {function} onResult 处理结果文本的回调函数
   * @returns {Promise<any>} 市场研究分析结果
   */
  async marketResearch(topic, additionalContext, onThoughtStep, onThoughtChain, onResult) {
    const systemPrompt = `
      你是一个专业的市场研究分析师，擅长分析市场趋势、消费者行为和竞争格局。
      请提供详细、结构化的市场研究报告，包括以下部分：
      1. 执行摘要
      2. 关键发现
      3. 市场趋势分析
      4. 消费者洞察
      5. 竞争分析
      6. 机会与建议
      
      使用数据支持你的分析，并提供可操作的建议。
      
      同时，请提供你的思维过程，说明你是如何分析这个主题的。
    `;

    const query = `
      请对以下主题进行深入的市场研究分析：${topic}
      ${additionalContext ? `\n额外背景信息：${additionalContext}` : ''}
    `;

    try {
      // 启动思维链流式输出（异步）
      const thoughtChainPromise = this.streamThoughtChain(topic, onThoughtStep);
      
      // 等待思维链第一步开始显示后再开始API调用（给用户一个思考开始的视觉反馈）
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 使用流式输出获取分析结果
      const stream = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: 4000,
        system: systemPrompt,
        messages: [
          { role: "user", content: query }
        ],
        stream: true
      });

      let fullResponse = '';
      
      for await (const chunk of stream) {
        if (chunk.type === 'content_block_delta' && chunk.delta.text) {
          const delta = chunk.delta.text;
          fullResponse += delta;
          if (onResult) {
            onResult(delta, fullResponse);
          }
        }
      }

      // 等待思维链完成
      const thoughtChain = await thoughtChainPromise;
      
      // 调用完整思维链回调
      if (onThoughtChain) {
        onThoughtChain(thoughtChain);
      }

      return {
        success: true,
        result: fullResponse,
        topic: topic,
        thoughtChain: thoughtChain
      };
    } catch (error) {
      console.error('市场研究分析失败:', error);
      return {
        success: false,
        error: `市场研究分析失败: ${error instanceof Error ? error.message : String(error)}`,
        topic: topic
      };
    }
  }

  /**
   * 分析竞争对手
   * @param {string[]} competitors 竞争对手名称数组
   * @param {string} industry 行业
   * @returns {Promise<any>} 竞争对手分析结果
   */
  async competitorAnalysis(competitors, industry) {
    const systemPrompt = `
      你是一个专业的竞争分析专家，擅长评估竞争格局和战略定位。
      请提供详细的竞争对手分析，包括：
      1. 每个竞争对手的优势和劣势
      2. 市场份额和定位
      3. 产品/服务对比
      4. 营销策略
      5. 差异化机会
    `;

    const query = `
      请对${industry}行业的以下竞争对手进行详细分析：
      ${competitors.join(', ')}
    `;

    try {
      const response = await this.query(query, systemPrompt, 4000);
      
      return {
        success: true,
        result: response,
        competitors: competitors,
        industry: industry
      };
    } catch (error) {
      console.error('竞争对手分析失败:', error);
      return {
        success: false,
        error: `竞争对手分析失败: ${error instanceof Error ? error.message : String(error)}`,
        competitors: competitors,
        industry: industry
      };
    }
  }

  /**
   * 生成消费者洞察报告
   * @param {string} targetAudience 目标受众
   * @param {string} product 产品或服务
   * @returns {Promise<any>} 消费者洞察报告
   */
  async consumerInsights(targetAudience, product) {
    const systemPrompt = `
      你是一个专业的消费者洞察分析师，擅长理解消费者行为、需求和偏好。
      请提供详细的消费者洞察报告，包括：
      1. 目标受众概况
      2. 消费者行为模式
      3. 购买决策因素
      4. 痛点和需求
      5. 机会和建议
    `;

    const query = `
      请为以下产品/服务生成详细的消费者洞察报告：
      产品/服务：${product}
      目标受众：${targetAudience}
    `;

    try {
      const response = await this.query(query, systemPrompt, 4000);
      
      return {
        success: true,
        result: response,
        targetAudience: targetAudience,
        product: product
      };
    } catch (error) {
      console.error('消费者洞察分析失败:', error);
      return {
        success: false,
        error: `消费者洞察分析失败: ${error instanceof Error ? error.message : String(error)}`,
        targetAudience: targetAudience,
        product: product
      };
    }
  }
}

/**
 * 创建DeepModel实例的工厂函数
 * @param {string} apiKey Anthropic API密钥
 * @returns {DeepModel} DeepModel实例
 */
export const createDeepModel = (apiKey) => {
  return new DeepModel(apiKey);
};

/**
 * 使用示例
 * 
 * // 初始化
 * const apiKey = 'your-anthropic-api-key';
 * const deepModel = createDeepModel(apiKey);
 * 
 * // 简单查询
 * const response = await deepModel.query('分析2025年零售业的主要趋势');
 * 
 * // 市场研究
 * const research = await deepModel.marketResearch('Gen Z在中国市场的消费行为');
 * 
 * // 竞争对手分析
 * const competitors = ['竞争对手A', '竞争对手B', '竞争对手C'];
 * const analysis = await deepModel.competitorAnalysis(competitors, '零售业');
 * 
 * // 消费者洞察
 * const insights = await deepModel.consumerInsights('18-24岁大学生', '生活用品');
 */
