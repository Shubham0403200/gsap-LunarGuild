"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is this community about?",
    answer:
      "Our community helps designers and entrepreneurs build independent businesses with guidance, resources, and accountability.",
  },
  {
    question: "How much does it cost to join?",
    answer:
      "We offer two plans — Standard at $50/month and VIP at $500/month with additional coaching benefits.",
  },
  {
    question: "What's included in the VIP plan?",
    answer:
      "The VIP plan includes monthly 1:1 coaching with the founder, exclusive resources, personalized roadmaps, and more.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes! You can cancel your membership at any time without hidden fees or commitments.",
  },
  {
    question: "Do you provide a free trial?",
    answer:
      "We currently do not offer a free trial, but you can start with the Standard plan to explore the community benefits.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply choose your plan, sign up, and you’ll get instant access to our community and resources.",
  },
];

const FAQAccordion = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 relative">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
        Frequently Asked
        <span className="font-['cursive'] italic text-slate-300 font-medium">
            {" "} Questions
          </span>
      </h2>

      {/* Gradient Glow Background */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,192,203,0.5) 0%, rgba(255,255,0,0.3) 100%)",
        }}
      ></div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-2 relative z-10">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-[#121212]/80 border border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <AccordionTrigger className="px-4 py-3 text-left text-white text-sm sm:text-base font-medium hover:bg-white/5 transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3 text-slate-300 text-xs sm:text-sm tracking-tight mt-3">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
