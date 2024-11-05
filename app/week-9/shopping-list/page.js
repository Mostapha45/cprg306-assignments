"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, loading } = useUserAuth(); // Get the user and loading state from the auth context
    const router = useRouter(); 

    // Redirect to the login page if user isnt logged in
    useEffect(() => {
        if (!loading && !user) {
            router.push("/week-9/shopping-list/authorization"); // Redirect to the redirection page
        }
    }, [user, loading, router]);

    // Return a loading message while the authentication state is being resolved
    if (loading) {
        return <p>Loading page...</p>;
    }

    // Return null if the user is being redirected
    if (!user) {
        return null;
    }

    // Function to add a new item to the shopping list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // Function to handle item selection and clean up item names
    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(",")[0] // Remove anything after a comma
            .replace(/[^a-zA-Z ]/g, "") // Remove emojis and special characters
            .trim(); // Remove leading/trailing spaces
        setSelectedItemName(cleanedName);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600">
            <h1 className="pl-2 text-xl font-bold">Week 9 Assignment</h1>
            <h1 className="pl-2 text-3xl font-bold">Shopping List</h1>

            <div className="flex space-x-4 p-4">
                {/* Grouped NewItem and ItemList components */}
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                {/* Display MealIdeas component with selectedItemName as ingredient */}
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </div>
    );
};

export default Page;
