import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600">
            <h1 className='text-xl font-bold'>Week 6 Assignment</h1>
            <h1 className='text-3xl font-bold'>Shopping List</h1>
            <ItemList />
        </div>
    );
};

export default Page;