'use client';
import {
  Button,
  Input,
  Popover,
  Textarea,
  PopoverTrigger,
  PopoverContent,
} from '@heroui/react';
import { createTopic } from '@/src/actions/topic';
import { startTransition, useActionState } from 'react';
export default function CreateTopicForm() {
  const [state, formAction] = useActionState(createTopic, {
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
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          // 需要设置noValidate，不然当表单出现错误时，重新输入没法触发表单重新校验
          noValidate
          onSubmit={handleSubmit}
          className="flex py-2 flex-col gap-3"
        >
          <h3 className="font-bold text-lg">Create a Topic</h3>
          <Input
            name="name"
            label="Name"
            isInvalid={!!state.errors.name}
            errorMessage={state.errors.name?.join(', ')}
          />
          <Textarea
            name="description"
            label="Description"
            isInvalid={!!state.errors.description}
            errorMessage={state.errors.description?.join(', ')}
          />
          {state.errors._form ? (
            <span className="text-red-500">
              {state.errors._form.join(', ')}
            </span>
          ) : null}
          <Button type="submit">Submit</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
