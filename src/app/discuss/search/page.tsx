import { fetchPostsBySearchKey } from '@/src/prisma/queries/post';
import { redirect } from 'next/navigation';
import PostList from '@/src/components/discuss/PostList';
interface Props {
  searchParams: Promise<{ searchkey: string }>;
}
export default async function SearchPage(props: Props) {
  const { searchParams } = props;
  const { searchkey } = await searchParams;
  if (!searchkey) {
    redirect('/discuss');
  }
  const posts = await fetchPostsBySearchKey(searchkey);
  return <PostList posts={posts} />;
}
