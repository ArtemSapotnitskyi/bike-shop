import FullPageSlider from "@/features/Introduction/components/FullPageSlider/FullPageSlider";
import HeroSlide from "@/features/Introduction/components/FullPageSlider/SliderPages/HeroSlide";
import GenesisSlide from "@/features/Introduction/components/FullPageSlider/SliderPages/GenesisSlide";
import MaterialsSlide from "@/features/Introduction/components/FullPageSlider/SliderPages/MaterialsSlide";
import { Lineup } from "@/features/Introduction/components/Lineup/Lineup";

export default function Introduction() {
  return (
    <main className="w-full">
      <FullPageSlider>
        <HeroSlide />
        <GenesisSlide />
        <MaterialsSlide />
      </FullPageSlider>
      <Lineup />
    </main>
  );
}
