"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoModal from "@/components/PhotoModal";
import { getProjectBySlug } from "@/data/projects";
import { ArrowLeft, ExternalLink, Code, Eye, CheckCircle2, Calendar, Sparkles, Layers, Cpu } from "lucide-react";

export default function ProjectSlugPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const project = getProjectBySlug(slug);

  const [activePhotoModal, setActivePhotoModal] = useState(null);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-slate-100 flex flex-col justify-between pt-32">
        <Navbar />
        <div className="max-w-md mx-auto text-center space-y-4 py-20 px-4">
          <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
          <p className="text-neutral-400 text-sm">
            The project slug <code className="text-white font-mono bg-neutral-900 px-2 py-1 rounded">{slug}</code> does not exist in the project registry.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-100 selection:bg-white selection:text-black pt-28">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Overview</span>
        </Link>

        {/* Project Header Banner */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-200">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-white" /> Year: {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Quick Info Grid */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <span className="text-xs text-neutral-400 block font-medium">Role</span>
              <span className="text-sm font-bold text-white">{project.role}</span>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <span className="text-xs text-neutral-400 block font-medium">Client / Company</span>
              <span className="text-sm font-bold text-white">{project.client}</span>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <span className="text-xs text-neutral-400 block font-medium">Slug URL</span>
              <span className="text-xs font-mono text-neutral-300">/projects/{project.slug}</span>
            </div>
          </div>
        </div>

        {/* Main Cover Image Hero */}
        <div className="relative w-full h-[50vh] sm:h-[65vh] rounded-3xl overflow-hidden bg-black border border-neutral-800 shadow-2xl group">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
          />

          {/* Lightbox Zoom Trigger */}
          <button
            onClick={() =>
              setActivePhotoModal({
                url: project.coverImage,
                title: project.title,
                subtitle: project.category,
              })
            }
            className="absolute bottom-6 right-6 p-4 rounded-2xl bg-neutral-900/90 border border-neutral-700 text-white hover:bg-white hover:text-black transition-all text-xs font-bold shadow-2xl flex items-center gap-2 backdrop-blur-md"
          >
            <Eye className="w-4 h-4" />
            <span>Open High-Res Photo Lightbox</span>
          </button>
        </div>

        {/* Story Content & Sidebar Grid */}
        <div className="grid lg:grid-cols-12 gap-12 pt-6">
          {/* Left Column: Project Overview & Features */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-neutral-900/60 rounded-3xl p-8 border border-neutral-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white" /> Project Overview & Objective
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                {project.overview}
              </p>
            </div>

            <div className="bg-neutral-900/60 rounded-3xl p-8 border border-neutral-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" /> Key Features & Technical Accomplishments
              </h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-1" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900/60 rounded-3xl p-8 border border-neutral-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-white" /> Design & Development Workflow
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {project.designProcess}
              </p>
            </div>

            {/* Photo Gallery Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-white" /> Project Photo Gallery
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.gallery.map((imgUrl, gIdx) => (
                  <div
                    key={gIdx}
                    onClick={() =>
                      setActivePhotoModal({
                        url: imgUrl,
                        title: `${project.title} - Photo ${gIdx + 1}`,
                        subtitle: project.category,
                      })
                    }
                    className="relative h-48 rounded-2xl overflow-hidden bg-black border border-neutral-800 cursor-pointer group hover:border-white transition-all"
                  >
                    <Image
                      src={imgUrl}
                      alt={`Gallery ${gIdx}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-white text-black text-xs font-bold">
                        Zoom Photo
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Actions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-900/60 rounded-3xl p-6 border border-neutral-800 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-white" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-neutral-950 border border-neutral-800 text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl font-bold text-xs text-black bg-white hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>View Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl font-bold text-xs text-neutral-300 bg-neutral-950 border border-neutral-800 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <Code className="w-4 h-4 text-white" />
                    <span>View Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Unlimited Slugs Notice Box */}
            <div className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-white" /> Unlimited Slug Architecture
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                This detail view is dynamically driven by Next.js App Router slug parameters. You can add as many project detail pages as you like by registering new objects in <code className="text-white font-mono">src/data/projects.js</code>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Lightbox */}
      <PhotoModal
        photo={activePhotoModal}
        onClose={() => setActivePhotoModal(null)}
      />

      <Footer />
    </main>
  );
}
