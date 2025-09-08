export default async function Page() {
  return (
    <div className="flex flex-col gap-4">
      在page.tsx中通过sleep模拟耗时3秒的操作。此时如果不加loading.tsx显示加载效果，
      那么在列表页点击查看详情页时，点击就会被阻塞10秒，因此需要加上这个loading
    </div>
  );
}
