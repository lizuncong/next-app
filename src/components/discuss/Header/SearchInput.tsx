'use client';
import { Input } from '@heroui/input';
import { searchAction } from '@/src/actions/search';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function SearchInput() {
  const searchParams = useSearchParams();
  const [searchKey, setSearchKey] = useState(searchParams.get('searchkey'));
  useEffect(() => {
    setSearchKey(searchParams.get('searchkey') || '');
  }, [searchParams]);
  return (
    <form action={searchAction}>
      <Input
        value={searchKey}
        onChange={e => {
          setSearchKey(e.target.value);
        }}
        name="searchKey"
      />
    </form>
  );
}
