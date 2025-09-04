import React from "react";
import Hero from "./_components/hero";
import Companies from "./_components/companies";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <div className="h-[100px] bg-black w-full"></div>
      {/* 
      <FeatureCard />
      <Benefits />
      <Community />
      <CTAtext />
      <ProfileCards />
      <Reason />
      <HowStart />
      <CommunityFeature />
      <Playbook />
      <Pricing />
      <Accordion />
      <Testimonials />
      <Newsletter /> 
      */}
    </div>
  );
};

export default HomePage;
