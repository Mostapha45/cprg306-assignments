"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMealId, setSelectedMealId] = useState(null);
    const [mealDetails, setMealDetails] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);

    // Function to fetch meal ideas based on the ingredient
    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }
    }

    // Function to fetch meal details based on ingrident 
    async function fetchMealDetails(mealId) {
        try {
            setDetailsLoading(true);
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();
            setMealDetails(data.meals[0]);
            setDetailsLoading(false);
        } catch (error) {
            console.error("Error fetching meal details:", error);
            setDetailsLoading(false);
        }
    }

    // Load meal ideas when the  the ingredient changes
    useEffect(() => {
        async function loadMealIdeas() {
            setLoading(true);
            const meals = await fetchMealIdeas(ingredient);
            setMeals(meals);
            setLoading(false);
        }

        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    // Handle meal selection
    const handleMealClick = (mealId) => {
        if (selectedMealId === mealId) {
            // If the clicked meal is already selected, deselect it
            setSelectedMealId(null);
            setMealDetails(null);
        } else {
            // Otherwise, select the meal and fetch its details
            setSelectedMealId(mealId);
            fetchMealDetails(mealId);
        }
    };

    // Extract ingredients and measurements from meal details
    const getIngredients = () => {
        if (!mealDetails) return [];

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = mealDetails[`strIngredient${i}`];
            const measurement = mealDetails[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
                ingredients.push(`${measurement} ${ingredient}`.trim());
            }
        }
        return ingredients;
    };

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            {loading ? (
                <p>Loading...</p>
            ) : meals.length === 0 ? (
                <p>No meals found for &quot;{ingredient}&quot;.</p>
            ) : (
                <ul>
                    {meals.map((meal) => (
                        <li
                            key={meal.idMeal}
                            style={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginBottom: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                padding: "10px",
                            }}
                            onClick={() => handleMealClick(meal.idMeal)}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Image
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                />
                                <span>{meal.strMeal}</span>
                            </div>
                            {/* Show ingredients if this meal is selected */}
                            {selectedMealId === meal.idMeal && (
                                <div style={{ marginTop: "10px" }}>
                                    {detailsLoading ? (
                                        <p>Loading details...</p>
                                    ) : (
                                        <>
                                            <h4>Ingredients:</h4>
                                            <ul>
                                                {getIngredients().map((ingredient, index) => (
                                                    <li key={index}>{ingredient}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
