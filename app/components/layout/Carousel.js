// components/Carousel.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: () => 24, // active slide starts PEEK px from the left edge
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    dragFree: false,
    breakpoints: {
      "(min-width: 768px)": { align: () => 40 },
    },
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect).on("settle", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect).off("settle", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="position-relative">
      <div className="wrap-x overflow-hidden" ref={emblaRef}>
        <div className="product-grid d-flex flex-nowrap">{children}</div>
      </div>

      <button
        className={`carousel-btn carousel-btn-left ${!canPrev ? "is-hidden" : ""}`}
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous"
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      <button
        className={`carousel-btn carousel-btn-right ${!canNext ? "is-hidden" : ""}`}
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
