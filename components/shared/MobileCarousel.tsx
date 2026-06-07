'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileCarouselProps {
  children: React.ReactNode[];
}

export default function MobileCarousel({ children }: MobileCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);

    // Slowly autoplay
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    // Pause on user interaction
    const stopAutoplay = () => {
      clearInterval(intervalId);
    };

    emblaApi.on('pointerDown', stopAutoplay);

    return () => {
      clearInterval(intervalId);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {children.map((child, index) => (
            <div className="embla__slide" key={index}>
              <div className="h-full p-1">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6 px-1">
        {/* Dots */}
        <div className="flex space-x-1.5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full border border-text-dark transition-all duration-200 ${
                index === selectedIndex ? 'bg-secondary w-6' : 'bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={scrollPrev}
            className="p-2.5 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 text-text-dark transition-all duration-250 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollNext}
            className="p-2.5 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 text-text-dark transition-all duration-250 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
