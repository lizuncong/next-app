export default function Page() {
  console.log('Static Rendering============');
  return <div>Static Rendering：{new Date().toLocaleTimeString()}</div>;
}
