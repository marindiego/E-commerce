//Components
import Hero from "../Hero";
import Categories from "../Categories";
import Products from "../ProductsHome";

// vendor
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 bg-backgroundColor">
      <Hero />
      <Categories />
      <Products />
    </main>
  );
}
