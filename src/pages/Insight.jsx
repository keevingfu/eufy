import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Insight = () => {
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
        
        if (activeSubModule === 'insight-search') {
          mockData = {
            title: '搜索洞察',
            description: '热门搜索词及其增长趋势',
            chartType: 'bar',
            metrics: [
              { name: '扫地机器人宠物毛发', 搜索量: 22500, 增长率: 18 },
              { name: '最佳扫地机器人', 搜索量: 18700, 增长率: 5 },
              { name: '扫地机器人拖地', 搜索量: 16200, 增长率: 32 },
              { name: '智能扫地机器人', 搜索量: 12800, 增长率: 22 },
              { name: '扫地机器人自动清理', 搜索量: 9500, 增长率: 45 }
            ],
            insights: [
              { title: '增长趋势', content: '自动清理功能的搜索增长率最高，达到45%，表明消费者对此功能有强烈需求。' },
              { title: '搜索量洞察', content: '宠物毛发相关搜索量最高，表明这是消费者的主要痛点。' },
              { title: '内容建议', content: '建议增加关于宠物毛发清理和自动清理功能的内容，以满足用户搜索需求。' }
            ]
          };
        } else if (activeSubModule === 'insight-voc') {
          mockData = {
            title: 'VOC分析',
            description: '用户评论情感分析',
            chartType: 'pie',
            metrics: [
              { name: '正面', value: 65 },
              { name: '中性', value: 20 },
              { name: '负面', value: 15 }
            ],
            insights: [
              { title: '总体情感', content: '65%的用户评论为正面，表明产品整体满意度较高。' },
              { title: '负面评论分析', content: '负面评论主要集中在噪音(35%)、电池寿命(28%)和导航问题(22%)。' },
              { title: '改进建议', content: '建议在内容中强调低噪音技术和长效电池，同时提供导航问题的解决方案。' }
            ],
            details: {
              positive: ['清洁效果好', '操作简单', '智能规划路线', '续航时间长', '静音效果好'],
              negative: ['噪音大', '电池寿命短', '导航不准确', '价格偏高', '配件更换困难']
            }
          };
        } else if (activeSubModule === 'insight-viral') {
          mockData = {
            title: '爆款视频分析',
            description: '过去30天表现最佳的视频内容',
            chartType: 'bar',
            metrics: [
              { name: 'Eufy vs 宠物', 播放量: 3200000, 互动量: 285000, 分享量: 125000 },
              { name: '清洁挑战', 播放量: 2100000, 互动量: 195000, 分享量: 87000 },
              { name: 'Eufy vs 竞品', 播放量: 1850000, 互动量: 142000, 分享量: 65000 },
              { name: '10分钟深度评测', 播放量: 980000, 互动量: 86000, 分享量: 32000 },
              { name: '使用技巧合集', 播放量: 750000, 互动量: 68000, 分享量: 28000 }
            ],
            insights: [
              { title: '宠物内容效果最佳', content: 'Eufy与宠物互动的视频表现最佳，播放量达320万，互动率8.9%。' },
              { title: '挑战类内容', content: '清洁挑战类内容分享率最高，达到4.1%，有较强的病毒传播性。' },
              { title: '内容策略建议', content: '建议增加宠物互动和挑战类内容，同时保持竞品对比的高质量输出。' }
            ]
          };
        } else if (activeSubModule === 'insight-factors') {
          mockData = {
            title: '爆款因素分析',
            description: '影响内容传播的关键因素',
            chartType: 'bar',
            metrics: [
              { name: '情感共鸣', 影响力: 85 },
              { name: '实用性', 影响力: 78 },
              { name: '创意新颖', 影响力: 72 },
              { name: '视觉冲击', 影响力: 68 },
              { name: '叙事结构', 影响力: 65 },
              { name: '时长', 影响力: 45 }
            ],
            insights: [
              { title: '情感因素最重要', content: '引发情感共鸣的内容传播效果最佳，特别是与宠物相关的内容。' },
              { title: '实用性与创意', content: '实用的使用技巧结合创意展示方式的内容，互动率高出平均水平35%。' },
              { title: '最佳时长', content: '数据显示，1-3分钟的短视频完播率最高，而10分钟以上的深度内容虽然总播放量较低，但粉丝忠诚度和转化率更高。' }
            ]
          };
        } else {
          mockData = {
            title: '洞察数据',
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

  // 渲染VOC详情
  const renderVocDetails = () => {
    if (!data || !data.details) return null;
    
    return (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6">
          <h3 className="text-lg font-semibold text-green-600 mb-4">正面评论关键词</h3>
          <ul className="space-y-2">
            {data.details.positive.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <h3 className="text-lg font-semibold text-red-600 mb-4">负面评论关键词</h3>
          <ul className="space-y-2">
            {data.details.negative.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
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
          
          {activeSubModule === 'insight-voc' && renderVocDetails()}
          
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

export default Insight;
