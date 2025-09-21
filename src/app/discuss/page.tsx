import CreateTopicForm from '@/src/components/Client/CreateTopicForm';
export default function DiscussPage() {
  return (
    <div className="flex items-center justify-between bg-red-500">
      <h1>Top Posts</h1>
      <CreateTopicForm />
    </div>
  );
}
