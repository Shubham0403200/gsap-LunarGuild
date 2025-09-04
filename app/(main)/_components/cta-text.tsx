import React from "react";

const CTAtext = () => {
  return (
    <div className="py-24 md:py-32 px-6 max-w-4xl mx-auto relative text-center my-12">
      {/* Circular Gradient Background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-full blur-3xl opacity-70"
          style={{
            background: "radial-gradient(circle, #00008B 0%, #0000FF 25%, #FFFFFF 50%, #FF4500 75%, #8B0000 100%)",
          }}
        ></div>
      </div>

      {/* Foreground Text */}
      <h1 className="font-bold text-white text-2xl md:text-3xl tracking-tight relative z-10 ">
        Join a community of ambitious senior designers building their
        independent business
      </h1>
    </div>
  );
};

export default CTAtext;
