import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className='px-2 border border-neutral-200 dark:border-neutral-400 rounded-md bg-primary dark:bg-primary-dark'>
      {children}
    </div>
  );
}
