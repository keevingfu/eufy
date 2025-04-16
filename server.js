require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// 确保public目录及其子目录存在
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'), { recursive: true });
}

// 确保js目录存在
if (!fs.existsSync(path.join(__dirname, 'public', 'js'))) {
  fs.mkdirSync(path.join(__dirname, 'public', 'js'), { recursive: true });
}

// 检查data目录是否存在并创建public/data目录
if (fs.existsSync(path.join(__dirname, 'data')) && !fs.existsSync(path.join(__dirname, 'public', 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'public', 'data'), { recursive: true });
  
  // 复制data目录下的文件到public/data
  const dataFiles = fs.readdirSync(path.join(__dirname, 'data'));
  dataFiles.forEach(file => {
    const srcPath = path.join(__dirname, 'data', file);
    const destPath = path.join(__dirname, 'public', 'data', file);
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`已复制 ${file} 到 public/data 目录`);
    }
  });
}

// 复制其他静态资源文件（如图片）
if (fs.existsSync(path.join(__dirname, 'eufy_logo.png')) && !fs.existsSync(path.join(__dirname, 'public', 'eufy_logo.png'))) {
  fs.copyFileSync(
    path.join(__dirname, 'eufy_logo.png'),
    path.join(__dirname, 'public', 'eufy_logo.png')
  );
  console.log('已复制 eufy_logo.png 到 public 目录');
}

// 提供静态文件
app.use(express.static('public'));

// 直接复制index.html到public目录，保留原始内容
const sourceHtml = path.join(__dirname, 'index.html');
const destHtml = path.join(__dirname, 'public', 'index.html');

// 复制index.html到public目录
if (fs.existsSync(sourceHtml)) {
  // 读取原始HTML内容
  let htmlContent = fs.readFileSync(sourceHtml, 'utf8');
  
  // 添加main.js引用（如果还没有添加）
  if (!htmlContent.includes('src="js/main.js"')) {
    // 找到脚本部分末尾
    const scriptEndIndex = htmlContent.lastIndexOf('</script>');
    if (scriptEndIndex !== -1) {
      // 在最后一个script标签后插入main.js引用
      const endScriptTag = '</script>';
      const insertPosition = scriptEndIndex + endScriptTag.length;
      
      htmlContent = 
        htmlContent.substring(0, insertPosition) + 
        '\n  <!-- 导入自定义JS -->\n  <script src="js/main.js"></script>' + 
        htmlContent.substring(insertPosition);
    } else {
      // 如果找不到script标签，在body结束前添加
      htmlContent = htmlContent.replace('</body>', '  <!-- 导入自定义JS -->\n  <script src="js/main.js"></script>\n</body>');
    }
  }
  
  // 写入修改后的内容到public/index.html
  fs.writeFileSync(destHtml, htmlContent);
  console.log('已复制并修改index.html到public目录');
}

// 主路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器在端口 ${PORT} 启动`);
  console.log(`请访问: http://localhost:${PORT}`);
}); 