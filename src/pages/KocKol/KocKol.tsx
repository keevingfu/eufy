import React, { useState, useRef, useEffect } from 'react';
import { useChart } from '../../hooks/useChart';
import { useSearch } from '../../hooks/useSearch';
import './KocKol.css'; // Import custom CSS for KocKol component

interface KocKolProps {
  // Add props if needed
}

interface ThinkingStep {
  step: number;
  thought: string;
}

const KocKol: React.FC<KocKolProps> = () => {
  const [activeSubModule, setActiveSubModule] = useState('koc-trends');
  const [searchInput, setSearchInput] = useState('');
  const { chartRef, renderChart } = useChart();
  const {
    loading,
    showResults,
    searchResults,
    handleSearch,
    handleQuestionClick
  } = useSearch({ module: 'koc', subModule: activeSubModule });

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
    { id: 'koc-trends', label: 'Content Trends' },
    { id: 'koc-youtube', label: 'YouTube Trends' },
    { id: 'koc-instagram', label: 'Instagram Trends' },
    { id: 'koc-tiktok', label: 'TikTok Trends' },
    { id: 'koc-paid', label: 'Paid KOL' },
    { id: 'koc-self', label: 'Self-Operated KOC' },
    { id: 'koc-user', label: 'User Journey' },
    { id: 'koc-search', label: 'Search Performance' }
  ];

  // Get recommended questions based on current submodule
  const getRecommendedQuestions = () => {
    switch (activeSubModule) {
      case 'koc-youtube':
        return [
          "Show me content trends on YouTube for robot vacuums",
          "Which YouTube channels have the highest engagement for robot vacuum content?",
          "What is the average view count for our YouTube videos?",
          "How do our YouTube videos compare to competitors?"
        ];
      case 'koc-instagram':
        return [
          "Which Instagram influencers have the highest engagement rate?",
          "What type of Instagram content performs best for robot vacuums?",
          "How has our Instagram engagement changed over time?",
          "Which hashtags drive the most engagement on Instagram?"
        ];
      case 'koc-tiktok':
        return [
          "Which content formats drive the most engagement on TikTok?",
          "Who are the top TikTok creators in the robot vacuum space?",
          "What TikTok trends should we leverage for our products?",
          "How does our TikTok performance compare to competitors?"
        ];
      case 'koc-paid':
        return [
          "What is the ROI comparison between micro and macro influencers?",
          "Which paid KOL campaigns had the highest conversion rate?",
          "How does paid KOL content performance vary by platform?",
          "What is the optimal budget allocation for KOL marketing?"
        ];
      case 'koc-self':
        return [
          "How is our self-operated KOC content performing?",
          "Which content themes perform best on our own channels?",
          "What is the engagement rate trend for our self-operated accounts?",
          "How can we improve our self-operated KOC strategy?"
        ];
      case 'koc-user':
        return [
          "What is the typical user journey for our products?",
          "At which touchpoints do users engage most with our content?",
          "How does content consumption correlate with purchase intent?",
          "What content types drive the highest conversion rates?"
        ];
      case 'koc-search':
        return [
          "How do our products rank in search results compared to competitors?",
          "Which keywords drive the most traffic to our content?",
          "How has our search visibility changed over time?",
          "What content optimizations would improve our search performance?"
        ];
      default: // koc-trends
        return [
          "Show me content trends on YouTube for robot vacuums",
          "Which Instagram influencers have the highest engagement rate?",
          "How is our self-operated KOC content performing?",
          "What is the typical user journey for our products?",
          "How do our products rank in search results compared to competitors?",
          "Which content formats drive the most engagement on TikTok?",
          "What is the ROI comparison between micro and macro influencers?",
          "How has the content landscape evolved over the past year?"
        ];
    }
  };

  return (
    <div className="koc-kol-container">
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
            placeholder="Show me content trends on YouTube for robot vacuums"
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

export default KocKol;
