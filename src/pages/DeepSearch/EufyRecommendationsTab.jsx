import React from 'react';
import { TrendingUp, MessageCircle, Check, X } from 'lucide-react';

const EufyRecommendationsTab = ({ selectedResearch }) => {
  // 如果recommendations数组为空，提供默认数据
  const recommendations = selectedResearch?.recommendations && selectedResearch.recommendations.length > 0 ? 
    selectedResearch.recommendations : 
    [
      { 
        text: "Launch comprehensive smart home security solutions for the home security market", 
        priority: "High", 
        impact: "High", 
        effort: "Medium" 
      },
      { 
        text: "Develop eco-friendly packaging and sustainable battery solutions", 
        priority: "Medium", 
        impact: "Medium", 
        effort: "Low" 
      },
      { 
        text: "Create integrated mobile app solution for seamless integration of all security products", 
        priority: "High", 
        impact: "High", 
        effort: "High" 
      },
      { 
        text: "Implement localized security solutions for different regional markets", 
        priority: "Low", 
        impact: "Medium", 
        effort: "Medium" 
      }
    ];
  return (
    <div className="tab-content">
      <div className="recommendations-section">
        <h3>Strategic Recommendations</h3>
        <div className="recommendations-list">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="recommendation-card">
              <div className="recommendation-icon">
                <TrendingUp size={16} className={`icon-${recommendation.priority.toLowerCase()}`} />
              </div>
              <div className="recommendation-content">
                <p className="recommendation-text">{recommendation.text}</p>
                <div className="recommendation-tags">
                  <span className={`tag priority-${recommendation.priority.toLowerCase()}`}>
                    Priority: {recommendation.priority === 'High' ? 'High' : recommendation.priority === 'Medium' ? 'Medium' : 'Low'}
                  </span>
                  <span className={`tag impact-${recommendation.impact.toLowerCase()}`}>
                    Impact: {recommendation.impact === 'High' ? 'High' : recommendation.impact === 'Medium' ? 'Medium' : 'Low'}
                  </span>
                  <span className={`tag effort-${recommendation.effort.toLowerCase()}`}>
                    Effort: {recommendation.effort === 'High' ? 'High' : recommendation.effort === 'Medium' ? 'Medium' : 'Low'}
                  </span>
                </div>
              </div>
              <div className="recommendation-actions">
                <button className="action-icon comment">
                  <MessageCircle size={16} />
                </button>
                <button className="action-icon approve">
                  <Check size={16} />
                </button>
                <button className="action-icon reject">
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="roadmap-section">
        <h3>Implementation Roadmap</h3>
        <div className="roadmap-timeline">
          <div className="timeline-item current">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Q2 2025: Initial Implementation</h4>
              <p>
                Launch marketing campaign for home security product line and optimize product pages to highlight security scenario content.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Q3 2025: Expansion</h4>
              <p>
                Develop eco-friendly packaging product line and begin development of integrated APP solution.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Q4 2025: Regional Customization</h4>
              <p>
                Launch localized security solutions based on different regional security needs and user feedback.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Q1 2026: Innovation Phase</h4>
              <p>
                Test security subscription services bundled with hardware products and evaluate performance-based service models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EufyRecommendationsTab; 