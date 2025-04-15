import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Users, Search, Filter, ChevronDown, PlusCircle, Edit, Trash2, Check, X, Award, TrendingUp, User, UserCheck, Play, Info, BarChart2, Eye, Heart, Download, Star, Tag, Plus } from 'lucide-react';
import './kockolstyles.css';

const KocKolManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Content trend data
  const contentTrendData = [
    { month: 'Jan', TikTok: 4.5, Instagram: 3.8, YouTube: 2.1 },
    { month: 'Feb', TikTok: 5.2, Instagram: 4.1, YouTube: 2.3 },
    { month: 'Mar', TikTok: 5.8, Instagram: 4.5, YouTube: 2.7 },
    { month: 'Apr', TikTok: 6.4, Instagram: 4.9, YouTube: 3.1 },
    { month: 'May', TikTok: 7.1, Instagram: 5.3, YouTube: 3.5 },
    { month: 'Jun', TikTok: 7.8, Instagram: 5.8, YouTube: 3.9 },
    { month: 'Jul', TikTok: 8.5, Instagram: 6.2, YouTube: 4.2 },
    { month: 'Aug', TikTok: 9.2, Instagram: 6.7, YouTube: 4.6 },
    { month: 'Sep', TikTok: 10.0, Instagram: 7.3, YouTube: 5.1 },
    { month: 'Oct', TikTok: 10.8, Instagram: 7.8, YouTube: 5.5 },
  ];
  
  const contentTypeData = [
    { name: 'Planting Grass', TikTok: 42, Instagram: 35, YouTube: 28 },
    { name: 'Product Reviews', TikTok: 28, Instagram: 32, YouTube: 35 },
    { name: 'Store Visits', TikTok: 18, Instagram: 22, YouTube: 15 },
    { name: 'Holiday Themes', TikTok: 12, Instagram: 11, YouTube: 22 },
  ];
  
  // KOC/KOL data
  const COLORS = ['#2563eb','#FF6B8A', '#36C7D0', '#FFBE3D', '#8676FF'];
  
  const kocLevelData = {
    total: 4852,
    breakdown: {
      beginner: 2805,
      intermediate: 1547,
      advanced: 500
    },
    performance: {
      totalContent: 28954,
      totalViews: '382M',
      avgEngagement: '7.2%'
    }
  };
  
  const topKocList = [
    { id: 1, name: 'Sarah J.', avatar: 'S', category: 'Stationery', followers: '125K', engagement: '9.2%', content: 28, status: 'active' },
    { id: 2, name: 'Mike T.', avatar: 'M', category: 'Home', followers: '98K', engagement: '8.5%', content: 22, status: 'active' },
    { id: 3, name: 'Emily R.', avatar: 'E', category: 'Beauty', followers: '156K', engagement: '7.8%', content: 35, status: 'active' },
    { id: 4, name: 'Jason K.', avatar: 'J', category: 'Toys', followers: '87K', engagement: '8.1%', content: 19, status: 'inactive' },
    { id: 5, name: 'Lisa M.', avatar: 'L', category: 'Holiday Gifts', followers: '142K', engagement: '8.9%', content: 31, status: 'active' },
  ];
  
  const kocGrowthData = [
    { date: 'Jan', target: 1000, actual: 850 },
    { date: 'Feb', target: 1500, actual: 1350 },
    { date: 'Mar', target: 2000, actual: 1950 },
    { date: 'Apr', target: 2500, actual: 2650 },
    { date: 'May', target: 3000, actual: 3150 },
    { date: 'Jun', target: 3500, actual: 3450 },
    { date: 'Jul', target: 4000, actual: 3850 },
    { date: 'Aug', target: 4500, actual: 4400 },
    { date: 'Sep', target: 5000, actual: 4850 },
  ];
  
  // Self-operated account matrix data
  const ownChannelDistribution = [
    { name: 'TikTok', value: 45 },
    { name: 'Instagram', value: 30 },
    { name: 'YouTube', value: 15 },
    { name: 'Facebook', value: 10 },
  ];
  
  const ownChannelPerformance = [
    { month: 'Jan', views: 8.5, engagement: 7.2, conversion: 2.8 },
    { month: 'Feb', views: 9.2, engagement: 7.5, conversion: 3.1 },
    { month: 'Mar', views: 10.8, engagement: 7.9, conversion: 3.5 },
    { month: 'Apr', views: 12.5, engagement: 8.2, conversion: 3.8 },
    { month: 'May', views: 15.2, engagement: 8.5, conversion: 4.1 },
    { month: 'Jun', views: 18.7, engagement: 8.9, conversion: 4.3 },
    { month: 'Jul', views: 22.3, engagement: 9.2, conversion: 4.5 },
    { month: 'Aug', views: 25.8, engagement: 9.5, conversion: 4.8 },
    { month: 'Sep', views: 28.5, engagement: 9.8, conversion: 5.1 },
    { month: 'Oct', views: 32.0, engagement: 10.1, conversion: 5.3 },
  ];
  
  // Content management data
  const contentCategoryData = [
    { category: 'Scene', name: 'Campus Life', effectiveness: 85, volume: 4250 },
    { category: 'Scene', name: 'Holidays', effectiveness: 82, volume: 3850 },
    { category: 'Scene', name: 'Family Gatherings', effectiveness: 75, volume: 2950 },
    { category: 'Scene', name: 'Outdoor Activities', effectiveness: 70, volume: 2580 },
    { category: 'Audience', name: 'Students', effectiveness: 88, volume: 4850 },
    { category: 'Audience', name: 'New Professionals', effectiveness: 76, volume: 3250 },
    { category: 'Audience', name: 'Housewives', effectiveness: 72, volume: 2650 },
    { category: 'Audience', name: 'Parent-Child Groups', effectiveness: 68, volume: 2150 },
  ];
  
  const viralScripts = [
    { id: 1, name: 'Video Template 01', category: 'Planting Grass', effectiveness: 92, usage: 285, likes: 4850 },
    { id: 2, name: 'Video Template 02', category: 'Product Reviews', effectiveness: 87, usage: 245, likes: 4250 },
    { id: 3, name: 'Video Template 03', category: 'Store Visits', effectiveness: 85, usage: 220, likes: 3950 },
    { id: 4, name: 'Scene Series Template 04', category: 'Scene', effectiveness: 83, usage: 210, likes: 3850 },
    { id: 5, name: 'Holiday Gift Template 05', category: 'Holiday Themes', effectiveness: 90, usage: 265, likes: 4650 },
  ];
  
  // User journey data
  const userJourneyData = {
    awareness: { rate: 85, improvement: '+12%' },
    interest: { rate: 72, improvement: '+15%' },
    consideration: { rate: 58, improvement: '+18%' },
    purchase: { rate: 35, improvement: '+22%' },
    loyalty: { rate: 28, improvement: '+10%' }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page title and toolbar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">KOC & KOL Content Production</h1>
          <p className="text-gray-600">Managing content creators and content production</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search KOC, content..." 
              className="py-2 px-4 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-pink-500 w-64"
            />
            <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <button className="py-2 px-4 bg-pink-600 text-white rounded-lg shadow-sm hover:bg-pink-700 flex items-center">
            <PlusCircle size={18} className="mr-2" />
            Add KOC
          </button>
        </div>
      </div>
      
      {/* Main tab */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('overview');}}
            >
              Overview
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'koc'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('koc');}}
            >
              KOL Management
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'matrix'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('matrix');}}
            >
              Self-operated Matrix
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'content'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('content');}}
            >
              Content Management
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'user'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => {setActiveTab('user');}}
            >
              User Analysis
            </button>
          </nav>
        </div>
      </div>
      
      {/* Overview tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Platform Content Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={contentTrendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="TikTok" stroke="#FE2C55" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" dataKey="Instagram" stroke="#36C7D0" strokeWidth={2} />
                <Line type="monotone" dataKey="YouTube" stroke="#FFBE3D" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">TikTok Trends</h3>
                <button className="text-sm text-blue-600 hover:underline">View Details</button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Popular Content Types</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Planting Grass Videos</span>
                        <span>42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '42%', background: '#FE2C55' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Product Reviews Videos</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '28%', background: '#FE2C55' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Store Visits Videos</span>
                        <span>18%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '18%', background: '#FE2C55' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Holiday Themes</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '12%', background: '#FE2C55' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-2">Trending Music</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="truncate">"As It Was" - Harry Styles</span>
                      <span className="text-green-500">↑</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="truncate">"Bad Habit" - Steve Lacy</span>
                      <span className="text-green-500">↑</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="truncate">"Glimpse of Us" - Joji</span>
                      <span className="text-red-500">↓</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Instagram Trends</h3>
                <button className="text-sm text-blue-600 hover:underline">View Details</button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Popular Content Types</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Planting Grass Videos</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '35%', background: '#C13584' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Product Reviews Videos</span>
                        <span>32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '32%', background: '#C13584' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Store Visits Videos</span>
                        <span>22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '22%', background: '#C13584' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Holiday Themes</span>
                        <span>11%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: '11%', background: '#C13584' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-2">Popular Filters/Effects</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Vintage Filter</span>
                      <span className="text-green-500">↑</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Natural Light</span>
                      <span className="text-green-500">↑</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Film Grain Effect</span>
                      <span className="text-red-500">↓</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">YouTube Trends</h3>
                <button className="text-sm text-blue-600 hover:underline">View Details</button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Popular Content Types</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Planting Grass Videos</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Product Reviews Videos</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Store Visits Videos</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Holiday Themes</span>
                        <span>22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-2">Average Video Length</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>7-12 minutes</span>
                      <span className="text-green-500">↑</span>
                    </li>
                    <li className="flex justify-between">
                      <span>12-15 minutes</span>
                      <span className="text-green-500">↑</span>
                    </li>
                    <li className="flex justify-between">
                      <span>15-20 minutes</span>
                      <span className="text-red-500">↓</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Trends Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Upward Trends</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <TrendingUp size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Short videos related to campus life</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">DIY learning supplies customization content</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Gift recommendations for holiday themes</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Small-apartment home decoration content</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Content Creation Suggestions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Enhancing content interactivity, adding question-style titles and openings</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Adding product actual usage scenarios, strengthening problem-solving abilities</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Optimizing call-to-action, adding time-limited promotional information and social recognition factors</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Enhancing post-purchase content, providing creative usage methods and pairing suggestions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Platform Features Suggestions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">TikTok: Paying attention to the 3-second attraction of short videos</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Instagram: Improving image quality and aesthetics</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">YouTube: Increasing tutorial-style video content depth</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">All platforms: Strengthening local elements and scenes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* KOL Management tab */}
      {activeTab === 'koc' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">KOL Overview</h3>
                <button className="p-1 text-gray-500 hover:text-gray-700">
                  <Info size={16} />
                </button>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">{kocLevelData.total.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">Total KOL Count</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-800">{kocLevelData.breakdown.beginner.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Beginner KOL</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-500">{kocLevelData.breakdown.intermediate.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Intermediate KOL</div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">KOL Levels</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Beginner KOL</span>
                        <span>{kocLevelData.breakdown.beginner.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(kocLevelData.breakdown.beginner / kocLevelData.total) * 100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Intermediate KOL</span>
                        <span>{kocLevelData.breakdown.intermediate.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(kocLevelData.breakdown.intermediate / kocLevelData.total) * 100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Advanced KOL</span>
                        <span>{kocLevelData.breakdown.advanced.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(kocLevelData.breakdown.advanced / kocLevelData.total) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">KOL Expansion Progress</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={kocGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar name="Target" dataKey="target" fill="#8676FF" radius={[4, 4, 0, 0]} />
                  <Bar name="Actual" dataKey="actual" fill="#FE2C55" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Annual Target Progress</span>
                  <span className="text-sm font-medium">{Math.round((kocLevelData.total / 5000) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(kocLevelData.total / 5000) * 100}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Target: 5,000 KOL | Current: {kocLevelData.total.toLocaleString()} KOL</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Content Data</h3>
              <div className="space-y-4">
                <div className="border p-3 rounded-lg bg-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-full mr-3">
                        <BarChart2 size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Total Content</div>
                        <div className="text-lg font-bold">{kocLevelData.performance.totalContent.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="text-sm text-green-500">+18.5%</div>
                  </div>
                </div>
                
                <div className="border p-3 rounded-lg bg-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-full mr-3">
                        <Eye size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Total Views</div>
                        <div className="text-lg font-bold">{kocLevelData.performance.totalViews}</div>
                      </div>
                    </div>
                    <div className="text-sm text-green-500">+22.3%</div>
                  </div>
                </div>
                
                <div className="border p-3 rounded-lg bg-green-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-100 rounded-full mr-3">
                        <Heart size={20} className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Average Engagement Rate</div>
                        <div className="text-lg font-bold">{kocLevelData.performance.avgEngagement}</div>
                      </div>
                    </div>
                    <div className="text-sm text-green-500">+1.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Top KOL</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 border rounded text-sm text-gray-600 hover:bg-gray-50 flex items-center">
                  <Filter size={14} className="mr-1" />
                  Filter
                </button>
                <button className="px-3 py-1.5 border rounded text-sm text-gray-600 hover:bg-gray-50 flex items-center">
                  <Download size={14} className="mr-1" />
                  Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KOL</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Followers</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Count</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topKocList.map((koc) => (
                    <tr key={koc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-medium">{koc.avatar}</span>
                          </div>
                          <div className="font-medium text-gray-900">{koc.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{koc.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{koc.followers}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{koc.engagement}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{koc.content}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          koc.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {koc.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-gray-600 hover:text-gray-900">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t flex justify-between items-center">
              <div className="text-sm text-gray-500">Displaying 5 items, total {kocLevelData.total.toLocaleString()} items</div>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 border rounded text-sm bg-blue-50 text-blue-600 border-pink-200">1</button>
                <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">KOL Incentive Plan</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award size={18} className="text-blue-600 mr-2" />
                    <h4 className="font-medium">Diversified Incentive Methods</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <ChevronDown size={14} className="text-blue-500 mt-1 mr-1 flex-shrink-0" />
                      <span>Product Incentive: New Product Trial, Discount Coupons</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={14} className="text-blue-500 mt-1 mr-1 flex-shrink-0" />
                      <span>Monetary Reward: Based on Views and Engagement Rate</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={14} className="text-blue-500 mt-1 mr-1 flex-shrink-0" />
                      <span>Social Recognition: Increased Exposure Through Official Account Interactions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Star size={18} className="text-purple-600 mr-2" />
                    <h4 className="font-medium">Three-Tier KOL Growth System</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Beginner KOL</span>
                        <span className="text-xs text-gray-500">Basic Requirements</span>
                      </div>
                      <p className="text-xs text-gray-600">Published a note and had effective interactions ≥ 1000</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Intermediate KOL</span>
                        <span className="text-xs text-gray-500">Advanced Requirements</span>
                      </div>
                      <p className="text-xs text-gray-600">Published multiple notes consecutively, showing stability</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Advanced KOL</span>
                        <span className="text-xs text-gray-500">Professional Requirements</span>
                      </div>
                      <p className="text-xs text-gray-600">Can participate in sharing across all categories, receiving official support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">KOL Content Guidance</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Tag size={18} className="text-blue-600 mr-2" />
                    <h4 className="font-medium">Content Guidance by Category</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium">Beginner KOL:</p>
                      <ul className="text-xs text-gray-700 space-y-1 mt-1">
                        <li>- Basic Store Visit Video</li>
                        <li>- Single Product Review</li>
                        <li>- Unboxing Experience</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Intermediate KOL:</p>
                      <ul className="text-xs text-gray-700 space-y-1 mt-1">
                        <li>- Theme-based Creative Content</li>
                        <li>- Scene Application</li>
                        <li>- Series Product Comparison</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Advanced KOL:</p>
                      <ul className="text-xs text-gray-700 space-y-1 mt-1">
                        <li>- Deep Planting Grass Content</li>
                        <li>- Creative Play Design</li>
                        <li>- Cross-Category Combination</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={18} className="text-green-600 mr-2" />
                    <h4 className="font-medium">Targeting KOL Audience</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <ChevronDown size={14} className="text-green-500 mt-1 mr-1 flex-shrink-0" />
                      <span>Age: 16-30 years old</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={14} className="text-green-500 mt-1 mr-1 flex-shrink-0" />
                      <span>Gender: Female-dominated</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={14} className="text-green-500 mt-1 mr-1 flex-shrink-0" />
                      <span>Interest: Sharing, Loving Eufy Products</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={14} className="text-green-500 mt-1 mr-1 flex-shrink-0" />
                      <span>Recruitment Type: Toys, Beauty, Good Things Sharing, etc.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Self-operated Matrix tab */}
      {activeTab === 'matrix' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Self-operated Matrix Accounts</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 bg-pink-600 text-white rounded text-sm hover:bg-pink-700 flex items-center">
                  <Plus size={14} className="mr-1" />
                  Add Account
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Followers</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Volume</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ownChannelDistribution.map((account) => (
                    <tr key={account.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{account.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          account.name === 'TikTok' ? 'bg-[#FE2C55] text-white' : 
                          account.name === 'Instagram' ? 'bg-blue-100 text-pink-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {account.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{account.value}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{account.growth}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{account.engagement}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{account.content}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-gray-600 hover:text-gray-900">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Matrix Account Performance Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ownChannelPerformance}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="Views (Millions)" dataKey="views" stroke="#2563eb" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" name="Engagement Rate (%)" dataKey="engagement" stroke="#36C7D0" strokeWidth={2} />
                <Line type="monotone" name="Conversion Rate (%)" dataKey="conversion" stroke="#FFBE3D" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Content Production and Optimization</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Establishing Localized Viral Formulas</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Based on verified "Planting Grass" and "Product Reviews" video structures</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Adding elements that are culturally relevant, such as holiday themes and family gatherings</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Localization of Content Tags</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Localization of content tags: Campus Life, Holidays, Family Gatherings, Outdoor Activities, etc.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Segmentation of audience tags: Students, New Professionals, Housewives, Parent-Child Groups, etc.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Content Racing Mechanism</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Testing different tag combinations, such as "Useful Items + Students" and "Holiday Gifts + Family Gatherings"</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Recommending tags that perform well to KOLs, guiding their content creation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Collaboration Between UGC and Self-operated Matrix</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Content Collaboration Strategy</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Encouraging KOLs to upload UGC content to brand accounts to amplify the spread effect</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Publishing high-quality template content on matrix accounts to provide reference for KOLs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Incentive Mechanism Interconnection</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Matrix accounts increasing exposure through comments and forwarding excellent KOL content</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Designing joint reward mechanisms based on overall performance, such as quarterly best collaboration awards</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Dual-Way Empowerment Model</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Self-operated Matrix Account → KOL: Providing viral scripts, popular tag combinations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>KOL → Self-operated Matrix Account: Producing excellent UGC and circulating, forming a spread loop</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Content Management tab */}
      {activeTab === 'content' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Tag System</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effectiveness</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Volume</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contentCategoryData.map((tag, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          tag.category === 'Scene' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {tag.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{tag.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2 flex-grow">
                            <div 
                              className={`h-2 rounded-full ${
                                tag.effectiveness > 80 ? 'bg-green-500' : 
                                tag.effectiveness > 70 ? 'bg-yellow-500' : 'bg-red-500'
                              }`} 
                              style={{ width: `${tag.effectiveness}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-700">{tag.effectiveness}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tag.volume.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-gray-600 hover:text-gray-900">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Viral Video Templates</h3>
                <button className="text-sm text-blue-600 hover:underline flex items-center">
                  <Plus size={14} className="mr-1" />
                  Create Template
                </button>
              </div>
              <div className="space-y-4">
                {viralScripts.map((script) => (
                  <div key={script.id} className="border rounded-lg overflow-hidden">
                    <div className="px-4 py-3 bg-gray-50 border-b flex justify-between items-center">
                      <div>
                        <span className="font-medium">{script.name}</span>
                        <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                          script.category === 'Planting Grass' ? 'bg-green-100 text-green-800' : 
                          script.category === 'Product Reviews' ? 'bg-red-100 text-red-800' : 
                          script.category === 'Store Visits' ? 'bg-blue-100 text-blue-800' : 
                          script.category === 'Scene' ? 'bg-purple-100 text-purple-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {script.category}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-1 text-gray-500 hover:text-gray-700">
                          <Edit size={14} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-gray-700">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Effectiveness</p>
                          <p className="font-medium text-gray-900">{script.effectiveness}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Usage</p>
                          <p className="font-medium text-gray-900">{script.usage}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Likes</p>
                          <p className="font-medium text-gray-900">{script.likes.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Viral Content Templates</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Structure of Planting Grass Video</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Catchy Opening</strong>: Using suspense or challenge elements, attracting attention within 3 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Product Theme Focus</strong>: Highlighting a clear theme, such as "Back-to-school stationery must-buys"</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Realistic Experience Display</strong>: Showing the product's usage in real scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Interactive Elements</strong>: "30-second Pick" and "Blind Product Purchase" high-interaction content</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Structure of Product Review Video</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Problem Pain Point Introduction</strong>: Starting directly with user pain points to resonate</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Product Comparison</strong>: Comparing with similar products on the market to highlight advantages</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Objective Testing</strong>: Conducting objective functional testing of the product, showing actual results</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Conclusion and Suggestions</strong>: Providing clear purchase suggestions and usage scenario recommendations</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Structure of Store Visit Video</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>On-camera</strong>: Creator personally visiting the store, adding realism and immersion</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Real-shot unscripted footage</strong>: Showing the store environment, layout, and featured areas</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>KOL Store Visit Clip</strong>: Highlighting shopping experience and interaction, showing product selection process</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Shopping List</strong>: Sharing recommended products and personal experiences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* User Analysis tab */}
      {activeTab === 'user' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">User Journey Analysis</h3>
            <div className="relative">
              <div className="flex justify-between mb-8">
                <div className="text-center w-1/5">
                  <div className="mb-2">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                      <span className="text-blue-600 font-bold">{userJourneyData.awareness.rate}%</span>
                    </div>
                    <span className="text-green-500 text-xs">{userJourneyData.awareness.improvement}</span>
                  </div>
                  <p className="text-sm font-medium">Awareness Stage</p>
                  <p className="text-xs text-gray-500">Content Reach Rate</p>
                </div>
                
                <div className="text-center w-1/5">
                  <div className="mb-2">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                      <span className="text-blue-600 font-bold">{userJourneyData.interest.rate}%</span>
                    </div>
                    <span className="text-green-500 text-xs">{userJourneyData.interest.improvement}</span>
                  </div>
                  <p className="text-sm font-medium">Interest Stage</p>
                  <p className="text-xs text-gray-500">Interaction Participation Rate</p>
                </div>
                
                <div className="text-center w-1/5">
                  <div className="mb-2">
                    <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                      <span className="text-purple-600 font-bold">{userJourneyData.consideration.rate}%</span>
                    </div>
                    <span className="text-green-500 text-xs">{userJourneyData.consideration.improvement}</span>
                  </div>
                  <p className="text-sm font-medium">Consideration Stage</p>
                  <p className="text-xs text-gray-500">Details Viewing Rate</p>
                </div>
                
                <div className="text-center w-1/5">
                  <div className="mb-2">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                      <span className="text-green-600 font-bold">{userJourneyData.purchase.rate}%</span>
                    </div>
                    <span className="text-green-500 text-xs">{userJourneyData.purchase.improvement}</span>
                  </div>
                  <p className="text-sm font-medium">Purchase Stage</p>
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                </div>
                
                <div className="text-center w-1/5">
                  <div className="mb-2">
                    <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
                      <span className="text-yellow-600 font-bold">{userJourneyData.loyalty.rate}%</span>
                    </div>
                    <span className="text-green-500 text-xs">{userJourneyData.loyalty.improvement}</span>
                  </div>
                  <p className="text-sm font-medium">Loyalty Stage</p>
                  <p className="text-xs text-gray-500">Repeat Purchase Rate</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">Optimizing Conversion Funnel Suggestions</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium">From Awareness to Interest</span>: <span>Enhancing content interactivity, adding question-style titles and openings</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium">From Interest to Consideration</span>: <span>Adding product actual usage scenarios, strengthening problem-solving abilities</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium">From Consideration to Purchase</span>: <span>Optimizing call-to-action, adding time-limited promotional information and social recognition factors</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium">From Purchase to Loyalty</span>: <span>Enhancing post-purchase content, providing creative usage methods and pairing suggestions</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">Content Touchpoint Analysis</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Short Video Discovery</span>
                      <span className="text-xs">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">KOL Recommendations</span>
                      <span className="text-xs">28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Search Engines</span>
                      <span className="text-xs">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Social Media Ads</span>
                      <span className="text-xs">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Other Channels</span>
                      <span className="text-xs">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tag Effectiveness Matrix</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Scene Tag Effectiveness</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart outerRadius={90} data={contentCategoryData.filter(tag => tag.category === 'Scene')}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Effectiveness" dataKey="effectiveness" stroke="#FF6B8A" fill="#FF6B8A" fillOpacity={0.6} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Audience Tag Effectiveness</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart outerRadius={90} data={contentCategoryData.filter(tag => tag.category === 'Audience')}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Effectiveness" dataKey="effectiveness" stroke="#36C7D0" fill="#36C7D0" fillOpacity={0.6} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-3">Tag Combination Recommendations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium mb-2">High-Efficiency Combination 1</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Campus Life</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Students</span>
                    <span className="text-xs text-gray-500 mt-2">Interaction Rate: 8.9%</span>
                  </div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium mb-2">High-Efficiency Combination 2</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Holidays</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Housewives</span>
                    <span className="text-xs text-gray-500 mt-2">Interaction Rate: 7.8%</span>
                  </div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium mb-2">High-Efficiency Combination 3</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Family Gatherings</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Parent-Child Groups</span>
                    <span className="text-xs text-gray-500 mt-2">Interaction Rate: 7.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KocKolManagement;