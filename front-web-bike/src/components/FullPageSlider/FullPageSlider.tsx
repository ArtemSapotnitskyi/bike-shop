"use client";

import React, { useState, useEffect, useCallback } from "react";
import HeroSlide from "./SliderPages/HeroSlide";

interface FullPageSliderProps {
  children: React.ReactNode;
}

const FullPageSlider: React.FC<FullPageSliderProps> = ({ children }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <HeroSlide />
    </div>
  );
};

export default FullPageSlider;
