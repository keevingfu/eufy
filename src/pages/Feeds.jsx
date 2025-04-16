import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const Feeds = () => {
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
        
        if (activeSubModule === 'feeds-effectiveness') {
          mockData = {
            title: '广告效果分析',
            description: '各平台广告效果对比',
            chartType: 'bar',
            metrics: [
              { name: 'YouTube', 曝光量: 1250000, 点击量: 85000, 转化量: 12500, CPC: 1.25 },
              { name: 'Instagram', 曝光量: 980000, 点击量: 72000, 转化量: 9800, CPC: 1.40 },
              { name: 'Facebook', 曝光量: 650000, 点击量: 42000, 转化量: 6500, CPC: 0.95 },
              { name: 'Google', 曝光量: 1450000, 点击量: 95000, 转化量: 15500, CPC: 1.55 },
              { name: 'Amazon', 曝光量: 850000, 点击量: 65000, 转化量: 18500, CPC: 1.60 }
            ],
            insights: [
              { title: 'Amazon转化率最高', content: 'Amazon的转化率为28.5%，显著高于其他平台，但CPC也相对较高。' },
              { title: 'Facebook成本效益高', content: 'Facebook的CPC最低，为0.95元，适合大规模曝光。' },
              { title: '投放建议', content: '建议增加Amazon的投放预算，优化Google的广告创意提高转化率。' }
            ]
          };
        } else if (activeSubModule === 'feeds-campaigns') {
          mockData = {
            title: '活动表现分析',
            description: '各营销活动效果对比',
            chartType: 'bar',
            metrics: [
              { name: '新品发布', 投入: 85000, 回报: 255000, ROI: 3.0 },
              { name: '节日促销', 投入: 65000, 回报: 227500, ROI: 3.5 },
              { name: '品牌联名', 投入: 95000, 回报: 332500, ROI: 3.5 },
              { name: '用户评测', 投入: 45000, 回报: 180000, ROI: 4.0 },
              { name: '限时折扣', 投入: 55000, 回报: 192500, ROI: 3.5 }
            ],
            insights: [
              { title: '用户评测ROI最高', content: '用户评测活动的ROI达到4.0，是所有活动中最高的。' },
              { title: '品牌联名效果好', content: '品牌联名活动虽然投入较高，但总回报最高，达到332500元。' },
              { title: '活动策略建议', content: '建议增加用户评测类活动的投入，同时继续保持品牌联名活动的高质量。' }
            ]
          };
        } else if (activeSubModule === 'feeds-channel') {
          mockData = {
            title: '渠道分析',
            description: '各销售渠道表现对比',
            chartType: 'bar',
            metrics: [
              { name: '官网', 销售额: 1250000, 客单价: 1850, 转化率: 3.2 },
              { name: 'Amazon', 销售额: 1850000, 客单价: 1650, 转化率: 5.5 },
              { name: '天猫', 销售额: 1550000, 客单价: 1750, 转化率: 4.8 },
              { name: '京东', 销售额: 1350000, 客单价: 1800, 转化率: 4.2 },
              { name: '线下', 销售额: 950000, 客单价: 2100, 转化率: 2.8 }
            ],
            insights: [
              { title: 'Amazon表现最佳', content: 'Amazon渠道销售额最高，转化率也最高，达到5.5%。' },
              { title: '线下客单价高', content: '线下渠道客单价最高，为2100元，但转化率较低。' },
              { title: '渠道策略建议', content: '建议增强Amazon和天猫的内容营销，提升官网的用户体验和转化率。' }
            ]
          };
        } else {
          mockData = {
            title: '内容分发数据',
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
    }
    
    return null;
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

export default Feeds;
