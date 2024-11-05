"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState('name'); // Sorting options
    const [selectedItemName, setSelectedItemName] = useState(null); // Track clicked item

    // Sorting the items based on the selected option
    let sortedItems = [...items];
    sortedItems.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    // Function to handle item selection
    const handleItemSelect = (item) => {
        setSelectedItemName(item.name); // Set the clicked item's name
        onItemSelect(item); // Call the onItemSelect function passed as a prop
    };

    return (
        <div>
            {/* Display sorting buttons */}
            <div className="flex space-x-2 mb-4 mt-6">
                <p className="font-bold mt-2 pl-2">Sort by:</p>
                <button
                    onClick={() => setSortBy('name')}
                    className={`px-4 py-2 font-bold rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className={`px-4 py-2 font-bold rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                    Category
                </button>
            </div>

            {/* Display items */}
            <ul className="space-y-4">
                {sortedItems.map(item => (
                    <div className="py-2 ml-2" key={item.id}>
                        <Item
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={() => handleItemSelect(item)} // Handle item selection
                            isSelected={item.name === selectedItemName} // Pass the clicked state
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
