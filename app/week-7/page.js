"use client";
import React,{useState}from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json'



const Page = () => {
    const [items,setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600">
            <h1 className='pl-2 text-xl font-bold'>Week 7 Assignment</h1>
            <h1 className='pl-2 text-3xl font-bold'>Shopping List</h1>
            
            {/* Pass the handleAddItem function as onAddItem prop */}
            <NewItem onAddItem={handleAddItem} />
            
            {/* Pass the items state to the ItemList component */}
            <ItemList items={items} />
        </div>
    );
};

export default Page;