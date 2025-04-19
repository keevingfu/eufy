/**
 * AI模型接口
 * 提供通过自定义流式API与AI模型交互的方法
 */
export class DeepModel {
  private apiUrl: string;

  /**
   * 初始化DeepModel实例
   * @param {string} apiKey API密钥（保留为了向后兼容）
   */
  constructor(apiKey: string) {
    // API密钥作为参数保留为了向后兼容
    // 但在自定义API中不使用
    this.apiUrl = process.env.REACT_APP_DEEP_API_URL || 'http://10.108.30.77:8888/ai/chat/stream';
    // 打印API URL以便调试
    console.log('Using Deep API URL:', this.apiUrl);
  }

  /**
   * 发送文本请求到AI模型并获取响应
   * @param {string} query 用户查询文本
   * @param {string} systemPrompt 系统提示（可选）
   * @param {number} maxTokens 生成的最大令牌数（默认1000）
   * @returns {Promise<string>} 模型响应文本
   */
  async query(query: string, systemPrompt?: string, maxTokens: number = 1000): Promise<string> {
    try {
      // 如果提供了系统提示，创建完整的提示
      const fullQuery = systemPrompt 
        ? `${systemPrompt}\n\n${query}`
        : query;
      
      // 使用streamQuery和Promise收集完整响应
      return new Promise((resolve, reject) => {
        let fullResponse = '';
        
        this.streamQuery(
          fullQuery,
          undefined,
          maxTokens,
          (delta, currentResponse) => {
            fullResponse = currentResponse;
          },
          (completeResponse) => {
            resolve(completeResponse);
          },
          (error) => {
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error('API调用失败:', error);
      throw new Error(`模型调用失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * 发送多轮对话请求到AI模型
   * @param {Array<{role: 'user' | 'assistant', content: string}>} messages 带有角色和内容的消息数组
   * @param {string} systemPrompt 系统提示（可选）
   * @param {number} maxTokens 生成的最大令牌数（默认1000）
   * @returns {Promise<string>} 模型响应文本
   */
  async conversation(
    messages: Array<{role: 'user' | 'assistant', content: string}>, 
    systemPrompt?: string, 
    maxTokens: number = 1000
  ): Promise<string> {
    try {
      // 将对话格式化为单个查询字符串
      let conversationText = '';
      
      if (systemPrompt) {
        conversationText += `${systemPrompt}\n\n`;
      }
      
      // 将消息格式化为对话格式
      messages.forEach(msg => {
        const rolePrefix = msg.role === 'user' ? 'User: ' : 'Assistant: ';
        conversationText += `${rolePrefix}${msg.content}\n\n`;
      });
      
      // 添加最终提示，让助手继续
      conversationText += 'Assistant: ';
      
      // 使用streamQuery和Promise收集完整响应
      return new Promise((resolve, reject) => {
        let fullResponse = '';
        
        this.streamQuery(
          conversationText,
          undefined,
          maxTokens,
          (delta, currentResponse) => {
            fullResponse = currentResponse;
          },
          (completeResponse) => {
            resolve(completeResponse);
          },
          (error) => {
            reject(error);
          }
        );
      });
    } catch (error) {
      console.error('多轮对话调用失败:', error);
      throw new Error(`模型调用失败: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * 流式查询结果
   * @param {string} query 用户查询文本
   * @param {string} systemPrompt 系统提示（可选）
   * @param {number} maxTokens 生成的最大令牌数（默认1000）
   * @param {function} onDelta 每个增量文本的回调函数
   * @param {function} onComplete 完成时的回调函数
   * @param {function} onError 错误处理的回调函数
   */
  async streamQuery(
    query: string, 
    systemPrompt?: string, 
    maxTokens: number = 1000, 
    onDelta?: (delta: string, fullResponse: string) => void, 
    onComplete?: (fullResponse: string) => void, 
    onError?: (error: any) => void
  ): Promise<void> {
    try {
      // 创建fetch请求，查询在URL参数中
      console.log('发送请求到Deep API:', this.apiUrl, { query, systemPrompt, maxTokens });
      
      // 创建Abort Controller用于超时处理
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30秒超时
      
      // 构建URL查询参数
      const url = new URL(this.apiUrl);
      url.searchParams.append('query', query);
      
      // 添加可选参数
      if (systemPrompt) {
        url.searchParams.append('system_prompt', systemPrompt);
      }
      
      if (maxTokens && maxTokens !== 1000) { // 只有当不是默认值时才添加
        url.searchParams.append('max_tokens', maxTokens.toString());
      }
      
      console.log('最终请求URL:', url.toString());
      
      const response = await fetch(url.toString(), {
        method: 'POST', // 保持POST方法
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
        },
        credentials: 'omit', // 将credentials改为omit以解决CORS问题
        mode: 'cors',
        cache: 'no-cache',
        signal: controller.signal
      });
      
      clearTimeout(timeoutId); // 清除超时计时器
      
      if (!response.ok || !response.body) {
        console.error('API响应错误:', response.status, response.statusText);
        throw new Error(`HTTP错误! 状态: ${response.status}, 消息: ${response.statusText}`);
      }
      
      // 创建读取器来读取流
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';
      
      // 处理流
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // 解码数据块
        const chunk = decoder.decode(value, { stream: true });
        // 处理数据块中的事件
          
        try {
          // 提取JSON部分
          //const jsonStr = event.substring('event message:'.length).trim();
          const data = JSON.parse(chunk.trim());

          // 从不同事件类型提取文本
          let deltaText = '';
          
          if (data.type === 'content_block_delta' && data.delta && data.delta.text) {
            deltaText = data.delta.text;
          } else if (data.type === 'text' && data.text) {
            deltaText = data.text;
          }
          
          if (deltaText) {
            fullResponse += deltaText;
            if (onDelta) {
              onDelta(deltaText, fullResponse);
            }
          }
        } catch (e) {
          console.warn('解析事件错误:', e);
        }
      }
     // }
      
      if (onComplete) {
        onComplete(fullResponse);
      }
    } catch (error) {
      console.error('流式API调用失败:', error);
      if (onError) {
        onError(error);
      }
    }
  }

  /**
   * 生成思维链过程
   * @param {string} topic 研究主题
   * @param {function} onThinking 思考过程的回调函数
   * @returns {Promise<string[]>} 思维链步骤数组
   */
  async generateThoughtChain(
    topic: string, 
    onThinking: ((thinkingContent: string, thinkingState: string) => void) | null = null
  ): Promise<string[]> {
    // 默认步骤，在各种错误情况下返回
    const defaultSteps = [
      `定义研究范围 - 分析"${topic}"的市场规模、关键参与者和消费者行为`,
      `收集数据 - 整合行业报告、消费者调查和竞争对手分析`,
      `识别关键趋势 - 发现消费者偏好的新兴模式和变化`,
      `分析竞争格局 - 评估关键参与者的优势、劣势和市场战略`,
      `提取消费者洞察 - 理解目标受众需求、痛点和购买决策因素`,
      `识别机会 - 发现未满足的需求和潜在的市场空白`,
      `制定建议 - 基于分析结果提出具体的行动建议`
    ];
    
    // 使用AI模型动态生成思维链过程
    const question = topic;
    
    const prompt = `You are a professional search planning assistant. Please analyze the user's question and develop a search plan.
    User question: ${question}
    Please think through the following steps:
    1. Analyze the core intent and key concepts of the question
      You can reference the following directions but consider the actual question(${defaultSteps})
    2. Break down the question into searchable sub-problems
    3. Design appropriate search query terms for each sub-problem
    4. Plan how to integrate the search results
    Output your plan in JSON format:
    {
    "intent": "Core intent of the question",
    "key_concepts": ["Concept1","Concept2", ...],
    "sub_tasks": [
    {
    "id": "Subtask1",
    "description": "Subtask description",
    "search_query": "Search query terms",
    "expected_info": "Expected information to obtain"
    },...],
    "integration_plan": "Results integration plan"
    }
    `;

    try {
      // 如果提供了回调函数，发送初始思考状态
      if (onThinking) {
        onThinking("正在分析问题...", "思考中");
      }
      
      // 使用流式输出调用API获取规划结果
      let fullResponse = '';
      
      // 创建Promise处理流式响应
      const responsePromise = new Promise<string>((resolve, reject) => {
        this.streamQuery(
          prompt, 
          undefined,
          2000,
          // 处理每个增量文本的回调
          (delta, currentResponse) => {
            fullResponse = currentResponse;
            
            // 实时将思考过程传递给回调函数
            if (onThinking) {
              // 提取当前思考部分
              const thinkingMatch = currentResponse.match(/Thinking:([\s\S]*?)(?=\n\n|$)/i);
              const currentThinking = thinkingMatch ? thinkingMatch[1].trim() : "正在分析问题...";
              
              // 更新思考状态
              onThinking(currentResponse, currentThinking);
            }
          },
          // 完成回调
          (completeResponse) => {
            resolve(completeResponse);
          },
          // 错误处理
          (error) => {
            console.error('流式调用失败:', error);
            reject(error);
          }
        );
      });
      
      // 等待流式响应完成
      const response = await responsePromise;
      
      // 如果提供了回调函数，发送最终思考状态
      if (onThinking) {
        onThinking(response, "思考完成，正在整理结果");
      }
      
      // 提取JSON部分
      // 尝试匹配三个反引号包围的JSON
      let jsonMatch = response.match(/```(?:json)?\s*({[\s\S]*?})```/);
      
      // 如果没有找到，尝试匹配直接在文本中的JSON（以"{"开始，以"}"结束的部分）
      if (!jsonMatch) {
        jsonMatch = response.match(/(?:JSON format[^{]*)?({[\s\S]*?})\s*(?:"?$|(?=\n\n))/);
      }
      
      if (!jsonMatch) {
        console.log('无法从响应中提取JSON，尝试从文本响应中提取子任务');
        try {
          // 尝试从文本响应中提取子任务
          const subtasksMatch = response.match(/sub[-_]tasks?[:\s]+([\s\S]*?)(?=\n\n|$)/i);
          if (subtasksMatch) {
            const subtasksText = subtasksMatch[1];
            const subtasks = subtasksText.split(/\n\s*[-*•]\s*/).filter(line => line.trim());
            if (subtasks.length > 0) {
              return subtasks.map(task => task.trim());
            }
          }
          
          // 如果没有找到子任务，尝试查找编号列表项
          const numberedListMatch = response.match(/\d+\.\s+([^\n]+)(?:\n|$)/g);
          if (numberedListMatch && numberedListMatch.length > 0) {
            return numberedListMatch.map(item => item.replace(/^\d+\.\s+/, '').trim());
          }
          
          // 如果仍然没有找到结构化内容，尝试解析为JSON作为最后的手段
          try {
            const planData = JSON.parse(response);
            if (planData.sub_tasks && Array.isArray(planData.sub_tasks)) {
              return planData.sub_tasks.map((task: any) => task.description || task.id);
            }
          } catch (jsonError) {
            console.log('响应不是有效的JSON，使用默认步骤');
          }
        } catch (parseError) {
          console.error('文本解析失败:', parseError);
        }
        
        console.log('返回默认思维链步骤');
        return defaultSteps;
      }
      
      try {
        // 解析JSON
        const planData = JSON.parse(jsonMatch[1]);
        
        // 提取子任务作为步骤
        if (planData.sub_tasks && Array.isArray(planData.sub_tasks)) {
          return planData.sub_tasks.map((task: any) => task.description || task.id);
        } else {
          console.error('规划数据中没有有效的子任务');
          return defaultSteps;
        }
      } catch (jsonError) {
        console.error('JSON解析失败:', jsonError);
        return defaultSteps;
      }
    } catch (error) {
      console.error('思维链生成失败:', error);
      return defaultSteps;
    }
  }

  /**
   * 流式思维链过程并生成分析结果
   * @param {string} topic 研究主题
   * @param {function} onThoughtStep 每个思维步骤的回调函数
   * @param {function} onThoughtChainComplete 思维链完成时的回调函数
   * @param {function} onAnalysisResult 分析结果的回调函数
   * @param {number} delayBetweenSteps 步骤之间的延迟时间（毫秒）
   * @returns {Promise<{thoughtChain: string[], analysisResult: string}>} 思维链步骤数组和分析结果
   */
  async streamThoughtChain(
    topic: string, 
    onThoughtStep?: (step: string, completedSteps: string[]) => void, 
    onThoughtChainComplete?: (steps: string[]) => void, 
    onAnalysisResult?: (delta: string, fullResponse: string) => void, 
    delayBetweenSteps: number = 1000
  ): Promise<{thoughtChain: string[], analysisResult: string}> {
    try {
      // 设置思考状态
      let modelThinking = '';
      let modelThinkingState = '正在初始化思考过程...';
      
      // 创建回调函数处理模型思考过程
      const onModelThinking = (thinkingContent: string, thinkingState: string) => {
        modelThinking = thinkingContent;
        modelThinkingState = thinkingState;
        
        // 将模型思考过程传递给分析结果回调
        if (onAnalysisResult) {
          const thinkingOutput = `模型思考过程:\n\n${modelThinking}\n\n当前状态: ${modelThinkingState}`;
          onAnalysisResult(thinkingOutput, thinkingOutput);
        }
      };
      
      // 获取思维链步骤，同时传递思考过程回调
      const steps = await this.generateThoughtChain(topic, onModelThinking);
      
      // 模拟AI思考过程，逐步输出思维链
      const completedSteps: string[] = [];
      for (let i = 0; i < steps.length; i++) {
        // 延迟一段时间来模拟思考过程
        await new Promise(resolve => setTimeout(resolve, delayBetweenSteps));
        
        // 添加到已完成步骤
        completedSteps.push(steps[i]);
        
        // 调用回调函数，传递当前步骤和已完成步骤数组
        if (onThoughtStep) {
          onThoughtStep(steps[i], completedSteps);
        }
      }
      
      // 思维链完成后，生成简要分析结果
      if (onThoughtChainComplete) {
        onThoughtChainComplete(steps);
      }
      
      // 生成初步分析结果
      const analysisPrompt = `
        Based on the following thought chain steps, please provide a brief preliminary analysis result, including the core points of this topic, key areas to focus on, and possible research directions:
        
        Research topic: "${topic}"
        Thought chain steps:
        ${steps.join('\n')}
      `;
      
      // 使用流式输出获取分析结果
      let analysisResult = '';
      if (onAnalysisResult) {
        // 使用我们的streamQuery方法代替直接API调用
        await this.streamQuery(
          analysisPrompt,
          "You are a professional market research analyst, skilled at providing concise and clear preliminary analysis.",
          1000,
          (delta, fullResponse) => {
            analysisResult = fullResponse;
            if (onAnalysisResult) {
              onAnalysisResult(delta, analysisResult);
            }
          }
        );
      }
      
      return {
        thoughtChain: steps,
        analysisResult: analysisResult
      };
    } catch (error) {
      console.error('流式思维链过程失败:', error);
      
      // 返回默认步骤
      const defaultSteps = [
        `步骤1: 定义研究范围 - 分析"${topic}"的市场规模、关键参与者和消费者行为`,
        `步骤2: 收集数据 - 整合行业报告、消费者调查和竞争对手分析`,
        `步骤3: 识别关键趋势 - 发现消费者偏好的新兴模式和变化`,
        `步骤4: 分析竞争格局 - 评估关键参与者的优势、劣势和市场战略`,
        `步骤5: 提取消费者洞察 - 理解目标受众需求、痛点和购买决策因素`,
        `步骤6: 识别机会 - 发现未满足的需求和潜在的市场空白`,
        `步骤7: 制定建议 - 基于分析结果提出具体的行动建议`
      ];
      
      if (onThoughtChainComplete) {
        onThoughtChainComplete(defaultSteps);
      }
      
      return {
        thoughtChain: defaultSteps,
        analysisResult: `分析失败: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  /**
   * 发送市场研究分析请求
   * @param {string} topic 研究主题
   * @param {string} additionalContext 额外的上下文信息（可选）
   * @param {function} onProgress 进度更新的回调函数，接收delta和fullResponse参数
   * @param {boolean} useStreaming 是否使用流式输出（默认false）
   * @returns {Promise<any>} 市场研究分析结果
   */
  async marketResearch(
    topic: string, 
    additionalContext?: string | null, 
    onProgress?: (delta: string, fullResponse: string) => void, 
    useStreaming: boolean = false
  ): Promise<any> {
    const systemPrompt = `
      You are a professional market research analyst, skilled at analyzing market trends, consumer behavior, and competitive landscape.
      Please provide a detailed, structured market research report, including the following sections:
      1. Executive Summary
      2. Key Findings
      3. Market Trend Analysis
      4. Consumer Insights
      5. Competitive Analysis
      6. Opportunities and Recommendations
      
      Support your analysis with data and provide actionable recommendations.
    `;

    const query = `
      Please conduct an in-depth market research analysis on the following topic: ${topic}
      ${additionalContext ? `\nAdditional background information: ${additionalContext}` : ''}
    `;

    try {
      let result: string;
      
      // 使用流式输出或常规查询
      if (useStreaming && onProgress) {
        // 使用我们的streamQuery方法代替直接API调用
        let fullResponse = '';
        await this.streamQuery(
          query,
          systemPrompt,
          4000,
          (delta, currentResponse) => {
            fullResponse = currentResponse;
            if (onProgress) {
              onProgress(delta, fullResponse);
            }
          }
        );
        
        result = fullResponse;
      } else {
        // 使用常规查询
        result = await this.query(query, systemPrompt, 4000);
        
        // 如果有进度回调，一次性传递完整结果
        if (onProgress) {
          onProgress(result, result);
        }
      }

      return {
        success: true,
        result: result,
        topic: topic
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
   * @param {function} onProgress 进度更新的回调函数（可选）
   * @returns {Promise<any>} 竞争对手分析结果
   */
  async competitorAnalysis(
    competitors: string[], 
    industry: string, 
    onProgress: ((delta: string, fullResponse: string) => void) | null = null
  ): Promise<any> {
    const systemPrompt = `
      You are a professional competitive analysis expert, skilled at evaluating competitive landscape and strategic positioning.
      Please provide detailed competitor analysis, including:
      1. Strengths and weaknesses of each competitor
      2. Market share and positioning
      3. Product/service comparison
      4. Marketing strategies
      5. Differentiation opportunities
    `;

    const query = `
      Please provide a detailed analysis of the following competitors in the ${industry} industry:
      ${competitors.join(', ')}
    `;

    try {
      // 如果提供了进度回调，使用流式输出
      if (onProgress) {
        // 使用我们的streamQuery方法代替直接API调用
        let fullResponse = '';
        await this.streamQuery(
          query,
          systemPrompt,
          4000,
          (delta, currentResponse) => {
            fullResponse = currentResponse;
            if (onProgress) {
              onProgress(delta, fullResponse);
            }
          }
        );
        
        return {
          success: true,
          result: fullResponse,
          competitors: competitors,
          industry: industry
        };
      } else {
        // 否则使用常规查询
        const response = await this.query(query, systemPrompt, 4000);
        
        return {
          success: true,
          result: response,
          competitors: competitors,
          industry: industry
        };
      }
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
   * @param {function} onProgress 进度更新的回调函数（可选）
   * @returns {Promise<any>} 消费者洞察报告
   */
  async consumerInsights(
    targetAudience: string, 
    product: string, 
    onProgress: ((delta: string, fullResponse: string) => void) | null = null
  ): Promise<any> {
    const systemPrompt = `
      You are a professional consumer insights analyst, skilled at understanding consumer behavior, needs, and preferences.
      Please provide a detailed consumer insights report, including:
      1. Target audience overview
      2. Consumer behavior patterns
      3. Purchase decision factors
      4. Pain points and needs
      5. Opportunities and recommendations
    `;

    const query = `
      Please generate a detailed consumer insights report for the following product/service:
      Product/Service: ${product}
      Target Audience: ${targetAudience}
    `;

    try {
      // 如果提供了进度回调，使用流式输出
      if (onProgress) {
        // 使用我们的streamQuery方法代替直接API调用
        let fullResponse = '';
        await this.streamQuery(
          query,
          systemPrompt,
          4000,
          (delta, currentResponse) => {
            fullResponse = currentResponse;
            if (onProgress) {
              onProgress(delta, fullResponse);
            }
          }
        );
        
        return {
          success: true,
          result: fullResponse,
          targetAudience: targetAudience,
          product: product
        };
      } else {
        // 否则使用常规查询
        const response = await this.query(query, systemPrompt, 4000);
        
        return {
          success: true,
          result: response,
          targetAudience: targetAudience,
          product: product
        };
      }
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
export const createDeepModel = (apiKey: string): DeepModel => {
  return new DeepModel(apiKey);
};
