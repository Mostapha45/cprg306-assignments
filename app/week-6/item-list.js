"use client"; 

import React, { useState } from 'react';
import Item from './item'; 
import itemsData from './items.json'; 

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name'); // Sorting criteria
    const [groupByCategory, setGroupByCategory] = useState(false); 

    // Function to group items by category
    const groupItemsByCategory = (items) => {
        return items.reduce((groupedItems, item) => {
            if (!groupedItems[item.category]) {
                groupedItems[item.category] = [];
            }
            groupedItems[item.category].push(item);
            return groupedItems;
        }, {});
    };

    // Sorting the items based on what button has been chosen.
    let sortedItems = [...itemsData];
    
    if (!groupByCategory) {
        sortedItems = sortedItems.sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
    }

    // Checks to see if the grouped category button is chosen, to sort items by catgeory.
    const groupedItems = groupByCategory ? groupItemsByCategory(itemsData) : null;

    return (
        <div>
            {/* Displaying the buttons and styling them to match requirements */}
            <div className="flex space-x-2 mb-4 mt-6">
                <p className="font-bold mt-2">Sort by:</p>
                <button
                    onClick={() => { setGroupByCategory(false); setSortBy('name'); }}
                    className={`px-4 py-2 font-bold rounded ${!groupByCategory && sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                    Name
                </button>
                <button
                    onClick={() => { setGroupByCategory(false); setSortBy('category'); }}
                    className={`px-4 py-2 font-bold rounded ${!groupByCategory && sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                    Category
                </button>
                <button
                    onClick={() => setGroupByCategory(true)}
                    className={`px-4 py-2 font-bold rounded ${groupByCategory ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                    Grouped Category
                </button>
            </div>

            {/* Display items based on the button that has been chosen */}
            {!groupByCategory ? (
                <ul className='space-y-4'>
                    {sortedItems.map(item => (
                        <div className="bg-gray-800 text-white p-4 rounded-lg mb-2 w-1/2" key={item.id}>
                            <Item
                                name={item.name}
                                quantity={item.quantity}
                                category={item.category}
                            />
                        </div>
                    ))}
                </ul>
            ) : (
                <div>
                    {Object.keys(groupedItems).sort().map(category => (
                        <div key={category} className="mb-6">
                            <h2 className="capitalize font-bold text-2xl mb-2">{category}</h2>
                            <ul className="space-y-2">
                                {groupedItems[category].map(item => (
                                    <div className="bg-gray-800 text-white p-4 rounded-lg w-1/2" key={item.id}>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <span className="text-sm text-gray-400">Buy {item.quantity} in {item.category}</span>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemList;
