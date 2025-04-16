import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const Overview = () => {
  const { activeModule, activeSubModule } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call to get data
    setLoading(true);
    
    // Load different data based on different submodules
    setTimeout(() => {
      try {
        let mockData;
        
        if (activeSubModule === 'overview-dashboard') {
          mockData = {
            title: 'Social Media Performance Overview',
            description: 'Key metrics for each platform over the past 30 days',
            chartType: 'bar',
            metrics: [
              { name: 'YouTube', Views: 1250000, Engagements: 85000, Conversions: 12500 },
              { name: 'Instagram', Views: 980000, Engagements: 72000, Conversions: 9800 },
              { name: 'TikTok', Views: 1750000, Engagements: 145000, Conversions: 17500 },
              { name: 'Facebook', Views: 650000, Engagements: 42000, Conversions: 6500 },
              { name: 'Xiaohongshu', Views: 420000, Engagements: 38000, Conversions: 4200 }
            ],
            insights: [
              { title: 'TikTok Performs Best', content: 'TikTok performs best in terms of views, engagements, and conversions. Recommend increasing investment.' },
              { title: 'Engagement Rate Analysis', content: 'Instagram has a relatively high engagement rate and good content quality, but there is room for improvement in conversion rate.' },
              { title: 'Growth Trend', content: 'Compared to last month, overall performance across all platforms increased by 15%, with TikTok growing the fastest at 23%.' }
            ]
          };
        } else if (activeSubModule === 'overview-kpi') {
          mockData = {
            title: 'Key Performance Indicators',
            description: 'KPI trends over the past 90 days',
            chartType: 'line',
            metrics: [
              { name: 'January', ContentROI: 2.8, EngagementRate: 4.2, ConversionRate: 1.8 },
              { name: 'February', ContentROI: 3.1, EngagementRate: 4.5, ConversionRate: 2.0 },
              { name: 'March', ContentROI: 3.5, EngagementRate: 4.8, ConversionRate: 2.3 },
              { name: 'April', ContentROI: 3.8, EngagementRate: 5.2, ConversionRate: 2.5 }
            ],
            insights: [
              { title: 'Continuous Growth', content: 'All KPI indicators have shown steady growth over the past 90 days, with content ROI growing most significantly.' },
              { title: 'Conversion Rate Improvement', content: 'Conversion rate increased from 1.8% in January to 2.5% in April, a 39% increase, mainly due to improved content quality.' },
              { title: 'Relationship Between Engagement and Conversion', content: 'Data shows that for every 1 percentage point increase in engagement rate, conversion rate increases by an average of 0.5 percentage points.' }
            ]
          };
        } else if (activeSubModule === 'overview-roi') {
          mockData = {
            title: 'Content ROI Analysis',
            description: 'Return on investment for different content types',
            chartType: 'bar',
            metrics: [
              { name: 'Product Reviews', ROI: 4.2, Investment: 25000, Return: 105000 },
              { name: 'Tutorials', ROI: 3.8, Investment: 18000, Return: 68400 },
              { name: 'Comparison Videos', ROI: 5.1, Investment: 30000, Return: 153000 },
              { name: 'User Stories', ROI: 3.5, Investment: 15000, Return: 52500 },
              { name: 'Live Events', ROI: 2.9, Investment: 35000, Return: 101500 }
            ],
            insights: [
              { title: 'Comparison Videos Most Effective', content: 'Comparison videos have an ROI of 5.1, the highest among all content types. Recommend increasing investment in this type of content.' },
              { title: 'Live Events ROI Lower', content: 'Live events have an ROI of 2.9. Although the total return is high, the investment efficiency is relatively low.' },
              { title: 'Investment Recommendations', content: 'Recommend allocating more budget to content types with higher ROI, such as comparison videos and product reviews.' }
            ]
          };
        } else if (activeSubModule === 'overview-trends') {
          mockData = {
            title: 'Content Trend Analysis',
            description: 'Content performance trends over the past 6 months',
            chartType: 'line',
            metrics: [
              { name: 'November', ShortVideos: 85, LongVideos: 65, ImageText: 45 },
              { name: 'December', ShortVideos: 90, LongVideos: 68, ImageText: 42 },
              { name: 'January', ShortVideos: 95, LongVideos: 70, ImageText: 40 },
              { name: 'February', ShortVideos: 105, LongVideos: 72, ImageText: 38 },
              { name: 'March', ShortVideos: 115, LongVideos: 75, ImageText: 35 },
              { name: 'April', ShortVideos: 125, LongVideos: 78, ImageText: 32 }
            ],
            insights: [
              { title: 'Short Videos Continuous Growth', content: 'Short video content performance has continued to grow over the past 6 months, with an increase of 47%.' },
              { title: 'Image-Text Content Decline', content: 'Image-text content performance continues to decline. Recommend reducing investment in this type of content or improving strategy.' },
              { title: 'Long Videos Stable Growth', content: 'Long video content shows stable growth, especially for in-depth content over 10 minutes.' }
            ]
          };
        } else {
          mockData = {
            title: 'Overview Data',
            description: 'Please select a specific submodule to view detailed data',
            chartType: 'bar',
            metrics: [],
            insights: []
          };
        }
        
        setData(mockData);
        setError(null);
      } catch (err) {
        setError('Error loading data, please try again later');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, [activeSubModule]);

  // Render chart
  const renderChart = () => {
    if (!data || !data.metrics || data.metrics.length === 0) {
      return <div className="text-center p-10">No data available</div>;
    }

    if (data.chartType === 'bar') {
      // Get all metric names (except 'name')
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
      // Get all metric names (except 'name')
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

export default Overview;
