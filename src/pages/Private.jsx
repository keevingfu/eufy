import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Private = () => {
  const { activeModule, activeSubModule } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟API调用获取数据
    setLoading(true);
    
    // 根据不同的子模块加载不同的数据
    setTimeout(() => {
      try {
        let mockData;
        
        if (activeSubModule === 'private-landing') {
          mockData = {
            title: '落地页分析',
            description: '各落地页表现对比',
            chartType: 'bar',
            metrics: [
              { name: '产品详情页', 访问量: 125000, 停留时间: 3.5, 转化率: 4.2 },
              { name: '促销活动页', 访问量: 85000, 停留时间: 2.8, 转化率: 5.5 },
              { name: '内容营销页', 访问量: 65000, 停留时间: 4.2, 转化率: 3.8 },
              { name: '用户评测页', 访问量: 45000, 停留时间: 5.5, 转化率: 6.2 },
              { name: '对比页面', 访问量: 55000, 停留时间: 6.2, 转化率: 7.5 }
            ],
            insights: [
              { title: '对比页面效果最佳', content: '对比页面的转化率最高，达到7.5%，用户停留时间也最长。' },
              { title: '促销活动页流量高', content: '促销活动页的转化率较高，为5.5%，但停留时间较短。' },
              { title: '优化建议', content: '建议增强对比页面和用户评测页的流量引导，优化内容营销页的转化路径。' }
            ]
          };
        } else if (activeSubModule === 'private-tags') {
          mockData = {
            title: '页面标签分析',
            description: '不同标签页面表现对比',
            chartType: 'bar',
            metrics: [
              { name: '产品功能', 页面数: 25, 平均访问量: 4500, 平均转化率: 3.8 },
              { name: '使用教程', 页面数: 18, 平均访问量: 3800, 平均转化率: 4.2 },
              { name: '用户评测', 页面数: 12, 平均访问量: 5200, 平均转化率: 5.5 },
              { name: '对比测评', 页面数: 8, 平均访问量: 6500, 平均转化率: 6.8 },
              { name: '常见问题', 页面数: 15, 平均访问量: 4200, 平均转化率: 3.5 }
            ],
            insights: [
              { title: '对比测评效果最佳', content: '对比测评标签的页面虽然数量最少，但平均访问量和转化率均最高。' },
              { title: '用户评测受欢迎', content: '用户评测标签的页面访问量和转化率也较高，表明用户重视真实体验。' },
              { title: '内容策略建议', content: '建议增加对比测评和用户评测类内容，优化产品功能页面的表现形式。' }
            ]
          };
        } else if (activeSubModule === 'private-whatsapp') {
          mockData = {
            title: 'WhatsApp群组分析',
            description: 'WhatsApp群组活跃度和转化表现',
            chartType: 'line',
            metrics: [
              { name: '1月', 群组数: 15, 活跃用户: 4500, 互动率: 35, 转化率: 4.2 },
              { name: '2月', 群组数: 18, 活跃用户: 5200, 互动率: 38, 转化率: 4.5 },
              { name: '3月', 群组数: 22, 活跃用户: 6500, 互动率: 42, 转化率: 4.8 },
              { name: '4月', 群组数: 25, 活跃用户: 7800, 互动率: 45, 转化率: 5.2 }
            ],
            insights: [
              { title: '持续增长', content: 'WhatsApp群组数量和活跃用户数持续增长，4个月增长了67%。' },
              { title: '互动率提升', content: '群组互动率从1月的35%提升到4月的45%，表明内容质量和运营水平提升。' },
              { title: '运营建议', content: '建议继续扩大群组规模，增加产品使用技巧和用户分享类内容，提高互动率和转化率。' }
            ]
          };
        } else if (activeSubModule === 'private-email') {
          mockData = {
            title: '邮件营销分析',
            description: '邮件营销活动表现',
            chartType: 'bar',
            metrics: [
              { name: '新品发布', 发送量: 85000, 打开率: 25, 点击率: 12, 转化率: 3.5 },
              { name: '促销活动', 发送量: 95000, 打开率: 28, 点击率: 15, 转化率: 4.2 },
              { name: '内容推送', 发送量: 75000, 打开率: 32, 点击率: 18, 转化率: 3.8 },
              { name: '用户回访', 发送量: 45000, 打开率: 35, 点击率: 22, 转化率: 5.5 },
              { name: '节日祝福', 发送量: 65000, 打开率: 38, 点击率: 8, 转化率: 2.2 }
            ],
            insights: [
              { title: '用户回访效果最佳', content: '用户回访邮件的打开率、点击率和转化率均较高，表明针对性强的内容更有效。' },
              { title: '内容推送受欢迎', content: '内容推送类邮件的打开率较高，为32%，表明用户对有价值的内容更感兴趣。' },
              { title: '邮件策略建议', content: '建议增加用户回访和内容推送类邮件，减少纯促销类邮件，提高整体转化效果。' }
            ]
          };
        } else if (activeSubModule === 'private-dtc') {
          mockData = {
            title: 'DTC网站分析',
            description: 'DTC网站流量来源和转化',
            chartType: 'pie',
            metrics: [
              { name: '直接访问', value: 35 },
              { name: '搜索引擎', value: 25 },
              { name: '社交媒体', value: 20 },
              { name: '邮件营销', value: 15 },
              { name: '付费广告', value: 5 }
            ],
            insights: [
              { title: '直接访问占比高', content: '直接访问占比35%，表明品牌认知度较高，用户主动寻找产品。' },
              { title: '社交媒体贡献显著', content: '社交媒体贡献了20%的流量，其中TikTok和Instagram占比最高。' },
              { title: '流量策略建议', content: '建议优化SEO提升搜索引擎流量，增强社交媒体内容的引流效果，减少对付费广告的依赖。' }
            ],
            details: {
              conversion: [
                { source: '直接访问', rate: 5.2 },
                { source: '搜索引擎', rate: 4.5 },
                { source: '社交媒体', rate: 3.8 },
                { source: '邮件营销', rate: 6.5 },
                { source: '付费广告', rate: 2.5 }
              ]
            }
          };
        } else {
          mockData = {
            title: '私域数据',
            description: '请选择具体的子模块查看详细数据',
            chartType: 'bar',
            metrics: [],
            insights: []
          };
        }
        
        setData(mockData);
        setError(null);
      } catch (err) {
        setError('加载数据时出错，请稍后再试');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, [activeSubModule]);

  // 渲染图表
  const renderChart = () => {
    if (!data || !data.metrics || data.metrics.length === 0) {
      return <div className="text-center p-10">无可用数据</div>;
    }

    if (data.chartType === 'bar') {
      // 获取所有指标名称（除了'name'）
      const metrics = Object.keys(data.metrics[0]).filter(key => key !== 'name');
      
      return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data.metrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {metrics.map((metric, index) => (
              <Bar 
                key={metric} 
                dataKey={metric} 
                fill={`hsl(${index * 40 + 200}, 70%, 50%)`} 
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      );
    } else if (data.chartType === 'line') {
      // 获取所有指标名称（除了'name'）
      const metrics = Object.keys(data.metrics[0]).filter(key => key !== 'name');
      
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data.metrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {metrics.map((metric, index) => (
              <Line 
                key={metric} 
                type="monotone" 
                dataKey={metric} 
                stroke={`hsl(${index * 40 + 200}, 70%, 50%)`} 
                activeDot={{ r: 8 }} 
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      );
    } else if (data.chartType === 'pie') {
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
      
      return (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data.metrics}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.metrics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
    }
    
    return null;
  };

  // 渲染DTC详情
  const renderDtcDetails = () => {
    if (!data || !data.details || !data.details.conversion) return null;
    
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-primary mb-4">各渠道转化率对比</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-card">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">流量来源</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">转化率 (%)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">表现</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.details.conversion.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.rate}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${item.rate > 5 ? 'bg-green-500' : item.rate > 3 ? 'bg-blue-500' : 'bg-yellow-500'}`} 
                        style={{ width: `${item.rate * 10}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      ) : data ? (
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-text">{data.title}</h1>
            <p className="text-secondary">{data.description}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6 mb-6">
            {renderChart()}
          </div>
          
          {activeSubModule === 'private-dtc' && renderDtcDetails()}
          
          {data.insights && data.insights.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.insights.map((insight, index) => (
                <div key={index} className="bg-white rounded-lg shadow-card p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">{insight.title}</h3>
                  <p className="text-text">{insight.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Private;
