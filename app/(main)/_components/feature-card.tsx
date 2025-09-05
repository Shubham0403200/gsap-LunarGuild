import { featureProfiles } from "@/components/data";
import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export const FeatureSection: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div
      className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-[#121212] border border-slate-800 hover:border-slate-600 w-56 sm:w-64 transform hover:-translate-y-2 duration-300"
    >
      {/* Image */}
      <div className="relative h-36 sm:h-40 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-slate-300 text-sm">{title}</h3>
        <p className="text-lg font-semibold text-white">{description}</p>
      </div>
    </div>
  );
};

const FeatureCard = () => {
  return (
    <div className="py-4 sm:py-8 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Playing Card Style Layout */}
      <div className="flex justify-center">
        <div className="flex scale-50 sm:scale-75 md:scale-100 origin-center">
          {featureProfiles.map((feature, idx) => (
            <div
              key={feature.id}
              className={`relative ${idx !== 0 ? "-ml-20 sm:-ml-16 " : ""} z-${10 - idx}`} // Overlapping effect
            >
              <FeatureSection
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
