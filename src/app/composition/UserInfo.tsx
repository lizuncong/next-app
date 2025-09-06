export default async function UserInfo() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return <div>UserInfo</div>;
}
