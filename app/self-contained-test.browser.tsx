/*

this is a simple 1 file test for vitest browser mode.
If you want to copy over a single self-contained file to run it on your
repo, then you can just copy and paste this entire file.

Check the other test files to see the main app being tested.

 */
import { expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';
import React from 'react';

const CounterComponent = (): React.ReactElement => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
it('should let you increment ', async () => {
  render(<CounterComponent />);

  expect(page.getByRole('heading')).toHaveTextContent('Count: 0');

  // get an element, then call .click() on it directly:
  const button = page.getByRole('button');
  await button.click();

  expect(page.getByRole('heading')).toHaveTextContent('Count: 1');
  // await expect.element(page.getByRole('heading')).toHaveTextContent('Count: 1');
});
