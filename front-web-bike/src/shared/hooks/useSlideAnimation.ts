export type SlideState = "active" | "prev" | "next";

export interface SlideProps {
  slideState?: SlideState;
}

export const useSlideAnimation = (
  slideState: SlideState = "active",
  direction: "up" | "down" | "left" | "right" = "up",
  delayClass: string = "delay-0",
) => {
  const base = `transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${delayClass}`;

  if (slideState === "active") {
    return `${base} opacity-100 translate-x-0 translate-y-0 scale-100`;
  }

  let transform = "";
  if (direction === "up") {
    transform = slideState === "next" ? "translate-y-40" : "-translate-y-40";
  } else if (direction === "down") {
    transform = slideState === "next" ? "-translate-y-40" : "translate-y-40";
  } else if (direction === "left") {
    transform = slideState === "next" ? "translate-x-48" : "-translate-x-48";
  } else if (direction === "right") {
    transform = slideState === "next" ? "-translate-x-48" : "translate-x-48";
  }

  return `${base} opacity-0 ${transform} scale-95`;
};
