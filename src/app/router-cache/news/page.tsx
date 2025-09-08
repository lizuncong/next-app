import { sleep } from '@/src/lib';
import Counter from './Counter';
export default async function Page() {
  await sleep(3000);
  return (
    <div>
      新闻：{new Date().toLocaleString()}
      <Counter />
    </div>
  );
}
