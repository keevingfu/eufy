import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Search, Calendar, Filter, Download, TrendingUp, TrendingDown, Globe, Users, Inbox, ExternalLink, MessageCircle, Edit, Trash, ChevronRight, Eye, Heart, MessageSquare, Share2, Mail, ShoppingBag, DollarSign } from 'lucide-react';

const PrivateDomainDashboard = () => {
  const [activeTab, setActiveTab] = useState('landing');
  const [activeSubTab, setActiveSubTab] = useState('content');
  const [dateRange, setDateRange] = useState('month');
  
  // Landing Page Performance Data
  const landingPageStats = {
    views: '1.25M',
    uniqueVisitors: '685K',
    avgTimeOnPage: '2:45',
    bounceRate: '38.5%',
    conversionRate: '5.2%',
    contentEngagement: '62.3%',
    trafficSources: {
      social: 45,
      search: 28,
      direct: 15,
      referral: 8,
      email: 4
    }
  };

  const landingPagePerformance = [
    { month: 'Jan', views: 85000, visitors: 52000, conversions: 2860 },
    { month: 'Feb', views: 92000, visitors: 56000, conversions: 3080 },
    { month: 'Mar', views: 105000, visitors: 64000, conversions: 3520 },
    { month: 'Apr', views: 120000, visitors: 72000, conversions: 3960 },
    { month: 'May', views: 145000, visitors: 87000, conversions: 4785 },
    { month: 'Jun', views: 165000, visitors: 95000, conversions: 5225 },
    { month: 'Jul', views: 185000, visitors: 105000, conversions: 5775 },
    { month: 'Aug', views: 205000, visitors: 118000, conversions: 6490 },
    { month: 'Sep', views: 225000, visitors: 128000, conversions: 7040 },
    { month: 'Oct', views: 235000, visitors: 135000, conversions: 7425 },
  ];

  const landingPageTags = [
    { id: 1, name: 'School Life', views: 285000, clicks: 42000, conversion: '6.8%', engagement: '72.5%' },
    { id: 2, name: 'Holiday Gifts', views: 245000, clicks: 38000, conversion: '7.2%', engagement: '68.3%' },
    { id: 3, name: 'Home Decor', views: 210000, clicks: 32000, conversion: '6.5%', engagement: '64.8%' },
    { id: 4, name: 'Disney Collection', views: 320000, clicks: 58000, conversion: '8.2%', engagement: '76.4%' },
    { id: 5, name: 'Student Essentials', views: 265000, clicks: 45000, conversion: '7.5%', engagement: '70.2%' },
  ];

  // Private Channels Data
  const privateChannelOverview = {
    totalMembers: '625K',
    activeMembers: '385K',
    growthRate: '+22.5%',
    engagementRate: '38.2%',
    conversionRate: '8.5%',
    averageOrder: '$42.8',
    channels: {
      whatsApp: 35,
      facebookGroup: 28,
      linkedin: 22,
      email: 15
    }
  };

  const channelPerformance = [
    { name: 'WhatsApp', members: 218000, engagement: 42, conversion: 9.8 },
    { name: 'Facebook Group', members: 175000, engagement: 38, conversion: 8.5 },
    { name: 'LinkedIn', members: 137000, engagement: 32, conversion: 7.2 },
    { name: 'Email', members: 95000, engagement: 28, conversion: 7.8 },
  ];

  const whatsAppPerformance = [
    { month: 'Jan', subscribers: 125000, messages: 3200, clicks: 1850, orders: 520 },
    { month: 'Feb', subscribers: 138000, messages: 3600, clicks: 2100, orders: 580 },
    { month: 'Mar', subscribers: 152000, messages: 4200, clicks: 2450, orders: 680 },
    { month: 'Apr', subscribers: 168000, messages: 4600, clicks: 2700, orders: 750 },
    { month: 'May', subscribers: 185000, messages: 5200, clicks: 3050, orders: 840 },
    { month: 'Jun', subscribers: 195000, messages: 5800, clicks: 3400, orders: 950 },
    { month: 'Jul', subscribers: 208000, messages: 6300, clicks: 3700, orders: 1050 },
    { month: 'Aug', subscribers: 218000, messages: 6800, clicks: 4000, orders: 1120 },
  ];

  // DTC Website Data
  const dtcWebsiteStats = {
    totalTraffic: '1.85M',
    organicTraffic: '680K',
    directTraffic: '420K',
    referralTraffic: '285K',
    socialTraffic: '465K',
    conversionRate: '4.8%',
    averageOrderValue: '$48.5',
    cartAbandonmentRate: '68.2%'
  };

  const trafficSourcesData = [
    { name: 'Organic', value: 37 },
    { name: 'Direct', value: 23 },
    { name: 'Referral', value: 15 },
    { name: 'Social', value: 25 },
  ];

  const websitePerformanceData = [
    { month: 'Jan', traffic: 145000, orders: 6960, revenue: 337560 },
    { month: 'Feb', traffic: 158000, orders: 7584, revenue: 367824 },
    { month: 'Mar', traffic: 175000, orders: 8400, revenue: 407400 },
    { month: 'Apr', traffic: 195000, orders: 9360, revenue: 453960 },
    { month: 'May', traffic: 215000, orders: 10320, revenue: 500520 },
    { month: 'Jun', traffic: 228000, orders: 10944, revenue: 530784 },
    { month: 'Jul', traffic: 245000, orders: 11760, revenue: 570360 },
    { month: 'Aug', traffic: 260000, orders: 12480, revenue: 605280 },
    { month: 'Sep', traffic: 275000, orders: 13200, revenue: 640200 },
  ];

  const COLORS = ['#2563eb', '#FF6B8A', '#FFBE3D', '#8676FF', '#4CAF50', '#FF7043'];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title and Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Private Domain</h1>
          <p className="text-gray-600">Content-Empowered Private Domain Operations</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search content, channels..." 
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
      
      {/* Main Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'landing'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('landing')}
            >
              Landing Page Effect
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'channels'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('channels')}
            >
              Private Channels (SCRM)
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'dtc'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('dtc')}
            >
              DTC Website Traffic
            </button>
          </nav>
        </div>
      </div>
      
      {/* Landing Page Effect Tab */}
      {activeTab === 'landing' && (
        <div>
          {/* Sub-tabs for Landing Page */}
          <div className="mb-6 bg-white rounded-lg shadow">
            <div className="px-4 border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeSubTab === 'content'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveSubTab('content')}
                >
                  Landing Page Content
                </button>
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeSubTab === 'tags'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveSubTab('tags')}
                >
                  Landing Page Tags
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              {/* Landing Page Content */}
              {activeSubTab === 'content' && (
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm text-gray-500">Page Views</p>
                        <Eye size={18} className="text-blue-500" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800">{landingPageStats.views}</p>
                      <div className="mt-4 flex items-center">
                        <TrendingUp size={16} className="text-green-500 mr-1" />
                        <span className="text-green-500 text-sm">+18.3% vs last period</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm text-gray-500">Bounce Rate</p>
                        <TrendingDown size={18} className="text-green-500" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800">{landingPageStats.bounceRate}</p>
                      <div className="mt-4 flex items-center">
                        <TrendingDown size={16} className="text-green-500 mr-1" />
                        <span className="text-green-500 text-sm">-2.5% vs last period</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm text-gray-500">Conversion Rate</p>
                        <TrendingUp size={18} className="text-green-500" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800">{landingPageStats.conversionRate}</p>
                      <div className="mt-4 flex items-center">
                        <TrendingUp size={16} className="text-green-500 mr-1" />
                        <span className="text-green-500 text-sm">+0.8% vs last period</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm text-gray-500">Avg. Time on Page</p>
                        <TrendingUp size={18} className="text-blue-500" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800">{landingPageStats.avgTimeOnPage}</p>
                      <div className="mt-4 flex items-center">
                        <TrendingUp size={16} className="text-green-500 mr-1" />
                        <span className="text-green-500 text-sm">+0:18 vs last period</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Landing Page Performance Trend</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={landingPagePerformance}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" name="Page Views" dataKey="views" stroke="#2563eb" activeDot={{ r: 8 }} strokeWidth={2} />
                        <Line type="monotone" name="Unique Visitors" dataKey="visitors" stroke="#36C7D0" strokeWidth={2} />
                        <Line type="monotone" name="Conversions" dataKey="conversions" stroke="#FFBE3D" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Traffic Sources</h3>
                      <div className="flex items-center">
                        <div className="flex-1">
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Pie
                                data={[
                                  { name: 'Social', value: landingPageStats.trafficSources.social },
                                  { name: 'Search', value: landingPageStats.trafficSources.search },
                                  { name: 'Direct', value: landingPageStats.trafficSources.direct },
                                  { name: 'Referral', value: landingPageStats.trafficSources.referral },
                                  { name: 'Email', value: landingPageStats.trafficSources.email },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {Object.keys(landingPageStats.trafficSources).map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip formatter={(value) => `${value}%`} />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="space-y-3">
                          {Object.entries(landingPageStats.trafficSources).map(([key, value], index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                              <span className="text-sm capitalize">{key} ({value}%)</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Content Engagement</h3>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <span className="text-3xl font-bold text-gray-800">{landingPageStats.contentEngagement}</span>
                          <span className="text-sm text-gray-500 ml-2">Engagement Rate</span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp size={16} className="text-green-500 mr-1" />
                          <span className="text-green-500 text-sm">+5.8% vs last period</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Video Content</span>
                            <span className="text-sm">78.5%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78.5%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Image Galleries</span>
                            <span className="text-sm">65.2%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65.2%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Product Descriptions</span>
                            <span className="text-sm">52.8%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '52.8%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">User Reviews</span>
                            <span className="text-sm">72.3%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '72.3%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Optimization Suggestions</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Increase video content for Disney Collection products to boost engagement</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Optimize heading structure on Back to School themed pages</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Add more user testimonials to Home Decor sections</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mt-0.5 mr-2 text-blue-500">•</div>
                          <span>Create more localized campus life scenarios for US audiences</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Top Performing Content</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-blue-600 font-bold">1</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Disney Collection Video Tour</p>
                            <p className="text-xs text-gray-500">8.5K shares • 92.5K views</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-blue-600 font-bold">2</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Back to School Essentials Guide</p>
                            <p className="text-xs text-gray-500">6.8K shares • 85.2K views</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-yellow-600 font-bold">3</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Dorm Room Transformation</p>
                            <p className="text-xs text-gray-500">5.2K shares • 78.6K views</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Conversion Funnel</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Landing Page Views</span>
                            <span className="text-sm">100%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Product Page Views</span>
                            <span className="text-sm">58.2%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '58.2%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Add to Cart</span>
                            <span className="text-sm">12.5%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '12.5%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Checkout Started</span>
                            <span className="text-sm">8.4%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '8.4%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Purchases</span>
                            <span className="text-sm">5.2%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '5.2%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Landing Page Tags */}
              {activeSubTab === 'tags' && (
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-800">Tag Performance</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {landingPageTags.map((tag) => (
                            <tr key={tag.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{tag.name}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tag.views.toLocaleString()}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tag.clicks.toLocaleString()}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tag.conversion}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tag.engagement}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900">Details</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Tag Combination Analysis</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-gray-800 mb-2">High-Performance Combinations</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <div className="mt-0.5 mr-2 text-blue-500">•</div>
                              <div>
                                <p className="font-medium">Disney Collection + Student Essentials</p>
                                <p className="text-gray-600">Conversion Rate: 8.8%</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div className="mt-0.5 mr-2 text-blue-500">•</div>
                              <div>
                                <p className="font-medium">School Life + Holiday Gifts</p>
                                <p className="text-gray-600">Conversion Rate: 7.5%</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div className="mt-0.5 mr-2 text-blue-500">•</div>
                              <div>
                                <p className="font-medium">Home Decor + Student Essentials</p>
                                <p className="text-gray-600">Conversion Rate: 7.2%</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-gray-800 mb-2">Content Enhancement Suggestions</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <div className="mt-0.5 mr-2 text-green-500">•</div>
                              <span>Add more video content to "School Life" tag pages</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mt-0.5 mr-2 text-green-500">•</div>
                              <span>Increase user testimonials for "Home Decor" products</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mt-0.5 mr-2 text-green-500">•</div>
                              <span>Create holiday bundle suggestions for "Holiday Gifts" tag</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Tag Traffic Sources</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Disney Collection</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Social Media</span>
                                <span>62%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Search</span>
                                <span>25%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Other</span>
                                <span>13%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '13%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Student Essentials</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Search</span>
                                <span>45%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Social Media</span>
                                <span>32%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Other</span>
                                <span>23%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Tag Optimization Strategy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-3">Content Strategy</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Create more scenario-based content for School Life tag</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Develop seasonal campaigns for Holiday Gifts category</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Enhance Disney Collection with more character-specific content</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-3">UX Improvements</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Improve tag navigation on mobile devices</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Add filter options for tag-based product browsing</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Implement tag-based product recommendations</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-3">SEO Optimization</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Optimize meta descriptions for tag-based pages</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Create dedicated tag landing pages for top keywords</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Improve schema markup for better search visibility</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Private Channels Tab */}
      {activeTab === 'channels' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Total Members</p>
                <Users size={18} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{privateChannelOverview.totalMembers}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">{privateChannelOverview.growthRate} vs last period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Engagement Rate</p>
                <Heart size={18} className="text-red-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{privateChannelOverview.engagementRate}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+3.5% vs last period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Conversion Rate</p>
                <ShoppingBag size={18} className="text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{privateChannelOverview.conversionRate}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+1.2% vs last period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Avg. Order Value</p>
                <DollarSign size={18} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{privateChannelOverview.averageOrder}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+$3.2 vs last period</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Channel Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={channelPerformance}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" name="Members" dataKey="members" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" name="Engagement Rate (%)" dataKey="engagement" fill="#36C7D0" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" name="Conversion Rate (%)" dataKey="conversion" fill="#FFBE3D" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Channel Distribution</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'WhatsApp', value: privateChannelOverview.channels.whatsApp },
                        { name: 'Facebook Group', value: privateChannelOverview.channels.facebookGroup },
                        { name: 'LinkedIn', value: privateChannelOverview.channels.linkedin },
                        { name: 'Email', value: privateChannelOverview.channels.email },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {Object.keys(privateChannelOverview.channels).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3 mt-4">
                {Object.entries(privateChannelOverview.channels).map(([key, value], index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()} ({value}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">WhatsApp Channel Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={whatsAppPerformance}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="Subscribers" dataKey="subscribers" stroke="#2563eb" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" name="Messages" dataKey="messages" stroke="#36C7D0" strokeWidth={2} />
                <Line type="monotone" name="Clicks" dataKey="clicks" stroke="#FFBE3D" strokeWidth={2} />
                <Line type="monotone" name="Orders" dataKey="orders" stroke="#8676FF" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Content Performance by Channel</h3>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">WhatsApp</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Product Announcements</span>
                        <span>82%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Limited Offers</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Usage Tips</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Facebook Groups</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>User Generated Content</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Community Events</span>
                        <span>72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Product Tips</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Member Activity</h3>
              <div className="flex items-center mb-4">
                <div className="w-full">
                  <ResponsiveContainer width="100%" height={150}>
                    <AreaChart data={[
                      { time: '00:00', active: 5 },
                      { time: '03:00', active: 3 },
                      { time: '06:00', active: 8 },
                      { time: '09:00', active: 25 },
                      { time: '12:00', active: 35 },
                      { time: '15:00', active: 42 },
                      { time: '18:00', active: 58 },
                      { time: '21:00', active: 32 },
                      { time: '23:59', active: 15 },
                    ]}>
                      <XAxis dataKey="time" axisLine={false} tickLine={false} />
                      <YAxis hide={true} />
                      <Tooltip />
                      <Area type="monotone" dataKey="active" stroke="#2563eb" fill="#2563eb" fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Peak Activity Hours</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-blue-50 rounded">
                    <div className="text-sm font-medium">18:00 - 20:00</div>
                    <div className="text-xs text-gray-500">Weekdays</div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <div className="text-sm font-medium">13:00 - 16:00</div>
                    <div className="text-xs text-gray-500">Weekends</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Channel Strategy</h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Priority Actions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Increase WhatsApp product announcements frequency</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Develop more interactive content for Facebook Groups</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Improve email delivery timing based on engagement data</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MessageCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-sm font-medium">New WhatsApp automation flow ready</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-blue-500 mr-2" />
                    <span className="text-sm font-medium">Facebook Group moderation tools updated</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="text-purple-500 mr-2" />
                    <span className="text-sm font-medium">Email templates redesigned for mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Messages</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">Disney Collection Flash Sale 🔥</div>
                      <div className="text-sm text-gray-500">24-hour exclusive discount</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">WhatsApp</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">92.5%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">45.8%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">12.3%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-900">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-red-600 hover:text-red-900">
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">Back to School Essentials Guide</div>
                      <div className="text-sm text-gray-500">Complete shopping checklist</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Facebook Group</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">88.2%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">42.5%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">10.8%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-900">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-red-600 hover:text-red-900">
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">Dorm Room Transformation Challenge</div>
                      <div className="text-sm text-gray-500">Share your before and after</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Email</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">78.5%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">38.2%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">9.5%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-900">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-red-600 hover:text-red-900">
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {/* DTC Website Traffic Tab */}
      {activeTab === 'dtc' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Total Traffic</p>
                <Globe size={18} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{dtcWebsiteStats.totalTraffic}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+12.5% vs last period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Conversion Rate</p>
                <TrendingUp size={18} className="text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{dtcWebsiteStats.conversionRate}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+0.6% vs last period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Average Order Value</p>
                <DollarSign size={18} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{dtcWebsiteStats.averageOrderValue}</p>
              <div className="mt-4 flex items-center">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+$2.8 vs last period</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Cart Abandonment</p>
                <TrendingDown size={18} className="text-red-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{dtcWebsiteStats.cartAbandonmentRate}</p>
              <div className="mt-4 flex items-center">
                <TrendingDown size={16} className="text-green-500 mr-1" />
                <span className="text-green-500 text-sm">-2.3% vs last period</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Website Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={websitePerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" name="Traffic" dataKey="traffic" stroke="#2563eb" activeDot={{ r: 8 }} strokeWidth={2} />
                  <Line yAxisId="left" type="monotone" name="Orders" dataKey="orders" stroke="#36C7D0" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" name="Revenue ($)" dataKey="revenue" stroke="#FFBE3D" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic Sources</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={trafficSourcesData}
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
                      {trafficSourcesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[0] }}></div>
                    <span className="text-sm">Organic</span>
                  </div>
                  <span className="text-sm font-medium">+8.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[3] }}></div>
                    <span className="text-sm">Social</span>
                  </div>
                  <span className="text-sm font-medium">+15.5%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Content Engagement</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium text-sm">Top Landing Pages</h4>
                    <span className="text-xs text-gray-500">Engagement</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-xs">1</span>
                        </div>
                        <span className="text-sm">Disney Collection</span>
                      </div>
                      <div className="text-sm font-medium">82.5%</div>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-xs">2</span>
                        </div>
                        <span className="text-sm">School Essentials</span>
                      </div>
                      <div className="text-sm font-medium">78.2%</div>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-yellow-600 font-bold text-xs">3</span>
                        </div>
                        <span className="text-sm">Dorm Room Decor</span>
                      </div>
                      <div className="text-sm font-medium">75.8%</div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium text-sm">Top Exit Pages</h4>
                    <span className="text-xs text-gray-500">Exit Rate</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-red-600 font-bold text-xs">1</span>
                        </div>
                        <span className="text-sm">Shopping Cart</span>
                      </div>
                      <div className="text-sm font-medium">22.5%</div>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-red-600 font-bold text-xs">2</span>
                        </div>
                        <span className="text-sm">Shipping Info</span>
                      </div>
                      <div className="text-sm font-medium">18.2%</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Device & Platform</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-3">Device Distribution</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Mobile</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Desktop</span>
                        <span>24%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Tablet</span>
                        <span>8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium mb-3">Platform Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">iOS</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">5.2%</span>
                        <div className="text-xs px-1.5 py-0.5 bg-green-100 text-green-800 rounded">+0.8%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Android</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">4.8%</span>
                        <div className="text-xs px-1.5 py-0.5 bg-green-100 text-green-800 rounded">+0.5%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Desktop</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">3.9%</span>
                        <div className="text-xs px-1.5 py-0.5 bg-red-100 text-red-800 rounded">-0.2%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Optimization Strategy</h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Priority Improvements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Optimize checkout process to reduce cart abandonment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Improve mobile page load speed by 25%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Enhance product recommendations algorithm</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Content Enhancement</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Add more video content to top product pages</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Create category-specific landing pages for SEO</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-2 text-blue-500">•</div>
                      <span>Improve user-generated content display</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic-to-Conversion Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={[
                      { source: 'Social Content', traffic: 465000, conversion: 5.2 },
                      { source: 'Organic Search', traffic: 680000, conversion: 4.8 },
                      { source: 'Paid Advertising', traffic: 325000, conversion: 6.5 },
                      { source: 'Email Marketing', traffic: 180000, conversion: 7.2 },
                      { source: 'Direct', traffic: 200000, conversion: 3.8 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="source" axisLine={false} tickLine={false} />
                    <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" name="Traffic Volume" dataKey="traffic" fill="#36C7D0" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="right" name="Conversion Rate (%)" dataKey="conversion" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Key Insights</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-blue-500">•</div>
                    <span>Email marketing delivers highest conversion rate but lowest volume</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-blue-500">•</div>
                    <span>Social content drives significant traffic with good conversion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-blue-500">•</div>
                    <span>Direct traffic shows lowest conversion rate - needs investigation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-blue-500">•</div>
                    <span>Paid advertising delivers high value but higher acquisition cost</span>
                  </li>
                </ul>
                
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium text-gray-800 mb-2">Recommendations</h4>
                  <p className="text-sm text-gray-600">Increase email marketing campaigns while optimizing direct traffic experience. Scale social content for best balance of volume and conversion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateDomainDashboard;