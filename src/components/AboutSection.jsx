"use client";

import { personalInfo } from "@/data/portfolioData";
import { User, Paintbrush, Code, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#0a0a0a] border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5 text-white" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Bridging Design Vision & Technical Engineering
          </h2>
          <div className="w-16 h-0.5 bg-neutral-700 rounded-full mt-2" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-neutral-900/60 rounded-3xl p-8 sm:p-10 border border-neutral-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Passionate Web Developer & Designer</h3>
                  <p className="text-xs text-neutral-400 font-medium">5+ Years of Hands-on Experience</p>
                </div>
              </div>

              {/* Exact bio requested by user */}
              <div className="relative pl-5 border-l-2 border-white text-neutral-300 text-base leading-relaxed space-y-4 font-normal">
                <p>
                  {personalInfo.bio}
                </p>
              </div>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Figma-to-Code Precision</h4>
                  <p className="text-xs text-neutral-400">Flawlessly translating wireframes into responsive front-end code.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack & CMS Flexibility</h4>
                  <p className="text-xs text-neutral-400">Seamless development with Next.js, MongoDB, and WordPress.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Dual Identity Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Design Card */}
            <div className="bg-neutral-900/60 rounded-3xl p-6 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white">
                  <Paintbrush className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">UI/UX & Graphic Design</h4>
                  <span className="text-xs text-neutral-400 font-semibold">Figma & Photoshop</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Creating intuitive wireframes, component design systems, graphic composites, and optimized visual assets.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] bg-neutral-950 border border-neutral-800 text-neutral-300">
                  Figma Wireframing
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] bg-neutral-950 border border-neutral-800 text-neutral-300">
                  Photoshop Compositing
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] bg-neutral-950 border border-neutral-800 text-neutral-300">
                  Design Systems
                </span>
              </div>
            </div>

            {/* Development Card */}
            <div className="bg-neutral-900/60 rounded-3xl p-6 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Web Development & CMS</h4>
                  <span className="text-xs text-neutral-400 font-semibold">Next.js, Tailwind, MongoDB, WordPress</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Engineering clean, accessible web applications with server components, responsive layouts, database schemas, and custom WordPress themes.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] bg-neutral-950 border border-neutral-800 text-neutral-300">
                  Next.js App Router
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] bg-neutral-950 border border-neutral-800 text-neutral-300">
                  Tailwind CSS
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] bg-neutral-950 border border-neutral-800 text-neutral-300">
                  MongoDB Architecture
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] bg-neutral-950 border border-neutral-800 text-neutral-300">
                  WordPress CMS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
