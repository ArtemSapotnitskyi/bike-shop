import FullPageSlider from "@/components/FullPageSlider/FullPageSlider";
import HeroSlide from "@/components/FullPageSlider/SliderPages/HeroSlide";

export default function Introduction() {
  return (
    <main className="w-full">
      <FullPageSlider>
        <HeroSlide />
      </FullPageSlider>
    </main>
  );
}
