import { XIcon } from "lucide-react";
import React from "react";

const Reason = () => {
  const reasons = [
    "Lack of support and guidance",
    "Financial instability",
    "Fear of failure",
    "Limited network and connections",
    "Difficulty in finding clients",
  ];

  return (
    <div className="relative py-24 md:py-32 max-w-4xl w-full mx-auto flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <div className="mb-10 z-10 relative">
        <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight leading-snug text-white">
          The Reason why designers <br />
          <span className="font-['cursive'] italic text-slate-300 font-medium">struggle</span>{" "}
          to go independent
        </h1>
      </div>

      {/* Reasons Box */}
      <div className="relative mt-6 flex flex-col gap-3 text-left bg-[#121212]/80 backdrop-blur-md max-w-sm w-full p-6 rounded-xl border border-slate-700 shadow-lg hover:shadow-xl transition z-10">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition"
          >
            <span className="p-1 rounded-full bg-red-500/10 flex items-center justify-center">
              <XIcon className="w-3 h-3 text-red-400" />
            </span>
            <p className="text-sm tracking-tight">{reason}</p>
          </div>
        ))}
      </div>

      {/* Two Concentric Circular Glows */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
        aria-hidden="true"
      >
        {/* Outer Glow - darker white */}
        <div
          className="absolute bottom-[-150px] w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, #d9d9d9 0%, transparent 70%)",
          }}
        ></div>
        {/* Inner Glow - off white */}
        <div
          className="absolute bottom-[-100px] w-[350px] h-[350px] rounded-full blur-2xl opacity-40"
          style={{
            background: "radial-gradient(circle, #f5f5f5 0%, transparent 70%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Reason;
