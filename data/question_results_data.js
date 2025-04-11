// Question results data for Eufy Content-Driven Growth Decision System
const questionResultsData = {
  // Overview module questions
  overview: {
    'overview-dashboard': [
      {
        question: "How are our social media marketing campaigns performing overall?",
        thinking_steps: [
          {step: 1, thought: "Analyzing social media metrics across all platforms"},
          {step: 2, thought: "Comparing performance against historical data"},
          {step: 3, thought: "Identifying key performance trends and outliers"},
          {step: 4, thought: "Integrating data from multiple marketing sources"},
          {step: 5, thought: "Formulating comprehensive performance assessment"}
        ],
        result: {
          data: [
            {date: "2025-03", impressions: 65432, clicks: 8765, conversions: 876},
            {date: "2025-04", impressions: 71250, clicks: 9123, conversions: 912},
            {date: "2025-05", impressions: 73421, clicks: 9687, conversions: 985},
            {date: "2025-06", impressions: 79842, clicks: 10532, conversions: 1021},
            {date: "2025-07", impressions: 84512, clicks: 11123, conversions: 1078},
            {date: "2025-08", impressions: 88754, clicks: 11765, conversions: 1142},
            {date: "2025-09", impressions: 92154, clicks: 12532, conversions: 1211},
            {date: "2025-10", impressions: 96421, clicks: 13245, conversions: 1298},
            {date: "2025-11", impressions: 102578, clicks: 14532, conversions: 1465},
            {date: "2025-12", impressions: 109842, clicks: 15687, conversions: 1598},
            {date: "2026-01", impressions: 115754, clicks: 16854, conversions: 1712},
            {date: "2026-02", impressions: 123421, clicks: 18123, conversions: 1842}
          ],
          chartType: "line",
          chartTitle: "2025-2026 Social Media Performance Trend",
          insights: [
            {title: "Impression Growth", description: "Over the past 12 months, total impressions grew by 88%, indicating improved brand awareness."},
            {title: "Conversion Rate Improvement", description: "Conversion rate improved from 1.3% to 1.5% throughout the year."}
          ],
          recommendations: [
            "Continue expanding content reach to increase brand exposure",
            "Analyze factors behind Q3/Q4 conversion rate improvement and replicate across channels",
            "Focus on top-performing platforms to maximize ROI"
          ]
        }
      }
    ],
    'overview-kpi': [
      {
        question: "How have our key performance indicators changed over the last quarter?",
        result: {
          data: [
            {date: "2025-12", impressions: 1098420, clicks: 156870, conversions: 15980, cac: 18.5, ltv: 125},
            {date: "2026-01", impressions: 1157540, clicks: 168540, conversions: 17120, cac: 17.8, ltv: 128},
            {date: "2026-02", impressions: 1234210, clicks: 181230, conversions: 18420, cac: 17.2, ltv: 132}
          ],
          chartType: "line",
          chartTitle: "Q4 2025 KPI Trends",
          insights: [
            {title: "Conversion Growth", description: "Conversions increased by 15.3% over the quarter."},
            {title: "Efficiency Improvement", description: "Customer acquisition cost decreased by 7%."}
          ],
          recommendations: [
            "Continue optimizing conversion funnels that demonstrated Q4 improvements",
            "Analyze factors contributing to CAC reduction for application across all channels"
          ]
        }
      }
    ],
    'overview-roi': [
      {
        question: "What is the ROI of content across different platforms?",
        result: {
          data: [
            {platform: "YouTube", roi: 3.2},
            {platform: "Instagram", roi: 2.7},
            {platform: "TikTok", roi: 4.1},
            {platform: "Facebook", roi: 2.3},
            {platform: "Google", roi: 3.8}
          ],
          chartType: "bar",
          chartTitle: "Content ROI by Platform",
          insights: [
            {title: "Highest ROI", description: "TikTok platform shows the highest ROI at 4.1."},
            {title: "ROI Variability", description: "Significant ROI variability across platforms."}
          ],
          recommendations: [
            "Increase content investment on TikTok for higher returns",
            "Analyze Facebook's underperformance and adjust content strategy"
          ]
        }
      }
    ],
    'overview-trends': [
      {
        question: "What is our overall conversion rate trend for the past year?",
        result: {
          data: [
            {date: "2025-03", conversion_rate: 1.34},
            {date: "2025-08", conversion_rate: 1.29},
            {date: "2026-02", conversion_rate: 1.49}
          ],
          chartType: "line",
          chartTitle: "2025-2026 Conversion Rate Trend (%)",
          insights: [
            {title: "Upward Trend", description: "Conversion rates show a clear upward trend in the second half of the period."},
            {title: "Seasonal Patterns", description: "Early year performance shows fluctuation."}
          ],
          recommendations: [
            "Investigate November-February optimization strategies for broader application",
            "Develop targeted strategies for Q1/Q2 based on identified seasonal weaknesses"
          ]
        }
      }
    ]
  },
  
  // Insight module questions
  insight: {
    'insight-search': [
      {
        question: "What are the current trending search terms for robot vacuums?",
        result: {
          data: [
            {term: "Robot vacuum pet hair", volume: 22500, growth: 18},
            {term: "Best robot vacuum", volume: 18700, growth: 5},
            {term: "Robot vacuum with mop", volume: 16200, growth: 32},
            {term: "Smart robot vacuum", volume: 12800, growth: 22},
            {term: "Robot vacuum self-emptying", volume: 9500, growth: 45}
          ],
          chartType: "bar",
          chartTitle: "Top Search Terms by Volume",
          insights: [
            {title: "Growth Trend", description: "Self-emptying functionality shows the highest growth at 45%."},
            {title: "Volume Insights", description: "Pet hair specific searches represent the highest volume."}
          ],
          recommendations: [
            "Prioritize pet hair capabilities in product marketing",
            "Highlight self-emptying features in upcoming campaigns"
          ]
        }
      }
    ],
    'insight-voc': [
      {
        question: "Show me the sentiment analysis of customer reviews",
        result: {
          data: [
            {sentiment: "Positive", value: 63},
            {sentiment: "Neutral", value: 24},
            {sentiment: "Negative", value: 13}
          ],
          chartType: "pie",
          chartTitle: "Customer Review Sentiment Analysis",
          insights: [
            {title: "Positive Dominance", description: "Positive sentiment accounts for 63% of all reviews."},
            {title: "Negative Triggers", description: "Analysis of negative reviews shows battery life and noise concerns."}
          ],
          recommendations: [
            "Create marketing content highlighting positive experiences",
            "Address battery life concerns in upcoming product iterations"
          ]
        }
      }
    ],
    'insight-viral': [
      {
        question: "Which video content has gone viral in our industry recently?",
        result: {
          data: [
            {title: "Vacuum vs. Cat", views: 3250000, shares: 185000, platform: "TikTok"},
            {title: "Cleaning Time-lapse", views: 2840000, shares: 145000, platform: "YouTube"},
            {title: "Pet Hair Challenge", views: 2420000, shares: 134000, platform: "TikTok"}
          ],
          chartType: "bar",
          chartTitle: "Top Viral Videos by Views and Shares",
          insights: [
            {title: "Content Themes", description: "Pet-related content dominates viral videos."},
            {title: "Platform Impact", description: "TikTok generates higher share-to-view ratios."}
          ],
          recommendations: [
            "Develop more pet-focused content, particularly for TikTok distribution",
            "Create before/after cleaning content with time-lapse format"
          ]
        }
      }
    ],
    'insight-factors': [
      {
        question: "What factors contribute to viral content in the robot vacuum space?",
        result: {
          data: [
            {factor: "Pet Interaction", score: 85},
            {factor: "Before/After Results", score: 78},
            {factor: "Unusual Obstacles", score: 72},
            {factor: "Space Efficiency", score: 65},
            {factor: "Innovative Features", score: 62}
          ],
          chartType: "radar",
          chartTitle: "Viral Content Success Factors",
          insights: [
            {title: "Emotional Connection", description: "Content that creates emotional responses performs better."},
            {title: "Practical Demonstration", description: "Real-world usage scenarios outperform specifications."}
          ],
          recommendations: [
            "Focus on creating content showing pet interactions with vacuum products",
            "Develop before/after cleaning transformation videos for high impact"
          ]
        }
      }
    ]
  },
  
  // KOC & KOL module questions
  koc: {
    'koc-trends': [
      {
        question: "Show me content trends on YouTube for robot vacuums",
        result: {
          data: [
            {category: "Reviews", volume: 42, growth: 8},
            {category: "Comparisons", volume: 28, growth: 12},
            {category: "Pet-Specific", volume: 18, growth: 35},
            {category: "Tech Innovations", volume: 22, growth: 15},
            {category: "Cleaning Challenges", volume: 14, growth: 22}
          ],
          chartType: "bar",
          chartTitle: "YouTube Content Trends for Robot Vacuums",
          insights: [
            {title: "Growing Niches", description: "Pet-specific content shows the highest growth at 35%."},
            {title: "Content Distribution", description: "Reviews remain the dominant content type."}
          ],
          recommendations: [
            "Invest in pet-specific content creation to capitalize on high growth trends",
            "Develop cleaning challenge content to engage with growing segment"
          ]
        }
      }
    ],
    'koc-youtube': [
      {
        question: "Which YouTube influencers have the highest engagement rate?",
        result: {
          data: [
            {name: "Tech Reviewer Pro", followers: 1240000, engagement: 6.2, cost: 8500},
            {name: "Home Solutions", followers: 870000, engagement: 7.4, cost: 5200},
            {name: "Clean Tech", followers: 640000, engagement: 8.1, cost: 4200}
          ],
          chartType: "scatter",
          chartTitle: "YouTube Influencer Engagement vs Reach",
          insights: [
            {title: "Engagement Efficiency", description: "Mid-tier influencers show highest engagement rates."},
            {title: "Cost-Effectiveness", description: "Smaller channels provide better engagement-to-cost ratio."}
          ],
          recommendations: [
            "Prioritize partnerships with mid-tier, high-engagement channels",
            "Negotiate performance-based components in influencer contracts"
          ]
        }
      }
    ],
    'koc-instagram': [
      {
        question: "Which Instagram influencers have the highest engagement rate?",
        result: {
          data: [
            {name: "Modern Home", followers: 680000, engagement: 5.2, cost: 3800},
            {name: "Clean Living", followers: 450000, engagement: 6.3, cost: 2900},
            {name: "Tech Essentials", followers: 920000, engagement: 4.2, cost: 5400}
          ],
          chartType: "scatter",
          chartTitle: "Instagram Influencer Engagement vs Reach",
          insights: [
            {title: "Engagement Leaders", description: "'Clean Living' shows highest engagement at 6.3%."},
            {title: "Size vs. Engagement", description: "Engagement rate decreases as follower count increases."}
          ],
          recommendations: [
            "Develop a mixed portfolio of Instagram influencers, favoring engagement over reach",
            "Create multi-post campaigns with high-engagement accounts"
          ]
        }
      }
    ],
    'koc-tiktok': [
      {
        question: "Which content formats drive the most engagement on TikTok?",
        result: {
          data: [
            {format: "Before/After", engagement: 8.4, virality: 12.5, conversion: 1.8},
            {format: "Pet Interactions", engagement: 9.2, virality: 22.4, conversion: 1.2},
            {format: "Unboxing", engagement: 5.4, virality: 8.9, conversion: 2.1}
          ],
          chartType: "bar",
          chartTitle: "TikTok Content Format Performance",
          insights: [
            {title: "Virality Factors", description: "Pet interaction content achieves highest virality."},
            {title: "Conversion Efficiency", description: "Unboxing videos show highest conversion rate."}
          ],
          recommendations: [
            "Develop dual-funnel content strategy: pet content for awareness, unboxing for conversions",
            "Create unified campaign themes that incorporate multiple format types"
          ]
        }
      }
    ],
    'koc-paid': [
      {
        question: "What is the ROI comparison between micro and macro influencers?",
        result: {
          data: [
            {tier: "Nano (<10K)", roi: 4.8, cpe: 0.22, retention: 68},
            {tier: "Micro (10K-100K)", roi: 4.2, cpe: 0.38, retention: 64},
            {tier: "Macro (500K-1M)", roi: 2.8, cpe: 0.87, retention: 52}
          ],
          chartType: "bar",
          chartTitle: "Influencer ROI by Size Tier",
          insights: [
            {title: "Inverse Relationship", description: "ROI consistently decreases as influencer size increases."},
            {title: "Retention Impact", description: "Nano-influencer audiences show higher retention."}
          ],
          recommendations: [
            "Allocate at least 40% of influencer budget to nano and micro tiers",
            "Implement multi-tier strategy rather than concentrating budget on few large influencers"
          ]
        }
      }
    ],
    'koc-self': [
      {
        question: "How is our self-operated KOC content performing?",
        result: {
          data: [
            {channel: "Eufy Official", views: 245000, engagement: 3.2, conversion: 2.6},
            {channel: "Eufy Lifestyle", views: 192000, engagement: 5.4, conversion: 2.2},
            {channel: "Eufy Tech", views: 168000, engagement: 4.2, conversion: 2.7}
          ],
          chartType: "bar",
          chartTitle: "Self-Operated Channel Performance",
          insights: [
            {title: "Engagement Leaders", description: "'Eufy Lifestyle' shows highest engagement (5.4%)."},
            {title: "Conversion Efficiency", description: "'Eufy Tech' delivers highest conversion rate (2.7%)."}
          ],
          recommendations: [
            "Expand 'Eufy Lifestyle' content with increased posting frequency",
            "Apply lifestyle content approach to technical channels to improve engagement"
          ]
        }
      }
    ],
    'koc-user': [
      {
        question: "What is the typical user journey for our products?",
        result: {
          data: [
            {stage: "Awareness", source: "Social", percentage: 42},
            {stage: "Consideration", source: "Reviews", percentage: 35},
            {stage: "Decision", source: "Features", percentage: 32}
          ],
          chartType: "bar",
          chartTitle: "Customer Journey Analysis",
          insights: [
            {title: "Social Dominance", description: "Social media is the primary awareness driver (42%)."},
            {title: "Review Importance", description: "Reviews are critical at the consideration stage (35%)."}
          ],
          recommendations: [
            "Optimize social content for early awareness",
            "Develop a proactive review management strategy"
          ]
        }
      }
    ],
    'koc-search': [
      {
        question: "How do our products rank in search results compared to competitors?",
        result: {
          data: [
            {term: "Robot vacuum", rank: 4, competitor_best: 1, trend: "+2"},
            {term: "Smart vacuum", rank: 3, competitor_best: 2, trend: "+5"},
            {term: "Robot vacuum with mop", rank: 2, competitor_best: 1, trend: "+3"}
          ],
          chartType: "bar",
          chartTitle: "Search Ranking Performance",
          insights: [
            {title: "Improvement Trend", description: "Search rankings have improved across all key terms."},
            {title: "Competitive Gap", description: "Largest gap to competitors exists in 'Robot vacuum'."}
          ],
          recommendations: [
            "Allocate additional SEO resources to close competitive gaps",
            "Leverage momentum in 'Smart vacuum' with expanded content"
          ]
        }
      }
    ]
  },
  
  // Feeds module questions
  feeds: {
    'feeds-effectiveness': [
      {
        question: "How effective are our ad campaigns across all platforms?",
        result: {
          data: [
            {platform: "Google Search", ctr: 3.8, cpc: 1.55, conversion: 3.5, roi: 3.2},
            {platform: "Facebook", ctr: 2.1, cpc: 0.95, conversion: 1.9, roi: 3.1},
            {platform: "Amazon", ctr: 3.2, cpc: 1.60, conversion: 5.2, roi: 4.4}
          ],
          chartType: "bar",
          chartTitle: "Ad Platform Performance Metrics",
          insights: [
            {title: "Amazon Dominance", description: "Amazon delivers exceptional performance with highest ROI."},
            {title: "Search Efficiency", description: "Google Search shows strong CTR but with higher CPC."}
          ],
          recommendations: [
            "Increase Amazon advertising budget allocation",
            "Optimize Google Search campaigns to reduce CPC while maintaining conversion"
          ]
        }
      }
    ],
    'feeds-campaigns': [
      {
        question: "What is the performance of our Google Ad campaigns?",
        result: {
          data: [
            {campaign: "Smart Home Integration", impressions: 186000, ctr: 4.2, conversion: 3.8, roi: 3.6},
            {campaign: "Pet Owner Solutions", impressions: 215000, ctr: 4.8, conversion: 4.1, roi: 3.9},
            {campaign: "Battery Life Focus", impressions: 124000, ctr: 3.2, conversion: 2.8, roi: 2.7}
          ],
          chartType: "bar",
          chartTitle: "Google Ad Campaign Performance",
          insights: [
            {title: "Pet Focus Success", description: "The 'Pet Owner Solutions' campaign delivers strongest performance."},
            {title: "Feature Preference", description: "Smart home integration drives stronger engagement."}
          ],
          recommendations: [
            "Expand 'Pet Owner Solutions' campaign with increased budget",
            "Reduce investment in battery life messaging"
          ]
        }
      }
    ],
    'feeds-channel': [
      {
        question: "Which sales channels are driving the most conversions?",
        result: {
          data: [
            {channel: "Amazon", traffic: 38, conversion: 5.2, aov: 312, clv: 580},
            {channel: "Direct Website", traffic: 24, conversion: 3.8, aov: 348, clv: 640},
            {channel: "Retail Partners", traffic: 22, conversion: 2.2, aov: 298, clv: 520}
          ],
          chartType: "bar",
          chartTitle: "Sales Channel Performance",
          insights: [
            {title: "Amazon Dominance", description: "Amazon accounts for 38% of traffic with highest conversion rate."},
            {title: "DTC Value", description: "Direct website shows highest AOV and CLV."}
          ],
          recommendations: [
            "Maintain Amazon focus for volume while implementing upsell strategies",
            "Enhance direct website conversion funnel to capitalize on higher customer value"
          ]
        }
      }
    ],
    'feeds-google': [
      {
        question: "What is the best-performing Google ad campaign?",
        result: {
          data: [
            {campaign: "Smart Home Integration", impressions: 186000, ctr: 4.2, conversion: 3.8, roi: 3.6},
            {campaign: "Pet Owner Solutions", impressions: 215000, ctr: 4.8, conversion: 4.1, roi: 3.9},
            {campaign: "Battery Life Focus", impressions: 124000, ctr: 3.2, conversion: 2.8, roi: 2.7}
          ],
          chartType: "bar",
          chartTitle: "Google Ad Campaign Performance",
          insights: [
            {title: "Pet Focus Success", description: "The 'Pet Owner Solutions' campaign delivers best performance."},
            {title: "Conversion Leaders", description: "Pet-focused ads convert 46% better than battery life ads."}
          ],
          recommendations: [
            "Expand 'Pet Owner Solutions' campaign budget by 30%",
            "Test new pet-focused creative variations"
          ]
        }
      }
    ],
    'feeds-facebook': [
      {
        question: "What is our ROI on Facebook advertising?",
        result: {
          data: [
            {audience: "Homeowners", spend: 12500, reach: 420000, conversion: 1.8, roi: 2.9},
            {audience: "Pet Owners", spend: 18750, reach: 380000, conversion: 2.4, roi: 3.7},
            {audience: "Tech Enthusiasts", spend: 15000, reach: 340000, conversion: 1.7, roi: 2.5}
          ],
          chartType: "bar",
          chartTitle: "Facebook Audience Performance",
          insights: [
            {title: "Pet Owner Value", description: "Pet owner audience delivers 48% higher ROI than tech enthusiasts."},
            {title: "Conversion Efficiency", description: "Pet owners convert at 2.4%, significantly above platform average."}
          ],
          recommendations: [
            "Reallocate budget from tech enthusiasts to pet owner audiences",
            "Develop more pet-focused creative assets for Facebook"
          ]
        }
      }
    ],
    'feeds-amazon': [
      {
        question: "How is our product performance on Amazon?",
        result: {
          data: [
            {product: "C20 Robot Vacuum", impressions: 285000, ctr: 3.8, conversion: 5.4, roi: 4.8},
            {product: "P30 Robot Vacuum", impressions: 215000, ctr: 3.2, conversion: 4.9, roi: 4.2},
            {product: "S10 Robot Vacuum", impressions: 168000, ctr: 2.9, conversion: 4.1, roi: 3.5}
          ],
          chartType: "bar",
          chartTitle: "Amazon Product Performance",
          insights: [
            {title: "C20 Leadership", description: "C20 model outperforms all metrics with 37% higher ROI than S10."},
            {title: "Conversion Excellence", description: "All products show strong conversion rates above platform average."}
          ],
          recommendations: [
            "Feature C20 model prominently in Amazon promotions",
            "Apply C20 listing optimization techniques to other product pages"
          ]
        }
      }
    ],
    'feeds-product': [
      {
        question: "What is the product performance on sales channels?",
        result: {
          data: [
            {product: "C20 Robot Vacuum", amazon: 42, website: 28, retail: 30},
            {product: "P30 Robot Vacuum", amazon: 38, website: 32, retail: 30},
            {product: "S10 Robot Vacuum", amazon: 45, website: 25, retail: 30}
          ],
          chartType: "bar",
          chartTitle: "Product Sales Distribution by Channel (%)",
          insights: [
            {title: "Channel Variation", description: "S10 shows strongest Amazon performance but weakest website sales."},
            {title: "Balanced Distribution", description: "P30 shows most balanced distribution across channels."}
          ],
          recommendations: [
            "Optimize S10 website product page to improve direct sales",
            "Use P30 as benchmark for balanced channel strategy"
          ]
        }
      }
    ]
  },
  
  // Private Domain module questions
  private: {
    'private-landing': [
      {
        question: "How are our landing pages performing?",
        result: {
          data: [
            {page: "C20 Product Page", visitors: 28500, bounce: 38, conversion: 3.8, aov: 328},
            {page: "Pet Hair Solutions", visitors: 18200, bounce: 32, conversion: 4.5, aov: 342},
            {page: "Smart Home Hub", visitors: 12400, bounce: 41, conversion: 3.2, aov: 315}
          ],
          chartType: "bar",
          chartTitle: "Landing Page Performance",
          insights: [
            {title: "Pet Focus Efficiency", description: "Pet Hair Solutions page shows highest conversion rate and AOV."},
            {title: "Traffic Distribution", description: "Product pages receive higher traffic but lower engagement metrics."}
          ],
          recommendations: [
            "Apply Pet Hair Solutions page optimizations to other landing pages",
            "Reduce bounce rate on Smart Home Hub page with improved engagement elements"
          ]
        }
      }
    ],
    'private-tags': [
      {
        question: "How do content tags affect landing page performance?",
        result: {
          data: [
            {tag: "Pet Friendly", pages: 8, avg_time: 3.8, bounce: 31, conversion: 4.2},
            {tag: "Self Cleaning", pages: 6, avg_time: 3.2, bounce: 36, conversion: 3.8},
            {tag: "Smart Home", pages: 12, avg_time: 2.9, bounce: 42, conversion: 3.1}
          ],
          chartType: "bar",
          chartTitle: "Content Tag Performance",
          insights: [
            {title: "Pet Content Engagement", description: "Pet Friendly tag shows highest engagement and conversion metrics."},
            {title: "Smart Home Weakness", description: "Smart Home tagged pages show higher bounce rates despite high volume."}
          ],
          recommendations: [
            "Increase pet-related content across the website",
            "Improve Smart Home content with more practical application examples"
          ]
        }
      }
    ],
    'private-whatsapp': [
      {
        question: "What content generates the most engagement in our WhatsApp groups?",
        result: {
          data: [
            {content: "Cleaning Tips", messages: 842, reactions: 1250, shares: 320},
            {content: "Product Tutorials", messages: 625, reactions: 980, shares: 285},
            {content: "Special Offers", messages: 380, reactions: 840, shares: 210}
          ],
          chartType: "bar",
          chartTitle: "WhatsApp Content Engagement",
          insights: [
            {title: "Utility Value", description: "Practical cleaning tips generate highest overall engagement."},
            {title: "Reaction Efficiency", description: "Special offers generate high reaction-to-message ratio."}
          ],
          recommendations: [
            "Focus WhatsApp strategy on practical utility content with periodic offers",
            "Develop more cleaning tips content specifically for WhatsApp distribution"
          ]
        }
      }
    ],
    'private-email': [
      {
        question: "How effective is our email marketing campaign?",
        result: {
          data: [
            {campaign: "Product Updates", opens: 32, clicks: 8.4, conversion: 2.2, roi: 3.8},
            {campaign: "Cleaning Tips", opens: 38, clicks: 12.6, conversion: 1.8, roi: 3.2},
            {campaign: "Special Offers", opens: 42, clicks: 18.2, conversion: 3.4, roi: 4.6}
          ],
          chartType: "bar",
          chartTitle: "Email Campaign Performance",
          insights: [
            {title: "Offer Effectiveness", description: "Special offers drive highest open, click and conversion rates."},
            {title: "Content Engagement", description: "Cleaning tips generate strong engagement but lower conversion."}
          ],
          recommendations: [
            "Increase frequency of special offer emails with clear CTAs",
            "Incorporate product value proposition into cleaning tips content"
          ]
        }
      }
    ],
    'private-dtc': [
      {
        question: "What is the traffic source breakdown for our DTC website?",
        result: {
          data: [
            {source: "Direct", traffic: 35},
            {source: "Email", traffic: 25},
            {source: "WhatsApp", traffic: 15},
            {source: "Social Media", traffic: 20},
            {source: "Other", traffic: 5}
          ],
          chartType: "pie",
          chartTitle: "DTC Website Traffic Sources",
          insights: [
            {title: "Direct Traffic Insight", description: "Direct traffic accounts for 35% of DTC visits."},
            {title: "Private Channels", description: "Combined private channels drive 40% of traffic."}
          ],
          recommendations: [
            "Strengthen email marketing with personalized product recommendations",
            "Expand WhatsApp group strategy to increase private channel traffic"
          ]
        }
      }
    ]
  }
};
