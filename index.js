const http = require('http');
const fs = require('fs');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  // 只处理对根路径的请求
  if (req.url === '/') {
    // 设置响应头
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    });

    // 读取HTML文件内容
    const htmlContent = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js流式输出示例</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #1a1a2e;
            color: #e6e6e6;
            line-height: 1.6;
        }
        header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        h1 {
            color: #4ecca3;
            margin: 0;
        }
        .content {
            background: #16213e;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        .section {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid #0f3460;
        }
        h2 {
            color: #4ecca3;
        }
        .loading {
            color: #4ecca3;
            font-style: italic;
        }
        .completed {
            color: #4ecca3;
            font-weight: bold;
        }
        footer {
            text-align: center;
            margin-top: 30px;
            padding: 15px;
            color: #888;
            font-size: 0.9em;
        }
        .progress {
            height: 5px;
            background: #0f3460;
            border-radius: 5px;
            margin: 15px 0;
            overflow: hidden;
        }
        .progress-bar {
            height: 100%;
            background: #4ecca3;
            width: 0%;
            transition: width 0.5s ease;
        }
        code {
            background: #0f3460;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: 'Fira Code', monospace;
        }
    </style>
</head>
<body>
    <header>
        <h1>Node.js流式输出示例</h1>
        <p>此页面内容通过服务器流式传输生成</p>
    </header>
    
    <div class="content">
        <div class="section">
            <h2>关于流式输出</h2>
            <p>流式输出允许服务器逐步向客户端发送数据，而不是等待所有内容准备好再一次性发送。</p>
            <p>这种技术对于大文件传输或需要逐步渲染的内容非常有用。</p>
        </div>
        
        <div class="section">
            <h2>技术实现</h2>
            <p>使用Node.js的<code>http</code>模块创建服务器，并通过<code>res.write()</code>方法分块发送数据。</p>
            <p>设置<code>Transfer-Encoding: chunked</code>响应头告知浏览器使用分块编码。</p>
        </div>
        
        <div class="section">
            <h2>传输进度</h2>
            <div class="progress">
                <div class="progress-bar" id="progressBar"></div>
            </div>
            <p id="status">服务器正在准备内容...</p>
        </div>
    </div>
    
    <footer>
        <p>Node.js流式传输示例 &copy; 2023</p>
    </footer>

    <script>
        // 更新进度条
        function updateProgress(percent) {
            const progressBar = document.getElementById('progressBar');
            const status = document.getElementById('status');
            
            progressBar.style.width = percent + '%';
            
            if (percent < 100) {
                status.innerHTML = '正在接收数据: ' + percent + '%';
            } else {
                status.innerHTML = '<span class="completed">页面加载完成！</span>';
            }
        }
        
        // 模拟进度更新
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 5;
            if (progress <= 100) {
                updateProgress(progress);
            } else {
                clearInterval(progressInterval);
            }
        }, 300);
    </script>
</body>
</html>
    `;

    // 将HTML内容分割成多个块
    const chunks = htmlContent.split(/(?=<)/g); // 按HTML标签分割
    let index = 0;
    console.log('chunks', chunks.length, chunks);
    // 函数用于发送下一个块
    function sendNextChunk() {
      if (index < chunks.length) {
        // 发送当前块
        res.write(chunks[index]);
        index++;

        // 随机延迟，模拟网络传输
        // const delay = Math.floor(Math.random() * 100) + 50;
        const delay = 3 * 1000;

        setTimeout(sendNextChunk, delay);
      } else {
        // 所有块发送完成，结束响应
        res.end();
      }
    }

    // 开始发送块
    sendNextChunk();
  } else {
    // 处理其他路径的请求
    res.writeHead(404);
    res.end('页面未找到');
  }
});

// 启动服务器监听3000端口
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
