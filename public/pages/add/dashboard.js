// Dashboard.js - SelfKOC Instagram Performance Dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard
    initializeDashboard();
    
    // Event listeners
    document.getElementById('timeRange').addEventListener('change', handleTimeRangeChange);
    document.getElementById('updateDashboard').addEventListener('click', updateDashboard);
    document.getElementById('viewsSort').addEventListener('click', () => sortAccountData('views'));
    document.getElementById('engagementSort').addEventListener('click', () => sortAccountData('engagement'));
    
    // Tab switching
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Export buttons
    document.getElementById('exportAccountData').addEventListener('click', () => exportData('account'));
    document.getElementById('exportContentData').addEventListener('click', () => exportData('content'));
    document.getElementById('exportTrendData').addEventListener('click', () => exportData('trend'));
    document.getElementById('exportPlatformData').addEventListener('click', () => exportData('platform'));
    document.getElementById('exportProductData').addEventListener('click', () => exportData('product'));
    document.getElementById('exportCompetitorData').addEventListener('click', () => exportData('competitor'));
    
    // Time trend view options
    document.getElementById('dailyView').addEventListener('click', () => updateTimeTrendView('daily'));
    document.getElementById('weeklyView').addEventListener('click', () => updateTimeTrendView('weekly'));
    document.getElementById('monthlyView').addEventListener('click', () => updateTimeTrendView('monthly'));
});

// Initialize dashboard with mock data
function initializeDashboard() {
    // Load mock data
    const mockData = generateMockData();
    
    // Update summary metrics
    updateSummaryMetrics(mockData);
    
    // Render all charts
    renderAccountPerformanceChart(mockData.accountData);
    renderTopContentChart(mockData.contentData);
    renderContentDistributionChart(mockData.contentDistribution);
    renderTimeTrendChart(mockData.timeData, 'daily');
    renderPlatformComparisonChart(mockData.platformData);
    renderProductAssociationChart(mockData.productData);
    renderCompetitorAnalysisChart(mockData.competitorData);
    
    // Populate top content table
    populateTopContentTable(mockData.contentData.slice(0, 10));
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
    // For this demo, we'll just regenerate mock data
    const mockData = generateMockData();
    
    // Update all visualizations
    updateSummaryMetrics(mockData);
    renderAccountPerformanceChart(mockData.accountData);
    renderTopContentChart(mockData.contentData);
    renderContentDistributionChart(mockData.contentDistribution);
    renderTimeTrendChart(mockData.timeData, 'daily');
    renderPlatformComparisonChart(mockData.platformData);
    renderProductAssociationChart(mockData.productData);
    renderCompetitorAnalysisChart(mockData.competitorData);
    
    // Populate top content table
    populateTopContentTable(mockData.contentData.slice(0, 10));
}

// Switch between tabs
function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Activate selected tab and button
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
}

// Sort account data by views or engagement
function sortAccountData(sortBy) {
    const mockData = generateMockData();
    let sortedData = [...mockData.accountData];
    
    if (sortBy === 'views') {
        sortedData.sort((a, b) => b.totalViews - a.totalViews);
    } else if (sortBy === 'engagement') {
        sortedData.sort((a, b) => b.engagementRate - a.engagementRate);
    }
    
    renderAccountPerformanceChart(sortedData);
}

// Update time trend view (daily, weekly, monthly)
function updateTimeTrendView(viewType) {
    const mockData = generateMockData();
    renderTimeTrendChart(mockData.timeData, viewType);
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
    
    // Calculate average engagement rate
    const totalEngagement = data.accountData.reduce((sum, account) => sum + account.engagementRate, 0);
    const avgEngagement = (totalEngagement / data.accountData.length) * 100;
    
    // Update DOM elements
    document.getElementById('totalViews').textContent = formatNumber(totalViews);
    document.getElementById('totalLikes').textContent = formatNumber(totalLikes);
    document.getElementById('totalComments').textContent = formatNumber(totalComments);
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
        row.appendChild(engagementCell);
        row.appendChild(dateCell);
        
        // Append row to table body
        tableBody.appendChild(row);
    });
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
