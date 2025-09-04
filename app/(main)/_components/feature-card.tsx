// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { featureProfiles } from "@/components/data";
// import { Card, CardDescription, CardHeader } from "@/components/ui/card";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const FeatureCard = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const cards = containerRef.current.querySelectorAll(".feature-card");

//     cards.forEach((card, idx) => {
//       gsap.fromTo(
//         card,
//         { y: 100, opacity: 0, scale: 0.8, rotation: idx % 2 === 0 ? -10 : 10 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           rotation: idx % 2 === 0 ? -5 : 5,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 90%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   const overlapOffset = isMobile ? 15 : 30; // % top offset per card

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full flex justify-center items-start py-24 px-4 md:px-0"
//       style={{ minHeight: isMobile ? "400px" : "600px" }}
//     >
//       {featureProfiles.map((profile, idx) => {
//         const isOdd = idx % 2 === 0;

//         return (
//           <Card
//             key={profile.id}
//             className="feature-card absolute rounded-3xl shadow-2xl border border-slate-700 backdrop-blur-md bg-black/80 cursor-pointer transform transition-transform hover:scale-105 hover:rotate-0"
//             style={{
//               zIndex: featureProfiles.length - idx,
//               top: `${idx * overlapOffset}%`,
//               width: isMobile ? "70vw" : "300px",
//               transform: `rotate(${isOdd ? -5 : 5}deg)`,
//             }}
//           >
//             <CardHeader className="relative h-56 w-full rounded-3xl overflow-hidden shadow-lg">
//               <Image
//                 src={profile.image}
//                 alt={profile.title}
//                 fill
//                 className="object-cover rounded-3xl"
//               />
//             </CardHeader>
//             <CardDescription className="p-4 text-white">
//               <p className="font-semibold text-lg">{profile.title}</p>
//               <h1 className="text-sm text-gray-300 mt-1">{profile.description}</h1>
//             </CardDescription>
//           </Card>
//         );
//       })}
//     </div>
//   );
// };

// export default FeatureCard;
