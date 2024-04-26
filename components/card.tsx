import Image from "next/image";
import React from "react";
import Carousel from "@/components/carousel";

export default function Card() {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="story-section p-8">
            <h1 className="text-4xl font-bold mb-4">
              The Story Through Our Lenses
            </h1>
            <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mb-4"></div>

            <p className="text-gray-700 mb-6">
              Imagine yourself wandering through a dusty antique shop, sunlight
              filtering through stained glass, illuminating forgotten treasures.
            </p>
            <p className="text-gray-700 mb-6">
              A worn leather satchel catches your eye, filled with faded
              photographs and gleaming lenses. As you run your fingers across
              the cool metal, memories flood back - a child laughter echoing,
              the sun setting over a breathtaking vista
            </p>
            <p className="text-gray-700 mb-6">
              At <span className=" text-gray-400">Frameify</span>, we believe
              capturing these moments is not just about technology, it is about
              storytelling. We are your modern-day apothecary, curating a
              selection of the finest photographic tools—cameras that whisper of
              adventure, lenses that promise to unveil hidden beauty, and
              accessories waiting to become companions on your creative
              expeditions.
            </p>
            <p className="text-gray-700">
              Here, you would not just find equipment, you will find the spark
              to ignite your next photographic masterpiece. Let us help you
              transform fleeting moments into timeless stories.
            </p>
          </div>
          <div className="product-image">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
