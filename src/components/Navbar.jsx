"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0a0a0a] border-b border-neutral-800 shadow-xl py-3.5"
        : mobileMenuOpen
          ? "bg-[#0a0a0a] border-b border-neutral-800 py-3.5"
          : "bg-[#0a0a0a] md:bg-transparent border-b border-neutral-800 md:border-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-white p-[1px]">
            <div className="w-full h-full bg-[#0a0a0a] rounded-[11px] flex items-center justify-center font-bold text-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
              WD
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white">
              Dorinel <span className="text-neutral-400"></span> Rushi
            </span>
            <span className="text-[11px] text-neutral-400 font-medium tracking-wider uppercase">
              Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900 p-1.5 rounded-full border border-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Badge & Action */}
        <div className="hidden md:flex items-center gap-4">
          {/* Availability Indicator */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>Available for Work</span>
          </div>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all flex items-center gap-1"
          >
            Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
        </button>
      </div >

      {/* Mobile Menu Drawer (Solid Non-Transparent Background) */}
      {
        mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-neutral-800 px-4 pt-4 pb-6 flex flex-col gap-3 shadow-2xl relative z-50">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>
                <span className="text-xs text-neutral-200 font-medium">Available for Hire</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-medium text-neutral-300 hover:text-white border-b border-neutral-800/60"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3 rounded-xl text-sm font-semibold text-black bg-white"
            >
              Get In Touch
            </a>
          </div>
        )
      }
    </header >
  );
}
