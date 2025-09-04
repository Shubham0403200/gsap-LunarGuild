import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const standardFeatures = [
    "Members-only Slack community",
    "Monthly behind-the-scenes retros",
    "Monthly workshops",
    "Weekly check-ins",
    "1:1 onboarding",
    "Founding member status",
  ];

  const vipFeatures = [
    "Members-only Slack community",
    "Monthly behind-the-scenes retros",
    "Monthly workshops",
    "Weekly check-ins",
    "1:1 onboarding",
    "Founding member status",
    "Monthly 1:1 with Founder ($2000 value)",
    "Exclusive systems and resources",
    "Feedback + accountability",
    "Personalized roadmap",
    "Notion coaching hub",
  ];

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Pricing</h1>
        <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Backlog is a membership that&apos;ll help you build resilience, focus and consistency, while building your independent business.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Standard Plan */}
        <div className="relative bg-[#121212]/80 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col shadow-lg hover:shadow-xl transition group">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h2 className="text-lg sm:text-xl font-semibold">Standard</h2>
            <span className="bg-green-400 text-black text-[10px] sm:text-xs px-2 py-1 rounded-full font-bold">
              INSTANT ACCESS
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold mt-4">
            $50 <span className="text-sm sm:text-lg font-normal">monthly</span>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">Billed $150 quarterly</p>

          {/* Community */}
          <h3 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2">COMMUNITY</h3>
          <ul className="space-y-1 sm:space-y-2 mb-4">
            {standardFeatures.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-300 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>

          {/* Coaching */}
          <h3 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2">COACHING</h3>
          <div className="flex items-center gap-2 text-slate-400 text-sm sm:text-base">
            <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" /> Not included
          </div>

          <Button className="mt-6 sm:mt-8 w-full bg-green-400 text-black font-semibold rounded-full hover:bg-green-300 text-sm sm:text-base py-2 sm:py-3">
            Join community today
          </Button>
        </div>

        {/* VIP Plan */}
        <div className="relative bg-[#121212]/80 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col shadow-lg hover:shadow-xl transition group">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h2 className="text-lg sm:text-xl font-semibold">VIP</h2>
            <span className="bg-white text-black text-[10px] sm:text-xs px-2 py-1 rounded-full font-bold">
              2 SPOTS LEFT
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold mt-4">
            $500 <span className="text-sm sm:text-lg font-normal">monthly</span>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">Billed $1500 quarterly</p>

          {/* Community */}
          <h3 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2">COMMUNITY</h3>
          <ul className="space-y-1 sm:space-y-2 mb-4">
            {vipFeatures.slice(0, 6).map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-300 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>

          {/* Coaching */}
          <h3 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2">COACHING</h3>
          <ul className="space-y-1 sm:space-y-2">
            {vipFeatures.slice(6).map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-300 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <Button className="mt-6 sm:mt-8 w-full bg-white text-black font-semibold rounded-full hover:bg-slate-200 text-sm sm:text-base py-2 sm:py-3">
            Get coaching
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
