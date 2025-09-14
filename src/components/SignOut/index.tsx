import { signOut } from '@/auth';

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" className="cursor-pointer text-blue-600">
        服务端组件退出用法： 退出
      </button>
    </form>
  );
}
