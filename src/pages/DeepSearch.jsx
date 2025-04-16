import React, { useState, useEffect } from 'react';
import { createDeepModel } from './deepresearch/deepmodel.js';
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
import './deepresearch/deepresearchstyles.css';

// Import helper functions
import {
  updateStepProgress as updateProgress,
  handleSearch as performSearch
} from './deepresearch/index.js';

const DeepSearch = () => {
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
  const [currentStep, setCurrentStep] = useState(0); // Current execution step (1-4)
  const [stepProgress, setStepProgress] = useState(0); // Current step progress (0-100)
  
  // Initialize DeepModel instance
  useEffect(() => {
    const apiKey = process.env.REACT_APP_CLAUDE_API_KEY;
    
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
  
  // Simplified step progress update function
  const updateStepProgress = () => {
    // No need to do anything, as the progress bar is now automatically animated
  };

  // Progress bar animation effect
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
                placeholder="Enter detailed market analysis research query..."
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
            <button className="topic-tag" onClick={() => setSearchQuery('Consumer Trends for Smart Home Cleaning Products in the Chinese Market')}>
              Consumer Trends for Smart Home Cleaning Products in the Chinese Market
            </button>
            <button className="topic-tag" onClick={() => setSearchQuery('Gen Z Usage Preferences and Pain Points Analysis for Smart Home Products')}>
              Gen Z Usage Preferences and Pain Points Analysis for Smart Home Products
            </button>
            <button className="topic-tag" onClick={() => setSearchQuery('2025 Smart Cleaning Appliances Market Forecast and Opportunities')}>
              2025 Smart Cleaning Appliances Market Forecast and Opportunities
            </button>
            <button className="topic-tag" onClick={() => setSearchQuery('Market Potential for 3D Printing Integration with Smart Home Products')}>
              Market Potential for 3D Printing Integration with Smart Home Products
            </button>
          </div>
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
                <p>Your research thought chain will be displayed here.</p>
              </div>
            </div>
          </div>
          
          <div className="research-detail">
            <div className="detail-header">
              <div>
                <h2>Deep Research</h2>
                <p>Use the search box above to start a new market research analysis.</p>
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
      
      {analysisInProgress && (
        <div className="research-results">
          <div className="research-history">
            <div className="history-header">
              <h3>Thought Chain</h3>
              <button className="filter-button">
                <Filter size={18} />
              </button>
            </div>
            <div className="history-list">
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
                <p>Analyzing data from multiple sources and integrating insights from Eufy platform modules.</p>
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
                  <div className="step-dots">
                    <div className={`step-dot ${currentStep >= 1 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 2 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 3 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${currentStep >= 4 ? 'active' : ''}`}></div>
                  </div>
                  
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
      )}
      
      {selectedResearch && !analysisInProgress && (
        <div className="research-results">
          <div className="research-history">
            <div className="history-header">
              <h3>Thought Chain</h3>
              <button className="filter-button">
                <Filter size={18} />
              </button>
            </div>
            <div className="history-list">
              {selectedResearch.thoughtChain && selectedResearch.thoughtChain.map((step, index) => (
                <div key={index} className="history-item">
                  <div className="history-item-header">
                    <div className="step-number-circle">{index + 1}</div>
                    <h4>{step}</h4>
                  </div>
                </div>
              ))}
              
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
                  <div className="markdown-content">
                    <ReactMarkdown>{selectedResearch.summary}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'internal' && (
              <div className="tab-content">
                <div className="integration-notice">
                  <Zap size={20} className="notice-icon" />
                  <div>
                    <h3>Integration Analysis</h3>
                    <p>This analysis combines external research with internal Eufy data to provide comprehensive strategic recommendations.</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'recommendations' && (
              <div className="tab-content">
                <div className="recommendations-section">
                  <h3>Strategic Recommendations</h3>
                  <p>Strategic recommendations based on analysis results will be displayed here.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {apiError && (
        <div className="error-message">
          <div className="error-icon">
            <X size={24} color="#c62828" />
          </div>
          <div className="error-content">
              <h3>Error Occurred</h3>
              <p>{apiError}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeepSearch;
