import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Settings, Zap, Wind } from "lucide-react";
import { RentalCardProps } from "@/features/Bikes/types/bikesItems";

export const RentalCard: React.FC<RentalCardProps> = ({ bike }) => {
  return (
    <div className="relative bg-[#060507] border border-zinc-800 rounded-2xl p-6 group hover:border-orange-500/50 transition-colors duration-500 flex flex-col justify-between h-full">
      <div className="relative w-full h-[220px] bg-[#0a080c] border border-zinc-900 overflow-hidden rounded-xl mb-6 flex items-center justify-center">
        <div className="absolute text-white/[0.02] w-[100%] h-[100%] font-black text-6xl pointer-events-none select-none">
          <Image
            src="/Introduction/Hero/china_text.svg"
            alt="Background text"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>

        <div className="absolute w-[90%] h-[90%] pointer-events-none transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl z-10">
          <Image
            src={bike.image}
            alt={bike.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-black uppercase text-white leading-tight">
            {bike.name}
          </h3>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
            {bike.category}
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-xl font-black text-orange-500">
            ${bike.price}
          </div>
          <p className="text-[9px] text-zinc-500 uppercase tracking-widest">
            per day
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6 border-t border-zinc-800/50 pt-6">
        <div className="flex flex-col items-center gap-2">
          <Settings size={16} className="text-orange-500" strokeWidth={1.5} />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
            {bike.specs.transmission}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 border-l border-r border-zinc-800/50">
          <Zap size={16} className="text-orange-500" strokeWidth={1.5} />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
            {bike.specs.fuel}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Wind size={16} className="text-orange-500" strokeWidth={1.5} />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
            {bike.specs.cooling}
          </span>
        </div>
      </div>

      <Link
        href={`/bikes/${bike.id}`}
        className="w-full bg-transparent border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl transition-all duration-300 text-center block"
      >
        View Details
      </Link>
    </div>
  );
};
