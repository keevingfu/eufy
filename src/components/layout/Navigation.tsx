import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BarChart, LineChart, Users, Share2, Home, Search } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  subItems?: { id: string; label: string }[];
}

const navItems: NavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    path: '/',
    icon: <Home className="w-5 h-5" />,
    subItems: [
      { id: 'overview-dashboard', label: 'Dashboard' },
      { id: 'overview-kpi', label: 'Key Metrics' },
      { id: 'overview-roi', label: 'ROI Analysis' },
      { id: 'overview-trends', label: 'Trends' }
    ]
  },
  {
    id: 'insight',
    label: 'Insight',
    path: '/insight',
    icon: <BarChart className="w-5 h-5" />,
    subItems: [
      { id: 'insight-search', label: 'Search Insights' },
      { id: 'insight-voc', label: 'VOC Analysis' },
      { id: 'insight-viral', label: 'Viral Videos' },
      { id: 'insight-factors', label: 'Viral Factors' }
    ]
  },
  {
    id: 'koc',
    label: 'KOC & KOL',
    path: '/koc-kol',
    icon: <Users className="w-5 h-5" />,
    subItems: [
      { id: 'koc-trends', label: 'Content Trends' },
      { id: 'koc-youtube', label: 'YouTube Trends' },
      { id: 'koc-instagram', label: 'Instagram Trends' },
      { id: 'koc-tiktok', label: 'TikTok Trends' },
      { id: 'koc-paid', label: 'Paid KOL' },
      { id: 'koc-self', label: 'Self-Operated KOC' },
      { id: 'koc-user', label: 'User Journey' },
      { id: 'koc-search', label: 'Search Performance' }
    ]
  },
  {
    id: 'feeds',
    label: 'Content Distribution',
    path: '/content-distribution',
    icon: <Share2 className="w-5 h-5" />,
    subItems: [
      { id: 'feeds-effectiveness', label: 'Ad Effectiveness' },
      { id: 'feeds-campaigns', label: 'Campaign Performance' },
      { id: 'feeds-channel', label: 'Channel Analysis' },
      { id: 'feeds-google', label: 'Google Ads' },
      { id: 'feeds-facebook', label: 'Facebook Ads' },
      { id: 'feeds-amazon', label: 'Amazon Ads' },
      { id: 'feeds-product', label: 'Product Performance' }
    ]
  },
  {
    id: 'private',
    label: 'Private Domain',
    path: '/private-domain',
    icon: <LineChart className="w-5 h-5" />,
    subItems: [
      { id: 'private-landing', label: 'Landing Pages' },
      { id: 'private-tags', label: 'Page Tags' },
      { id: 'private-whatsapp', label: 'WhatsApp Groups' },
      { id: 'private-email', label: 'Email Marketing' },
      { id: 'private-dtc', label: 'DTC Website' }
    ]
  },
  {
    id: 'deepsearch',
    label: 'Deep Search',
    path: '/deep-search',
    icon: <Search className="w-5 h-5" />
  }
];

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeModule, setActiveModule] = useState('overview');
  const [activeSubModule, setActiveSubModule] = useState('overview-dashboard');

  const handleModuleClick = (item: NavItem) => {
    setActiveModule(item.id);
    if (!item.subItems) {
      setActiveSubModule('');
    } else if (item.subItems.length > 0) {
      setActiveSubModule(item.subItems[0].id);
    }
    navigate(item.path);
  };

  const handleSubModuleClick = (moduleId: string, subItem: { id: string; label: string }) => {
    setActiveSubModule(subItem.id);
    navigate(`${navItems.find(item => item.id === moduleId)?.path}/${subItem.id}`);
  };

  return (
    <nav className="mb-6">
      <div className="flex bg-card rounded-lg shadow-custom mb-6 overflow-hidden">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item flex items-center gap-2 ${activeModule === item.id ? 'active' : ''}`}
            onClick={() => handleModuleClick(item)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
