import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The ID of the user whose items are to be fetched.
 * @returns {Promise<Array>} - An array of item objects containing the document ID and data.
 */
export const getItems = async (userId) => {
  try {
    const items = [];
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const itemsQuery = query(itemsCollectionRef);
    const querySnapshot = await getDocs(itemsQuery);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error fetching items: ", error);
    throw error;
  }
};

/**
 * Adds a new item to a specific user's list of items in Firestore.
 * @param {string} userId - The ID of the user to add the item to.
 * @param {Object} item - The item object to be added.
 * @returns {Promise<string>} - The ID of the newly created document.
 */
export const addItem = async (userId, item) => {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    throw error;
  }
};


