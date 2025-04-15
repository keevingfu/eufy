import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Treemap } from 'recharts';
import { Search, Filter, Download, ArrowUp, ArrowDown, ChevronDown, ChevronRight, Zap, TrendingUp, AlertTriangle, ThumbsUp } from 'lucide-react';

const InsightDashboard = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [activeSubTab, setActiveSubTab] = useState('overview');

  // Search insights data
  const searchTrendData = [
    { month: 'Jan', Eufy: 45000, competitors: 38000 },
    { month: 'Feb', Eufy: 48000, competitors: 39500 },
    { month: 'Mar', Eufy: 52000, competitors: 40000 },
    { month: 'Apr', Eufy: 60000, competitors: 42000 },
    { month: 'May', Eufy: 65000, competitors: 43500 },
    { month: 'Jun', Eufy: 72000, competitors: 45000 },
    { month: 'Jul', Eufy: 78000, competitors: 46000 },
    { month: 'Aug', Eufy: 82000, competitors: 48000 },
    { month: 'Sep', Eufy: 88000, competitors: 50000 },
    { month: 'Oct', Eufy: 95000, competitors: 52000 },
  ];

  const topKeywords = [
    { keyword: 'Eufy stationery', volume: 28500, growth: '+18%', difficulty: 45 },
    { keyword: 'Eufy toys', volume: 26200, growth: '+22%', difficulty: 52 },
    { keyword: 'Eufy backpacks', volume: 22800, growth: '+15%', difficulty: 38 },
    { keyword: 'Eufy gifts', volume: 21500, growth: '+24%', difficulty: 41 },
    { keyword: 'Eufy beauty', volume: 19800, growth: '+12%', difficulty: 60 },
    { keyword: 'Eufy home', volume: 17600, growth: '+8%', difficulty: 47 },
  ];

  const keywordOpportunities = [
    { keyword: 'affordable stationery sets', volume: 12500, growth: '+28%', difficulty: 25, relevance: 85 },
    { keyword: 'cute desk accessories', volume: 18200, growth: '+32%', difficulty: 30, relevance: 90 },
    { keyword: 'back to school supplies affordable', volume: 15800, growth: '+45%', difficulty: 35, relevance: 80 },
    { keyword: 'budget friendly room decor', volume: 14200, growth: '+22%', difficulty: 28, relevance: 75 },
    { keyword: 'anime merchandise store', volume: 22500, growth: '+35%', difficulty: 42, relevance: 70 },
  ];

  // VOC insights data
  const sentimentData = [
    { name: 'product quality', positive: 75, neutral: 15, negative: 10 },
    { name: 'price', positive: 82, neutral: 12, negative: 6 },
    { name: 'design', positive: 88, neutral: 8, negative: 4 },
    { name: 'store experience', positive: 70, neutral: 20, negative: 10 },
    { name: 'customer service', positive: 65, neutral: 25, negative: 10 },
  ];

  const commentThemes = [
    { name: 'high value', value: 28 },
    { name: 'cute design', value: 22 },
    { name: 'average quality', value: 12 },
    { name: 'variety selection', value: 18 },
    { name: 'beautiful packaging', value: 15 },
    { name: 'good store environment', value: 5 },
  ];

  const userFeedback = [
    { id: 1, platform: 'TikTok', comment: 'This store\'s stationery is so cute, I can\'t help but buy a lot every time! The price is also very affordable, perfect for students. ', sentiment: 'positive', likes: 2458 },
    { id: 2, platform: 'Instagram', comment: 'I recently bought a few small toys from Eufy, and I love the design and the price is very affordable. The only problem is that some products have unstable quality. ', sentiment: 'neutral', likes: 1256 },
    { id: 3, platform: 'YouTube', comment: 'I love Eufy\'s style, but I hope there will be more products that meet the taste of Americans. Some things feel too Asianized to me. ', sentiment: 'neutral', likes: 876 },
    { id: 4, platform: 'Facebook', comment: 'Eufy\'s holiday theme series is amazing! I bought all the decorations for Halloween, and my friends all love it! ', sentiment: 'positive', likes: 1853 },
  ];

  // Viral video insights data
  const viralVideos = [
    { title: '10 Must-Buy Eufy Stationery for Back to School', views: 4800000, engagement: '8.5%', conversion: '3.2%', platform: 'TikTok' },
    { title: 'Eufy Christmas New Product Full Secret', views: 3700000, engagement: '7.8%', conversion: '2.9%', platform: 'Instagram' },
    { title: 'Eufy Only $25 Can Buy So Many Good Things?', views: 5200000, engagement: '9.2%', conversion: '3.8%', platform: 'TikTok' },
    { title: 'Eufy New Disney-themed Series Unboxing', views: 2900000, engagement: '6.5%', conversion: '2.5%', platform: 'YouTube' },
    { title: 'Dorm Decoration Magic! Eufy Home Goods Sharing', views: 3500000, engagement: '7.2%', conversion: '2.8%', platform: 'TikTok' },
  ];

  const contentPerformance = [
    { format: 'unboxing video', avgViews: 2800000, engagement: 7.2, conversion: 2.5 },
    { format: 'shopping sharing', avgViews: 3500000, engagement: 8.1, conversion: 3.2 },
    { format: 'product review', avgViews: 2200000, engagement: 6.8, conversion: 2.3 },
    { format: 'usage tutorial', avgViews: 1800000, engagement: 5.9, conversion: 1.8 },
    { format: 'creative play', avgViews: 4200000, engagement: 9.5, conversion: 3.8 },
  ];

  const audienceResponse = {
    categories: ['attraction', 'information', 'entertainment', 'trust', 'relevance', 'call to action'],
    data: [
      { subject: 'viral video', attraction: 9.2, information: 7.5, entertainment: 8.8, trust: 7.2, relevance: 8.5, "call to action": 8.9 },
      { subject: 'normal video', attraction: 6.8, information: 6.5, entertainment: 6.2, trust: 6.9, relevance: 6.5, "call to action": 6.1 },
    ],
  };

  // Viral factor data
  const viralFactors = [
    { name: 'product highlight', value: 25 },
    { name: 'emotional connection', value: 22 },
    { name: 'practical value', value: 18 },
    { name: 'creative fun', value: 15 },
    { name: 'visual impact', value: 12 },
    { name: 'narrative structure', value: 8 },
  ];

  const contentElements = [
    { name: 'new product unboxing', value: 850, category: 'Format' },
    { name: 'deep review', value: 650, category: 'Format' },
    { name: 'practical tutorial', value: 580, category: 'Format' },
    { name: 'background music', value: 480, category: 'Element' },
    { name: 'product close-up', value: 780, category: 'Element' },
    { name: 'real person appearance', value: 620, category: 'Element' },
    { name: 'atmosphere creation', value: 520, category: 'Element' },
    { name: 'humor element', value: 580, category: 'Tone' },
    { name: 'emotional resonance', value: 620, category: 'Tone' },
    { name: 'professional explanation', value: 480, category: 'Tone' },
    { name: 'campus scene', value: 720, category: 'Scene' },
    { name: 'home scene', value: 680, category: 'Scene' },
    { name: 'festival scene', value: 580, category: 'Scene' },
  ];

  const propagationModel = [
    { day: 'Day 1', views: 150000, shares: 12000, comments: 8500 },
    { day: 'Day 2', views: 480000, shares: 32000, comments: 22000 },
    { day: 'Day 3', views: 1200000, shares: 85000, comments: 58000 },
    { day: 'Day 4', views: 2500000, shares: 180000, comments: 120000 },
    { day: 'Day 5', views: 3800000, shares: 260000, comments: 185000 },
    { day: 'Day 6', views: 4600000, shares: 310000, comments: 220000 },
    { day: 'Day 7', views: 5100000, shares: 340000, comments: 245000 },
  ];

  const COLORS = ['#2563eb', '#36C7D0', '#FFBE3D', '#8676FF', '#4CAF50', '#FF7043'];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page title and toolbar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Insight</h1>
          <p className="text-gray-600">Discover Content Trends and Opportunities</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search keyword..." 
              className="py-2 px-4 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
            />
            <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <button className="p-2 bg-white border rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
            <Filter size={18} />
          </button>
          
          <button className="p-2 bg-white border rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
            <Download size={18} />
          </button>
        </div>
      </div>
      
      {/* Main tab page */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'search'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('search'); setActiveSubTab('overview');}}
            >
              Search Insight
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'voc'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('voc'); setActiveSubTab('overview');}}
            >
              VOC Insight
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'viral'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('viral'); setActiveSubTab('overview');}}
            >
              Viral Video Insight
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'factors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('factors'); setActiveSubTab('overview');}}
            >
              Viral Factor
            </button>
          </nav>
        </div>
      </div>
      
      {/* Search insights tab page content */}
      {activeTab === 'search' && (
        <>
          {/* Sub tab page */}
          <div className="mb-6 bg-white rounded-lg shadow">
            <div className="px-4 border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeSubTab === 'overview'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveSubTab('overview')}
                >
                  Search Trend Overview
                </button>
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeSubTab === 'keywords'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveSubTab('keywords')}
                >
                  Keyword Analysis
                </button>
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeSubTab === 'opportunities'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveSubTab('opportunities')}
                >
                  Search Opportunities
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              {/* Search trend overview content */}
              {activeSubTab === 'overview' && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Eufy Search Trend</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={searchTrendData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" name="Eufy" dataKey="Eufy" stroke="#2563eb" activeDot={{ r: 8 }} strokeWidth={2} />
                        <Line type="monotone" name="Main Competitors" dataKey="competitors" stroke="#8676FF" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-medium text-gray-700">Total Search Volume</h4>
                        <span className="text-green-500 flex items-center text-sm">
                          <ArrowUp size={14} className="mr-1" /> 24.8%
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-800">685,240</p>
                      <p className="text-sm text-gray-500 mt-1">Past 30 Days</p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-medium text-gray-700">Click Rate</h4>
                        <span className="text-green-500 flex items-center text-sm">
                          <ArrowUp size={14} className="mr-1" /> 8.3%
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-800">18.6%</p>
                      <p className="text-sm text-gray-500 mt-1">Industry Average: 12.4%</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-medium text-gray-700">Popular Search Platform</h4>
                        <span className="text-sm text-gray-500">Percentage</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Google</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Amazon</span>
                        <span className="text-sm font-medium">22%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Others</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Keyword analysis content */}
              {activeSubTab === 'keywords' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Search Keywords</h3>
                  
                  <div className="bg-white rounded-lg shadow-sm border mb-6">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Search Volume</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth Rate</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competition Difficulty</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {topKeywords.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{item.keyword}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.volume.toLocaleString()}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-green-500">{item.growth}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      item.difficulty < 30 ? 'bg-green-500' : 
                                      item.difficulty < 60 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`} 
                                    style={{ width: `${item.difficulty}%` }}
                                  ></div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900">Details</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-800 mb-4">Keyword Insights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 border">
                        <div className="flex items-center mb-2">
                          <TrendingUp size={16} className="text-green-500 mr-2" />
                          <span className="font-medium">Categories with Fast Growth</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Stationery</span>
                            <span className="text-sm text-green-500">+32%</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">IP Collaboration Series</span>
                            <span className="text-sm text-green-500">+28%</span>
                          </li>
                          <li className="flex justify-between items-center">
                            <span className="text-sm">Home Decor</span>
                            <span className="text-sm text-green-500">+25%</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border">
                        <div className="flex items-center mb-2">
                          <Zap size={16} className="text-yellow-500 mr-2" />
                          <span className="font-medium">Search Intent Distribution</span>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Transactional</span>
                              <span className="text-sm">58%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Informational</span>
                              <span className="text-sm">32%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Navigational</span>
                              <span className="text-sm">10%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border">
                        <div className="flex items-center mb-2">
                          <AlertTriangle size={16} className="text-red-500 mr-2" />
                          <span className="font-medium">Competition Warning</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="text-sm flex items-start">
                            <ChevronRight size={14} className="text-gray-400 mt-1 mr-1 flex-shrink-0" />
                            <span>Competitor Focus on "Children's Gift" Keywords</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <ChevronRight size={14} className="text-gray-400 mt-1 mr-1 flex-shrink-0" />
                            <span>"Office Stationery" Category Search Rank Down</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <ChevronRight size={14} className="text-gray-400 mt-1 mr-1 flex-shrink-0" />
                            <span>Campus Theme Product Keyword Competition Intensifies</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Search opportunities content */}
              {activeSubTab === 'opportunities' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Search Opportunities</h3>
                  
                  <div className="mb-6 bg-white rounded-lg shadow border">
                    <div className="px-6 py-4 border-b">
                      <h4 className="font-medium text-gray-800">High Potential Keywords</h4>
                      <p className="text-sm text-gray-600">Low Competition, High Search Volume, High Relevance Keywords</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Search Volume</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth Rate</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competition Difficulty</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Relevance</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {keywordOpportunities.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{item.keyword}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.volume.toLocaleString()}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-green-500">{item.growth}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      item.difficulty < 30 ? 'bg-green-500' : 
                                      item.difficulty < 60 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`} 
                                    style={{ width: `${item.difficulty}%` }}
                                  ></div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${item.relevance}%` }}></div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 mr-3">Adopt</button>
                                <button className="text-gray-600 hover:text-gray-900">Details</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6 border">
                      <h4 className="font-medium text-gray-800 mb-4">Content Opportunities</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-medium text-gray-800 mb-2">Campus Life Content</h5>
                          <p className="text-sm text-gray-600 mb-2">Based on search data, student users have strong demand for dorm decoration and stationery content.</p>
                          <div className="flex items-center text-sm text-blue-600">
                            <ThumbsUp size={14} className="mr-1" />
                            <span>Recommend Creating "Back to School Dorm Transformation" Series Content</span>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-medium text-gray-800 mb-2">Holiday Gift Guide</h5>
                          <p className="text-sm text-gray-600 mb-2">Holiday-related gift search volume surged, with low price sensitivity.</p>
                          <div className="flex items-center text-sm text-blue-600">
                            <ThumbsUp size={14} className="mr-1" />
                            <span>Recommend Creating "Holiday Gift Budget Strategy" Series Content</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow p-6 border">
                      <h4 className="font-medium text-gray-800 mb-4">Search Optimization Suggestions</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                            <ChevronRight size={14} className="text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Optimize Product Description</p>
                            <p className="text-sm text-gray-600">Naturallly integrate popular keywords into product description, especially high-frequency words like "affordable" and "cute".</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                            <ChevronRight size={14} className="text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Create Tail Keywords Page</p>
                            <p className="text-sm text-gray-600">Create a special page for "back to school supplies affordable" and other tail keywords.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                            <ChevronRight size={14} className="text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Adjust PPC Advertising Strategy</p>
                            <p className="text-sm text-gray-600">Tilt budget allocation to high-conversion keywords like "anime merchandise".</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      
      {/* VOC insights tab page content */}
      {activeTab === 'voc' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">User Sentiment Analysis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={sentimentData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 70, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="positive" stackId="a" fill="#4CAF50" />
                    <Bar dataKey="neutral" stackId="a" fill="#FFBE3D" />
                    <Bar dataKey="negative" stackId="a" fill="#2563eb" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-4">Comment Theme Distribution</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={commentThemes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {commentThemes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Popular User Feedback</h3>
              <button className="text-sm text-blue-600 hover:underline">View All</button>
            </div>
            
            <div className="space-y-4">
              {userFeedback.map((item) => (
                <div key={item.id} className={`p-4 rounded-lg border ${
                  item.sentiment === 'positive' ? 'border-green-200 bg-green-50' :
                  item.sentiment === 'negative' ? 'border-red-200 bg-red-50' :
                  'border-yellow-200 bg-yellow-50'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        {item.platform.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-800">{item.platform}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <ThumbsUp size={14} className="mr-1" />
                      <span>{item.likes.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{item.comment}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">User Pain Points Summary</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Insufficient Localization</p>
                    <p className="text-sm text-gray-600">Some users feedback that the design is too Asian, not meeting the aesthetic of American consumers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Inconsistent Quality</p>
                    <p className="text-sm text-gray-600">Some users feedback that the quality of similar products is uneven, with some quality control issues.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Limited Store Distribution</p>
                    <p className="text-sm text-gray-600">Some users feedback that there are fewer physical stores, making it inconvenient to get products.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Improvement Suggestions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Strengthen Localization Design</p>
                    <p className="text-sm text-gray-600">Develop more localized product series for American holidays and campus life.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Improve Product Quality Control</p>
                    <p className="text-sm text-gray-600">Implement a stricter quality control system for products in the American market.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Expand Online Delivery Service</p>
                    <p className="text-sm text-gray-600">Strengthen e-commerce platform construction to provide a more convenient shopping experience.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* Viral video insights tab page content */}
      {activeTab === 'viral' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Viral Video Analysis</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Video Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {viralVideos.map((video, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{video.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{(video.views / 1000000).toFixed(1)}M</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{video.engagement}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{video.conversion}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          video.platform === 'TikTok' ? 'bg-black text-white' : 
                          video.platform === 'Instagram' ? 'bg-blue-100 text-blue-800' : 
                          video.platform === 'YouTube' ? 'bg-red-100 text-red-800' : 
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {video.platform}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">Analysis</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Content Format Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={contentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="format" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" name="Average Views" dataKey="avgViews" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  <Bar yAxisId="right" name="Engagement Rate" dataKey="engagement" fill="#36C7D0" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Audience Response Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius={90} width={730} height={250} data={audienceResponse.data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} />
                  <Radar name="Viral Video" dataKey="attraction" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                  <Radar name="Viral Video" dataKey="information" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                  <Radar name="Viral Video" dataKey="entertainment" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                  <Radar name="Viral Video" dataKey="trust" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                  <Radar name="Viral Video" dataKey="relevance" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                  <Radar name="Viral Video" dataKey="call to action" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                  <Radar name="Normal Video" dataKey="attraction" stroke="#36C7D0" fill="#36C7D0" fillOpacity={0.6} />
                  <Radar name="Normal Video" dataKey="information" stroke="#36C7D0" fill="#36C7D0" fillOpacity={0.6} />
                  <Radar name="Normal Video" dataKey="entertainment" stroke="#36C7D0" fill="#36C7D0" fillOpacity={0.6} />
                  <Radar name="Normal Video" dataKey="trust" stroke="#36C7D0" fill="#36C7D0" fillOpacity={0.6} />
                  <Radar name="Normal Video" dataKey="relevance" stroke="#36C7D0" fill="#36C7D0" fillOpacity={0.6} />
                  <Radar name="Normal Video" dataKey="call to action" stroke="#36C7D0" fill="#36C7D0" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Viral Video Characteristics Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Content Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Control video length between 30-60 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Start with the main topic in the first 3 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Show real product usage scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Emphasize cost-effectiveness and unique design</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Narrative Structure</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Problem-Solution Structure</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Create Suspense and Twist</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Emotional Resonance + Rational Recommendation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Clear Call to Action</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Technical Elements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-purple-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Bright Natural Lighting</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-purple-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Popular Music or Trend Sound Effect</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-purple-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Subtitles and Graphic Overlay</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-purple-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">Fast Rhythm Editing Style</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Viral factor tab page content */}
      {activeTab === 'factors' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Viral Factor Proportion</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={viralFactors}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {viralFactors.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Element Weight</h3>
              <ResponsiveContainer width="100%" height={300}>
                <Treemap
                  data={contentElements}
                  dataKey="value"
                  aspectRatio={4/3}
                  stroke="#fff"
                  fill="#8884d8"
                >
                  <Tooltip formatter={(value) => `Weight: ${value}`} />
                </Treemap>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Spread Cycle Model</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={propagationModel}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="Views" dataKey="views" stroke="#2563eb" strokeWidth={2} />
                <Line type="monotone" name="Shares" dataKey="shares" stroke="#36C7D0" strokeWidth={2} />
                <Line type="monotone" name="Comments" dataKey="comments" stroke="#FFBE3D" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Content Optimization Suggestions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Strengthen Emotional Connection</p>
                    <p className="text-sm text-gray-600">Add more American local life scenes to enhance emotional resonance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Optimize Opening Method</p>
                    <p className="text-sm text-gray-600">Use problem challenges or surprise elements in the first 3 seconds.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Increase Real Person Appearance</p>
                    <p className="text-sm text-gray-600">Appropriately increase the appearance of people in the content to enhance the content's intimacy.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Spread Strategy Suggestions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Multi-platform Coordination Release</p>
                    <p className="text-sm text-gray-600">First TikTok verification, then Instagram and YouTube diffusion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Front 48 Hours Concentrated Promotion</p>
                    <p className="text-sm text-gray-600">Concentrate resources on promotion within 48 hours after content release to maximize early spread.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">KOC Interaction Strategy</p>
                    <p className="text-sm text-gray-600">Encourage KOC to comment and interact at key time points to boost algorithm recommendation.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Timing Suggestions for Content Distribution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Best Release Time</p>
                    <p className="text-sm text-gray-600">Tuesday to Thursday 18:00-21:00, weekend 10:00-12:00.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Holiday Pre-period</p>
                    <p className="text-sm text-gray-600">Focus on related content 2-3 weeks before key holidays.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 mr-2">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Campus Seasonality</p>
                    <p className="text-sm text-gray-600">August-September (mid-Aug to mid-Sep) and December-May (early Dec, early May) are golden periods for campus content.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightDashboard;