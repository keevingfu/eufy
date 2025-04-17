import React, { useState, useRef, useEffect } from 'react';
import { useChart } from '../../hooks/useChart';
import { useSearch } from '../../hooks/useSearch';
import './Insight.css'; // Import custom CSS for Insight component

interface InsightProps {
  // Add props if needed
}

interface ThinkingStep {
  step: number;
  thought: string;
}

const Insight: React.FC<InsightProps> = () => {
  const [activeSubModule, setActiveSubModule] = useState('insight-search');
  const [searchInput, setSearchInput] = useState('');
  const { chartRef, renderChart } = useChart();
  const {
    loading,
    showResults,
    searchResults,
    handleSearch,
    handleQuestionClick
  } = useSearch({ module: 'insight', subModule: activeSubModule });

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
    { id: 'insight-search', label: 'Search Insights' },
    { id: 'insight-voc', label: 'VOC Analysis' },
    { id: 'insight-viral', label: 'Viral Videos' },
    { id: 'insight-factors', label: 'Viral Factors' }
  ];

  // Get recommended questions based on current submodule
  const getRecommendedQuestions = () => {
    switch (activeSubModule) {
      case 'insight-voc':
        return [
          "Show me the sentiment analysis of customer reviews",
          "What are the most common user complaints about our products?",
          "What product features are most frequently mentioned in positive reviews?",
          "How has customer sentiment changed over the past quarter?"
        ];
      case 'insight-viral':
        return [
          "Which video content has gone viral in our industry recently?",
          "What are the top performing videos for robot vacuums?",
          "Which of our videos had the highest engagement rate?",
          "Show me viral content trends by platform"
        ];
      case 'insight-factors':
        return [
          "What factors contribute to viral content in the robot vacuum space?",
          "Which content elements drive the most engagement?",
          "What is the correlation between video length and virality?",
          "How does production quality affect content performance?"
        ];
      default: // insight-search
        return [
          "What are the current trending search terms for robot vacuums?",
          "What search terms have shown the biggest growth in the last quarter?",
          "How do seasonal trends affect search behavior for our products?",
          "Which product features are most searched for?",
          "What are the most common questions users ask about robot vacuums?",
          "How do our search rankings compare to competitors?",
          "What is the correlation between search volume and sales?",
          "Which regions show the highest search interest in our products?"
        ];
    }
  };

  return (
    <div className="insight-container">
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
            placeholder="What are the current trending search terms for robot vacuums?"
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

export default Insight;
