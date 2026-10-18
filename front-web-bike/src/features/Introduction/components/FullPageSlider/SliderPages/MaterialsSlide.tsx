"use client";
import React from "react";
import Image from "next/image";
import { Fingerprint, Vibrate } from "lucide-react";
import {
  useSlideAnimation,
  SlideProps,
} from "@/shared/hooks/useSlideAnimation";

const MaterialsSlide = ({ slideState = "active" }: SlideProps) => {
  const titleAnim = useSlideAnimation(slideState, "up", "delay-100");
  const textAnim = useSlideAnimation(slideState, "up", "delay-300");
  const imageAnim = useSlideAnimation(slideState, "left", "delay-500");
  const icon1Anim = useSlideAnimation(slideState, "up", "delay-[600ms]");
  const icon2Anim = useSlideAnimation(slideState, "up", "delay-[700ms]");

  return (
    <div className="w-full h-full text-white relative overflow-hidden">
      <div
        className={`absolute right-[0%] bottom-[0%] w-[75%] h-[85%] z-10 pointer-events-none ${imageAnim}`}
      >
        <Image
          src="/Introduction/Materials/interface-view.svg"
          alt="Premium Motorcycle Interface"
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-contain object-right-bottom drop-shadow-2xl"
        />
      </div>

      <div className={`absolute left-[8%] top-[10%] z-20 ${titleAnim}`}>
        <h2 className="text-[8vw] font-black uppercase tracking-tight leading-[1.05] text-white">
          Premium Materials <br /> & Interface
        </h2>
      </div>

      <div
        className={`absolute left-[8%] top-[40%] z-20 max-w-[450px] ${textAnim}`}
      >
        <p className="text-[16px] text-zinc-300 leading-relaxed">
          <span className="uppercase text-white font-bold">
            Crafted Perfection:
          </span>{" "}
          Aerospace-grade carbon, sustainable titanium alloys, and bespoke
          textures define luxury. The advanced AI dashboard and biometric start
          system put total control at your fingertips, adapting to your every
          command.
        </p>
      </div>

      <div className="absolute left-[8%] top-[58%] z-20 flex flex-col gap-8">
        <div
          className={`flex items-center gap-5 group cursor-default ${icon1Anim}`}
        >
          <div className="text-orange-500 transition-transform duration-300 group-hover:scale-110">
            <Fingerprint size={36} strokeWidth={1.5} />
          </div>
          <span className="text-[12px] tracking-[0.15em] uppercase font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug">
            Biometric
            <br />
            Start
          </span>
        </div>

        <div
          className={`flex items-center gap-5 group cursor-default ${icon2Anim}`}
        >
          <div className="text-orange-500 transition-transform duration-300 group-hover:scale-110">
            <Vibrate size={36} strokeWidth={1.5} />
          </div>
          <span className="text-[12px] tracking-[0.15em] uppercase font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug">
            Haptic
            <br />
            Grips
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaterialsSlide;
