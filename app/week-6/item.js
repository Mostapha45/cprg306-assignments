import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="bg-gray-800 text-white p-2 rounded-lg mb-2 w-1/2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <span className="text-sm text-gray-400">Buy {quantity} in {category}</span>
        </li>
    );
};

export default Item;
