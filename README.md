# Eufy 智能决策系统

Eufy Robot Vacuum - 内容驱动的智能增长决策系统

## 项目介绍

A comprehensive data analysis and visualization system designed for Eufy's robotic vacuum cleaner products marketing team. This system helps analyze content performance across multiple platforms, understand consumer insights, and optimize marketing strategies.

## System Modules

### O Module (Overview)
Real-time data dashboard integrating all key business metrics into a unified view using HTML/CSS/JS with ECharts and D3.js visualizations.

### I Module (Insight)
Data insight analysis system integrating search insights, VOC insights, viral video analysis, and opportunity discovery.

### K Module (KOC & KOL)
Content creator management and collaboration system optimizing content production process and effect tracking.

### F Module (Feeds)
Content empowerment advertisement distribution effect analysis system optimizing delivery strategy and conversion effect.

### P Module (Private)
Private domain traffic management and precision marketing system enhancing user loyalty and long-term value.

## Technology Stack

- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Data Visualization: ECharts, D3.js, SVG
- Data Source: SQLite database (eufy_social_media.db)
- Development Tools: VSCode, Git, Chrome DevTools
- Browser Support: Chrome, Firefox, Safari, Edge latest versions

## 安装与使用

### 前提条件

- Node.js (推荐 v14.0.0 或更高版本)
- npm (随Node.js一起安装)

### 安装步骤

1. 克隆或下载此项目到本地
2. 在项目根目录打开终端，运行以下命令安装依赖:

```bash
npm install
```

### 启动项目

开发模式启动（自动重载）:

```bash
npm run dev
```

生产模式启动:

```bash
npm start
```

启动后，打开浏览器访问: http://localhost:4001 (或.env文件中配置的PORT)

## 环境变量配置

项目使用.env文件进行环境配置，主要包括:

- PORT: 服务器监听端口（默认为3000）
- 其他API相关配置

## Usage

Navigate through different modules by using the sidebar navigation. Each module provides specialized tools and visualizations for different aspects of content marketing analysis.
