-- 创建Instagram帖子表
CREATE TABLE IF NOT EXISTS instagram_posts (
    post_url TEXT PRIMARY KEY,
    likes TEXT,
    comments INTEGER,
    views INTEGER,
    post_date TEXT,
    influencer TEXT,
    video_id TEXT
);

-- 创建TikTok帖子表
CREATE TABLE IF NOT EXISTS tiktok_posts (
    post_url TEXT PRIMARY KEY,
    likes INTEGER,
    comments TEXT,
    forwarding INTEGER,
    views INTEGER,
    post_date TEXT,
    influencer TEXT,
    video_id TEXT
);

-- 创建TikTok账号信息表
CREATE TABLE IF NOT EXISTS tiktok_accounts (
    account_url TEXT PRIMARY KEY,
    channel TEXT,
    email TEXT,
    handle TEXT,
    password TEXT,
    uid TEXT
);

-- 创建YouTube帖子表
CREATE TABLE IF NOT EXISTS youtube_posts (
    post_url TEXT PRIMARY KEY,
    likes INTEGER,
    comments INTEGER,
    views INTEGER,
    post_date TEXT,
    influencer TEXT,
    video_id TEXT
);

-- 创建YouTube评论表
CREATE TABLE IF NOT EXISTS youtube_comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT,
    author_is_channel_owner TEXT,
    cid TEXT,
    comment TEXT,
    comments_count INTEGER,
    has_creator_heart TEXT,
    page_url TEXT,
    published_time_text TEXT,
    reply_count INTEGER,
    reply_to_cid TEXT,
    title TEXT,
    type TEXT,
    video_id TEXT,
    vote_count INTEGER
);

-- 创建挂车视频评论表
CREATE TABLE IF NOT EXISTS trailer_video_comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    comment_data TEXT
);

-- 创建锚点视频评论表
CREATE TABLE IF NOT EXISTS anchor_video_comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    comment_data TEXT
);
