export default async function Page() {
  return (
    <form>
      <h3>添加Snippet</h3>
      <div className="mb-2 mt-3 flex items-center">
        <label htmlFor="title">Title</label>
        <input
          className="p-1 ml-2 flex-1 rounded border"
          type="text"
          id="title"
        />
      </div>
      <button className="px-2 py-1 bg-blue-400" type="submit">
        添加
      </button>
    </form>
  );
}
