import React from 'react';
import { Zap, Clipboard, Tag } from 'lucide-react';

const EufyDataIntegrationTab = ({ selectedResearch }) => {
  // 确保selectedResearch和internalDataInsights存在，如果不存在则提供默认值
  const internalData = selectedResearch?.internalDataInsights || {
    topPerformingProducts: [],
    channelPerformance: [],
    marketingStrategy: []
  };
  
  // 如果数组为空，提供默认数据
  const products = internalData.topPerformingProducts?.length > 0 ? 
    internalData.topPerformingProducts : 
    [
      { name: "Indoor Cam 2K", performance: 94 },
      { name: "Video Doorbell", performance: 89 },
      { name: "Smart Lock", performance: 85 },
      { name: "Floodlight Cam", performance: 82 }
    ];
    
  const channels = internalData.channelPerformance?.length > 0 ?
    internalData.channelPerformance :
    [
      { channel: "Amazon", engagement: 82, conversion: 7.5 },
      { channel: "Direct Website", engagement: 75, conversion: 8.6 },
      { channel: "Social Media", engagement: 68, conversion: 5.2 }
    ];
    
  const strategies = internalData.marketingStrategy?.length > 0 ?
    internalData.marketingStrategy :
    [
      { strategy: "Bundle discounts", effectiveness: 88, implementation: 65 },
      { strategy: "Free installation guides", effectiveness: 92, implementation: 78 },
      { strategy: "Security expert reviews", effectiveness: 85, implementation: 50 }
    ];
  return (
    <div className="tab-content">
      <div className="integration-notice">
        <Zap size={20} className="notice-icon" />
        <div>
          <h3>Integrated Analysis</h3>
          <p>This analysis combines external research with Eufy internal data, including market insights, user reviews, content distribution, and private domain operations modules to provide comprehensive strategic recommendations.</p>
        </div>
      </div>
      
      <div className="data-insights-grid">
        <div className="data-card">
          <h3>Top Performing Eufy Products</h3>
          <div className="performance-chart">
            {products.map((product, index) => (
              <div key={index} className="performance-item">
                <div className="performance-header">
                  <span>{product.name}</span>
                  <span>{product.performance}%</span>
                </div>
                <div className="performance-bar-bg">
                  <div className="performance-bar" style={{ width: `${product.performance}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="data-card">
          <h3>Channel Performance</h3>
          <div className="channel-list">
            {channels.map((channel, index) => (
              <div key={index} className="channel-item">
                <div className="channel-header">
                  <span>{channel.channel}</span>
                </div>
                <div className="channel-metrics">
                  <div className="metric">
                    <div className="metric-header">
                      <span>Engagement Rate</span>
                      <span>{channel.engagement}%</span>
                    </div>
                    <div className="metric-bar-bg">
                      <div className="engagement-bar" style={{ width: `${channel.engagement}%` }}></div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="metric-header">
                      <span>Conversion Rate</span>
                      <span>{channel.conversion}%</span>
                    </div>
                    <div className="metric-bar-bg">
                      <div className="conversion-bar" style={{ width: `${channel.conversion * 10}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        
      <div className="strategy-section">
        <h3>Marketing Strategy Effectiveness</h3>
        <div className="strategy-table">
          <table>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Effectiveness</th>
                <th>Implementation Level</th>
                <th>Gap</th>
              </tr>
            </thead>
            <tbody>
              {strategies.map((strategy, index) => {
                const gap = strategy.effectiveness - strategy.implementation;
                return (
                  <tr key={index}>
                    <td>
                      <div className="strategy-name">{strategy.strategy}</div>
                    </td>
                    <td>
                      <div className="metric-display">
                        <div className="metric-bar-bg small">
                          <div className="effectiveness-bar" style={{ width: `${strategy.effectiveness}%` }}></div>
                        </div>
                        <span>{strategy.effectiveness}%</span>
                      </div>
                    </td>
                    <td>
                      <div className="metric-display">
                        <div className="metric-bar-bg small">
                          <div className="implementation-bar" style={{ width: `${strategy.implementation}%` }}></div>
                        </div>
                        <span>{strategy.implementation}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`gap-badge ${
                        gap > 20 ? 'high' :
                        gap > 10 ? 'medium' :
                        'low'
                      }`}>
                        {gap}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
        
      <div className="cross-module-insights">
        <h4>
          <Clipboard size={18} className="insights-icon" /> 
          Cross-Module Insights
        </h4>
        <div className="insights-list">
          <div className="insight-item">
            <Tag size={14} className="tag-icon" />
            <p>
              <span className="module-name">Insights + User Reviews:</span> User voice analysis regarding security needs preferences strongly aligns with product performance data, showing natural synergy.
            </p>
          </div>
          <div className="insight-item">
            <Tag size={14} className="tag-icon" />
            <p>
              <span className="module-name">Content Distribution + Private Domain:</span> Smart home security product ads show higher conversion rates on landing pages optimized for specific security scenarios.
            </p>
          </div>
          <div className="insight-item">
            <Tag size={14} className="tag-icon" />
            <p>
              <span className="module-name">User Reviews + Content Distribution:</span> Installation demonstration videos on social media generated 32% higher ad recall than standard product displays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EufyDataIntegrationTab; 