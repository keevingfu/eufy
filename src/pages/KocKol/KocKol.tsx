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
  
  // 添加状态来控制是否显示各平台性能内容
  const [showYouTubePerformance, setShowYouTubePerformance] = useState(false);
  const [showInstagramPerformance, setShowInstagramPerformance] = useState(false);
  const [showTikTokPerformance, setShowTikTokPerformance] = useState(false);
  
  // 添加状态来控制性能内容的加载状态
  const [performanceLoading, setPerformanceLoading] = useState(false);

  // 重置所有性能显示状态
  const resetPerformanceStates = () => {
    setShowYouTubePerformance(false);
    setShowInstagramPerformance(false);
    setShowTikTokPerformance(false);
  };
  
  // 显示性能内容的函数，带有加载动画
  const showPerformanceWithLoading = (performanceType: 'youtube' | 'instagram' | 'tiktok') => {
    // 先显示加载动画
    setPerformanceLoading(true);
    
    // 重置所有性能显示状态
    resetPerformanceStates();
    
    // 延迟1.5秒后显示性能内容
    setTimeout(() => {
      setPerformanceLoading(false);
      
      // 根据类型显示对应的性能内容
      if (performanceType === 'youtube') {
        setShowYouTubePerformance(true);
      } else if (performanceType === 'instagram') {
        setShowInstagramPerformance(true);
      } else if (performanceType === 'tiktok') {
        setShowTikTokPerformance(true);
      }
    }, 1500);
  };

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
    
    // 根据查询内容显示对应的性能内容
    if (query === "What is the performance of our self-operated YouTube channel?") {
      showPerformanceWithLoading('youtube');
    } else if (query === "How is our Instagram social media performance trending?") {
      showPerformanceWithLoading('instagram');
    } else if (query === "Analyze our TikTok social performance metrics over time") {
      showPerformanceWithLoading('tiktok');
    } else {
      // 重置所有性能显示状态
      resetPerformanceStates();
      // 直接调用搜索函数，跳过分析过程
      handleSearch(query);
    }
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

  // 当切换子模块时，重置状态
  const handleSubModuleChange = (subModuleId: string) => {
    setActiveSubModule(subModuleId);
    resetPerformanceStates();
  };

  const subModules = [
    { id: 'koc-self', label: 'Self-Operated KOC' },
  ];

  // Get recommended questions based on current submodule
  const getRecommendedQuestions = () => {
    switch (activeSubModule) {
      case 'koc-self':
        return [
          "What is the performance of our self-operated YouTube channel?",
          "How is our Instagram social media performance trending?",
          "Analyze our TikTok social performance metrics over time",
        ];
      default:
        return [
          "What is the performance of our self-operated YouTube channel?",
          "How is our Instagram social media performance trending?",
          "Analyze our TikTok social performance metrics over time",
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
            onClick={() => handleSubModuleChange(module.id)}
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
                // 根据问题显示对应的性能内容
                if (question === "What is the performance of our self-operated YouTube channel?") {
                  showPerformanceWithLoading('youtube');
                } else if (question === "How is our Instagram social media performance trending?") {
                  showPerformanceWithLoading('instagram');
                } else if (question === "Analyze our TikTok social performance metrics over time") {
                  showPerformanceWithLoading('tiktok');
                } else {
                  // 重置所有性能显示状态
                  resetPerformanceStates();
                  handleSearch(question);
                }
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

      <div className="loading" style={{ display: (loading || performanceLoading) ? 'block' : 'none' }}>
        <div className="spinner"></div>
        <p>Analyzing data, please wait...</p>
      </div>

      {/* 普通搜索结果 */}
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

      {/* YouTube性能内容 */}
      <div className="youtube-performance-container" style={{ display: showYouTubePerformance ? 'block' : 'none' }}>
        <iframe 
          src={`${process.env.PUBLIC_URL}/pages/add/selfkoc_youtube_social_performance.html`}
          style={{ width: '100%', height: '800px', border: 'none', borderRadius: '10px' }}
          title="YouTube Performance Dashboard"
        />
      </div>

      {/* Instagram性能内容 */}
      <div className="instagram-performance-container" style={{ display: showInstagramPerformance ? 'block' : 'none' }}>
        <iframe 
          src={`${process.env.PUBLIC_URL}/pages/add/selfkoc_instagram_social_performance.html`}
          style={{ width: '100%', height: '800px', border: 'none', borderRadius: '10px' }}
          title="Instagram Performance Dashboard"
        />
      </div>

      {/* TikTok性能内容 */}
      <div className="tiktok-performance-container" style={{ display: showTikTokPerformance ? 'block' : 'none' }}>
        <iframe 
          src={`${process.env.PUBLIC_URL}/pages/add/selfkoc_tiktok_social_performance.html`}
          style={{ width: '100%', height: '800px', border: 'none', borderRadius: '10px' }}
          title="TikTok Performance Dashboard"
        />
      </div>
    </div>
  );
};

export default KocKol;
