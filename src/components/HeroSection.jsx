"use client";

import { personalInfo } from "@/data/portfolioData";
import { ArrowDown, Code2, Cpu, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const techStack = [
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "MongoDB" },
    { name: "Figma" },
    { name: "Photoshop" },
    { name: "WordPress" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs sm:text-sm font-medium">
              <span>5+ Years Experience • Web Developer & UI Designer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Architecting <span className="text-white underline underline-offset-8 decoration-neutral-700">Aesthetic UI</span> & High-Performance Code
            </h1>

            {/* Subheading */}
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Passionate Web Designer & Developer bridging high-end Figma visual design with robust Next.js, Tailwind CSS, MongoDB, and WordPress engineering.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mr-1 flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-white" /> Core Stack:
              </span>
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-200 transition-all hover:bg-neutral-800 hover:text-white"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-black bg-white hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <span>Explore Showcase Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Code2 className="w-4 h-4 text-white" />
                <span>Contact Info</span>
              </a>
            </div>

            {/* Quick Highlights */}
            <div className="pt-6 border-t border-neutral-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span className="text-xs text-neutral-300 font-medium">Responsive Layouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span className="text-xs text-neutral-300 font-medium">Figma to Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span className="text-xs text-neutral-300 font-medium">SEO & Fast Loading</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Border */}
              <div className="relative bg-neutral-900/90 rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-2xl space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400 bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800">
                    web_developer_designer.js
                  </span>
                </div>

                {/* Code Snippet */}
                <div className="space-y-3 font-mono text-xs text-neutral-300 leading-relaxed">
                  <p className="text-neutral-400">
                    const <span className="text-white font-bold">developerProfile</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-white">"Web Developer & Designer"</span>,
                  </p>
                  <p className="pl-4">
                    experience: <span className="text-white">"5+ Years"</span>,
                  </p>
                  <p className="pl-4">
                    languages: [<span className="text-neutral-300">"English"</span>, <span className="text-neutral-300">"Albanian"</span>],
                  </p>
                  <p className="pl-4">
                    designTools: [<span className="text-neutral-300">"Figma"</span>, <span className="text-neutral-300">"Photoshop"</span>],
                  </p>
                  <p className="pl-4">
                    codeStack: [<span className="text-white">"Next.js"</span>, <span className="text-white">"Tailwind CSS"</span>, <span className="text-white">"MongoDB"</span>, <span className="text-white">"WordPress"</span>],
                  </p>
                  <p className="pl-4">
                    focus: <span className="text-neutral-300">"High Performance Websites"</span>
                  </p>
                  <p className="text-neutral-400">&#125;</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-neutral-950 border border-neutral-800 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-black text-white">5+</span>
                    <span className="text-[11px] text-neutral-400 font-medium">Years Experience</span>
                  </div>

                  <div className="bg-neutral-950 border border-neutral-800 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-black text-white">35+</span>
                    <span className="text-[11px] text-neutral-400 font-medium">Projects Deployed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
