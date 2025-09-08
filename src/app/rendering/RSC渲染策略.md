## RSC 渲染策略

服务器渲染有三个子集：Static、Dynamic 和 Streaming

### Static Rendering(Default)

静态渲染(默认)。使用 Static Rendering 时，路由在构建时渲染，或在数据重新验证后在后台渲染。结果将被缓存并可以推送到内容分发网络(CDN)。

静态博客文章或产品页面，比较适合使用 Static Rendering

> 在构建时，采用静态渲染的页面，控制台输出的页面资源前面会带个“o”

### 动态渲染 Dynamic Rendering

在渲染过程中，如果发现动态 API 或未缓存的数据请求，Next.js 将切换到动态渲染整个路由。

> 在构建时，采用动态渲染的页面，控制台输出的页面资源前面会带个“f”

#### 什么是动态 API

动态 API 依赖于只能在请求时知道的信息（在预渲染期间不能提前知道），比如 cookie，headers，searchParam 等。使用这些 API 中的任何一个都表明了开发人员的意图，并将在请求时选择将整个路由转换为动态渲染。
