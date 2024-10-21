import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Week 6 Assignment</h1>
            <h1 className='text-3xl font-bold'>Shopping List</h1>
            <ItemList />
        </div>
    );
};

export default Page;