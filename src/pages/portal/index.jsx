import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Bell, Menu, Search, User, BarChart2, Database, Users, Rss, Lock, Home, Brain, ExternalLink, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const EufyPortal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const [activeModule, setActiveModule] = useState(() => {
    const path = location.pathname;
    if (path === '/') return 'dashboard';
    // Remove the leading slash
    return path.substring(1);
  });

  // Mock data
  const analyticsData = {
    totalViews: '380M',
    targetViews: '400M',
    progress: 95,
    kocCount: '4,852',
    contentCount: '28,954',
    conversionRate: '6.8%'
  };

  const recentActivities = [
    { id: 1, title: 'KOC Marketing Campaign Launch', time: 'Today 09:30', status: 'active' },
    { id: 2, title: 'Thanksgiving Content Plan Review', time: 'Yesterday 14:25', status: 'pending' },
    { id: 3, title: 'Campus Scene Content Evaluation', time: 'Oct 15', status: 'completed' },
    { id: 4, title: 'Amazon Trending Video Analysis', time: 'Oct 12', status: 'completed' }
  ];

  const moduleCards = [
    { id: 'overview', title: 'Overview', description: 'Global data overview', icon: <Home size={24} />, color: 'bg-blue-500', link: '/overview' },
    { id: 'insight', title: 'Insight', description: 'Data insights', icon: <BarChart2 size={24} />, color: 'bg-purple-500', link: '/insight' },
    { id: 'koc', title: 'KOC & KOL', description: 'Content creation', icon: <Users size={24} />, color: 'bg-blue-500', link: '/kockol' },
    { id: 'feeds', title: 'Feeds', description: 'Content distribution', icon: <Rss size={24} />, color: 'bg-orange-500', link: '/feeds' },
    { id: 'private', title: 'Private', description: 'Private domain', icon: <Lock size={24} />, color: 'bg-green-500', link: '/private' },
    { id: 'research', title: 'Deep Research', description: 'Market intelligence', icon: <Brain size={24} />, color: 'bg-red-500', link: '/deepresearch' }
  ];
  
  const upcomingProjects = [
    { 
      id: 1, 
      title: 'Back to School Campaign', 
      description: 'Fall semester targeted promotions',
      progress: 65,
      dueDate: 'Jul 25, 2025',
      members: 8
    },
    { 
      id: 2, 
      title: 'Disney Collection Launch', 
      description: 'New character merchandise series',
      progress: 42,
      dueDate: 'Aug 10, 2025',
      members: 12
    },
    { 
      id: 3, 
      title: 'Holiday Gift Guide', 
      description: 'Thanksgiving and Christmas planning',
      progress: 28,
      dueDate: 'Sep 05, 2025',
      members: 6
    }
  ];

  // 处理用户登出
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <div className="flex items-center justify-center">
            <h1 className="text-xl font-bold text-blue-600">Eufy</h1>
            <span className="ml-2 text-gray-600 text-xs">Growth System</span>
          </div>
        </div>
        
        <div className="p-4">
          <ul>
            <li className="mb-2">
              <Link 
                to="/" 
                className={`flex items-center p-2 rounded-lg ${activeModule === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setActiveModule('dashboard')}
              >
                <Home size={20} className="mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            {moduleCards.map(module => (
              <li key={module.id} className="mb-2">
                <Link 
                  to={module.link}
                  className={`flex items-center p-2 rounded-lg ${activeModule === module.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setActiveModule(module.id)}
                >
                  {React.cloneElement(module.icon, { size: 20, className: "mr-3" })}
                  <span>{module.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-4 border-t">
            <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2 px-2">Resources</h3>
            <ul>
              <li className="mb-2">
                <Link 
                  to="/settings" 
                  className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  <Database size={18} className="mr-3" />
                  <span>Settings</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/helpcenter" 
                  className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  <ExternalLink size={18} className="mr-3" />
                  <span>Help Center</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 overflow-auto">
        {/* Top navigation */}
        <div className="bg-white p-4 shadow-sm flex justify-between items-center">
          <div className="flex items-center">
            <Menu size={20} className="text-gray-500 mr-4" />
            <h2 className="text-lg font-semibold">Eufy Content-Driven Growth Decision System</h2>
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="py-1 px-3 pr-8 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="relative mr-4">
              <Bell size={20} className="text-gray-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </div>
            
            {/* User profile */}
            <div className="relative">
              <div 
                className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 cursor-pointer"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                {user?.avatar || <User size={18} />}
              </div>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div className="py-2 px-4 border-b">
                    <p className="font-medium">{user?.name || 'User'}</p>
                    <p className="text-sm text-gray-500">{user?.role || 'User'}</p>
                  </div>
                  <div className="py-1">
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile Settings
                    </Link>
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      <div className="flex items-center">
                        <LogOut size={16} className="mr-2" />
                        <span>Logout</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Content area - Render the current route */}
        <Outlet />
      </div>
    </div>
  );
};

export default EufyPortal;