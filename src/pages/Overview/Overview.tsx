import React, { useState, useRef, useEffect } from 'react';
import { useChart } from '../../hooks/useChart';
import { useSearch } from '../../hooks/useSearch';
import './Overview.css'; // Import custom CSS for Overview component

interface OverviewProps {
  // Add props if needed
}

interface ThinkingStep {
  step: number;
  thought: string;
}

const Overview: React.FC<OverviewProps> = () => {
  const [activeSubModule, setActiveSubModule] = useState('overview-dashboard');
  const [searchInput, setSearchInput] = useState('');
  const { chartRef, renderChart } = useChart();
  const {
    loading,
    showResults,
    searchResults,
    handleSearch,
    handleQuestionClick
  } = useSearch({ module: 'overview', subModule: activeSubModule });

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
      { step: 1, thought: "Analyzing query content, determining key metrics and time range" },
      { step: 2, thought: "Retrieving relevant data sources and historical data" },
      { step: 3, thought: "Processing and aggregating data, identifying key trends" },
      { step: 4, thought: "Generating visualization charts and extracting key insights" },
      { step: 5, thought: "Formulating action recommendations based on data analysis" }
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
    { id: 'overview-dashboard', label: 'Dashboard' },
    { id: 'overview-kpi', label: 'Key Metrics' },
    { id: 'overview-roi', label: 'ROI Analysis' },
    { id: 'overview-trends', label: 'Trends' }
  ];

  // Get recommended questions based on current submodule
  const getRecommendedQuestions = () => {
    switch (activeSubModule) {
      case 'overview-roi':
        return [
          "What is the ROI of content across different platforms?",
          "Which social media platform has the highest ROI?",
          "How has our content return on investment grown year-over-year?",
          "Which content type has the highest ROI?"
        ];
      case 'overview-kpi':
        return [
          "How have our main KPI metrics changed year-over-year?",
          "How do our key performance indicators compare to industry benchmarks?",
          "Which KPI metrics need optimization?",
          "What's the relationship trend between conversion rates and traffic?"
        ];
      case 'overview-trends':
        return [
          "What are the seasonal variations in content consumption trends?",
          "How has user engagement rate changed over time?",
          "What are the content performance trends over the last three months?",
          "Which content types are showing an upward trend?"
        ];
      default: // dashboard
        return [
          "How are our social media marketing campaigns performing overall?",
          "What are the key metrics across all marketing channels?",
          "What is the ROI of content across different platforms?",
          "How have our key performance indicators changed over the last quarter?",
          "Which content types perform best across all channels?",
          "What is our overall conversion rate trend for the past year?",
          "How does our content performance compare to industry benchmarks?",
          "What is the cost-effectiveness of our various marketing efforts?"
        ];
    }
  };

  return (
    <div className="overview-container">
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
            placeholder="Enter your question, e.g.: Which content performs best on YouTube?"
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

export default Overview;
