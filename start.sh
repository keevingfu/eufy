#!/bin/bash

# 确保脚本在出错时停止执行
set -e

# 安装依赖
echo "正在安装依赖..."
npm install

# 编译Tailwind CSS
echo "正在编译Tailwind CSS..."
npm run build:css

# 启动应用
echo "正在启动应用..."
npm start
