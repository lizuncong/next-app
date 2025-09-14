import React from 'react';
import LoginForm from './Form';
import SignIn from '@/src/components/SignIn';
import { auth } from '@/auth';
import SignOutButton from '@/src/components/SignOut';
import SignOutClient from '@/src/components/SignOutClient';
import SignInClient from '@/src/components/SignInClient';
import UserInfoClient from '@/src/components/Client/UserInfo';
const Login: React.FC = async () => {
  const session = await auth();
  console.log('login..session..', session);
  if (session) {
    return (
      <div>
        <SignOutButton />
        <SignOutClient />
        <div>
          用户头像:
          <img className="size-10" src={session.user?.image} alt="" />
          <div>{JSON.stringify(session.user)}</div>
        </div>
        <UserInfoClient />
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <LoginForm />

      <SignIn />
      <SignInClient />
    </div>
  );
};

export default Login;
