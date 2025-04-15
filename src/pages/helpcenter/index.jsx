import React, { useState } from 'react';
import { Search, HelpCircle, FileText, MessageSquare, Mail, Phone, Book, Video, Flag, ChevronDown, ChevronRight } from 'lucide-react';
import './helpcenterstyles.css';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFaqs, setExpandedFaqs] = useState([0]);

  // 切换FAQ的展开/折叠状态
  const toggleFaq = (index) => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(item => item !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  // 常见问题
  const faqs = [
    {
      question: "How do I navigate between different modules?",
      answer: "You can use the sidebar navigation menu on the left side of the screen to switch between different modules like Dashboard, Overview, Insights, etc. Click on any menu item to access that module."
    },
    {
      question: "How to interpret the KOC performance data?",
      answer: "The KOC performance data shows metrics like engagement rate, views, and conversions. Higher percentages indicate better performance. You can filter the data by time period and platform to get more specific insights."
    },
    {
      question: "Can I export reports from the system?",
      answer: "Yes, most data modules have an export function. Look for the download icon in the top right corner of data sections. You can export data as CSV, Excel, or PDF formats depending on the module."
    },
    {
      question: "How to set up custom alerts?",
      answer: "Go to Settings > Notifications, then enable the 'Custom Alerts' option. From there, you can define thresholds for specific metrics that will trigger notifications when reached."
    },
    {
      question: "Why can't I see certain data in the reports?",
      answer: "Access to certain data depends on your user role and permissions. If you need access to additional data, please contact your system administrator or submit a request through the support form."
    }
  ];

  // 使用指南类别
  const guideCategories = [
    { id: 'getting-started', title: 'Getting Started', icon: <Book size={20} /> },
    { id: 'dashboard', title: 'Dashboard Guide', icon: <FileText size={20} /> },
    { id: 'koc-management', title: 'KOC Management', icon: <HelpCircle size={20} /> },
    { id: 'reporting', title: 'Reporting Tools', icon: <FileText size={20} /> },
    { id: 'analysis', title: 'Data Analysis', icon: <HelpCircle size={20} /> },
    { id: 'tutorial-videos', title: 'Tutorial Videos', icon: <Video size={20} /> }
  ];

  // 使用指南内容
  const guideContent = {
    'getting-started': [
      { title: 'System Overview', description: 'Introduction to the Content-Driven Growth Decision System' },
      { title: 'Quick Start Guide', description: 'Essential steps to get you up and running with the platform' },
      { title: 'Navigation Basics', description: 'Learn how to navigate through different modules' },
      { title: 'Understanding Key Metrics', description: 'Guide to interpreting the key performance indicators' }
    ],
    'dashboard': [
      { title: 'Dashboard Elements', description: 'Explanation of all dashboard components and widgets' },
      { title: 'Customizing Your View', description: 'How to personalize your dashboard layout' },
      { title: 'Data Refresh Settings', description: 'Configure how often your dashboard data updates' }
    ],
    'koc-management': [
      { title: 'KOC Onboarding Process', description: 'Step-by-step guide to adding new KOCs to the system' },
      { title: 'Performance Tracking', description: 'How to track and evaluate KOC performance' },
      { title: 'Content Planning', description: 'Tools for planning and scheduling KOC content' }
    ],
    'reporting': [
      { title: 'Creating Reports', description: 'How to generate custom reports' },
      { title: 'Scheduling Reports', description: 'Setting up automated report delivery' },
      { title: 'Export Options', description: 'Different ways to export and share data' }
    ],
    'analysis': [
      { title: 'Trend Analysis', description: 'How to identify and interpret content trends' },
      { title: 'Comparative Analysis', description: 'Comparing performance across different timeframes' },
      { title: 'Forecasting Tools', description: 'Using predictive analytics features' }
    ],
    'tutorial-videos': [
      { title: 'Beginner Tutorials', description: 'Video guides for new users' },
      { title: 'Advanced Features', description: 'Detailed tutorials on advanced system capabilities' },
      { title: 'Feature Updates', description: 'Videos highlighting new features and improvements' }
    ]
  };

  return (
    <div className="help-center-container">
      <header className="help-center-header">
        <h1>Help Center</h1>
        <p className="help-center-description">Guides, tutorials and support for the Content-Driven Growth Decision System</p>
      </header>

      <div className="help-center-content">
        {/* Search Bar */}
        <div className="help-search-container">
          <div className="help-search-input-wrapper">
            <input
              type="text"
              placeholder="Search for help topics..."
              className="help-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="help-search-icon">
              <Search size={20} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links-section">
          <div className="quick-link-card">
            <HelpCircle size={24} className="quick-link-icon" />
            <h3>FAQs</h3>
            <p>Find answers to commonly asked questions</p>
          </div>
          <div className="quick-link-card">
            <FileText size={24} className="quick-link-icon" />
            <h3>User Guide</h3>
            <p>Step-by-step tutorials and how-to guides</p>
          </div>
          <div className="quick-link-card">
            <Video size={24} className="quick-link-icon" />
            <h3>Video Tutorials</h3>
            <p>Visual guides for key features</p>
          </div>
          <div className="quick-link-card">
            <MessageSquare size={24} className="quick-link-icon" />
            <h3>Contact Support</h3>
            <p>Get help from our support team</p>
          </div>
        </div>

        <div className="help-main-content">
          {/* FAQs Section */}
          <div className="help-section">
            <h2 className="help-section-title">Frequently Asked Questions</h2>
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                  >
                    <h3>{faq.question}</h3>
                    {expandedFaqs.includes(index) ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </div>
                  {expandedFaqs.includes(index) && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* User Guides Section */}
          <div className="help-section">
            <h2 className="help-section-title">User Guides</h2>
            <div className="guides-container">
              <div className="guides-sidebar">
                {guideCategories.map(category => (
                  <div 
                    key={category.id} 
                    className={`guide-category ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </div>
                ))}
              </div>
              <div className="guides-content">
                <h3>{guideCategories.find(c => c.id === activeCategory)?.title}</h3>
                <div className="guides-list">
                  {guideContent[activeCategory].map((guide, index) => (
                    <div key={index} className="guide-item">
                      <h4>{guide.title}</h4>
                      <p>{guide.description}</p>
                      <a href="#" className="guide-link">Read more</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="help-section">
            <h2 className="help-section-title">Contact Support</h2>
            <div className="support-options">
              <div className="support-card">
                <Mail size={24} className="support-icon" />
                <h3>Email Support</h3>
                <p>Send us a detailed message</p>
                <p className="support-contact">support@Eufy-growth.com</p>
                <button className="support-button">Send Email</button>
              </div>
              <div className="support-card">
                <MessageSquare size={24} className="support-icon" />
                <h3>Live Chat</h3>
                <p>Chat with a support agent</p>
                <p className="support-availability">Available 24/7</p>
                <button className="support-button">Start Chat</button>
              </div>
              <div className="support-card">
                <Phone size={24} className="support-icon" />
                <h3>Phone Support</h3>
                <p>Speak with a support specialist</p>
                <p className="support-contact">+1 (800) 123-4567</p>
                <button className="support-button">Call Now</button>
              </div>
              <div className="support-card">
                <Flag size={24} className="support-icon" />
                <h3>Report Issue</h3>
                <p>Submit a bug report</p>
                <p className="support-availability">Response within 24 hours</p>
                <button className="support-button">Report Bug</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter; 