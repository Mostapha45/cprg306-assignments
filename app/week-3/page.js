import React from 'react';
import ItemList from './item-list'; // Adjust the import path as necessary

function Page() {
  return (
    <main className="min-h-screen bg-blue-100 p-8">
      <h1 className="text-5xl font-extrabold text-left mb-10 text-blue-900 bg-blue-100">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;
