-- Eufy社交媒体数据分析报告数据库表结构
-- 基于"EufySearch&VOC-C20InsightsforContent"文档内容设计

-- 1. 产品特性与消费者评价表
CREATE TABLE IF NOT EXISTS product_features (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    feature_name TEXT NOT NULL,
    feature_category TEXT NOT NULL, -- 例如：清洁能力、自动化功能、设计特性等
    positive_mentions INTEGER DEFAULT 0, -- 正面提及次数
    negative_mentions INTEGER DEFAULT 0, -- 负面提及次数
    percentage_positive REAL, -- 正面评价百分比
    platform TEXT, -- 数据来源平台：YouTube, TikTok, Google等
    notes TEXT -- 额外说明
);

-- 2. 消费者痛点表
CREATE TABLE IF NOT EXISTS consumer_pain_points (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pain_point TEXT NOT NULL,
    category TEXT NOT NULL, -- 例如：技术问题、价格问题、性能问题等
    mention_count INTEGER DEFAULT 0,
    views_count INTEGER, -- 相关内容观看量（针对TikTok/YouTube）
    search_volume INTEGER, -- 搜索量（针对Google/Amazon）
    platform TEXT, -- 数据来源平台
    impact_level TEXT, -- 影响程度：高、中、低
    suggested_solution TEXT -- 建议解决方案
);

-- 3. 搜索关键词分析表
CREATE TABLE IF NOT EXISTS search_keywords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    keyword TEXT NOT NULL,
    search_volume INTEGER,
    cpc REAL, -- Cost Per Click
    platform TEXT, -- 搜索平台：Google, Amazon, TikTok等
    category TEXT, -- 关键词类别：产品功能、问题解决、比较等
    search_intent TEXT, -- 搜索意图
    trend TEXT, -- 趋势：上升、稳定、下降
    notes TEXT
);

-- 4. 社交媒体内容表现表
CREATE TABLE IF NOT EXISTS social_media_content (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content_title TEXT,
    content_type TEXT, -- 视频、图片、文字等
    platform TEXT NOT NULL, -- TikTok, YouTube等
    views INTEGER DEFAULT 0,
    likes INTEGER DEFAULT 0,
    comments INTEGER DEFAULT 0,
    shares INTEGER DEFAULT 0,
    hashtags TEXT, -- 使用的标签
    content_theme TEXT, -- 内容主题
    engagement_rate REAL, -- 互动率
    notes TEXT
);

-- 5. 热门标签分析表
CREATE TABLE IF NOT EXISTS hashtag_analysis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hashtag TEXT NOT NULL,
    platform TEXT NOT NULL,
    post_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    engagement_rate REAL,
    related_hashtags TEXT,
    usage_percentage REAL, -- 在相关内容中的使用率
    notes TEXT
);

-- 6. 用户群体细分表
CREATE TABLE IF NOT EXISTS user_segments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    segment_name TEXT NOT NULL, -- 例如：宠物家庭、租房群体等
    segment_size_percentage REAL, -- 占总用户的百分比
    key_characteristics TEXT, -- 关键特征
    primary_needs TEXT, -- 主要需求
    pain_points TEXT, -- 特定痛点
    search_behavior TEXT, -- 搜索行为特点
    platform_preference TEXT, -- 平台偏好
    price_sensitivity TEXT, -- 价格敏感度
    notes TEXT
);

-- 7. 平台特定分析表
CREATE TABLE IF NOT EXISTS platform_analysis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT NOT NULL, -- YouTube, TikTok, Google等
    user_demographics TEXT, -- 用户人口统计
    content_preferences TEXT, -- 内容偏好
    engagement_patterns TEXT, -- 互动模式
    key_metrics TEXT, -- 关键指标
    growth_rate REAL, -- 增长率
    opportunities TEXT, -- 机会
    challenges TEXT, -- 挑战
    notes TEXT
);

-- 8. 内容营销策略表
CREATE TABLE IF NOT EXISTS content_marketing_strategies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    strategy_name TEXT NOT NULL,
    target_platform TEXT, -- 目标平台
    target_segment TEXT, -- 目标用户群体
    content_type TEXT, -- 内容类型
    key_elements TEXT, -- 关键元素
    expected_impact TEXT, -- 预期影响
    success_metrics TEXT, -- 成功指标
    example_content TEXT, -- 示例内容
    notes TEXT
);

-- 9. 产品改进建议表
CREATE TABLE IF NOT EXISTS product_improvement_suggestions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    suggestion TEXT NOT NULL,
    category TEXT, -- 改进类别：功能、设计、软件等
    user_demand_percentage REAL, -- 用户需求百分比
    implementation_difficulty TEXT, -- 实施难度
    potential_impact TEXT, -- 潜在影响
    priority TEXT, -- 优先级
    source TEXT, -- 建议来源
    notes TEXT
);

-- 10. 竞品对比分析表
CREATE TABLE IF NOT EXISTS competitor_analysis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    competitor_name TEXT NOT NULL,
    comparison_frequency INTEGER, -- 被比较的频率
    search_volume INTEGER, -- 对比搜索量
    eufy_advantages TEXT, -- Eufy相对优势
    competitor_advantages TEXT, -- 竞争对手优势
    price_difference REAL, -- 价格差异
    target_segments TEXT, -- 目标用户群体
    notes TEXT
);

-- 插入示例数据：产品特性与消费者评价
INSERT INTO product_features (feature_name, feature_category, positive_mentions, negative_mentions, percentage_positive, platform, notes)
VALUES 
('7000Pa吸力', '清洁能力', 840, 120, 87.5, 'YouTube', '技术参数在YouTube上受到高度关注'),
('自动拖把清洗与干燥', '自动化功能', 720, 180, 80.0, 'YouTube', '自清洁功能被视为高端产品的标志'),
('智能导航系统', '智能功能', 680, 320, 68.0, 'YouTube', '导航问题在多房间环境中更为明显'),
('超薄设计(3.35英寸)', '设计特性', 430, 70, 86.0, 'TikTok', '超薄设计在TikTok上获得高度好评'),
('宠物毛发清理能力', '清洁能力', 720, 280, 72.0, '全平台', '宠物家庭对此功能评价最高');

-- 插入示例数据：消费者痛点
INSERT INTO consumer_pain_points (pain_point, category, mention_count, views_count, search_volume, platform, impact_level, suggested_solution)
VALUES 
('繁琐的吸尘器维护', '使用体验', 3200, 41000000, NULL, 'TikTok', '高', '优化自清洁系统，减少人工维护频率'),
('价格过高', '价格问题', 2800, NULL, 390, 'Google', '高', '提供分期付款选项和更透明的价值说明'),
('电池衰减问题', '耐久性', 1550, NULL, 260, 'Google', '高', '改进电池技术，延长使用寿命'),
('WiFi连接不稳定', '技术问题', 900, NULL, 210, 'Google', '中', '优化2.4GHz频段连接稳定性'),
('边刷断裂', '耐久性', 1100, NULL, 170, 'Google', '中', '加强边刷材质和连接结构');

-- 插入示例数据：搜索关键词分析
INSERT INTO search_keywords (keyword, search_volume, cpc, platform, category, search_intent, trend, notes)
VALUES 
('eufy vacuum and mop', 880, NULL, 'Google', '产品功能', '购买意向', '上升', '显示消费者期望一机多用'),
('eufy vacuum robot', 720, NULL, 'Google', '产品类型', '购买意向', '稳定', '反映对自动化解决方案的需求'),
('eufy vacuum red light', 480, NULL, 'Google', '问题解决', '技术支持', '上升', '最常见的技术问题'),
('best eufy vacuum', 590, NULL, 'Google', '产品比较', '研究', '稳定', '购买前研究行为'),
('eufy vacuum deals', 390, 0.0, 'Google', '价格', '促销', '波动', '价格敏感度高');

-- 插入示例数据：社交媒体内容表现
INSERT INTO social_media_content (content_title, content_type, platform, views, likes, comments, shares, hashtags, content_theme, engagement_rate, notes)
VALUES 
('When I go out, it starts its work!', '视频', 'TikTok', 27000000, 1800000, 42000, 310000, '#EUFY #SmartHome', '自动清洁演示', 8.0, '自动化功能展示效果最佳'),
('eufy robovac cleaning timelapse', '视频', 'TikTok', 8800000, 720000, 18000, 95000, '#cleantok #satisfyingcleaning', '清洁过程', 9.5, '延时摄影内容获得最高互动量'),
('eufy red light fix', '视频', 'TikTok', 7200000, 680000, 32000, 280000, '#techfix #smartdevice', '故障解决', 13.8, '解决问题的内容转化率高'),
('Eufy X10 Pro vs Roomba j7+', '视频', 'YouTube', 1200000, 87000, 4200, 12000, NULL, '产品对比', 8.6, '详细的技术对比受到关注'),
('eufy cam outdoor makeover', '视频', 'TikTok', 2100000, 195000, 8700, 41000, '#smarthome #security', '产品改造', 11.7, '创意应用内容传播效果好');

-- 插入示例数据：热门标签分析
INSERT INTO hashtag_analysis (hashtag, platform, post_count, view_count, engagement_rate, related_hashtags, usage_percentage, notes)
VALUES 
('#EUFY', 'TikTok', NULL, 62000000, 7.8, '#SmartHome #CleanTok', 41.0, '品牌主标签'),
('#EufyC20', 'TikTok', NULL, 59000000, 8.2, '#EUFY #RobotVacuum', 38.0, '产品型号标签'),
('#mopVacuum', 'TikTok', NULL, 48000000, 6.5, '#CleaningHack #HomeGadget', 31.0, '功能标签'),
('#satisfyingcleaning', 'TikTok', 19300, 1500000000, 9.3, '#CleanTok #OddlySatisfying', 12.0, '清洁类通用标签'),
('#cleantok', 'TikTok', 3600000000, 101400000000, 8.7, '#CleanWithMe #CleaningMotivation', 9.0, '清洁内容社区标签');

-- 插入示例数据：用户群体细分
INSERT INTO user_segments (segment_name, segment_size_percentage, key_characteristics, primary_needs, pain_points, search_behavior, platform_preference, price_sensitivity, notes)
VALUES 
('宠物家庭', 38.0, '拥有一只或多只宠物的家庭', '高效清理宠物毛发，减少过敏原', '毛发缠绕滚刷，清洁频率高', '搜索"pet hair"相关词，关注实际效果', 'TikTok视频展示', '中等，愿为解决方案支付溢价', '增长最快的用户群体'),
('租房群体', 22.0, '租赁住房的年轻人', '便携式、无需固定安装的解决方案', '不能改动房屋结构，空间有限', '搜索"apartment"、"no drill"相关词', 'TikTok短视频', '高，预算有限', '对无线和便携特性高度关注'),
('双职工家庭', 27.0, '夫妻都工作的家庭', '自动化清洁，节省时间', '清洁时间有限，需要高效率', '搜索自动化和时间节省相关词', 'YouTube详细评测', '低，愿意投资高端产品', '强调"解放双手"价值'),
('科技爱好者', 13.0, '追求最新科技的用户', '先进技术特性，智能集成', '软件稳定性，与其他智能设备兼容', '搜索技术规格和比较内容', 'YouTube技术评测', '低，追求高端功能', '关注LiDAR、AI等先进功能');

-- 插入示例数据：平台特定分析
INSERT INTO platform_analysis (platform, user_demographics, content_preferences, engagement_patterns, key_metrics, growth_rate, opportunities, challenges, notes)
VALUES 
('YouTube', '25-45岁，技术关注型用户', '详细评测，技术参数分析', '长视频观看，评论互动', '观看时长，评论质量', 15.0, '深度技术内容，对比评测', '内容制作成本高，竞争激烈', '技术细节和客观评价最受重视'),
('TikTok', '18-35岁，视觉导向型用户', '短视频，视觉效果，Before-After对比', '快速滑动，点赞，分享', '完播率，分享率', 42.0, '创意视觉内容，挑战赛', '注意力时间短，需视觉冲击', '视觉展示效果显著影响转化'),
('Google', '全年龄段，问题解决型搜索', '教程，问题解答，产品比较', '深度研究，多页面浏览', '点击率，跳出率', 8.0, '针对性问题解决内容', '搜索意图复杂，竞争关键词成本高', '技术问题和购买决策是主要搜索动机'),
('Amazon', '25-55岁，购买决策型用户', '产品规格，用户评价，问答', '比价，评论阅读，购买', '转化率，评价数量', 12.0, '详细产品说明，问题解答', '价格竞争激烈，评价管理挑战', '评价质量直接影响销售表现');

-- 插入示例数据：内容营销策略
INSERT INTO content_marketing_strategies (strategy_name, target_platform, target_segment, content_type, key_elements, expected_impact, success_metrics, example_content, notes)
VALUES 
('Before-After对比展示', 'TikTok', '全部用户', '短视频', '清洁前后的强烈对比，慢动作展示', '提高品牌认知，展示产品效果', '观看量，分享率', '宠物毛发清理前后对比视频', '播放量提升220%的高效内容形式'),
('技术可视化呈现', 'YouTube', '科技爱好者', '评测视频', '红外透视镜头展示LiDAR建图过程', '建立技术权威性', '观看时长，订阅转化', 'Eufy导航技术深度解析', '带实验室对比场景的完播率达92%'),
('故障解决教程', 'TikTok/YouTube', '现有用户', '教程视频', '常见问题的快速解决方案', '提高用户满意度，减少退货', '问题解决率，评论正向率', 'Eufy红灯问题3分钟修复', '解决问题的内容获得高互动'),
('挑战赛营销', 'TikTok', '年轻用户', '互动挑战', '用户参与的清洁挑战，展示效果', '提高用户生成内容，扩大影响', '参与人数，标签使用量', '#eufycleansquad清洁挑战', '吸引94万用户参与的成功案例'),
('拟人化内容', 'TikTok', '情感型用户', '故事类短视频', 'Eufy"越狱"或"迷路"的搞笑短剧', '增强情感连接，提高品牌亲和力', '互动率，评论情感倾向', 'Eufy的一天：家庭成员视角', '情感连接内容传播效果好');

-- 插入示例数据：产品改进建议
INSERT INTO product_improvement_suggestions (suggestion, category, user_demand_percentage, implementation_difficulty, potential_impact, priority, source, notes)
VALUES 
('提高电池寿命', '耐久性', 31.0, '中', '高-减少31%的投诉', '高', '用户评论分析', '硬件故障集中在13-18个月使用周期'),
('增加拖布压力', '性能', 15.0, '低', '中-提升湿拖效果', '中', 'TikTok评论', '当前压力仅3N，不足以清除顽固污渍'),
('优化WiFi连接稳定性', '软件', 18.0, '中', '高-减少连接问题', '高', 'Google搜索分析', '特别是在5GHz网络环境中问题明显'),
('添加银离子杀菌模块', '功能扩展', 45.0, '中', '高-满足健康需求', '中', '用户调查', '健康意识提升带来的新需求'),
('改进边刷设计', '耐久性', 22.0, '低', '中-减少维护频率', '中', '用户评论', '边缘清洁问题占差评的51%');

-- 插入示例数据：竞品对比分析
INSERT INTO competitor_analysis (competitor_name, comparison_frequency, search_volume, eufy_advantages, competitor_advantages, price_difference, target_segments, notes)
VALUES 
('Roborock', 320, 320, '价格更低，静音性能更好', 'LiDAR导航更精准，多层地图功能更完善', -150.00, '科技爱好者，高端用户', 'CPC$1.89，高端市场竞争激烈'),
('Roomba', 280, 280, '更薄设计，价格更低', '品牌认知度更高，耐用性更好', -200.00, '主流家庭，品牌忠诚用户', '与iRobot的对比搜索量持续增长'),
('Shark', 110, 20, '智能功能更多，App更易用', '吸力更持久，售后服务更好', -100.00, '预算型用户，实用主义者', 'CPC$1.36，营销投放存在溢价空间'),
('Dyson', 90, 10, '自动化程度更高，价格更低', '手持功能更强，品牌溢价更高', -350.00, '高端用户，设计关注者', '主要在吸尘器而非机器人领域竞争'),
('iLife', 70, NULL, '智能功能更多，清洁效果更好', '价格更低，入门级市场份额更大', 100.00, '预算有限用户，首次购买者', '价格敏感型市场的主要竞争对手');
