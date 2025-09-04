"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-zinc-800 bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Lunar Guild
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-300">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link
            href="/join"
            className="rounded-md bg-gradient-to-r from-green-400 to-lime-400 px-4 py-2 text-black font-semibold hover:from-green-300 hover:to-lime-300"
          >
            Join
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-zinc-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-3 text-zinc-300 bg-black border-t border-zinc-800">
          <Link href="/about" className="hover:text-white" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/pricing" className="hover:text-white" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link
            href="/join"
            className="rounded-md bg-gradient-to-r from-green-400 to-lime-400 px-4 py-2 text-black font-semibold text-center hover:from-green-300 hover:to-lime-300"
            onClick={() => setIsOpen(false)}
          >
            Join
          </Link>
        </nav>
      )}
    </header>
  );
}
