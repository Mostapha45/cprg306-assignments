"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service"; // Import Firestore functions
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

const Page = () => {
    const [items, setItems] = useState([]); // Initialize with an empty array
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, loading } = useUserAuth(); // Get the user and loading state from the auth context
    const router = useRouter();

    // Redirect to the login page if user isn't logged in
    useEffect(() => {
        if (!loading && !user) {
            router.push("/week-10/shopping-list/authorization"); // Redirect to the authorization page
        }
    }, [user, loading, router]);

    // Load shopping list items
    const loadItems = async () => {
        try {
            if (user) {
                const userItems = await getItems(user.uid); // Fetch items for the logged-in user
                setItems(userItems); // Set the fetched items to state
            }
        } catch (error) {
            console.error("Error loading items:", error);
        }
    };

    // Call loadItems when the component mounts
    useEffect(() => {
        loadItems();
    }, [user]); // Run whenever the user changes

    // Function to add a new item to the shopping list
    const handleAddItem = async (newItem) => {
        try {
            if (user) {
                const newItemId = await addItem(user.uid, newItem); // Add item to Firestore
                setItems([...items, { id: newItemId, ...newItem }]); // Add new item to the state
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    // Function to handle item selection and clean up item names
    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(",")[0] // Remove anything after a comma
            .replace(/[^a-zA-Z ]/g, "") // Remove emojis and special characters
            .trim(); // Remove leading/trailing spaces
        setSelectedItemName(cleanedName);
    };

    // Return a loading message while the authentication state is being resolved
    if (loading) {
        return <p>Loading page...</p>;
    }

    // Return null if the user is being redirected
    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600">
            <h1 className="pl-2 text-xl font-bold">Week 10 Assignment</h1>
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
