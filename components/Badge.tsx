import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className='px-2 border border-neutral-200 rounded-md bg-primary'>
      {children}
    </div>
  );
}
