"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Settings, Zap, Wind, CheckCircle, Gauge } from "lucide-react";
import { bikesSeed } from "@/features/Bikes/data/seed";
import { RentalCard } from "@/components/RentalCard/RentalCard";
import { EQUIPMENT_LIST } from "@/features/Bikes/data/seed";

export default function BikeDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const bike = bikesSeed.find((b) => b.id === id);

  const gallery = bike ? [bike.image, bike.image, bike.image] : [];
  const [mainImage, setMainImage] = useState(gallery[0] || "");
  if (!bike) {
    return (
      <div className="min-h-screen bg-[#060507] text-white flex flex-col">
        <div className="flex-grow flex items-center justify-center flex-col">
          <h1 className="text-4xl font-black uppercase mb-4 text-orange-500">
            Vehicle Not Found
          </h1>
          <Link
            href="/bikes"
            className="text-zinc-400 hover:text-white underline"
          >
            Return to Lineup
          </Link>
        </div>
      </div>
    );
  }

  const otherBikes = bikesSeed.filter((b) => b.id !== bike.id).slice(0, 3);
  return (
    <div className="min-h-screen bg-[#060507] text-white flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-[5%] lg:px-[8%] max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 mb-19">
          <div className="w-full lg:w-3/5 flex flex-col gap-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
                  {bike.name}
                </h1>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-2">
                  {bike.category} Series
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-orange-500 leading-none">
                  ${bike.price}
                </span>
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest whitespace-nowrap">
                  / day
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#0a080c] border border-zinc-900 rounded-3xl flex items-center justify-center overflow-hidden group">
              <div className="absolute top-[5%] left-[5%] text-white/[0.02] font-black text-8xl pointer-events-none select-none">
                オートバイ
              </div>
              <div className="relative w-[85%] h-[85%] z-10 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={mainImage}
                  alt={bike.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            <div className="flex justify-center gap-4 overflow-x-auto py-6 px-4 scrollbar-hide">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`relative w-24 h-20 md:w-32 md:h-24 flex-shrink-0 bg-[#0a080c] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    mainImage === img
                      ? "border-orange-500 scale-105 z-10 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx}`}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col gap-10 pt-2">
            <div>
              <h3 className="text-xl font-black uppercase text-white mb-6 tracking-wide">
                Technical Specification
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a080c] border border-zinc-800/50 rounded-2xl p-5 flex flex-col gap-4">
                  <Settings
                    size={24}
                    className="text-orange-500"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">
                      Gear Box
                    </div>
                    <div className="text-sm text-white font-bold uppercase">
                      {bike.specs.transmission}
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a080c] border border-zinc-800/50 rounded-2xl p-5 flex flex-col gap-4">
                  <Zap
                    size={24}
                    className="text-orange-500"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">
                      Power Type
                    </div>
                    <div className="text-sm text-white font-bold uppercase">
                      {bike.specs.fuel}
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a080c] border border-zinc-800/50 rounded-2xl p-5 flex flex-col gap-4">
                  <Wind
                    size={24}
                    className="text-orange-500"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">
                      Cooling
                    </div>
                    <div className="text-sm text-white font-bold uppercase">
                      {bike.specs.cooling}
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a080c] border border-zinc-800/50 rounded-2xl p-5 flex flex-col gap-4">
                  <Gauge
                    size={24}
                    className="text-orange-500"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">
                      Top Speed
                    </div>
                    <div className="text-sm text-white font-bold uppercase">
                      290 KM/H
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black uppercase tracking-widest text-sm py-5 rounded-2xl transition-colors duration-300 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              Rent a Bike
            </button>

            <div>
              <h3 className="text-xl font-black uppercase text-white mb-6 tracking-wide">
                Bike Equipment
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                {EQUIPMENT_LIST.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-orange-500 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-10 border-b border-zinc-800/50 pb-6">
            <h2 className="text-3xl font-black uppercase tracking-wide">
              Other Vehicles
            </h2>
            <Link
              href="/bikes"
              className="text-xs font-bold text-orange-500 uppercase tracking-widest hover:text-orange-400 transition-colors flex items-center gap-2"
            >
              View All <span>&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherBikes.map((otherBike) => (
              <RentalCard key={otherBike.id} bike={otherBike} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
