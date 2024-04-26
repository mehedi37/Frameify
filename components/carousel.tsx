"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const images = [
  "/carousel-1.png",
  "/carousel-2.png",
  "/carousel-3.png",
  "/carousel-4.png",
  "/carousel-5.png",
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <Image
              src={src}
              width={800}
              height={800}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="py-2">
        {currentImage > 0 && (
          <button onClick={handlePrev} className="text-4xl">
            <CiCircleChevLeft />
          </button>
        )}
        {currentImage < images.length - 1 && (
          <button onClick={handleNext} className="text-4xl mx-2">
            <CiCircleChevRight />
          </button>
        )}
      </div>
    </div>
  );
}
