import { useState } from 'react';

interface SearchResult {
  data: any[];
  chartType: 'bar' | 'line' | 'pie' | 'radar' | 'scatter';
  chartTitle: string;
  insights: Array<{
    title: string;
    description: string;
  }>;
  recommendations: string[];
}

interface UseSearchProps {
  module: string;
  subModule: string;
}

export const useSearch = ({ module, subModule }: UseSearchProps) => {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);

  const generateMockData = (query: string): SearchResult => {
    let data, chartType, chartTitle, insights, recommendations;

    if (module === 'overview') {
      if (query.toLowerCase().includes('roi')) {
        data = [
          { platform: 'YouTube', roi: 3.2 },
          { platform: 'Instagram', roi: 2.7 },
          { platform: 'TikTok', roi: 4.1 },
          { platform: 'Facebook', roi: 2.3 },
          { platform: 'Google', roi: 3.8 }
        ];
        chartType = 'bar';
        chartTitle = 'Content ROI by Platform';
        insights = [
          { title: 'Highest ROI', description: 'TikTok platform shows the highest ROI at 4.1, 25% above average.' },
          { title: 'ROI Variability', description: 'Significant ROI variability across social media platforms, with a 43% difference between highest and lowest.' }
        ];
        recommendations = [
          'Increase content investment on TikTok for higher returns',
          'Analyze Facebook\'s underperformance and adjust content strategy',
          'Optimize existing YouTube content to improve ROI potential'
        ];
      } else {
        const dates = ['2025-03-01', '2025-03-05', '2025-03-10', '2025-03-15', '2025-03-20', '2025-03-25', '2025-03-31'];
        data = dates.map(date => ({
          date,
          impressions: Math.round(Math.random() * 100000 + 50000),
          clicks: Math.round(Math.random() * 10000 + 5000),
          conversions: Math.round(Math.random() * 1000 + 500)
        }));
        chartType = 'line';
        chartTitle = '2025.3.1-2025.4.1 Social Media Performance Trend';
        insights = [
          { title: 'Impression Growth', description: 'During March 2025, total impressions grew by 15%, indicating improved brand awareness in the spring season.' },
          { title: 'Conversion Rate Improvement', description: 'Conversion rate significantly improved in the last week of March 2025, from 1.3% to 1.9%.' }
        ];
        recommendations = [
          'Continue expanding content reach to increase brand exposure in April 2025',
          'Analyze factors behind late March conversion rate improvement and apply to April campaigns',
          'Focus on top-performing platforms to maximize ROI for Q2 2025'
        ];
      }
    } else if (module === 'insight') {
      data = [
        { term: 'Robot vacuum pet hair', volume: 22500, growth: 18 },
        { term: 'Best robot vacuum', volume: 18700, growth: 5 },
        { term: 'Robot vacuum with mop', volume: 16200, growth: 32 },
        { term: 'Smart robot vacuum', volume: 12800, growth: 22 },
        { term: 'Robot vacuum self-emptying', volume: 9500, growth: 45 }
      ];
      chartType = 'bar';
      chartTitle = 'Top Search Terms by Volume';
      insights = [
        { title: 'Growth Trend', description: 'Self-emptying functionality shows the highest growth at 45%, indicating strong consumer interest in this feature.' },
        { title: 'Volume Insights', description: 'Pet hair specific searches represent the highest volume, suggesting a key consumer pain point.' }
      ];
      recommendations = [
        'Prioritize pet hair capabilities in product marketing',
        'Highlight self-emptying features in upcoming campaigns',
        'Create content addressing mop functionality to capture growing interest'
      ];
    } else if (module === 'koc') {
      if (subModule === 'koc-youtube' || query.toLowerCase().includes('youtube')) {
        data = [
          { platform: 'YouTube', engagement: 4.2, reach: 250000, conversion: 1.8 },
          { platform: 'Instagram', engagement: 3.5, reach: 180000, conversion: 1.2 },
          { platform: 'TikTok', engagement: 5.8, reach: 320000, conversion: 2.1 },
          { platform: 'Facebook', engagement: 2.7, reach: 150000, conversion: 0.9 },
          { platform: 'Twitter', engagement: 2.1, reach: 85000, conversion: 0.5 }
        ];
        chartType = 'bar';
        chartTitle = 'Platform Performance Metrics';
        insights = [
          { title: 'TikTok Dominance', description: 'TikTok shows the highest engagement (5.8%) and conversion rates (2.1%), making it the most effective platform for KOC activities.' },
          { title: 'Platform Efficiency', description: 'YouTube offers good balance between reach and conversion, providing cost-effective results.' }
        ];
        recommendations = [
          'Increase TikTok content creator partnerships',
          'Focus YouTube strategy on detailed product demonstrations',
          'Optimize Instagram content for higher engagement rates'
        ];
      } else if (subModule === 'koc-paid' || query.toLowerCase().includes('influencer') || query.toLowerCase().includes('roi')) {
        data = [
          { name: 'Mega Influencer A', followers: 1500000, engagement: 2.1, cost: 8500 },
          { name: 'Mega Influencer B', followers: 2200000, engagement: 1.8, cost: 12000 },
          { name: 'Micro Influencer C', followers: 85000, engagement: 5.2, cost: 1200 },
          { name: 'Micro Influencer D', followers: 120000, engagement: 4.8, cost: 1500 },
          { name: 'Mid-tier Influencer E', followers: 450000, engagement: 3.5, cost: 3800 },
          { name: 'Mid-tier Influencer F', followers: 380000, engagement: 3.2, cost: 3200 }
        ];
        chartType = 'scatter';
        chartTitle = 'Influencer ROI Analysis';
        insights = [
          { title: 'Micro Influencer Value', description: 'Micro influencers consistently deliver higher engagement rates (4.8-5.2%) at significantly lower costs.' },
          { title: 'Cost Efficiency', description: 'Mid-tier influencers offer a balanced approach with moderate reach and engagement at reasonable costs.' }
        ];
        recommendations = [
          'Allocate 60% of influencer budget to micro influencers for best ROI',
          'Reserve mega influencers for major product launches only',
          'Develop long-term relationships with top-performing mid-tier influencers'
        ];
      } else {
        data = [
          { platform: 'YouTube', engagement: 4.2, reach: 250000, conversion: 1.8 },
          { platform: 'Instagram', engagement: 3.5, reach: 180000, conversion: 1.2 },
          { platform: 'TikTok', engagement: 5.8, reach: 320000, conversion: 2.1 },
          { platform: 'Facebook', engagement: 2.7, reach: 150000, conversion: 0.9 },
          { platform: 'Twitter', engagement: 2.1, reach: 85000, conversion: 0.5 }
        ];
        chartType = 'bar';
        chartTitle = 'KOC Platform Performance Metrics';
        insights = [
          { title: 'TikTok Dominance', description: 'TikTok shows the highest engagement (5.8%) and conversion rates (2.1%), making it the most effective platform for KOC activities.' },
          { title: 'Platform Efficiency', description: 'YouTube offers good balance between reach and conversion, providing cost-effective results.' }
        ];
        recommendations = [
          'Increase TikTok content creator partnerships',
          'Focus YouTube strategy on detailed product demonstrations',
          'Optimize Instagram content for higher engagement rates'
        ];
      }
    } else if (module === 'feeds') {
      if (subModule === 'feeds-google' || query.toLowerCase().includes('google')) {
        data = [
          { campaign: 'Product Launch Q1', ctr: 3.8, cpc: 1.55, conversion: 3.5 },
          { campaign: 'Brand Awareness', ctr: 2.9, cpc: 1.25, conversion: 2.1 },
          { campaign: 'Competitor Targeting', ctr: 3.2, cpc: 1.85, conversion: 2.8 },
          { campaign: 'Remarketing', ctr: 4.5, cpc: 1.15, conversion: 4.2 },
          { campaign: 'Shopping Ads', ctr: 3.6, cpc: 1.65, conversion: 3.9 }
        ];
        chartType = 'bar';
        chartTitle = 'Google Ads Campaign Performance';
        insights = [
          { title: 'Remarketing Efficiency', description: 'Remarketing campaigns show the highest CTR (4.5%) and conversion rate (4.2%) with the lowest CPC ($1.15).' },
          { title: 'Shopping Performance', description: 'Shopping ads deliver strong conversion rates (3.9%), making them a cost-effective channel for direct sales.' }
        ];
        recommendations = [
          'Increase budget allocation for remarketing campaigns',
          'Expand shopping ad product coverage',
          'Optimize competitor targeting campaigns to improve conversion rates'
        ];
      } else if (subModule === 'feeds-facebook' || query.toLowerCase().includes('facebook')) {
        data = [
          { format: 'Single Image', engagement: 2.8, reach: 185000, conversion: 1.2 },
          { format: 'Carousel', engagement: 3.5, reach: 150000, conversion: 1.8 },
          { format: 'Video', engagement: 4.2, reach: 210000, conversion: 1.5 },
          { format: 'Collection', engagement: 3.8, reach: 120000, conversion: 2.2 },
          { format: 'Stories', engagement: 3.2, reach: 175000, conversion: 1.0 }
        ];
        chartType = 'bar';
        chartTitle = 'Facebook Ad Format Performance';
        insights = [
          { title: 'Video Engagement', description: 'Video ads generate the highest engagement rate (4.2%) and reach (210,000), making them ideal for brand awareness.' },
          { title: 'Collection Conversion', description: 'Collection format delivers the highest conversion rate (2.2%), despite lower reach.' }
        ];
        recommendations = [
          'Prioritize collection format for direct response campaigns',
          'Use video ads for upper-funnel awareness campaigns',
          'Test carousel ads for product showcases to leverage their strong conversion rate'
        ];
      } else if (subModule === 'feeds-amazon' || query.toLowerCase().includes('amazon')) {
        data = [
          { product: 'RoboVac X8', acos: 15.2, conversion: 8.5, reviews: 4.6 },
          { product: 'RoboVac G30', acos: 18.7, conversion: 7.2, reviews: 4.3 },
          { product: 'RoboVac L35', acos: 12.8, conversion: 9.1, reviews: 4.8 },
          { product: 'RoboVac 11S', acos: 20.5, conversion: 6.8, reviews: 4.2 },
          { product: 'RoboVac 30C', acos: 16.9, conversion: 7.5, reviews: 4.4 }
        ];
        chartType = 'bar';
        chartTitle = 'Amazon Product Performance';
        insights = [
          { title: 'Premium Model Efficiency', description: 'RoboVac L35 shows the lowest ACOS (12.8%) and highest conversion rate (9.1%), indicating strong market position.' },
          { title: 'Review Correlation', description: 'Products with higher review ratings consistently show better conversion rates and lower advertising costs.' }
        ];
        recommendations = [
          'Increase ad spend on RoboVac L35 to capitalize on its efficiency',
          'Implement review generation strategy for lower-rated products',
          'Optimize product listings for RoboVac 11S to improve conversion rate'
        ];
      } else {
        data = [
          { channel: 'YouTube Ads', ctr: 3.2, cpc: 1.25, conversion: 2.8 },
          { channel: 'Instagram Ads', ctr: 2.7, cpc: 1.40, conversion: 2.2 },
          { channel: 'Facebook Ads', ctr: 2.1, cpc: 0.95, conversion: 1.9 },
          { channel: 'Google Search', ctr: 3.8, cpc: 1.55, conversion: 3.5 },
          { channel: 'Amazon PPC', ctr: 3.2, cpc: 1.60, conversion: 5.2 }
        ];
        chartType = 'bar';
        chartTitle = 'Ad Channel Performance Metrics';
        insights = [
          { title: 'Amazon Conversion Rate', description: 'Amazon PPC has the highest conversion rate at 5.2%, significantly outperforming other channels.' },
          { title: 'Cost Efficiency', description: 'Facebook offers the lowest CPC at $0.95, making it a cost-effective channel for broad reach.' }
        ];
        recommendations = [
          'Increase budget allocation for Amazon PPC campaigns',
          'Optimize Google Search ad copy to improve already strong conversion rates',
          'Use Facebook for awareness campaigns due to low cost per click'
        ];
      }
    } else if (module === 'private') {
      data = [
        { source: 'Direct', traffic: 35 },
        { source: 'Email', traffic: 25 },
        { source: 'WhatsApp', traffic: 15 },
        { source: 'Social Media', traffic: 20 },
        { source: 'Other', traffic: 5 }
      ];
      chartType = 'pie';
      chartTitle = 'DTC Website Traffic Sources';
      insights = [
        { title: 'Direct Traffic Insight', description: 'Direct traffic accounts for 35% of DTC visits, indicating strong brand recognition.' },
        { title: 'Private Channels', description: 'Combined private channels (Email + WhatsApp) drive 40% of traffic, demonstrating the effectiveness of owned media.' }
      ];
      recommendations = [
        'Strengthen email marketing with personalized product recommendations',
        'Expand WhatsApp group strategy to increase private channel traffic',
        'Implement cohesive messaging across all private domain touchpoints'
      ];
    }

    return {
      data,
      chartType,
      chartTitle,
      insights,
      recommendations
    } as SearchResult;
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setShowResults(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = generateMockData(query);
    setSearchResults(result);
    setLoading(false);
    setShowResults(true);
  };

  const handleQuestionClick = (question: string) => {
    handleSearch(question);
  };

  return {
    loading,
    showResults,
    searchResults,
    handleSearch,
    handleQuestionClick
  };
};
