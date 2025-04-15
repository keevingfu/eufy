# PowerShell script to check and start the Eufy Content-Driven Growth Decision System

Write-Host "===== Eufy内容驱动的智能增长决策系统检查与启动 =====" -ForegroundColor Cyan
Write-Host "Content-Driven Intelligent Growth Decision System" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

# 检查Node.js和npm
Write-Host "检查Node.js和npm..." -ForegroundColor Yellow
$nodeVersion = node -v
$npmVersion = npm -v
Write-Host "Node.js版本: $nodeVersion" -ForegroundColor Green
Write-Host "npm版本: $npmVersion" -ForegroundColor Green
Write-Host "✓ Node.js环境正常" -ForegroundColor Green

# 检查依赖
Write-Host ""
Write-Host "检查项目依赖..." -ForegroundColor Yellow
if (-not (Test-Path -Path ".\node_modules")) {
    Write-Host "正在安装依赖，这可能需要几分钟时间..." -ForegroundColor Yellow
    npm install
    Write-Host "✓ 依赖安装成功" -ForegroundColor Green
} else {
    Write-Host "✓ 依赖已安装" -ForegroundColor Green
}

# 检查所需文件
Write-Host ""
Write-Host "检查关键文件..." -ForegroundColor Yellow
$requiredFiles = @(
    ".\public\index.html",
    ".\public\manifest.json",
    ".\src\index.js",
    ".\src\app.js",
    ".\src\routes.js"
)
$allFilesExist = $true
foreach ($file in $requiredFiles) {
    if (-not (Test-Path -Path $file)) {
        Write-Host "✗ 缺少必要文件: $file" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if ($allFilesExist) {
    Write-Host "✓ 所有关键文件都存在" -ForegroundColor Green
}

# 启动应用
Write-Host ""
Write-Host "所有检查通过，正在启动应用..." -ForegroundColor Green
Write-Host "启动后，可以在浏览器中访问 http://localhost:3000" -ForegroundColor Cyan
Write-Host ""

# 启动React应用
npm start 