// "use client";
// import { useRef } from "react";
// import { profiles } from "@/components/data";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const Hero = () => {
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const profilesRef = useRef<HTMLDivElement | null>(null);
//   const buttonRef = useRef<HTMLButtonElement | null>(null);

//   useGSAP(() => {
//     if (!heroRef.current) return;

//     // Split texts animation
//     const splitTitle = new SplitText(".hero-title", { type: "words" });
//     const splitSubtitle = new SplitText(".hero-subtitle", { type: "words" });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top 80%",
//       },
//     });

//     tl.from(splitTitle.words, {
//       y: 60,
//       opacity: 0,
//       duration: 0.8,
//       stagger: 0.1,
//       ease: "power3.out",
//     })
//       .from(
//         splitSubtitle.words,
//         {
//           y: 40,
//           opacity: 0,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power3.out",
//         },
//         "-=0.4"
//       )
//       .from(
//         buttonRef.current,
//         {
//           y: 30,
//           opacity: 0,
//           duration: 0.6,
//           ease: "power3.out",
//         },
//         "-=0.3"
//       );

//     // Seamless infinite scroll for profiles
//     if (profilesRef.current) {
//       const columns = profilesRef.current.querySelectorAll(".profile-col");

//       columns.forEach((col, i) => {
//         const items = Array.from(col.children) as HTMLElement[];
//         if (!items.length) return;

//         // Duplicate all items inside column for seamless scroll
//         items.forEach((item) => col.appendChild(item.cloneNode(true)));

//         const itemHeight = items[0].offsetHeight + 16;
//         const totalHeight = itemHeight * items.length;

//         gsap.to(col, {
//           y: i % 2 === 0 ? -totalHeight : totalHeight,
//           duration: 30,
//           ease: "linear",
//           repeat: -1,
//           modifiers: {
//             y: gsap.utils.unitize((y) => {
//               // Wrap the y position to loop seamlessly
//               return parseFloat(y) % totalHeight;
//             }),
//           },
//         });
//       });
//     }

//     // Animate bottom light
//     gsap.to(".hero-light", {
//       scale: 1.05,
//       opacity: 0.85,
//       duration: 3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     });
//   }, { scope: heroRef });

//   const leftProfiles = profiles.slice(0, 5);
//   const rightProfiles = profiles.slice(5);

//   return (
//     <section
//       ref={heroRef}
//       className="relative text-white bg-black flex flex-col md:flex-row items-center gap-x-32 px-4 md:px-12 max-w-6xl mx-auto py-16 overflow-hidden"
//     >
//       {/* Left Side */}
//       <div className="flex-1 max-w-xl text-center md:text-left space-y-4 z-10">
//         <h1 className="hero-title text-3xl md:text-5xl font-semibold leading-tight">
//           Where Senior Designers go{" "}
//           <br />
//           <span className="font-[cursive] text-2xl italic text-slate-200">
//             independent
//           </span>
//         </h1>
//         <h2 className="hero-subtitle text-sm md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
//           Lunar Guild is a community for hungry designers turned entrepreneurs.
//         </h2>
//         <Button
//           ref={buttonRef}
//           className="mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform"
//         >
//           Join Our Lunar Community
//         </Button>
//       </div>

//       {/* Right Side - Infinite Scrolling Profiles */}
//       <div
//         ref={profilesRef}
//         className="relative w-full md:w-[480px] h-[320px] sm:h-[440px] overflow-hidden grid grid-cols-2 gap-3 sm:gap-4 mt-12 md:mt-0 [transform:skewY(-6deg)] z-10"
//       >
//         {/* Left Column */}
//         <div className="profile-col flex flex-col">
//           {[...leftProfiles].map((profile, idx) => (
//             <div
//               key={`left-${idx}-${profile.id}`}
//               className="relative h-40 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 mb-4"
//             >
//               <Image src={profile.image} alt={profile.name} fill className="object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-left">
//                 <h3 className="text-sm sm:text-base font-semibold">{profile.name}</h3>
//                 <p className="text-xs sm:text-sm text-gray-300">{profile.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Column */}
//         <div className="profile-col flex flex-col">
//           {[...rightProfiles].map((profile, idx) => (
//             <div
//               key={`right-${idx}-${profile.id}`}
//               className="relative h-40 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 mb-4"
//             >
//               <Image src={profile.image} alt={profile.name} fill className="object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-left">
//                 <h3 className="text-sm sm:text-base font-semibold">{profile.name}</h3>
//                 <p className="text-xs sm:text-sm text-gray-300">{profile.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Light Effect */}
//       <div className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none z-11 flex justify-center">
//         <div className="hero-light w-[160%] h-[200px] rounded-b-full bg-gradient-radial from-white via-white/70 to-blue-400/30 opacity-80 blur-3xl" />
//       </div>
//     </section>
//   );
// };

// export default Hero;


"use client";
import { useRef } from "react";
import { profiles } from "@/components/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const profilesRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    const splitTitle = new SplitText(".hero-title", { type: "words" });
    const splitSubtitle = new SplitText(".hero-subtitle", { type: "words" });

    // Main timeline for hero texts & button
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
      },
    });

    tl.from(splitTitle.words, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    })
      .from(
        splitSubtitle.words,
        {
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        buttonRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

    // Profiles entrance animation after button
    tl.from(
      profilesRef.current,
      {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.3" // slight overlap
    );

    // Infinite scroll for columns
    if (profilesRef.current) {
      const columns = profilesRef.current.querySelectorAll(".profile-col");

      columns.forEach((col, i) => {
        const items = Array.from(col.children) as HTMLElement[];
        if (!items.length) return;

        // Duplicate for seamless scroll
        items.forEach((item) => col.appendChild(item.cloneNode(true)));

        const itemHeight = items[0].offsetHeight + 16;
        const totalHeight = itemHeight * items.length;

        gsap.to(col, {
          y: i % 2 === 0 ? -totalHeight : totalHeight,
          duration: 30,
          ease: "linear",
          repeat: -1,
          modifiers: {
            y: gsap.utils.unitize((y) => {
              const numY = parseFloat(y);
              if (i % 2 === 0) return numY % totalHeight;
              else return (numY + totalHeight) % totalHeight - totalHeight;
            }),
          },
        });
      });
    }

    // Subtle light pulse
    gsap.to(".hero-light", {
      scale: 1.05,
      opacity: 0.85,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: heroRef });

  const leftProfiles = profiles.slice(0, 5);
  const rightProfiles = profiles.slice(5);

  return (
    <section
      ref={heroRef}
      className="relative text-white bg-black flex flex-col md:flex-row items-center gap-x-32 px-6 md:px-12 max-w-6xl mx-auto py-16 overflow-hidden"
    >
      {/* Left Side */}
      <div className="flex-1 max-w-xl text-center md:text-left space-y-4 z-10">
        <h1 className="mt-8 md:mt-0 hero-title text-3xl md:text-5xl font-bold leading-none tracking-tight">
          Where Senior Designers go{" "}
          <br />
          <span className="font-['cursive'] text-2xl italic text-slate-200">
            independent
          </span>
        </h1>
        <h2 className="hero-subtitle text-sm md:text-lg text-gray-300 max-w-md mx-auto md:mx-0 tracking-tight">
          Lunar Guild is a community for hungry designers turned entrepreneurs.
        </h2>
        <Button
          ref={buttonRef}
          className="mt-0 md:mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform tracking-tight"
        >
          Join Our Lunar Community
        </Button>
      </div>

      {/* Right Side - Infinite Scrolling Profiles */}
      <div
        ref={profilesRef}
        className="relative w-full md:w-[480px] h-[320px] sm:h-[440px] overflow-hidden grid grid-cols-2 gap-3 sm:gap-4 mt-24 md:mt-0 [transform:skewY(-6deg)] z-10"
      >
        {/* Left Column */}
        <div className="profile-col flex flex-col">
          {[...leftProfiles].map((profile, idx) => (
            <div
              key={`left-${idx}-${profile.id}`}
              className="relative h-40 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 mb-4"
            >
              <Image src={profile.image} alt={profile.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-left">
                <h3 className="text-sm sm:text-base font-semibold">{profile.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{profile.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="profile-col flex flex-col">
          {[...rightProfiles].map((profile, idx) => (
            <div
              key={`right-${idx}-${profile.id}`}
              className="relative h-40 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 mb-4"
            >
              <Image src={profile.image} alt={profile.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-left">
                <h3 className="text-sm sm:text-base font-semibold">{profile.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{profile.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Light Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none z-11 flex justify-center">
        <div className="hero-light w-[160%] h-[200px] rounded-b-full bg-gradient-radial from-white via-white/70 to-blue-400/30 opacity-80 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
