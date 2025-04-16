import React, { useState, useRef, useEffect } from 'react';
import { useChart } from '../../hooks/useChart';
import { useSearch } from '../../hooks/useSearch';
import './ContentDistribution.css'; // Import custom CSS for ContentDistribution component

interface ContentDistributionProps {
  // Add props if needed
}

interface ThinkingStep {
  step: number;
  thought: string;
}

const ContentDistribution: React.FC<ContentDistributionProps> = () => {
  const [activeSubModule, setActiveSubModule] = useState('feeds-effectiveness');
  const [searchInput, setSearchInput] = useState('');
  const { chartRef, renderChart } = useChart();
  const {
    loading,
    showResults,
    searchResults,
    handleSearch,
    handleQuestionClick
  } = useSearch({ module: 'feeds', subModule: activeSubModule });

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
    
    // Mock thinking steps - in actual application, these could come from API
    const mockThinkingSteps: ThinkingStep[] = [
      { step: 1, thought: "Analyzing query content, determining relevant ad platforms and metrics" },
      { step: 2, thought: "Retrieving campaign performance data across channels" },
      { step: 3, thought: "Processing conversion metrics and identifying key performance indicators" },
      { step: 4, thought: "Generating visualization charts and extracting key insights" },
      { step: 5, thought: "Formulating action recommendations based on campaign analysis" }
    ];
    
    setThinkingSteps(mockThinkingSteps);
    setCurrentThinkingStep(0);
    setShowThinking(true);
    
    // Animate thinking steps display
    thinkingIntervalRef.current = setInterval(() => {
      setCurrentThinkingStep(prev => {
        if (prev < mockThinkingSteps.length - 1) {
          return prev + 1;
        } else {
          // After thinking process is complete, clear the timer and show results
          if (thinkingIntervalRef.current) {
            clearInterval(thinkingIntervalRef.current);
            thinkingIntervalRef.current = null;
          }
          
          // Call the actual search function to get results
          handleSearch(query);
          
          // Hide thinking component in the next render cycle after thinking is complete
          setTimeout(() => {
            setShowThinking(false);
          }, 1000);
          
          return prev;
        }
      });
    }, 1500);
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
    { id: 'feeds-effectiveness', label: 'Ad Effectiveness' },
    { id: 'feeds-campaigns', label: 'Campaign Performance' },
    { id: 'feeds-channel', label: 'Channel Analysis' },
    { id: 'feeds-google', label: 'Google Ads' },
    { id: 'feeds-facebook', label: 'Facebook Ads' },
    { id: 'feeds-amazon', label: 'Amazon Ads' },
    { id: 'feeds-product', label: 'Product Performance' }
  ];

  // Get recommended questions based on current submodule
  const getRecommendedQuestions = () => {
    switch (activeSubModule) {
      case 'feeds-campaigns':
        return [
          "What is the performance of our recent marketing campaigns?",
          "Which campaign had the highest ROI in the last quarter?",
          "How do our Q1 2025 campaigns compare to Q4 2024?",
          "What is the trend in campaign performance over time?"
        ];
      case 'feeds-channel':
        return [
          "Which sales channels are driving the most conversions?",
          "How do conversion rates vary between channels?",
          "What is the customer acquisition cost for each channel?",
          "Which channel has shown the most growth in the past year?"
        ];
      case 'feeds-google':
        return [
          "What is the performance of our Google Ad campaigns?",
          "Which Google Ad keywords have the highest conversion rate?",
          "How has our Google Ads CTR changed over time?",
          "What is our cost per acquisition on Google Ads?"
        ];
      case 'feeds-facebook':
        return [
          "What is our ROI on Facebook advertising?",
          "Which Facebook ad formats perform best for our products?",
          "How does our Facebook audience engagement compare to industry benchmarks?",
          "What is the demographic breakdown of our Facebook ad conversions?"
        ];
      case 'feeds-amazon':
        return [
          "How is our product performance on Amazon?",
          "What is our Amazon Advertising ACOS (Advertising Cost of Sale)?",
          "Which product categories perform best on Amazon?",
          "How do our Amazon conversion rates compare to our DTC website?"
        ];
      case 'feeds-product':
        return [
          "Which products have the highest conversion rates?",
          "How does product performance vary by region?",
          "What is the correlation between product price and conversion rate?",
          "Which product features are most highlighted in our best-performing ads?"
        ];
      default: // feeds-effectiveness
        return [
          "How effective are our ad campaigns across all platforms?",
          "What is the performance of our Google Ad campaigns?",
          "Which sales channels are driving the most conversions?",
          "How is our product performance on Amazon?",
          "What is our ROI on Facebook advertising?",
          "How do our conversion rates vary between platforms?",
          "Which ad creative formats have the highest CTR?",
          "What is the customer acquisition cost for each channel?"
        ];
    }
  };

  return (
    <div className="content-distribution-container">
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
            placeholder="How effective are our ad campaigns across all platforms?"
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
                handleSearchWithThinking(question);
              }}
            >
              <div className="question-text">{question}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Thinking process visualization - only shown during thinking, hidden when results appear */}
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

export default ContentDistribution;
