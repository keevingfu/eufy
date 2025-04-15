import React from 'react';
import { Zap, Check } from 'lucide-react';

const AnalysisProgress = ({ 
  currentStep, 
  stepProgress,
  activeTab,
  setActiveTab
}) => {
  return (
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
                
      {currentStep >= 2 && (
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
            {/* 步骤进度指示器 */}
            <div className="step-dots">
              <div className={`step-dot ${currentStep >= 1 ? 'active' : ''}`}></div>
              <div className={`step-dot ${currentStep >= 2 ? 'active' : ''}`}></div>
              <div className={`step-dot ${currentStep >= 3 ? 'active' : ''}`}></div>
              <div className={`step-dot ${currentStep >= 4 ? 'active' : ''}`}></div>
            </div>
            
            {/* 步骤状态指示器 */}
            <div className="step-status-section">
              <h3>研究进度</h3>
              <div className="step-status-list">
                <div className={`step-status-item ${currentStep > 1 ? 'completed' : currentStep === 1 ? 'in-progress' : ''}`}>
                  <div className="step-status-icon">
                    {currentStep > 1 ? <Check size={16} /> : currentStep === 1 ? <div className="waiting-animation"></div> : ''}
                  </div>
                  <div className="step-status-text">
                    <span className="step-name">第1步：思维链生成</span>
                    <span className="step-status">
                      {currentStep > 1 ? '已完成' : currentStep === 1 ? '进行中...' : '等待中...'}
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
                    <span className="step-name">第2步：市场研究分析</span>
                    <span className="step-status">
                      {currentStep > 2 ? '已完成' : currentStep === 2 ? '进行中...' : '等待中...'}
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
                    <span className="step-name">第3步：竞争对手分析</span>
                    <span className="step-status">
                      {currentStep > 3 ? '已完成' : currentStep === 3 ? '进行中...' : '等待中...'}
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
                    <span className="step-name">第4步：消费者洞察分析</span>
                    <span className="step-status">
                      {currentStep > 4 ? '已完成' : currentStep === 4 ? '进行中...' : '等待中...'}
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
  );
};

export default AnalysisProgress; 