"use client";

import { experience } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#0a0a0a] border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-white" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Work Experience
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            Proven track record delivering client websites, design systems, and CMS maintenance.
          </p>
          <div className="w-16 h-0.5 bg-neutral-700 rounded-full mt-2" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-neutral-800 space-y-6 pb-6">
              {/* Timeline White Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#0a0a0a]" />

              {/* Main Card */}
              <div className="bg-neutral-900/60 rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-6">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
                  <div>
                    <span className="inline-block text-xs font-bold text-black px-3 py-1 rounded-full bg-white mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-neutral-300 text-sm font-semibold mt-1">
                      <Building2 className="w-4 h-4 text-white" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 font-medium text-neutral-200">
                      <Calendar className="w-3.5 h-3.5 text-white" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 font-medium text-neutral-200">
                      <MapPin className="w-3.5 h-3.5 text-white" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="pt-4 border-t border-neutral-800">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                    Technologies Utilized:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-950 border border-neutral-800 text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
