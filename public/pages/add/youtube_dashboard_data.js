// YouTube Dashboard Data - SelfKOC YouTube Performance Dashboard

// Generate mock data for dashboard
function generateYouTubeData() {
    return {
        accountData: generateAccountData(),
        contentData: generateContentData(),
        contentDistribution: generateContentDistribution(),
        platformComparisonData: generatePlatformComparisonData(),
        interactionQualityData: generateInteractionQualityData(),
        timeData: generateTimeData()
    };
}

// Generate account performance data
function generateAccountData() {
    const accounts = [
        '@KennethWright-j9t', '@MargaretPerez-s5h', '@EdwardHill-q5i', '@ChimelleAudion',
        '@SarahJohnson-v3k', '@MichaelBrown-p7m', '@JenniferDavis-z2n', '@RobertWilson-t6f',
        '@LisaAnderson-r9g', '@JamesTaylor-k4d', '@PatriciaMoore-b8h', '@JohnMartin-x1j',
        '@ElizabethThomas-c5p', '@WilliamJackson-l7s'
    ];
    
    return accounts.map(account => {
        const totalViews = Math.floor(Math.random() * 50000) + 1000;
        const totalLikes = Math.floor(totalViews * (Math.random() * 0.08 + 0.02));
        const totalComments = Math.floor(totalLikes * (Math.random() * 0.1 + 0.01));
        const engagementRate = (totalLikes + totalComments) / totalViews;
        
        return {
            name: account,
            totalViews: totalViews,
            totalLikes: totalLikes,
            totalComments: totalComments,
            engagementRate: engagementRate,
            likeToViewRatio: totalLikes / totalViews,
            commentToViewRatio: totalComments / totalViews,
            commentToLikeRatio: totalComments / totalLikes,
            postCount: Math.floor(Math.random() * 30) + 5
        };
    });
}

// Generate content performance data
function generateContentData() {
    const accounts = [
        '@KennethWright-j9t', '@MargaretPerez-s5h', '@EdwardHill-q5i', '@ChimelleAudion',
        '@SarahJohnson-v3k', '@MichaelBrown-p7m', '@JenniferDavis-z2n', '@RobertWilson-t6f',
        '@LisaAnderson-r9g', '@JamesTaylor-k4d', '@PatriciaMoore-b8h', '@JohnMartin-x1j',
        '@ElizabethThomas-c5p', '@WilliamJackson-l7s'
    ];
    
    const contentData = [];
    
    for (let i = 0; i < 50; i++) {
        const account = accounts[Math.floor(Math.random() * accounts.length)];
        const views = Math.floor(Math.random() * 10000) + 500;
        const likes = Math.floor(views * (Math.random() * 0.08 + 0.02));
        const comments = Math.floor(likes * (Math.random() * 0.1 + 0.01));
        const engagementRate = (likes + comments) / views;
        
        // Generate random date within last 30 days
        const publishedDate = new Date();
        publishedDate.setDate(publishedDate.getDate() - Math.floor(Math.random() * 30));
        
        const videoId = generateRandomVideoId();
        
        contentData.push({
            title: `YouTube Short by ${account}`,
            url: `https://www.youtube.com/shorts/${videoId}`,
            account: account,
            views: views,
            likes: likes,
            comments: comments,
            engagementRate: engagementRate,
            likeToViewRatio: likes / views,
            commentToViewRatio: comments / views,
            commentToLikeRatio: comments / likes,
            publishedDate: formatDate(publishedDate),
            videoId: videoId
        });
    }
    
    return contentData;
}

// Generate content distribution data
function generateContentDistribution() {
    // Generate view count distribution
    const viewBins = [
        { min: 0, max: 1000, count: 0 },
        { min: 1000, max: 2000, count: 0 },
        { min: 2000, max: 3000, count: 0 },
        { min: 3000, max: 4000, count: 0 },
        { min: 4000, max: 5000, count: 0 },
        { min: 5000, max: 10000, count: 0 },
        { min: 10000, max: Infinity, count: 0 }
    ];
    
    // Generate engagement rate distribution
    const engagementBins = [
        { min: 0, max: 0.02, count: 0 },
        { min: 0.02, max: 0.04, count: 0 },
        { min: 0.04, max: 0.06, count: 0 },
        { min: 0.06, max: 0.08, count: 0 },
        { min: 0.08, max: 0.1, count: 0 },
        { min: 0.1, max: 0.15, count: 0 },
        { min: 0.15, max: Infinity, count: 0 }
    ];
    
    // Count content in each bin
    const contentData = generateContentData();
    
    contentData.forEach(content => {
        // Count for view bins
        for (let bin of viewBins) {
            if (content.views >= bin.min && content.views < bin.max) {
                bin.count++;
                break;
            }
        }
        
        // Count for engagement bins
        for (let bin of engagementBins) {
            if (content.engagementRate >= bin.min && content.engagementRate < bin.max) {
                bin.count++;
                break;
            }
        }
    });
    
    return {
        viewBins: viewBins,
        engagementBins: engagementBins
    };
}

// Generate platform comparison data
function generatePlatformComparisonData() {
    return [
        {
            platform: 'YouTube',
            avgViews: 3500,
            avgLikes: 150,
            avgComments: 15,
            avgEngagement: 0.047,
            contentCount: 199
        },
        {
            platform: 'TikTok',
            avgViews: 1500000,
            avgLikes: 120000,
            avgComments: 5000,
            avgEngagement: 0.083,
            contentCount: 290
        },
        {
            platform: 'Instagram',
            avgViews: 800000,
            avgLikes: 70000,
            avgComments: 3000,
            avgEngagement: 0.091,
            contentCount: 320
        }
    ];
}

// Generate interaction quality data
function generateInteractionQualityData() {
    const accounts = [
        '@KennethWright-j9t', '@MargaretPerez-s5h', '@EdwardHill-q5i', '@ChimelleAudion',
        '@SarahJohnson-v3k', '@MichaelBrown-p7m', '@JenniferDavis-z2n', '@RobertWilson-t6f',
        '@LisaAnderson-r9g', '@JamesTaylor-k4d', '@PatriciaMoore-b8h', '@JohnMartin-x1j',
        '@ElizabethThomas-c5p', '@WilliamJackson-l7s'
    ];
    
    return accounts.map(account => {
        const likes = Math.floor(Math.random() * 2000) + 100;
        const comments = Math.floor(Math.random() * 200) + 10;
        const commentToLikeRatio = comments / likes;
        
        return {
            account: account,
            likes: likes,
            comments: comments,
            commentToLikeRatio: commentToLikeRatio
        };
    });
}

// Generate time trend data
function generateTimeData() {
    // Generate daily data for last 30 days
    const dailyDates = [];
    const dailyViews = [];
    const dailyLikes = [];
    const dailyComments = [];
    const dailyEngagementRate = [];
    
    const today = new Date();
    
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        dailyDates.push(formatDate(date));
        
        // Generate random metrics with some trend
        const baseViews = 3500 + Math.sin(i / 5) * 1000;
        const views = Math.floor(baseViews + Math.random() * 500);
        dailyViews.push(views);
        
        const likes = Math.floor(views * (0.04 + Math.random() * 0.02));
        dailyLikes.push(likes);
        
        const comments = Math.floor(views * (0.004 + Math.random() * 0.002));
        dailyComments.push(comments);
        
        const engagementRate = (likes + comments) / views;
        dailyEngagementRate.push(engagementRate);
    }
    
    // Generate weekly data (aggregate daily data)
    const weeklyDates = [];
    const weeklyViews = [];
    const weeklyLikes = [];
    const weeklyComments = [];
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
        
        const weekEngagementRate = (weekLikes + weekComments) / weekViews;
        weeklyEngagementRate.push(weekEngagementRate);
    }
    
    // Generate monthly data
    const monthlyDates = ['January', 'February', 'March', 'April'];
    const monthlyViews = [90000, 105000, 120000, 135000];
    const monthlyLikes = [3600, 4200, 4800, 5400];
    const monthlyComments = [360, 420, 480, 540];
    const monthlyEngagementRate = monthlyDates.map((_, i) => (monthlyLikes[i] + monthlyComments[i]) / monthlyViews[i]);
    
    return {
        dailyDates,
        daily: {
            views: dailyViews,
            likes: dailyLikes,
            comments: dailyComments,
            engagementRate: dailyEngagementRate
        },
        weeklyDates,
        weekly: {
            views: weeklyViews,
            likes: weeklyLikes,
            comments: weeklyComments,
            engagementRate: weeklyEngagementRate
        },
        monthlyDates,
        monthly: {
            views: monthlyViews,
            likes: monthlyLikes,
            comments: monthlyComments,
            engagementRate: monthlyEngagementRate
        }
    };
}

// Generate random YouTube video ID
function generateRandomVideoId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let result = '';
    for (let i = 0; i < 11; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
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
