'use client';
import { createPost } from '@/src/actions/post';
import {
  Button,
  Input,
  Popover,
  Textarea,
  PopoverTrigger,
  PopoverContent,
} from '@heroui/react';
import { startTransition, useActionState } from 'react';
interface Props {
  name: string;
}
export default function CreatePostForm(props: Props) {
  const { name } = props;
  const ceatePostWrap = createPost.bind(null, name);
  const [state, formAction, isPending] = useActionState(ceatePostWrap, {
    errors: {},
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 解决表单提交重置的问题
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    startTransition(() => formAction(formData));
  };
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="secondary" variant="bordered">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          noValidate
          className="flex py-2 flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <h3 className="font-bold text-lg">Create a Post</h3>
          <Input
            name="title"
            label="Title"
            isInvalid={!!state.errors.title}
            errorMessage={state.errors.title?.join(', ')}
          />
          <Textarea
            name="content"
            label="Content"
            isInvalid={!!state.errors.content}
            errorMessage={state.errors.content?.join(', ')}
          />
          {state.errors._form ? (
            <span className="text-red-500">
              {state.errors._form.join(', ')}
            </span>
          ) : null}
          <Button isLoading={isPending} type="submit">
            Submit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
