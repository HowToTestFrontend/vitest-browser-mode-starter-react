'use client';

import { SimpleCounter } from './components/simpleCounter';
import { ToggleHiddenContent } from './components/toggleHiddenContent';
import { ItemList } from './components/itemList';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold" data-testid="main-title">
          Welcome to this sample app
        </h1>

        <SimpleCounter />
        <ItemList />
        <ToggleHiddenContent />
      </div>
    </div>
  );
}
