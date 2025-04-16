import sqlite3
import pandas as pd

# 连接到SQLite数据库
conn = sqlite3.connect('eufy_social_media.db')
cursor = conn.cursor()

# 创建eufy_koc_account表
print("创建eufy_koc_account表...")
cursor.execute('''
CREATE TABLE IF NOT EXISTS eufy_koc_account (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT,
    account_name TEXT,
    account_url TEXT,
    post_count INTEGER,
    total_views INTEGER,
    avg_views_per_post REAL,
    total_likes INTEGER,
    avg_likes_per_post REAL,
    total_comments INTEGER,
    avg_comments_per_post REAL,
    email TEXT
)
''')

# 清空表格，以便重新导入
cursor.execute("DELETE FROM eufy_koc_account")
print("已清空eufy_koc_account表")

# 从Instagram表中提取账号信息
print("\n提取Instagram账号信息...")
cursor.execute('''
INSERT INTO eufy_koc_account (
    platform, account_name, account_url, post_count, 
    total_views, avg_views_per_post, total_likes, 
    avg_likes_per_post, total_comments, avg_comments_per_post
)
SELECT 
    'Instagram' AS platform,
    influencer AS account_name,
    'https://www.instagram.com/' || influencer AS account_url,
    COUNT(*) AS post_count,
    SUM(views) AS total_views,
    AVG(views) AS avg_views_per_post,
    SUM(likes) AS total_likes,
    AVG(likes) AS avg_likes_per_post,
    SUM(comments) AS total_comments,
    AVG(comments) AS avg_comments_per_post
FROM instagram_posts
GROUP BY influencer
''')
instagram_count = cursor.rowcount
print(f"已插入{instagram_count}条Instagram账号记录")

# 从TikTok表中提取账号信息
print("\n提取TikTok账号信息...")
cursor.execute('''
INSERT INTO eufy_koc_account (
    platform, account_name, account_url, post_count, 
    total_views, avg_views_per_post, total_likes, 
    avg_likes_per_post, total_comments, avg_comments_per_post,
    email
)
SELECT 
    'TikTok' AS platform,
    tp.influencer AS account_name,
    'https://www.tiktok.com/' || tp.influencer AS account_url,
    COUNT(*) AS post_count,
    SUM(tp.views) AS total_views,
    AVG(tp.views) AS avg_views_per_post,
    SUM(tp.likes) AS total_likes,
    AVG(tp.likes) AS avg_likes_per_post,
    SUM(tp.comments) AS total_comments,
    AVG(tp.comments) AS avg_comments_per_post,
    ta.email
FROM tiktok_posts tp
LEFT JOIN tiktok_accounts ta ON tp.influencer = '@' || ta.handle
GROUP BY tp.influencer
''')
tiktok_count = cursor.rowcount
print(f"已插入{tiktok_count}条TikTok账号记录")

# 从YouTube表中提取账号信息
print("\n提取YouTube账号信息...")
cursor.execute('''
INSERT INTO eufy_koc_account (
    platform, account_name, account_url, post_count, 
    total_views, avg_views_per_post, total_likes, 
    avg_likes_per_post, total_comments, avg_comments_per_post
)
SELECT 
    'YouTube' AS platform,
    influencer AS account_name,
    'https://www.youtube.com/' || REPLACE(influencer, '@', '') AS account_url,
    COUNT(*) AS post_count,
    SUM(views) AS total_views,
    AVG(views) AS avg_views_per_post,
    SUM(likes) AS total_likes,
    AVG(likes) AS avg_likes_per_post,
    SUM(comments) AS total_comments,
    AVG(comments) AS avg_comments_per_post
FROM youtube_posts
GROUP BY influencer
''')
youtube_count = cursor.rowcount
print(f"已插入{youtube_count}条YouTube账号记录")

# 提交更改并关闭连接
conn.commit()

# 查询并显示新表中的数据
print("\n新表eufy_koc_account中的数据:")
df = pd.read_sql_query("SELECT * FROM eufy_koc_account", conn)
print(df)

conn.close()

print("\neufy_koc_account表创建并填充完成！")
