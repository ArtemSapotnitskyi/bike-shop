import React from "react";
import Image from "next/image";
import { Waves, Gauge, Zap, Timer, Weight } from "lucide-react";
import { BikeData } from "@/features/Introduction/types/cardItem";

interface CardItemProps {
  bike: BikeData;
}

export const CardItem: React.FC<CardItemProps> = ({ bike }) => {
  const CustomIcon =
    bike.customStatLabel.toUpperCase() === "WEIGHT" ? Weight : Timer;

  return (
    <div className="relative bg-[#060507] border border-orange-500/30 rounded-2xl p-8 group hover:border-orange-500 transition-colors duration-500 flex flex-col justify-between min-h-[340px]">
      <div className="absolute right-[-2%] top-[10%] w-[50%] h-[80%] z-10 pointer-events-none transition-transform duration-700 group-hover:scale-105">
        <Image
          src={bike.image}
          alt={bike.name}
          fill
          className="object-contain object-right"
          sizes="(max-width: 768px) 45vw, 20vw"
        />
      </div>

      <div className="relative z-20 w-[60%] flex flex-col h-full">
        <h3 className="text-2xl lg:text-3xl font-black uppercase leading-tight mb-2 whitespace-pre-line text-white">
          {bike.name}
        </h3>

        <div className="grid grid-cols-2 gap-y-2 gap-x-2 mb-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500">
              <Waves size={14} />
              <span className="text-[9px] tracking-widest uppercase">
                Range
              </span>
            </div>
            <span className="text-lg font-bold text-white">{bike.range}</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500">
              <Gauge size={14} />
              <span className="text-[9px] tracking-widest uppercase">
                Top Speed
              </span>
            </div>
            <span className="text-lg font-bold text-white">{bike.speed}</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500">
              <Zap size={14} />
              <span className="text-[9px] tracking-widest uppercase">
                Power
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-white">{bike.power}</span>
              {bike.powerExtra && (
                <span className="text-[10px] text-zinc-500 mt-1">
                  {bike.powerExtra}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500">
              <CustomIcon size={14} />
              <span className="text-[9px] tracking-widest uppercase">
                {bike.customStatLabel}
              </span>
            </div>
            <span className="text-lg font-bold text-white">
              {bike.customStatValue}
            </span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <p className="text-xs text-zinc-400">{bike.description}</p>
          <button className="self-start px-6 py-2 border border-zinc-600 rounded-md text-xs font-bold uppercase tracking-widest text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition-colors">
            Дізнатися більше
          </button>
        </div>
      </div>
    </div>
  );
};
