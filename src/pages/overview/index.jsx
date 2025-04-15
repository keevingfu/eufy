import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Sliders, RefreshCw, Download, ChevronDown, Filter, TrendingUp, TrendingDown, Users, Eye, ThumbsUp, DollarSign } from 'lucide-react';

const Overview = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [showFilters, setShowFilters] = useState(false);
  
  // Simulated data
  const performanceData = [
    { name: 'Jan', views: 12000000, interactions: 840000, conversions: 72000 },
    { name: 'Feb', views: 15000000, interactions: 1050000, conversions: 90000 },
    { name: 'Mar', views: 19000000, interactions: 1330000, conversions: 114000 },
    { name: 'Apr', views: 24000000, interactions: 1680000, conversions: 144000 },
    { name: 'May', views: 30000000, interactions: 2100000, conversions: 180000 },
    { name: 'Jun', views: 33000000, interactions: 2310000, conversions: 198000 },
    { name: 'Jul', views: 38000000, interactions: 2660000, conversions: 228000 },
    { name: 'Aug', views: 42000000, interactions: 2940000, conversions: 252000 },
    { name: 'Sep', views: 50000000, interactions: 3500000, conversions: 300000 },
    { name: 'Oct', views: 56000000, interactions: 3920000, conversions: 336000 },
  ];

  const channelData = [
    { name: 'TikTok', value: 45 },
    { name: 'Instagram', value: 30 },
    { name: 'YouTube', value: 15 },
    { name: 'Facebook', value: 10 },
  ];

  const contentTypeData = [
    { name: 'Product Review', videoCount: 1200, avgViews: 35000 },
    { name: 'Product Critique', videoCount: 950, avgViews: 28000 },
    { name: 'Store Visit', videoCount: 650, avgViews: 42000 },
    { name: 'Holiday', videoCount: 480, avgViews: 55000 },
    { name: 'Campus', videoCount: 850, avgViews: 38000 },
  ];

  const audienceData = [
    { name: 'Students', value: 38 },
    { name: 'Young Professionals', value: 27 },
    { name: 'Homemakers', value: 20 },
    { name: 'Parents & Children', value: 15 },
  ];

  const COLORS = ['#2563eb', '#36C7D0', '#FFBE3D', '#8676FF', '#4CAF50'];

  const kpiCards = [
    { title: 'Total Views', value: '380M', change: '+15%', icon: <Eye size={20} />, color: 'bg-blue-500' },
    { title: 'Avg Engagement Rate', value: '7.2%', change: '+1.3%', icon: <ThumbsUp size={20} />, color: 'bg-blue-500' },
    { title: 'Active KOCs', value: '4,852', change: '+382', icon: <Users size={20} />, color: 'bg-purple-500' },
    { title: 'Est. Conversion Value', value: '$1.95M', change: '+8.7%', icon: <DollarSign size={20} />, color: 'bg-green-500' },
  ];

  const activeChannels = [
    { name: 'TikTok', followers: '2.4M', growth: '+12.5%', engagement: '8.3%' },
    { name: 'Instagram', followers: '1.8M', growth: '+8.2%', engagement: '5.9%' },
    { name: 'YouTube', followers: '820K', growth: '+5.7%', engagement: '4.2%' },
    { name: 'Facebook', followers: '1.2M', growth: '+3.1%', engagement: '3.8%' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title and Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
          <p className="text-gray-600">Global Marketing Performance Data</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <button 
              className="flex items-center px-4 py-2 bg-white border rounded-lg shadow-sm text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Calendar size={16} className="mr-2" />
              {timeRange === 'week' ? '本周' : 
               timeRange === 'month' ? '本月' : 
               timeRange === 'quarter' ? '本季度' : '本年'}
              <ChevronDown size={16} className="ml-2" />
            </button>
            
            {showFilters && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {setTimeRange('week'); setShowFilters(false);}}
                  >
                    This Week
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {setTimeRange('month'); setShowFilters(false);}}
                  >
                    This Month
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {setTimeRange('quarter'); setShowFilters(false);}}
                  >
                    This Quarter
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {setTimeRange('year'); setShowFilters(false);}}
                  >
                    This Year
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <button className="p-2 bg-white border rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
            <Filter size={16} />
          </button>
          
          <button className="p-2 bg-white border rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
            <RefreshCw size={16} />
          </button>
          
          <button className="p-2 bg-white border rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
            <Download size={16} />
          </button>
        </div>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {kpiCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{card.value}</h3>
              </div>
              <div className={`${card.color} rounded-full p-2 text-white`}>
                {card.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {card.change.startsWith('+') ? 
                <TrendingUp size={16} className="text-green-500 mr-1" /> : 
                <TrendingDown size={16} className="text-red-500 mr-1" />
              }
              <span className={card.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                {card.change} vs Previous Period
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Performance Trend Chart */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-gray-800">Content Performance Trends</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm rounded-md bg-blue-50 text-blue-600">Views</button>
            <button className="px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-gray-100">Interactions</button>
            <button className="px-3 py-1 text-sm rounded-md text-gray-600 hover:bg-gray-100">Conversions</button>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000000}M`} />
            <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#2563eb" activeDot={{ r: 8 }} strokeWidth={2} />
            <Line type="monotone" dataKey="interactions" stroke="#36C7D0" strokeWidth={2} />
            <Line type="monotone" dataKey="conversions" stroke="#FFBE3D" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Content Analysis and Channel Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Content Type Analysis */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-800 mb-6">Content Type Analysis</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={contentTypeData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="videoCount" fill="#8676FF" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="avgViews" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Channel Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Channel Distribution</h3>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Audience Distribution */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Audience Distribution</h3>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={audienceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {audienceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Active Channels Table */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 border-b">
          <h3 className="font-semibold text-gray-800">Active Channel Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Followers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeChannels.map((channel, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        {channel.name.charAt(0)}
                      </div>
                      <div className="font-medium text-gray-900">{channel.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{channel.followers}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-green-500">{channel.growth}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{channel.engagement}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900">Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-6">
        <p>Data updated: March 3, 2025 08:30</p>
      </div>
    </div>
  );
};

export default Overview;