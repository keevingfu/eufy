-- Overview KPI Dashboard Table
-- 总体KPI仪表盘表

CREATE TABLE IF NOT EXISTS overview_kpi_dashboard (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date_period TEXT,                   -- 日期周期 (日/周/月/季/年)
    period_start DATE,                  -- 周期开始日期
    period_end DATE,                    -- 周期结束日期
    total_impressions INTEGER,          -- 总展示量
    total_engagement INTEGER,           -- 总互动量
    overall_engagement_rate REAL,       -- 总体互动率
    total_views INTEGER,                -- 总观看量
    total_likes INTEGER,                -- 总点赞量
    total_comments INTEGER,             -- 总评论量
    total_shares INTEGER,               -- 总分享量
    total_followers_gained INTEGER,     -- 总新增粉丝数
    follower_growth_rate REAL,          -- 粉丝增长率
    content_count INTEGER,              -- 内容发布量
    avg_views_per_content REAL,         -- 平均每内容观看量
    conversion_rate REAL,               -- 转化率
    total_sales_value REAL,             -- 总销售额
    ROI REAL,                           -- 投资回报率
    top_performing_content_id TEXT,     -- 表现最佳内容ID
    top_performing_platform TEXT,       -- 表现最佳平台
    top_performing_campaign TEXT,       -- 表现最佳活动
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- 更新时间戳
);

-- Sample Data for overview_kpi_dashboard
INSERT INTO overview_kpi_dashboard (
    date_period, period_start, period_end, 
    total_impressions, total_engagement, overall_engagement_rate, 
    total_views, total_likes, total_comments, total_shares, 
    total_followers_gained, follower_growth_rate, content_count, 
    avg_views_per_content, conversion_rate, total_sales_value, ROI, 
    top_performing_content_id, top_performing_platform, top_performing_campaign
) VALUES 
('Daily', '2025-03-31', '2025-03-31', 2500000, 375000, 15.0, 1800000, 250000, 45000, 80000, 2200, 1.2, 8, 225000, 2.8, 52000.00, 2.2, 'TK-20250331-06', 'TikTok', '春季焕新'),
('Weekly', '2025-03-25', '2025-03-31', 15500000, 2170000, 14.0, 12000000, 1450000, 320000, 400000, 15500, 5.2, 42, 285714.29, 3.1, 385000.00, 2.5, 'TK-20250327-03', 'TikTok', '春季焕新'),
('Monthly', '2025-03-01', '2025-03-31', 62000000, 8060000, 13.0, 48000000, 5800000, 1250000, 1010000, 65000, 12.5, 180, 266666.67, 3.5, 1650000.00, 2.8, 'TK-20250315-08', 'TikTok', '春季焕新'),
('Quarterly', '2025-01-01', '2025-03-31', 175000000, 21000000, 12.0, 135000000, 16200000, 2950000, 1850000, 185000, 22.0, 520, 259615.38, 3.2, 4850000.00, 2.6, 'YT-20250212-02', 'YouTube', '春节焕新家'),
('Yearly', '2024-04-01', '2025-03-31', 650000000, 71500000, 11.0, 520000000, 62400000, 5460000, 3640000, 580000, 42.0, 1850, 281081.08, 2.9, 18500000.00, 2.4, 'TK-20241102-12', 'TikTok', '双11全球狂欢'),

('Daily', '2025-04-01', '2025-04-01', 2800000, 448000, 16.0, 2100000, 290000, 58000, 100000, 2500, 1.3, 9, 233333.33, 3.0, 61000.00, 2.3, 'TK-20250401-02', 'TikTok', '春季焕新'),
('Weekly', '2025-03-26', '2025-04-01', 16800000, 2520000, 15.0, 13200000, 1700000, 380000, 440000, 17000, 5.5, 45, 293333.33, 3.3, 430000.00, 2.7, 'TK-20250330-05', 'TikTok', '春季焕新'),
('Monthly', '2025-04-01', '2025-04-01', 2800000, 448000, 16.0, 2100000, 290000, 58000, 100000, 2500, 1.3, 9, 233333.33, 3.0, 61000.00, 2.3, 'TK-20250401-02', 'TikTok', '春季焕新'),
('Quarterly', '2025-04-01', '2025-04-01', 2800000, 448000, 16.0, 2100000, 290000, 58000, 100000, 2500, 1.3, 9, 233333.33, 3.0, 61000.00, 2.3, 'TK-20250401-02', 'TikTok', '清明焕新'),
('Yearly', '2025-04-01', '2025-04-01', 2800000, 448000, 16.0, 2100000, 290000, 58000, 100000, 2500, 1.3, 9, 233333.33, 3.0, 61000.00, 2.3, 'TK-20250401-02', 'TikTok', '清明焕新');
