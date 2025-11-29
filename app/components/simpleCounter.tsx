import { useState } from 'react';

export function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Counter</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          data-testid="decrement-btn"
          aria-label="Decrement"
        >
          -
        </button>
        <span className="font-mono text-2xl" data-testid="counter-display">
          {count}
        </span>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          data-testid="increment-btn"
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  );
}
