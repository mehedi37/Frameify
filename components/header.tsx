"use client";
import Link from "next/link";

import React, { useState } from "react";
import { SiHypothesis } from "react-icons/si";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-neutral-100">
              Frameify
            </span>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`md:flex md:items-center md:justify-between ${
              isOpen ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <Link href="/" className="text-neutral-100 hover:text-gray-600">
                Home
              </Link>
              <Link
                href="/products"
                className="text-neutral-100 hover:text-gray-600"
              >
                Shop
              </Link>
              <Link
                href="/aboutUs"
                className="text-neutral-100 hover:text-gray-600"
              >
                About Us
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
