## 不同类型组件交叉使用的注意点

### 1.一般情况下，客户端组件不要使用服务端组件。因为服务端组件可能会用到 node 相关的 api

可以使用 npm install server-only，通过在服务器组件的顶部 import server-only 来强行限制当前的服务器组件不能被其他客户端组件导入使用

### 2.如果一定要在客户端组件中使用服务器组件，则可以通过 children 的方式将服务器组件当作 children 传递给客户端组件

#### 3.环境变量

在.env 文件中定义的环境变量可以通过 process.env.xxx 访问。比如 process.env.API_KEY。不过需要注意的是由于环境变量 API_KEY 没有以 NEXT_PUBLIC 为前缀，因此它是一个只能在服务器上访问的私有变量。为了防止环境变量泄漏给客户端，Next.js 将私有环境变量替换为空字符串。

#### 4.使用第三方包和 Providers

由于服务器组件是一项新的 React 功能，生态系统中的第三方包和开发者才刚刚开始将'use client'指令添加到客户端组件中。

在这种情况下，我们可以将依赖于仅限客户端功能的第三方组件包装在我们自己的 Client Components 中

```tsx
'use client';
import { Card } from 'antd';

export default Card;
```

#### 5.React Context

React context 不支持在服务器组件中使用
