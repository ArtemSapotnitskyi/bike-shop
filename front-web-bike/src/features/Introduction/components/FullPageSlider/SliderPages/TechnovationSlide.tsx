import React from "react";
import Image from "next/image";

const TechnovationSlide = () => {
  return (
    <div className="w-full h-full text-white relative overflow-hidden">
      <div className="absolute left-[8%] top-[8%] z-20">
        <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-none text-white">
          Technovation
        </h2>
      </div>

      <div className="absolute left-[10%] top-[22%] w-[58%] h-[60%] z-10 pointer-events-none">
        <Image
          src="/Technovation/engine-exploded.png"
          alt="Quantum Motor Exploded View"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-contain"
        />
      </div>

      <div className="absolute right-[5%] top-[25%] w-[280px] z-20 group">
        <div className="flex flex-col pb-4 border-b border-orange-500/30 group-hover:border-orange-500 transition-colors duration-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase font-bold">
              Acceleration
            </span>
            <span className="text-orange-500 text-[10px] tracking-widest font-mono">
              [ 0-100 KM/H ]
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-6xl font-black uppercase tracking-tighter text-white">
              1.9
            </span>
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Sec
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 leading-snug">
            Twin quantum stators deliver instantaneous torque translation to the
            rear wheel assembly.
          </p>
        </div>
      </div>

      <div className="absolute right-[8%] top-[50%] -translate-y-1/2 w-[280px] z-20 group">
        <div className="flex flex-col pb-4 border-b border-orange-500/30 group-hover:border-orange-500 transition-colors duration-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase font-bold">
              Range / Est.
            </span>
            <span className="text-orange-500 text-[10px] tracking-widest font-mono">
              [ HIGH-DENSITY ]
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-6xl font-black uppercase tracking-tighter text-white">
              550
            </span>
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              KM
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 leading-snug">
            Solid-state battery cells optimized via AI for maximum thermal
            efficiency and endurance.
          </p>
        </div>
      </div>

      <div className="absolute right-[12%] bottom-[20%] w-[280px] z-20 group">
        <div className="flex flex-col pb-4 border-b border-orange-500/30 group-hover:border-orange-500 transition-colors duration-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase font-bold">
              Charging Time
            </span>
            <span className="text-orange-500 text-[10px] tracking-widest font-mono">
              [ 0-80% CAP ]
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-6xl font-black uppercase tracking-tighter text-white">
              15
            </span>
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Min
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 leading-snug">
            Hyper-charge infrastructure compatibility ensures minimal downtime
            during transit.
          </p>
        </div>
      </div>

      <div className="absolute left-[8%] bottom-[12%] z-20 max-w-2xl">
        <p className="text-[15px] text-zinc-300 leading-relaxed">
          <span className="uppercase text-white font-semibold">
            Intelligent Power:
          </span>{" "}
          A next-generation quantum motor delivers instant, accessible power.
          The adaptive AI system continuously optimizes performance based on
          road and rider data, integrating seamless haptic feedback.
        </p>
      </div>
    </div>
  );
};

export default TechnovationSlide;
