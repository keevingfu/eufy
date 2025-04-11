-- Viral Video Features Table
-- 爆款视频特征分析表

CREATE TABLE IF NOT EXISTS viral_video_features (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content_id TEXT,                      -- 内容ID
    platform TEXT,                        -- 平台
    publish_date DATE,                    -- 发布日期
    viral_status TEXT,                    -- 爆款状态(潜力型/爆发型/持续型/衰退型)
    viral_score REAL,                     -- 爆款评分(0-100)
    time_to_viral INTEGER,                -- 到达爆款的时间(小时)
    
    -- 内容特征
    duration INTEGER,                     -- 视频时长(秒)
    aspect_ratio TEXT,                    -- 宽高比
    resolution TEXT,                      -- 分辨率
    thumbnail_click_rate REAL,            -- 缩略图点击率
    opening_hook_duration INTEGER,        -- 开场钩子时长(秒)
    hook_retention_rate REAL,             -- 钩子留存率
    narrative_structure TEXT,             -- 叙事结构(问题解决型/对比型/教程型/情感型/惊喜型)
    content_category TEXT,                -- 内容类别
    primary_emotion TEXT,                 -- 主要情感诉求
    humor_elements BOOLEAN,               -- 是否包含幽默元素
    surprise_elements BOOLEAN,            -- 是否包含惊喜元素
    conflict_elements BOOLEAN,            -- 是否包含冲突元素
    transformation_elements BOOLEAN,      -- 是否包含转变元素
    
    -- 技术特征
    scene_changes INTEGER,                -- 场景切换数量
    average_shot_duration REAL,           -- 平均镜头时长(秒)
    camera_movement TEXT,                 -- 镜头运动(稳定/跟踪/摇摄/航拍)
    lighting_quality TEXT,                -- 光线质量(专业/自然/不足)
    audio_quality TEXT,                   -- 音频质量(专业/普通/嘈杂)
    background_music BOOLEAN,             -- 是否有背景音乐
    music_tempo TEXT,                     -- 音乐节奏(快/中/慢)
    voice_narration BOOLEAN,              -- 是否有语音旁白
    subtitles BOOLEAN,                    -- 是否有字幕
    special_effects TEXT,                 -- 特效类型
    text_overlays BOOLEAN,                -- 是否有文字覆盖
    
    -- 营销特征
    call_to_action TEXT,                  -- 行动召唤类型
    cta_timing INTEGER,                   -- 行动召唤时间点(秒)
    cta_conversion_rate REAL,             -- 行动召唤转化率
    branded_elements TEXT,                -- 品牌元素展示方式
    product_presentation_time REAL,       -- 产品展示时间占比
    product_integration_style TEXT,       -- 产品融入方式
    
    -- 传播特征
    viewer_retention_graph TEXT,          -- 观看者留存曲线(JSON格式)
    peak_retention_points TEXT,           -- 留存峰值点(JSON格式)
    drop_off_points TEXT,                 -- 流失点(JSON格式)
    sharing_triggers TEXT,                -- 分享触发点
    comment_sentiment REAL,               -- 评论情感分析得分
    comment_themes TEXT,                  -- 主要评论主题(JSON格式)
    audience_demographics TEXT,           -- 受众人口统计(JSON格式)
    referral_patterns TEXT,               -- 引荐模式(JSON格式)
    
    -- 竞争特征
    similar_viral_content TEXT,           -- 类似爆款内容
    category_benchmarks TEXT,             -- 类别基准(JSON格式)
    competitive_advantage TEXT,           -- 竞争优势
    
    -- 分析结论
    key_viral_elements TEXT,              -- 关键爆款元素
    recommendations TEXT,                 -- 建议
    notes TEXT,                           -- 备注
    
    analysis_date DATE,                   -- 分析日期
    analyst TEXT,                         -- 分析师
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 更新时间戳
);

-- Sample Data for viral_video_features
INSERT INTO viral_video_features (
    content_id, platform, publish_date, viral_status, viral_score, time_to_viral,
    duration, aspect_ratio, resolution, thumbnail_click_rate, opening_hook_duration, hook_retention_rate,
    narrative_structure, content_category, primary_emotion, humor_elements, surprise_elements, conflict_elements, transformation_elements,
    scene_changes, average_shot_duration, camera_movement, lighting_quality, audio_quality, background_music, music_tempo, voice_narration, subtitles, special_effects, text_overlays,
    call_to_action, cta_timing, cta_conversion_rate, branded_elements, product_presentation_time, product_integration_style,
    viewer_retention_graph, peak_retention_points, drop_off_points, sharing_triggers, comment_sentiment, comment_themes, audience_demographics, referral_patterns,
    similar_viral_content, category_benchmarks, competitive_advantage,
    key_viral_elements, recommendations, notes,
    analysis_date, analyst
) VALUES
-- TikTok爆款视频
('TK-20250315-08', 'TikTok', '2025-03-15', '持续型', 92.5, 6,
 28, '9:16', '1080p', 24.5, 3, 92.0,
 '对比型', '产品演示', '惊喜', 1, 1, 0, 1,
 12, 2.3, '稳定', '专业', '专业', 1, '快', 1, 1, '转场/缩放', 1,
 '购买链接', 26, 4.2, '自然融入', 35.0, '问题解决',
 '{"0%":100,"25%":95,"50%":88,"75%":82,"100%":75}', '{"12s":"产品效果展示","22s":"震撼对比"}', '{"8s":"节奏变慢","19s":"重复内容"}', '效果反差/意外结果', 0.88, '{"惊讶":45,"满意":30,"好奇":25}', '{"25-34岁":40,"女性":65,"家庭主妇":35}', '{"分享给好友":55,"分享到群组":30,"保存":15}',
 'TK-20241102-12,TK-20250212-04', '{"行业平均留存率":65,"类似内容平均分享率":12}', '高质量对比效果/清晰解说',
 '强烈视觉对比/情感诉求/清晰简洁展示', '加强开场钩子/优化结尾行动召唤', '持续表现超出预期，成为爆款视频范例',
 '2025-03-25', '张分析师'),

('TK-20250401-01', 'TikTok', '2025-04-01', '爆发型', 88.0, 8,
 32, '9:16', '1080p', 22.0, 4, 90.0,
 '问题解决型', '产品使用', '实用', 0, 1, 1, 1,
 8, 4.0, '跟踪', '自然', '专业', 1, '中', 1, 1, '放大/指示', 1,
 '了解更多', 30, 3.8, '明显标识', 45.0, '演示使用',
 '{"0%":100,"25%":92,"50%":85,"75%":78,"100%":70}', '{"15s":"问题解决","28s":"结果展示"}', '{"10s":"技术解释","22s":"重复内容"}', '解决实际痛点', 0.85, '{"满意":50,"实用":35,"好奇":15}', '{"35-44岁":45,"男性":55,"家庭主人":40}', '{"分享到群组":45,"保存":35,"评论":20}',
 'TK-20250315-08,TK-20250327-03', '{"行业平均互动率":15,"类似内容平均完成率":65}', '实用性强/真实情境演示',
 '实际问题解决/即时满足感/专业展示', '简化技术解释/加强情感连接', '发布首日即呈现爆发趋势，预计将持续增长',
 '2025-04-01', '李分析师'),

-- YouTube爆款视频
('YT-20250212-02', 'YouTube', '2025-02-12', '持续型', 85.0, 24,
 845, '16:9', '4K', 18.5, 15, 85.0,
 '教程型', '深度评测', '信任', 0, 0, 0, 1,
 32, 26.4, '稳定/航拍', '专业', '专业', 1, '慢', 1, 1, '分屏/图表', 1,
 '订阅频道', 830, 2.2, '贯穿全程', 65.0, '深度体验',
 '{"0%":100,"25%":85,"50%":75,"75%":70,"100%":65}', '{"120s":"技术解析","350s":"对比测试","680s":"实际应用"}', '{"200s":"技术细节","550s":"重复内容"}', '专业评测/深度分析', 0.92, '{"专业":55,"信任":30,"详细":15}', '{"25-44岁":65,"男性":70,"技术爱好者":50}', '{"保存":50,"分享到论坛":30,"评论":20}',
 'YT-20241125-04,YT-20250105-02', '{"行业平均观看时长":480,"深度评测平均完成率":60}', '专业性/全面测试/数据支持',
 '权威性/详尽测试/数据可视化', '优化长篇内容节奏/增加互动元素', '春节期间发布，成为行业参考标准视频',
 '2025-03-01', '王分析师'),

('YT-20250401-01', 'YouTube', '2025-04-01', '潜力型', 78.0, 0,
 625, '16:9', '4K', 16.0, 12, 82.0,
 '对比型', '产品对比', '好奇', 1, 0, 1, 0,
 28, 22.3, '稳定/跟踪', '专业', '专业', 1, '中', 1, 1, '分屏/标记', 1,
 '产品链接', 610, 1.8, '自然展示', 55.0, '对比测试',
 '{"0%":100,"25%":88,"50%":78,"75%":72,"100%":68}', '{"90s":"测试方法","280s":"实际效果","520s":"总结建议"}', '{"180s":"技术细节","450s":"内容拖沓"}', '实际使用场景/权威对比', 0.85, '{"专业":45,"实用":35,"好奇":20}', '{"35-54岁":60,"男性":65,"理性购买者":55}', '{"保存":45,"评论":35,"分享到社交媒体":20}',
 'YT-20250212-02,YT-20250326-05', '{"行业平均互动率":12,"对比类视频平均完成率":65}', '测试方法科学/真实使用场景',
 '对比方法清晰/数据支持/中立立场', '压缩技术细节部分/强化关键结论', '初始表现良好，预计将成为稳定增长型内容',
 '2025-04-01', '张分析师'),

-- Instagram爆款内容
('IG-20250312-03', 'Instagram', '2025-03-12', '持续型', 82.0, 12,
 0, '1:1', '1080p', 20.0, 0, 0.0,
 '情感型', '生活方式', '向往', 0, 0, 0, 1,
 1, 0.0, '稳定', '专业', '无', 0, '无', 0, 1, '滤镜', 1,
 '了解更多', 0, 3.2, '自然融入', 100.0, '生活场景',
 '{"浏览时间平均":15}', '{"图片中央":"产品展示"}', '{"无":0}', '美学价值/生活方式展示', 0.90, '{"喜爱":60,"向往":25,"好奇":15}', '{"25-34岁":55,"女性":70,"生活方式关注者":45}', '{"保存":65,"分享到Stories":25,"私信分享":10}',
 'IG-20241018-11,IG-20250205-09', '{"行业平均保存率":15,"生活方式内容平均互动率":12}', '高质量视觉/场景设计/色彩搭配',
 '视觉美学/生活场景自然融入/情感共鸣', '增加产品信息/优化行动召唤位置', '图片内容中表现优异，持续获得高保存率',
 '2025-03-22', '李分析师'),

('IG-20250401-02', 'Instagram', '2025-04-01', '潜力型', 79.0, 0,
 15, '9:16', '1080p', 18.5, 3, 88.0,
 '对比型', 'Reels短视频', '满足感', 0, 1, 0, 1,
 6, 2.5, '稳定', '专业', '专业', 1, '快', 0, 1, '转场', 1,
 '向上滑动', 14, 3.5, '自然融入', 60.0, '使用展示',
 '{"0%":100,"25%":95,"50%":90,"75%":85,"100%":80}', '{"5s":"效果展示","12s":"结果对比"}', '{"8s":"节奏变慢"}', '清洁满足感/效果对比', 0.88, '{"满足":55,"惊讶":25,"舒适":20}', '{"25-34岁":50,"女性":65,"家居爱好者":40}', '{"保存":55,"分享到Stories":35,"评论":10}',
 'IG-20250328-07,IG-20250312-03', '{"Reels平均完成率":70,"类似内容平均互动率":15}', '视觉冲击力/效果明显/节奏感强',
 '前后对比强烈/音乐节奏感/简洁展示', '优化开场钩子/强化品牌标识', 'Reels表现优于普通图片内容，有爆款潜力',
 '2025-04-01', '王分析师');
