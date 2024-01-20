import React from 'react'
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn({
  value,
}: {
  value: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-gray-50 rounded-full outline-none transition focus:scale-105 hover:scale-105 active:scale-100 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div
          className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"
        />
      ) : (
        <>
          {value}
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
