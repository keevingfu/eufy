import { useState, useEffect } from 'react';
import { createDeepModel } from './deepmodel';
import {
  updateStepProgress as updateProgress,
  handleSearch as performSearch
} from './index.jsx';
import ReactMarkdown from 'react-markdown';
import {
  Search,
  Brain,
  Database,
  Zap,
  Filter,
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
  
  
  
    // Initialize DeepModel instance
  useEffect(() => {
    // Get API key from environment variables
    // Note: In production, you should use environment variables instead of hardcoded API keys
    // Here we temporarily use a hardcoded key for demonstration and debugging purposes
    const apiKey = process.env.REACT_APP_CLAUDE_API_KEY;
console.log(apiKey);
    // Check if API key exists
    if (!apiKey) {
      setApiError('API key not found, please check environment variable configuration');
      return;
    }
    
    try {
      const model = createDeepModel(apiKey);
      setDeepModel(model);
    } catch (error) {
      setApiError(`Unable to initialize AI model, please check API configuration. Error message: ${error.message}`);
    }
  }, []);
  
  // 简化的步骤进度更新函数 - 不再根据实际进度更新
  const updateStepProgress = () => {
    // 不需要做任何事情，因为进度条现在是自动动画
    // 保留此函数是为了兼容现有代码调用
  };

  // 简化的进度条动画效果
  useEffect(() => {
    let progressInterval;
    
    if (analysisInProgress && currentStep > 0) {
      setStepProgress(0);
      
      const totalDuration = 30000; 
      const updateFrequency = 100; 
      const totalSteps = totalDuration / updateFrequency;
      let currentProgressStep = 0;
      
      progressInterval = setInterval(() => {
        currentProgressStep++;
        
        const progress = 100 * (1 - Math.exp(-5 * currentProgressStep / totalSteps));
        
        setStepProgress(prevProgress => {
          const randomFactor = Math.random() * 0.5 + 0.8; 
          const newProgress = Math.max(prevProgress, progress * randomFactor);
          
          return newProgress > 98 ? 98 : newProgress;
        });
        
        if (currentProgressStep > totalSteps * 0.8) {
          clearInterval(progressInterval);
          progressInterval = setInterval(() => {
            setStepProgress(prevProgress => {
              const increment = Math.random() * 0.3;
              const newProgress = prevProgress + increment;
              return newProgress > 98 ? 98 : newProgress;
            });
          }, 500);
        }
      }, updateFrequency);
    }
    
    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [analysisInProgress, currentStep]);

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
      const result = await performSearch(
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
        updateProgress
      );
      
      if (!result) {
        throw new Error('Research analysis failed');
      }
    } catch (error) {
      setIsSearching(false);
      setAnalysisInProgress(false);
      setIsThinking(false);
      setApiError(`Research analysis failed: ${error.message}`);
    }
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
              className={`search-button ${isSearching || analysisInProgress ? 'disabled' : ''}`}
            onClick={handleSearch}
            disabled={isSearching || analysisInProgress || !searchQuery.trim()}
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
              {/* Thought chain process display */}
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
                      <span className="thinking-indicator">Thinking...</span>
                      {currentThoughtStep}
                    </h4>
                  </div>
                </div>
              )}
              
              {/* Real-time result output */}
              {streamingResult && (
                <div className="history-item result-item">
                  <div className="history-item-header">
                    <div className="step-number-circle">
                      <Zap size={14} />
                    </div>
                    <h4>Analysis Results</h4>
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
                  MINISO Data Integration
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
                  {/* Step progress indicator */}
                  <div className="step-dots">
                    <div className={`step-dot ${currentStep >= 1 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 2 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 3 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 4 ? 'active' : ''}`}></div>
                  </div>
                  
                  {/* Step status indicator */}
                  <div className="step-status-section">
                    <h3>Research Progress</h3>
                    <div className="step-status-list">
                      <div className={`step-status-item ${currentStep > 1 ? 'completed' : currentStep === 1 ? 'in-progress' : ''}`}>
                        <div className="step-status-icon">
                          {currentStep > 1 ? <Check size={16} /> : currentStep === 1 ? <div className="waiting-animation"></div> : ''}
                        </div>
                        <div className="step-status-text">
                          <span className="step-name">Step 1: Thought Chain Generation</span>
                          <span className="step-status">
                            {currentStep > 1 ? 'Completed' : currentStep === 1 ? 'In progress...' : 'Waiting...'}
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
                          <span className="step-name">Step 2: Market Research Analysis</span>
                          <span className="step-status">
                            {currentStep > 2 ? 'Completed' : currentStep === 2 ? 'In progress...' : 'Waiting...'}
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
                          <span className="step-name">Step 3: Competitor Analysis</span>
                          <span className="step-status">
                            {currentStep > 3 ? 'Completed' : currentStep === 3 ? 'In progress...' : 'Waiting...'}
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
                          <span className="step-name">Step 4: Consumer Insights Analysis</span>
                          <span className="step-status">
                            {currentStep > 4 ? 'Completed' : currentStep === 4 ? 'In progress...' : 'Waiting...'}
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
                // Extract step number and content from step text
                return (
                  <div key={index} className={`history-item`}>
                    <div className="history-item-header">
                      <div className="step-number-circle">{index + 1}</div>
                      <h4>{step}</h4>
                    </div>
                  </div>
                );
              })}
              
              {/* Display saved streaming output results */}
              {selectedResearch.streamingResult && (
                <div className="history-item result-item">
                  <div className="history-item-header">
                    <div className="step-number-circle">
                      <Zap size={14} />
                    </div>
                    <h4>Analysis Results</h4>
                  </div>
                  <div className="history-item-content">
                    <div className="streaming-result-content">
                      {selectedResearch.streamingResult}
                    </div>
                  </div>
                </div>
              )}
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
                      MINISO Data Integration
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
                    <div className="markdown-content">
                      <ReactMarkdown>{selectedResearch.summary}</ReactMarkdown>
                    </div>
                    
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
                    
                  {/* Competitor analysis section */}
                  {selectedResearch.competitorAnalysis && (
                    <div className="competitor-analysis-section">
                      <h3>Competitor Analysis</h3>
                      <div className="competitor-content">
                        <p>{selectedResearch.competitorAnalysis}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Consumer insights section */}
                  {selectedResearch.consumerInsights && (
                    <div className="consumer-insights-section">
                      <h3>Consumer Insights</h3>
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
                      <p>This analysis combines external research with internal MINISO data from Insight, KOC&KOL, Content Distribution, and Private Domain modules to provide comprehensive strategic recommendations.</p>
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
