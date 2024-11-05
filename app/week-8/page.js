"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Function to add a new item to the shopping list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // Function to handle item selection and clean up item names
    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(",")[0] // Remove anything after a comma
            .replace(/[^a-zA-Z ]/g, "") // Remove emojis and special characters
            .trim(); // Remove leading/trailing spaces
        setSelectedItemName(cleanedName);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600">
            <h1 className='pl-2 text-xl font-bold'>Week 8 Assignment</h1>
            <h1 className='pl-2 text-3xl font-bold'>Shopping List</h1>

            <div className="flex space-x-4 p-4">
                {/* Grouped NewItem and ItemList components */}
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                {/* Display MealIdeas component with selectedItemName as ingredient */}
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </div>
    );
};

export default Page;
