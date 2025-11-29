import HomePage from './page';
import { expect, test, describe } from 'vitest';
import { render } from 'vitest-browser-react';

describe('Main app page (vitest browser mode)', () => {
  test('renders header', async () => {
    const screen = await render(<HomePage />);

    await expect
      .element(screen.getByRole('heading', { name: 'Welcome to this sample app' }))
      .toBeInTheDocument();
  });

  describe('counter', () => {
    test('can interact with counter', async () => {
      const screen = await render(<HomePage />);
      const incrementButton = screen.getByRole('button', { name: 'Increment' });
      const decrementButton = screen.getByText('-');
      const counterDisplay = screen.getByTestId('counter-display');

      await expect.element(counterDisplay).toHaveTextContent('0');

      await incrementButton.click();

      await expect.element(counterDisplay).toHaveTextContent('1');

      await decrementButton.click();
      await expect.element(counterDisplay).toHaveTextContent('0');

      await decrementButton.click();
      await expect.element(counterDisplay).toHaveTextContent('-1');
    });
  });

  describe('lists', () => {
    test('can interact with the lists', async () => {
      const screen = await render(<HomePage />);

      const input = screen.getByPlaceholder('Enter an item');
      const addButton = screen.getByRole('button', { name: 'Add' });
      await input.fill('cat');
      await addButton.click();

      const totalItems = screen.getByText('Total items', { exact: false });

      await expect.element(totalItems).toHaveTextContent('Total items: 1');

      await input.fill('dog');
      await addButton.click();

      await expect.element(totalItems).toHaveTextContent('Total items: 2');

      const firstRow = screen.getByTestId('item-0');
      await expect.element(firstRow).toHaveTextContent('cat');

      // no need to call within(firstRow) in Browser mode - you can query directly on the object
      const removeCatButton = firstRow.getByRole('button');
      await expect.element(removeCatButton).toHaveTextContent('Remove');

      await expect.element(screen.getByText('cat', { exact: false })).toBeInTheDocument();

      await removeCatButton.click();

      await expect.element(screen.getByText('cat', { exact: false })).not.toBeInTheDocument();
    });
  });

  describe('toggle hidden content', () => {
    test('can toggle content visibility', async () => {
      const screen = await render(<HomePage />);

      const toggleButton = screen.getByTestId('toggle-btn');

      // this is the one that actually removes/adds it to the dom:
      const toggleContent1 = screen.getByTestId('toggle-content-1');
      // this is the classname based one (it adds/removes the "hidden" class)
      const toggleContent2 = screen.getByTestId('toggle-content-2');

      // it starts off visible:
      await expect.element(toggleButton).toHaveTextContent('Hide Content');
      await expect.element(toggleContent1).toBeInTheDocument();
      await expect.element(toggleContent1).toBeVisible();
      await expect.element(toggleContent2).toBeInTheDocument();
      await expect.element(toggleContent2).toBeVisible();

      // Click to hide
      await toggleButton.click();

      await expect.element(toggleButton).toHaveTextContent('Show Content');

      await expect.element(screen.getByTestId('toggle-content-1').query()).toBeNull();
      // the second content div should still be in the dom
      // but hidden with css... we can test that the hidden class is there
      // and in browser mode, we can actually test visibility properly
      await expect.element(toggleContent2).toHaveClass('hidden');
      await expect.element(toggleContent2).toBeInTheDocument();

      // BTW this only works as the `hidden` class name from tailwind is added, and in vitest.browser.setup.ts
      // we include the css! without it, there is no display:none style applied.
      await expect.element(toggleContent2).not.toBeVisible(); // ✅ this works in browser mode!

      // Click to show again
      await toggleButton.click();

      await expect.element(toggleButton).toHaveTextContent('Hide Content');
      await expect.element(screen.getByTestId('toggle-content-1')).toBeInTheDocument();
      await expect.element(toggleContent2).not.toHaveClass('hidden');
    });
  });
});
