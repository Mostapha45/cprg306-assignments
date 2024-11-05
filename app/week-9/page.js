"use client";
import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const logout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    console.log(user);

    return (
        <div>
            <h1>Week 9 Assignment</h1>
            <h2>Authentication</h2>
    
            <div>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}! Your email address is {user.email}</p>
                        <button className="mt-4 px-5 py-2.5 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300"onClick={logout}>Sign Out</button>

                        <Link href="/week-9/shopping-list">
                            <button className="mt-4 px-5 py-2.5 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300">Go to Shopping List</button>
                        </Link>
                    </div>
                ) : (
                    <button onClick={login}>Sign In with GitHub</button>
                )}
            </div>
        </div>
    );
}

