-- Landing Page Performance Table
-- 落地页内容和标签效果表

CREATE TABLE IF NOT EXISTS landing_page_performance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_id TEXT,                        -- 页面ID
    page_name TEXT,                      -- 页面名称
    page_url TEXT,                       -- 页面URL
    page_type TEXT,                      -- 页面类型(产品页/活动页/分类页/内容页)
    template_id TEXT,                    -- 模板ID
    
    -- 基本信息
    creation_date DATE,                  -- 创建日期
    last_update_date DATE,               -- 最后更新日期
    status TEXT,                         -- 状态(活跃/已归档/测试中)
    responsive_design BOOLEAN,           -- 是否响应式设计
    mobile_optimized BOOLEAN,            -- 是否移动端优化
    
    -- 设计元素
    header_type TEXT,                    -- 头部类型
    hero_section_type TEXT,              -- 主视觉区类型
    primary_cta TEXT,                    -- 主要行动召唤
    secondary_cta TEXT,                  -- 次要行动召唤
    form_fields TEXT,                    -- 表单字段(JSON格式)
    media_types TEXT,                    -- 媒体类型(图片/视频/轮播等)
    trust_indicators TEXT,               -- 信任指标(JSON格式)
    color_scheme TEXT,                   -- 配色方案
    
    -- 内容元素
    headline TEXT,                       -- 主标题
    subheadline TEXT,                    -- 副标题
    usp_count INTEGER,                   -- 独特卖点数量
    feature_count INTEGER,               -- 功能点数量
    benefit_count INTEGER,               -- 益处点数量
    testimonial_count INTEGER,           -- 推荐语数量
    image_count INTEGER,                 -- 图片数量
    video_count INTEGER,                 -- 视频数量
    
    -- 标签使用
    tags TEXT,                           -- 使用的标签(JSON格式)
    primary_tag TEXT,                    -- 主要标签
    tag_cloud_data TEXT,                 -- 标签云数据(JSON格式)
    tag_performance_summary TEXT,        -- 标签表现概要(JSON格式)
    top_performing_tags TEXT,            -- 表现最佳标签
    worst_performing_tags TEXT,          -- 表现最差标签
    
    -- 流量指标
    total_visits INTEGER,                -- 总访问量
    unique_visitors INTEGER,             -- 独立访客数
    pageviews INTEGER,                   -- 页面浏览量
    average_time_on_page REAL,           -- 平均页面停留时间(秒)
    bounce_rate REAL,                    -- 跳出率
    exit_rate REAL,                      -- 退出率
    
    -- 来源指标
    traffic_sources TEXT,                -- 流量来源(JSON格式)
    top_referrers TEXT,                  -- 主要引荐来源
    campaign_source TEXT,                -- 活动来源
    channel_distribution TEXT,           -- 渠道分布(JSON格式)
    direct_traffic_percentage REAL,      -- 直接流量百分比
    social_traffic_percentage REAL,      -- 社交流量百分比
    
    -- 用户行为
    scroll_depth_data TEXT,              -- 滚动深度数据(JSON格式)
    click_map_data TEXT,                 -- 点击地图数据(JSON格式)
    interaction_hotspots TEXT,           -- 互动热点(JSON格式)
    most_clicked_elements TEXT,          -- 最多点击元素
    least_clicked_elements TEXT,         -- 最少点击元素
    
    -- 转化指标
    conversion_rate REAL,                -- 转化率
    conversion_count INTEGER,            -- 转化数量
    conversion_value REAL,               -- 转化价值
    add_to_cart_rate REAL,               -- 加购率
    micro_conversion_data TEXT,          -- 微转化数据(JSON格式)
    conversion_by_source TEXT,           -- 各来源转化率(JSON格式)
    
    -- 内容关联
    related_content_ids TEXT,            -- 相关内容ID
    content_source TEXT,                 -- 内容来源
    content_conversion_lift REAL,        -- 内容提升转化率
    content_bounce_rate_impact REAL,     -- 内容对跳出率影响
    
    -- A/B测试
    ab_test_status TEXT,                 -- A/B测试状态
    variant_performance TEXT,            -- 变体表现(JSON格式)
    winning_variant TEXT,                -- 获胜变体
    improvement_percentage REAL,         -- 改进百分比
    confidence_level REAL,               -- 置信水平
    
    -- 性能指标
    load_time REAL,                      -- 加载时间(秒)
    mobile_load_time REAL,               -- 移动端加载时间(秒)
    first_contentful_paint REAL,         -- 首次内容绘制(秒)
    largest_contentful_paint REAL,       -- 最大内容绘制(秒)
    cumulative_layout_shift REAL,        -- 累积布局偏移
    
    -- 关键词和SEO
    focus_keywords TEXT,                 -- 焦点关键词
    seo_score REAL,                      -- SEO评分
    search_visibility REAL,              -- 搜索可见度
    organic_traffic INTEGER,             -- 自然流量
    
    -- 分析结论
    performance_summary TEXT,            -- 表现总结
    improvement_recommendations TEXT,     -- 改进建议
    insights TEXT,                       -- 洞察
    
    notes TEXT,                          -- 备注
    owner TEXT,                          -- 负责人
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 更新时间戳
);

-- Sample Data for landing_page_performance
INSERT INTO landing_page_performance (
    page_id, page_name, page_url, page_type, template_id,
    creation_date, last_update_date, status, responsive_design, mobile_optimized,
    header_type, hero_section_type, primary_cta, secondary_cta, form_fields, media_types, trust_indicators, color_scheme,
    headline, subheadline, usp_count, feature_count, benefit_count, testimonial_count, image_count, video_count,
    tags, primary_tag, tag_cloud_data, tag_performance_summary, top_performing_tags, worst_performing_tags,
    total_visits, unique_visitors, pageviews, average_time_on_page, bounce_rate, exit_rate,
    traffic_sources, top_referrers, campaign_source, channel_distribution, direct_traffic_percentage, social_traffic_percentage,
    scroll_depth_data, click_map_data, interaction_hotspots, most_clicked_elements, least_clicked_elements,
    conversion_rate, conversion_count, conversion_value, add_to_cart_rate, micro_conversion_data, conversion_by_source,
    related_content_ids, content_source, content_conversion_lift, content_bounce_rate_impact,
    ab_test_status, variant_performance, winning_variant, improvement_percentage, confidence_level,
    load_time, mobile_load_time, first_contentful_paint, largest_contentful_paint, cumulative_layout_shift,
    focus_keywords, seo_score, search_visibility, organic_traffic,
    performance_summary, improvement_recommendations, insights,
    notes, owner
) VALUES 
-- 产品落地页
('LP-PROD-2025-X8', 'X8 Pro产品页', 'https://www.eufy.com/products/x8-pro-robovac', '产品页', 'TMPL-PROD-01',
 '2025-02-01', '2025-03-15', '活跃', 1, 1,
 '透明导航', '视频背景', '立即购买', '了解更多', '{"字段":["邮箱"]}', '视频,图片,3D交互', '{"认证":["TÜV认证","质保2年"],"评价":["4.8星","2500+评论"],"媒体":["Wirecutter推荐","PCMag编辑之选"]}', '深蓝色+白色',
 '强大吸力，智能规划，彻底清洁', '全新X8 Pro，配备AI障碍识别与自清洁底座', 5, 12, 8, 6, 18, 3,
 '{"产品标签":["智能扫地机器人","强力吸尘","AI识别","自清洁","激光导航"],"场景标签":["家庭清洁","宠物家庭","大户型","智能家居"],"价值标签":["效率提升","省心省力","深度清洁","智能生活"]}', '智能扫地机器人', '{"智能扫地机器人":120,"强力吸尘":85,"AI识别":72,"宠物家庭":68,"深度清洁":62}', '{"整体转化率":5.8,"标签影响分":"高","最佳组合":"智能扫地机器人+宠物家庭+深度清洁"}', '宠物家庭,深度清洁,智能生活', '激光导航,智能家居',
 125000, 95000, 320000, 280.0, 28.0, 18.0,
 '{"直接":15,"有机搜索":25,"付费搜索":20,"社交媒体":30,"邮件":5,"推荐":5}', 'TikTok,YouTube,Google', 'Spring_Clean_2025', '{"TikTok":28,"YouTube":25,"搜索":32,"直接":15}', 15.0, 35.0,
 '{"25%":85,"50%":72,"75%":65,"100%":55}', '{"购买按钮":350,"视频播放":280,"规格查看":220,"评论区":180}', '{"主视觉区":"高","功能展示区":"中高","评价区":"中"}', '主购买按钮,视频播放按钮,颜色选择器', '技术规格按钮,社交分享按钮',
 5.8, 5510, 1928500.00, 12.5, '{"视频观看":65,"规格点击":48,"评价阅读":42}', '{"TikTok":7.2,"YouTube":6.3,"搜索":4.5,"直接":3.8}',
 'TK-20250315-08,YT-20250212-02,IG-20250312-03', '内容营销', 0.8, -0.12,
 '已完成', '{"原版":{"转化率":4.8},"A版本":{"转化率":5.2},"B版本":{"转化率":5.8}}', 'B版本', 20.8, 95.0,
 1.8, 2.2, 0.8, 1.5, 0.02,
 'eufy x8 pro,智能扫地机器人,最佳扫地机器人2025,AI扫地机器人', 88.0, 72.0, 23500,
 '高访问量高转化率页面，内容和社交引流表现优异，高客单价', '优化移动端加载速度；增加更多宠物家庭场景内容；强化用户评价区域', '社交媒体流量转化率显著高于其他渠道；标签"宠物家庭"与"深度清洁"结合效果最佳；视频内容提升留存',
 '2025年Q1旗舰产品页，整体表现超出预期，标签策略成功', '张产品经理'
),

('LP-CAMP-2025-SPRING', '春季清洁专题页', 'https://www.eufy.com/campaigns/spring-clean-2025', '活动页', 'TMPL-CAMP-02',
 '2025-02-20', '2025-03-01', '活跃', 1, 1,
 '图片导航', '视频轮播', '查看优惠', '获取定制方案', '{"字段":["邮箱","房型"]}', '视频,轮播,动画', '{"限时":["春季限定","4月15日截止"],"优惠":["最高8折","赠品"]}', '绿色+白色',
 '春季焕新，智能清洁体验', '让春季大扫除变得轻松惬意', 3, 8, 6, 8, 15, 2,
 '{"季节标签":["春季清洁","焕新家居","过敏季节"],"产品标签":["扫地机器人","吸尘器","空气净化器"],"价值标签":["时间节省","一站式","全屋清洁"]}', '春季清洁', '{"春季清洁":150,"焕新家居":120,"过敏季节":85,"时间节省":72,"全屋清洁":65}', '{"整体转化率":7.2,"标签影响分":"极高","最佳组合":"春季清洁+过敏季节+时间节省"}', '春季清洁,过敏季节,全屋清洁', '空气净化器,一站式',
 180000, 145000, 420000, 220.0, 32.0, 22.0,
 '{"直接":10,"有机搜索":15,"付费搜索":25,"社交媒体":40,"邮件":8,"推荐":2}', 'TikTok,Instagram,Facebook', 'Spring_Clean_2025', '{"TikTok":38,"Instagram":25,"Facebook":18,"搜索":19}', 10.0, 45.0,
 '{"25%":90,"50%":78,"75%":65,"100%":52}', '{"产品对比":420,"限时优惠":380,"套装查看":320,"定制方案":180}', '{"主视觉区":"高","产品组合区":"极高","优惠区":"高"}', '立即购买按钮,产品对比工具,限时优惠区', '社交分享按钮,常见问题区',
 7.2, 10440, 3132000.00, 18.5, '{"产品对比使用":58,"优惠查看":65,"套装浏览":52}', '{"TikTok":8.5,"Instagram":7.8,"Facebook":6.2,"搜索":5.5}',
 'TK-20250327-03,TK-20250401-01,IG-20250328-07', '社交媒体活动', 1.2, -0.18,
 '进行中', '{"原版":{"转化率":6.2},"A版本":{"转化率":7.2},"B版本":{"转化率":6.8}}', 'A版本', 16.1, 92.0,
 2.0, 2.5, 0.9, 1.8, 0.03,
 '春季大扫除,春季清洁方案,过敏季节清洁,春季家居焕新', 82.0, 68.0, 18500,
 '高流量季节性活动页，转化率显著高于常规产品页，社交媒体引流效果突出', '优化移动端表单体验；增强过敏相关内容；简化购买流程减少步骤', '标签"过敏季节"在春季表现极佳；套装产品比单品转化率高35%；TikTok流量质量最高',
 '2025年春季大促活动页，用户参与度高，产品组合策略成功', '李活动经理'
),

('LP-BLOG-2025-PET', '宠物家庭清洁指南', 'https://www.eufy.com/blog/pet-cleaning-guide-2025', '内容页', 'TMPL-BLOG-01',
 '2025-01-15', '2025-02-01', '活跃', 1, 1,
 '简约导航', '大图+标题', '查看推荐产品', '下载完整指南', '{"字段":["邮箱","宠物类型"]}', '图片,信息图表', '{"专家":["宠物行为专家认证","兽医推荐"],"使用者":["5000+宠物主人验证"]}', '蓝绿色+米色',
 '宠物家庭的全方位清洁解决方案', '告别毛发困扰，享受洁净家居', 4, 6, 8, 12, 22, 1,
 '{"宠物标签":["猫咪家庭","狗狗家庭","宠物毛发","宠物过敏"],"清洁标签":["深度清洁","日常维护","空气净化","毛发管理"],"情感标签":["无忧生活","时间节省","健康家庭"]}', '宠物毛发', '{"宠物毛发":180,"深度清洁":150,"猫咪家庭":120,"狗狗家庭":110,"健康家庭":85}', '{"整体转化率":8.5,"标签影响分":"极高","最佳组合":"宠物毛发+深度清洁+健康家庭"}', '宠物毛发,深度清洁,健康家庭', '空气净化,日常维护',
 95000, 82000, 220000, 450.0, 18.0, 12.0,
 '{"直接":5,"有机搜索":45,"付费搜索":10,"社交媒体":35,"邮件":3,"推荐":2}', 'Google,Pinterest,Facebook宠物群组', 'Pet_Content_2025', '{"搜索":50,"社交":35,"邮件":10,"直接":5}', 5.0, 38.0,
 '{"25%":95,"50%":88,"75%":82,"100%":75}', '{"推荐产品":280,"下载指南":250,"查看评论":180,"分享内容":120}', '{"产品推荐区":"高","案例研究区":"高","专家建议区":"中高"}', '产品推荐区,下载指南按钮,分享按钮', '相关阅读链接,评论区',
 8.5, 6970, 2090100.00, 15.8, '{"指南下载":38,"内容分享":25,"评论":12}', '{"搜索":9.2,"Pinterest":8.8,"Facebook":8.5,"直接":6.2}',
 'YT-20250128-03,IG-20250312-03,TK-20250315-08', '内容营销', 1.5, -0.22,
 '已完成', '{"原版":{"转化率":6.8},"A版本":{"转化率":8.5},"B版本":{"转化率":7.2}}', 'A版本', 25.0, 98.0,
 1.5, 1.8, 0.7, 1.2, 0.01,
 '宠物毛发清理,宠物家庭清洁,狗狗猫咪清洁,宠物主人清洁指南', 95.0, 85.0, 42500,
 '极高转化率内容页，SEO表现卓越，长时间停留，高下载率', '增加更多视频演示；扩展猫咪专属内容；增强产品对比功能', '长内容高完成率证明用户需求强烈；标签精准度高；搜索流量质量超出预期',
 '2025年最成功内容页之一，精准针对宠物主人痛点，搜索排名持续攀升', '王内容经理'
),

('LP-PROD-2025-MINI', 'Mini净化器产品页', 'https://www.eufy.com/products/mini-air-purifier', '产品页', 'TMPL-PROD-01',
 '2025-03-01', '2025-03-20', '活跃', 1, 1,
 '透明导航', '产品大图', '立即购买', '查看规格', '{"字段":["邮箱"]}', '图片,图表,动画', '{"认证":["HEPA认证","能效A+"],"评价":["4.7星","1800+评论"],"媒体":["Good Housekeeping推荐"]}', '淡蓝色+白色',
 '小巧强效，呵护每一次呼吸', '专为小空间设计的高效空气净化器', 4, 8, 6, 5, 12, 1,
 '{"产品标签":["空气净化器","HEPA过滤","小巧便携","静音设计"],"场景标签":["卧室","书房","婴儿房","办公室"],"价值标签":["空气质量","呼吸健康","过敏缓解"]}', '空气净化器', '{"空气净化器":110,"过敏缓解":95,"HEPA过滤":85,"卧室":80,"婴儿房":75}', '{"整体转化率":6.2,"标签影响分":"高","最佳组合":"空气净化器+过敏缓解+婴儿房"}', '过敏缓解,婴儿房,呼吸健康', 'HEPA过滤,静音设计',
 85000, 72000, 180000, 210.0, 32.0, 25.0,
 '{"直接":12,"有机搜索":35,"付费搜索":18,"社交媒体":25,"邮件":8,"推荐":2}', 'Google,Instagram,医疗网站', 'Air_Quality_2025', '{"搜索":48,"社交":25,"邮件":15,"直接":12}', 12.0, 28.0,
 '{"25%":85,"50%":72,"75%":60,"100%":45}', '{"购买按钮":280,"规格查看":240,"过滤效果":220,"评论区":120}', '{"产品展示区":"高","过滤效果区":"高","适用场景区":"中"}', '购买按钮,颜色选择,适用面积计算器', '技术规格详情,配件区域',
 6.2, 4464, 891600.00, 13.5, '{"规格查看":52,"适用面积计算":45,"评价阅读":38}', '{"搜索":7.5,"Instagram":6.8,"医疗网站":5.8,"直接":4.2}',
 'IG-20250205-09,YT-20250326-05', '内容营销', 0.7, -0.08,
 '进行中', '{"原版":{"转化率":5.5},"A版本":{"转化率":6.2}}', '测试中', 12.7, 88.0,
 1.6, 2.0, 0.8, 1.4, 0.02,
 '小型空气净化器,卧室空气净化器,过敏空气净化器,便携式空气净化器', 92.0, 80.0, 29500,
 '良好转化率产品页，搜索流量占比高，医疗网站引荐流量质量高', '增强移动端产品展示；优化过敏相关内容；简化购买流程', '场景标签"婴儿房"和"卧室"表现突出；过敏相关内容和标签转化率高；搜索流量持续增长',
 '2025年新品页面，婴儿和过敏人群定位精准，跳出率有待优化', '张产品经理'
),

('LP-CAMP-2025-BUNDLE', '全屋清洁套装专题', 'https://www.eufy.com/campaigns/whole-home-bundle', '活动页', 'TMPL-CAMP-03',
 '2025-03-10', '2025-03-25', '活跃', 1, 1,
 '固定导航', '产品组合图', '定制套装', '查看优惠', '{"字段":["邮箱","房型","预算"]}', '图片,3D交互,视频', '{"节省":["套装省25%","免费配件"],"服务":["免费安装","3年保修"]}', '深蓝色+淡金色',
 '一站式全屋智能清洁解决方案', '扫地、吸尘、净化，智能互联', 3, 12, 10, 8, 20, 2,
 '{"产品标签":["扫地机器人","手持吸尘器","空气净化器","智能互联"],"场景标签":["全屋清洁","大户型","家庭套装"],"价值标签":["一站式","省时省力","品质生活"]}', '全屋清洁', '{"全屋清洁":130,"智能互联":110,"一站式":95,"家庭套装":85,"大户型":75}', '{"整体转化率":4.8,"标签影响分":"高","最佳组合":"全屋清洁+智能互联+一站式"}', '全屋清洁,智能互联,一站式', '大户型,手持吸尘器',
 75000, 65000, 180000, 320.0, 25.0, 18.0,
 '{"直接":15,"有机搜索":25,"付费搜索":20,"社交媒体":30,"邮件":8,"推荐":2}', 'Google,YouTube,家居网站', 'Home_Bundle_2025', '{"搜索":42,"社交":30,"邮件":18,"直接":10}', 15.0, 35.0,
 '{"25%":88,"50%":75,"75%":65,"100%":55}', '{"套装定制":320,"产品对比":280,"优惠查看":250,"配置选择":220}', '{"套装展示区":"高","节省计算区":"高","配置选择区":"中高"}', '定制按钮,添加产品按钮,优惠计算器', '单品链接,技术规格区',
 4.8, 3120, 1560000.00, 12.5, '{"套装浏览":68,"配置调整":52,"优惠计算":48}', '{"YouTube":6.2,"搜索":5.5,"邮件":4.8,"直接":3.2}',
 'YT-20250212-02,TK-20250327-03', '内容营销', 0.6, -0.05,
 '已完成', '{"原版":{"转化率":3.8},"A版本":{"转化率":4.8},"B版本":{"转化率":4.2}}', 'A版本', 26.3, 94.0,
 2.2, 2.5, 1.0, 1.9, 0.03,
 '智能家居清洁套装,全屋清洁解决方案,智能清洁套装,家庭清洁系统', 85.0, 72.0, 18500,
 '高客单价活动页，套装转化率良好，长时间停留度高，定制工具使用率高', '简化定制流程；增强产品组合可视化；优化移动端套装展示', '智能互联特性是购买决策关键因素；高客单价但总体ROI高；YouTube视频内容引流最有效',
 '2025年高价值活动页，客单价是普通产品页3倍，定制工具受欢迎', '李活动经理'
);
