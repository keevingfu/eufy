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

# 导入挂车视频评论数据
print("导入挂车视频评论数据...")
try:
    df_trailer = pd.read_csv('data/挂车视频voc.csv')
    df_trailer = df_trailer.replace('', None)
    
    # 将每行数据转换为JSON格式并存储
    for _, row in df_trailer.iterrows():
        # 将行数据转换为字典，然后转换为JSON字符串
        row_json = row.to_json(force_ascii=False)
        cursor.execute('''
            INSERT INTO trailer_video_comments (comment_data)
            VALUES (?)
        ''', (row_json,))
    
    print(f"挂车视频评论数据导入成功：{len(df_trailer)}条记录")
except Exception as e:
    print(f"导入挂车视频评论数据时出错: {e}")

# 导入锚点视频评论数据
print("导入锚点视频评论数据...")
try:
    df_anchor = pd.read_csv('data/锚点视频voc.csv')
    df_anchor = df_anchor.replace('', None)
    
    # 将每行数据转换为JSON格式并存储
    for _, row in df_anchor.iterrows():
        # 将行数据转换为字典，然后转换为JSON字符串
        row_json = row.to_json(force_ascii=False)
        cursor.execute('''
            INSERT INTO anchor_video_comments (comment_data)
            VALUES (?)
        ''', (row_json,))
    
    print(f"锚点视频评论数据导入成功：{len(df_anchor)}条记录")
except Exception as e:
    print(f"导入锚点视频评论数据时出错: {e}")

# 提交更改并关闭连接
conn.commit()
conn.close()

print("视频评论数据导入完成！")
