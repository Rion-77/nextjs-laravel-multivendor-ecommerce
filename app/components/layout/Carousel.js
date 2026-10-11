// components/Carousel.tsx
"use client";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ children }) {
  //   carousel initialization and options
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true, // free scrolling instead of snapping to slides
    containScroll: "trimSnaps", // no empty space at the ends
    slidesToScroll: 1, // or "auto" to scroll a full viewport at a time
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1200px)": { slidesToScroll: "auto" },
    },
    startIndex: 0,
    axis: "x",
    direction: "ltr",
    skipSnaps: false,
    duration: 25,
  });

  

  return (
    <>
      <div className="wrap-x overflow-hidden" ref={emblaRef}>
        <div className="product-grid flex-nowrap">{children}</div>
        <button onClick={() => emblaApi?.scrollPrev()}>Prev</button>
        <button onClick={() => emblaApi?.scrollNext()}>Next</button>
      </div>
    </>
  );
}
