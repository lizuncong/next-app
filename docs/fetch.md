## Fetch

Next.js 扩展了原生的 fetch API，允许我们为服务器上的每个 fetch 请求配置缓存和重新验证行为。React 扩展了 fetch 以在渲染 React 组件树时自动记住 fetch 请求。

### 一、Next 14

默认情况下，Next.js 会自动将 fetch 的返回值缓存在服务器上的 Data Cache 中。这意味着可以在构建时或请求时获取数据，缓存数据，并在每个数据请求中重复使用。

但是也有例外，在以下情况下不会缓存 fetch 请求：

1. 在 server action 中使用

2. 在使用 post 方法的 route handler 中使用

可以通过在 next config 中开启 fetch 请求的请求日志，方便观察 fetch 请求的缓存效果

在 next.config.ts 中：

```js
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
```

#### fetch 默认缓存的两种情况
