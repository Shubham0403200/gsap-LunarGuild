import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const HowStart = () => {
  return (
    <div className="py-16 md:py-24 px-6 max-w-4xl mx-auto relative">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
          How I started <br />
          <span className="italic font-['cursive'] text-slate-300 font-medium">
            entrepreneurship
          </span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 relative">
        {/* Left Side - Video Card */}
        <div className="relative group w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
            alt="how-start-image"
            width={600}
            height={400}
            className="w-full h-64 sm:h-80 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <PlayCircle className="w-16 h-16 text-white drop-shadow-lg cursor-pointer hover:scale-110 transition-transform" />
          </div>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h1 className="text-lg font-semibold">Origin of Lunar Builds</h1>
            <p className="text-sm opacity-80">Interview with Shubham</p>
          </div>
        </div>

        {/* Divider Line for Desktop */}
        <div className="hidden md:block w-px h-full bg-slate-700 opacity-50"></div>

        {/* Right Side - Description */}
        <div className="md:w-1/2 flex flex-col justify-center text-slate-300 space-y-4">
          <p className="leading-relaxed text-sm md:text-base">
            “When I started Lunar Builds, I had no idea where this journey would
            lead me. All I knew was that designers like me needed a platform to
            learn, grow, and connect with real opportunities. It was a mix of
            uncertainty and excitement—but looking back, taking that first step
            was the best decision of my life.”
          </p>

          {/* Divider Line for Mobile */}
          <div className="md:hidden w-full h-px bg-slate-700 opacity-50 my-4"></div>

          <div className="text-center md:text-left">
            <h1 className="text-lg font-semibold text-white">Shubham Awasthi</h1>
            <h3 className="text-sm opacity-70">Founder of Lunar Guild</h3>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Button className="mt-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform tracking-tight hover:bg-white/80 cursor-pointer">
          Join Our Lunar Community
        </Button>
      </div>
    </div>
  );
};

export default HowStart;
