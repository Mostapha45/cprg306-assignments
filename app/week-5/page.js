import React from 'react';
import Link from 'next/link'; 
import NewItem from './new-item';

const Page = () => {
    return (
        <div>
            <h1 className='text-xl font-bold text-center'>Week 5 Assignment</h1>
            <NewItem />
        </div>
    );
};

export default Page;
