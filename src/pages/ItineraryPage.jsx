import React, { useState } from "react";

const ItineraryPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Itinerary Planner</h1>
        <div className="mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={addItem} className="bg-blue-500 text-white p-2">
            Add
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              {item}
              <button
                onClick={() => removeItem(index)}
                className="bg-red-500 text-white p-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItineraryPage;
