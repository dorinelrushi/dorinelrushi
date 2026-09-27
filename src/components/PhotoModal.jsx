"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoModal({ photo, onClose, onPrev, onNext, hasMore }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-xl"
        aria-label="Close photo preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Controls */}
      {hasMore && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 z-50 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-xl"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 z-50 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-xl"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Photo Frame */}
      <div className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden glass-card border border-slate-700/80 shadow-2xl flex flex-col items-center">
        <div className="relative w-full h-[65vh] bg-slate-950">
          <Image
            src={photo.url || photo}
            alt={photo.title || "Project Screenshot"}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Footer Bar inside Lightbox */}
        <div className="w-full p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-white">
              {photo.title || "Project Preview Photo"}
            </h4>
            <p className="text-xs text-slate-400">
              {photo.subtitle || "Uploaded project visual showcase image"}
            </p>
          </div>

          {photo.slug && (
            <a
              href={`/projects/${photo.slug}`}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center gap-1.5"
            >
              <span>View Full Story Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
