"use client";
import React from "react";
import {useRouter} from "next/navigation";

export default function Authorization() {
    const router = useRouter();

    const handleBackToLogin = () => {
        router.push("/week-9");
        };
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white flex flex-col justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-black max-w-md w-full mx-auto">
                <p className="text-lg font-semibold text-red-600">
                    You need to be signed in to access the shopping list.
                </p>
                <button
                    onClick={handleBackToLogin}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Back to Log In
                </button>
            </div>
        </div>
    );
}
