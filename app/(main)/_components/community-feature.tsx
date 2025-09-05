import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const CommunityFeature = () => {
  const fitFor = [
    "Aspiring entrepreneurs",
    "Designers seeking growth",
    "People open to learning",
    "Collaborative team players",
    "Those who love innovation",
  ];

  const notFitFor = [
    "People afraid of change",
    "Those seeking shortcuts",
    "Non-collaborative mindset",
    "Fear of experimentation",
    "Negative or closed attitude",
  ];

  return (
    <div className="py-24 md:py-32 max-w-5xl w-full mx-auto flex flex-col items-center relative overflow-hidden px-6">
      {/* Heading */}
      <div className="mb-10 z-10 relative">
        <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight leading-snug text-white">
          This community{" "}
          <span className="font-['cursive'] italic text-slate-300 font-medium">
            isn&apos;t for everyone
          </span>
        </h1>
      </div>

      {/* Sections Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full justify-between z-10">
        {/* Fit For Section */}
        <div className="relative flex-1 p-6 bg-[#121212]/80 rounded-xl border border-slate-700 shadow-md backdrop-blur-md overflow-hidden">
          {/* Glow ball - absolute inside this section */}
          <div
            className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-60"
            style={{
              background: "radial-gradient(circle, #ffafcc, #f6d365, #ff9a9e)",
            }}
          ></div>

          <h2 className="text-xl font-semibold text-white mb-4 text-center relative z-10">
            You&apos;re the right fit
          </h2>
          <div className="space-y-3 relative z-10">
            {fitFor.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Not Fit For Section */}
        <div className="flex-1 p-6 bg-[#121212]/80 rounded-xl border border-slate-700 shadow-md backdrop-blur-md">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            It&apos;s Not For
          </h2>
          <div className="space-y-3">
            {notFitFor.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition"
              >
                <XCircle className="w-5 h-5 text-red-400" />
                <span className="text-sm tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeature;
