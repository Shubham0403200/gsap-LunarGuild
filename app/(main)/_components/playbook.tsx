import Image from "next/image";
import React from "react";

const Playbook = () => {
  return (
    <div className="relative py-24 md:py-32 max-w-4xl w-full mx-auto flex flex-col items-center overflow-hidden px-6">
      {/* Heading */}
      <div className="mb-10 z-10 relative text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-white">
          Coming Soon:{" "}
          <span className="font-['cursive'] italic text-slate-300 font-medium">
            Founder&apos;s Playbook
          </span>
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
          A complete guide to help aspiring founders build, grow, and scale their ideas into reality.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg border border-slate-700 group">
        <Image
          src="/assets/playbook.PNG"
          alt="playbook"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
        {/* Coming Soon Tag */}
        <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          Coming Soon
        </div>
      </div>
    </div>
  );
};

export default Playbook;
