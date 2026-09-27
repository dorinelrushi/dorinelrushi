"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setActiveImg((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setActiveImg((i) => Math.min((project.gallery?.length || 1) - 1, i + 1));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) return null;

  const images = project.gallery?.length ? project.gallery : [project.coverImage];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo */}
        <div className="relative w-full h-56 sm:h-72 bg-black overflow-hidden">
          <Image
            src={images[activeImg]}
            alt={project.title}
            fill
            className="object-cover transition-all duration-300"
            priority
            sizes="(max-width: 672px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />

          {/* Image Nav arrows if multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setActiveImg((i) => Math.max(0, i - 1))}
                disabled={activeImg === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 border border-neutral-700 text-white hover:bg-neutral-800 disabled:opacity-30 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveImg((i) => Math.min(images.length - 1, i + 1))}
                disabled={activeImg === images.length - 1}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 border border-neutral-700 text-white hover:bg-neutral-800 disabled:opacity-30 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeImg ? "bg-white w-4" : "bg-neutral-500"}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/80 border border-neutral-700 text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-4">
          {/* Title + Year */}
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {project.title}
            </h2>
            <span className="text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-lg shrink-0 font-medium">
              {project.year}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2 border-t border-neutral-800">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl font-bold text-sm text-black bg-white hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live
              </a>
            ) : (
              <div className="flex-1 py-3 rounded-xl font-bold text-sm text-neutral-500 bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-2 cursor-not-allowed">
                <ExternalLink className="w-4 h-4" />
                Coming Soon
              </div>
            )}
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl font-semibold text-sm text-neutral-400 bg-neutral-900 border border-neutral-800 hover:text-white transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
