import React from 'react';
import { Filter, Zap } from 'lucide-react';

const ThoughtChain = ({ 
  streamingThoughtChain, 
  streamingResult, 
  isThinking, 
  currentThoughtStep 
}) => {
  return (
    <div className="research-history">
      <div className="history-header">
        <h3>Thought Chain</h3>
        <button className="filter-button">
          <Filter size={18} />
        </button>
      </div>
      <div className="history-list">
        {streamingThoughtChain.length === 0 && !isThinking ? (
          <div className="placeholder-content">
            <p>Your research thought Chain will appear here.</p>
          </div>
        ) : (
          <>
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
                    <span className="thinking-indicator">思考中...</span>
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
                  <h4>分析结果</h4>
                </div>
                <div className="history-item-content">
                  <div className="streaming-result-content">
                    {streamingResult}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ThoughtChain; 