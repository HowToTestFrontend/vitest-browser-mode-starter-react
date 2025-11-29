import HomePage from './page';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';

describe('Main app page (vitest)', () => {
  it('renders header', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: 'Welcome to this sample app' })).toBeInTheDocument();
  });

  describe('counter', () => {
    it('can interact with counter', async () => {
      render(<HomePage />);
      const incrementButton = screen.getByRole('button', { name: 'Increment' });
      const decrementButton = screen.getByText('-');
      const counterDisplay = screen.getByTestId('counter-display');

      expect(counterDisplay).toHaveTextContent('0');

      await userEvent.click(incrementButton);

      expect(counterDisplay).toHaveTextContent('1');

      await userEvent.click(decrementButton);
      expect(counterDisplay).toHaveTextContent('0');

      await userEvent.click(decrementButton);
      expect(counterDisplay).toHaveTextContent('-1');
    });
  });

  describe('lists', () => {
    it('can interact with the lists', async () => {
      render(<HomePage />);

      const input = screen.getByPlaceholderText('Enter an item');
      const addButton = screen.getByRole('button', { name: 'Add' });
      await userEvent.type(input, 'cat');
      await userEvent.click(addButton);

      const totalItems = screen.getByText('Total items', { exact: false });

      expect(totalItems).toHaveTextContent('Total items: 1');

      await userEvent.type(input, 'dog');
      await userEvent.click(addButton);

      expect(totalItems).toHaveTextContent('Total items: 2');

      const firstRow = screen.getByTestId('item-0');
      expect(firstRow).toHaveTextContent('cat');

      const removeCatButton = within(firstRow).getByRole('button');
      expect(removeCatButton).toHaveTextContent('Remove');

      expect(screen.queryByText('cat', { exact: false })).toBeInTheDocument();

      await userEvent.click(removeCatButton);

      expect(screen.queryByText('cat', { exact: false })).toBeNull();
    });
  });

  describe('toggle hidden content', () => {
    it('can toggle content visibility', async () => {
      render(<HomePage />);

      const toggleButton = screen.getByTestId('toggle-btn');

      // this is the one that actually removes/adds it to the dom:
      const toggleContent1 = screen.getByTestId('toggle-content-1');
      // this is the classname based one (it adds/removes the "hidden" class)
      const toggleContent2 = screen.getByTestId('toggle-content-2');

      // it starts off visible:
      expect(toggleButton).toHaveTextContent('Hide Content');
      expect(toggleContent1).toBeInTheDocument();
      expect(toggleContent1).toBeVisible();
      expect(toggleContent2).toBeInTheDocument();
      expect(toggleContent2).toBeVisible();

      // Click to hide
      await userEvent.click(toggleButton);

      expect(toggleButton).toHaveTextContent('Show Content');

      expect(screen.queryByTestId('toggle-content-1')).not.toBeInTheDocument();
      // the second content div should still be in the dom
      // but hidden with css... we can test that the hidden class is there
      // but this doesn't really prove that it is hidden or not...
      expect(toggleContent2).toHaveClass('hidden');
      expect(toggleContent2).toBeInTheDocument();
      // expect(toggleContent2).not.toBeVisible() // ❌ this would fail, as vitest doesn't know that the hidden classname will hide it in tailwind

      // Click to show again
      await userEvent.click(toggleButton);

      expect(toggleButton).toHaveTextContent('Hide Content');
      expect(screen.getByTestId('toggle-content-1')).toBeInTheDocument();
      expect(toggleContent2).not.toHaveClass('hidden');
    });
  });
});
