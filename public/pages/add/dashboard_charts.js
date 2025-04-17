// Dashboard Charts - SelfKOC Instagram Performance Dashboard

// Render Account Performance Chart
function renderAccountPerformanceChart(accountData) {
    const chartDom = document.getElementById('accountPerformanceChart');
    const myChart = echarts.init(chartDom);
    
    const accounts = accountData.map(account => account.name);
    const views = accountData.map(account => account.totalViews);
    const engagementRates = accountData.map(account => (account.engagementRate * 100).toFixed(2));
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const accountIndex = params[0].dataIndex;
                const account = accountData[accountIndex];
                return `<strong>${account.name}</strong><br/>
                        Views: ${formatNumber(account.totalViews)}<br/>
                        Likes: ${formatNumber(account.totalLikes)}<br/>
                        Comments: ${formatNumber(account.totalComments)}<br/>
                        Engagement Rate: ${(account.engagementRate * 100).toFixed(2)}%`;
            }
        },
        legend: {
            data: ['Views', 'Engagement Rate (%)']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: accounts,
                axisLabel: {
                    interval: 0,
                    rotate: 45
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Views',
                position: 'left',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: 'Engagement Rate (%)',
                position: 'right',
                axisLabel: {
                    formatter: '{value}%'
                },
                max: function(value) {
                    return Math.ceil(value.max * 1.2);
                }
            }
        ],
        series: [
            {
                name: 'Views',
                type: 'bar',
                data: views,
                itemStyle: {
                    color: '#1890ff'
                }
            },
            {
                name: 'Engagement Rate (%)',
                type: 'line',
                yAxisIndex: 1,
                data: engagementRates,
                itemStyle: {
                    color: '#52c41a'
                },
                lineStyle: {
                    width: 3
                },
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Render Top Content Chart
function renderTopContentChart(contentData) {
    const chartDom = document.getElementById('topContentChart');
    const myChart = echarts.init(chartDom);
    
    // Get top 10 content by views
    const topContent = [...contentData].sort((a, b) => b.views - a.views).slice(0, 10);
    
    const contentTitles = topContent.map(content => {
        // Truncate long titles
        return content.title.length > 20 ? content.title.substring(0, 20) + '...' : content.title;
    });
    
    const viewsData = topContent.map(content => content.views);
    const engagementData = topContent.map(content => (content.engagementRate * 100).toFixed(2));
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const contentIndex = params[0].dataIndex;
                const content = topContent[contentIndex];
                return `<strong>${content.title}</strong><br/>
                        Account: ${content.account}<br/>
                        Views: ${formatNumber(content.views)}<br/>
                        Likes: ${formatNumber(content.likes)}<br/>
                        Comments: ${formatNumber(content.comments)}<br/>
                        Engagement Rate: ${(content.engagementRate * 100).toFixed(2)}%<br/>
                        Published: ${content.publishedDate}`;
            }
        },
        legend: {
            data: ['Views', 'Engagement Rate (%)']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: contentTitles,
                axisLabel: {
                    interval: 0,
                    rotate: 45
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Views',
                position: 'left',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: 'Engagement Rate (%)',
                position: 'right',
                axisLabel: {
                    formatter: '{value}%'
                },
                max: function(value) {
                    return Math.ceil(value.max * 1.2);
                }
            }
        ],
        series: [
            {
                name: 'Views',
                type: 'bar',
                data: viewsData,
                itemStyle: {
                    color: '#1890ff'
                }
            },
            {
                name: 'Engagement Rate (%)',
                type: 'line',
                yAxisIndex: 1,
                data: engagementData,
                itemStyle: {
                    color: '#faad14'
                },
                lineStyle: {
                    width: 3
                },
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Render Content Distribution Chart
function renderContentDistributionChart(distributionData) {
    const chartDom = document.getElementById('contentDistributionChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: distributionData.map(item => item.name)
        },
        series: [
            {
                name: 'Views Distribution',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: distributionData
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Render Time Trend Chart
function renderTimeTrendChart(timeData, viewType) {
    const chartDom = document.getElementById('timeTrendChart');
    const myChart = echarts.init(chartDom);
    
    // Process data based on view type
    let processedData;
    let xAxisData;
    
    if (viewType === 'daily') {
        processedData = timeData.daily;
        xAxisData = timeData.dailyDates;
    } else if (viewType === 'weekly') {
        processedData = timeData.weekly;
        xAxisData = timeData.weeklyDates;
    } else {
        processedData = timeData.monthly;
        xAxisData = timeData.monthlyDates;
    }
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Views', 'Likes', 'Comments', 'Engagement Rate (%)']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xAxisData,
                axisLabel: {
                    interval: Math.floor(xAxisData.length / 10),
                    rotate: 45
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Count',
                position: 'left'
            },
            {
                type: 'value',
                name: 'Engagement Rate (%)',
                position: 'right',
                axisLabel: {
                    formatter: '{value}%'
                },
                max: function(value) {
                    return Math.ceil(value.max * 1.2);
                }
            }
        ],
        series: [
            {
                name: 'Views',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: processedData.views,
                itemStyle: {
                    color: '#1890ff'
                }
            },
            {
                name: 'Likes',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: processedData.likes,
                itemStyle: {
                    color: '#52c41a'
                }
            },
            {
                name: 'Comments',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: processedData.comments,
                itemStyle: {
                    color: '#faad14'
                }
            },
            {
                name: 'Engagement Rate (%)',
                type: 'line',
                yAxisIndex: 1,
                data: processedData.engagementRate.map(rate => (rate * 100).toFixed(2)),
                itemStyle: {
                    color: '#f5222d'
                },
                lineStyle: {
                    width: 3,
                    type: 'dashed'
                },
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Render Platform Comparison Chart
function renderPlatformComparisonChart(platformData) {
    const chartDom = document.getElementById('platformComparisonChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Views', 'Engagement Rate (%)']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: platformData.map(platform => platform.name)
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Views',
                position: 'left'
            },
            {
                type: 'value',
                name: 'Engagement Rate (%)',
                position: 'right',
                axisLabel: {
                    formatter: '{value}%'
                },
                max: function(value) {
                    return Math.ceil(value.max * 1.2);
                }
            }
        ],
        series: [
            {
                name: 'Views',
                type: 'bar',
                data: platformData.map(platform => platform.views),
                itemStyle: {
                    color: '#1890ff'
                }
            },
            {
                name: 'Engagement Rate (%)',
                type: 'line',
                yAxisIndex: 1,
                data: platformData.map(platform => (platform.engagementRate * 100).toFixed(2)),
                itemStyle: {
                    color: '#52c41a'
                },
                lineStyle: {
                    width: 3
                },
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Render Product Association Chart
function renderProductAssociationChart(productData) {
    const chartDom = document.getElementById('productAssociationChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const product = productData.find(p => p.name === params.name);
                return `<strong>${product.name}</strong><br/>
                        Content Count: ${product.contentCount}<br/>
                        Total Views: ${formatNumber(product.views)}<br/>
                        Avg. Engagement: ${(product.engagementRate * 100).toFixed(2)}%`;
            }
        },
        series: [
            {
                name: 'Product Association',
                type: 'treemap',
                data: productData.map(product => ({
                    name: product.name,
                    value: product.views,
                    itemStyle: {
                        color: product.color
                    }
                })),
                label: {
                    show: true,
                    formatter: '{b}'
                },
                breadcrumb: {
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Render Competitor Analysis Chart
function renderCompetitorAnalysisChart(competitorData) {
    const chartDom = document.getElementById('competitorAnalysisChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: competitorData.map(competitor => competitor.name)
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Views', 'Likes', 'Comments', 'Engagement Rate', 'Post Frequency']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Percentage',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value}%'
                }
            }
        ],
        series: competitorData.map(competitor => ({
            name: competitor.name,
            type: 'radar',
            symbol: 'circle',
            symbolSize: 8,
            areaStyle: {
                opacity: 0.3
            },
            data: [
                {
                    value: [
                        competitor.viewsPercentage,
                        competitor.likesPercentage,
                        competitor.commentsPercentage,
                        competitor.engagementPercentage,
                        competitor.frequencyPercentage
                    ],
                    name: competitor.name
                }
            ]
        }))
    };
    
    // Convert to radar chart
    option.radar = {
        indicator: [
            { name: 'Views', max: 100 },
            { name: 'Likes', max: 100 },
            { name: 'Comments', max: 100 },
            { name: 'Engagement Rate', max: 100 },
            { name: 'Post Frequency', max: 100 }
        ]
    };
    
    delete option.xAxis;
    delete option.yAxis;
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}
