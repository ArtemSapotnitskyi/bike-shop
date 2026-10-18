"use client";
import Image from "next/image";
import {
  useSlideAnimation,
  SlideProps,
} from "@/shared/hooks/useSlideAnimation";

export default function HeroSlide({ slideState = "active" }: SlideProps) {
  //Animations
  const bgTextAnim = useSlideAnimation(slideState, "up", "delay-100");
  const mainBikeAnim = useSlideAnimation(slideState, "left", "delay-300");
  const spinTextAnim = useSlideAnimation(slideState, "up", "delay-500");
  const rightGalleryAnim = useSlideAnimation(slideState, "right", "delay-500");
  const statsAnim = useSlideAnimation(slideState, "up", "delay-[700ms]");
  const descAnim = useSlideAnimation(slideState, "up", "delay-[600ms]");

  return (
    <div className="w-full h-full text-white relative overflow-hidden flex items-center">
      <div
        className={`absolute top-[70%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] text-center z-3 pointer-events-none opacity-80 z-10 ${bgTextAnim}`}
      >
        <Image
          src="/Introduction/Hero/china_text.svg"
          alt="Background text"
          fill
          priority
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div
        className={`absolute left-[-15%] top-[5%] w-[90%] h-[70%] z-3 ${mainBikeAnim}`}
      >
        <Image
          src="/Introduction/Hero/hero_1.svg"
          alt="Montblanc Masterpiece Motorcycle"
          fill
          priority
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div
        className={`absolute left-[50%] top-[15%] w-32 h-32 z-20 pointer-events-none ${spinTextAnim}`}
      >
        <Image
          src="/Introduction/Hero/circular-text.svg"
          alt="Motorcycle Montblanc Text"
          fill
          priority
          className="animate-spin-slow opacity-80 object-contain"
        />
      </div>

      <div
        className={`absolute right-[16%] top-[8%] w-[25%] h-[83%] flex flex-col justify-between z-10 ${rightGalleryAnim}`}
      >
        <div className="relative w-full h-[60%] hover:h-[65%] transition-all flex items-center justify-center">
          <Image
            src="/Introduction/Hero/bike-front.svg"
            className="object-contain"
            alt="Front details"
            fill
            priority
          />
        </div>

        <div className="relative w-full h-[45%] hover:h-[50%] transition-all flex items-center justify-center">
          <Image
            src="/Introduction/Hero/bike-seat.svg"
            className="object-contain"
            alt="Front details"
            fill
            priority
          />
        </div>
      </div>

      <div
        className={`absolute bg-[#060507] p-8 right-[2%] bottom-[5%] flex flex-col gap-14 z-20 shadow-[-60px_0_40px_rgba(0,0,0,0.9)] ${statsAnim}`}
      >
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

      <div
        className={`absolute left-[22%] bottom-[5%] flex flex-row items-center gap-20 ${descAnim}`}
      >
        <div className="max-w-xl text-[14px] text-zinc-400 leading-relaxed pr-[10%]">
          The bike comes in all black, with a relatively modern appeal. Chrome
          accents in just the right places make the bike stand out, while the
          black-on-black satin text on the bike’s fork-guards helps highlight
          the company’s branding without being too direct or obvious.
        </div>
      </div>
    </div>
  );
}
