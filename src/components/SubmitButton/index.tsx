'use client';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="border p-1 ml-2" disabled={pending}>
      {pending ? '提交中...' : '提交'}
    </button>
  );
}
