import { useState } from 'react';

export function ToggleHiddenContent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Toggle Content</h2>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
        data-testid="toggle-btn"
      >
        {isVisible ? 'Hide' : 'Show'} Content
      </button>

      {isVisible && (
        <div className="mt-4 rounded bg-yellow-100 p-4" data-testid="toggle-content-1">
          <p>This content can be toggled on and off!</p>
        </div>
      )}

      <div
        className={`mt-4 rounded bg-yellow-100 p-4 ${isVisible ? '' : 'hidden'}`}
        data-testid="toggle-content-2"
      >
        <p>This is only hidden via tailwind &quot;hidden&quot; classname!</p>
      </div>
    </div>
  );
}
