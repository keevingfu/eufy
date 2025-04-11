-- Content Performance Metrics Table
-- 内容表现指标表

CREATE TABLE IF NOT EXISTS content_performance_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content_id TEXT,                      -- 内容ID
    platform TEXT,                        -- 平台
    content_type TEXT,                    -- 内容类型(视频/图片/Reels/Shorts等)
    publish_date DATE,                    -- 发布日期
    measurement_date DATE,                -- 测量日期
    
    -- 基础指标
    views INTEGER,                        -- 观看量/展示量
    likes INTEGER,                        -- 点赞量
    comments INTEGER,                     -- 评论量
    shares INTEGER,                       -- 分享量
    saves INTEGER,                        -- 保存量
    followers_gained INTEGER,             -- 获得粉丝数
    
    -- 计算指标
    engagement_rate REAL,                 -- 互动率
    engagement_per_follower REAL,         -- 每粉丝互动量
    virality_coefficient REAL,            -- 病毒系数
    amplification_rate REAL,              -- 放大率(分享/观看)
    applause_rate REAL,                   -- 认可率(点赞/观看)
    conversation_rate REAL,               -- 对话率(评论/观看)
    retention_rate REAL,                  -- 留存率
    
    -- 转化指标
    click_through_rate REAL,              -- 点击率
    conversion_rate REAL,                 -- 转化率
    cost_per_action REAL,                 -- 每行动成本
    return_on_investment REAL,            -- 投资回报率
    attributed_revenue REAL,              -- 归因收入
    
    -- 内容分析
    content_half_life INTEGER,            -- 内容半衰期(小时)
    peak_engagement_time INTEGER,         -- 峰值互动时间(小时)
    engagement_duration INTEGER,          -- 互动持续时间(小时)
    topic_category TEXT,                  -- 主题类别
    primary_hashtags TEXT,                -- 主要标签
    sentiment_score REAL,                 -- 情感得分
    
    -- 受众分析
    audience_demographics TEXT,           -- 受众人口统计(JSON格式)
    audience_interests TEXT,              -- 受众兴趣(JSON格式)
    audience_geography TEXT,              -- 受众地理分布(JSON格式)
    new_audience_percentage REAL,         -- 新受众百分比
    
    -- 竞争分析
    category_performance_percentile REAL, -- 类别表现百分位
    benchmark_comparison REAL,            -- 基准比较
    competitor_relative_performance REAL, -- 相对竞争对手表现
    
    -- 趋势分析
    growth_rate_24h REAL,                 -- 24小时增长率
    growth_rate_7d REAL,                  -- 7天增长率
    growth_rate_30d REAL,                 -- 30天增长率
    trending_status TEXT,                 -- 趋势状态
    seasonality_impact REAL,              -- 季节性影响
    
    -- 元数据
    content_tags TEXT,                    -- 内容标签
    content_duration INTEGER,             -- 内容时长(秒)
    creator_id TEXT,                      -- 创作者ID
    campaign_id TEXT,                     -- 活动ID
    notes TEXT,                           -- 备注
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 更新时间戳
);

-- Sample Data for content_performance_metrics
INSERT INTO content_performance_metrics (
    content_id, platform, content_type, publish_date, measurement_date,
    views, likes, comments, shares, saves, followers_gained,
    engagement_rate, engagement_per_follower, virality_coefficient, amplification_rate, applause_rate, conversation_rate, retention_rate,
    click_through_rate, conversion_rate, cost_per_action, return_on_investment, attributed_revenue,
    content_half_life, peak_engagement_time, engagement_duration, topic_category, primary_hashtags, sentiment_score,
    audience_demographics, audience_interests, audience_geography, new_audience_percentage,
    category_performance_percentile, benchmark_comparison, competitor_relative_performance,
    growth_rate_24h, growth_rate_7d, growth_rate_30d, trending_status, seasonality_impact,
    content_tags, content_duration, creator_id, campaign_id, notes
) VALUES 
-- TikTok热门内容
('TK-20250315-08', 'TikTok', '短视频', '2025-03-15', '2025-04-01',
 3800000, 290000, 18500, 45000, 85000, 32000,
 11.5, 0.28, 1.8, 1.18, 7.63, 0.49, 78.0,
 4.2, 3.5, 0.85, 4.8, 75000.00,
 96, 12, 192, '产品演示', '#EUFY #清洁对比 #cleantok', 0.88,
 '{"25-34岁":42,"女性":65,"家庭主妇":38}', '{"家居":55,"智能设备":40,"清洁":78}', '{"中国":35,"美国":28,"欧洲":25}', 58.0,
 92.0, 1.8, 1.5,
 5.2, 15.0, 280.0, '持续增长', 0.8,
 '对比,产品演示,视觉冲击,清洁技巧,家居清洁', 28, 'EUFY-Official', 'spring-clean-2025', '持续表现超出预期，成为内容基准'
),

('TK-20250401-01', 'TikTok', '短视频', '2025-04-01', '2025-04-01',
 780000, 115000, 12800, 25500, 42000, 8500,
 25.0, 0.32, 2.2, 3.27, 14.74, 1.64, 82.0,
 5.5, 4.2, 0.65, 6.2, 28000.00,
 24, 6, 48, '产品使用', '#EUFY #CleaningHack #FreshHome', 0.86,
 '{"18-24岁":35,"25-34岁":45,"女性":60}', '{"清洁":65,"家居":60,"时间管理":45}', '{"中国":40,"美国":25,"东南亚":20}', 72.0,
 88.0, 1.6, 1.4,
 15.0, 0.0, 0.0, '爆发增长', 0.5,
 '产品使用,问题解决,即时满足,清洁技巧,家居清洁', 32, 'EUFY-Official', 'spring-clean-2025', '发布当天即呈现爆发增长趋势'
),

-- Instagram内容
('IG-20250312-03', 'Instagram', '图片', '2025-03-12', '2025-04-01',
 250000, 38000, 2500, 4800, 22000, 3800,
 26.9, 0.15, 1.2, 1.92, 15.20, 1.00, 0.0,
 3.8, 2.8, 1.25, 3.5, 15000.00,
 120, 24, 240, '生活方式', '#HomeLife #CleanHome #EUFY', 0.90,
 '{"25-34岁":48,"35-44岁":32,"女性":68}', '{"室内设计":65,"家居":70,"智能家居":45}', '{"美国":35,"欧洲":30,"亚太":25}', 45.0,
 85.0, 1.5, 1.3,
 1.5, 8.0, 65.0, '稳定表现', 0.3,
 '生活方式,家居设计,整洁空间,产品融入,视觉美学', 0, 'EUFY-Lifestyle', 'home-style-2025', '图片内容持续获得高保存率'
),

('IG-20250401-02', 'Instagram', 'Reels', '2025-04-01', '2025-04-01',
 182000, 28500, 3200, 4500, 18000, 2600,
 29.8, 0.22, 1.5, 2.47, 15.66, 1.76, 75.0,
 4.5, 3.2, 0.95, 4.8, 12000.00,
 36, 12, 72, '产品演示', '#EUFY #CleaningReels #HomeTips', 0.88,
 '{"25-34岁":45,"35-44岁":35,"女性":70}', '{"家居清洁":75,"智能家居":50,"生活窍门":55}', '{"美国":30,"欧洲":35,"亚太":25}', 60.0,
 90.0, 1.7, 1.4,
 10.0, 0.0, 0.0, '快速增长', 0.4,
 'Reels,短视频,对比效果,产品演示,满足感', 15, 'EUFY-Lifestyle', 'spring-clean-2025', 'Reels表现优于普通图片内容'
),

-- YouTube内容
('YT-20250212-02', 'YouTube', '视频评测', '2025-02-12', '2025-04-01',
 1250000, 95000, 8200, 18500, 32000, 12500,
 12.3, 0.08, 0.9, 1.48, 7.60, 0.66, 65.0,
 3.2, 2.5, 1.85, 3.2, 85000.00,
 240, 48, 720, '深度评测', '#EUFY #ProductReview #SmartCleaning', 0.92,
 '{"25-44岁":65,"男性":58,"技术爱好者":52}', '{"科技评测":80,"智能家居":65,"产品比较":50}', '{"美国":35,"欧洲":30,"亚太":25}', 40.0,
 88.0, 1.6, 1.4,
 0.2, 1.0, 8.0, '长尾增长', 0.1,
 '深度评测,技术分析,产品对比,使用体验,详细测试', 845, 'TechExpert', 'smart-home-2025', '长视频内容持续获得稳定流量'
),

('YT-20250401-01', 'YouTube', '视频评测', '2025-04-01', '2025-04-01',
 42000, 3100, 1250, 380, 2800, 850,
 17.9, 0.12, 1.1, 0.90, 7.38, 2.98, 62.0,
 3.5, 2.2, 1.65, 2.8, 5000.00,
 0, 0, 0, '产品对比', '#EUFY #VacuumComparison #SmartHome', 0.85,
 '{"35-54岁":65,"男性":60,"房主":70}', '{"产品研究":75,"智能家居":65,"家居清洁":55}', '{"美国":38,"欧洲":35,"亚太":20}', 55.0,
 75.0, 1.2, 1.1,
 0.0, 0.0, 0.0, '初始增长', 0.2,
 '产品对比,评测,清洁效果,智能功能,使用体验', 625, 'TechExpert', 'product-comparison-2025', '发布首日表现良好，预计将稳定增长'
),

-- 更多TikTok内容
('TK-20250327-03', 'TikTok', '短视频', '2025-03-27', '2025-04-01',
 2100000, 180000, 15000, 38000, 65000, 18500,
 14.0, 0.25, 1.5, 1.81, 8.57, 0.71, 75.0,
 4.0, 3.2, 0.90, 4.5, 42000.00,
 72, 10, 168, '清洁技巧', '#CleaningHack #EUFY #TimeSaver', 0.85,
 '{"25-34岁":45,"女性":68,"家庭主妇":42}', '{"清洁技巧":80,"时间管理":65,"家居":55}', '{"中国":38,"美国":25,"东南亚":22}', 62.0,
 85.0, 1.5, 1.3,
 3.0, 25.0, 0.0, '强劲增长', 0.7,
 '清洁技巧,节省时间,视觉效果,创意拍摄,产品功能', 25, 'EUFY-Tips', 'cleaning-hacks-2025', '创意视觉表现获得高分享率'
),

('TK-20250212-04', 'TikTok', '互动视频', '2025-02-12', '2025-04-01',
 2800000, 220000, 28000, 32000, 48000, 25000,
 11.8, 0.22, 1.4, 1.14, 7.86, 1.00, 72.0,
 3.8, 2.8, 1.05, 3.8, 58000.00,
 180, 24, 360, '用户互动', '#CleaningQuestion #EUFY #HomeChallenge', 0.82,
 '{"18-34岁":65,"女性":62,"家庭成员":58}', '{"清洁挑战":75,"家居":70,"互动内容":60}', '{"中国":42,"美国":22,"东南亚":20}', 58.0,
 82.0, 1.4, 1.2,
 0.5, 3.0, 12.0, '稳定表现', 0.4,
 '互动内容,用户参与,问答形式,社区建设,挑战活动', 22, 'EUFY-Community', 'community-engage-2025', '互动问题引发高评论量和参与度'
),

-- 更多Instagram内容
('IG-20250328-07', 'Instagram', 'Reels', '2025-03-28', '2025-04-01',
 150000, 22000, 2800, 3500, 15000, 2200,
 28.9, 0.18, 1.3, 2.33, 14.67, 1.87, 72.0,
 4.2, 3.0, 1.10, 4.2, 9500.00,
 60, 10, 120, '使用技巧', '#EUFYTips #CleaningHacks #HomeLife', 0.86,
 '{"25-34岁":52,"女性":72,"家居主理":48}', '{"生活窍门":80,"家居":65,"清洁技巧":75}', '{"美国":32,"欧洲":38,"亚太":22}', 55.0,
 82.0, 1.4, 1.2,
 2.5, 15.0, 0.0, '稳定增长', 0.5,
 'Reels,使用技巧,视觉内容,生活场景,产品功能', 18, 'EUFY-Lifestyle', 'home-hacks-2025', '生活场景融入产品获得良好保存率'
),

('IG-20250205-09', 'Instagram', '图片合集', '2025-02-05', '2025-04-01',
 180000, 28000, 2200, 3800, 25000, 2500,
 32.8, 0.12, 1.1, 2.11, 15.56, 1.22, 0.0,
 3.5, 2.5, 1.35, 3.5, 12000.00,
 240, 48, 480, '家居设计', '#HomeDesign #EUFY #CleanSpace', 0.89,
 '{"25-44岁":68,"女性":75,"家居爱好者":62}', '{"室内设计":85,"家居":80,"整洁空间":75}', '{"美国":35,"欧洲":40,"亚太":20}', 42.0,
 80.0, 1.3, 1.2,
 0.2, 1.0, 8.0, '长尾表现', 0.2,
 '家居设计,空间整理,产品融入,视觉美学,生活方式', 0, 'EUFY-Home', 'design-living-2025', '高质量视觉内容持续获得新发现'
),

-- 更多YouTube内容
('YT-20250326-05', 'YouTube', '教程视频', '2025-03-26', '2025-04-01',
 320000, 28000, 4500, 7200, 18500, 3500,
 18.2, 0.15, 1.2, 2.25, 8.75, 1.41, 75.0,
 4.0, 3.0, 1.25, 3.8, 22000.00,
 120, 24, 240, '使用教程', '#EUFYTutorial #CleaningTips #SmartHome', 0.87,
 '{"35-54岁":58,"家庭主妇/夫":62,"房主":75}', '{"家居清洁":85,"清洁技巧":80,"产品使用":75}', '{"美国":42,"欧洲":35,"亚太":18}', 48.0,
 85.0, 1.5, 1.3,
 2.0, 10.0, 0.0, '稳定增长', 0.4,
 '使用教程,清洁技巧,产品功能,实用指南,问题解决', 485, 'EUFY-Expert', 'tutorial-series-2025', '实用教程内容获得高保存率和分享率'
),

('YT-20250105-02', 'YouTube', '使用体验', '2025-01-05', '2025-04-01',
 950000, 78000, 5500, 13500, 25000, 9500,
 12.8, 0.10, 1.0, 1.42, 8.21, 0.58, 68.0,
 3.5, 2.8, 1.45, 3.5, 65000.00,
 360, 72, 720, '长期使用', '#EUFYExperience #LongTermReview #SmartVacuum', 0.90,
 '{"25-54岁":75,"房主":80,"技术爱好者":45}', '{"产品评测":75,"长期使用":85,"智能家居":65}', '{"美国":40,"欧洲":38,"亚太":18}', 38.0,
 86.0, 1.5, 1.3,
 0.1, 0.8, 5.0, '长尾内容', 0.1,
 '长期使用,产品耐用性,使用体验,维护技巧,深度分析', 920, 'TechReviewer', 'long-term-review-2025', '长期使用体验内容持续获得新观众'
);
