"use client";
import { testimonialData } from "@/components/data";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Testimonials = () => {
  const row1Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const infiniteScroll = (
      target: HTMLDivElement,
      direction: "left" | "right"
    ) => {
      const totalWidth = target.scrollWidth / 2;
      const speed = 120; // slower scrolling for readability

      const loop = () => {
        gsap.to(target, {
          x: direction === "left" ? `-${totalWidth}px` : 0,
          duration: speed,
          ease: "linear",
          onComplete: () => {
            gsap.set(target, {
              x: direction === "left" ? 0 : `-${totalWidth}px`,
            });
            loop();
          },
        });
      };

      loop();
    };

    if (row1Ref.current) infiniteScroll(row1Ref.current, "left");
  }, []);

  return (
    <div className="py-20 md:py-28 w-full mx-auto flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <div className="mb-10 z-10 relative text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-white">
          Designers{" "}
          <span className="font-['cursive'] italic text-slate-300 font-medium">
            Really Like
          </span>{" "}
          Our Community
        </h1>
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Real voices from real people who found value and inspiration here.
        </p>
      </div>

      {/* Row 1 */}
      <div className="w-full overflow-hidden mb-8 h-[180px] flex items-center">
        <div ref={row1Ref} className="flex gap-8 w-max">
          {[...testimonialData, ...testimonialData].map((t, i) => (
            <div
              key={i}
              className="relative min-w-[320px] md:min-w-[360px] backdrop-blur-md rounded-2xl shadow-lg shadow-black/20 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 p-5 flex items-start gap-4"
            >
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-slate-700/40 to-slate-800/40 -z-10"></div>

              <Image
                src={t.image}
                alt={t.name}
                width={60}
                height={60}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-700/50"
              />
              <div className="flex-1">
                <p className="text-sm md:text-base text-slate-100 italic leading-relaxed">
                  {t.comment}
                </p>
                <h3 className="mt-3 text-white font-semibold text-sm md:text-base">
                  {t.name}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
