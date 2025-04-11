-- Self-Operate KOC Table
-- 自营KOC运营表

CREATE TABLE IF NOT EXISTS self_operate_koc (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    koc_id TEXT,                          -- KOC唯一标识
    platform TEXT,                        -- 平台
    account_name TEXT,                    -- 账户名称
    account_url TEXT,                     -- 账户链接
    language TEXT,                        -- 语言
    category TEXT,                        -- 类别(科技/生活方式/家居/美妆等)
    content_style TEXT,                   -- 内容风格
    
    -- 账户信息
    creation_date DATE,                   -- 创建日期
    follower_count INTEGER,               -- 粉丝数量
    following_count INTEGER,              -- 关注数量
    post_count INTEGER,                   -- 发布数量
    verification_status BOOLEAN,          -- 认证状态
    bio_text TEXT,                        -- 简介文本
    
    -- 内容策略
    content_pillars TEXT,                 -- 内容支柱
    posting_frequency TEXT,               -- 发布频率
    optimal_posting_time TEXT,            -- 最佳发布时间
    content_calendar_link TEXT,           -- 内容日历链接
    hashtag_strategy TEXT,                -- 标签策略
    
    -- 受众分析
    audience_demographics TEXT,           -- 受众人口统计(JSON格式)
    audience_interests TEXT,              -- 受众兴趣(JSON格式)
    audience_geography TEXT,              -- 受众地理分布(JSON格式)
    audience_growth_rate REAL,            -- 受众增长率
    audience_engagement_rate REAL,        -- 受众互动率
    
    -- 绩效指标
    avg_views_per_post REAL,              -- 平均每贴观看量
    avg_engagement_rate REAL,             -- 平均互动率
    avg_conversion_rate REAL,             -- 平均转化率
    best_performing_content TEXT,         -- 表现最佳内容
    worst_performing_content TEXT,        -- 表现最差内容
    
    -- 技术信息
    account_credentials TEXT,             -- 账户凭证(加密存储)
    recovery_email TEXT,                  -- 恢复电子邮件
    recovery_phone TEXT,                  -- 恢复电话
    two_factor_status BOOLEAN,            -- 两因素状态
    api_access_status TEXT,               -- API访问状态
    
    -- 团队管理
    content_creators TEXT,                -- 内容创作者
    content_approvers TEXT,               -- 内容批准者
    account_managers TEXT,                -- 账户管理员
    workflow_link TEXT,                   -- 工作流程链接
    approval_process TEXT,                -- 审批流程
    
    -- 资源管理
    content_tools TEXT,                   -- 内容工具
    budget_allocation REAL,               -- 预算分配
    roi_metrics TEXT,                     -- ROI指标
    resource_constraints TEXT,            -- 资源限制
    
    -- 竞争分析
    competitive_positioning TEXT,         -- 竞争定位
    industry_benchmarks TEXT,             -- 行业基准
    competitive_advantage TEXT,           -- 竞争优势
    
    -- 风险管理
    risk_assessment TEXT,                 -- 风险评估
    crisis_management_plan TEXT,          -- 危机管理计划
    compliance_checks TEXT,               -- 合规检查
    
    -- 发展计划
    growth_strategy TEXT,                 -- 增长策略
    partnership_opportunities TEXT,       -- 合作机会
    monetization_strategy TEXT,           -- 变现策略
    
    notes TEXT,                           -- 备注
    last_updated DATE,                    -- 最后更新日期
    update_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 更新时间戳
);

-- Sample Data for self_operate_koc
INSERT INTO self_operate_koc (
    koc_id, platform, account_name, account_url, language, category, content_style,
    creation_date, follower_count, following_count, post_count, verification_status, bio_text,
    content_pillars, posting_frequency, optimal_posting_time, content_calendar_link, hashtag_strategy,
    audience_demographics, audience_interests, audience_geography, audience_growth_rate, audience_engagement_rate,
    avg_views_per_post, avg_engagement_rate, avg_conversion_rate, best_performing_content, worst_performing_content,
    account_credentials, recovery_email, recovery_phone, two_factor_status, api_access_status,
    content_creators, content_approvers, account_managers, workflow_link, approval_process,
    content_tools, budget_allocation, roi_metrics, resource_constraints,
    competitive_positioning, industry_benchmarks, competitive_advantage,
    risk_assessment, crisis_management_plan, compliance_checks,
    growth_strategy, partnership_opportunities, monetization_strategy,
    notes, last_updated
) VALUES 
-- TikTok KOC
('TK-KOC-001', 'TikTok', 'EufyCleanLife', 'https://tiktok.com/@eufycleanlife', '英文', '清洁技巧', '教育+娱乐',
 '2024-06-15', 580000, 1250, 320, 1, '让清洁变得简单高效 | 清洁技巧 | 智能家居 | 省时窍门 #EufyOfficial',
 '清洁技巧,产品展示,用户问题解答,清洁对比', '每周3-4次', '周二/周四/周六 18:00-21:00', 'https://company.sharepoint.com/sites/social/content-calendar', '每帖15-20标签，结合产品+清洁+生活方式标签',
 '{"18-34岁":65,"女性":72,"有孩子":48}', '{"家居清洁":90,"时间管理":75,"智能家居":70}', '{"美国":45,"英国":15,"澳大利亚":10,"加拿大":8}', 8.5, 15.2,
 850000, 16.8, 4.2, 'TK-20250315-08(清洁地毯前后对比),TK-20250401-01(快速清洁秘诀)', 'TK-20240805-02(产品技术细节),TK-20240920-04(语音控制演示)',
 '[加密存储]', 'koc-tiktok@company.com', '+1-555-123-4567', 1, '完全访问权限',
 '李制作,张创意,王摄影', '陈经理,郑总监', '林管理,杨协调', 'https://company.sharepoint.com/sites/social/tiktok-workflow', '内容构思→创意审核→拍摄→初步编辑→内容审核→最终发布',
 'TikTok创作者工具,Adobe Premiere,ATEM摄影棚,专业灯光设备', 120000.00, '{"2024-Q3":3.8,"2024-Q4":4.2,"2025-Q1":4.5}', '需要更多创意人员,需要更多拍摄场景',
 '清洁领域领先KOC,与竞品相比更加真实接地气', '{"行业平均互动率":12.5,"行业平均观看完成率":65}', '真实使用场景展示,高质量视觉效果,专业清洁知识',
 '低风险,平台政策变化可能影响内容策略', '应对负面评论的标准回复模板,潜在危机预案文档', '内容合规检查清单,广告披露标准流程',
 '未来6个月达到100万粉丝,拓展跨平台内容分发', '与家居类KOL合作机会,探索零售商联合营销', '产品植入,电商链接,品牌合作',
 '账号增长迅速,清洁对比内容表现特别突出,需要进一步开发更多创新内容形式', '2025-04-01'
),

('TK-KOC-002', 'TikTok', 'EufyTechTips', 'https://tiktok.com/@eufytechtips', '英文', '产品技术', '教育',
 '2024-07-10', 320000, 850, 180, 1, '智能清洁科技 | 产品技巧 | 功能演示 | 科技解析 #EufyTech',
 '产品功能解析,技术优势展示,使用教程,常见问题解决', '每周2-3次', '周一/周四 12:00-15:00', 'https://company.sharepoint.com/sites/social/content-calendar', '每帖10-15标签，结合科技+智能家居+教育类标签',
 '{"25-44岁":70,"男性":65,"技术爱好者":55}', '{"智能家居":85,"科技":80,"产品评测":75}', '{"美国":40,"英国":15,"德国":12,"加拿大":10}', 5.8, 12.5,
 420000, 13.2, 3.5, 'TK-20250220-05(智能导航演示),TK-20250318-03(应用操作教程)', 'TK-20240830-01(技术参数详解),TK-20241012-03(与竞品技术对比)',
 '[加密存储]', 'koc-tech@company.com', '+1-555-123-8910', 1, '内容管理权限',
 '王技术,李演示,张编辑', '陈技术经理,林总监', '赵管理,钱协调', 'https://company.sharepoint.com/sites/social/tiktok-tech-workflow', '技术点确认→脚本编写→技术审核→拍摄→内容审核→发布',
 'TikTok创作者工具,Final Cut Pro,技术演示设备,屏幕录制工具', 85000.00, '{"2024-Q3":2.8,"2024-Q4":3.2,"2025-Q1":3.5}', '需要更专业的技术讲解人员,需要更多产品演示样机',
 '技术领域专业KOC,相比竞品更深入浅出', '{"行业平均互动率":10.5,"行业平均观看完成率":58}', '技术解释清晰易懂,演示直观,实用性强',
 '中等风险,技术内容需要持续更新,避免过时', '技术错误应对流程,负面技术评论处理指南', '技术准确性检查流程,功能宣传合规审核',
 '未来6个月达到50万粉丝,增加跨平台技术内容分享', '与科技领域KOL合作机会,参与技术论坛和活动', '技术咨询服务,高级功能教程付费内容',
 '账号增长稳定,技术教程类内容表现良好,需要简化部分技术内容使其更易理解', '2025-03-28'
),

-- Instagram KOC
('IG-KOC-001', 'Instagram', 'EufyHome', 'https://instagram.com/eufyhome', '英文', '家居生活', '美学+实用',
 '2024-05-20', 420000, 1850, 280, 1, '智能生活·简约之美 | 整洁家居 | 智能清洁 | 设计灵感 #EufyLiving',
 '家居美学,产品融入生活,整洁空间展示,清洁灵感', '每周2-3次', '周三/周日 09:00-12:00', 'https://company.sharepoint.com/sites/social/content-calendar', '每帖10-15标签，结合家居+设计+清洁+生活方式标签',
 '{"25-45岁":75,"女性":68,"城市居民":65}', '{"家居设计":85,"整洁空间":80,"生活方式":75}', '{"美国":38,"英国":15,"澳大利亚":12,"加拿大":10}', 6.2, 14.8,
 380000, 15.5, 3.8, 'IG-20250312-03(明亮整洁客厅),IG-20250205-09(产品融入家居)', 'IG-20240725-04(产品特写展示),IG-20240915-02(技术功能图解)',
 '[加密存储]', 'koc-instagram@company.com', '+1-555-123-5678', 1, '内容管理权限',
 '张设计,李摄影,王文案', '陈设计总监,林品牌经理', '郑管理,吴协调', 'https://company.sharepoint.com/sites/social/instagram-workflow', '场景设计→设计审核→布景→摄影→初步编辑→内容审核→最终发布',
 'Instagram创作者工具,Adobe Lightroom,专业摄影设备,家居场景道具', 95000.00, '{"2024-Q3":3.5,"2024-Q4":3.8,"2025-Q1":4.0}', '需要更多家居场景布置资源,需要更专业的摄影设备',
 '家居美学领域高质量KOC,相比竞品更注重视觉品质', '{"行业平均互动率":12.5,"行业平均保存率":22}', '高品质视觉呈现,场景真实自然,产品融入度高',
 '低风险,内容风格稳定,平台算法变化影响可控', '负面评论应对指南,内容危机处理流程', '美学内容准确性检查,产品功能宣传合规性',
 '未来6个月达到60万粉丝,提高内容保存率和分享率', '与室内设计师和家居博主合作机会,探索家居品牌联合营销', '家居搭配顾问服务,设计灵感付费内容',
 '账号定位精准,美学类内容表现突出,需要加强产品功能与场景的自然融合', '2025-03-20'
),

('IG-KOC-002', 'Instagram', 'EufyLifeHacks', 'https://instagram.com/eufylifehacks', '英文', '生活窍门', '实用+创意',
 '2024-08-05', 280000, 1200, 220, 1, '聪明生活·轻松清洁 | 家居窍门 | 时间管理 | 清洁技巧 #EufyHacks',
 '清洁窍门,时间管理技巧,产品创新用法,家居整理', '每周3次', '周一/周三/周五 15:00-18:00', 'https://company.sharepoint.com/sites/social/content-calendar', '每帖12-18标签，结合生活窍门+家居+清洁+时间管理标签',
 '{"18-38岁":80,"女性":75,"年轻专业人士":60}', '{"生活窍门":90,"时间管理":85,"家居整理":75}', '{"美国":42,"英国":18,"加拿大":12,"澳大利亚":8}', 7.5, 16.2,
 320000, 17.8, 4.5, 'IG-20250328-07(快速清洁技巧),IG-20250401-02(意想不到的使用方法)', 'IG-20240910-03(详细产品参数),IG-20241105-01(装箱展示)',
 '[加密存储]', 'koc-lifehacks@company.com', '+1-555-123-6789', 1, '内容管理权限',
 '李创意,王实操,张编辑', '陈创意总监,郑内容经理', '林管理,周协调', 'https://company.sharepoint.com/sites/social/instagram-hacks-workflow', '创意构思→脚本编写→创意审核→拍摄→编辑→内容审核→发布',
 'Instagram创作者工具,Adobe Premiere,创意拍摄设备,日常场景道具', 80000.00, '{"2024-Q3":3.8,"2024-Q4":4.2,"2025-Q1":4.5}', '需要更多创意内容人员,需要更多日常场景道具',
 '生活窍门领域实用KOC,相比竞品更具创新性', '{"行业平均互动率":14.5,"行业平均保存率":25}', '创意独特,实用性强,执行简单',
 '低风险,内容实用性保证稳定表现', '创意争议应对流程,负面评论处理指南', '创意内容安全检查,产品使用建议合规性',
 '未来6个月达到40万粉丝,提高内容实施率和分享率', '与生活方式博主合作机会,探索日用品牌联合营销', '生活顾问服务,创意解决方案付费内容',
 '账号特色鲜明,创意窍门类内容转化率高,需要更多与用户痛点相关的内容', '2025-03-25'
),

-- YouTube KOC
('YT-KOC-001', 'YouTube', 'Eufy Tech Reviews', 'https://youtube.com/c/eufytechreviews', '英文', '产品评测', '专业+详细',
 '2024-04-10', 250000, 120, 95, 1, '深度测评·专业解析 | 产品对比 | 性能测试 | 长期使用体验',
 '深度产品评测,竞品对比,长期使用报告,性能测试', '每周1次', '周六 10:00-12:00', 'https://company.sharepoint.com/sites/social/content-calendar', '每视频8-12标签，结合产品型号+技术+评测类标签',
 '{"25-55岁":80,"男性":70,"技术爱好者":65}', '{"产品评测":90,"智能家居":85,"消费电子":80}', '{"美国":45,"英国":15,"德国":12,"加拿大":10}', 4.2, 9.5,
 180000, 10.8, 3.2, 'YT-20250212-02(X8 Pro深度评测),YT-20250105-02(年度横评)', 'YT-20240625-02(快速开箱),YT-20240830-01(应用演示)',
 '[加密存储]', 'koc-youtube@company.com', '+1-555-123-7890', 1, '完全访问权限',
 '王评测,李测试,张编导', '陈技术总监,林内容总监', '郑管理,钱协调', 'https://company.sharepoint.com/sites/social/youtube-workflow', '选题确定→测试方案→技术审核→拍摄制作→初步剪辑→内容审核→最终发布',
 'Adobe Premiere Pro,专业摄影设备,测试设备套件,数据分析工具', 150000.00, '{"2024-Q3":2.8,"2024-Q4":3.0,"2025-Q1":3.2}', '需要更多测试设备,需要更专业的数据分析人员',
 '专业技术评测领域权威KOC,相比竞品更注重客观数据', '{"行业平均完成率":62,"行业平均评论质量":中等}', '测试方法科学,数据支持充分,专业度高',
 '中等风险,需要保持技术前沿性和专业性', '技术错误应对预案,负面评测危机处理流程', '技术数据准确性检查,评测方法透明度审核',
 '未来6个月达到40万订阅,提高视频完成率和评论质量', '与科技媒体合作机会,参与行业活动和展会', '技术咨询服务,高级评测报告付费内容',
 '账号专业度高,长期评测内容特别有影响力,需要简化部分技术内容以扩大受众', '2025-04-01'
),

('YT-KOC-002', 'YouTube', 'Eufy Home Solutions', 'https://youtube.com/c/eufyhomesolutions', '英文', '家居解决方案', '实用+教育',
 '2024-05-15', 180000, 85, 75, 1, '智能家居·清洁解决方案 | 使用教程 | 家居整理 | 清洁指南',
 '产品使用教程,家居清洁指南,问题解决方案,智能家居集成', '每两周1次', '周日 15:00-18:00', 'https://company.sharepoint.com/sites/social/content-calendar', '每视频8-12标签，结合清洁+家居+教程类标签',
 '{"30-55岁":75,"女性":65,"家庭主妇/夫":55}', '{"家居清洁":85,"使用教程":80,"家居管理":75}', '{"美国":50,"英国":12,"加拿大":10,"澳大利亚":8}', 3.8, 11.2,
 150000, 12.5, 3.8, 'YT-20250326-05(全屋清洁指南),YT-20250128-03(宠物家庭清洁)', 'YT-20240720-01(产品规格详解),YT-20241015-02(配件展示)',
 '[加密存储]', 'koc-homesolutions@company.com', '+1-555-123-4321', 1, '内容管理权限',
 '李教程,张演示,王编辑', '陈内容经理,林家居总监', '郑管理,周协调', 'https://company.sharepoint.com/sites/social/youtube-home-workflow', '主题选择→脚本编写→内容审核→场景准备→拍摄→编辑→最终审核→发布',
 'Adobe Premiere Pro,家居场景布置,产品演示设备,教学辅助工具', 120000.00, '{"2024-Q3":3.2,"2024-Q4":3.5,"2025-Q1":3.8}', '需要更多真实家居场景,需要更多产品使用场景设计',
 '家居解决方案领域权威KOC,相比竞品更注重实用性', '{"行业平均观看时长":8分钟,"行业平均应用率":35%}', '解决方案实用,教程清晰易懂,场景真实可信',
 '低风险,内容实用性确保稳定表现', '用户问题应对预案,解决方案效果争议处理流程', '解决方案有效性验证,教程安全性检查',
 '未来6个月达到30万订阅,提高视频应用率和分享率', '与家居专家合作机会,家居卖场联合活动', '家居解决方案咨询,定制清洁方案付费服务',
 '账号定位准确,教程类内容观看完成率高,需要加强用户实际问题的解决方案内容', '2025-03-15'
);
