import React from "react";
import Image from "next/image";

const HeroSlide = () => {
  return (
    <div className="w-full h-full text-white relative overflow-hidden flex items-center">
      <div className="absolute top-[70%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] text-center z-3 pointer-events-none opacity-80 z-10">
        <Image
          src="/Introduction/china_text.svg"
          alt="Background text"
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div className="absolute left-[-15%] top-[5%] w-[90%] h-[70%] z-3">
        <Image
          src="/Introduction/hero_1.svg"
          alt="Montblanc Masterpiece Motorcycle"
          fill
          priority
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div className="absolute left-[50%] top-[15%] w-32 h-32 z-20 pointer-events-none">
        <Image
          src="/Introduction/circular-text.svg"
          alt="Motorcycle Montblanc Text"
          fill
          className="animate-spin-slow opacity-80 object-contain"
        />
      </div>

      <div className="absolute right-[16%] top-[8%] w-[25%] h-[83%]  flex flex-col justify-between z-10">
        <div className="relative w-full h-[60%] hover:h-[65%] transition-all flex items-center justify-center">
          <Image
            src="/Introduction/bike-front.svg"
            className="object-contain"
            alt="Front details"
            fill
          />
        </div>

        <div className="relative w-full  h-[45%] hover:h-[50%] transition-all flex items-center justify-center">
          <Image
            src="/Introduction/bike-seat.svg"
            className="object-contain "
            alt="Front details"
            fill
          />
        </div>
      </div>

      <div className="absolute bg-[#060507] p-8 right-[2%] bottom-[5%] flex flex-col gap-14 z-20 shadow-[-60px_0_40px_rgba(0,0,0,0.9)]">
        <div className="flex gap-4">
          <div
            className="text-[10px] text-zinc-500 uppercase tracking-widest rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Top Speed
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">
              6-Speed Constant-Mesh
            </span>
            <span className="text-4xl font-bold uppercase">169 MPH</span>
            <span className="text-[13px] text-zinc-500">272 KM/H</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div
            className="text-[10px] text-zinc-500 uppercase tracking-widest rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Power
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">
              121 KW
            </span>
            <span className="text-4xl font-bold uppercase">162 HP</span>
            <span className="text-[13px] text-zinc-500">9,250 RPM</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div
            className="text-[10px] text-zinc-500 uppercase tracking-widest rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Torque
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">
              8,800 RPM
            </span>
            <span className="text-4xl font-bold uppercase">130.5 N·M</span>
            <span className="text-[13px] text-zinc-500">96.3 LBF·FT</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div
            className="text-[10px] text-zinc-500 uppercase tracking-widest rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Fuel Capacity
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">
              4.5 US GAL
            </span>
            <span className="text-4xl font-bold uppercase">17 L</span>
            <span className="text-[13px] text-zinc-500">3.7 IMP GAL</span>
          </div>
        </div>
      </div>

      <div className="absolute left-[2%] bottom-[5%] flex flex-row items-center gap-20">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <button className="text-zinc-500 hover:text-white transition-colors text-sm">
              {"<"}
            </button>
            <span className="text-white font-bold text-sm">1</span>
            <div className="w-32 h-[4px] rounded-xl bg-zinc-800 relative">
              <div className="absolute top-0 left-0 h-full rounded-xl w-[20%] bg-orange-500"></div>
            </div>
            <span className="text-zinc-500 font-bold text-sm">4</span>
            <button className="text-zinc-500 hover:text-white transition-colors text-sm">
              {">"}
            </button>
          </div>
        </div>

        <div className="max-w-xl text-[14px] text-zinc-400 leading-relaxed pr-[10%]">
          The bike comes in all black, with a relatively modern appeal. Chrome accents in just the right places make the bike stand out, while the black-on-black satin text on the bike’s fork-guards helps highlight the company’s branding without being too direct or obvious.
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
