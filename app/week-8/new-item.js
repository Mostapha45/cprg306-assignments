"use client";

import { useState } from 'react';

function NewItem({onAddItem}) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Produce');
    const [quantity, setQuantity] = useState(1);


    const generateRandomId = () => {
        return Math.random().toString(36).substr(2, 9); // Generates a random string of length 9
    };


    const increment = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity < 20) {
                return prevQuantity + 1;
            }
            return prevQuantity;
        });
    };

    const decrement = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity > 1) {
                return prevQuantity - 1;
            }
            return prevQuantity;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const NewItem = {
            id: generateRandomId(),
            name,
            quantity,
            category,
        };

        onAddItem(NewItem); // Call the parent component's function to add the item to the list



        console.log(NewItem);

        
        // Reset form fields
        setName('');
        setQuantity(1);
        setCategory('Produce');
    };

    return (
        <div className="flex flex-col p-4">
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 text-black rounded"
                    />
                </div>

                {/* Quantity control and Category field in the same row and adding space between the two*/}
                <div className="flex items-center justify-between">
                    {/* Quantity control */}
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="btn-primary bg-blue-500 font-semibold py-2 px-4 rounded-l hover:bg-blue-600 disabled:bg-gray-400"
                            onClick={decrement}
                            disabled={quantity === 1}
                        >
                            -
                        </button>
                        <span className="mx-4 text-lg font-medium">{quantity}</span>
                        <button
                            type="button"
                            className="btn-primary bg-blue-500 font-semibold py-2 px-4 rounded-r hover:bg-blue-600 disabled:bg-gray-400"
                            onClick={increment}
                            disabled={quantity === 20}
                        >
                            +
                        </button>
                    </div>

                    {/* Category field for the user to choose from*/}
                    <div>
                        <label className="block text-sm font-medium text-white">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="p-2 border border-gray-300 rounded text-black"
                        >
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {/* Submit button so that the user can submit their new item*/}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewItem;
