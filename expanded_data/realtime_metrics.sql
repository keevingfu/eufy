-- Realtime Metrics Table
-- 实时指标表

CREATE TABLE IF NOT EXISTS realtime_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 时间戳
    platform TEXT,                                  -- 平台
    content_id TEXT,                                -- 内容ID
    content_type TEXT,                              -- 内容类型
    views INTEGER,                                  -- 观看量
    likes INTEGER,                                  -- 点赞量
    comments INTEGER,                               -- 评论量
    shares INTEGER,                                 -- 分享量
    new_followers INTEGER,                          -- 新增粉丝数
    engagement_rate REAL,                           -- 互动率
    click_through_rate REAL,                        -- 点击率
    conversion_rate REAL,                           -- 转化率
    average_watch_time REAL,                        -- 平均观看时长(秒)
    completion_rate REAL,                           -- 完成率
    concurrent_viewers INTEGER,                     -- 同时观看人数
    traffic_source TEXT,                            -- 流量来源
    trending_status BOOLEAN,                        -- 是否上升趋势
    trending_position INTEGER,                      -- 趋势排名
    trending_change INTEGER,                        -- 趋势变化
    is_viral BOOLEAN,                               -- 是否处于爆发期
    sentiment_score REAL,                           -- 情感得分
    alert_trigger TEXT,                             -- 触发的提醒
    alert_threshold TEXT,                           -- 提醒阈值
    notes TEXT                                      -- 备注
);

-- Sample Data for realtime_metrics
INSERT INTO realtime_metrics (
    timestamp, platform, content_id, content_type, 
    views, likes, comments, shares, 
    new_followers, engagement_rate, click_through_rate, conversion_rate, 
    average_watch_time, completion_rate, concurrent_viewers, 
    traffic_source, trending_status, trending_position, trending_change, 
    is_viral, sentiment_score, alert_trigger, alert_threshold, notes
) VALUES 
-- TikTok最新内容
('2025-04-01 08:00:00', 'TikTok', 'TK-20250401-01', '产品演示', 125000, 18500, 2200, 3800, 650, 19.6, 8.2, 2.8, 22.5, 68.0, 4200, '首页推荐', 1, 12, 5, 0, 0.82, NULL, NULL, '首发内容表现良好'),
('2025-04-01 08:30:00', 'TikTok', 'TK-20250401-01', '产品演示', 218000, 32000, 3500, 6200, 950, 19.1, 7.8, 2.6, 23.0, 70.0, 3800, '首页推荐', 1, 8, 4, 0, 0.85, NULL, NULL, '持续增长中'),
('2025-04-01 09:00:00', 'TikTok', 'TK-20250401-01', '产品演示', 356000, 51000, 5800, 10500, 1350, 18.9, 7.5, 2.5, 23.5, 72.0, 3500, '首页推荐', 1, 5, 3, 0, 0.87, NULL, NULL, '增长率略有下降'),
('2025-04-01 09:30:00', 'TikTok', 'TK-20250401-01', '产品演示', 520000, 78000, 8500, 16200, 1850, 19.8, 7.9, 2.7, 24.0, 75.0, 6200, '首页推荐', 1, 2, 3, 1, 0.88, '病毒式增长', '互动率>15% & 分享率>3%', '内容开始病毒式传播'),
('2025-04-01 10:00:00', 'TikTok', 'TK-20250401-01', '产品演示', 780000, 115000, 12800, 25500, 2650, 19.7, 7.8, 2.6, 23.8, 74.0, 5800, '首页推荐', 1, 1, 1, 1, 0.86, '病毒式增长', '互动率>15% & 分享率>3%', '持续强劲传播'),

-- TikTok历史内容
('2025-04-01 08:00:00', 'TikTok', 'TK-20250331-06', '清洁对比', 3580000, 280000, 15500, 42000, 180, 9.4, 3.2, 1.2, 18.5, 62.0, 850, '搜索结果', 0, 38, -5, 0, 0.75, NULL, NULL, '昨日热门内容'),
('2025-04-01 09:00:00', 'TikTok', 'TK-20250331-06', '清洁对比', 3620000, 285000, 15800, 42800, 210, 9.5, 3.3, 1.3, 18.6, 62.5, 820, '搜索结果', 0, 42, -4, 0, 0.76, NULL, NULL, '增长放缓'),
('2025-04-01 10:00:00', 'TikTok', 'TK-20250331-06', '清洁对比', 3650000, 288000, 16000, 43500, 230, 9.5, 3.3, 1.3, 18.7, 63.0, 780, '搜索结果', 0, 45, -3, 0, 0.77, NULL, NULL, '稳定表现'),

-- Instagram最新内容
('2025-04-01 08:00:00', 'Instagram', 'IG-20250401-01', '产品图片', 32000, 3800, 420, 580, 120, 15.0, 6.5, 2.2, 0.0, 0.0, 0, '探索页', 1, 25, 8, 0, 0.80, NULL, NULL, '图片内容初始表现良好'),
('2025-04-01 09:00:00', 'Instagram', 'IG-20250401-01', '产品图片', 65000, 7200, 850, 1200, 280, 14.2, 6.2, 2.0, 0.0, 0.0, 0, '探索页', 1, 18, 7, 0, 0.82, NULL, NULL, '稳定增长'),
('2025-04-01 10:00:00', 'Instagram', 'IG-20250401-01', '产品图片', 108000, 12500, 1350, 1950, 420, 14.6, 6.4, 2.1, 0.0, 0.0, 0, '探索页', 1, 12, 6, 0, 0.83, NULL, NULL, '表现良好'),

-- Instagram Reels最新内容
('2025-04-01 08:30:00', 'Instagram', 'IG-20250401-02', 'Reels', 45000, 6200, 720, 980, 180, 17.6, 7.2, 2.4, 12.8, 65.0, 1200, '探索页', 1, 15, 10, 0, 0.85, NULL, NULL, 'Reels初始表现良好'),
('2025-04-01 09:30:00', 'Instagram', 'IG-20250401-02', 'Reels', 95000, 13800, 1650, 2200, 380, 18.6, 7.5, 2.5, 13.2, 68.0, 1500, '探索页', 1, 8, 7, 0, 0.87, NULL, NULL, '增长加速'),
('2025-04-01 10:30:00', 'Instagram', 'IG-20250401-02', 'Reels', 182000, 28500, 3200, 4500, 680, 19.9, 7.8, 2.6, 13.5, 70.0, 1850, '探索页', 1, 3, 5, 1, 0.88, '高互动率', '互动率>18%', 'Reels表现优于普通图片内容'),

-- YouTube最新内容
('2025-04-01 08:00:00', 'YouTube', 'YT-20250401-01', '产品评测', 12000, 850, 380, 120, 85, 11.3, 5.2, 1.8, 420.0, 58.0, 950, '主页推荐', 0, 0, 0, 0, 0.78, NULL, NULL, '长视频初始表现符合预期'),
('2025-04-01 09:00:00', 'YouTube', 'YT-20250401-01', '产品评测', 25000, 1750, 720, 230, 165, 10.8, 5.0, 1.7, 425.0, 60.0, 850, '主页推荐', 0, 0, 0, 0, 0.80, NULL, NULL, '稳定增长'),
('2025-04-01 10:00:00', 'YouTube', 'YT-20250401-01', '产品评测', 42000, 3100, 1250, 380, 280, 11.2, 5.1, 1.8, 430.0, 62.0, 920, '相关视频', 1, 32, 15, 0, 0.82, NULL, NULL, '开始进入趋势榜'),

-- YouTube短视频最新内容
('2025-04-01 08:30:00', 'YouTube', 'YT-20250401-02', 'Shorts', 28000, 3200, 580, 420, 120, 15.0, 6.8, 2.2, 28.0, 75.0, 1500, 'Shorts推荐', 1, 28, 12, 0, 0.84, NULL, NULL, 'Shorts表现良好'),
('2025-04-01 09:30:00', 'YouTube', 'YT-20250401-02', 'Shorts', 65000, 7500, 1250, 950, 280, 14.8, 6.7, 2.1, 29.0, 76.0, 1350, 'Shorts推荐', 1, 18, 10, 0, 0.85, NULL, NULL, '稳定增长'),
('2025-04-01 10:30:00', 'YouTube', 'YT-20250401-02', 'Shorts', 118000, 14200, 2300, 1850, 450, 15.6, 6.9, 2.3, 30.0, 78.0, 1650, 'Shorts推荐', 1, 10, 8, 0, 0.86, NULL, NULL, '表现优于平均水平');
