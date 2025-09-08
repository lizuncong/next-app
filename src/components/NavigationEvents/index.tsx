'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    console.log('refres....', pathname, searchParams);
    // router.refresh(); // 会导致404的页面疯狂刷新
  }, [pathname, searchParams, router]);

  return null;
}
