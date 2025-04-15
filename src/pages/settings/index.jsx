import React, { useState } from 'react';
import './settingsstyles.css';

/**
 * Settings page
 * User configuration, system preferences
 */
const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>System Settings</h1>
        <p className="settings-description">Manage your account and system preferences</p>
      </header>
      
      <div className="settings-content">
        <div className="settings-sidebar">
          <ul className="settings-nav">
            <li>
              <button 
                className={activeTab === 'account' ? 'active' : ''}
                onClick={() => setActiveTab('account')}
              >
                Account Information
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'notifications' ? 'active' : ''}
                onClick={() => setActiveTab('notifications')}
              >
                Notification Settings
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'appearance' ? 'active' : ''}
                onClick={() => setActiveTab('appearance')}
              >
                Appearance Settings
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'security' ? 'active' : ''}
                onClick={() => setActiveTab('security')}
              >
                Security & Privacy
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'advanced' ? 'active' : ''}
                onClick={() => setActiveTab('advanced')}
              >
                Advanced Settings
              </button>
            </li>
          </ul>
        </div>
        
        <div className="settings-panel">
          {activeTab === 'account' && (
            <div className="settings-section">
              <h2>Account Information</h2>
              <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="admin" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="admin@example.com" />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input type="text" placeholder="Administrator" disabled />
              </div>
              <button className="save-button">Save Changes</button>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2>Notification Settings</h2>
              <div className="settings-option">
                <label className="toggle-label">
                  <span>Email Notifications</span>
                  <input type="checkbox" />
                  <span className="toggle-switch"></span>
                </label>
                <p className="option-description">Receive emails for system updates, report generation, and data alerts</p>
              </div>
              
              <div className="settings-option">
                <label className="toggle-label">
                  <span>SMS Notifications</span>
                  <input type="checkbox" />
                  <span className="toggle-switch"></span>
                </label>
                <p className="option-description">Receive SMS notifications for important events and alerts</p>
              </div>
              
              <div className="settings-option">
                <label className="toggle-label">
                  <span>Browser Push Notifications</span>
                  <input type="checkbox" checked />
                  <span className="toggle-switch"></span>
                </label>
                <p className="option-description">Receive real-time notifications and updates in your browser</p>
              </div>
              
              <button className="save-button">Save Settings</button>
            </div>
          )}
          
          {activeTab === 'appearance' && (
            <div className="settings-section">
              <h2>Appearance Settings</h2>
              <div className="theme-options">
                <div className="theme-option selected">
                  <div className="theme-preview light-theme"></div>
                  <span>Light Theme</span>
                </div>
                <div className="theme-option">
                  <div className="theme-preview dark-theme"></div>
                  <span>Dark Theme</span>
                </div>
                <div className="theme-option">
                  <div className="theme-preview system-theme"></div>
                  <span>Follow System</span>
                </div>
              </div>
              
              <div className="form-group">
                <label>Font Size</label>
                <select>
                  <option>Small</option>
                  <option selected>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Data Display Density</label>
                <select>
                  <option>Compact</option>
                  <option selected>Standard</option>
                  <option>Comfortable</option>
                </select>
              </div>
              
              <button className="save-button">Apply Changes</button>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="settings-section">
              <h2>Security & Privacy</h2>
              <div className="form-group">
                <label>Change Password</label>
                <input type="password" placeholder="Current Password" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="New Password" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm New Password" />
              </div>
              
              <div className="settings-option">
                <label className="toggle-label">
                  <span>Enable Two-Factor Authentication</span>
                  <input type="checkbox" />
                  <span className="toggle-switch"></span>
                </label>
                <p className="option-description">Enhance account security with authenticator app or SMS verification codes</p>
              </div>
              
              <div className="settings-option">
                <label className="toggle-label">
                  <span>Remember Login</span>
                  <input type="checkbox" checked />
                  <span className="toggle-switch"></span>
                </label>
                <p className="option-description">Stay logged in for 30 days</p>
              </div>
              
              <button className="save-button">Save Security Settings</button>
            </div>
          )}
          
          {activeTab === 'advanced' && (
            <div className="settings-section">
              <h2>Advanced Settings</h2>
              <div className="form-group">
                <label>Data Refresh Frequency</label>
                <select>
                  <option>5 minutes</option>
                  <option selected>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                </select>
              </div>
              
              <div className="settings-option">
                <label className="toggle-label">
                  <span>Enable Data Export</span>
                  <input type="checkbox" checked />
                  <span className="toggle-switch"></span>
                </label>
                <p className="option-description">Allow analytics data export as CSV, Excel, or PDF</p>
              </div>
              
              <div className="settings-option">
                <label className="toggle-label">
                  <span>Enable Advanced Analytics</span>
                  <input type="checkbox" checked />
                  <span className="toggle-switch"></span>
                </label>
                <p className="option-description">Use AI-driven advanced analytics features and predictive models</p>
              </div>
              
              <div className="settings-option">
                <label className="toggle-label">
                  <span>Developer Mode</span>
                  <input type="checkbox" />
                  <span className="toggle-switch"></span>
                </label>
                <p className="option-description">Enable API access and developer tools</p>
              </div>
              
              <button className="save-button">Save Advanced Settings</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
