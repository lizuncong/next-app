'use client';

import { editSnippet } from '@/src/actions/snippets';
import { Snippet } from '@/src/generated/prisma';
import { useState } from 'react';

const EditForm = (props: { snippet: Snippet }) => {
  const { snippet } = props;
  const [code, setCode] = useState(snippet.code);
  const onChange = e => {
    console.log('on change...', e.target.value);
    setCode(e.target.value);
  };
  const editSnippetWithOther = editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <textarea
        className="h-100 w-full bg-black text-white"
        name=""
        id=""
        value={code}
        onChange={onChange}
      ></textarea>
      <form action={editSnippetWithOther}>
        <button className="cursor-pointer mt-3 text-blue-600">保存</button>
      </form>
    </div>
  );
};

export default EditForm;
