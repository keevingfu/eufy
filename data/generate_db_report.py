import sqlite3
import pandas as pd
import os

# 连接到SQLite数据库
conn = sqlite3.connect('eufy_social_media.db')
cursor = conn.cursor()

# 创建报告文件
with open('database_report.md', 'w', encoding='utf-8') as report_file:
    # 获取所有表名
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    table_names = [table[0] for table in tables]
    
    # 排除sqlite内部表
    table_names = [t for t in table_names if not t.startswith('sqlite_')]
    
    report_file.write("# Eufy社交媒体数据库报告\n\n")
    report_file.write(f"## 数据库概览\n\n")
    report_file.write(f"数据库中共有 {len(table_names)} 个表:\n\n")
    
    for i, table_name in enumerate(table_names):
        cursor.execute(f"SELECT COUNT(*) FROM {table_name};")
        count = cursor.fetchone()[0]
        report_file.write(f"{i+1}. **{table_name}** - {count}条记录\n")
    
    # 为每个表显示表结构和数据摘要
    for table_name in table_names:
        report_file.write(f"\n\n## 表: {table_name}\n\n")
        
        # 获取表结构
        cursor.execute(f"PRAGMA table_info({table_name});")
        columns_info = cursor.fetchall()
        
        report_file.write("### 表结构\n\n")
        report_file.write("| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |\n")
        report_file.write("|------|------|------------|--------|----------|\n")
        
        for col in columns_info:
            col_name = col[1]
            col_type = col[2]
            not_null = "否" if col[3] == 1 else "是"
            default_val = str(col[4]) if col[4] is not None else "NULL"
            is_pk = "是" if col[5] == 1 else "否"
            report_file.write(f"| {col_name} | {col_type} | {not_null} | {default_val} | {is_pk} |\n")
        
        # 获取表中的记录数
        cursor.execute(f"SELECT COUNT(*) FROM {table_name};")
        count = cursor.fetchone()[0]
        report_file.write(f"\n### 记录数: {count}\n\n")
        
        # 显示表中的数据（限制显示前5行）
        if count > 0:
            report_file.write("### 数据示例 (前5行)\n\n")
            try:
                df = pd.read_sql_query(f"SELECT * FROM {table_name} LIMIT 5", conn)
                report_file.write(df.to_markdown() + "\n\n")
                
                # 如果是JSON格式存储的表，显示解析后的JSON
                if table_name in ['trailer_video_comments', 'anchor_video_comments']:
                    report_file.write("### JSON数据示例 (第一行)\n\n")
                    cursor.execute(f"SELECT comment_data FROM {table_name} LIMIT 1;")
                    json_data = cursor.fetchone()[0]
                    if json_data:
                        try:
                            json_df = pd.read_json(json_data, typ='series')
                            report_file.write("```json\n")
                            report_file.write(json_data + "\n")
                            report_file.write("```\n\n")
                        except:
                            report_file.write("无法解析JSON数据\n\n")
            except Exception as e:
                report_file.write(f"无法显示数据: {e}\n\n")
        
        # 显示表的统计信息（如果适用）
        if table_name in ['instagram_posts', 'tiktok_posts', 'youtube_posts']:
            report_file.write("### 表统计信息\n\n")
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
                report_file.write(stats_df.to_markdown() + "\n\n")
            except Exception as e:
                report_file.write(f"无法显示统计信息: {e}\n\n")
        
        # 显示平台特定的统计信息
        if table_name == 'eufy_koc_account':
            report_file.write("### 平台账号统计\n\n")
            try:
                platform_stats = pd.read_sql_query("""
                    SELECT 
                        platform,
                        COUNT(*) as account_count,
                        SUM(post_count) as total_posts,
                        AVG(post_count) as avg_posts_per_account,
                        SUM(total_views) as total_views,
                        AVG(avg_views_per_post) as avg_views_per_post,
                        AVG(avg_likes_per_post) as avg_likes_per_post,
                        AVG(avg_comments_per_post) as avg_comments_per_post
                    FROM eufy_koc_account
                    GROUP BY platform
                """, conn)
                report_file.write(platform_stats.to_markdown() + "\n\n")
            except Exception as e:
                report_file.write(f"无法显示平台统计信息: {e}\n\n")

# 关闭连接
conn.close()

print("数据库报告已生成到 database_report.md 文件中")
