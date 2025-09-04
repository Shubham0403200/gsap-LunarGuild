"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const companies = [
  { name: "Google", logo: "/assets/google.svg" },
  { name: "Nike", logo: "/assets/nike.svg" },
  { name: "Notion", logo: "/assets/notion.svg" },
  { name: "Meta", logo: "/assets/meta.svg" },
  { name: "Framer", logo: "/assets/framer.svg" },
];

const Companies = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const itemsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // when top of section hits bottom of viewport
        end: "bottom 20%",   // when bottom reaches 20%
        scrub: 0.5,
      },
    });

    // Animate heading
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate logos
    const children = itemsRef.current?.children;
    if (children) {
      tl.from(
        children,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }
  }, { scope: sectionRef });

  // Hover animation
  useEffect(() => {
    const children = itemsRef.current?.children;
    if (!children) return;

    Array.from(children).forEach((el) => {
      const element = el as HTMLElement;

      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale: 1.2,
          rotate: 5,
          y: -5,
          duration: 0.4,
          ease: "power3.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          rotate: 0,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto py-16 px-4 text-center bg-black"
    >
      <h2
        ref={headingRef}
        className="text-lg md:text-xl font-semibold text-slate-300 mb-6 md:mb-12"
      >
        We Collaborate with Your Favorite Companies
      </h2>

      <div
        ref={itemsRef}
        className="flex flex-wrap justify-center items-center gap-4 md:gap-12"
      >
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="w-12 h-12 md:w-16 md:h-16 cursor-pointer"
          >
            <Image
              src={company.logo}
              alt={company.name}
              className="w-full h-full"
              objectFit="cover"
              fill
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
