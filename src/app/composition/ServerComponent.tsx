import fs from 'fs';
export default function ServerComponent() {
  const str = fs.readFileSync('./readme.md', 'utf-8');
  // console.log('str', str);
  return <div>ServerComponent：{str}</div>;
}
