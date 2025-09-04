"use client";
import { profiles } from "@/components/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const ProfileCards = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [selectedRole, setSelectedRole] = useState("All");

  // Scroll function with types
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 260;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mapping roles to categories
  const roleCategories: Record<string, string> = {
    "UI/UX Designer": "Designer",
    "Product Designer": "Designer",
    "Graphic Designer": "Designer",
    "Interaction Designer": "Designer",
    "Visual Designer": "Designer",
    "Experience Designer": "Designer",
    "Service Designer": "Designer",
    "Design Strategist": "Designer",
    "Creative Director": "Director",
    "Art Director": "Director",
    CEO: "CEO",
  };

  // Filter profiles based on selected role
  const filteredProfiles =
    selectedRole === "All"
      ? profiles
      : profiles.filter(
          (p) => roleCategories[p.role] === selectedRole
        );

  // Render stars dynamically
  const renderStars = (count: number) =>
    Array.from({ length: count }, (_, i) => (
      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
    ));

  return (
    <div className="py-12 md:py-24 px-6 max-w-6xl mx-auto relative">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Meet Our Community
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative">
        <Button
          size="icon"
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="relative flex-shrink-0 w-[200px] sm:w-[220px] md:w-[250px] h-[300px] rounded-2xl overflow-hidden shadow-lg snap-start group"
            >
              <Image
                src={profile.image}
                alt={profile.name}
                width={250}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <div className="flex mb-1">{renderStars(profile.star)}</div>
                <h2 className="text-lg font-semibold">{profile.name}</h2>
                <p className="text-sm opacity-80">{profile.role}</p>
                <p className="text-xs opacity-60">{profile.location}</p>
              </div>
            </div>
          ))}
        </div>

        <Button
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Role Filter Buttons */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        {["All", "Designer", "Director", "CEO"].map((role) => (
          <Button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={cn("mt-0 md:mt-4 px-4 py-1 rounded-full text-white border-white border bg-black font-semibold hover:scale-105 transition-transform tracking-tight hover:bg-black/80 cursor-pointer", selectedRole === role && "bg-white text-black hover:bg-slate-200")}
          >
            {role}
          </Button>
        ))}
      </div>

      {/* Join Button */}
      <div className="flex justify-center">
        <Button className="mt-8 md:mt-12 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform tracking-tight hover:bg-white/80 cursor-pointer">
          Join Our Lunar Community
        </Button>
      </div>
    </div>
  );
};

export default ProfileCards;
