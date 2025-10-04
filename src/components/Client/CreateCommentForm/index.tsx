'use client';
import { createComment } from '@/src/actions/comment';
import { startTransition, useActionState, useEffect, useRef } from 'react';
interface Props {
  postId: string;
}
export default function CreateCommentForm({ postId }: Props) {
  const ceateCommentWrap = createComment.bind(null, { postId });
  const [state, formAction, isPending] = useActionState(ceateCommentWrap, {
    errors: {},
  });
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 解决表单提交重置的问题
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    startTransition(() => formAction(formData));
  };
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state]);
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-2 mt-6"
      ref={formRef}
    >
      <textarea
        className="border min-h-[100px] rounded-md border-gray-300 p-2"
        name="content"
        placeholder="输入评论"
      />
      <button type="submit" className="self-end">
        发布评论
      </button>
    </form>
  );
}
