import { sleep } from '@/src/lib';

export default async function Page() {
  await sleep(3000);
  return <div>体育：{new Date().toLocaleString()}</div>;
}
