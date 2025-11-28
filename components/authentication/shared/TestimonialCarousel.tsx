"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/general";

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // 30 minutes
  useEffect(() => {
    if (!emblaApi) return;

    // Change testimonial on every refresh
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    emblaApi.scrollTo(randomIndex);
  }, [emblaApi]);

  return (
    <div className="relative flex-col justify-center items-center w-full overflow-hidden rounded-r-3xl bg-[#F9BABA] lg:flex hidden">
      <div ref={emblaRef} className="overflow-hidden w-full">
        <div className="flex">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-none w-full flex flex-col items-center text-center px-10"
            >
              <div className="flex gap-2 mb-6">
                <Quote className="text-black" />
                <p className="text-3xl text-black italic max-w-[500px]">
                  {testimonial.quote}
                </p>
              </div>
              <Avatar className="mb-4 w-24 h-24">
                {testimonial.avatarSrc ? (
                  <AvatarImage
                    src={testimonial.avatarSrc}
                    alt={testimonial.name}
                  />
                ) : (
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                )}
              </Avatar>
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#E51919] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E51919] rounded-full opacity-15 translate-x-1/3 translate-y-1/3 animate-pulse"></div>
    </div>
  );
};

export default TestimonialCarousel;
