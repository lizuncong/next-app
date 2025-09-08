import { JSONFilePreset } from 'lowdb/node';

export interface PostProp {
  id: string;
  title: string;
  content: string;
  publishTime: string;
  updateTime: string;
}
const defaultData: { posts: PostProp[] } = { posts: [] };
const db = await JSONFilePreset('db.json', defaultData);

export default db;
