import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between items-center p-4 bg-blue-300 rounded-lg shadow-lg mb-4 border border-blue-400 hover:bg-gray-50 transition duration-300 ease-in-out w-80">
            <div className="flex flex-col">
                <span className="text-gray-800 font-bold text-xl">{name}</span>
                <span className="text-gray-600">Quantity: {quantity}</span>
            </div>
            <span className="text-sm text-gray-500 italic">{category}</span>
        </li>
    );
};

export default Item;
