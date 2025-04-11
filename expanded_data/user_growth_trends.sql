-- User Growth Trends Table
-- 用户增长趋势表

CREATE TABLE IF NOT EXISTS user_growth_trends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date_period TEXT,                       -- 日期周期
    period_start DATE,                      -- 周期开始日期
    period_end DATE,                        -- 周期结束日期
    platform TEXT,                          -- 平台
    new_followers INTEGER,                  -- 新增粉丝数
    followers_lost INTEGER,                 -- 流失粉丝数
    net_follower_growth INTEGER,            -- 净粉丝增长
    follower_growth_rate REAL,              -- 粉丝增长率
    engagement_per_follower REAL,           -- 每粉丝互动量
    follower_to_customer_conversion REAL,   -- 粉丝转化为客户比率
    customer_acquisition_cost REAL,         -- 客户获取成本
    recurring_engagement_rate REAL,         -- 老粉丝再互动率
    top_acquisition_source TEXT,            -- 主要粉丝来源
    top_acquisition_content TEXT,           -- 最佳获粉内容
    demographic_shift TEXT,                 -- 粉丝人口统计变化
    notes TEXT,                             -- 备注
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 更新时间戳
);

-- Sample Data for user_growth_trends
INSERT INTO user_growth_trends (
    date_period, period_start, period_end, platform, 
    new_followers, followers_lost, net_follower_growth, follower_growth_rate, 
    engagement_per_follower, follower_to_customer_conversion, customer_acquisition_cost, 
    recurring_engagement_rate, top_acquisition_source, top_acquisition_content, demographic_shift, notes
) VALUES 
-- TikTok数据
('Daily', '2025-03-31', '2025-03-31', 'TikTok', 1250, 180, 1070, 1.8, 2.2, 3.5, 15.20, 42.0, '搜索推荐', 'TK-20250331-06', '25-34岁女性用户增加5%', '视频内容效果显著提升'),
('Weekly', '2025-03-25', '2025-03-31', 'TikTok', 8200, 950, 7250, 6.5, 2.0, 3.2, 16.50, 38.0, '搜索推荐', 'TK-20250327-03', '25-34岁女性用户增加4%', '清洁挑战活动带动粉丝增长'),
('Monthly', '2025-03-01', '2025-03-31', 'TikTok', 35000, 4200, 30800, 15.2, 1.8, 2.8, 18.20, 35.0, '搜索推荐', 'TK-20250315-08', '25-34岁女性用户增加3%', '春季内容策略成效明显'),
('Quarterly', '2025-01-01', '2025-03-31', 'TikTok', 95000, 12500, 82500, 28.5, 1.7, 2.6, 19.50, 32.0, '搜索推荐', 'TK-20250212-02', '25-34岁女性用户增加2%', 'Q1增长超出预期'),
('Yearly', '2024-04-01', '2025-03-31', 'TikTok', 320000, 45000, 275000, 65.0, 1.5, 2.4, 22.80, 28.0, '搜索推荐', 'TK-20241102-12', '用户年龄结构整体年轻化', '全年增长稳定'),

-- Instagram数据
('Daily', '2025-03-31', '2025-03-31', 'Instagram', 650, 120, 530, 1.2, 1.8, 2.8, 18.50, 35.0, '探索页推荐', 'IG-20250331-04', '35-44岁用户增加3%', 'Reels内容互动率高'),
('Weekly', '2025-03-25', '2025-03-31', 'Instagram', 4200, 750, 3450, 4.8, 1.7, 2.6, 19.80, 32.0, '探索页推荐', 'IG-20250328-07', '35-44岁用户增加2%', '视觉内容策略效果好'),
('Monthly', '2025-03-01', '2025-03-31', 'Instagram', 18500, 3200, 15300, 12.0, 1.6, 2.4, 21.50, 30.0, '探索页推荐', 'IG-20250312-03', '35-44岁用户增加2%', '用户活跃度有所提升'),
('Quarterly', '2025-01-01', '2025-03-31', 'Instagram', 52000, 8500, 43500, 22.0, 1.5, 2.2, 23.80, 28.0, '探索页推荐', 'IG-20250205-09', '用户地域分布更广', 'Q1表现符合预期'),
('Yearly', '2024-04-01', '2025-03-31', 'Instagram', 185000, 32000, 153000, 48.0, 1.4, 2.0, 26.50, 25.0, '探索页推荐', 'IG-20241018-11', '国际用户比例提升', '全年增长稳定'),

-- YouTube数据
('Daily', '2025-03-31', '2025-03-31', 'YouTube', 350, 65, 285, 0.8, 1.5, 2.2, 22.80, 45.0, '相关视频推荐', 'YT-20250331-02', '技术爱好者增加4%', '评测内容观看完成率高'),
('Weekly', '2025-03-25', '2025-03-31', 'YouTube', 2200, 380, 1820, 3.2, 1.4, 2.0, 24.50, 42.0, '相关视频推荐', 'YT-20250326-05', '技术爱好者增加3%', '深度内容订阅转化率高'),
('Monthly', '2025-03-01', '2025-03-31', 'YouTube', 9500, 1650, 7850, 8.5, 1.3, 1.8, 26.80, 38.0, '相关视频推荐', 'YT-20250310-03', '技术爱好者增加3%', '用户粘性高于其他平台'),
('Quarterly', '2025-01-01', '2025-03-31', 'YouTube', 28000, 4800, 23200, 15.8, 1.2, 1.6, 28.50, 35.0, '相关视频推荐', 'YT-20250208-07', '观看时长明显提升', 'Q1增长符合预期'),
('Yearly', '2024-04-01', '2025-03-31', 'YouTube', 105000, 18500, 86500, 38.5, 1.1, 1.5, 32.20, 32.0, '相关视频推荐', 'YT-20241125-04', '评论质量明显提升', '全年增长超出预期'),

-- 最新日期数据
('Daily', '2025-04-01', '2025-04-01', 'TikTok', 1380, 160, 1220, 2.0, 2.3, 3.6, 14.80, 43.0, '搜索推荐', 'TK-20250401-02', '18-24岁用户增加6%', '新内容策略初见成效'),
('Daily', '2025-04-01', '2025-04-01', 'Instagram', 720, 110, 610, 1.3, 1.9, 2.9, 18.20, 36.0, '探索页推荐', 'IG-20250401-03', '35-44岁用户增加3%', 'Reels内容持续表现良好'),
('Daily', '2025-04-01', '2025-04-01', 'YouTube', 380, 60, 320, 0.9, 1.6, 2.3, 22.50, 46.0, '相关视频推荐', 'YT-20250401-01', '技术爱好者增加4%', '新评测视频表现良好');
