import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';
const Navbar = async () => {
  console.log('auth...', auth);
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={40} height={40}></Image>
        </Link>
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button onClick={signOut}>Logout</button>
              <Link href={`user/${session.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <button
              onClick={async () => {
                'use server';
                await signIn('github');
              }}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
