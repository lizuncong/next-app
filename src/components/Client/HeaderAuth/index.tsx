'use client';
import { NavbarItem } from '@heroui/navbar';
import { Button } from '@heroui/button';
import { Avatar } from '@heroui/avatar';
import { Popover, PopoverTrigger, PopoverContent } from '@heroui/popover';
import { signIn, signOut } from '@/src/actions/user';
import { useSession } from 'next-auth/react';
import { signOut as signOutClient } from 'next-auth/react';

export default function HeaderAuth() {
  const { data: session, status } = useSession();
  console.log('session...', session);
  if (status === 'loading') {
    return 'loading...';
  }
  const content = session?.user ? (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Avatar src={session.user.image} />
      </PopoverTrigger>
      <PopoverContent>
        {/* 调用server action的signout方法退出，貌似状态没有及时同步，但调用
        客户端的signtou就可以：https://github.com/better-auth/better-auth/issues/3608 */}
        <form action={signOut}>
          <Button type="submit">退出(状态没有及时刷新)</Button>
        </form>
        <Button onClick={() => signOutClient()}>退出(状态可以及时刷新)</Button>
      </PopoverContent>
    </Popover>
  ) : (
    <>
      <NavbarItem>
        <form action={signIn}>
          <Button type="submit" color="primary" variant="flat">
            Sign In
          </Button>
        </form>
      </NavbarItem>
    </>
  );
  return content;
}
