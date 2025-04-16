import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, User, Settings } from 'lucide-react';

const MainLayout = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState('overview');
  const [activeSubModule, setActiveSubModule] = useState('overview-dashboard');

  // Module submenu configuration
  const moduleSubmenus = {
    overview: [
      { id: 'overview-dashboard', label: 'Dashboard' },
      { id: 'overview-kpi', label: 'Key Metrics' },
      { id: 'overview-roi', label: 'ROI Analysis' },
      { id: 'overview-trends', label: 'Trends' }
    ],
    insight: [
      { id: 'insight-search', label: 'Search Insights' },
      { id: 'insight-voc', label: 'VOC Analysis' },
      { id: 'insight-viral', label: 'Viral Videos' },
      { id: 'insight-factors', label: 'Viral Factors' }
    ],
    kockol: [
      { id: 'koc-trends', label: 'Content Trends' },
      { id: 'koc-youtube', label: 'YouTube Trends' },
      { id: 'koc-instagram', label: 'Instagram Trends' },
      { id: 'koc-tiktok', label: 'TikTok Trends' },
      { id: 'koc-paid', label: 'Paid KOL' },
      { id: 'koc-self', label: 'Self-operated KOC' },
      { id: 'koc-user', label: 'User Journey' },
      { id: 'koc-search', label: 'Search Performance' }
    ],
    feeds: [
      { id: 'feeds-effectiveness', label: 'Ad Effectiveness' },
      { id: 'feeds-campaigns', label: 'Campaign Performance' },
      { id: 'feeds-channel', label: 'Channel Analysis' },
      { id: 'feeds-google', label: 'Google Ads' },
      { id: 'feeds-facebook', label: 'Facebook Ads' },
      { id: 'feeds-amazon', label: 'Amazon Ads' },
      { id: 'feeds-product', label: 'Product Performance' }
    ],
    private: [
      { id: 'private-landing', label: 'Landing Pages' },
      { id: 'private-tags', label: 'Page Tags' },
      { id: 'private-whatsapp', label: 'WhatsApp Groups' },
      { id: 'private-email', label: 'Email Marketing' },
      { id: 'private-dtc', label: 'DTC Website' }
    ]
  };

  // Handle module switching
  const handleModuleChange = (module) => {
    setActiveModule(module);
    
    // Set default submodule
    if (moduleSubmenus[module]) {
      setActiveSubModule(moduleSubmenus[module][0].id);
    } else {
      setActiveSubModule('');
    }
    
    // Navigate to the corresponding page
    navigate(`/${module === 'overview' ? '' : module}`);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top navigation bar */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/eufy_logo.png" alt="Eufy Logo" className="h-10 mr-3" />
            <h1 className="text-xl font-bold text-primary">Eufy Content-Driven Growth Decision System</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
                {currentUser?.avatar || currentUser?.name?.charAt(0) || 'U'}
              </div>
              <span className="font-medium">{currentUser?.name || 'User'}</span>
            </div>
            
            <button 
              className="p-2 rounded-full hover:bg-hover"
              title="Settings"
            >
              <Settings size={20} />
            </button>
            
            <button 
              className="p-2 rounded-full hover:bg-hover"
              title="Logout"
              onClick={handleLogout}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Main navigation */}
      <nav className="bg-white shadow-sm mb-6">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`nav-item ${activeModule === 'overview' ? 'active' : ''}`}
              onClick={() => handleModuleChange('overview')}
            >
              Overview
            </button>
            <button 
              className={`nav-item ${activeModule === 'insight' ? 'active' : ''}`}
              onClick={() => handleModuleChange('insight')}
            >
              Insights
            </button>
            <button 
              className={`nav-item ${activeModule === 'kockol' ? 'active' : ''}`}
              onClick={() => handleModuleChange('kockol')}
            >
              KOC & KOL
            </button>
            <button 
              className={`nav-item ${activeModule === 'feeds' ? 'active' : ''}`}
              onClick={() => handleModuleChange('feeds')}
            >
              Content Distribution
            </button>
            <button 
              className={`nav-item ${activeModule === 'private' ? 'active' : ''}`}
              onClick={() => handleModuleChange('private')}
            >
              Private Domain
            </button>
            <button 
              className={`nav-item ${activeModule === 'deepsearch' ? 'active' : ''}`}
              onClick={() => handleModuleChange('deepsearch')}
            >
              Deep Search
            </button>
          </div>
        </div>
      </nav>
      
      {/* Submenu */}
      {moduleSubmenus[activeModule] && (
        <div className="container mx-auto px-4 mb-6">
          <div className="bg-white rounded-lg shadow-card p-2 flex flex-wrap">
            {moduleSubmenus[activeModule].map((item) => (
              <button
                key={item.id}
                className={`submenu-item ${activeSubModule === item.id ? 'active' : ''}`}
                onClick={() => setActiveSubModule(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Main content area */}
      <main className="container mx-auto px-4 flex-grow mb-6">
        <Outlet context={{ activeModule, activeSubModule }} />
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-sm text-secondary">
          &copy; 2025 Eufy Intelligent Decision Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
