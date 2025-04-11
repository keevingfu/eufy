# Eufy社交媒体数据库报告

## 数据库概览

数据库中共有 8 个表:

1. **instagram_posts** - 106条记录
2. **tiktok_posts** - 200条记录
3. **tiktok_accounts** - 10条记录
4. **youtube_posts** - 84条记录
5. **youtube_comments** - 109条记录
6. **trailer_video_comments** - 1527条记录
7. **anchor_video_comments** - 1743条记录
8. **eufy_koc_account** - 22条记录


## 表: instagram_posts

### 表结构

| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |
|------|------|------------|--------|----------|
| post_url | TEXT | 是 | NULL | 是 |
| likes | TEXT | 是 | NULL | 否 |
| comments | INTEGER | 是 | NULL | 否 |
| views | INTEGER | 是 | NULL | 否 |
| post_date | TEXT | 是 | NULL | 否 |
| influencer | TEXT | 是 | NULL | 否 |
| video_id | TEXT | 是 | NULL | 否 |

### 记录数: 106

### 数据示例 (前5行)

无法显示数据: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.

### 表统计信息

无法显示统计信息: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.



## 表: tiktok_posts

### 表结构

| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |
|------|------|------------|--------|----------|
| post_url | TEXT | 是 | NULL | 是 |
| likes | INTEGER | 是 | NULL | 否 |
| comments | TEXT | 是 | NULL | 否 |
| forwarding | INTEGER | 是 | NULL | 否 |
| views | INTEGER | 是 | NULL | 否 |
| post_date | TEXT | 是 | NULL | 否 |
| influencer | TEXT | 是 | NULL | 否 |
| video_id | TEXT | 是 | NULL | 否 |

### 记录数: 200

### 数据示例 (前5行)

无法显示数据: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.

### 表统计信息

无法显示统计信息: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.



## 表: tiktok_accounts

### 表结构

| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |
|------|------|------------|--------|----------|
| account_url | TEXT | 是 | NULL | 是 |
| channel | TEXT | 是 | NULL | 否 |
| email | TEXT | 是 | NULL | 否 |
| handle | TEXT | 是 | NULL | 否 |
| password | TEXT | 是 | NULL | 否 |
| uid | TEXT | 是 | NULL | 否 |

### 记录数: 10

### 数据示例 (前5行)

无法显示数据: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.



## 表: youtube_posts

### 表结构

| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |
|------|------|------------|--------|----------|
| post_url | TEXT | 是 | NULL | 是 |
| likes | INTEGER | 是 | NULL | 否 |
| comments | INTEGER | 是 | NULL | 否 |
| views | INTEGER | 是 | NULL | 否 |
| post_date | TEXT | 是 | NULL | 否 |
| influencer | TEXT | 是 | NULL | 否 |
| video_id | TEXT | 是 | NULL | 否 |

### 记录数: 84

### 数据示例 (前5行)

无法显示数据: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.

### 表统计信息

无法显示统计信息: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.



## 表: youtube_comments

### 表结构

| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |
|------|------|------------|--------|----------|
| id | INTEGER | 是 | NULL | 是 |
| author | TEXT | 是 | NULL | 否 |
| author_is_channel_owner | TEXT | 是 | NULL | 否 |
| cid | TEXT | 是 | NULL | 否 |
| comment | TEXT | 是 | NULL | 否 |
| comments_count | INTEGER | 是 | NULL | 否 |
| has_creator_heart | TEXT | 是 | NULL | 否 |
| page_url | TEXT | 是 | NULL | 否 |
| published_time_text | TEXT | 是 | NULL | 否 |
| reply_count | INTEGER | 是 | NULL | 否 |
| reply_to_cid | TEXT | 是 | NULL | 否 |
| title | TEXT | 是 | NULL | 否 |
| type | TEXT | 是 | NULL | 否 |
| video_id | TEXT | 是 | NULL | 否 |
| vote_count | INTEGER | 是 | NULL | 否 |

### 记录数: 109

### 数据示例 (前5行)

无法显示数据: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.



## 表: trailer_video_comments

### 表结构

| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |
|------|------|------------|--------|----------|
| id | INTEGER | 是 | NULL | 是 |
| comment_data | TEXT | 是 | NULL | 否 |

### 记录数: 1527

### 数据示例 (前5行)

无法显示数据: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.



## 表: anchor_video_comments

### 表结构

| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |
|------|------|------------|--------|----------|
| id | INTEGER | 是 | NULL | 是 |
| comment_data | TEXT | 是 | NULL | 否 |

### 记录数: 1743

### 数据示例 (前5行)

无法显示数据: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.



## 表: eufy_koc_account

### 表结构

| 列名 | 类型 | 是否可为空 | 默认值 | 是否主键 |
|------|------|------------|--------|----------|
| id | INTEGER | 是 | NULL | 是 |
| platform | TEXT | 是 | NULL | 否 |
| account_name | TEXT | 是 | NULL | 否 |
| account_url | TEXT | 是 | NULL | 否 |
| post_count | INTEGER | 是 | NULL | 否 |
| total_views | INTEGER | 是 | NULL | 否 |
| avg_views_per_post | REAL | 是 | NULL | 否 |
| total_likes | INTEGER | 是 | NULL | 否 |
| avg_likes_per_post | REAL | 是 | NULL | 否 |
| total_comments | INTEGER | 是 | NULL | 否 |
| avg_comments_per_post | REAL | 是 | NULL | 否 |
| email | TEXT | 是 | NULL | 否 |

### 记录数: 22

### 数据示例 (前5行)

无法显示数据: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.

### 平台账号统计

无法显示平台统计信息: Missing optional dependency 'tabulate'.  Use pip or conda to install tabulate.

