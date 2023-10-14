"use client";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <h3>Please, try again.</h3>
      <button onClick={reset} className='button-primary'>
        Retry
      </button>
    </div>
  );
}
