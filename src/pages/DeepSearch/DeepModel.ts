import Anthropic from '@anthropic-ai/sdk';

/**
 * Claude 3.7 Sonnet model interface
 * Provides methods for interacting with Claude AI model
 */
export class DeepModel {
  private anthropic: Anthropic;
  private model: string;

  /**
   * Initialize DeepModel instance
   * @param {string} apiKey Anthropic API key
   */
  constructor(apiKey: string) {
    this.anthropic = new Anthropic({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true, // Allow running in browser environment
    });
    this.model = 'claude-3-5-sonnet-20240620';
  }

  /**
   * Send text request to Claude model and get response
   * @param {string} query User query text
   * @param {string} systemPrompt System prompt (optional)
   * @param {number} maxTokens Maximum tokens to generate (default 1000)
   * @returns {Promise<string>} Model response text
   */
  async query(query: string, systemPrompt?: string, maxTokens: number = 1000): Promise<string> {
    try {
      const response = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: maxTokens,
        system: systemPrompt || "You are a professional market research and data analysis assistant, providing detailed, accurate, and insightful answers.",
        messages: [
          { role: "user", content: query }
        ]
      });

      // Check content type and extract text
      if (response.content[0].type === 'text') {
        return response.content[0].text;
      } else {
        throw new Error('Response content is not text type');
      }
    } catch (error) {
      console.error('Claude API call failed:', error);
      throw new Error(`Claude model call failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Send multi-turn conversation request to Claude model
   * @param {Array<{role: 'user' | 'assistant', content: string}>} messages Message array with roles and content
   * @param {string} systemPrompt System prompt (optional)
   * @param {number} maxTokens Maximum tokens to generate (default 1000)
   * @returns {Promise<string>} Model response text
   */
  async conversation(
    messages: Array<{role: 'user' | 'assistant', content: string}>, 
    systemPrompt?: string, 
    maxTokens: number = 1000
  ): Promise<string> {
    try {
      const formattedMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: maxTokens,
        system: systemPrompt || "You are a professional market research and data analysis assistant, providing detailed, accurate, and insightful answers.",
        messages: formattedMessages
      });

      // Check content type and extract text
      if (response.content[0].type === 'text') {
        return response.content[0].text;
      } else {
        throw new Error('Response content is not text type');
      }
    } catch (error) {
      console.error('Claude API multi-turn conversation call failed:', error);
      throw new Error(`Claude model call failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stream query results
   * @param {string} query User query text
   * @param {string} systemPrompt System prompt (optional)
   * @param {number} maxTokens Maximum tokens to generate (default 1000)
   * @param {function} onDelta Callback function for each incremental text
   * @param {function} onComplete Callback function for completion
   * @param {function} onError Callback function for error handling
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
      const stream = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: maxTokens,
        system: systemPrompt || "You are a professional market research and data analysis assistant, providing detailed, accurate, and insightful answers.",
        messages: [
          { role: "user", content: query }
        ],
        stream: true
      });

      let fullResponse = '';
      
      for await (const chunk of stream) {
        if (chunk.type === 'content_block_delta' && 'text' in chunk.delta && chunk.delta.text) {
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
      console.error('Claude API streaming call failed:', error);
      if (onError) {
        onError(error);
      }
    }
  }

  /**
   * Generate thought chain process
   * @param {string} topic Research topic
   * @param {function} onThinking Callback function for thinking process
   * @returns {Promise<string[]>} Thought chain steps array
   */
  async generateThoughtChain(
    topic: string, 
    onThinking: ((thinkingContent: string, thinkingState: string) => void) | null = null
  ): Promise<string[]> {
    // Default steps, returned in various error situations
    const defaultSteps = [
      `Define research scope - Analyze market size, key players, and consumer behavior for "${topic}"`,
      `Collect data - Integrate industry reports, consumer surveys, and competitor analysis`,
      `Identify key trends - Discover emerging patterns and changes in consumer preferences`,
      `Analyze competitive landscape - Evaluate strengths, weaknesses, and market strategies of key players`,
      `Extract consumer insights - Understand target audience needs, pain points, and purchase decision factors`,
      `Identify opportunities - Discover unmet needs and potential market gaps`,
      `Develop recommendations - Propose specific action recommendations based on analysis results`
    ];
    
    // Use AI model to dynamically generate thought chain process
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
      // If callback function is provided, send initial thinking state
      if (onThinking) {
        onThinking("Analyzing the question...", "Thinking");
      }
      
      // Use streaming output to call Claude API for planning results
      let fullResponse = '';
      
      // Create a Promise to handle streaming response
      const responsePromise = new Promise<string>((resolve, reject) => {
        this.streamQuery(
          prompt, 
          undefined,
          2000,
          // Callback for handling each incremental text
          (delta, currentResponse) => {
            fullResponse = currentResponse;
            
            // Pass thinking process to callback function in real-time
            if (onThinking) {
              // Extract current thinking part
              const thinkingMatch = currentResponse.match(/Thinking:([\s\S]*?)(?=\n\n|$)/i);
              const currentThinking = thinkingMatch ? thinkingMatch[1].trim() : "Analyzing the problem...";
              
              // Update thinking state
              onThinking(currentResponse, currentThinking);
            }
          },
          // Callback for completion
          (completeResponse) => {
            resolve(completeResponse);
          },
          // Error handling
          (error) => {
            console.error('Streaming call failed:', error);
            reject(error);
          }
        );
      });
      
      // Wait for streaming response to complete
      const response = await responsePromise;
      
      // If callback function is provided, send final thinking state
      if (onThinking) {
        onThinking(response, "Thinking complete, organizing results");
      }
      
      // Extract JSON part
      // 尝试匹配三个反引号包围的JSON
      let jsonMatch = response.match(/```(?:json)?\s*({[\s\S]*?})```/);
      
      // 如果没有找到，尝试匹配直接在文本中的JSON（以"{"开始，以"}"结束的部分）
      if (!jsonMatch) {
        jsonMatch = response.match(/(?:JSON format[^{]*)?({[\s\S]*?})\s*(?:"?$|(?=\n\n))/);
      }
      
      if (!jsonMatch) {
        console.log('Unable to extract JSON from response, attempting to extract subtasks from text response');
        try {
          // Try to extract subtasks from text response
          const subtasksMatch = response.match(/sub[-_]tasks?[:\s]+([\s\S]*?)(?=\n\n|$)/i);
          if (subtasksMatch) {
            const subtasksText = subtasksMatch[1];
            const subtasks = subtasksText.split(/\n\s*[-*•]\s*/).filter(line => line.trim());
            if (subtasks.length > 0) {
              return subtasks.map(task => task.trim());
            }
          }
          
          // If no subtasks found, try to find numbered list items
          const numberedListMatch = response.match(/\d+\.\s+([^\n]+)(?:\n|$)/g);
          if (numberedListMatch && numberedListMatch.length > 0) {
            return numberedListMatch.map(item => item.replace(/^\d+\.\s+/, '').trim());
          }
          
          // If still no structured content found, try to parse as JSON as last resort
          try {
            const planData = JSON.parse(response);
            if (planData.sub_tasks && Array.isArray(planData.sub_tasks)) {
              return planData.sub_tasks.map((task: any) => task.description || task.id);
            }
          } catch (jsonError) {
            console.log('Response is not valid JSON, using default steps');
          }
        } catch (parseError) {
          console.error('Text parsing failed:', parseError);
        }
        
        console.log('Returning default thought chain steps');
        return defaultSteps;
      }
      
      try {
        // Parse JSON
        const planData = JSON.parse(jsonMatch[1]);
        
        // Extract subtasks as steps
        if (planData.sub_tasks && Array.isArray(planData.sub_tasks)) {
          return planData.sub_tasks.map((task: any) => task.description || task.id);
        } else {
          console.error('No valid subtasks in planning data');
          return defaultSteps;
        }
      } catch (jsonError) {
        console.error('JSON parsing failed:', jsonError);
        return defaultSteps;
      }
    } catch (error) {
      console.error('Thought chain generation failed:', error);
      return defaultSteps;
    }
  }

  /**
   * Stream thought chain process and generate analysis results
   * @param {string} topic Research topic
   * @param {function} onThoughtStep Callback function for each thought step
   * @param {function} onThoughtChainComplete Callback function when thought chain is complete
   * @param {function} onAnalysisResult Callback function for analysis results
   * @param {number} delayBetweenSteps Delay time between steps (milliseconds)
   * @returns {Promise<{thoughtChain: string[], analysisResult: string}>} Thought chain steps array and analysis result
   */
  async streamThoughtChain(
    topic: string, 
    onThoughtStep?: (step: string, completedSteps: string[]) => void, 
    onThoughtChainComplete?: (steps: string[]) => void, 
    onAnalysisResult?: (delta: string, fullResponse: string) => void, 
    delayBetweenSteps: number = 1000
  ): Promise<{thoughtChain: string[], analysisResult: string}> {
    try {
      // Set thinking state
      let modelThinking = '';
      let modelThinkingState = 'Initializing thinking process...';
      
      // Create a callback function to handle model thinking process
      const onModelThinking = (thinkingContent: string, thinkingState: string) => {
        modelThinking = thinkingContent;
        modelThinkingState = thinkingState;
        
        // Pass model thinking process to analysis result callback
        if (onAnalysisResult) {
          const thinkingOutput = `Model thinking process:\n\n${modelThinking}\n\nCurrent state: ${modelThinkingState}`;
          onAnalysisResult(thinkingOutput, thinkingOutput);
        }
      };
      
      // Get thought chain steps while passing thinking process callback
      const steps = await this.generateThoughtChain(topic, onModelThinking);
      
      // Simulate AI thinking process, output thought chain step by step
      const completedSteps: string[] = [];
      for (let i = 0; i < steps.length; i++) {
        // Delay for a period of time to simulate thinking process
        await new Promise(resolve => setTimeout(resolve, delayBetweenSteps));
        
        // Add to completed steps
        completedSteps.push(steps[i]);
        
        // Call callback function, passing current step and completed steps array
        if (onThoughtStep) {
          onThoughtStep(steps[i], completedSteps);
        }
      }
      
      // After thought chain is complete, generate brief analysis result
      if (onThoughtChainComplete) {
        onThoughtChainComplete(steps);
      }
      
      // Generate preliminary analysis result
      const analysisPrompt = `
        Based on the following thought chain steps, please provide a brief preliminary analysis result, including the core points of this topic, key areas to focus on, and possible research directions:
        
        Research topic: "${topic}"
        Thought chain steps:
        ${steps.join('\n')}
      `;
      
      // Use streaming output to get analysis result
      let analysisResult = '';
      if (onAnalysisResult) {
        const stream = await this.anthropic.messages.create({
          model: this.model,
          max_tokens: 1000,
          system: "You are a professional market research analyst, skilled at providing concise and clear preliminary analysis.",
          messages: [
            { role: "user", content: analysisPrompt }
          ],
          stream: true
        });
        
        for await (const chunk of stream) {
          if (chunk.type === 'content_block_delta' && 'text' in chunk.delta && chunk.delta.text) {
            const delta = chunk.delta.text;
            analysisResult += delta;
            if (onAnalysisResult) {
              onAnalysisResult(delta, analysisResult);
            }
          }
        }
      }
      
      return {
        thoughtChain: steps,
        analysisResult: analysisResult
      };
    } catch (error) {
      console.error('Streaming thought chain process failed:', error);
      
      // Return default steps
      const defaultSteps = [
        `Step 1: Define research scope - Analyze market size, key players, and consumer behavior for "${topic}"`,
        `Step 2: Collect data - Integrate industry reports, consumer surveys, and competitor analysis`,
        `Step 3: Identify key trends - Discover emerging patterns and changes in consumer preferences`,
        `Step 4: Analyze competitive landscape - Evaluate strengths, weaknesses, and market strategies of key players`,
        `Step 5: Extract consumer insights - Understand target audience needs, pain points, and purchase decision factors`,
        `Step 6: Identify opportunities - Discover unmet needs and potential market gaps`,
        `Step 7: Develop recommendations - Propose specific action recommendations based on analysis results`
      ];
      
      if (onThoughtChainComplete) {
        onThoughtChainComplete(defaultSteps);
      }
      
      return {
        thoughtChain: defaultSteps,
        analysisResult: `Analysis failed: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  /**
   * Send market research analysis request
   * @param {string} topic Research topic
   * @param {string} additionalContext Additional context information (optional)
   * @param {function} onProgress Callback function for progress updates, receives delta and fullResponse parameters
   * @param {boolean} useStreaming Whether to use streaming output (default false)
   * @returns {Promise<any>} Market research analysis result
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
      
      // Use streaming output or regular query
      if (useStreaming && onProgress) {
        // Use streaming output to get analysis result
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
          if (chunk.type === 'content_block_delta' && 'text' in chunk.delta && chunk.delta.text) {
            const delta = chunk.delta.text;
            fullResponse += delta;
            if (onProgress) {
              onProgress(delta, fullResponse);
            }
          }
        }
        
        result = fullResponse;
      } else {
        // Use regular query
        result = await this.query(query, systemPrompt, 4000);
        
        // If there's a progress callback, pass the complete result at once
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
      console.error('Market research analysis failed:', error);
      return {
        success: false,
        error: `Market research analysis failed: ${error instanceof Error ? error.message : String(error)}`,
        topic: topic
      };
    }
  }

  /**
   * Analyze competitors
   * @param {string[]} competitors Competitor names array
   * @param {string} industry Industry
   * @param {function} onProgress Callback function for progress updates (optional)
   * @returns {Promise<any>} Competitor analysis result
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
      // If progress callback is provided, use streaming output
      if (onProgress) {
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
          if (chunk.type === 'content_block_delta' && 'text' in chunk.delta && chunk.delta.text) {
            const delta = chunk.delta.text;
            fullResponse += delta;
            if (onProgress) {
              onProgress(delta, fullResponse);
            }
          }
        }
        
        return {
          success: true,
          result: fullResponse,
          competitors: competitors,
          industry: industry
        };
      } else {
        // Otherwise use regular query
        const response = await this.query(query, systemPrompt, 4000);
        
        return {
          success: true,
          result: response,
          competitors: competitors,
          industry: industry
        };
      }
    } catch (error) {
      console.error('Competitor analysis failed:', error);
      return {
        success: false,
        error: `Competitor analysis failed: ${error instanceof Error ? error.message : String(error)}`,
        competitors: competitors,
        industry: industry
      };
    }
  }

  /**
   * Generate consumer insights report
   * @param {string} targetAudience Target audience
   * @param {string} product Product or service
   * @param {function} onProgress Callback function for progress updates (optional)
   * @returns {Promise<any>} Consumer insights report
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
      // If progress callback is provided, use streaming output
      if (onProgress) {
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
          if (chunk.type === 'content_block_delta' && 'text' in chunk.delta && chunk.delta.text) {
            const delta = chunk.delta.text;
            fullResponse += delta;
            if (onProgress) {
              onProgress(delta, fullResponse);
            }
          }
        }
        
        return {
          success: true,
          result: fullResponse,
          targetAudience: targetAudience,
          product: product
        };
      } else {
        // Otherwise use regular query
        const response = await this.query(query, systemPrompt, 4000);
        
        return {
          success: true,
          result: response,
          targetAudience: targetAudience,
          product: product
        };
      }
    } catch (error) {
      console.error('Consumer insights analysis failed:', error);
      return {
        success: false,
        error: `Consumer insights analysis failed: ${error instanceof Error ? error.message : String(error)}`,
        targetAudience: targetAudience,
        product: product
      };
    }
  }
}

/**
 * Factory function to create DeepModel instance
 * @param {string} apiKey Anthropic API key
 * @returns {DeepModel} DeepModel instance
 */
export const createDeepModel = (apiKey: string): DeepModel => {
  return new DeepModel(apiKey);
};
