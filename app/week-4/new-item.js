"use client";

import { useState } from 'react';

function QuantityControl() {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="flex flex-col items-center justify-center p-4">
        <div className="flex items-center">
            <button
                className="btn-primary bg-blue-500 text-white font-semibold py-2 px-4 rounded-l hover:bg-blue-600 disabled:bg-gray-400"
                onClick={decrement}
                disabled={quantity === 1}
            >
                -
            </button>
            <span className="mx-4 text-lg font-medium">{quantity}</span>
            <button
                className="btn-primary bg-blue-500 text-white font-semibold py-2 px-4 rounded-r hover:bg-blue-600 disabled:bg-gray-400"
                onClick={increment}
                disabled={quantity === 20}
            >
                +
            </button>
        </div>
    </div>
);
}
export default QuantityControl;
