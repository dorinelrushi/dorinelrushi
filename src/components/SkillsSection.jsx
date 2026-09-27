"use client";

import { useState } from "react";
import { skills } from "@/data/portfolioData";
import { Cpu, Globe, Palette, Database, Image as ImageIcon, LayoutGrid, Layers } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Development", "Design", "CMS"];

  const filteredSkills = activeTab === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case "Globe": return <Globe className="w-6 h-6 text-white" />;
      case "Palette": return <Palette className="w-6 h-6 text-white" />;
      case "Database": return <Database className="w-6 h-6 text-white" />;
      case "Figma": return <Layers className="w-6 h-6 text-white" />;
      case "Image": return <ImageIcon className="w-6 h-6 text-white" />;
      case "LayoutGrid": return <LayoutGrid className="w-6 h-6 text-white" />;
      default: return <Cpu className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#0a0a0a] border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & Expertise
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            Proficient across modern web development, visual design tools, and CMS platforms.
          </p>
          <div className="w-16 h-0.5 bg-neutral-700 rounded-full mt-2" />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === category
                    ? "bg-white text-black shadow-md font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-neutral-900/60 rounded-3xl p-6 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-300">
                    {skill.level}% Proficiency
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {skill.name}
                </h3>
                <span className="inline-block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  {skill.category}
                </span>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-3 border-t border-neutral-800">
                <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden p-0.5 border border-neutral-800">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
