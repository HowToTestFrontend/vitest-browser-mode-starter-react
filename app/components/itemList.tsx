import { useState } from 'react';

export function ItemList() {
  const [name, setName] = useState('');
  const [items, setItems] = useState<Array<{ id: string; value: string }>>([]);

  const addItem = () => {
    if (name.trim()) {
      setItems([...items, { id: crypto.randomUUID(), value: name.trim() }]);
      setName('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Item List</h2>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter an item"
          className="flex-1 rounded border border-gray-300 px-3 py-2"
          data-testid="item-input"
          onKeyDown={e => e.key === 'Enter' && addItem()}
        />
        <button
          onClick={addItem}
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          data-testid="add-item-btn"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2" data-testid="items-list">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="flex items-center justify-between rounded bg-gray-100 p-2"
            data-testid={`item-${index}`}
          >
            + <span>{item.value}</span>
            <button
              onClick={() => removeItem(index)}
              className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-100"
              data-testid={`remove-item-${index}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <p className="mt-2 text-gray-600" data-testid="items-count">
          Total items: {items.length}
        </p>
      )}
    </div>
  );
}
