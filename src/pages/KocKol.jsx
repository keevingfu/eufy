import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter, ZAxis } from 'recharts';

const KocKol = () => {
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
        
        if (activeSubModule === 'koc-trends') {
          mockData = {
            title: '内容趋势分析',
            description: '各平台内容表现趋势',
            chartType: 'line',
            metrics: [
              { name: '1月', YouTube: 85, Instagram: 65, TikTok: 92, Facebook: 45 },
              { name: '2月', YouTube: 88, Instagram: 70, TikTok: 98, Facebook: 48 },
              { name: '3月', YouTube: 92, Instagram: 75, TikTok: 105, Facebook: 52 },
              { name: '4月', YouTube: 96, Instagram: 82, TikTok: 115, Facebook: 55 }
            ],
            insights: [
              { title: 'TikTok增长最快', content: 'TikTok平台的内容表现增长最快，4个月增长了25%。' },
              { title: 'Instagram稳步提升', content: 'Instagram平台表现稳步提升，特别是Reels内容。' },
              { title: '平台策略建议', content: '建议增加TikTok和Instagram的内容投入，同时优化YouTube的长视频内容。' }
            ]
          };
        } else if (activeSubModule === 'koc-youtube') {
          mockData = {
            title: 'YouTube趋势分析',
            description: 'YouTube平台内容表现',
            chartType: 'bar',
            metrics: [
              { name: '产品评测', 观看量: 1250000, 互动量: 85000, 转化量: 12500 },
              { name: '使用教程', 观看量: 980000, 互动量: 72000, 转化量: 9800 },
              { name: '对比视频', 观看量: 1450000, 互动量: 105000, 转化量: 16500 },
              { name: '开箱视频', 观看量: 850000, 互动量: 62000, 转化量: 7500 },
              { name: '问答视频', 观看量: 650000, 互动量: 48000, 转化量: 5800 }
            ],
            insights: [
              { title: '对比视频效果最佳', content: '对比视频在观看量、互动量和转化量方面均表现最佳。' },
              { title: '互动率分析', content: '对比视频的互动率为7.2%，高于平台平均水平5.8%。' },
              { title: '内容建议', content: '建议增加对比视频和产品评测内容，同时优化使用教程的内容质量。' }
            ]
          };
        } else if (activeSubModule === 'koc-instagram') {
          mockData = {
            title: 'Instagram趋势分析',
            description: 'Instagram平台内容表现',
            chartType: 'bar',
            metrics: [
              { name: '产品展示', 浏览量: 850000, 互动量: 68000, 保存量: 25000 },
              { name: 'Reels短视频', 浏览量: 1250000, 互动量: 95000, 保存量: 42000 },
              { name: '用户分享', 浏览量: 720000, 互动量: 58000, 保存量: 18000 },
              { name: '故事内容', 浏览量: 950000, 互动量: 45000, 保存量: 12000 },
              { name: '直播回放', 浏览量: 580000, 互动量: 35000, 保存量: 8000 }
            ],
            insights: [
              { title: 'Reels效果最佳', content: 'Reels短视频在所有指标上表现最佳，特别是保存量。' },
              { title: '内容保存率', content: 'Reels内容的保存率为3.4%，是平台平均水平的2倍。' },
              { title: '策略建议', content: '建议增加Reels短视频内容，特别是产品使用技巧和创意清洁挑战类内容。' }
            ]
          };
        } else if (activeSubModule === 'koc-tiktok') {
          mockData = {
            title: 'TikTok趋势分析',
            description: 'TikTok平台内容表现',
            chartType: 'bar',
            metrics: [
              { name: '产品展示', 播放量: 1850000, 互动量: 185000, 分享量: 45000 },
              { name: '清洁挑战', 播放量: 2750000, 互动量: 320000, 分享量: 95000 },
              { name: '使用技巧', 播放量: 1650000, 互动量: 145000, 分享量: 38000 },
              { name: '对比测试', 播放量: 1950000, 互动量: 210000, 分享量: 65000 },
              { name: '创意内容', 播放量: 2250000, 互动量: 280000, 分享量: 85000 }
            ],
            insights: [
              { title: '挑战类内容效果最佳', content: '清洁挑战类内容在播放量、互动量和分享量方面均表现最佳。' },
              { title: '创意内容传播广', content: '创意内容的分享率为3.8%，传播效果显著。' },
              { title: '内容策略', content: '建议增加挑战类和创意类内容，同时保持对比测试的高质量输出。' }
            ]
          };
        } else if (activeSubModule === 'koc-paid') {
          mockData = {
            title: '付费KOL分析',
            description: '付费KOL合作效果分析',
            chartType: 'scatter',
            metrics: [
              { name: 'KOL-A', 粉丝量: 1500000, 互动率: 5.2, 转化率: 2.1, 合作费用: 35000 },
              { name: 'KOL-B', 粉丝量: 850000, 互动率: 7.5, 转化率: 3.2, 合作费用: 25000 },
              { name: 'KOL-C', 粉丝量: 2200000, 互动率: 4.8, 转化率: 1.8, 合作费用: 45000 },
              { name: 'KOL-D', 粉丝量: 650000, 互动率: 8.2, 转化率: 3.5, 合作费用: 18000 },
              { name: 'KOL-E', 粉丝量: 1800000, 互动率: 5.5, 转化率: 2.3, 合作费用: 40000 }
            ],
            insights: [
              { title: '中腰部KOL效果最佳', content: '粉丝量在50-100万的中腰部KOL，ROI最高，平均为3.2。' },
              { title: '互动率与转化的关系', content: '数据显示互动率每提升1个百分点，转化率平均提升0.4个百分点。' },
              { title: '投资建议', content: '建议增加对中腰部KOL的投入，特别是互动率高于7%的账号。' }
            ]
          };
        } else if (activeSubModule === 'koc-self') {
          mockData = {
            title: '自营KOC分析',
            description: '自营KOC账号表现分析',
            chartType: 'line',
            metrics: [
              { name: '1月', 粉丝增长: 12500, 内容互动率: 4.2, 转化率: 1.8 },
              { name: '2月', 粉丝增长: 15800, 内容互动率: 4.8, 转化率: 2.1 },
              { name: '3月', 粉丝增长: 18200, 内容互动率: 5.5, 转化率: 2.5 },
              { name: '4月', 粉丝增长: 22500, 内容互动率: 6.2, 转化率: 2.9 }
            ],
            insights: [
              { title: '持续增长', content: '自营KOC账号在所有指标上呈现持续增长趋势，4月粉丝增长最为显著。' },
              { title: '内容互动提升', content: '内容互动率从1月的4.2%提升到4月的6.2%，增长了48%。' },
              { title: '策略建议', content: '建议继续优化内容质量，增加与用户的互动频率，保持增长势头。' }
            ]
          };
        } else if (activeSubModule === 'koc-user') {
          mockData = {
            title: '用户旅程分析',
            description: '内容影响下的用户旅程转化',
            chartType: 'bar',
            metrics: [
              { name: '认知阶段', 用户数: 100000, 转化率: 45, 停留时间: 2.5 },
              { name: '兴趣阶段', 用户数: 45000, 转化率: 65, 停留时间: 4.2 },
              { name: '考虑阶段', 用户数: 29250, 转化率: 40, 停留时间: 6.8 },
              { name: '购买阶段', 用户数: 11700, 转化率: 85, 停留时间: 3.5 },
              { name: '忠诚阶段', 用户数: 9945, 转化率: 75, 停留时间: 5.2 }
            ],
            insights: [
              { title: '关键转化节点', content: '从兴趣阶段到考虑阶段的转化率最低，为40%，是用户流失的主要环节。' },
              { title: '内容影响', content: '考虑阶段的用户停留时间最长，为6.8分钟，表明详细的产品信息和对比内容对转化至关重要。' },
              { title: '优化建议', content: '建议增强考虑阶段的内容质量，特别是产品对比和深度评测内容，提高转化率。' }
            ]
          };
        } else if (activeSubModule === 'koc-search') {
          mockData = {
            title: '搜索表现分析',
            description: '各平台搜索表现对比',
            chartType: 'bar',
            metrics: [
              { name: 'YouTube', 搜索曝光: 850000, 点击率: 4.2, 平均排名: 3.5 },
              { name: 'Google', 搜索曝光: 1250000, 点击率: 3.8, 平均排名: 4.2 },
              { name: 'Amazon', 搜索曝光: 650000, 点击率: 5.5, 平均排名: 2.8 },
              { name: '小红书', 搜索曝光: 450000, 点击率: 6.2, 平均排名: 2.5 },
              { name: 'TikTok', 搜索曝光: 550000, 点击率: 5.8, 平均排名: 3.2 }
            ],
            insights: [
              { title: 'Google曝光最高', content: 'Google搜索曝光量最高，但点击率相对较低，需要优化标题和描述。' },
              { title: '小红书转化效果好', content: '小红书的点击率最高，达到6.2%，平均排名也最好，为2.5。' },
              { title: '优化策略', content: '建议优化Google和YouTube的内容SEO，提高点击率；同时增加小红书和TikTok的内容投入。' }
            ]
          };
        } else {
          mockData = {
            title: 'KOC & KOL数据',
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
    } else if (data.chartType === 'scatter') {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="粉丝量" name="粉丝量" unit="人" />
            <YAxis type="number" dataKey="互动率" name="互动率" unit="%" />
            <ZAxis type="number" dataKey="合作费用" range={[60, 400]} name="合作费用" unit="元" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} formatter={(value, name) => [value, name]} />
            <Legend />
            <Scatter name="KOL数据" data={data.metrics} fill="#8884d8" />
          </ScatterChart>
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

export default KocKol;
