-- Platform Ad Campaigns Table
-- 各平台广告投放数据表

CREATE TABLE IF NOT EXISTS platform_ad_campaigns (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    campaign_id TEXT,                     -- 广告活动ID
    campaign_name TEXT,                   -- 广告活动名称
    platform TEXT,                        -- 平台
    account_id TEXT,                      -- 广告账户ID
    campaign_type TEXT,                   -- 活动类型(品牌曝光/销售转化/流量引导/应用安装等)
    objective TEXT,                       -- 营销目标
    
    -- 时间维度
    start_date DATE,                      -- 开始日期
    end_date DATE,                        -- 结束日期
    duration_days INTEGER,                -- 持续天数
    status TEXT,                          -- 状态(进行中/已完成/已暂停/已取消)
    
    -- 预算与出价
    total_budget REAL,                    -- 总预算
    daily_budget REAL,                    -- 日预算
    budget_spent REAL,                    -- 已消费预算
    budget_remaining REAL,                -- 剩余预算
    bidding_strategy TEXT,                -- 出价策略
    cost_per_result_target REAL,          -- 目标每次结果成本
    
    -- 目标受众
    target_audience TEXT,                 -- 目标受众(JSON格式)
    audience_size INTEGER,                -- 受众规模
    audience_overlap_rate REAL,           -- 受众重叠率
    excluded_audience TEXT,               -- 排除的受众(JSON格式)
    geo_targeting TEXT,                   -- 地域定向(JSON格式)
    
    -- 创意信息
    ad_format TEXT,                       -- 广告格式(图片/视频/轮播/故事/文字等)
    creative_count INTEGER,               -- 创意数量
    top_performing_creative_id TEXT,      -- 表现最佳创意ID
    creative_refresh_frequency TEXT,      -- 创意更新频率
    a_b_testing_status TEXT,              -- A/B测试状态
    
    -- 内容关联
    content_integration BOOLEAN,          -- 是否与内容整合
    related_content_ids TEXT,             -- 相关内容ID
    content_ad_alignment_score REAL,      -- 内容广告一致性评分(0-100)
    content_performance_impact REAL,      -- 内容表现影响评分
    
    -- 表现指标
    impressions INTEGER,                  -- 展示次数
    reach INTEGER,                        -- 触达人数
    frequency REAL,                       -- 频次
    clicks INTEGER,                       -- 点击次数
    click_through_rate REAL,              -- 点击率
    engagement_count INTEGER,             -- 互动数量
    engagement_rate REAL,                 -- 互动率
    video_views INTEGER,                  -- 视频观看数
    video_completion_rate REAL,           -- 视频完成率
    
    -- 转化指标
    conversions INTEGER,                  -- 转化次数
    conversion_rate REAL,                 -- 转化率
    cost_per_conversion REAL,             -- 每次转化成本
    cost_per_click REAL,                  -- 每次点击成本
    cost_per_thousand_impressions REAL,   -- 千次展示成本
    return_on_ad_spend REAL,              -- 广告支出回报率
    attributed_revenue REAL,              -- 归因收入
    
    -- 竞争情报
    category_benchmark_ctr REAL,          -- 类别基准点击率
    category_benchmark_cvr REAL,          -- 类别基准转化率
    category_benchmark_cpm REAL,          -- 类别基准千次展示成本
    share_of_voice REAL,                  -- 声量份额
    competitive_pressure_score REAL,      -- 竞争压力评分(0-100)
    
    -- 优化信息
    optimization_status TEXT,             -- 优化状态
    algorithm_adjustments TEXT,           -- 算法调整(JSON格式)
    recommended_actions TEXT,             -- 推荐操作
    estimated_improvement_potential REAL, -- 预计改进潜力百分比
    
    -- 归因信息
    attribution_model TEXT,               -- 归因模型
    attribution_window TEXT,              -- 归因窗口
    view_through_conversions INTEGER,     -- 浏览后转化
    click_through_conversions INTEGER,    -- 点击后转化
    
    -- 策略评估
    campaign_effectiveness_score REAL,    -- 活动有效性评分(0-100)
    platform_fit_score REAL,              -- 平台适合度评分(0-100)
    audience_resonance_score REAL,        -- 受众共鸣度评分(0-100)
    creative_quality_score REAL,          -- 创意质量评分(0-100)
    roi_score REAL,                       -- ROI评分(0-100)
    
    notes TEXT,                           -- 备注
    manager TEXT,                         -- 管理员
    last_updated DATE,                    -- 最后更新日期
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 更新时间戳
);

-- Sample Data for platform_ad_campaigns
INSERT INTO platform_ad_campaigns (
    campaign_id, campaign_name, platform, account_id, campaign_type, objective,
    start_date, end_date, duration_days, status,
    total_budget, daily_budget, budget_spent, budget_remaining, bidding_strategy, cost_per_result_target,
    target_audience, audience_size, audience_overlap_rate, excluded_audience, geo_targeting,
    ad_format, creative_count, top_performing_creative_id, creative_refresh_frequency, a_b_testing_status,
    content_integration, related_content_ids, content_ad_alignment_score, content_performance_impact,
    impressions, reach, frequency, clicks, click_through_rate, engagement_count, engagement_rate, video_views, video_completion_rate,
    conversions, conversion_rate, cost_per_conversion, cost_per_click, cost_per_thousand_impressions, return_on_ad_spend, attributed_revenue,
    category_benchmark_ctr, category_benchmark_cvr, category_benchmark_cpm, share_of_voice, competitive_pressure_score,
    optimization_status, algorithm_adjustments, recommended_actions, estimated_improvement_potential,
    attribution_model, attribution_window, view_through_conversions, click_through_conversions,
    campaign_effectiveness_score, platform_fit_score, audience_resonance_score, creative_quality_score, roi_score,
    notes, manager, last_updated
) VALUES 
-- TikTok广告活动
('TT-ADS-2025-Q1-01', '春季清洁解决方案', 'TikTok', 'Eufy-TikTok-01', '销售转化', '产品销售',
 '2025-03-01', '2025-03-31', 31, '已完成',
 250000.00, 8000.00, 250000.00, 0.00, 'oCPC', 35.00,
 '{"年龄":["18-34"],"性别":"不限","兴趣":["家居","清洁","智能家居"],"行为":["智能手机用户","电子产品购买者"]}', 25000000, 12.5, '{"已转化用户":true,"竞品客户":false}', '{"地区":["美国","英国","德国","加拿大","澳大利亚"],"排除":["农村地区"]}',
 '短视频广告', 8, 'TT-CRTV-2025-0308', '每周更新', '完成',
 1, 'TK-20250315-08,TK-20250327-03', 88.0, 0.8,
 12500000, 8200000, 1.5, 820000, 6.56, 1250000, 10.00, 9800000, 65.0,
 22000, 2.68, 11.36, 0.30, 20.00, 5.20, 1300000.00,
 6.0, 2.5, 22.0, 28.0, 65.0,
 '持续优化', '{"出价调整":"+5%","定向优化":"扩展相似受众"}', '增加创意变体，测试不同开场', 12.0,
 '后视归因', '7天点击/1天观看', 6500, 15500,
 92.0, 95.0, 90.0, 88.0, 94.0,
 '春季促销活动，效果超出预期，前后对比类内容创意表现突出', '李广告经理', '2025-04-01'
),

('TT-ADS-2025-Q1-02', 'X8 Pro产品发布', 'TikTok', 'Eufy-TikTok-01', '品牌曝光', '新品推广',
 '2025-02-15', '2025-03-15', 29, '已完成',
 180000.00, 6200.00, 180000.00, 0.00, 'CPM', NULL,
 '{"年龄":["25-45"],"性别":"不限","兴趣":["智能家居","科技产品","创新设备"],"行为":["高端产品购买者","技术早期采用者"]}', 18000000, 15.0, '{"现有客户":false,"低价值用户":true}', '{"地区":["美国","欧洲主要市场","日本","韩国","澳大利亚"],"包含":["高收入地区"]}',
 '短视频广告,品牌Takeover', 6, 'TT-CRTV-2025-0220', '首发期间不更新', '完成',
 1, 'TK-20250212-04,TK-20250220-05', 92.0, 0.9,
 20000000, 15000000, 1.3, 950000, 4.75, 1850000, 9.25, 16500000, 72.0,
 18500, 1.95, 9.73, 0.19, 9.00, 4.80, 870000.00,
 4.2, 1.8, 10.5, 35.0, 72.0,
 '发布结束', '{"受众扩展":"技术爱好者","预算分配":"高峰期增加"}', '后续转向转化目标活动', 8.0,
 '后视归因', '28天点击/7天观看', 12800, 5700,
 90.0, 92.0, 88.0, 95.0, 86.0,
 '新产品发布活动，品牌曝光效果显著，创意质量评分极高', '王广告经理', '2025-03-16'
),

('TT-ADS-2025-Q2-01', '家居清洁挑战', 'TikTok', 'Eufy-TikTok-01', '用户参与', '内容创建',
 '2025-04-01', '2025-04-15', 15, '进行中',
 120000.00, 8000.00, 32000.00, 88000.00, 'oCPM', NULL,
 '{"年龄":["18-34"],"性别":["女性优先"],"兴趣":["生活方式","家居","清洁技巧"],"行为":["内容创作者","高互动用户"]}', 22000000, 18.0, '{"低互动用户":true,"非目标地区":true}', '{"地区":["美国","英国","加拿大","澳大利亚"],"精准定位":["城市区域"]}',
 'Spark广告,挑战广告', 5, 'TT-CRTV-2025-0402', '活动期间不更新', '进行中',
 1, 'TK-20250401-01,TK-20250212-04', 85.0, 0.9,
 4500000, 3200000, 1.4, 320000, 7.11, 520000, 11.56, 3800000, 68.0,
 5800, 1.81, 5.52, 0.10, 7.11, 6.80, 320000.00,
 6.8, 1.6, 8.0, 18.0, 55.0,
 '初期评估', '{"创意调整":"增加用户示例","预算分配":"根据日内表现调整"}', '扩大UGC收集范围', 15.0,
 '多渠道归因', '7天点击/1天观看', 2200, 3600,
 88.0, 90.0, 92.0, 85.0, 89.0,
 '用户生成内容挑战活动，初期参与度高于预期，挑战标签使用量迅速增长', '李广告经理', '2025-04-01'
),

-- Instagram广告活动
('IG-ADS-2025-Q1-01', '设计感生活', 'Instagram', 'Eufy-IG-01', '品牌建设', '品牌认知',
 '2025-03-01', '2025-03-31', 31, '已完成',
 150000.00, 4800.00, 150000.00, 0.00, 'CPM', NULL,
 '{"年龄":["25-45"],"性别":["女性优先"],"兴趣":["室内设计","生活方式","家居美学"],"行为":["高端购买者","美学关注者"]}', 15000000, 22.0, '{"低价值互动":true,"非目标人群":true}', '{"地区":["美国","欧洲","澳大利亚"],"精准定位":["城市区域","高收入地区"]}',
 '图片,轮播,Reels', 12, 'IG-CRTV-2025-0315', '每周更新', '完成',
 1, 'IG-20250312-03,IG-20250205-09', 95.0, 0.8,
 9800000, 6500000, 1.5, 420000, 4.29, 850000, 8.67, 3200000, 70.0,
 12500, 2.98, 12.00, 0.36, 15.31, 4.50, 675000.00,
 3.8, 2.5, 18.0, 25.0, 68.0,
 '活动结束', '{"视觉策略":"加强产品融入场景","预算分配":"优化展示时间段"}', '为下一季度准备更多生活场景内容', 10.0,
 '多渠道归因', '28天点击/1天观看', 8200, 4300,
 90.0, 92.0, 95.0, 96.0, 85.0,
 '生活方式品牌定位活动，美学质量评分极高，提升了品牌高端形象', '张广告经理', '2025-04-01'
),

('IG-ADS-2025-Q1-02', '春季焕新家', 'Instagram', 'Eufy-IG-01', '销售转化', '电商销售',
 '2025-03-15', '2025-04-15', 32, '进行中',
 180000.00, 5600.00, 95000.00, 85000.00, 'oCPC', 32.00,
 '{"年龄":["28-50"],"性别":"不限","兴趣":["家居","清洁","升级家电"],"行为":["电商购物者","季节性购买者"]}', 18000000, 15.0, '{"30天内已购买":true,"低收入群体":true}', '{"地区":["美国","欧洲","澳大利亚","加拿大"],"精准定位":["城市和郊区"]}',
 'Collection广告,Shop广告', 8, 'IG-CRTV-2025-0320', '每两周更新', '进行中',
 1, 'IG-20250328-07,IG-20250401-02', 88.0, 0.7,
 7500000, 5200000, 1.4, 380000, 5.07, 620000, 8.27, 2800000, 65.0,
 15800, 4.16, 6.01, 0.25, 12.67, 6.20, 950000.00,
 4.5, 3.8, 15.0, 22.0, 65.0,
 '持续优化', '{"定向优化":"扩展相似购买者","创意优化":"增加产品使用场景"}', '测试不同价格点的产品推广效果', 18.0,
 '后视归因', '7天点击/1天观看', 5800, 10000,
 88.0, 90.0, 86.0, 88.0, 92.0,
 '季节性促销活动，转化率持续提升，ROI表现优秀，Shop功能表现突出', '张广告经理', '2025-04-01'
),

-- YouTube广告活动
('YT-ADS-2025-Q1-01', '深度产品评测系列', 'YouTube', 'Eufy-YT-01', '考虑转化', '产品教育',
 '2025-02-01', '2025-03-31', 59, '已完成',
 220000.00, 3700.00, 220000.00, 0.00, 'CPV', 0.15,
 '{"年龄":["25-65"],"性别":"不限","兴趣":["科技评测","智能家居","产品研究"],"行为":["长视频观看者","高研究型购买者"]}', 22000000, 8.0, '{"非购买意向":true,"竞品忠实用户":true}', '{"地区":["美国","欧洲","澳大利亚","加拿大","日本"],"精准定位":["技术相关内容观众"]}',
 'TrueView视频,Discovery广告', 6, 'YT-CRTV-2025-0215', '按产品更新', '完成',
 1, 'YT-20250212-02,YT-20250105-02', 92.0, 0.9,
 15000000, 8500000, 1.8, 850000, 5.67, 1850000, 12.33, 12000000, 72.0,
 32000, 3.76, 6.88, 0.26, 14.67, 5.20, 1150000.00,
 5.2, 3.5, 18.0, 32.0, 75.0,
 '活动结束', '{"内容策略":"加强技术说服力","长度测试":"对比15分钟vs8分钟效果"}', '将成功内容转化为常青资产', 8.0,
 '多渠道归因', '30天点击/14天观看', 12500, 19500,
 94.0, 95.0, 90.0, 92.0, 88.0,
 '深度教育型内容活动，观看完成率和后续研究行为高于预期，对高客单价产品销售贡献显著', '王广告经理', '2025-04-01'
),

('YT-ADS-2025-Q1-02', '清洁问题解决方案', 'YouTube', 'Eufy-YT-01', '销售转化', '直接响应',
 '2025-03-01', '2025-04-15', 46, '进行中',
 180000.00, 3900.00, 120000.00, 60000.00, 'tCPA', 45.00,
 '{"年龄":["30-65"],"性别":"不限","兴趣":["家居清洁","宠物主人","过敏关注者"],"行为":["家居相关内容观看者","解决方案寻求者"]}', 18500000, 12.0, '{"无关兴趣用户":true,"低收入群体":true}', '{"地区":["美国","加拿大","英国","澳大利亚","德国"],"精准定位":["家庭主题内容观众"]}',
 'TrueView行动导向,Bumper广告', 10, 'YT-CRTV-2025-0312', '每月更新', '进行中',
 1, 'YT-20250326-05,YT-20250128-03', 90.0, 0.8,
 9500000, 6800000, 1.4, 580000, 6.11, 1250000, 13.16, 7800000, 68.0,
 22500, 3.88, 5.33, 0.21, 12.63, 5.80, 1200000.00,
 5.8, 3.2, 15.0, 28.0, 70.0,
 '持续优化', '{"问题匹配":"优化特定场景问题","创意调整":"突出效果对比"}', '扩展到更多特定问题场景', 15.0,
 '后视归因', '14天点击/3天观看', 8500, 14000,
 91.0, 88.0, 92.0, 90.0, 94.0,
 '针对特定清洁问题的解决方案内容，转化率持续上升，特别在宠物主人和过敏家庭细分市场表现优异', '林广告经理', '2025-04-01'
),

-- 搜索广告活动
('GGL-ADS-2025-Q1-01', '产品搜索优化', 'Google Search', 'Eufy-GGL-01', '销售转化', '直接响应',
 '2025-01-01', '2025-03-31', 90, '已完成',
 280000.00, 3100.00, 280000.00, 0.00, 'CPC', NULL,
 '{"关键词":["智能吸尘器","扫地机器人","eufy扫地机器人","最佳扫地机器人","智能家居清洁"]}', 不适用, 不适用, '{"负面关键词":["维修","二手","租赁"]}', '{"地区":["美国","加拿大","英国","澳大利亚","德国","法国","日本"]}',
 '文字广告,购物广告', 25, 'GGL-CRTV-2025-0115', '持续优化', '完成',
 0, NULL, 不适用, 不适用,
 不适用, 不适用, 不适用, 1250000, 不适用, 不适用, 不适用, 不适用, 不适用,
 52000, 4.16, 5.38, 0.22, 不适用, 6.50, 1820000.00,
 不适用, 不适用, 不适用, 35.0, 65.0,
 '活动结束', '{"关键词拓展":"增加长尾关键词","出价调整":"提高转化相关词出价"}', '细化产品特定功能关键词', 12.0,
 '最后点击归因', '30天点击', 0, 52000,
 92.0, 90.0, 85.0, 不适用, 96.0,
 '搜索广告持续优化，重点关键词排名提升，ROI表现优异，转化路径简短直接', '赵广告经理', '2025-04-01'
),

('FB-ADS-2025-Q1-01', '产品展示系列', 'Facebook', 'Eufy-FB-01', '销售线索', '表单提交',
 '2025-02-15', '2025-03-31', 45, '已完成',
 120000.00, 2650.00, 120000.00, 0.00, 'oCPM', NULL,
 '{"年龄":["28-55"],"性别":"不限","兴趣":["家居","清洁","智能家居","家庭主妇/夫"],"行为":["房主","家庭户"]}', 28000000, 25.0, '{"学生":true,"租房人群":true}', '{"地区":["美国","加拿大","英国","澳大利亚"],"精准定位":["郊区","高收入地区"]}',
 '图片广告,轮播广告,视频广告', 15, 'FB-CRTV-2025-0305', '每两周更新', '完成',
 1, 'IG-20250312-03,YT-20250326-05', 85.0, 0.7,
 8200000, 5500000, 1.5, 450000, 5.49, 680000, 8.29, 2500000, 65.0,
 18500, 4.11, 6.49, 0.27, 14.63, 5.20, 820000.00,
 5.0, 3.5, 18.0, 20.0, 68.0,
 '活动结束', '{"受众细分":"更精细家庭类型","创意优化":"增强家庭场景真实性"}', '下季度聚焦家庭特定问题', 15.0,
 '多渠道归因', '28天点击/1天观看', 7500, 11000,
 86.0, 82.0, 88.0, 85.0, 90.0,
 'Facebook平台表现稳定，家庭场景内容共鸣效果突出，表单收集成本持续下降', '陈广告经理', '2025-04-01'
);
