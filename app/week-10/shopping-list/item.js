import React from 'react';

const Item = ({ name, quantity, category, onSelect, isSelected }) => {
    return (
        <li
            onClick={onSelect} // Use the onSelect function passed as a prop
            className={`${
                isSelected ? 'bg-gray-600' : 'bg-gray-800' // Change background color based on isSelected
            } text-white p-2 rounded-lg mb-2 w-1/2 cursor-pointer transition duration-300`}
        >
            <h3 className="text-lg font-semibold">{name}</h3>
            <span className="text-sm text-gray-400">
                Buy {quantity} in {category}
            </span>
        </li>
    );
};

export default Item;
