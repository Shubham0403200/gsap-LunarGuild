import React from "react";
import Hero from "./_components/hero";
import Companies from "./_components/companies";
import Benefits from "./_components/benefits";
import Community from "./_components/community";
import CTAtext from "./_components/cta-text";
import ProfileCards from "./_components/profile-cards";
import Reason from "./_components/reason";
import HowStart from "./_components/how-start";
import CommunityFeature from "./_components/community-feature";
import Playbook from "./_components/playbook";
import Pricing from "./_components/pricing";
import FAQAccordion from "./_components/accordion";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Benefits />
      <Community />
      <CTAtext />
      <ProfileCards />
      <Reason />
      <HowStart />
      <CommunityFeature />
      <Playbook />
      <Pricing />
      <FAQAccordion />
      {/* 
      <Testimonials />
      <Newsletter /> 
      <FeatureCard /> 
      */}
    </div>
  );
};

export default HomePage;
