import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, ExternalLink, Home, Users, Rss, Lock, Brain } from 'lucide-react';

const Dashboard = () => {
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
    { id: 'koc', title: 'KOC & KOL', description: 'Content creation', icon: <Users size={24} />, color: 'bg-yellow-200', link: '/kockol' },
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

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Content-Driven Growth Decision System</h1>
        <p className="text-gray-600">Explore Eufy's US market content data and discover growth opportunities</p>
      </div>
      
      {/* Progress card */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-700">2025 US Market Target Progress</h3>
          <span className="text-sm text-gray-500">Updated 1 hour ago</span>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="text-3xl font-bold text-blue-600">{analyticsData.totalViews}</div>
          <div className="ml-3 text-gray-500">
            <div>Total Views</div>
            <div className="text-sm">Target: {analyticsData.targetViews}</div>
          </div>
          <div className="ml-auto">
            <span className="text-2xl font-bold text-gray-800">{analyticsData.progress}%</span>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${analyticsData.progress}%`}}></div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">{analyticsData.kocCount}</div>
            <div className="text-sm text-gray-500">Active KOCs</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">{analyticsData.contentCount}</div>
            <div className="text-sm text-gray-500">Total Content</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">{analyticsData.conversionRate}</div>
            <div className="text-sm text-gray-500">Avg. Conversion Rate</div>
          </div>
        </div>
      </div>
      
      {/* Module cards */}
      <h3 className="font-semibold text-gray-700 mb-4">Core Modules</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {moduleCards.map(card => (
          <div 
            key={card.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className={`${card.color} h-2`}></div>
            <div className="p-5">
              <div className="flex items-center mb-3">
                <div className={`rounded-lg p-2 ${card.color.replace('bg-', 'bg-opacity-20 text-')}`}>
                  {card.icon}
                </div>
                <h3 className="ml-3 font-semibold text-gray-800">{card.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <Link to={card.link} className="text-sm text-blue-600 flex items-center mt-3 hover:underline">
                <span>Open module</span>
                <ExternalLink size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Activity list */}
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">Recent Activities</h3>
            <Link to="/overview" className="text-sm text-blue-600 hover:underline">View all</Link>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  activity.status === 'active' ? 'bg-green-500' : 
                  activity.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-400'
                }`}></div>
                <div className="flex-1">
                  <h4 className="text-gray-800 font-medium">{activity.title}</h4>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                <div>
                  <button className="text-sm text-blue-600 hover:underline">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Upcoming projects */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">Upcoming Projects</h3>
            <Link to="/overview" className="text-sm text-blue-600 hover:underline">View all</Link>
          </div>
          
          <div className="space-y-4">
            {upcomingProjects.map(project => (
              <div key={project.id} className="p-3 border rounded-lg">
                <h4 className="font-medium text-gray-800">{project.title}</h4>
                <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                  <div 
                    className="bg-blue-500 h-1.5 rounded-full" 
                    style={{width: `${project.progress}%`}}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Due: {project.dueDate}</span>
                  <span className="text-xs text-gray-500">{project.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 