"use client";

import Link from "next/link";
import { personalInfo, contactInfo } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-neutral-800 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Left Brand info */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-white p-[1px]">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[11px] flex items-center justify-center font-bold text-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
                  WD
                </div>
              </div>
              <span className="text-lg font-bold text-white">
                Developer <span className="text-neutral-400">&</span> Designer
              </span>
            </Link>

            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Crafting high-performance websites and user-centric interfaces. Proficient in Next.js, Tailwind CSS, MongoDB, Figma, Photoshop, and WordPress.
            </p>

            {/* Social Links: GitHub, TikTok, Behance */}
            <div className="flex items-center gap-3 pt-2">
              {/* GitHub */}
              <a
                href={contactInfo.socials?.github || "https://github.com"}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={contactInfo.socials?.tiktok || "https://tiktok.com"}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="TikTok Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-3.04-1.15z" />
                </svg>
              </a>

              {/* Behance */}
              <a
                href={contactInfo.socials?.behance || "https://www.behance.net/dorinelrushi"}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Behance Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 7h-7V5h7v2zm-2.008 5.676c.075 1.572-1.077 2.824-2.992 2.824-1.731 0-3.04-1.226-3.04-3.013 0-1.879 1.341-3.087 3.018-3.087 1.831 0 2.939 1.258 2.939 3.276h-4.385c.045.98.718 1.477 1.489 1.477.625 0 1.152-.28 1.36-.777h1.611zm-4.407-1.402h2.766c-.057-.743-.591-1.206-1.34-1.206-.799 0-1.353.483-1.426 1.206zm-7.985 4.226H2V4.5h5.454c2.254 0 3.746.993 3.746 2.651 0 1.092-.586 1.954-1.589 2.302 1.325.334 2.089 1.372 2.089 2.765 0 1.986-1.558 3.282-4.1 3.282zm-2.88-6.697v2.096h2.246c.928 0 1.488-.415 1.488-1.066 0-.671-.56-1.03-1.488-1.03H4.72zm0 3.513v2.339h2.365c1.072 0 1.705-.44 1.705-1.171 0-.749-.633-1.168-1.705-1.168H4.72z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={contactInfo.socials?.youtube || "https://youtube.com"}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Expertise</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Project Showcase</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Information</a></li>
            </ul>
          </div>

          {/* Core Tech */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Tech & CMS
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>Next.js App Router</li>
              <li>Tailwind CSS</li>
              <li>MongoDB Database</li>
              <li>Figma Wireframing</li>
              <li>Photoshop Branding</li>
              <li>WordPress CMS</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Web Developer & Designer. Built with Next.js & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
