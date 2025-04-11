import sqlite3
import pandas as pd
import os

# 连接到SQLite数据库
conn = sqlite3.connect('eufy_social_media.db')
cursor = conn.cursor()

def clean_numeric(value):
    """清理数值型字段，移除逗号等非数字字符"""
    if pd.isna(value) or value == '':
        return None
    if isinstance(value, str):
        return value.replace(',', '').replace('"', '')
    return value

# 清空表格，以便重新导入
print("清空表格...")
tables = ['instagram_posts', 'tiktok_posts', 'tiktok_accounts', 'youtube_posts', 'youtube_comments']
for table in tables:
    cursor.execute(f"DELETE FROM {table}")
    print(f"已清空 {table} 表")

# 导入Instagram数据
print("\n导入Instagram数据...")
try:
    df_ins = pd.read_csv('data/eufy_ins_20250401.csv')
    # 处理可能的空值
    df_ins = df_ins.replace('', None)
    
    # 处理likes列，移除逗号
    df_ins['Likes'] = df_ins['Likes'].apply(lambda x: clean_numeric(x) if pd.notna(x) else None)
    
    # 导入数据
    for _, row in df_ins.iterrows():
        cursor.execute('''
            INSERT OR REPLACE INTO instagram_posts 
            (post_url, likes, comments, views, post_date, influencer, video_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (
            row['Post Url'],
            row['Likes'],
            row['Comments'] if pd.notna(row['Comments']) else None,
            row['Views'] if pd.notna(row['Views']) else None,
            row['Post Date'] if pd.notna(row['Post Date']) else None,
            row['Influencer'] if pd.notna(row['Influencer']) else None,
            row['Video_id'] if pd.notna(row['Video_id']) else None
        ))
    print(f"Instagram数据导入成功：{len(df_ins)}条记录")
except Exception as e:
    print(f"导入Instagram数据时出错: {e}")

# 导入TikTok帖子数据
print("\n导入TikTok帖子数据...")
try:
    df_tk = pd.read_csv('data/eufy_tk_20250401.csv')
    df_tk = df_tk.replace('', None)
    
    # 处理数值列
    numeric_cols = ['Likes', 'forwarding', 'Views']
    for col in numeric_cols:
        if col in df_tk.columns:
            df_tk[col] = df_tk[col].apply(lambda x: clean_numeric(x) if pd.notna(x) else None)
    
    # 导入数据
    for _, row in df_tk.iterrows():
        cursor.execute('''
            INSERT OR REPLACE INTO tiktok_posts 
            (post_url, likes, comments, views, post_date, influencer, video_id, forwarding)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            row['Post Url'] if pd.notna(row['Post Url']) else None,
            row['Likes'] if pd.notna(row['Likes']) else None,
            row['Comments'] if pd.notna(row['Comments']) else None,
            row['Views'] if pd.notna(row['Views']) else None,
            row['Post Date'] if pd.notna(row['Post Date']) else None,
            row['Influencer'] if pd.notna(row['Influencer']) else None,
            row['Video_id'] if pd.notna(row['Video_id']) else None,
            row['forwarding'] if 'forwarding' in row and pd.notna(row['forwarding']) else None
        ))
    print(f"TikTok帖子数据导入成功：{len(df_tk)}条记录")
except Exception as e:
    print(f"导入TikTok帖子数据时出错: {e}")

# 导入TikTok账号数据
print("\n导入TikTok账号数据...")
try:
    df_tk_handle = pd.read_csv('data/eufy_tk_handle.csv')
    df_tk_handle = df_tk_handle.replace('', None)
    
    # 导入数据
    for _, row in df_tk_handle.iterrows():
        cursor.execute('''
            INSERT OR REPLACE INTO tiktok_accounts 
            (handle, email, channel)
            VALUES (?, ?, ?)
        ''', (
            row['handle'] if pd.notna(row['handle']) else None,
            row['email'] if pd.notna(row['email']) else None,
            row['channel'] if pd.notna(row['channel']) else None
        ))
    print(f"TikTok账号数据导入成功：{len(df_tk_handle)}条记录")
except Exception as e:
    print(f"导入TikTok账号数据时出错: {e}")

# 导入YouTube帖子数据
print("\n导入YouTube帖子数据...")
try:
    df_ytb = pd.read_csv('data/eufy_ytb_20250401.csv')
    df_ytb = df_ytb.replace('', None)
    
    # 导入数据
    for _, row in df_ytb.iterrows():
        cursor.execute('''
            INSERT OR REPLACE INTO youtube_posts 
            (post_url, likes, comments, views, post_date, influencer, video_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (
            row['Post Url'] if pd.notna(row['Post Url']) else None,
            row['Likes'] if pd.notna(row['Likes']) else None,
            row['Comments'] if pd.notna(row['Comments']) else None,
            row['Views'] if pd.notna(row['Views']) else None,
            row['Post Date'] if pd.notna(row['Post Date']) else None,
            row['Influencer'] if pd.notna(row['Influencer']) else None,
            row['Video_id'] if pd.notna(row['Video_id']) else None
        ))
    print(f"YouTube帖子数据导入成功：{len(df_ytb)}条记录")
except Exception as e:
    print(f"导入YouTube帖子数据时出错: {e}")

# 导入YouTube评论数据
print("\n导入YouTube评论数据...")
try:
    df_ytb_comments = pd.read_csv('data/youtube视频voc.csv')
    df_ytb_comments = df_ytb_comments.replace('', None)
    
    # 导入数据
    for _, row in df_ytb_comments.iterrows():
        cursor.execute('''
            INSERT OR REPLACE INTO youtube_comments 
            (author, author_is_channel_owner, cid, comment, comments_count, has_creator_heart, 
             page_url, published_time_text, reply_count, reply_to_cid, title, type, video_id, vote_count)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            row['author'] if pd.notna(row['author']) else None,
            row['authorIsChannelOwner'] if pd.notna(row['authorIsChannelOwner']) else None,
            row['cid'] if pd.notna(row['cid']) else None,
            row['comment'] if pd.notna(row['comment']) else None,
            clean_numeric(row['commentsCount']) if pd.notna(row['commentsCount']) else None,
            row['hasCreatorHeart'] if pd.notna(row['hasCreatorHeart']) else None,
            row['pageUrl'] if pd.notna(row['pageUrl']) else None,
            row['publishedTimeText'] if pd.notna(row['publishedTimeText']) else None,
            clean_numeric(row['replyCount']) if pd.notna(row['replyCount']) else None,
            row['replyToCid'] if pd.notna(row['replyToCid']) else None,
            row['title'] if pd.notna(row['title']) else None,
            row['type'] if pd.notna(row['type']) else None,
            row['videoId'] if pd.notna(row['videoId']) else None,
            clean_numeric(row['voteCount']) if pd.notna(row['voteCount']) else None
        ))
    print(f"YouTube评论数据导入成功：{len(df_ytb_comments)}条记录")
except Exception as e:
    print(f"导入YouTube评论数据时出错: {e}")

# 提交更改并关闭连接
conn.commit()
conn.close()

print("\n数据导入完成！所有5张表的数据已成功导入到数据库中。")
