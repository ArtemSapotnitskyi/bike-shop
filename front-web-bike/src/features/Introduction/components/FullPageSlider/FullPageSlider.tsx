"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface FullPageSliderProps {
  children: React.ReactNode;
}
export default function FullPageSlider({ children }: FullPageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLocked, setIsLocked] = useState(true);

  const isAnimating = useRef(false);

  const slides = React.Children.toArray(children);
  const totalSlides = slides.length;
  const animationDuration = 1000;

  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLocked]);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isLocked) {
        if (window.scrollY <= 0 && e.deltaY < 0) {
          setIsLocked(true);
        }
        return;
      }

      e.preventDefault();

      if (isAnimating.current) return;

      if (e.deltaY > 50) {
        if (currentSlide < totalSlides - 1) {
          isAnimating.current = true;
          setCurrentSlide((prev) => prev + 1);
          setTimeout(() => {
            isAnimating.current = false;
          }, animationDuration);
        } else {
          setIsLocked(false);
        }
      } else if (e.deltaY < -50) {
        if (currentSlide > 0) {
          isAnimating.current = true;
          setCurrentSlide((prev) => prev - 1);
          setTimeout(() => {
            isAnimating.current = false;
          }, animationDuration);
        }
      }
    },
    [isLocked, currentSlide, totalSlides, animationDuration],
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  const handlePrev = () => {
    if (isAnimating.current || currentSlide === 0) return;
    isAnimating.current = true;
    setCurrentSlide((prev) => prev - 1);
    setTimeout(() => {
      isAnimating.current = false;
    }, animationDuration);
  };

  const handleNext = () => {
    if (isAnimating.current || currentSlide === totalSlides - 1) return;
    isAnimating.current = true;
    setCurrentSlide((prev) => prev + 1);
    setTimeout(() => {
      isAnimating.current = false;
    }, animationDuration);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#060507]">
      {slides.map((slide, index) => {
        let slideState: "active" | "prev" | "next" = "next";
        if (index === currentSlide) slideState = "active";
        else if (index < currentSlide) slideState = "prev";

        return (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              slideState === "active"
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {React.isValidElement(slide)
              ? React.cloneElement(slide as React.ReactElement<any>, {
                  slideState,
                })
              : slide}
          </div>
        );
      })}

      <div className="absolute left-[2%] bottom-[8%] z-50 flex flex-col gap-8">
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="text-zinc-500 hover:text-white transition-colors text-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {"<"}
          </button>

          <span className="text-white font-bold text-sm">
            {currentSlide + 1}
          </span>

          <div className="w-32 h-[4px] rounded-xl bg-zinc-800 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-xl bg-orange-500 transition-all duration-500 ease-in-out"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            ></div>
          </div>

          <span className="text-zinc-500 font-bold text-sm">{totalSlides}</span>

          <button
            onClick={handleNext}
            disabled={currentSlide === totalSlides - 1}
            className="text-zinc-500 hover:text-white transition-colors text-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
