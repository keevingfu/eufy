// TikTok Dashboard - SelfKOC TikTok Performance Dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard
    initializeDashboard();
    
    // Event listeners
    document.getElementById('timeRange').addEventListener('change', handleTimeRangeChange);
    document.getElementById('updateDashboard').addEventListener('click', updateDashboard);
    document.getElementById('viewsSort').addEventListener('click', () => sortAccountData('views'));
    document.getElementById('engagementSort').addEventListener('click', () => sortAccountData('engagement'));
    document.getElementById('sharesSort').addEventListener('click', () => sortAccountData('shares'));
    
    // Time trend view options
    document.getElementById('dailyView').addEventListener('click', () => updateTimeTrendView('daily'));
    document.getElementById('weeklyView').addEventListener('click', () => updateTimeTrendView('weekly'));
    document.getElementById('monthlyView').addEventListener('click', () => updateTimeTrendView('monthly'));
    
    // Top content table sorting
    document.getElementById('sortByViews').addEventListener('click', () => sortTopContent('views'));
    document.getElementById('sortByShares').addEventListener('click', () => sortTopContent('shares'));
    document.getElementById('sortByEngagement').addEventListener('click', () => sortTopContent('engagement'));
    
    // Export buttons
    document.getElementById('exportAccountData').addEventListener('click', () => exportData('account'));
    document.getElementById('exportInteractionData').addEventListener('click', () => exportData('interaction'));
    document.getElementById('exportPlatformData').addEventListener('click', () => exportData('platform'));
    document.getElementById('exportShareData').addEventListener('click', () => exportData('share'));
    document.getElementById('exportContentData').addEventListener('click', () => exportData('content'));
    document.getElementById('exportTrendData').addEventListener('click', () => exportData('trend'));
});

// Initialize dashboard with data
function initializeDashboard() {
    // Load data
    const tikTokData = generateTikTokData();
    
    // Update summary metrics
    updateSummaryMetrics(tikTokData);
    
    // Render all charts
    renderAccountPerformanceChart(tikTokData.accountData);
    renderInteractionDistributionChart(tikTokData.interactionData);
    renderPlatformComparisonChart(tikTokData.platformComparisonData);
    renderSharePropagationChart(tikTokData.sharePropagationData);
    renderContentPerformanceChart(tikTokData.contentData);
    renderTimeTrendChart(tikTokData.timeData, 'daily');
    
    // Populate top content table
    populateTopContentTable(tikTokData.contentData.slice(0, 10));
}

// Handle time range change
function handleTimeRangeChange() {
    const timeRange = document.getElementById('timeRange').value;
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    
    if (timeRange === 'custom') {
        startDateInput.disabled = false;
        endDateInput.disabled = false;
    } else {
        startDateInput.disabled = true;
        endDateInput.disabled = true;
        
        // Set default date range based on selection
        const endDate = new Date();
        let startDate = new Date();
        
        switch(timeRange) {
            case '7days':
                startDate.setDate(endDate.getDate() - 7);
                break;
            case '30days':
                startDate.setDate(endDate.getDate() - 30);
                break;
            case '90days':
                startDate.setDate(endDate.getDate() - 90);
                break;
        }
        
        startDateInput.value = formatDate(startDate);
        endDateInput.value = formatDate(endDate);
    }
}

// Update dashboard based on selected date range
function updateDashboard() {
    // In a real implementation, this would fetch new data based on the date range
    // For this demo, we'll just regenerate data
    const tikTokData = generateTikTokData();
    
    // Update all visualizations
    updateSummaryMetrics(tikTokData);
    renderAccountPerformanceChart(tikTokData.accountData);
    renderInteractionDistributionChart(tikTokData.interactionData);
    renderPlatformComparisonChart(tikTokData.platformComparisonData);
    renderSharePropagationChart(tikTokData.sharePropagationData);
    renderContentPerformanceChart(tikTokData.contentData);
    renderTimeTrendChart(tikTokData.timeData, 'daily');
    
    // Populate top content table
    populateTopContentTable(tikTokData.contentData.slice(0, 10));
}

// Sort account data by views, engagement, or shares
function sortAccountData(sortBy) {
    const tikTokData = generateTikTokData();
    let sortedData = [...tikTokData.accountData];
    
    if (sortBy === 'views') {
        sortedData.sort((a, b) => b.totalViews - a.totalViews);
    } else if (sortBy === 'engagement') {
        sortedData.sort((a, b) => b.engagementRate - a.engagementRate);
    } else if (sortBy === 'shares') {
        sortedData.sort((a, b) => b.shareRate - a.shareRate);
    }
    
    renderAccountPerformanceChart(sortedData);
}

// Update time trend view (daily, weekly, monthly)
function updateTimeTrendView(viewType) {
    const tikTokData = generateTikTokData();
    renderTimeTrendChart(tikTokData.timeData, viewType);
}

// Sort top content table
function sortTopContent(sortBy) {
    const tikTokData = generateTikTokData();
    let sortedData = [...tikTokData.contentData];
    
    if (sortBy === 'views') {
        sortedData.sort((a, b) => b.views - a.views);
    } else if (sortBy === 'shares') {
        sortedData.sort((a, b) => b.shares - a.shares);
    } else if (sortBy === 'engagement') {
        sortedData.sort((a, b) => b.engagementRate - a.engagementRate);
    }
    
    populateTopContentTable(sortedData.slice(0, 10));
}

// Export data as CSV
function exportData(dataType) {
    alert(`Exporting ${dataType} data as CSV... (This would download a CSV file in a real implementation)`);
}

// Update summary metrics
function updateSummaryMetrics(data) {
    // Calculate summary metrics from data
    const totalViews = data.accountData.reduce((sum, account) => sum + account.totalViews, 0);
    const totalLikes = data.accountData.reduce((sum, account) => sum + account.totalLikes, 0);
    const totalComments = data.accountData.reduce((sum, account) => sum + account.totalComments, 0);
    const totalShares = data.accountData.reduce((sum, account) => sum + account.totalShares, 0);
    
    // Calculate average engagement rate
    const totalEngagement = data.accountData.reduce((sum, account) => sum + account.engagementRate, 0);
    const avgEngagement = (totalEngagement / data.accountData.length) * 100;
    
    // Update DOM elements
    document.getElementById('totalViews').textContent = formatNumber(totalViews);
    document.getElementById('totalLikes').textContent = formatNumber(totalLikes);
    document.getElementById('totalComments').textContent = formatNumber(totalComments);
    document.getElementById('totalShares').textContent = formatNumber(totalShares);
    document.getElementById('avgEngagement').textContent = avgEngagement.toFixed(2) + '%';
}

// Populate top content table
function populateTopContentTable(contentData) {
    const tableBody = document.getElementById('topContentTable').querySelector('tbody');
    tableBody.innerHTML = '';
    
    contentData.forEach(content => {
        const row = document.createElement('tr');
        
        // Create table cells
        const urlCell = document.createElement('td');
        const urlLink = document.createElement('a');
        urlLink.href = content.url;
        urlLink.textContent = content.title;
        urlLink.target = '_blank';
        urlCell.appendChild(urlLink);
        
        const accountCell = document.createElement('td');
        accountCell.textContent = content.account;
        
        const viewsCell = document.createElement('td');
        viewsCell.textContent = formatNumber(content.views);
        
        const likesCell = document.createElement('td');
        likesCell.textContent = formatNumber(content.likes);
        
        const commentsCell = document.createElement('td');
        commentsCell.textContent = formatNumber(content.comments);
        
        const sharesCell = document.createElement('td');
        sharesCell.textContent = formatNumber(content.shares);
        
        const engagementCell = document.createElement('td');
        engagementCell.textContent = (content.engagementRate * 100).toFixed(2) + '%';
        
        const dateCell = document.createElement('td');
        dateCell.textContent = content.publishedDate;
        
        // Append cells to row
        row.appendChild(urlCell);
        row.appendChild(accountCell);
        row.appendChild(viewsCell);
        row.appendChild(likesCell);
        row.appendChild(commentsCell);
        row.appendChild(sharesCell);
        row.appendChild(engagementCell);
        row.appendChild(dateCell);
        
        // Append row to table body
        tableBody.appendChild(row);
    });
}
