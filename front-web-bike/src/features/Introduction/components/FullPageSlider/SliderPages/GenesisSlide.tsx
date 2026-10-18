"use client";
import React from "react";
import Image from "next/image";
import {
  useSlideAnimation,
  SlideProps,
} from "@/shared/hooks/useSlideAnimation";

export default function GenesisSlide({ slideState = "active" }: SlideProps) {
  const textAnim = useSlideAnimation(slideState, "up", "delay-100");
  const sketchAnim = useSlideAnimation(slideState, "left", "delay-300");
  const mainBikeAnim = useSlideAnimation(slideState, "right", "delay-500");
  const stat1Anim = useSlideAnimation(slideState, "up", "delay-[600ms]");
  const stat2Anim = useSlideAnimation(slideState, "up", "delay-[700ms]");
  const stat3Anim = useSlideAnimation(slideState, "up", "delay-[800ms]");

  return (
    <div className="w-full h-full text-white relative overflow-hidden flex items-center">
      <div className={`absolute left-[8%] top-[15%] z-20 max-w-lg ${textAnim}`}>
        <h2 className="text-7xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8">
          Genesis & <br /> Heritage
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed pr-10">
          <span className="uppercase text-white font-semibold">
            From Concept to Performance:
          </span>{" "}
          The Masterpiece started as a bold vision, blending corospace
          technology with red-panel craftsmanship. Each component was refined
          over countless digital and physical iterations. A legacy of precision,
          reimagined for the cybernetic age.
        </p>
      </div>

      <div
        className={`absolute left-[9%] bottom-[10%] w-[50%] h-[55%] z-10 pointer-events-none flex flex-row ${sketchAnim}`}
      >
        <Image
          src="/Introduction/Genesis/bike-sketch.svg"
          alt="Motorcycle Sketch Wireframe"
          fill
          className="object-contain object-bottom opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-[10%] via-[#060507]/60 to-[#060507] to-[85%]"></div>
      </div>

      <div
        className={`absolute right-[5%] top-[10%] w-[55%] h-[65%] z-30 pointer-events-none ${mainBikeAnim}`}
      >
        <Image
          src="/Introduction/Genesis/bike-rear.svg"
          alt="Montblanc Masterpiece Rear View"
          fill
          className="object-contain drop-shadow-2xl -scale-x-100"
        />
      </div>

      <div className="absolute right-[2%] bottom-[15%] z-20 flex flex-row gap-8">
        <div className={`w-[200px] group cursor-default ${stat1Anim}`}>
          <div className="flex flex-col pb-3 h-full border-b border-orange-500/30 group-hover:border-orange-500 transition-colors duration-500">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-zinc-500 text-[9px] tracking-[0.2em] uppercase font-bold">
                Accelerat
              </span>
              <span className="text-orange-500 text-[9px] tracking-widest font-mono">
                [ 0-100 KM/H ]
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-4xl font-black uppercase tracking-tighter text-white">
                1.9
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Sec
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 leading-snug">
              Twin quantum stators deliver instant torque translation to the
              rear assembly.
            </p>
          </div>
        </div>

        <div className={`w-[200px] group cursor-default ${stat2Anim}`}>
          <div className="flex flex-col pb-3 h-full border-b border-orange-500/30 group-hover:border-orange-500 transition-colors duration-500">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-zinc-500 text-[9px] tracking-[0.2em] uppercase font-bold">
                Range / Est.
              </span>
              <span className="text-orange-500 text-[9px] tracking-widest font-mono">
                [ HIGH-DENSITY ]
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-4xl font-black uppercase tracking-tighter text-white">
                550
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                KM
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 leading-snug">
              Solid-state cells optimized via AI for maximum thermal efficiency
              and endurance.
            </p>
          </div>
        </div>

        <div className={`w-[200px] group cursor-default ${stat3Anim}`}>
          <div className="flex flex-col pb-3 h-full border-b border-orange-500/30 group-hover:border-orange-500 transition-colors duration-500">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-zinc-500 text-[9px] tracking-[0.2em] uppercase font-bold">
                Charging Time
              </span>
              <span className="text-orange-500 text-[9px] tracking-widest font-mono">
                [ 0-80% CAP ]
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-1">
              <span className="text-4xl font-black uppercase tracking-tighter text-white">
                15
              </span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Min
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 leading-snug">
              Hyper-charge infrastructure compatibility ensures minimal downtime
              during transit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
