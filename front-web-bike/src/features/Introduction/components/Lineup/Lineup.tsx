import React from "react";
import { CardItem } from "@/components/CardItem/CardItem";
import { lineupSeed } from "../../data/seed";

export const Lineup = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#060507] py-24 px-[5%] lg:px-[8%] z-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-16 text-center">
          Montblanc Motors
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
          {lineupSeed.map((bike) => (
            <CardItem key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
};
