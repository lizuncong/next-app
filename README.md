## 开始

First, run the development server:

```bash
npm run dev
```

## 目录规范
- app目录下的文件都会被nextjs路由系统解析。app下面中只有定义了page.js或者route.js的文件夹才会被当作页面路由
- 位于app下面的页面模块，可以通过加"_"定义私有文件夹。私有文件夹下面的所有文件都不会被nextjs路由系统解析