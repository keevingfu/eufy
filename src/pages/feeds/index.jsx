import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Search, Calendar, Filter, Download, TrendingUp, TrendingDown, DollarSign, ShoppingCart, Percent, Target, BarChart2, CreditCard, ExternalLink, Eye } from 'lucide-react';

const FeedsDashboard = () => {
  const [activeTab, setActiveTab] = useState('effectiveness');
  const [dateRange, setDateRange] = useState('month');
  const [activeSubTab, setActiveSubTab] = useState('google');
  
  // Ad Overall Effectiveness Data
  const overviewStats = {
    totalSpend: '$842,500',
    impressions: '158.6M',
    clicks: '5.2M',
    conversions: '285K',
    roi: '3.8x',
    ctr: '3.28%',
    cpc: '$0.16',
    conversionRate: '5.48%'
  };

  const performanceTrendData = [
    { month: 'Jan', adSpending: 65, customerAcquisitionCost: 58, adROI: 280 },
    { month: 'Feb', adSpending: 68, customerAcquisitionCost: 55, adROI: 290 },
    { month: 'Mar', adSpending: 75, customerAcquisitionCost: 52, adROI: 310 },
    { month: 'Apr', adSpending: 80, customerAcquisitionCost: 49, adROI: 315 },
    { month: 'May', adSpending: 85, customerAcquisitionCost: 48, adROI: 325 },
    { month: 'Jun', adSpending: 90, customerAcquisitionCost: 46, adROI: 340 },
    { month: 'Jul', adSpending: 95, customerAcquisitionCost: 45, adROI: 350 },
    { month: 'Aug', adSpending: 100, customerAcquisitionCost: 43, adROI: 370 },
    { month: 'Sep', adSpending: 105, customerAcquisitionCost: 41, adROI: 380 },
    { month: 'Oct', adSpending: 110, customerAcquisitionCost: 40, adROI: 390 },
  ];

  // Channel Effectiveness Data
  const channelData = [
    { name: 'TikTok Ads', value: 35 },
    { name: 'Google Ads', value: 25 },
    { name: 'Facebook Ads', value: 20 },
    { name: 'Instagram Ads', value: 12 },
    { name: 'Amazon Ads', value: 8 },
  ];

  const channelPerformanceData = [
    { channel: 'TikTok Ads', impressions: 58.4, clicks: 2.2, conversions: 125, roi: 4.2, cost: 285 },
    { channel: 'Google Ads', impressions: 42.6, clicks: 1.5, conversions: 75, roi: 3.8, cost: 210 },
    { channel: 'Facebook Ads', impressions: 32.5, clicks: 0.85, conversions: 48, roi: 3.6, cost: 168 },
    { channel: 'Instagram Ads', impressions: 18.6, clicks: 0.45, conversions: 26, roi: 3.2, cost: 101 },
    { channel: 'Amazon Ads', impressions: 6.5, clicks: 0.2, conversions: 11, roi: 3.5, cost: 78.5 },
  ];

  // 广告活动数据
  // Advertising campaign data
  const campaignsData = [
    { id: 1, name: 'Back-to-School Stationery Theme', platform: 'TikTok', status: 'active', spend: '$45,800', impressions: '12.5M', clicks: '485K', conversions: '32.8K', roi: '4.1x' },
    { id: 2, name: 'Home Storage Series', platform: 'Facebook', status: 'active', spend: '$38,600', impressions: '8.2M', clicks: '320K', conversions: '21.5K', roi: '3.6x' },
    { id: 3, name: 'Fall New Product Series', platform: 'Google', status: 'active', spend: '$42,200', impressions: '10.8M', clicks: '355K', conversions: '24.2K', roi: '3.8x' },
    { id: 4, name: 'Disney-Marvel Series', platform: 'Instagram', status: 'active', spend: '$36,500', impressions: '7.5M', clicks: '290K', conversions: '18.8K', roi: '3.5x' },
    { id: 5, name: 'Thanksgiving Gift Series', platform: 'TikTok', status: 'scheduled', spend: '$0', impressions: '0', clicks: '0', conversions: '0', roi: '0' },
  ];

  const platformPerformance = {
    google: [
      { category: 'Search Ads', impressions: 28.5, clicks: 0.95, ctr: 3.33, conversions: 48, cost: 142 },
      { category: 'Display Ads', impressions: 14.1, clicks: 0.55, ctr: 3.90, conversions: 27, cost: 68 },
    ],
    facebook: [
      { category: 'News Feed Ads', impressions: 22.8, clicks: 0.62, ctr: 2.72, conversions: 32, cost: 115 },
      { category: 'Story Ads', impressions: 9.7, clicks: 0.23, ctr: 2.37, conversions: 16, cost: 53 },
    ],
    amazon: [
      { category: 'Sponsored Products', impressions: 4.2, clicks: 0.15, ctr: 3.57, conversions: 8, cost: 52 },
      { category: 'Sponsored Brands', impressions: 2.3, clicks: 0.05, ctr: 2.17, conversions: 3, cost: 26.5 },
    ]
  };

  // 产品销售表现数据
  // Product sales performance data
  const productCategoryPerformance = [
    { name: 'Stationery', sales: 420000, adSpend: 125000, roi: 3.4 },
    { name: 'Daily Storage', sales: 385000, adSpend: 110000, roi: 3.5 },
    { name: 'Digital Accessories', sales: 325000, adSpend: 98000, roi: 3.3 },
    { name: 'Home Decor', sales: 295000, adSpend: 85000, roi: 3.5 },
    { name: 'Beauty & Personal Care', sales: 270000, adSpend: 82000, roi: 3.3 },
    { name: 'Toy Series', sales: 230000, adSpend: 75000, roi: 3.1 },
  ];

  const topProducts = [
    { id: 1, name: 'Disney-Marvel Stationery Set', category: 'Stationery', sales: '$58,500', conversion: '8.2%', roi: '4.8x' },
    { id: 2, name: 'Multi-Function Makeup Organizer', category: 'Daily Storage', sales: '$42,800', conversion: '7.5%', roi: '4.2x' },
    { id: 3, name: 'Adorable Animal-Shaped Power Bank', category: 'Digital Accessories', sales: '$38,600', conversion: '6.8%', roi: '3.9x' },
    { id: 4, name: 'Nordic-Style Nightlight', category: 'Home Decor', sales: '$35,200', conversion: '6.5%', roi: '3.8x' },
    { id: 5, name: 'Limited Edition Bear & Winnie the Pooh Perfume', category: 'Beauty & Personal Care', sales: '$32,500', conversion: '6.2%', roi: '3.7x' },
  ];

  const COLORS = ['#FF6B8A', '#36C7D0', '#FFBE3D', '#8676FF', '#4CAF50', '#FF7043'];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 页面标题和工具栏 */}
      {/* Page title and toolbar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Feeds Content Distribution</h1>
          <p className="text-gray-600">Content Empowerment for Advertisement and Effectiveness Analysis</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search Advertisement Campaign..." 
              className="py-2 px-4 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500 w-64"
            />
            <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <button className="py-2 px-4 flex items-center border rounded-lg shadow-sm bg-white text-gray-700">
            <Calendar size={16} className="mr-2" />
            {dateRange === 'week' ? 'This Week' : 
             dateRange === 'month' ? 'This Month' : 
             dateRange === 'quarter' ? 'This Quarter' : 'This Year'}
          </button>
          
          <button className="p-2 bg-white border rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
            <Filter size={18} />
          </button>
          
          <button className="p-2 bg-white border rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
            <Download size={18} />
          </button>
        </div>
      </div>
      
      {/* 主要标签页 */}
      {/* Main tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'effectiveness'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('effectiveness')}
            >
              Ad Overall Effectiveness
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'channel'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('channel')}
            >
              Channel Effectiveness
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'platform'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('platform')}
            >
              Platform Advertisement
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'product'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('product')}
            >
              Product Sales Performance
            </button>
          </nav>
        </div>
      </div>
      
      {/* 广告总体效果标签页 */}
      {/* Overall advertising effectiveness tab */}
      {activeTab === 'effectiveness' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Total Advertisement Spend</p>
                <DollarSign size={18} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{overviewStats.totalSpend}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+15.3% vs Last Period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Total Impressions</p>
                <Eye size={18} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{overviewStats.impressions}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+22.7% vs Last Period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Total Conversions</p>
                <ShoppingCart size={18} className="text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{overviewStats.conversions}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+18.5% vs Last Period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Ad ROI</p>
                <Target size={18} className="text-purple-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{overviewStats.roi}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+0.3x vs Last Period</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Click-Through Rate (CTR)</p>
                <Percent size={18} className="text-yellow-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{overviewStats.ctr}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+0.15% vs Last Period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Average Click Cost (CPC)</p>
                <CreditCard size={18} className="text-red-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{overviewStats.cpc}</p>
              <div className="mt-4 flex items-center">
                <TrendingDown size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">-$0.02 vs Last Period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Conversion Rate</p>
                <BarChart2 size={18} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{overviewStats.conversionRate}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+0.22% vs Last Period</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ad Performance Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceTrendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="Ad Spending ($10,000)" dataKey="adSpending" stroke="#FF6B8A" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" name="Customer Acquisition Cost (USD)" dataKey="customerAcquisitionCost" stroke="#36C7D0" strokeWidth={2} />
                <Line type="monotone" name="Ad ROI (%)" dataKey="adROI" stroke="#FFBE3D" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Ad Campaign Performance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spend</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {campaignsData.map((campaign) => (
                    <tr key={campaign.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{campaign.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          campaign.platform === 'TikTok' ? 'bg-black text-white' : 
                          campaign.platform === 'Facebook' ? 'bg-blue-100 text-blue-800' : 
                          campaign.platform === 'Google' ? 'bg-green-100 text-green-800' : 
                          'bg-blue-100 text-pink-800'
                        }`}>
                          {campaign.platform}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          campaign.status === 'active' ? 'bg-green-100 text-green-800' : 
                          campaign.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {campaign.status === 'active' ? 'Active' : 
                           campaign.status === 'scheduled' ? 'Scheduled' : 'Ended'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{campaign.spend}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{campaign.impressions}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{campaign.clicks}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{campaign.conversions}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{campaign.roi}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {/* 渠道效果标签页 */}
      {/* Channel effectiveness tab */}
      {activeTab === 'channel' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Channel Distribution</h3>
              <div className="flex items-center">
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height={240}>
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
                      >
                        {channelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {channelData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="text-sm">{entry.name} ({entry.value}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Channel Effectiveness Comparison</h3>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart
                  layout="vertical"
                  data={channelPerformanceData}
                  margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="channel" type="category" axisLine={false} tickLine={false} width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="roi" name="ROI" fill="#FF6B8A" barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Channel Performance</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions (M)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks (M)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions (K)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Advertising Cost (K)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {channelPerformanceData.map((channel, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{channel.channel}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{channel.impressions}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{channel.clicks}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{channel.conversions}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${channel.cost}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{channel.roi}x</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Channel Contribution Analysis</h3>
                <div className="text-xs text-gray-500">Updated 1 hour ago</div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Traffic Contribution</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>TikTok Ads</span>
                        <span>38%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Google Ads</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Facebook Ads</span>
                        <span>22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Other Channels</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-3 border-t mt-3">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Conversion Contribution</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>TikTok Ads</span>
                        <span>42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Google Ads</span>
                        <span>26%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '26%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Facebook Ads</span>
                        <span>20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Other Channels</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Channel Synergy Effect</h3>
              <div className="p-4 bg-blue-50 rounded-lg mb-4">
                <h4 className="font-medium text-gray-800 mb-2">High Synergy Channel Combination</h4>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="p-2 bg-white rounded border border-pink-200">
                    <div className="font-medium text-sm">TikTok + Instagram</div>
                    <div className="text-xs text-gray-500">Synergy Effect: +28%</div>
                  </div>
                  <div className="p-2 bg-white rounded border border-pink-200">
                    <div className="font-medium text-sm">Google + Amazon</div>
                    <div className="text-xs text-gray-500">Synergy Effect: +22%</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Synergy Effect refers to the additional conversion uplift brought by multi-channel combinations</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Channel Optimization Suggestions</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-blue-500">•</div>
                    <span>Increase Cross-Channel Advertising for TikTok and Instagram</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-blue-500">•</div>
                    <span>Increase Google Ads targeting for search intent users</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-blue-500">•</div>
                    <span>Reduce Facebook single-channel advertising and increase collaboration with other channels</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Purchase Path Analysis</h3>
              <div className="relative">
                <div className="flex justify-between mb-8">
                  <div className="text-center w-1/5">
                    <div className="mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium">Ad Exposure</p>
                    <p className="text-xs text-gray-500">100%</p>
                  </div>
                  
                  <div className="text-center w-1/5">
                    <div className="mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium">Ad Click</p>
                    <p className="text-xs text-gray-500">3.28%</p>
                  </div>
                  
                  <div className="text-center w-1/5">
                    <div className="mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium">Content View</p>
                    <p className="text-xs text-gray-500">85.6%</p>
                  </div>
                  
                  <div className="text-center w-1/5">
                    <div className="mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <span className="text-green-600 font-bold">4</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium">Add to Cart</p>
                    <p className="text-xs text-gray-500">12.4%</p>
                  </div>
                  
                  <div className="text-center w-1/5">
                    <div className="mb-2">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
                        <span className="text-yellow-600 font-bold">5</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium">Complete Purchase</p>
                    <p className="text-xs text-gray-500">5.48%</p>
                  </div>
                </div>
                
                {/* 连接线 */}
                {/* Connection lines */}
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium text-gray-800 mb-3 text-sm">Suggestions for Optimizing Drop-off Points</h4>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-red-500">•</div>
                    <div>
                      <span className="font-medium">Content View → Add to Cart:</span>
                      <span className="text-gray-600"> Optimize product page, increase related recommendations, and improve conversion rate</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-red-500">•</div>
                    <div>
                      <span className="font-medium">Add to Cart → Complete Purchase:</span>
                      <span className="text-gray-600"> Simplify the purchase process and add shopping cart reminder</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 平台广告投放标签页 */}
      {/* Platform advertising placement tab */}
      {activeTab === 'platform' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow">
            <div className="flex border-b border-gray-200">
              <button 
                className={`px-4 py-3 font-medium text-sm border-b-2 ${
                  activeSubTab === 'google' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveSubTab('google')}
              >
                Google Ads
              </button>
              <button 
                className={`px-4 py-3 font-medium text-sm border-b-2 ${
                  activeSubTab === 'facebook' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveSubTab('facebook')}
              >
                Facebook Ads
              </button>
              <button 
                className={`px-4 py-3 font-medium text-sm border-b-2 ${
                  activeSubTab === 'amazon' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveSubTab('amazon')}
              >
                Amazon Ads
              </button>
            </div>
            
            <div className="p-6">
              {/* Google Ads Content */}
              {activeSubTab === 'google' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">Search Ads</h4>
                        <div className="p-1 bg-green-100 rounded text-green-600 text-xs">Main Channel</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Impressions (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.google[0].impressions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Clicks (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.google[0].clicks}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Conversions (K)</p>
                          <p className="text-lg font-bold">{platformPerformance.google[0].conversions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Advertising Cost (K)</p>
                          <p className="text-lg font-bold">${platformPerformance.google[0].cost}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">Display Ads</h4>
                        <div className="p-1 bg-blue-100 rounded text-blue-600 text-xs">Supporting Channel</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Impressions (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.google[1].impressions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Clicks (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.google[1].clicks}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Conversions (K)</p>
                          <p className="text-lg font-bold">{platformPerformance.google[1].conversions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Advertising Cost (K)</p>
                          <p className="text-lg font-bold">${platformPerformance.google[1].cost}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-3">Google Ads Optimization Suggestions</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Increase bids for "campus supplies" and "stationery" keywords</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Optimize creative for display ads to improve click-through rate</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Adjust budget allocation based on high-converting devices</span>
                        </li>
                      </ul>
                      <div className="mt-3 pt-3 border-t border-pink-100 text-right">
                        <a href="#" className="text-sm text-blue-600 flex items-center justify-end">
                          <span className="mr-1">View Details</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Google Keyword Performance</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click-Through Rate</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Eufy Stationery</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">125K</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">4.8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">7.2%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">$28K</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">affordable stationery</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">95K</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3.9%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">6.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">$22K</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">cute desk accessories</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">85K</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">4.2%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">5.8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">$19K</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">school supplies cheap</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">75K</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">4.9%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">$17K</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Facebook Ads Content */}
              {activeSubTab === 'facebook' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">News Feed Ads</h4>
                        <div className="p-1 bg-green-100 rounded text-green-600 text-xs">Main Channel</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Impressions (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.facebook[0].impressions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Clicks (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.facebook[0].clicks}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Conversions (K)</p>
                          <p className="text-lg font-bold">{platformPerformance.facebook[0].conversions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Advertising Cost (K)</p>
                          <p className="text-lg font-bold">${platformPerformance.facebook[0].cost}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">Story Ads</h4>
                        <div className="p-1 bg-blue-100 rounded text-blue-600 text-xs">Supporting Channel</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Impressions (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.facebook[1].impressions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Clicks (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.facebook[1].clicks}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Conversions (K)</p>
                          <p className="text-lg font-bold">{platformPerformance.facebook[1].conversions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Advertising Cost (K)</p>
                          <p className="text-lg font-bold">${platformPerformance.facebook[1].cost}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-3">Facebook Ads Optimization Suggestions</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Increase the proportion of video creative in news feed ads</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Optimize audience targeting to focus on student and housewife groups</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Increase interactive elements in story ads to improve engagement</span>
                        </li>
                      </ul>
                      <div className="mt-3 pt-3 border-t border-blue-100 text-right">
                        <a href="#" className="text-sm text-blue-600 flex items-center justify-end">
                          <span className="mr-1">View Details</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Facebook Audience Performance</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audience Group</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coverage</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click-Through Rate</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Acquisition Cost</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Student Group (16-22 years)</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3.8M</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3.2%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">6.8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">$4.2</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Young Professionals (23-30 years)</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">2.5M</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">2.8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">5.2%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">$5.6</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Housewives (25-45 years)</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">1.8M</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">7.2%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">$3.8</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Interest-Based (Stationery Enthusiasts)</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">1.2M</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">4.1%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">8.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">$3.2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Amazon Ads Content */}
              {activeSubTab === 'amazon' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">Sponsored Products</h4>
                        <div className="p-1 bg-green-100 rounded text-green-600 text-xs">Main Channel</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Impressions (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.amazon[0].impressions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Clicks (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.amazon[0].clicks}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Conversions (K)</p>
                          <p className="text-lg font-bold">{platformPerformance.amazon[0].conversions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Advertising Cost (K)</p>
                          <p className="text-lg font-bold">${platformPerformance.amazon[0].cost}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">Sponsored Brands</h4>
                        <div className="p-1 bg-blue-100 rounded text-blue-600 text-xs">Supporting Channel</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Impressions (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.amazon[1].impressions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Clicks (M)</p>
                          <p className="text-lg font-bold">{platformPerformance.amazon[1].clicks}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Conversions (K)</p>
                          <p className="text-lg font-bold">{platformPerformance.amazon[1].conversions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Advertising Cost (K)</p>
                          <p className="text-lg font-bold">${platformPerformance.amazon[1].cost}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-3">Amazon Ads Optimization Suggestions</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-yellow-600">•</div>
                          <span>Increase the weight of "Disney-Marvel" series in Sponsored Products</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-yellow-600">•</div>
                          <span>Optimize product detail pages to improve conversion rate</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-yellow-600">•</div>
                          <span>Increase targeting for competitor search terms</span>
                        </li>
                      </ul>
                      <div className="mt-3 pt-3 border-t border-yellow-100 text-right">
                        <a href="#" className="text-sm text-yellow-600 flex items-center justify-end">
                          <span className="mr-1">View Details</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Amazon Product Performance</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click-Through Rate</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACOS</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Disney-Marvel Stationery Set</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">1.2M</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">4.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">8.2%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">12.5%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Multi-Function Desktop Organizer</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">850K</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3.8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">7.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">14.2%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Animal-Shaped Portable Charger</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">620K</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">6.8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">15.5%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Nordic-Style Bedside Lamp</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">580K</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3.2%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">6.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">16.8%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* 产品销售表现标签页 */}
      {/* Product sales performance tab */}
      {activeTab === 'product' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Category Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={productCategoryPerformance}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Bar name="Sales ($)" dataKey="sales" fill="#FF6B8A" radius={[4, 4, 0, 0]} />
                <Bar name="Advertising Spend ($)" dataKey="adSpend" fill="#36C7D0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Product Category ROI</h3>
                <div className="text-xs text-gray-500">Updated 1 hour ago</div>
              </div>
              <div className="space-y-3">
                {productCategoryPerformance.map((category, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm">{category.roi}x</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          category.roi > 3.5 ? 'bg-green-500' : 
                          category.roi > 3.3 ? 'bg-blue-500' : 
                          'bg-yellow-500'
                        }`} 
                        style={{ width: `${(category.roi / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Product Optimization Suggestions</h3>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Efficient Product Promotion</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-green-500">•</div>
                      <span>Disney-Marvel Series products have high ROI, recommend increasing promotional budget</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-green-500">•</div>
                      <span>Stationery category search volume is high, recommend strengthening TikTok and Google advertising</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Products Need Improvement</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-yellow-500">•</div>
                      <span>Toy series ROI is relatively low, recommend optimizing product pricing and advertising creativity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-yellow-500">•</div>
                      <span>Digital accessories need to strengthen product differentiation and highlight design advantages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Best-Selling Product Performance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{product.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.sales}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.conversion}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.roi}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedsDashboard;