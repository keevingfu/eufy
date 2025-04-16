#!/bin/bash

# 确保当前目录是项目根目录
cd "$(dirname "$0")"

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未找到Node.js! 请先安装Node.js."
    echo "  您可以从 https://nodejs.org/ 下载并安装"
    exit 1
fi

# 检查package.json是否存在
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 未找到package.json文件!"
    exit 1
fi

# 如果node_modules不存在，安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    npm install
fi

# 启动应用
echo "🚀 正在启动Eufy智能决策系统..."
echo "🌐 完成后，请访问: http://localhost:4001 (或.env中配置的PORT)"
npm run dev 