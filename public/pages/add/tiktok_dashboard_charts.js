// TikTok Dashboard Charts - SelfKOC TikTok Performance Dashboard

// Render Account Performance Chart
function renderAccountPerformanceChart(accountData) {
    const chartDom = document.getElementById('accountPerformanceChart');
    const myChart = echarts.init(chartDom);
    
    const accounts = accountData.map(account => account.name);
    const views = accountData.map(account => account.totalViews);
    const engagementRates = accountData.map(account => (account.engagementRate * 100).toFixed(2));
    const shareRates = accountData.map(account => (account.shareRate * 100).toFixed(2));
    
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
                        Shares: ${formatNumber(account.totalShares)}<br/>
                        Engagement Rate: ${(account.engagementRate * 100).toFixed(2)}%<br/>
                        Share Rate: ${(account.shareRate * 100).toFixed(2)}%`;
            }
        },
        legend: {
            data: ['Views', 'Engagement Rate (%)', 'Share Rate (%)']
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
                    formatter: function(value) {
                        if (value >= 1000000) {
                            return (value / 1000000).toFixed(1) + 'M';
                        } else if (value >= 1000) {
                            return (value / 1000).toFixed(1) + 'K';
                        }
                        return value;
                    }
                }
            },
            {
                type: 'value',
                name: 'Rate (%)',
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
                    color: '#fe2c55'
                }
            },
            {
                name: 'Engagement Rate (%)',
                type: 'line',
                yAxisIndex: 1,
                data: engagementRates,
                itemStyle: {
                    color: '#25f4ee'
                },
                lineStyle: {
                    width: 3
                },
                symbol: 'circle',
                symbolSize: 8
            },
            {
                name: 'Share Rate (%)',
                type: 'line',
                yAxisIndex: 1,
                data: shareRates,
                itemStyle: {
                    color: '#a1a1a1'
                },
                lineStyle: {
                    width: 3,
                    type: 'dashed'
                },
                symbol: 'diamond',
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

// Render Interaction Distribution Chart
function renderInteractionDistributionChart(interactionData) {
    const chartDom = document.getElementById('interactionDistributionChart');
    const myChart = echarts.init(chartDom);
    
    // Process data for chart
    const accounts = interactionData.map(item => item.account);
    const likesPercentage = interactionData.map(item => (item.likes / item.total * 100).toFixed(1));
    const commentsPercentage = interactionData.map(item => (item.comments / item.total * 100).toFixed(1));
    const sharesPercentage = interactionData.map(item => (item.shares / item.total * 100).toFixed(1));
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                let tooltip = `<strong>${params[0].name}</strong><br/>`;
                params.forEach(param => {
                    tooltip += `${param.seriesName}: ${param.value}%<br/>`;
                });
                return tooltip;
            }
        },
        legend: {
            data: ['Likes', 'Comments', 'Shares']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}%'
            }
        },
        yAxis: {
            type: 'category',
            data: accounts,
            axisLabel: {
                interval: 0
            }
        },
        series: [
            {
                name: 'Likes',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                data: likesPercentage,
                itemStyle: {
                    color: '#fe2c55'
                }
            },
            {
                name: 'Comments',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                data: commentsPercentage,
                itemStyle: {
                    color: '#25f4ee'
                }
            },
            {
                name: 'Shares',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                data: sharesPercentage,
                itemStyle: {
                    color: '#a1a1a1'
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

// Render Platform Comparison Chart
function renderPlatformComparisonChart(platformData) {
    const chartDom = document.getElementById('platformComparisonChart');
    const myChart = echarts.init(chartDom);
    
    const platforms = platformData.map(platform => platform.platform);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Avg. Views', 'Avg. Engagement Rate (%)']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: platforms
        },
        yAxis: [
            {
                type: 'value',
                name: 'Avg. Views',
                position: 'left',
                axisLabel: {
                    formatter: function(value) {
                        if (value >= 1000000) {
                            return (value / 1000000).toFixed(1) + 'M';
                        } else if (value >= 1000) {
                            return (value / 1000).toFixed(1) + 'K';
                        }
                        return value;
                    }
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
                name: 'Avg. Views',
                type: 'bar',
                data: platformData.map(platform => platform.avgViews),
                itemStyle: {
                    color: function(params) {
                        const colorMap = {
                            'TikTok': '#fe2c55',
                            'Instagram': '#C13584'
                        };
                        return colorMap[platforms[params.dataIndex]] || '#5B6C8D';
                    }
                }
            },
            {
                name: 'Avg. Engagement Rate (%)',
                type: 'line',
                yAxisIndex: 1,
                data: platformData.map(platform => (platform.avgEngagement * 100).toFixed(2)),
                itemStyle: {
                    color: function(params) {
                        const colorMap = {
                            'TikTok': '#25f4ee',
                            'Instagram': '#4C5FD7'
                        };
                        return colorMap[platforms[params.dataIndex]] || '#5B6C8D';
                    }
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

// Render Share Propagation Chart
function renderSharePropagationChart(shareData) {
    const chartDom = document.getElementById('sharePropagationChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `Content ID: ${params.data[2]}<br/>
                        Views: ${formatNumber(params.data[0])}<br/>
                        Shares: ${formatNumber(params.data[1])}<br/>
                        Share Rate: ${(params.data[1] / params.data[0] * 100).toFixed(2)}%<br/>
                        Viral Score: ${params.data[3].toFixed(1)}`;
            }
        },
        xAxis: {
            type: 'log',
            name: 'Views',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
                formatter: function(value) {
                    if (value >= 1000000) {
                        return (value / 1000000).toFixed(1) + 'M';
                    } else if (value >= 1000) {
                        return (value / 1000).toFixed(1) + 'K';
                    }
                    return value;
                }
            }
        },
        yAxis: {
            type: 'log',
            name: 'Shares',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
                formatter: function(value) {
                    if (value >= 1000000) {
                        return (value / 1000000).toFixed(1) + 'M';
                    } else if (value >= 1000) {
                        return (value / 1000).toFixed(1) + 'K';
                    }
                    return value;
                }
            }
        },
        series: [
            {
                name: 'Share Propagation',
                type: 'scatter',
                symbolSize: function(data) {
                    return Math.sqrt(data[3]) * 5;
                },
                itemStyle: {
                    color: function(params) {
                        // Color based on viral score
                        const viralScore = params.data[3];
                        if (viralScore > 7) {
                            return '#fe2c55';
                        } else if (viralScore > 4) {
                            return '#25f4ee';
                        } else {
                            return '#a1a1a1';
                        }
                    }
                },
                data: shareData.map(item => [
                    item.views,
                    item.shares,
                    item.contentId,
                    item.viralScore
                ])
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Render Content Performance Chart
function renderContentPerformanceChart(contentData) {
    const chartDom = document.getElementById('contentPerformanceChart');
    const myChart = echarts.init(chartDom);
    
    // Get top 10 content by engagement rate
    const topContent = [...contentData]
        .sort((a, b) => b.engagementRate - a.engagementRate)
        .slice(0, 10);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const contentIndex = params[0].dataIndex;
                const content = topContent[contentIndex];
                return `<strong>${content.account}</strong><br/>
                        Views: ${formatNumber(content.views)}<br/>
                        Likes: ${formatNumber(content.likes)}<br/>
                        Comments: ${formatNumber(content.comments)}<br/>
                        Shares: ${formatNumber(content.shares)}<br/>
                        Engagement Rate: ${(content.engagementRate * 100).toFixed(2)}%<br/>
                        Published: ${content.publishedDate}`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: topContent.map(content => content.account),
            axisLabel: {
                interval: 0,
                rotate: 45
            }
        },
        yAxis: {
            type: 'value',
            name: 'Engagement Rate (%)',
            axisLabel: {
                formatter: '{value}%'
            }
        },
        series: [
            {
                name: 'Engagement Rate',
                type: 'bar',
                data: topContent.map(content => (content.engagementRate * 100).toFixed(2)),
                itemStyle: {
                    color: function(params) {
                        const value = params.value;
                        if (value > 15) {
                            return '#fe2c55';
                        } else if (value > 10) {
                            return '#25f4ee';
                        } else {
                            return '#a1a1a1';
                        }
                    }
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
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
            },
            formatter: function(params) {
                let tooltip = `<strong>${params[0].axisValue}</strong><br/>`;
                params.forEach(param => {
                    if (param.seriesName === 'Engagement Rate (%)') {
                        tooltip += `${param.seriesName}: ${param.value}%<br/>`;
                    } else {
                        tooltip += `${param.seriesName}: ${formatNumber(param.value)}<br/>`;
                    }
                });
                return tooltip;
            }
        },
        legend: {
            data: ['Views', 'Likes', 'Comments', 'Shares', 'Engagement Rate (%)']
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
                position: 'left',
                axisLabel: {
                    formatter: function(value) {
                        if (value >= 1000000) {
                            return (value / 1000000).toFixed(1) + 'M';
                        } else if (value >= 1000) {
                            return (value / 1000).toFixed(1) + 'K';
                        }
                        return value;
                    }
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
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: processedData.views,
                itemStyle: {
                    color: '#fe2c55'
                },
                smooth: true
            },
            {
                name: 'Likes',
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: processedData.likes,
                itemStyle: {
                    color: '#25f4ee'
                },
                smooth: true
            },
            {
                name: 'Comments',
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: processedData.comments,
                itemStyle: {
                    color: '#a1a1a1'
                },
                smooth: true
            },
            {
                name: 'Shares',
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: processedData.shares,
                itemStyle: {
                    color: '#ff9500'
                },
                smooth: true
            },
            {
                name: 'Engagement Rate (%)',
                type: 'line',
                yAxisIndex: 1,
                data: processedData.engagementRate.map(rate => (rate * 100).toFixed(2)),
                itemStyle: {
                    color: '#8134af'
                },
                lineStyle: {
                    width: 3,
                    type: 'dashed'
                },
                symbol: 'circle',
                symbolSize: 8,
                smooth: true
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}
