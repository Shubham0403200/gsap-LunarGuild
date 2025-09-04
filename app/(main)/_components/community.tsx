import { communityData } from "@/components/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const Community = () => {
  return (
    <div className="py-12 md:py-24 px-6 max-w-4xl mx-auto text-center">
      <div className="mb-10">
        <Button className="mt-0 md:mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform tracking-tight hover:bg-white/80 cursor-pointer">
          Join Our Lunar Community
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {communityData.map((community) => {
          const Icon = community.icon;

          return (
            <div key={community.id} className="relative">
              <div className="flex items-center gap-x-1">
                <Icon className="w-4 h-4 text-white" />
                <h1 className="text-base tracking-tight">{community.title}</h1>
              </div>
              <p className="text-sm mt-1 tracking-tight text-slate-300">{community.description}</p>
              {community?.span && (
               <Badge className="absolute right-[30%] top-0 bg-green-600 text-white text-xs px-2 py-0 rounded-full">{community?.span}</Badge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
