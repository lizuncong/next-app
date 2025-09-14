import { signIn } from '@/auth';

export default function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <button type="submit">服务端组件登录用法：Signin with GitHub</button>
    </form>
  );
}
