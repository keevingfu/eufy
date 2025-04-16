import React, { useState } from 'react';
import { Play, Save, Settings, Globe, Bot, Video, Microscope, Wrench } from 'lucide-react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('agent-settings');
  const [agentSettings, setAgentSettings] = useState({
    mode: 'default',
    timeout: 300,
    maxSteps: 15
  });
  const [llmSettings, setLlmSettings] = useState({
    provider: 'openai',
    model: 'gpt-4o',
    temperature: 0.7
  });
  const [browserSettings, setBrowserSettings] = useState({
    type: 'chromium',
    headless: 'false',
    userAgent: '',
    viewportWidth: 1920,
    viewportHeight: 1080
  });
  const [agentTask, setAgentTask] = useState('');
  const [agentModel, setAgentModel] = useState('gpt-4o');
  const [isAgentRunning, setIsAgentRunning] = useState(false);
  const [agentResult, setAgentResult] = useState(null);
  const [researchTopic, setResearchTopic] = useState('');
  const [researchDepth, setResearchDepth] = useState('standard');
  const [researchModel, setResearchModel] = useState('gpt-4o');
  const [isResearchRunning, setIsResearchRunning] = useState(false);
  const [researchResult, setResearchResult] = useState(null);
  const [recordings, setRecordings] = useState([
    {
      id: 1,
      title: 'Eufy扫地机器人竞品分析',
      date: '2025-04-15',
      duration: '12:35',
      size: '45.2 MB'
    },
    {
      id: 2,
      title: '用户评价数据收集',
      date: '2025-04-10',
      duration: '08:22',
      size: '28.7 MB'
    }
  ]);

  // 保存代理设置
  const handleSaveAgentSettings = () => {
    alert('代理设置已保存！');
  };

  // 保存LLM设置
  const handleSaveLLMSettings = () => {
    alert('LLM设置已保存！');
  };

  // 保存浏览器设置
  const handleSaveBrowserSettings = () => {
    alert('浏览器设置已保存！');
  };

  // 运行代理
  const handleRunAgent = () => {
    if (!agentTask.trim()) {
      alert('请输入任务描述');
      return;
    }

    setIsAgentRunning(true);
    setAgentResult(null);

    // 模拟代理执行
    setTimeout(() => {
      setAgentResult({
        task: agentTask,
        model: agentModel,
        status: '已完成',
        summary: '代理已成功完成任务。在实际实现中，这里会显示代理的执行结果。'
      });
      setIsAgentRunning(false);
    }, 3000);
  };

  // 开始研究
  const handleStartResearch = () => {
    if (!researchTopic.trim()) {
      alert('请输入研究主题');
      return;
    }

    setIsResearchRunning(true);
    setResearchResult(null);

    // 模拟研究执行
    setTimeout(() => {
      setResearchResult({
        topic: researchTopic,
        depth: researchDepth,
        model: researchModel,
        status: '已完成',
        summary: '深度研究已完成。在实际实现中，这里会显示研究的详细结果。'
      });
      setIsResearchRunning(false);
    }, 5000);
  };

  // 渲染标签内容
  const renderTabContent = () => {
    switch (activeTab) {
      case 'agent-settings':
        return (
          <div className="bg-white rounded-lg shadow-card p-6">
            <h3 className="text-xl font-semibold mb-4">代理配置</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="agentMode" className="block text-sm font-medium text-text mb-1">代理模式:</label>
                <select 
                  id="agentMode" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  value={agentSettings.mode}
                  onChange={(e) => setAgentSettings({...agentSettings, mode: e.target.value})}
                >
                  <option value="default">默认模式 (任务完成后关闭浏览器)</option>
                  <option value="persistent">持久模式 (浏览器保持打开状态)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="agentTimeout" className="block text-sm font-medium text-text mb-1">任务超时 (秒):</label>
                <input 
                  type="number" 
                  id="agentTimeout" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  value={agentSettings.timeout}
                  onChange={(e) => setAgentSettings({...agentSettings, timeout: parseInt(e.target.value)})}
                  min={60}
                  max={1800}
                />
              </div>
              
              <div>
                <label htmlFor="agentMaxSteps" className="block text-sm font-medium text-text mb-1">最大步骤数:</label>
                <input 
                  type="number" 
                  id="agentMaxSteps" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  value={agentSettings.maxSteps}
                  onChange={(e) => setAgentSettings({...agentSettings, maxSteps: parseInt(e.target.value)})}
                  min={5}
                  max={50}
                />
              </div>
              
              <button 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={handleSaveAgentSettings}
              >
                <Save size={18} className="mr-2" /> 保存设置
              </button>
            </div>
          </div>
        );
        
      case 'llm-settings':
        return (
          <div className="bg-white rounded-lg shadow-card p-6">
            <h3 className="text-xl font-semibold mb-4">语言模型设置</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="defaultLLM" className="block text-sm font-medium text-text mb-1">默认LLM提供商:</label>
                <select 
                  id="defaultLLM" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  value={llmSettings.provider}
                  onChange={(e) => setLlmSettings({...llmSettings, provider: e.target.value})}
                >
                  <option value="openai">OpenAI</option>
                  <option value="google">Google</option>
                  <option value="deepseek">DeepSeek</option>
                  <option value="anthropic">Anthropic</option>
                  <option value="mistral">Mistral</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="defaultModel" className="block text-sm font-medium text-text mb-1">默认模型:</label>
                <select 
                  id="defaultModel" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  value={llmSettings.model}
                  onChange={(e) => setLlmSettings({...llmSettings, model: e.target.value})}
                >
                  <option value="gpt-4o">GPT-4o</option>
                  <option value="gemini-pro">Gemini Pro</option>
                  <option value="deepseek-v3">DeepSeek V3</option>
                  <option value="claude-3-opus">Claude 3 Opus</option>
                  <option value="mistral-large">Mistral Large</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="temperature" className="block text-sm font-medium text-text mb-1">
                  温度: <span id="temperatureValue">{llmSettings.temperature}</span>
                </label>
                <input 
                  type="range" 
                  id="temperature" 
                  className="w-full"
                  min="0" 
                  max="1" 
                  step="0.1" 
                  value={llmSettings.temperature}
                  onChange={(e) => setLlmSettings({...llmSettings, temperature: parseFloat(e.target.value)})}
                />
              </div>
              
              <button 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={handleSaveLLMSettings}
              >
                <Save size={18} className="mr-2" /> 保存设置
              </button>
            </div>
          </div>
        );
        
      case 'browser-settings':
        return (
          <div className="bg-white rounded-lg shadow-card p-6">
            <h3 className="text-xl font-semibold mb-4">浏览器配置</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="browserType" className="block text-sm font-medium text-text mb-1">浏览器类型:</label>
                <select 
                  id="browserType" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  value={browserSettings.type}
                  onChange={(e) => setBrowserSettings({...browserSettings, type: e.target.value})}
                >
                  <option value="chromium">Chromium</option>
                  <option value="firefox">Firefox</option>
                  <option value="webkit">WebKit</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="headless" className="block text-sm font-medium text-text mb-1">无头模式:</label>
                <select 
                  id="headless" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  value={browserSettings.headless}
                  onChange={(e) => setBrowserSettings({...browserSettings, headless: e.target.value})}
                >
                  <option value="false">禁用 (显示浏览器窗口)</option>
                  <option value="true">启用 (隐藏浏览器窗口)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="userAgent" className="block text-sm font-medium text-text mb-1">User Agent:</label>
                <input 
                  type="text" 
                  id="userAgent" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="默认"
                  value={browserSettings.userAgent}
                  onChange={(e) => setBrowserSettings({...browserSettings, userAgent: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="viewportSize" className="block text-sm font-medium text-text mb-1">视口大小:</label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="number" 
                    id="viewportWidth" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="宽度"
                    value={browserSettings.viewportWidth}
                    onChange={(e) => setBrowserSettings({...browserSettings, viewportWidth: parseInt(e.target.value)})}
                    min={800}
                    max={3840}
                  />
                  <span>×</span>
                  <input 
                    type="number" 
                    id="viewportHeight" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="高度"
                    value={browserSettings.viewportHeight}
                    onChange={(e) => setBrowserSettings({...browserSettings, viewportHeight: parseInt(e.target.value)})}
                    min={600}
                    max={2160}
                  />
                </div>
              </div>
              
              <button 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={handleSaveBrowserSettings}
              >
                <Save size={18} className="mr-2" /> 保存设置
              </button>
            </div>
          </div>
        );
        
      case 'run-agent':
        return (
          <div>
            <div className="bg-white rounded-lg shadow-card p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">运行浏览器代理</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="agentTask" className="block text-sm font-medium text-text mb-1">任务描述:</label>
                  <textarea 
                    id="agentTask" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    rows="4"
                    placeholder="描述您希望代理执行的任务。例如：'搜索最新的扫地机器人评测并总结前3款型号'"
                    value={agentTask}
                    onChange={(e) => setAgentTask(e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="agentModel" className="block text-sm font-medium text-text mb-1">AI模型:</label>
                  <select 
                    id="agentModel" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    value={agentModel}
                    onChange={(e) => setAgentModel(e.target.value)}
                  >
                    <option value="gpt-4o">OpenAI - GPT-4o</option>
                    <option value="gemini-pro">Google - Gemini Pro</option>
                    <option value="deepseek-v3">DeepSeek - V3</option>
                    <option value="claude-3-opus">Anthropic - Claude 3 Opus</option>
                    <option value="mistral-large">Mistral - Large</option>
                  </select>
                </div>
                
                <button 
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  onClick={handleRunAgent}
                  disabled={isAgentRunning}
                >
                  {isAgentRunning ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      代理运行中...
                    </>
                  ) : (
                    <>
                      <Play size={18} className="mr-2" /> 运行代理
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {agentResult && (
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-semibold mb-4">代理结果</h3>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="mb-2">
                    <span className="font-medium">任务:</span> {agentResult.task}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">模型:</span> {agentResult.model}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">状态:</span> {agentResult.status}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">摘要:</span> {agentResult.summary}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
        
      case 'deep-research':
        return (
          <div>
            <div className="bg-white rounded-lg shadow-card p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">深度研究</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="researchTopic" className="block text-sm font-medium text-text mb-1">研究主题:</label>
                  <textarea 
                    id="researchTopic" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    rows="4"
                    placeholder="输入一个复杂的研究主题。例如：'分析AI对电商产品推荐的影响，过去2年的趋势'"
                    value={researchTopic}
                    onChange={(e) => setResearchTopic(e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="researchDepth" className="block text-sm font-medium text-text mb-1">研究深度:</label>
                  <select 
                    id="researchDepth" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    value={researchDepth}
                    onChange={(e) => setResearchDepth(e.target.value)}
                  >
                    <option value="basic">基础 (快速概览)</option>
                    <option value="standard">标准 (全面分析)</option>
                    <option value="deep">深度 (详尽调查)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="researchModel" className="block text-sm font-medium text-text mb-1">AI模型:</label>
                  <select 
                    id="researchModel" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    value={researchModel}
                    onChange={(e) => setResearchModel(e.target.value)}
                  >
                    <option value="gpt-4o">OpenAI - GPT-4o</option>
                    <option value="claude-3-opus">Anthropic - Claude 3 Opus</option>
                  </select>
                </div>
                
                <button 
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  onClick={handleStartResearch}
                  disabled={isResearchRunning}
                >
                  {isResearchRunning ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      研究进行中...
                    </>
                  ) : (
                    <>
                      <Microscope size={18} className="mr-2" /> 开始研究
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {researchResult && (
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-semibold mb-4">研究结果</h3>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="mb-2">
                    <span className="font-medium">主题:</span> {researchResult.topic}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">深度:</span> {researchResult.depth}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">模型:</span> {researchResult.model}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">状态:</span> {researchResult.status}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">摘要:</span> {researchResult.summary}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
        
      case 'recordings':
        return (
          <div className="bg-white rounded-lg shadow-card p-6">
            <h3 className="text-xl font-semibold mb-4">浏览器会话录制</h3>
            
            {recordings.length > 0 ? (
              <div className="divide-y divide-border">
                {recordings.map((recording) => (
                  <div key={recording.id} className="py-4 flex justify-between items-center">
                    <div>
                      <div className="font-medium">{recording.title}</div>
                      <div className="text-sm text-secondary">
                        {recording.date} · {recording.duration} · {recording.size}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-primary hover:bg-hover rounded-full">
                        <Play size={18} />
                      </button>
                      <button className="p-2 text-primary hover:bg-hover rounded-full">
                        <Save size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-4 text-secondary">无可用录制</p>
            )}
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text mb-2">AI驱动研究</h1>
        <p className="text-secondary">使用AI控制浏览器执行复杂研究任务。</p>
      </div>

      <div className="bg-white rounded-lg shadow-card">
        <div className="flex overflow-x-auto">
          <button 
            className={`tab px-4 py-3 flex items-center ${activeTab === 'agent-settings' ? 'active text-primary border-b-2 border-primary bg-active' : 'hover:bg-hover'}`}
            onClick={() => setActiveTab('agent-settings')}
          >
            <Wrench size={18} className="mr-2" /> 代理设置
          </button>
          <button 
            className={`tab px-4 py-3 flex items-center ${activeTab === 'llm-settings' ? 'active text-primary border-b-2 border-primary bg-active' : 'hover:bg-hover'}`}
            onClick={() => setActiveTab('llm-settings')}
          >
            <Globe size={18} className="mr-2" /> LLM设置
          </button>
          <button 
            className={`tab px-4 py-3 flex items-center ${activeTab === 'browser-settings' ? 'active text-primary border-b-2 border-primary bg-active' : 'hover:bg-hover'}`}
            onClick={() => setActiveTab('browser-settings')}
          >
            <Settings size={18} className="mr-2" /> 浏览器设置
          </button>
          <button 
            className={`tab px-4 py-3 flex items-center ${activeTab === 'run-agent' ? 'active text-primary border-b-2 border-primary bg-active' : 'hover:bg-hover'}`}
            onClick={() => setActiveTab('run-agent')}
          >
            <Bot size={18} className="mr-2" /> 运行代理
          </button>
          <button 
            className={`tab px-4 py-3 flex items-center ${activeTab === 'deep-research' ? 'active text-primary border-b-2 border-primary bg-active' : 'hover:bg-hover'}`}
            onClick={() => setActiveTab('deep-research')}
          >
            <Microscope size={18} className="mr-2" /> 深度研究
          </button>
          <button 
            className={`tab px-4 py-3 flex items-center ${activeTab === 'recordings' ? 'active text-primary border-b-2 border-primary bg-active' : 'hover:bg-hover'}`}
            onClick={() => setActiveTab('recordings')}
          >
            <Video size={18} className="mr-2" /> 录制
          </button>
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default Research;
