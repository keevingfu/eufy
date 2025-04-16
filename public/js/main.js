// 确保DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化变量
    let currentModule = 'overview';
    let currentSubModule = 'overview-dashboard';
  
    // 获取DOM元素
    const navItems = document.querySelectorAll('.nav-item');
    const moduleSubmenu = document.getElementById('module-submenu');
    const moduleContent = document.getElementById('module-content');
    const deepSearchContainer = document.getElementById('deep-search-container');
    const researchContainer = document.getElementById('research-container');
    
    // 模块子菜单数据
    const moduleSubmenus = {
        overview: [
          { id: 'overview-dashboard', label: 'Dashboard' },
          { id: 'overview-kpi', label: 'Key Metrics' },
          { id: 'overview-roi', label: 'ROI Analysis' },
          { id: 'overview-trends', label: 'Trends' }
        ],
        insight: [
          { id: 'insight-search', label: 'Search Insights' },
          { id: 'insight-voc', label: 'VOC Analysis' },
          { id: 'insight-viral', label: 'Viral Videos' },
          { id: 'insight-factors', label: 'Viral Factors' }
        ],
        koc: [
          { id: 'koc-trends', label: 'Content Trends' },
          { id: 'koc-youtube', label: 'YouTube Trends' },
          { id: 'koc-instagram', label: 'Instagram Trends' },
          { id: 'koc-tiktok', label: 'TikTok Trends' },
          { id: 'koc-paid', label: 'Paid KOL' },
          { id: 'koc-self', label: 'Self-Operated KOC' },
          { id: 'koc-user', label: 'User Journey' },
          { id: 'koc-search', label: 'Search Performance' }
        ],
        feeds: [
          { id: 'feeds-effectiveness', label: 'Ad Effectiveness' },
          { id: 'feeds-campaigns', label: 'Campaign Performance' },
          { id: 'feeds-channel', label: 'Channel Analysis' },
          { id: 'feeds-google', label: 'Google Ads' },
          { id: 'feeds-facebook', label: 'Facebook Ads' },
          { id: 'feeds-amazon', label: 'Amazon Ads' },
          { id: 'feeds-product', label: 'Product Performance' }
        ],
        private: [
          { id: 'private-landing', label: 'Landing Pages' },
          { id: 'private-tags', label: 'Page Tags' },
          { id: 'private-whatsapp', label: 'WhatsApp Groups' },
          { id: 'private-email', label: 'Email Marketing' },
          { id: 'private-dtc', label: 'DTC Website' }
        ]
      };
  
    // 事件监听器 - 导航项
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const module = this.dataset.module;
        
        // 更新活动状态
        navItems.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        
        // 更新当前模块
        currentModule = module;
        
        // 隐藏所有模块容器
        if(moduleContent) moduleContent.style.display = 'none';
        if(deepSearchContainer) deepSearchContainer.style.display = 'none';
        if(researchContainer) researchContainer.style.display = 'none';
        
        const searchContainer = document.querySelector('.search-container');
        const suggestedQuestions = document.querySelector('.suggested-questions');
        const moduleSubmenuContainer = document.querySelector('.module-submenu');
        
        if(searchContainer) searchContainer.style.display = 'none';
        if(suggestedQuestions) suggestedQuestions.style.display = 'none';
        if(moduleSubmenuContainer) moduleSubmenuContainer.style.display = 'none';
        
        // 根据模块显示适当的内容
        if (module === 'deepsearch') {
          if(deepSearchContainer) deepSearchContainer.style.display = 'block';
        } else if (module === 'research') {
          if(researchContainer) researchContainer.style.display = 'block';
        } else {
          if(moduleContent) moduleContent.style.display = 'block';
          if(searchContainer) searchContainer.style.display = 'flex';
          if(suggestedQuestions) suggestedQuestions.style.display = 'block';
          if(moduleSubmenuContainer) moduleSubmenuContainer.style.display = 'flex';
          
          // 更新子菜单和问题
          updateSubmenu(module);
        }
      });
    });
  
    // 更新子菜单
    function updateSubmenu(module) {
      if(!moduleSubmenu) return;
      
      moduleSubmenu.innerHTML = '';
      
      if(!moduleSubmenus[module]) return;
      
      moduleSubmenus[module].forEach(item => {
        const submenuItem = document.createElement('div');
        submenuItem.className = 'submenu-item';
        submenuItem.textContent = item.label;
        submenuItem.dataset.id = item.id;
        
        if (item.id === module + '-dashboard' || moduleSubmenus[module].indexOf(item) === 0) {
          submenuItem.classList.add('active');
          currentSubModule = item.id;
        }
        
        submenuItem.addEventListener('click', function() {
          document.querySelectorAll('.submenu-item').forEach(el => el.classList.remove('active'));
          this.classList.add('active');
          currentSubModule = this.dataset.id;
        });
        
        moduleSubmenu.appendChild(submenuItem);
      });
    }
  
    // 初始化第一个模块
    updateSubmenu(currentModule);
    
    // 研究模块标签功能
    const researchTabs = document.querySelectorAll('.research-tabs .tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    researchTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        // 更新活动标签
        researchTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // 隐藏所有标签内容
        tabContents.forEach(content => {
          content.style.display = 'none';
        });
        
        // 显示选定的标签内容
        const tabContent = document.getElementById(`${tabId}-content`);
        if(tabContent) tabContent.style.display = 'block';
      });
    });
  
    console.log("事件处理程序已加载");
  });