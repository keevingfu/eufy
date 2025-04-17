// TikTok Dashboard Data - SelfKOC TikTok Performance Dashboard

// Generate mock data for dashboard
function generateTikTokData() {
    return {
        accountData: generateAccountData(),
        contentData: generateContentData(),
        interactionData: generateInteractionData(),
        platformComparisonData: generatePlatformComparisonData(),
        sharePropagationData: generateSharePropagationData(),
        timeData: generateTimeData()
    };
}

// Generate account performance data
function generateAccountData() {
    const accounts = [
        '@smithluiio', '@annabwlxgie', '@jasonken66', '@sophia_style88',
        '@techguru42', '@fitness_with_mike', '@travel_with_emma', '@cooking_master',
        '@daily_fashion', '@gaming_pro'
    ];
    
    return accounts.map(account => {
        const totalViews = Math.floor(Math.random() * 10000000) + 1000000;
        const totalLikes = Math.floor(totalViews * (Math.random() * 0.1 + 0.05));
        const totalComments = Math.floor(totalLikes * (Math.random() * 0.1 + 0.01));
        const totalShares = Math.floor(totalViews * (Math.random() * 0.05 + 0.01));
        const engagementRate = (totalLikes + totalComments + totalShares) / totalViews;
        const shareRate = totalShares / totalViews;
        
        return {
            name: account,
            totalViews: totalViews,
            totalLikes: totalLikes,
            totalComments: totalComments,
            totalShares: totalShares,
            engagementRate: engagementRate,
            shareRate: shareRate,
            postCount: Math.floor(Math.random() * 50) + 20
        };
    });
}

// Generate content performance data
function generateContentData() {
    const accounts = [
        '@smithluiio', '@annabwlxgie', '@jasonken66', '@sophia_style88',
        '@techguru42', '@fitness_with_mike', '@travel_with_emma', '@cooking_master',
        '@daily_fashion', '@gaming_pro'
    ];
    
    const contentData = [];
    
    for (let i = 0; i < 50; i++) {
        const account = accounts[Math.floor(Math.random() * accounts.length)];
        const views = Math.floor(Math.random() * 5000000) + 100000;
        const likes = Math.floor(views * (Math.random() * 0.1 + 0.05));
        const comments = Math.floor(likes * (Math.random() * 0.1 + 0.01));
        const shares = Math.floor(views * (Math.random() * 0.05 + 0.01));
        const engagementRate = (likes + comments + shares) / views;
        
        // Generate random date within last 30 days
        const publishedDate = new Date();
        publishedDate.setDate(publishedDate.getDate() - Math.floor(Math.random() * 30));
        
        contentData.push({
            title: `TikTok Video by ${account}`,
            url: `https://www.tiktok.com/${account}/video/7${Math.floor(Math.random() * 100000000000)}`,
            account: account,
            views: views,
            likes: likes,
            comments: comments,
            shares: shares,
            engagementRate: engagementRate,
            publishedDate: formatDate(publishedDate)
        });
    }
    
    return contentData;
}

// Generate interaction distribution data
function generateInteractionData() {
    const accounts = [
        '@smithluiio', '@annabwlxgie', '@jasonken66', '@sophia_style88',
        '@techguru42', '@fitness_with_mike', '@travel_with_emma', '@cooking_master',
        '@daily_fashion', '@gaming_pro'
    ];
    
    return accounts.map(account => {
        const likes = Math.floor(Math.random() * 80) + 20;
        const comments = Math.floor(Math.random() * 15) + 5;
        const shares = Math.floor(Math.random() * 30) + 10;
        
        return {
            account: account,
            likes: likes,
            comments: comments,
            shares: shares,
            total: likes + comments + shares
        };
    });
}

// Generate platform comparison data
function generatePlatformComparisonData() {
    return [
        {
            platform: 'TikTok',
            avgViews: 1500000,
            avgLikes: 120000,
            avgComments: 5000,
            avgShares: 25000,
            avgEngagement: 0.1,
            contentCount: 290
        },
        {
            platform: 'Instagram',
            avgViews: 800000,
            avgLikes: 70000,
            avgComments: 3000,
            avgShares: 8000,
            avgEngagement: 0.08,
            contentCount: 320
        }
    ];
}

// Generate share propagation data
function generateSharePropagationData() {
    const data = [];
    
    for (let i = 0; i < 50; i++) {
        const views = Math.floor(Math.random() * 5000000) + 100000;
        const shares = Math.floor(views * (Math.random() * 0.08 + 0.01));
        const viralScore = Math.random() * 10;
        
        data.push({
            contentId: i + 1,
            views: views,
            shares: shares,
            shareRate: shares / views,
            viralScore: viralScore
        });
    }
    
    return data;
}

// Generate time trend data
function generateTimeData() {
    // Generate daily data for last 30 days
    const dailyDates = [];
    const dailyViews = [];
    const dailyLikes = [];
    const dailyComments = [];
    const dailyShares = [];
    const dailyEngagementRate = [];
    
    const today = new Date();
    
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        dailyDates.push(formatDate(date));
        
        // Generate random metrics with some trend
        const baseViews = 1500000 + Math.sin(i / 5) * 500000;
        const views = Math.floor(baseViews + Math.random() * 200000);
        dailyViews.push(views);
        
        const likes = Math.floor(views * (0.08 + Math.random() * 0.04));
        dailyLikes.push(likes);
        
        const comments = Math.floor(views * (0.003 + Math.random() * 0.002));
        dailyComments.push(comments);
        
        const shares = Math.floor(views * (0.02 + Math.random() * 0.01));
        dailyShares.push(shares);
        
        const engagementRate = (likes + comments + shares) / views;
        dailyEngagementRate.push(engagementRate);
    }
    
    // Generate weekly data (aggregate daily data)
    const weeklyDates = [];
    const weeklyViews = [];
    const weeklyLikes = [];
    const weeklyComments = [];
    const weeklyShares = [];
    const weeklyEngagementRate = [];
    
    for (let i = 0; i < 4; i++) {
        const weekStartIndex = i * 7;
        const weekEndIndex = weekStartIndex + 6;
        
        weeklyDates.push(`${dailyDates[weekStartIndex]} to ${dailyDates[Math.min(weekEndIndex, dailyDates.length - 1)]}`);
        
        const weekViews = dailyViews.slice(weekStartIndex, weekEndIndex + 1).reduce((a, b) => a + b, 0);
        weeklyViews.push(weekViews);
        
        const weekLikes = dailyLikes.slice(weekStartIndex, weekEndIndex + 1).reduce((a, b) => a + b, 0);
        weeklyLikes.push(weekLikes);
        
        const weekComments = dailyComments.slice(weekStartIndex, weekEndIndex + 1).reduce((a, b) => a + b, 0);
        weeklyComments.push(weekComments);
        
        const weekShares = dailyShares.slice(weekStartIndex, weekEndIndex + 1).reduce((a, b) => a + b, 0);
        weeklyShares.push(weekShares);
        
        const weekEngagementRate = (weekLikes + weekComments + weekShares) / weekViews;
        weeklyEngagementRate.push(weekEngagementRate);
    }
    
    // Generate monthly data
    const monthlyDates = ['January', 'February', 'March', 'April'];
    const monthlyViews = [35000000, 42000000, 48000000, 55000000];
    const monthlyLikes = [2800000, 3360000, 3840000, 4400000];
    const monthlyComments = [140000, 168000, 192000, 220000];
    const monthlyShares = [700000, 840000, 960000, 1100000];
    const monthlyEngagementRate = monthlyDates.map((_, i) => (monthlyLikes[i] + monthlyComments[i] + monthlyShares[i]) / monthlyViews[i]);
    
    return {
        dailyDates,
        daily: {
            views: dailyViews,
            likes: dailyLikes,
            comments: dailyComments,
            shares: dailyShares,
            engagementRate: dailyEngagementRate
        },
        weeklyDates,
        weekly: {
            views: weeklyViews,
            likes: weeklyLikes,
            comments: weeklyComments,
            shares: weeklyShares,
            engagementRate: weeklyEngagementRate
        },
        monthlyDates,
        monthly: {
            views: monthlyViews,
            likes: monthlyLikes,
            comments: monthlyComments,
            shares: monthlyShares,
            engagementRate: monthlyEngagementRate
        }
    };
}

// Format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
