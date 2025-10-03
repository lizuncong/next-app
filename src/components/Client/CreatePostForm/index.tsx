'use client';
import {
  Button,
  Input,
  Popover,
  Textarea,
  PopoverTrigger,
  PopoverContent,
} from '@heroui/react';
interface Props {
  name: string;
}
export default function CreatePostForm(props: Props) {
  const { name } = props;
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="secondary" variant="bordered">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form noValidate className="flex py-2 flex-col gap-3">
          <h3 className="font-bold text-lg">Create a Post</h3>
          <Input name="title" label="Title" />
          <Textarea name="content" label="Content" />

          <Button type="submit">Submit</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
