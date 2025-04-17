// YouTube Dashboard Main JS - SelfKOC YouTube Performance Dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Generate dashboard data
    const dashboardData = generateYouTubeData();
    
    // Initialize dashboard
    initializeDashboard(dashboardData);
    
    // Initialize event listeners
    initializeEventListeners(dashboardData);
});

// Initialize dashboard with data
function initializeDashboard(data) {
    // Update summary metrics
    updateSummaryMetrics(data);
    
    // Initialize charts
    initializeCharts(data);
    
    // Populate top content table
    populateTopContentTable(data.contentData);
}

// Update summary metrics
function updateSummaryMetrics(data) {
    // Calculate total metrics
    let totalViews = 0;
    let totalLikes = 0;
    let totalComments = 0;
    let totalEngagement = 0;
    
    data.contentData.forEach(content => {
        totalViews += content.views;
        totalLikes += content.likes;
        totalComments += content.comments;
        totalEngagement += content.engagementRate;
    });
    
    const avgEngagement = totalEngagement / data.contentData.length;
    
    // Update DOM elements
    document.getElementById('totalViews').textContent = formatNumber(totalViews);
    document.getElementById('totalLikes').textContent = formatNumber(totalLikes);
    document.getElementById('totalComments').textContent = formatNumber(totalComments);
    document.getElementById('avgEngagement').textContent = (avgEngagement * 100).toFixed(2) + '%';
}

// Populate top content table
function populateTopContentTable(contentData, sortBy = 'views') {
    const tableBody = document.querySelector('#topContentTable tbody');
    tableBody.innerHTML = '';
    
    // Sort content data
    let sortedData = [...contentData];
    if (sortBy === 'views') {
        sortedData.sort((a, b) => b.views - a.views);
    } else if (sortBy === 'likes') {
        sortedData.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === 'engagement') {
        sortedData.sort((a, b) => b.engagementRate - a.engagementRate);
    }
    
    // Take top 10 content items
    const topContent = sortedData.slice(0, 10);
    
    // Create table rows
    topContent.forEach(content => {
        const row = document.createElement('tr');
        
        // Create URL cell with clickable link
        const urlCell = document.createElement('td');
        const urlLink = document.createElement('a');
        urlLink.href = content.url;
        urlLink.target = '_blank';
        urlLink.textContent = shortenUrl(content.url);
        urlCell.appendChild(urlLink);
        row.appendChild(urlCell);
        
        // Create other cells
        row.appendChild(createCell(content.account));
        row.appendChild(createCell(formatNumber(content.views)));
        row.appendChild(createCell(formatNumber(content.likes)));
        row.appendChild(createCell(formatNumber(content.comments)));
        row.appendChild(createCell((content.engagementRate * 100).toFixed(2) + '%'));
        row.appendChild(createCell(content.publishedDate));
        
        tableBody.appendChild(row);
    });
}

// Create a table cell with the given content
function createCell(content) {
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
}

// Shorten URL for display
function shortenUrl(url) {
    // Extract video ID from YouTube URL
    const videoId = url.split('/').pop();
    return `youtube.com/shorts/${videoId}`;
}

// Initialize event listeners
function initializeEventListeners(data) {
    // Account performance chart sorting
    document.getElementById('viewsSort').addEventListener('click', function() {
        renderAccountPerformanceChart(data.accountData, 'views');
    });
    
    document.getElementById('engagementSort').addEventListener('click', function() {
        renderAccountPerformanceChart(data.accountData, 'engagement');
    });
    
    // Time trend chart time frame selection
    document.getElementById('dailyView').addEventListener('click', function() {
        renderTimeTrendChart(data.timeData, 'daily');
    });
    
    document.getElementById('weeklyView').addEventListener('click', function() {
        renderTimeTrendChart(data.timeData, 'weekly');
    });
    
    document.getElementById('monthlyView').addEventListener('click', function() {
        renderTimeTrendChart(data.timeData, 'monthly');
    });
    
    // Top content table sorting
    document.getElementById('sortByViews').addEventListener('click', function() {
        populateTopContentTable(data.contentData, 'views');
    });
    
    document.getElementById('sortByLikes').addEventListener('click', function() {
        populateTopContentTable(data.contentData, 'likes');
    });
    
    document.getElementById('sortByEngagement').addEventListener('click', function() {
        populateTopContentTable(data.contentData, 'engagement');
    });
    
    // Date range selection
    document.getElementById('timeRange').addEventListener('change', function() {
        const selectedValue = this.value;
        const startDateInput = document.getElementById('startDate');
        const endDateInput = document.getElementById('endDate');
        
        if (selectedValue === 'custom') {
            startDateInput.disabled = false;
            endDateInput.disabled = false;
        } else {
            startDateInput.disabled = true;
            endDateInput.disabled = true;
            
            // Set default date range based on selection
            const today = new Date();
            const endDate = today.toISOString().split('T')[0];
            
            let startDate;
            if (selectedValue === '7days') {
                const sevenDaysAgo = new Date(today);
                sevenDaysAgo.setDate(today.getDate() - 7);
                startDate = sevenDaysAgo.toISOString().split('T')[0];
            } else if (selectedValue === '30days') {
                const thirtyDaysAgo = new Date(today);
                thirtyDaysAgo.setDate(today.getDate() - 30);
                startDate = thirtyDaysAgo.toISOString().split('T')[0];
            } else if (selectedValue === '90days') {
                const ninetyDaysAgo = new Date(today);
                ninetyDaysAgo.setDate(today.getDate() - 90);
                startDate = ninetyDaysAgo.toISOString().split('T')[0];
            }
            
            startDateInput.value = startDate;
            endDateInput.value = endDate;
        }
    });
    
    // Update dashboard button
    document.getElementById('updateDashboard').addEventListener('click', function() {
        // In a real implementation, this would fetch new data based on the selected date range
        // For this mock dashboard, we'll just regenerate the data
        const newData = generateYouTubeData();
        initializeDashboard(newData);
    });
    
    // Export data buttons
    document.getElementById('exportAccountData').addEventListener('click', function() {
        exportToCSV(data.accountData, 'youtube_account_performance');
    });
    
    document.getElementById('exportDistributionData').addEventListener('click', function() {
        exportToCSV(data.contentDistribution, 'youtube_content_distribution');
    });
    
    document.getElementById('exportPlatformData').addEventListener('click', function() {
        exportToCSV(data.platformComparisonData, 'platform_comparison');
    });
    
    document.getElementById('exportTrendData').addEventListener('click', function() {
        exportToCSV(data.timeData, 'youtube_time_trend');
    });
    
    document.getElementById('exportInteractionData').addEventListener('click', function() {
        exportToCSV(data.interactionQualityData, 'youtube_interaction_quality');
    });
}

// Export data to CSV
function exportToCSV(data, filename) {
    // In a real implementation, this would convert the data to CSV and download it
    console.log(`Exporting ${filename} data:`, data);
    alert(`Export functionality would download ${filename}.csv in a real implementation.`);
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Set default date range (last 30 days)
window.onload = function() {
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);
    const startDate = thirtyDaysAgo.toISOString().split('T')[0];
    
    document.getElementById('startDate').value = startDate;
    document.getElementById('endDate').value = endDate;
};
