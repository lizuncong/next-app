import CreateTopicForm from '@/src/components/Client/CreateTopicForm';
import TopicList from '@/src/components/discuss/TopicList';
export default function DiscussPage() {
  return (
    <div className="flex pt-4">
      <div className="flex-1">
        <h1>Top Posts</h1>
      </div>
      <div>
        <CreateTopicForm />
        <TopicList />
      </div>
    </div>
  );
}
