Write-Host "正在启动 Eufy 内容驱动的智能增长决策系统..." -ForegroundColor Green
Write-Host "Content-Driven Intelligent Growth Decision System" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green
Write-Host "正在检查依赖..." -ForegroundColor Yellow

# 检查node_modules
if (-not (Test-Path -Path ".\node_modules")) {
    Write-Host "安装依赖中..." -ForegroundColor Yellow
    npm install
}

Write-Host "启动应用中..." -ForegroundColor Green
Write-Host "应用将在浏览器中打开，地址: http://localhost:3000" -ForegroundColor Cyan

# 启动应用
npm start 