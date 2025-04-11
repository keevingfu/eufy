-- Customer Lifecycle Value Table
-- 客户生命周期价值表

CREATE TABLE IF NOT EXISTS customer_lifecycle_value (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id TEXT,                    -- 客户ID
    customer_source TEXT,                -- 客户来源
    acquisition_date DATE,               -- 获取日期
    acquisition_channel TEXT,            -- 获取渠道
    acquisition_campaign TEXT,           -- 获取活动
    acquisition_cost REAL,               -- 获取成本
    
    -- 基本信息
    customer_segment TEXT,               -- 客户细分
    customer_tier TEXT,                  -- 客户等级
    customer_status TEXT,                -- 客户状态(活跃/休眠/流失/回归)
    registration_platform TEXT,          -- 注册平台
    first_purchase_date DATE,            -- 首次购买日期
    last_purchase_date DATE,             -- 最近购买日期
    
    -- 购买数据
    purchase_count INTEGER,              -- 购买次数
    total_order_value REAL,              -- 总订单价值
    average_order_value REAL,            -- 平均订单价值
    highest_order_value REAL,            -- 最高订单价值
    purchase_frequency REAL,             -- 购买频率(天)
    repurchase_rate REAL,                -- 复购率
    cross_sell_rate REAL,                -- 交叉销售率
    upsell_rate REAL,                    -- 追加销售率
    
    -- 产品偏好
    purchased_categories TEXT,           -- 已购类别(JSON格式)
    preferred_category TEXT,             -- 首选类别
    purchased_products TEXT,             -- 已购产品(JSON格式)
    product_affinity TEXT,               -- 产品亲和度(JSON格式)
    bundle_purchase_rate REAL,           -- 套装购买率
    accessory_attachment_rate REAL,      -- 配件附加率
    
    -- 互动数据
    engagement_score REAL,               -- 互动评分
    email_open_rate REAL,                -- 邮件打开率
    email_click_rate REAL,               -- 邮件点击率
    social_media_engagement REAL,        -- 社交媒体互动
    website_visits INTEGER,              -- 网站访问次数
    app_usage_frequency REAL,            -- 应用使用频率
    content_consumption TEXT,            -- 内容消费(JSON格式)
    support_interactions INTEGER,        -- 支持互动次数
    
    -- NPS与满意度
    nps_score INTEGER,                   -- NPS评分
    satisfaction_score REAL,             -- 满意度评分
    review_count INTEGER,                -- 评价数量
    average_rating REAL,                 -- 平均评分
    product_return_rate REAL,            -- 产品退货率
    complaint_count INTEGER,             -- 投诉次数
    
    -- 推荐行为
    referral_count INTEGER,              -- 推荐次数
    successful_referrals INTEGER,        -- 成功推荐
    referral_conversion_rate REAL,       -- 推荐转化率
    referral_revenue REAL,               -- 推荐收入
    advocate_score REAL,                 -- 拥护度评分
    social_shares INTEGER,               -- 社交分享次数
    
    -- 渠道行为
    preferred_purchase_channel TEXT,     -- 首选购买渠道
    preferred_contact_channel TEXT,      -- 首选联系渠道
    cross_channel_activity TEXT,         -- 跨渠道活动(JSON格式)
    online_offline_ratio REAL,           -- 线上线下比率
    
    -- 价值计算
    historical_clv REAL,                 -- 历史客户生命周期价值
    predicted_clv REAL,                  -- 预测客户生命周期价值
    clv_6month REAL,                     -- 6个月客户生命周期价值
    clv_1year REAL,                      -- 1年客户生命周期价值
    clv_3year REAL,                      -- 3年客户生命周期价值
    clv_confidence REAL,                 -- 客户生命周期价值置信度
    
    -- 内容影响
    content_influenced BOOLEAN,          -- 是否受内容影响
    influential_content_ids TEXT,        -- 有影响力的内容ID
    content_to_conversion_path TEXT,     -- 内容到转化路径(JSON格式)
    content_attribution_value REAL,      -- 内容归因价值
    
    -- 保留和流失
    churn_risk_score REAL,               -- 流失风险评分
    retention_rate REAL,                 -- 保留率
    win_back_count INTEGER,              -- 赢回次数
    customer_lifespan INTEGER,           -- 客户寿命(天)
    retention_cost REAL,                 -- 保留成本
    loyalty_program_status TEXT,         -- 忠诚计划状态
    
    -- 分析洞察
    growth_potential_score REAL,         -- 增长潜力评分
    price_sensitivity REAL,              -- 价格敏感度
    seasonal_purchase_pattern TEXT,      -- 季节性购买模式
    predicted_next_purchase_date DATE,   -- 预测下次购买日期
    predicted_next_product TEXT,         -- 预测下次产品
    
    -- 细分洞察
    segment_comparison TEXT,             -- 细分比较
    segment_rank INTEGER,                -- 细分排名
    segment_performance TEXT,            -- 细分表现
    cohort_id TEXT,                      -- 队列ID
    cohort_analysis TEXT,                -- 队列分析
    
    notes TEXT,                          -- 备注
    data_quality_score REAL,             -- 数据质量评分
    last_updated DATE,                   -- 最后更新日期
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 更新时间戳
);

-- Sample Data for customer_lifecycle_value
INSERT INTO customer_lifecycle_value (
    customer_id, customer_source, acquisition_date, acquisition_channel, acquisition_campaign, acquisition_cost,
    customer_segment, customer_tier, customer_status, registration_platform, first_purchase_date, last_purchase_date,
    purchase_count, total_order_value, average_order_value, highest_order_value, purchase_frequency, repurchase_rate, cross_sell_rate, upsell_rate,
    purchased_categories, preferred_category, purchased_products, product_affinity, bundle_purchase_rate, accessory_attachment_rate,
    engagement_score, email_open_rate, email_click_rate, social_media_engagement, website_visits, app_usage_frequency, content_consumption, support_interactions,
    nps_score, satisfaction_score, review_count, average_rating, product_return_rate, complaint_count,
    referral_count, successful_referrals, referral_conversion_rate, referral_revenue, advocate_score, social_shares,
    preferred_purchase_channel, preferred_contact_channel, cross_channel_activity, online_offline_ratio,
    historical_clv, predicted_clv, clv_6month, clv_1year, clv_3year, clv_confidence,
    content_influenced, influential_content_ids, content_to_conversion_path, content_attribution_value,
    churn_risk_score, retention_rate, win_back_count, customer_lifespan, retention_cost, loyalty_program_status,
    growth_potential_score, price_sensitivity, seasonal_purchase_pattern, predicted_next_purchase_date, predicted_next_product,
    segment_comparison, segment_rank, segment_performance, cohort_id, cohort_analysis,
    notes, data_quality_score, last_updated
) VALUES 
-- 高价值客户
('CUST-98752', 'TikTok Shop', '2024-10-15', '社交媒体', 'Fall_Clean_2024', 32.50,
 '高价值家庭用户', '钻石', '活跃', 'TikTok', '2024-10-15', '2025-03-25',
 5, 1850.00, 370.00, 650.00, 35.0, 0.8, 0.6, 0.4,
 '{"扫地机器人":3,"手持吸尘器":1,"空气净化器":1,"配件":3}', '扫地机器人', '{"X8 Pro":1,"X6 Max":1,"Mini Air":1,"Y10":1,"配件套装":3}', '{"扫地机器人-手持吸尘器":0.7,"扫地机器人-空气净化器":0.5}', 0.6, 0.8,
 85.0, 0.68, 0.42, 0.55, 48, 2.5, '{"产品视频":15,"使用指南":8,"评测文章":6}', 2,
 9, 4.8, 3, 5.0, 0.0, 0,
 3, 2, 0.67, 720.00, 88.0, 5,
 'TikTok Shop', '电子邮件', '{"网站访问率":0.4,"应用使用率":0.3,"实体店访问率":0.1}', 0.9,
 1850.00, 3200.00, 850.00, 1950.00, 3200.00, 0.85,
 1, 'TK-20250315-08,YT-20250212-02', '{"内容发现":1,"产品研究":2,"转化":1}', 0.65,
 0.15, 0.95, 0, 172, 25.00, '钻石会员',
 0.85, 0.3, '春季高峰', '2025-06-15', 'H10 手持吸尘器',
 '高于同类客户25%', 1, '顶级表现', 'COH-TT-2024-Q4', '{"6个月留存":0.95,"12个月预测留存":0.9}',
 '社交内容转化的高价值客户，套装购买倾向强，几乎零投诉，高推荐意愿', 0.95, '2025-03-30'
),

('CUST-76254', 'Google Search', '2024-08-22', '搜索广告', 'Back_To_School_2024', 28.00,
 '科技爱好者', '铂金', '活跃', '官网', '2024-08-22', '2025-03-10',
 7, 2100.00, 300.00, 550.00, 28.0, 0.85, 0.7, 0.5,
 '{"扫地机器人":2,"手持吸尘器":2,"摄像头":2,"配件":5}', '智能家居', '{"X8 Pro":1,"H8 Pro":1,"Indoor Cam":2,"配件套装":5}', '{"扫地机器人-摄像头":0.8,"手持吸尘器-扫地机器人":0.6}', 0.4, 0.85,
 92.0, 0.72, 0.48, 0.35, 65, 3.2, '{"产品评测":22,"技术分析":12,"对比视频":8}', 4,
 8, 4.6, 5, 4.8, 0.05, 1,
 2, 2, 1.0, 580.00, 80.0, 3,
 '官网', '应用', '{"网站访问率":0.6,"应用使用率":0.5,"线下展示":0.2}', 0.8,
 2100.00, 3800.00, 900.00, 2200.00, 3800.00, 0.82,
 1, 'YT-20250212-02,TK-20250212-04', '{"内容研究":3,"产品比较":2,"转化":1}', 0.55,
 0.18, 0.92, 0, 221, 35.00, '铂金会员',
 0.88, 0.2, '全年平稳,节假日峰值', '2025-05-20', 'X9 Pro 旗舰版',
 '高于同类客户18%', 2, '优秀表现', 'COH-WEB-2024-Q3', '{"6个月留存":0.92,"12个月预测留存":0.85}',
 '研究型高价值客户，关注技术细节，全平台互动活跃，智能家居生态购买倾向强', 0.92, '2025-03-28'
),

-- 中价值客户
('CUST-45873', 'Instagram Shop', '2024-12-08', '社交媒体', 'Holiday_Clean_2024', 35.00,
 '年轻专业人士', '黄金', '活跃', 'Instagram', '2024-12-08', '2025-02-28',
 3, 850.00, 283.33, 450.00, 45.0, 0.6, 0.3, 0.2,
 '{"手持吸尘器":2,"配件":2}', '手持吸尘器', '{"H8 Pro":1,"H5 Lite":1,"配件套装":2}', '{"手持吸尘器-配件":0.9}', 0.0, 0.6,
 70.0, 0.55, 0.32, 0.65, 28, 1.8, '{"产品图片":18,"使用技巧":5,"生活方式":12}', 1,
 7, 4.2, 2, 4.5, 0.1, 0,
 1, 0, 0.0, 0.00, 65.0, 4,
 'Instagram Shop', '社交媒体', '{"网站访问率":0.2,"社交互动率":0.7}', 0.95,
 850.00, 1500.00, 450.00, 950.00, 1500.00, 0.70,
 1, 'IG-20250312-03,IG-20250328-07', '{"内容发现":1,"社交互动":3,"转化":1}', 0.72,
 0.35, 0.75, 0, 112, 18.00, '黄金会员',
 0.65, 0.5, '节日集中', '2025-08-15', 'H9 Slim',
 '符合同类客户均值', 15, '良好表现', 'COH-IG-2024-Q4', '{"6个月留存":0.75,"12个月预测留存":0.65}',
 'Instagram引导的美学敏感客户，对产品设计和风格关注度高，社交分享活跃', 0.85, '2025-03-20'
),

('CUST-62158', 'Amazon', '2024-11-05', '电商平台', 'Black_Friday_2024', 30.00,
 '家庭主妇/夫', '银牌', '活跃', 'Amazon', '2024-11-05', '2025-03-02',
 2, 650.00, 325.00, 400.00, 60.0, 0.5, 0.2, 0.1,
 '{"扫地机器人":1,"配件":2}', '扫地机器人', '{"X6 Max":1,"配件套装":2}', '{"扫地机器人-配件":0.8}', 0.0, 0.5,
 58.0, 0.48, 0.22, 0.15, 12, 0.5, '{"产品评测":5,"使用指南":3}', 2,
 6, 4.0, 1, 4.0, 0.0, 1,
 0, 0, 0.0, 0.00, 45.0, 0,
 'Amazon', '电子邮件', '{"亚马逊访问率":0.8,"网站访问率":0.1}', 0.9,
 650.00, 950.00, 350.00, 650.00, 950.00, 0.65,
 1, 'YT-20250326-05', '{"评测研究":2,"比价":1,"转化":1}', 0.35,
 0.45, 0.65, 0, 148, 12.00, '银牌会员',
 0.55, 0.7, '大促期购买', '2025-11-15', 'X6 Max配件',
 '低于同类客户10%', 35, '平均表现', 'COH-AMZ-2024-Q4', '{"6个月留存":0.65,"12个月预测留存":0.55}',
 '价格敏感型客户，大促期间购买，关注性价比和实用性，互动度低', 0.75, '2025-03-15'
),

-- 流失风险客户
('CUST-28964', 'Facebook Ad', '2024-06-10', '社交媒体', 'Summer_Sale_2024', 42.00,
 '小家庭', '普通', '休眠', 'Facebook', '2024-06-10', '2024-09-05',
 2, 480.00, 240.00, 300.00, 90.0, 0.5, 0.0, 0.0,
 '{"手持吸尘器":1,"配件":1}', '手持吸尘器', '{"H5 Lite":1,"替换滤网":1}', '{"手持吸尘器-配件":0.5}', 0.0, 0.3,
 35.0, 0.30, 0.12, 0.05, 5, 0.0, '{"使用指南":2}', 3,
 4, 3.2, 1, 3.0, 0.0, 2,
 0, 0, 0.0, 0.00, 25.0, 0,
 'Facebook Shop', '电子邮件', '{"Facebook访问":0.3,"网站访问":0.1}', 1.0,
 480.00, 550.00, 50.00, 120.00, 550.00, 0.45,
 1, 'FB-20240605-02', '{"广告点击":1,"转化":1}', 0.25,
 0.85, 0.45, 0, 205, 35.00, '普通会员',
 0.25, 0.8, '仅促销期', '2025-12-10', 'H6 Lite',
 '低于同类客户35%', 120, '欠佳表现', 'COH-FB-2024-Q2', '{"6个月留存":0.45,"12个月预测留存":0.25}',
 '高流失风险客户，使用频率低，支持互动较多，产品体验有问题', 0.65, '2025-03-10'
),

-- 新客户
('CUST-12583', 'TikTok Shop', '2025-03-01', '社交媒体', 'Spring_Clean_2025', 28.00,
 '年轻单身', '新客户', '活跃', 'TikTok', '2025-03-01', '2025-03-01',
 1, 350.00, 350.00, 350.00, 0.0, 0.0, 0.0, 0.0,
 '{"手持吸尘器":1}', '手持吸尘器', '{"H8 Pro":1}', '{}', 0.0, 0.0,
 42.0, 0.40, 0.18, 0.45, 3, 0.2, '{"产品视频":3,"使用指南":1}', 0,
 0, 0.0, 0, 0.0, 0.0, 0,
 0, 0, 0.0, 0.00, 30.0, 2,
 'TikTok Shop', '社交媒体', '{"TikTok互动":0.8}', 1.0,
 350.00, 850.00, 350.00, 680.00, 850.00, 0.55,
 1, 'TK-20250401-01', '{"视频发现":1,"转化":1}', 0.85,
 0.40, 0.0, 0, 32, 0.00, '新会员',
 0.70, 0.6, '未知', '2025-06-01', 'H8 Pro配件',
 '新客户', 0, '待评估', 'COH-TT-2025-Q1', '{"首购完成":1}',
 '社交媒体吸引的新客户，对内容反应良好，尚未建立购买模式', 0.60, '2025-03-31'
),

('CUST-15794', 'YouTube Ad', '2025-02-15', '视频广告', 'Tech_Review_2025', 35.00,
 '技术爱好者', '新客户', '活跃', '官网', '2025-02-20', '2025-03-10',
 2, 850.00, 425.00, 550.00, 20.0, 1.0, 0.0, 0.0,
 '{"扫地机器人":1,"配件":1}', '扫地机器人', '{"X8 Pro":1,"高效滤网":1}', '{"扫地机器人-配件":0.6}', 0.0, 0.2,
 65.0, 0.52, 0.28, 0.25, 18, 1.5, '{"产品评测":8,"技术规格":5,"对比视频":3}', 1,
 8, 4.5, 1, 4.5, 0.0, 0,
 0, 0, 0.0, 0.00, 55.0, 1,
 '官网', '电子邮件', '{"网站访问":0.7,"YouTube访问":0.5}', 1.0,
 850.00, 2200.00, 850.00, 1500.00, 2200.00, 0.65,
 1, 'YT-20250212-02', '{"视频研究":3,"网站研究":2,"转化":1}', 0.75,
 0.25, 1.0, 0, 45, 0.00, '新会员',
 0.85, 0.3, '未知', '2025-07-01', 'X9 Pro',
 '新客户优质开端', 0, '极佳开端', 'COH-YT-2025-Q1', '{"首月复购":1}',
 '研究型高潜力新客户，首月已复购，对技术和产品性能高度关注', 0.80, '2025-03-31'
),

-- 高价值长期客户
('CUST-35476', '自然搜索', '2023-05-18', '有机搜索', 'None', 0.00,
 '高端家庭', '钻石', '活跃', '官网', '2023-05-18', '2025-03-20',
 12, 5500.00, 458.33, 850.00, 55.0, 0.9, 0.8, 0.6,
 '{"扫地机器人":3,"手持吸尘器":2,"空气净化器":2,"摄像头":2,"配件":8}', '全屋智能', '{"X系列":3,"H系列":2,"空气净化器":2,"安防产品":2,"配件":8}', '{"扫地机器人-手持吸尘器":0.9,"扫地机器人-空气净化器":0.8,"空气净化器-摄像头":0.7}', 0.8, 0.9,
 95.0, 0.82, 0.58, 0.65, 85, 4.5, '{"产品评测":35,"使用指南":18,"技术文章":22,"生活方式":15}', 5,
 10, 4.9, 8, 4.9, 0.02, 1,
 5, 4, 0.8, 1850.00, 95.0, 8,
 '官网', '应用', '{"网站访问率":0.7,"应用使用率":0.6,"实体店访问率":0.3,"客服互动":0.4}', 0.7,
 5500.00, 9500.00, 1200.00, 2800.00, 9500.00, 0.92,
 1, 'YT-20250212-02,YT-20250105-02,TK-20250315-08', '{"长期研究":5,"产品比较":3,"生态考虑":2,"转化":1}', 0.65,
 0.05, 0.98, 0, 680, 65.00, 'VIP钻石会员',
 0.95, 0.2, '季度性更新,新品发布期', '2025-05-15', 'X10 Pro全屋套装',
 '高于同类客户45%', 1, '卓越表现', 'COH-ORG-2023-Q2', '{"24个月留存":0.98,"36个月预测留存":0.95}',
 '品牌忠诚的全品类客户，全家产品生态，持续复购，高推荐意愿，品牌大使潜力', 0.98, '2025-03-31'
);
