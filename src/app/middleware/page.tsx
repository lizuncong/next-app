export default function Middleware() {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-2xl mb-3">中间件</div>
      <p className="mb-2">
        中间件允许我们在请求完成之前运行代码。然后，根据传入的请求，我们可以通过重写、重定向、修改请求
        或响应标头或直接响应来修改响应。
      </p>
      <p>中间件在缓存的内容和路由匹配之前运行。</p>
    </div>
  );
}
