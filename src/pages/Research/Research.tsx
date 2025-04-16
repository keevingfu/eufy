import React, { useState } from 'react';

interface ResearchProps {
  // Add props if needed
}

const Research: React.FC<ResearchProps> = () => {
  const [activeTab, setActiveTab] = useState('agent-settings');
  const [agentSettings, setAgentSettings] = useState({
    mode: 'default',
    timeout: 300,
    maxSteps: 15
  });
  const [browserSettings, setBrowserSettings] = useState({
    browserType: 'chromium',
    headless: 'false',
    userAgent: '',
    viewportWidth: 1920,
    viewportHeight: 1080
  });

  const tabs = [
    { id: 'agent-settings', label: 'Agent Settings', icon: 'wrench' },
    { id: 'llm-settings', label: 'LLM Settings', icon: 'globe' },
    { id: 'browser-settings', label: 'Browser Settings', icon: 'robot' },
    { id: 'run-agent', label: 'Run Agent', icon: 'search' },
    { id: 'deep-research', label: 'Deep Research', icon: 'microscope' },
    { id: 'recordings', label: 'Recordings', icon: 'video' }
  ];

  const handleSaveAgentSettings = () => {
    alert('Agent settings saved successfully!');
  };

  const handleSaveBrowserSettings = () => {
    alert('Browser settings saved successfully!');
  };

  const handleRunAgent = () => {
    // Implement agent execution logic
  };

  return (
    <div className="research-container">
      <h2 className="section-title">AI-Powered Research</h2>
      <p className="section-description">Use AI to control your browser and perform complex research tasks.</p>
      
      <div className="research-tabs">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <i className={`fas fa-${tab.icon}`}></i> {tab.label}
          </div>
        ))}
      </div>
      
      {/* Agent Settings Tab Content */}
      <div className="tab-content" style={{ display: activeTab === 'agent-settings' ? 'block' : 'none' }}>
        <div className="card">
          <h3 className="card-title">Agent Configuration</h3>
          <div className="form-group">
            <label htmlFor="agentMode">Agent Mode:</label>
            <select
              id="agentMode"
              className="form-control"
              value={agentSettings.mode}
              onChange={(e) => setAgentSettings({ ...agentSettings, mode: e.target.value })}
            >
              <option value="default">Default Mode (Browser closes after task)</option>
              <option value="persistent">Persistent Mode (Browser stays open)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="agentTimeout">Task Timeout (seconds):</label>
            <input
              type="number"
              id="agentTimeout"
              className="form-control"
              value={agentSettings.timeout}
              onChange={(e) => setAgentSettings({ ...agentSettings, timeout: parseInt(e.target.value) })}
              min={60}
              max={1800}
            />
          </div>
          <div className="form-group">
            <label htmlFor="agentMaxSteps">Maximum Steps:</label>
            <input
              type="number"
              id="agentMaxSteps"
              className="form-control"
              value={agentSettings.maxSteps}
              onChange={(e) => setAgentSettings({ ...agentSettings, maxSteps: parseInt(e.target.value) })}
              min={5}
              max={50}
            />
          </div>
          <button className="primary-button" onClick={handleSaveAgentSettings}>
            <i className="fas fa-save"></i> Save Settings
          </button>
        </div>
      </div>
      
      {/* Browser Settings Tab Content */}
      <div className="tab-content" style={{ display: activeTab === 'browser-settings' ? 'block' : 'none' }}>
        <div className="card">
          <h3 className="card-title">Browser Configuration</h3>
          <div className="form-group">
            <label htmlFor="browserType">Browser Type:</label>
            <select
              id="browserType"
              className="form-control"
              value={browserSettings.browserType}
              onChange={(e) => setBrowserSettings({ ...browserSettings, browserType: e.target.value })}
            >
              <option value="chromium">Chromium</option>
              <option value="firefox">Firefox</option>
              <option value="webkit">WebKit</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="headless">Headless Mode:</label>
            <select
              id="headless"
              className="form-control"
              value={browserSettings.headless}
              onChange={(e) => setBrowserSettings({ ...browserSettings, headless: e.target.value })}
            >
              <option value="false">Disabled (Show browser window)</option>
              <option value="true">Enabled (Hide browser window)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="userAgent">User Agent:</label>
            <input
              type="text"
              id="userAgent"
              className="form-control"
              value={browserSettings.userAgent}
              onChange={(e) => setBrowserSettings({ ...browserSettings, userAgent: e.target.value })}
              placeholder="Default"
            />
          </div>
          <div className="form-group">
            <label htmlFor="viewportSize">Viewport Size:</label>
            <div className="form-row">
              <input
                type="number"
                id="viewportWidth"
                className="form-control"
                value={browserSettings.viewportWidth}
                onChange={(e) => setBrowserSettings({ ...browserSettings, viewportWidth: parseInt(e.target.value) })}
                min={800}
                max={3840}
                placeholder="Width"
              />
              <span className="form-separator">×</span>
              <input
                type="number"
                id="viewportHeight"
                className="form-control"
                value={browserSettings.viewportHeight}
                onChange={(e) => setBrowserSettings({ ...browserSettings, viewportHeight: parseInt(e.target.value) })}
                min={600}
                max={2160}
                placeholder="Height"
              />
            </div>
          </div>
          <button className="primary-button" onClick={handleSaveBrowserSettings}>
            <i className="fas fa-save"></i> Save Settings
          </button>
        </div>
      </div>
      
      {/* Run Agent Tab Content */}
      <div className="tab-content" style={{ display: activeTab === 'run-agent' ? 'block' : 'none' }}>
        <div className="card">
          <h3 className="card-title">Run Browser Agent</h3>
          <div className="form-group">
            <label htmlFor="agentTask">Task Description:</label>
            <textarea
              id="agentTask"
              className="form-control"
              rows={4}
              placeholder="Describe what you want the agent to do. For example: 'Search for the latest robot vacuum reviews and summarize the top 3 models'"
            />
          </div>
          <div className="form-group">
            <label htmlFor="agentModel">AI Model:</label>
            <select id="agentModel" className="form-control">
              <option value="gpt-4o">OpenAI - GPT-4o</option>
              <option value="gemini-pro">Google - Gemini Pro</option>
              <option value="deepseek-v3">DeepSeek - V3</option>
              <option value="claude-3-opus">Anthropic - Claude 3 Opus</option>
              <option value="mistral-large">Mistral - Large</option>
            </select>
          </div>
          <button className="primary-button" onClick={handleRunAgent}>
            <i className="fas fa-play"></i> Run Agent
          </button>
        </div>
      </div>
      
      {/* Recordings Tab Content */}
      <div className="tab-content" style={{ display: activeTab === 'recordings' ? 'block' : 'none' }}>
        <div className="card">
          <h3 className="card-title">Browser Session Recordings</h3>
          <div className="recordings-list">
            <div className="recording-item">
              <div className="recording-info">
                <div className="recording-title">Robot Vacuum Market Research</div>
                <div className="recording-meta">Duration: 15:32 • Date: 2025-04-16</div>
              </div>
              <div className="recording-actions">
                <button className="secondary-button">
                  <i className="fas fa-play"></i>
                </button>
                <button className="secondary-button">
                  <i className="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
