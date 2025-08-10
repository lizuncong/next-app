import Link from 'next/link';
import { memo } from 'react';
import Image from 'next/image';
const Navbar = memo(() => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={30} height={30}></Image>
        </Link>
      </nav>
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
