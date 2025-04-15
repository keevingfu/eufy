import React from 'react';
import { Download, Share2 } from 'lucide-react';

const ResearchResult = ({ 
  selectedResearch, 
  activeTab, 
  setActiveTab 
}) => {
  if (!selectedResearch) return null;
  
  return (
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
      
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <h3>研究概述</h3>
            <div className="summary-section">
              <h4>摘要</h4>
              <p>{selectedResearch.summary}</p>
            </div>
            <div className="findings-section">
              <h4>关键发现</h4>
              <ul>
                {selectedResearch.keyFindings.map((finding, index) => (
                  <li key={index}>
                    <strong>{finding.category}:</strong> {finding.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'internal' && (
          <div className="internal-tab">
            <h3>内部数据集成</h3>
            <p>内部数据集成相关内容将显示在这里</p>
          </div>
        )}
        
        {activeTab === 'recommendations' && (
          <div className="recommendations-tab">
            <h3>建议</h3>
            <div className="opportunities-section">
              <h4>市场机会</h4>
              <ul>
                {selectedResearch.marketOpportunities && selectedResearch.marketOpportunities.map((opportunity, index) => (
                  <li key={index}>
                    <strong>{opportunity.opportunity}</strong>
                    <p>市场规模: {opportunity.size} | 竞争程度: {opportunity.competition} | 时间线: {opportunity.timeline}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchResult; 