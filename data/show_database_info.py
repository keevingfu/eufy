import sqlite3
import pandas as pd
import os

# 连接到SQLite数据库
conn = sqlite3.connect('eufy_social_media.db')
cursor = conn.cursor()

# 获取所有表名
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
table_names = [table[0] for table in tables]

print("=" * 80)
print(f"数据库中共有 {len(table_names)} 个表:")
for i, table_name in enumerate(table_names):
    print(f"{i+1}. {table_name}")
print("=" * 80)

# 为每个表显示表结构和数据
for table_name in table_names:
    print("\n" + "=" * 80)
    print(f"表名: {table_name}")
    print("=" * 80)
    
    # 获取表结构
    cursor.execute(f"PRAGMA table_info({table_name});")
    columns_info = cursor.fetchall()
    
    print("\n表结构:")
    print("-" * 60)
    print(f"{'列名':<20} {'类型':<10} {'是否可为空':<12} {'默认值':<15} {'是否主键'}")
    print("-" * 60)
    for col in columns_info:
        col_name = col[1]
        col_type = col[2]
        not_null = "否" if col[3] == 1 else "是"
        default_val = str(col[4]) if col[4] is not None else "NULL"
        is_pk = "是" if col[5] == 1 else "否"
        print(f"{col_name:<20} {col_type:<10} {not_null:<12} {default_val:<15} {is_pk}")
    
    # 获取表中的记录数
    cursor.execute(f"SELECT COUNT(*) FROM {table_name};")
    count = cursor.fetchone()[0]
    print(f"\n记录数: {count}")
    
    # 显示表中的数据（限制显示前10行）
    if count > 0:
        print("\n表数据示例 (前10行):")
        try:
            df = pd.read_sql_query(f"SELECT * FROM {table_name} LIMIT 10", conn)
            print(df)
            
            # 如果是JSON格式存储的表（挂车视频和锚点视频评论），显示解析后的JSON
            if table_name in ['trailer_video_comments', 'anchor_video_comments']:
                print("\nJSON数据示例 (第一行解析):")
                cursor.execute(f"SELECT comment_data FROM {table_name} LIMIT 1;")
                json_data = cursor.fetchone()[0]
                if json_data:
                    try:
                        json_df = pd.read_json(json_data, typ='series')
                        print(json_df)
                    except:
                        print("无法解析JSON数据")
        except Exception as e:
            print(f"无法显示数据: {e}")
    
    # 显示表的统计信息（如果适用）
    if table_name in ['instagram_posts', 'tiktok_posts', 'youtube_posts']:
        print("\n表统计信息:")
        try:
            stats_df = pd.read_sql_query(f"""
                SELECT 
                    COUNT(*) as total_posts,
                    SUM(views) as total_views,
                    AVG(views) as avg_views,
                    MAX(views) as max_views,
                    SUM(likes) as total_likes,
                    AVG(likes) as avg_likes,
                    MAX(likes) as max_likes,
                    SUM(comments) as total_comments,
                    AVG(comments) as avg_comments,
                    MAX(comments) as max_comments
                FROM {table_name}
            """, conn)
            print(stats_df)
        except Exception as e:
            print(f"无法显示统计信息: {e}")

# 关闭连接
conn.close()

print("\n" + "=" * 80)
print("数据库信息展示完成")
print("=" * 80)
