"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-black"
      } border-b border-zinc-800`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Lunar <span className="text-slate-400">Guild</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          {["About", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-white transition-colors"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button
            className="bg-white text-black hover:bg-slate-200"
          >
            Join
          </Button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-zinc-300 text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Dropdown */}
      <nav
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-zinc-900 border-l border-zinc-800 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-4 p-6 pt-20`}
      >
        {["About", "Pricing"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-zinc-300 text-lg hover:text-white transition-colors font-medium tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
        <Button
          className="bg-white text-black hover:bg-slate-200"
          onClick={() => setIsOpen(false)}
        >
          Join
        </Button>
      </nav>
    </header>
  );
}
