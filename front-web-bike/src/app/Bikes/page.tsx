"use client";

import React, { useState } from "react";
import { bikesSeed } from "@/features/Bikes/data/seed";
import { RentalCard } from "@/components/RentalCard/RentalCard";
import { CATEGORIES } from "@/features/Bikes/types/bikesItems";

export default function BikesPage() {
  const [activeCategory, setActiveCategory] = useState("All Models");

  const filteredBikes = bikesSeed.filter((bike) => {
    if (activeCategory === "All Models") return true;
    return bike.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#060507] text-white flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-[5%] lg:px-[8%] max-w-[1440px] mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white">
            Select a <span className="text-orange-500">Vehicle Group</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-orange-500 text-black border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:border-orange-500/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <RentalCard key={bike.id} bike={bike} />
          ))}
        </div>

        {filteredBikes.length === 0 && (
          <div className="text-center text-zinc-500 py-20 font-bold uppercase tracking-widest text-sm">
            No vehicles found in this category.
          </div>
        )}
      </main>
    </div>
  );
}
