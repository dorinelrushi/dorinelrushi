"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, getAllProjectCategories } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import { FolderGit2, Eye, Upload, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const categories = getAllProjectCategories();

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a] border-t border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5 text-white" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Project Showcase
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            Click any project to view photos and details.
          </p>
          <div className="w-16 h-0.5 bg-neutral-700 rounded-full mt-2" />
        </div>

        {/* Upload Helper Banner */}
        <div className="mb-10 bg-neutral-900/80 rounded-2xl p-4 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-800 text-white">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Add Your Own Project Photos</h4>
              <p className="text-[11px] text-neutral-300">
                Drop photos into <code className="bg-neutral-950 px-1.5 py-0.5 rounded text-white">public/projects/</code> and edit <code className="bg-neutral-950 px-1.5 py-0.5 rounded text-white">src/data/projects.js</code>
              </p>
            </div>
          </div>
          <Link
            href="/projects"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-neutral-200 shrink-0 flex items-center gap-1.5 transition-all"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="bg-neutral-900/60 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col justify-between hover:border-neutral-600 transition-all group cursor-pointer"
            >
              {/* Cover Photo */}
              <div className="relative w-full h-64 sm:h-72 bg-black overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/80 border border-neutral-700 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <div className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold shadow-xl flex items-center gap-2">
                    <Eye className="w-4 h-4" /> View Project
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                    {project.year}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-950 border border-neutral-800 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
