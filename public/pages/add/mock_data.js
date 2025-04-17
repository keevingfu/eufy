// Mock Data Generator - SelfKOC Instagram Performance Dashboard

// Generate mock data for dashboard
function generateMockData() {
    return {
        accountData: generateAccountData(),
        contentData: generateContentData(),
        contentDistribution: generateContentDistribution(),
        timeData: generateTimeData(),
        platformData: generatePlatformData(),
        productData: generateProductData(),
        competitorData: generateCompetitorData()
    };
}

// Generate account performance data
function generateAccountData() {
    const accounts = [
        'demooebh', 'ejnendkennx', 'washingwnkknec', 'ava_gold66', 
        'isla_dream66', 'phoenix_chase66', 'lucky_nikiiiiii', 'kevins_life_02'
    ];
    
    return accounts.map(account => {
        const totalViews = Math.floor(Math.random() * 50000) + 5000;
        const totalLikes = Math.floor(Math.random() * 5000) + 500;
        const totalComments = Math.floor(Math.random() * 500) + 50;
        const engagementRate = (totalLikes + totalComments) / totalViews;
        
        return {
            name: account,
            totalViews: totalViews,
            totalLikes: totalLikes,
            totalComments: totalComments,
            engagementRate: engagementRate,
            postCount: Math.floor(Math.random() * 50) + 10
        };
    });
}

// Generate content performance data
function generateContentData() {
    const accounts = [
        'demooebh', 'ejnendkennx', 'washingwnkknec', 'ava_gold66', 
        'isla_dream66', 'phoenix_chase66', 'lucky_nikiiiiii', 'kevins_life_02'
    ];
    
    const contentData = [];
    
    for (let i = 0; i < 50; i++) {
        const account = accounts[Math.floor(Math.random() * accounts.length)];
        const views = Math.floor(Math.random() * 10000) + 100;
        const likes = Math.floor(Math.random() * 1000) + 10;
        const comments = Math.floor(Math.random() * 100) + 1;
        const engagementRate = (likes + comments) / views;
        
        // Generate random date within last 30 days
        const publishedDate = new Date();
        publishedDate.setDate(publishedDate.getDate() - Math.floor(Math.random() * 30));
        
        contentData.push({
            title: `Instagram Reel by ${account}`,
            url: `https://www.instagram.com/${account}/reel/ABC${i}XYZ/`,
            account: account,
            views: views,
            likes: likes,
            comments: comments,
            engagementRate: engagementRate,
            publishedDate: formatDate(publishedDate)
        });
    }
    
    return contentData;
}

// Generate content distribution data
function generateContentDistribution() {
    return [
        { value: 40, name: 'Product Demos' },
        { value: 25, name: 'Lifestyle' },
        { value: 15, name: 'How-to Guides' },
        { value: 10, name: 'Customer Reviews' },
        { value: 10, name: 'Brand Stories' }
    ];
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
        const baseViews = 5000 + Math.sin(i / 5) * 2000;
        const views = Math.floor(baseViews + Math.random() * 1000);
        dailyViews.push(views);
        
        const likes = Math.floor(views * (0.05 + Math.random() * 0.05));
        dailyLikes.push(likes);
        
        const comments = Math.floor(views * (0.005 + Math.random() * 0.005));
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
    const monthlyViews = [150000, 180000, 210000, 250000];
    const monthlyLikes = [7500, 9000, 10500, 12500];
    const monthlyComments = [750, 900, 1050, 1250];
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

// Generate platform comparison data
function generatePlatformData() {
    return [
        {
            name: 'Instagram',
            views: 250000,
            likes: 12500,
            comments: 1250,
            engagementRate: 0.055
        },
        {
            name: 'TikTok',
            views: 420000,
            likes: 25200,
            comments: 2100,
            engagementRate: 0.065
        },
        {
            name: 'YouTube',
            views: 180000,
            likes: 7200,
            comments: 900,
            engagementRate: 0.045
        }
    ];
}

// Generate product association data
function generateProductData() {
    const colors = ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1', '#13c2c2', '#fa8c16', '#eb2f96'];
    
    return [
        {
            name: 'Security Camera',
            views: 120000,
            contentCount: 25,
            engagementRate: 0.062,
            color: colors[0]
        },
        {
            name: 'Smart Lock',
            views: 85000,
            contentCount: 18,
            engagementRate: 0.058,
            color: colors[1]
        },
        {
            name: 'Video Doorbell',
            views: 95000,
            contentCount: 20,
            engagementRate: 0.065,
            color: colors[2]
        },
        {
            name: 'Robot Vacuum',
            views: 110000,
            contentCount: 22,
            engagementRate: 0.059,
            color: colors[3]
        },
        {
            name: 'Smart Bulb',
            views: 65000,
            contentCount: 15,
            engagementRate: 0.052,
            color: colors[4]
        },
        {
            name: 'Baby Monitor',
            views: 75000,
            contentCount: 16,
            engagementRate: 0.068,
            color: colors[5]
        }
    ];
}

// Generate competitor analysis data
function generateCompetitorData() {
    return [
        {
            name: 'Eufy SelfKOC',
            viewsPercentage: 85,
            likesPercentage: 80,
            commentsPercentage: 75,
            engagementPercentage: 82,
            frequencyPercentage: 90
        },
        {
            name: 'Competitor A',
            viewsPercentage: 95,
            likesPercentage: 85,
            commentsPercentage: 70,
            engagementPercentage: 75,
            frequencyPercentage: 80
        },
        {
            name: 'Competitor B',
            viewsPercentage: 75,
            likesPercentage: 90,
            commentsPercentage: 85,
            engagementPercentage: 88,
            frequencyPercentage: 70
        },
        {
            name: 'Competitor C',
            viewsPercentage: 65,
            likesPercentage: 60,
            commentsPercentage: 55,
            engagementPercentage: 62,
            frequencyPercentage: 85
        }
    ];
}
