import React, { useState, useRef, useEffect } from 'react';
import { useChart } from '../../hooks/useChart';
import { useSearch } from '../../hooks/useSearch';
import './PrivateDomain.css'; // Import custom CSS for PrivateDomain component

interface PrivateDomainProps {
  // Add props if needed
}

interface ThinkingStep {
  step: number;
  thought: string;
}

const PrivateDomain: React.FC<PrivateDomainProps> = () => {
  const [activeSubModule, setActiveSubModule] = useState('private-landing');
  const [searchInput, setSearchInput] = useState('');
  const { chartRef, renderChart } = useChart();
  const {
    loading,
    showResults,
    searchResults,
    handleSearch,
    handleQuestionClick
  } = useSearch({ module: 'private', subModule: activeSubModule });

  // Thinking process related states
  const [thinkingSteps, setThinkingSteps] = useState<ThinkingStep[]>([]);
  const [currentThinkingStep, setCurrentThinkingStep] = useState(0);
  const [showThinking, setShowThinking] = useState(false);
  const thinkingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle search query and show thinking process
  const handleSearchWithThinking = (query: string) => {
    if (!query.trim()) return;
    
    // Reset thinking state
    setShowThinking(false);
    
    // Clear any existing interval
    if (thinkingIntervalRef.current) {
      clearInterval(thinkingIntervalRef.current);
      thinkingIntervalRef.current = null;
    }
    
    // 直接调用搜索函数，跳过分析过程
    handleSearch(query);
  };

  // Clear timer when component unmounts
  useEffect(() => {
    return () => {
      if (thinkingIntervalRef.current) {
        clearInterval(thinkingIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (searchResults && showResults) {
      renderChart({
        data: searchResults.data,
        chartType: searchResults.chartType,
        chartTitle: searchResults.chartTitle
      });
    }
  }, [searchResults, showResults, renderChart]);

  const subModules = [
    { id: 'private-landing', label: 'Landing Pages' },
    { id: 'private-tags', label: 'Page Tags' },
    { id: 'private-whatsapp', label: 'WhatsApp Groups' },
    { id: 'private-email', label: 'Email Marketing' },
    { id: 'private-dtc', label: 'DTC Website' }
  ];

  // Get recommended questions based on current submodule
  const getRecommendedQuestions = () => {
    switch (activeSubModule) {
      case 'private-tags':
        return [
          "How do content tags affect landing page performance?",
          "Which tags are most effective for conversion?",
          "What is the correlation between tag usage and user engagement?",
          "How should we optimize our tagging strategy?"
        ];
      case 'private-whatsapp':
        return [
          "What content generates the most engagement in our WhatsApp groups?",
          "How effective are our WhatsApp groups for customer retention?",
          "What is the conversion rate from WhatsApp group members?",
          "How can we improve WhatsApp group engagement?"
        ];
      case 'private-email':
        return [
          "How effective is our email marketing campaign?",
          "What is the retention rate of our email subscribers?",
          "Which email content types have the highest open rates?",
          "How does email performance compare to other channels?"
        ];
      case 'private-dtc':
        return [
          "What is the traffic source breakdown for our DTC website?",
          "Which product pages have the highest conversion rates?",
          "How does user behavior differ between traffic sources?",
          "What is the average session duration on our DTC site?"
        ];
      default: // private-landing
        return [
          "How are our landing pages performing?",
          "Which landing pages have the highest conversion rates?",
          "What is the bounce rate for our product landing pages?",
          "How does mobile vs desktop performance compare for landing pages?",
          "Which landing page elements drive the most engagement?",
          "What is the correlation between landing page load time and conversion?",
          "How do different traffic sources perform on our landing pages?",
          "Which call-to-action designs perform best on landing pages?"
        ];
    }
  };

  return (
    <div className="private-domain-container">
      <div className="module-submenu">
        {subModules.map(module => (
          <div
            key={module.id}
            className={`submenu-item ${activeSubModule === module.id ? 'active' : ''}`}
            onClick={() => setActiveSubModule(module.id)}
          >
            {module.label}
          </div>
        ))}
      </div>

      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearchWithThinking(searchInput);
              }
            }}
            placeholder="How are our landing pages performing?"
          />
          <button 
            className="search-button"
            onClick={() => handleSearchWithThinking(searchInput)}
          >
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>

      <div className="suggested-questions">
        <h2>Recommended Questions</h2>
        <div className="question-grid" id="suggested-questions-grid">
          {getRecommendedQuestions().map((question, index) => (
            <div 
              key={index} 
              className="question-card"
              onClick={() => {
                setSearchInput(question);
                handleSearch(question);
              }}
            >
              <div className="question-text">{question}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Thinking process visualization - only shown during thinking, hidden when results appear */}
      {/* 注释掉这部分，让Analysis Process永远不会显示 
      {showThinking && !showResults && (
        <div className="thinking-container">
          <div className="thinking-title">Analysis Process</div>
          <div className="thinking-content">
            {thinkingSteps.map((step, index) => (
              <div 
                key={index} 
                className="thinking-step" 
                style={{ 
                  opacity: index <= currentThinkingStep ? 1 : 0
                }}
              >
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Step {step.step}</div>
                <div>{step.thought}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      */}

      <div className="loading" style={{ display: loading ? 'block' : 'none' }}>
        <div className="spinner"></div>
        <p>Analyzing data, please wait...</p>
      </div>

      <div className="results-container" style={{ display: showResults ? 'block' : 'none' }}>
        <div className="results-header">
          <div className="results-title" id="results-title">
            {searchResults?.chartTitle || 'Query Results'}
          </div>
        </div>

        <div className="visualization-container">
          <div className="chart-container" ref={chartRef} />

          <div className="insights-container">
            <div className="insight-card">
              <div className="insight-title">Key Insights</div>
              <div id="insights-content">
                {searchResults?.insights?.map((insight, index) => (
                  <div key={index} className="insight-item">
                    <h4 style={{ fontWeight: 'bold', marginBottom: '5px' }}>{insight.title}</h4>
                    <p>{insight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-title">Recommended Actions</div>
              <div className="recommendations" id="recommendations-content">
                {searchResults?.recommendations?.map((recommendation, index) => (
                  <div key={index} className="recommendation-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{recommendation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateDomain;
