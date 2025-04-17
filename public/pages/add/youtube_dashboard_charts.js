// YouTube Dashboard Charts - SelfKOC YouTube Performance Dashboard

// Initialize all charts
function initializeCharts(data) {
    renderAccountPerformanceChart(data.accountData);
    renderContentDistributionChart(data.contentDistribution);
    renderPlatformComparisonChart(data.platformComparisonData);
    renderTimeTrendChart(data.timeData, 'daily');
    renderInteractionQualityChart(data.interactionQualityData);
}

// Render account performance chart
function renderAccountPerformanceChart(accountData, sortBy = 'views') {
    const chartDom = document.getElementById('accountPerformanceChart');
    const chart = echarts.init(chartDom);
    
    // Sort data based on sortBy parameter
    let sortedData = [...accountData];
    if (sortBy === 'views') {
        sortedData.sort((a, b) => b.totalViews - a.totalViews);
    } else if (sortBy === 'engagement') {
        sortedData.sort((a, b) => b.engagementRate - a.engagementRate);
    }
    
    // Take top 10 accounts
    const topAccounts = sortedData.slice(0, 10);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const account = params[0].name;
                const views = params[0].value;
                const engagementRate = params[1].value * 100;
                
                return `<strong>${account}</strong><br/>
                        Views: ${formatNumber(views)}<br/>
                        Engagement Rate: ${engagementRate.toFixed(2)}%`;
            }
        },
        legend: {
            data: ['Total Views', 'Engagement Rate (%)']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                name: 'Views',
                position: 'bottom',
                axisLabel: {
                    formatter: function(value) {
                        if (value >= 1000) {
                            return (value / 1000) + 'K';
                        }
                        return value;
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'category',
                data: topAccounts.map(account => account.name),
                axisLabel: {
                    formatter: function(value) {
                        // Truncate long account names
                        if (value.length > 15) {
                            return value.substring(0, 12) + '...';
                        }
                        return value;
                    }
                }
            }
        ],
        series: [
            {
                name: 'Total Views',
                type: 'bar',
                data: topAccounts.map(account => account.totalViews),
                itemStyle: {
                    color: '#ff0000'
                }
            },
            {
                name: 'Engagement Rate (%)',
                type: 'scatter',
                yAxisIndex: 0,
                xAxisIndex: 0,
                data: topAccounts.map(account => account.engagementRate * 100),
                symbolSize: function(val) {
                    return val * 2; // Scale the size based on engagement rate
                },
                itemStyle: {
                    color: '#ffcc00'
                }
            }
        ]
    };
    
    chart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });
    
    return chart;
}

// Render content distribution chart
function renderContentDistributionChart(distributionData) {
    const chartDom = document.getElementById('contentDistributionChart');
    const chart = echarts.init(chartDom);
    
    const viewBins = distributionData.viewBins;
    const engagementBins = distributionData.engagementBins;
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const seriesName = params.seriesName;
                const name = params.name;
                const value = params.value;
                
                if (seriesName === 'View Count Distribution') {
                    const range = name.split('-');
                    if (range.length === 2) {
                        return `View Count: ${range[0]} - ${range[1]}<br/>
                                Content Count: ${value}`;
                    } else {
                        return `View Count: ${range[0]}+<br/>
                                Content Count: ${value}`;
                    }
                } else {
                    const range = name.split('-');
                    if (range.length === 2) {
                        return `Engagement Rate: ${range[0]}% - ${range[1]}%<br/>
                                Content Count: ${value}`;
                    } else {
                        return `Engagement Rate: ${range[0]}%+<br/>
                                Content Count: ${value}`;
                    }
                }
            }
        },
        legend: {
            top: 'bottom',
            data: ['View Count Distribution', 'Engagement Rate Distribution']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'View Count Distribution',
                type: 'pie',
                radius: [20, 80],
                center: ['25%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    formatter: '{b}: {c}'
                },
                data: [
                    { value: viewBins[0].count, name: '0-1K' },
                    { value: viewBins[1].count, name: '1K-2K' },
                    { value: viewBins[2].count, name: '2K-3K' },
                    { value: viewBins[3].count, name: '3K-4K' },
                    { value: viewBins[4].count, name: '4K-5K' },
                    { value: viewBins[5].count, name: '5K-10K' },
                    { value: viewBins[6].count, name: '10K+' }
                ]
            },
            {
                name: 'Engagement Rate Distribution',
                type: 'pie',
                radius: [20, 80],
                center: ['75%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    formatter: '{b}: {c}'
                },
                data: [
                    { value: engagementBins[0].count, name: '0-2%' },
                    { value: engagementBins[1].count, name: '2%-4%' },
                    { value: engagementBins[2].count, name: '4%-6%' },
                    { value: engagementBins[3].count, name: '6%-8%' },
                    { value: engagementBins[4].count, name: '8%-10%' },
                    { value: engagementBins[5].count, name: '10%-15%' },
                    { value: engagementBins[6].count, name: '15%+' }
                ]
            }
        ]
    };
    
    chart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });
    
    return chart;
}

// Render platform comparison chart
function renderPlatformComparisonChart(platformData) {
    const chartDom = document.getElementById('platformComparisonChart');
    const chart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const platform = params[0].name;
                let result = `<strong>${platform}</strong><br/>`;
                
                params.forEach(param => {
                    let value = param.value;
                    if (param.seriesName === 'Avg. Engagement Rate') {
                        value = (value * 100).toFixed(2) + '%';
                    } else if (param.seriesName === 'Avg. Views') {
                        value = formatNumber(value);
                    } else {
                        value = formatNumber(value);
                    }
                    
                    result += `${param.seriesName}: ${value}<br/>`;
                });
                
                return result;
            }
        },
        legend: {
            data: ['Avg. Views (scaled)', 'Avg. Likes (scaled)', 'Avg. Comments (scaled)', 'Avg. Engagement Rate']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: platformData.map(item => item.platform)
        },
        yAxis: [
            {
                type: 'value',
                name: 'Scaled Values',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: 'Engagement Rate',
                min: 0,
                max: 0.15,
                interval: 0.03,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: 'Avg. Views (scaled)',
                type: 'bar',
                data: platformData.map(item => {
                    // Scale down the views for better visualization
                    return item.platform === 'YouTube' ? item.avgViews : item.avgViews / 1000;
                }),
                itemStyle: {
                    color: '#ff0000'
                }
            },
            {
                name: 'Avg. Likes (scaled)',
                type: 'bar',
                data: platformData.map(item => {
                    // Scale down the likes for better visualization
                    return item.platform === 'YouTube' ? item.avgLikes : item.avgLikes / 1000;
                }),
                itemStyle: {
                    color: '#00aaff'
                }
            },
            {
                name: 'Avg. Comments (scaled)',
                type: 'bar',
                data: platformData.map(item => {
                    // Scale down the comments for better visualization
                    return item.platform === 'YouTube' ? item.avgComments : item.avgComments / 1000;
                }),
                itemStyle: {
                    color: '#00cc00'
                }
            },
            {
                name: 'Avg. Engagement Rate',
                type: 'line',
                yAxisIndex: 1,
                data: platformData.map(item => item.avgEngagement),
                itemStyle: {
                    color: '#ffcc00'
                },
                lineStyle: {
                    width: 3
                },
                symbol: 'circle',
                symbolSize: 10
            }
        ]
    };
    
    chart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });
    
    return chart;
}

// Render time trend chart
function renderTimeTrendChart(timeData, timeFrame = 'daily') {
    const chartDom = document.getElementById('timeTrendChart');
    const chart = echarts.init(chartDom);
    
    // Select data based on timeFrame
    let dates, views, likes, comments, engagementRate;
    
    if (timeFrame === 'daily') {
        dates = timeData.dailyDates;
        views = timeData.daily.views;
        likes = timeData.daily.likes;
        comments = timeData.daily.comments;
        engagementRate = timeData.daily.engagementRate;
    } else if (timeFrame === 'weekly') {
        dates = timeData.weeklyDates;
        views = timeData.weekly.views;
        likes = timeData.weekly.likes;
        comments = timeData.weekly.comments;
        engagementRate = timeData.weekly.engagementRate;
    } else {
        dates = timeData.monthlyDates;
        views = timeData.monthly.views;
        likes = timeData.monthly.likes;
        comments = timeData.monthly.comments;
        engagementRate = timeData.monthly.engagementRate;
    }
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            formatter: function(params) {
                const date = params[0].name;
                let result = `<strong>${date}</strong><br/>`;
                
                params.forEach(param => {
                    let value = param.value;
                    if (param.seriesName === 'Engagement Rate') {
                        value = (value * 100).toFixed(2) + '%';
                    } else {
                        value = formatNumber(value);
                    }
                    
                    result += `${param.seriesName}: ${value}<br/>`;
                });
                
                return result;
            }
        },
        legend: {
            data: ['Views', 'Likes', 'Comments', 'Engagement Rate']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dates
        },
        yAxis: [
            {
                type: 'value',
                name: 'Count',
                axisLabel: {
                    formatter: function(value) {
                        if (value >= 1000) {
                            return (value / 1000) + 'K';
                        }
                        return value;
                    }
                }
            },
            {
                type: 'value',
                name: 'Engagement Rate',
                min: 0,
                max: 0.15,
                interval: 0.03,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: 'Views',
                type: 'line',
                data: views,
                smooth: true,
                itemStyle: {
                    color: '#ff0000'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(255, 0, 0, 0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 0, 0, 0.1)'
                        }
                    ])
                }
            },
            {
                name: 'Likes',
                type: 'line',
                data: likes,
                smooth: true,
                itemStyle: {
                    color: '#00aaff'
                }
            },
            {
                name: 'Comments',
                type: 'line',
                data: comments,
                smooth: true,
                itemStyle: {
                    color: '#00cc00'
                }
            },
            {
                name: 'Engagement Rate',
                type: 'line',
                yAxisIndex: 1,
                data: engagementRate,
                smooth: true,
                itemStyle: {
                    color: '#ffcc00'
                },
                lineStyle: {
                    width: 3
                },
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };
    
    chart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });
    
    return chart;
}

// Render interaction quality chart
function renderInteractionQualityChart(interactionData) {
    const chartDom = document.getElementById('interactionQualityChart');
    const chart = echarts.init(chartDom);
    
    // Sort data by comment to like ratio
    const sortedData = [...interactionData].sort((a, b) => b.commentToLikeRatio - a.commentToLikeRatio);
    
    // Take top 10 accounts
    const topAccounts = sortedData.slice(0, 10);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const account = params[0].name;
                const likes = params[0].value;
                const comments = params[1].value;
                const ratio = comments / likes;
                
                return `<strong>${account}</strong><br/>
                        Likes: ${formatNumber(likes)}<br/>
                        Comments: ${formatNumber(comments)}<br/>
                        Comment/Like Ratio: ${ratio.toFixed(4)}`;
            }
        },
        legend: {
            data: ['Likes', 'Comments']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: topAccounts.map(item => item.account),
            axisLabel: {
                formatter: function(value) {
                    // Truncate long account names
                    if (value.length > 15) {
                        return value.substring(0, 12) + '...';
                    }
                    return value;
                }
            }
        },
        series: [
            {
                name: 'Likes',
                type: 'bar',
                stack: 'total',
                data: topAccounts.map(item => item.likes),
                itemStyle: {
                    color: '#00aaff'
                }
            },
            {
                name: 'Comments',
                type: 'bar',
                stack: 'total',
                data: topAccounts.map(item => item.comments),
                itemStyle: {
                    color: '#00cc00'
                }
            }
        ]
    };
    
    chart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });
    
    return chart;
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
