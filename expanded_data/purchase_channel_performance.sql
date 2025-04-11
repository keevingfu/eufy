-- Purchase Channel Performance Table
-- 渠道效果分析表

CREATE TABLE IF NOT EXISTS purchase_channel_performance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date_period TEXT,                     -- 日期周期(日/周/月/季/年)
    period_start DATE,                    -- 周期开始日期
    period_end DATE,                      -- 周期结束日期
    channel_name TEXT,                    -- 渠道名称
    channel_type TEXT,                    -- 渠道类型(社交媒体/电商平台/自有网站/线下零售/联盟营销等)
    region TEXT,                          -- 地区
    product_category TEXT,                -- 产品类别
    
    -- 流量指标
    traffic_volume INTEGER,               -- 流量数量
    traffic_source TEXT,                  -- 主要流量来源
    new_visitors_percentage REAL,         -- 新访客百分比
    returning_visitors_percentage REAL,   -- 回访访客百分比
    bounce_rate REAL,                     -- 跳出率
    average_session_duration REAL,        -- 平均会话时长(秒)
    pages_per_session REAL,               -- 每次会话页面浏览量
    
    -- 转化指标
    impressions INTEGER,                  -- 展示次数
    clicks INTEGER,                        -- 点击次数
    click_through_rate REAL,              -- 点击率
    add_to_cart_count INTEGER,            -- 加入购物车次数
    add_to_cart_rate REAL,                -- 加入购物车率
    checkout_initiated_count INTEGER,     -- 开始结账次数
    checkout_completion_rate REAL,        -- 结账完成率
    purchase_count INTEGER,               -- 购买次数
    conversion_rate REAL,                 -- 转化率
    
    -- 销售指标
    total_revenue REAL,                   -- 总收入
    average_order_value REAL,             -- 平均订单价值
    units_sold INTEGER,                   -- 售出产品数量
    revenue_per_visitor REAL,             -- 每访客收入
    profit_margin REAL,                   -- 利润率
    return_rate REAL,                     -- 退货率
    
    -- 成本指标
    marketing_spend REAL,                 -- 营销支出
    customer_acquisition_cost REAL,       -- 客户获取成本
    return_on_ad_spend REAL,              -- 广告支出回报率
    return_on_investment REAL,            -- 投资回报率
    cost_per_click REAL,                  -- 每次点击成本
    cost_per_acquisition REAL,            -- 每次获客成本
    cost_per_mile REAL,                   -- 千次展示成本
    
    -- 内容影响
    content_influenced BOOLEAN,           -- 是否受内容影响
    influencing_content_ids TEXT,         -- 影响购买的内容ID
    content_to_purchase_time INTEGER,     -- 内容到购买时间(小时)
    content_type TEXT,                    -- 内容类型(视频/图片/文章等)
    content_platform TEXT,                -- 内容平台
    
    -- 受众分析
    demographic_data TEXT,                -- 人口统计数据(JSON格式)
    purchasing_behavior TEXT,             -- 购买行为模式
    customer_segment TEXT,                -- 客户细分
    customer_lifetime_value REAL,         -- 客户终身价值
    
    -- 竞争分析
    market_share REAL,                    -- 市场份额
    competitive_positioning TEXT,         -- 竞争定位
    price_competitiveness TEXT,           -- 价格竞争力
    
    -- 季节性分析
    seasonality_impact REAL,              -- 季节性影响
    promotional_impact REAL,              -- 促销活动影响
    year_over_year_growth REAL,           -- 同比增长率
    
    -- 归因分析
    attribution_model TEXT,               -- 归因模型
    first_touch_channel TEXT,             -- 首次触点渠道
    last_touch_channel TEXT,              -- 最后触点渠道
    assisted_conversion_value REAL,       -- 辅助转化价值
    
    notes TEXT,                           -- 备注
    data_source TEXT,                     -- 数据来源
    last_updated DATE,                    -- 最后更新日期
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 更新时间戳
);

-- Sample Data for purchase_channel_performance
INSERT INTO purchase_channel_performance (
    date_period, period_start, period_end, channel_name, channel_type, region, product_category,
    traffic_volume, traffic_source, new_visitors_percentage, returning_visitors_percentage, bounce_rate, average_session_duration, pages_per_session,
    impressions, clicks, click_through_rate, add_to_cart_count, add_to_cart_rate, checkout_initiated_count, checkout_completion_rate, purchase_count, conversion_rate,
    total_revenue, average_order_value, units_sold, revenue_per_visitor, profit_margin, return_rate,
    marketing_spend, customer_acquisition_cost, return_on_ad_spend, return_on_investment, cost_per_click, cost_per_acquisition, cost_per_mile,
    content_influenced, influencing_content_ids, content_to_purchase_time, content_type, content_platform,
    demographic_data, purchasing_behavior, customer_segment, customer_lifetime_value,
    market_share, competitive_positioning, price_competitiveness,
    seasonality_impact, promotional_impact, year_over_year_growth,
    attribution_model, first_touch_channel, last_touch_channel, assisted_conversion_value,
    notes, data_source, last_updated
) VALUES 
-- TikTok Shop
('月度', '2025-03-01', '2025-03-31', 'TikTok Shop', '社交媒体电商', '全球', '智能吸尘器',
 1250000, 'For You页面推荐,KOL内容', 68.0, 32.0, 35.0, 180.0, 3.5,
 8500000, 950000, 11.2, 120000, 12.6, 60000, 75.0, 45000, 4.7,
 15750000.00, 350.00, 47500, 12.60, 35.0, 3.2,
 1200000.00, 26.67, 13.13, 10.50, 1.26, 26.67, 0.14,
 1, 'TK-20250315-08,TK-20250401-01,TK-20250327-03', 48, '短视频', 'TikTok',
 '{"18-34岁":65,"女性":70,"城市居民":75}', '冲动购买,受视频展示效果影响', '年轻家庭', 850.00,
 18.5, '领先地位', '中高端定价,强调价值',
 0.7, 0.9, 28.5,
 '多渠道归因', 'TikTok视频发现', 'TikTok Shop直接购买', 32500.00,
 'TikTok Shop是增长最快的销售渠道,前后对比类内容带动转化效果显著', 'TikTok Shop数据API + GA4', '2025-04-01'
),

('月度', '2025-03-01', '2025-03-31', 'Amazon', '电商平台', '美国', '智能吸尘器',
 2200000, 'Amazon搜索,品牌店铺', 52.0, 48.0, 22.0, 320.0, 5.2,
 4500000, 780000, 17.3, 132000, 16.9, 85000, 82.0, 70000, 9.0,
 24500000.00, 350.00, 73500, 11.14, 28.0, 5.5,
 1800000.00, 25.71, 13.61, 10.89, 2.31, 25.71, 0.40,
 1, 'YT-20250212-02,YT-20250105-02', 120, '视频评测', 'YouTube',
 '{"25-54岁":75,"男女平衡":true,"郊区居民":65}', '经过研究的计划性购买', '理性购买者', 1200.00,
 32.5, '市场主导', '中高端定价,强调功能和可靠性',
 0.5, 0.6, 15.0,
 '加权多渠道归因', 'YouTube产品评测', 'Amazon产品页面', 65000.00,
 'Amazon是最稳定的销售渠道,深度评测类内容对高客单价产品销售影响显著', 'Amazon Seller Central + GA4', '2025-04-01'
),

('月度', '2025-03-01', '2025-03-31', '官方网站', '自有网站', '全球', '全品类',
 850000, '有机搜索,社交媒体引荐', 45.0, 55.0, 25.0, 420.0, 6.8,
 1200000, 420000, 35.0, 65000, 15.5, 38000, 80.0, 30000, 7.1,
 12000000.00, 400.00, 31500, 14.12, 42.0, 2.8,
 550000.00, 18.33, 21.82, 17.45, 1.31, 18.33, 0.46,
 1, 'IG-20250312-03,YT-20250212-02,TK-20250315-08', 96, '混合内容', '多平台',
 '{"30-55岁":70,"男女平衡":true,"城市专业人士":60}', '有针对性的购买,追求优惠', '品牌忠诚客户', 1500.00,
 12.0, '独特定位', '中高端定价,强调生态系统和独特功能',
 0.4, 0.7, 22.0,
 '数据驱动归因', '内容发现', '官网直接购买', 42000.00,
 '官方网站提供最高利润率和客户价值,内容营销驱动的流量占比提升', 'GA4 + CRM数据', '2025-04-01'
),

('月度', '2025-03-01', '2025-03-31', '实体零售', '线下零售', '全球', '全品类',
 不适用, '店内展示,线上引流到店', 不适用, 不适用, 不适用, 不适用, 不适用,
 950000, 不适用, 不适用, 不适用, 不适用, 不适用, 不适用, 25000, 不适用,
 9500000.00, 380.00, 26300, 不适用, 30.0, 4.2,
 750000.00, 30.00, 12.67, 10.13, 不适用, 30.00, 0.79,
 1, 'IG-20250205-09,YT-20250326-05', 240, '产品使用教程', '多平台',
 '{"35-65岁":80,"男女平衡":true,"郊区居民":70}', '看见实物后购买,重视店员演示', '传统购物者', 950.00,
 10.0, '辅助渠道', '统一定价,强调服务和保障',
 0.6, 0.5, 8.0,
 '线下归因', '线上内容发现', '店内购买', 15000.00,
 '线下渠道在高端产品销售中仍具重要作用,内容教育对店内转化率提升显著', '零售POS系统 + 客户调研', '2025-04-01'
),

('月度', '2025-03-01', '2025-03-31', 'Instagram Shop', '社交媒体电商', '全球', '智能吸尘器',
 750000, 'Instagram Feed,Explore页面', 65.0, 35.0, 40.0, 150.0, 2.8,
 5200000, 680000, 13.1, 85000, 12.5, 42000, 72.0, 30000, 4.4,
 10500000.00, 350.00, 31500, 14.00, 34.0, 3.5,
 850000.00, 28.33, 12.35, 9.88, 1.25, 28.33, 0.16,
 1, 'IG-20250312-03,IG-20250328-07', 72, '图片,Reels', 'Instagram',
 '{"25-45岁":70,"女性":75,"城市居民":80}', '视觉驱动购买,美学价值导向', '设计敏感型', 780.00,
 8.5, '中端市场', '中高端定价,强调设计美学',
 0.6, 0.8, 35.0,
 '多渠道归因', 'Instagram Feed浏览', 'Instagram Shop购买', 28000.00,
 'Instagram Shop渠道增长迅速,生活方式和美学内容对高端产品销售影响明显', 'Instagram Insights + GA4', '2025-04-01'
),

('周度', '2025-03-25', '2025-03-31', 'TikTok Shop', '社交媒体电商', '全球', '智能吸尘器',
 320000, 'For You页面推荐,KOL内容', 72.0, 28.0, 32.0, 185.0, 3.8,
 2300000, 260000, 11.3, 35000, 13.5, 19000, 78.0, 15000, 5.8,
 5250000.00, 350.00, 15750, 16.41, 35.0, 2.8,
 320000.00, 21.33, 16.41, 13.13, 1.23, 21.33, 0.14,
 1, 'TK-20250327-03,TK-20250401-01', 24, '短视频', 'TikTok',
 '{"18-34岁":68,"女性":72,"城市居民":78}', '冲动购买,视觉影响强', '年轻家庭', 850.00,
 19.5, '领先地位', '中高端定价,促销活动',
 0.7, 1.2, 32.0,
 '多渠道归因', 'TikTok视频发现', 'TikTok Shop直接购买', 12000.00,
 '周末促销活动带动销量显著提升,新发布内容转化率高于平均水平', 'TikTok Shop数据API + GA4', '2025-04-01'
),

('季度', '2025-01-01', '2025-03-31', 'Amazon', '电商平台', '美国', '智能吸尘器',
 6500000, 'Amazon搜索,品牌店铺,关联推荐', 55.0, 45.0, 24.0, 315.0, 5.0,
 12500000, 2200000, 17.6, 385000, 17.5, 248000, 81.0, 205000, 9.3,
 71750000.00, 350.00, 214500, 11.04, 28.0, 5.3,
 5200000.00, 25.37, 13.80, 11.04, 2.36, 25.37, 0.42,
 1, 'YT-20250212-02,YT-20250105-02,YT-20241125-04', 120, '视频评测', 'YouTube',
 '{"25-54岁":72,"男女平衡":true,"郊区居民":62}', '经过研究的计划性购买', '理性购买者', 1200.00,
 32.0, '市场主导', '中高端定价,季节性促销',
 0.8, 0.7, 18.0,
 '加权多渠道归因', 'YouTube产品评测', 'Amazon产品页面', 185000.00,
 'Q1表现强劲,春节促销带动亚洲市场销量提升,长期评测内容影响持续稳定', 'Amazon Seller Central + GA4', '2025-04-01'
),

('年度', '2024-04-01', '2025-03-31', '全渠道汇总', '全渠道', '全球', '全品类',
 12500000, '多来源', 60.0, 40.0, 28.0, 280.0, 4.8,
 85000000, 12000000, 14.1, 1800000, 15.0, 1050000, 78.0, 820000, 6.8,
 287000000.00, 350.00, 856000, 22.96, 32.0, 4.2,
 23000000.00, 28.05, 12.48, 9.98, 1.92, 28.05, 0.27,
 1, '多内容ID', 120, '混合内容', '多平台',
 '{"18-65岁":100,"男女平衡":true,"地域多样化":true}', '多样化购买行为', '全客群', 1200.00,
 28.0, '行业领先', '价格分级策略',
 0.6, 0.8, 22.0,
 '整合归因模型', '多点触达', '多渠道完成', 450000.00,
 '年度整体表现超出预期,社交媒体渠道增长最为显著,内容营销驱动的销售占比持续提升', '全渠道数据整合', '2025-04-01'
);
