import Link from 'next/link';
import { memo } from 'react';
export async function generateMetadata({ params }) {
  const resource = await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: 'hello',
        desc: 'nihao',
      });
    }, 10000);
  });
  return {
    title: resource.title,
    description: resource.desc,
  };
}

const User = memo(() => {
  return (
    <div>
      user page
      <ul>
        <li>
          <Link href="/user/1">user 1</Link>
        </li>
        <li>
          <Link href="/user/2">user 2</Link>
        </li>
        <li>
          <Link href="/user/3">user 3</Link>
        </li>
        <li>
          <Link href="/user/4">user 4</Link>
        </li>
        <li>
          <Link href="/user/5">user 5</Link>
        </li>
      </ul>
    </div>
  );
});

User.displayName = 'User';

export default User;
