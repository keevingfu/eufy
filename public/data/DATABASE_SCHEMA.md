# Eufy Social Media Database Schema

This document provides a detailed description of the database schema for the Eufy social media analytics project.

## Overview

The database is designed to store and analyze social media data from three major platforms:
- Instagram
- TikTok
- YouTube

The schema includes tables for posts, accounts, and comments across these platforms, enabling comprehensive cross-platform analysis.

## Tables Structure

### 1. instagram_posts

Stores data about Instagram posts related to Eufy products.

| Column Name | Data Type | Description | Constraints |
|-------------|-----------|-------------|-------------|
| post_url    | TEXT      | URL of the Instagram post | PRIMARY KEY |
| likes       | TEXT      | Number of likes on the post | |
| comments    | INTEGER   | Number of comments on the post | |
| views       | INTEGER   | Number of views on the post | |
| post_date   | TEXT      | Date when the post was published | |
| influencer  | TEXT      | Username of the Instagram influencer | |
| video_id    | TEXT      | Unique identifier for the post | |

### 2. tiktok_posts

Stores data about TikTok posts related to Eufy products.

| Column Name | Data Type | Description | Constraints |
|-------------|-----------|-------------|-------------|
| post_url    | TEXT      | URL of the TikTok post | PRIMARY KEY |
| likes       | INTEGER   | Number of likes on the post | |
| comments    | TEXT      | Number of comments on the post | |
| forwarding  | INTEGER   | Number of shares/forwards of the post | |
| views       | INTEGER   | Number of views on the post | |
| post_date   | TEXT      | Date when the post was published | |
| influencer  | TEXT      | Username of the TikTok influencer | |
| video_id    | TEXT      | Unique identifier for the post | |

### 3. tiktok_accounts

Stores information about TikTok accounts used for Eufy marketing.

| Column Name | Data Type | Description | Constraints |
|-------------|-----------|-------------|-------------|
| handle      | TEXT      | TikTok username/handle | PRIMARY KEY |
| email       | TEXT      | Email address associated with the account | |
| channel     | TEXT      | Channel category of the account | |

### 4. youtube_posts

Stores data about YouTube videos related to Eufy products.

| Column Name | Data Type | Description | Constraints |
|-------------|-----------|-------------|-------------|
| post_url    | TEXT      | URL of the YouTube video | PRIMARY KEY |
| likes       | INTEGER   | Number of likes on the video | |
| comments    | INTEGER   | Number of comments on the video | |
| views       | INTEGER   | Number of views on the video | |
| post_date   | TEXT      | Date when the video was published | |
| influencer  | TEXT      | Username of the YouTube influencer | |
| video_id    | TEXT      | Unique identifier for the video | |

### 5. youtube_comments

Stores comments on YouTube videos related to Eufy products.

| Column Name | Data Type | Description | Constraints |
|-------------|-----------|-------------|-------------|
| author      | TEXT      | Username of the comment author | |
| author_is_channel_owner | TEXT | Whether the author is the channel owner | |
| cid         | TEXT      | Unique identifier for the comment | PRIMARY KEY |
| comment     | TEXT      | Content of the comment | |
| comments_count | INTEGER | Number of comments on the video | |
| has_creator_heart | TEXT | Whether the comment has a creator heart | |
| page_url    | TEXT      | URL of the video page | |
| published_time_text | TEXT | When the comment was published | |
| reply_count | INTEGER   | Number of replies to the comment | |
| reply_to_cid | TEXT     | ID of the parent comment (if a reply) | |
| title       | TEXT      | Title of the video | |
| type        | TEXT      | Type of comment (comment/reply) | |
| video_id    | TEXT      | ID of the video | |
| vote_count  | INTEGER   | Number of votes/likes on the comment | |

### 6. trailer_video_comments

Stores comments on trailer videos as JSON data.

| Column Name | Data Type | Description | Constraints |
|-------------|-----------|-------------|-------------|
| id          | INTEGER   | Unique identifier for the record | PRIMARY KEY, AUTOINCREMENT |
| comment_data | TEXT     | JSON data containing comment information | |

### 7. anchor_video_comments

Stores comments on anchor videos as JSON data.

| Column Name | Data Type | Description | Constraints |
|-------------|-----------|-------------|-------------|
| id          | INTEGER   | Unique identifier for the record | PRIMARY KEY, AUTOINCREMENT |
| comment_data | TEXT     | JSON data containing comment information | |

### 8. eufy_koc_account

Aggregated table containing information about Key Opinion Consumer (KOC) accounts across all platforms.

| Column Name | Data Type | Description | Constraints |
|-------------|-----------|-------------|-------------|
| id          | INTEGER   | Unique identifier for the record | PRIMARY KEY, AUTOINCREMENT |
| platform    | TEXT      | Social media platform (Instagram/TikTok/YouTube) | |
| account_name | TEXT     | Username/handle of the account | |
| account_url | TEXT      | URL to the account profile | |
| post_count  | INTEGER   | Number of posts by this account | |
| total_views | INTEGER   | Total views across all posts | |
| avg_views_per_post | REAL | Average views per post | |
| total_likes | INTEGER   | Total likes across all posts | |
| avg_likes_per_post | REAL | Average likes per post | |
| total_comments | INTEGER | Total comments across all posts | |
| avg_comments_per_post | REAL | Average comments per post | |
| email       | TEXT      | Email associated with the account (if available) | |

## Relationships

- **tiktok_posts** and **tiktok_accounts**: Related through the influencer/handle fields
- **youtube_posts** and **youtube_comments**: Related through the video_id field
- **eufy_koc_account**: Aggregates data from instagram_posts, tiktok_posts, and youtube_posts

## JSON Data Structure

For the `trailer_video_comments` and `anchor_video_comments` tables, the comment_data field stores JSON with the following structure:

```json
{
  "author": "Username of commenter",
  "authorIsChannelOwner": true/false,
  "cid": "Comment ID",
  "comment": "Comment text content",
  "commentsCount": Number of comments,
  "hasCreatorHeart": true/false,
  "pageUrl": "URL of the video page",
  "publishedTimeText": "Time when published",
  "replyCount": Number of replies,
  "replyToCid": "Parent comment ID if this is a reply",
  "title": "Video title",
  "type": "comment/reply",
  "videoId": "Video ID",
  "voteCount": Number of votes/likes
}
```

## Query Examples

### Cross-platform engagement analysis:
```sql
SELECT 
    'Instagram' AS platform, 
    AVG(CAST(likes AS REAL) / views) AS avg_like_rate,
    AVG(CAST(comments AS REAL) / views) AS avg_comment_rate
FROM instagram_posts
WHERE views > 0
UNION ALL
SELECT 
    'TikTok' AS platform,
    AVG(CAST(likes AS REAL) / views) AS avg_like_rate,
    AVG(CAST(comments AS REAL) / views) AS avg_comment_rate
FROM tiktok_posts
WHERE views > 0
UNION ALL
SELECT 
    'YouTube' AS platform,
    AVG(CAST(likes AS REAL) / views) AS avg_like_rate,
    AVG(CAST(comments AS REAL) / views) AS avg_comment_rate
FROM youtube_posts
WHERE views > 0;
```

### Top influencers by platform:
```sql
SELECT 
    platform,
    account_name,
    total_views,
    avg_views_per_post,
    avg_comments_per_post
FROM eufy_koc_account
ORDER BY total_views DESC
LIMIT 10;
```

## Maintenance

The database is designed to be easily maintained and updated with new data. New records can be added to the appropriate tables as more social media data is collected.

For large datasets, consider implementing indexes on frequently queried columns to improve performance.

## Data Import Process

Data is imported from CSV files using the following process:
1. CSV files are placed in the `data/` directory
2. The `import_data.py` script processes these files and inserts data into the appropriate tables
3. For JSON data (trailer and anchor video comments), the data is parsed and stored in the comment_data field

## Future Schema Enhancements

Potential future enhancements to the schema include:
- Adding timestamp fields for better temporal analysis
- Creating additional aggregation tables for specific analysis needs
- Implementing proper foreign key constraints between related tables
- Adding indexes for performance optimization
