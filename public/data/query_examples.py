import sqlite3
import pandas as pd

# 连接到SQLite数据库
conn = sqlite3.connect('eufy_social_media.db')

# 用于打印查询结果的函数
def run_query(query, title):
    print("\n" + "="*80)
    print(f"{title}")
    print("="*80)
    try:
        result = pd.read_sql_query(query, conn)
        if len(result) > 0:
            print(result)
        else:
            print("没有查询到结果。")
    except Exception as e:
        print(f"查询出错: {e}")

# 查询1：获取各平台发布数据总览
query1 = """
SELECT 
    'Instagram' AS platform, 
    COUNT(*) AS post_count, 
    SUM(views) AS total_views,
    AVG(views) AS avg_views_per_post,
    MAX(views) AS max_views
FROM instagram_posts
UNION ALL
SELECT 
    'TikTok' AS platform, 
    COUNT(*) AS post_count, 
    SUM(views) AS total_views,
    AVG(views) AS avg_views_per_post,
    MAX(views) AS max_views
FROM tiktok_posts
UNION ALL
SELECT 
    'YouTube' AS platform, 
    COUNT(*) AS post_count, 
    SUM(views) AS total_views,
    AVG(views) AS avg_views_per_post,
    MAX(views) AS max_views
FROM youtube_posts;
"""
run_query(query1, "1. 各平台发布数据总览")

# 查询2：Instagram上表现最好的10个帖子
query2 = """
SELECT 
    post_url, 
    influencer, 
    views, 
    likes, 
    comments, 
    post_date
FROM instagram_posts
ORDER BY views DESC
LIMIT 10;
"""
run_query(query2, "2. Instagram上表现最好的10个帖子")

# 查询3：TikTok上表现最好的10个帖子
query3 = """
SELECT 
    post_url, 
    influencer, 
    views, 
    likes, 
    comments, 
    post_date
FROM tiktok_posts
ORDER BY views DESC
LIMIT 10;
"""
run_query(query3, "3. TikTok上表现最好的10个帖子")

# 查询4：YouTube上表现最好的10个帖子
query4 = """
SELECT 
    post_url, 
    influencer, 
    views, 
    likes, 
    comments, 
    post_date
FROM youtube_posts
ORDER BY views DESC
LIMIT 10;
"""
run_query(query4, "4. YouTube上表现最好的10个帖子")

# 查询5：各平台顶级影响者分析
query5 = """
WITH instagram_top AS (
    SELECT 
        'Instagram' AS platform,
        influencer,
        COUNT(*) AS post_count,
        SUM(views) AS total_views,
        AVG(views) AS avg_views
    FROM instagram_posts
    GROUP BY influencer
    ORDER BY total_views DESC
    LIMIT 5
),
tiktok_top AS (
    SELECT 
        'TikTok' AS platform,
        influencer,
        COUNT(*) AS post_count,
        SUM(views) AS total_views,
        AVG(views) AS avg_views
    FROM tiktok_posts
    GROUP BY influencer
    ORDER BY total_views DESC
    LIMIT 5
),
youtube_top AS (
    SELECT 
        'YouTube' AS platform,
        influencer,
        COUNT(*) AS post_count,
        SUM(views) AS total_views,
        AVG(views) AS avg_views
    FROM youtube_posts
    GROUP BY influencer
    ORDER BY total_views DESC
    LIMIT 5
)
SELECT * FROM instagram_top
UNION ALL
SELECT * FROM tiktok_top
UNION ALL
SELECT * FROM youtube_top;
"""
run_query(query5, "5. 各平台顶级影响者分析")

# 查询6：发布时间分析 - 按月份分组
query6 = """
WITH combined_data AS (
    SELECT post_date, views, 'Instagram' AS platform FROM instagram_posts
    UNION ALL
    SELECT post_date, views, 'TikTok' AS platform FROM tiktok_posts
    UNION ALL
    SELECT post_date, views, 'YouTube' AS platform FROM youtube_posts
)
SELECT 
    platform,
    SUBSTR(post_date, -8) AS month_year,
    COUNT(*) AS post_count,
    SUM(views) AS total_views,
    AVG(views) AS avg_views
FROM combined_data
GROUP BY platform, month_year
ORDER BY platform, month_year;
"""
run_query(query6, "6. 发布时间分析 - 按月份分组")

# 查询7：YouTube评论情感分析示例 - 评论者类型分析
query7 = """
SELECT 
    author_is_channel_owner,
    COUNT(*) AS comment_count,
    AVG(vote_count) AS avg_votes,
    SUM(reply_count) AS total_replies
FROM youtube_comments
GROUP BY author_is_channel_owner;
"""
run_query(query7, "7. YouTube评论者类型分析")

# 查询8：YouTube评论的热门视频
query8 = """
SELECT 
    title,
    COUNT(*) AS comment_count,
    SUM(vote_count) AS total_votes
FROM youtube_comments
GROUP BY title
ORDER BY comment_count DESC
LIMIT 10;
"""
run_query(query8, "8. YouTube评论的热门视频")

# 查询9：TikTok账号信息分析
query9 = """
SELECT
    handle,
    email,
    channel
FROM tiktok_accounts
ORDER BY handle;
"""
run_query(query9, "9. TikTok账号信息")

# 查询10：跨平台互动率对比
query10 = """
WITH instagram_engagement AS (
    SELECT 
        'Instagram' AS platform,
        AVG(CAST(likes AS REAL) / views) AS avg_like_rate,
        AVG(CAST(comments AS REAL) / views) AS avg_comment_rate
    FROM instagram_posts
    WHERE views > 0
),
tiktok_engagement AS (
    SELECT 
        'TikTok' AS platform,
        AVG(CAST(likes AS REAL) / views) AS avg_like_rate,
        AVG(CAST(comments AS REAL) / views) AS avg_comment_rate
    FROM tiktok_posts
    WHERE views > 0
),
youtube_engagement AS (
    SELECT 
        'YouTube' AS platform,
        AVG(CAST(likes AS REAL) / views) AS avg_like_rate,
        AVG(CAST(comments AS REAL) / views) AS avg_comment_rate
    FROM youtube_posts
    WHERE views > 0
)
SELECT * FROM instagram_engagement
UNION ALL
SELECT * FROM tiktok_engagement
UNION ALL
SELECT * FROM youtube_engagement;
"""
run_query(query10, "10. 跨平台互动率对比")

# 关闭连接
conn.close()

print("\n数据库查询示例完成。您可以根据需要修改这些SQL查询来进行更深入的分析。")
