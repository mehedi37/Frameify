"use client";
import React, { useState } from "react";
import { products, demoUserReviews } from "@/middleware/data";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

interface ParticularProductProps {
  params: {
    id: number;
  };
}

export default function ParticularProduct({ params }: ParticularProductProps) {
  const product = products[params.id - 1];

  const [activeTab, setActiveTab] = useState("Product Details");

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            width={1800}
            height={1800}
            className="object-cover w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8">
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>
          <div className="mt-8 flex items-center">
            <p className="text-xl font-bold text-gray-600 dark:text-gray-300">
              {product.price}
            </p>
            <div className="flex ml-3 text-lg text-yellow-600">
              <p>{"⭐".repeat(5)}</p>
            </div>
          </div>

          <div className="mt-6">
            <button className="px-8 py-3 bg-blue-600 text-white text-md font-medium rounded hover:bg-blue-500 shadow-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <a
              href="#"
              aria-current="page"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("Product Details");
              }}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "Product Details"
                  ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
            >
              Product Details
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("Review");
              }}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "Review"
                  ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
            >
              Review
            </a>
          </li>
        </ul>

        {activeTab === "Product Details" && (
          <div className="mt-8">
            <div className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              {product.details_description}
            </div>
          </div>
        )}

        {activeTab === "Review" && (
          <div className="mt-8">
            <div className="mt-4">
              {demoUserReviews.map((review, index) => (
                <div key={index} className="mb-4 p-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <FaUserCircle className="w-8 h-8 text-gray-500" />
                    <span className="font-semibold text-gray-300 mx-3">
                      {review.name}
                    </span>
                    <div className="ml-2 text-yellow-500">
                      <p>{"⭐".repeat(review.rating)}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-500 mx-10">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
