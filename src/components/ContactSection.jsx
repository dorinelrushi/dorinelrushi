"use client";

import { personalInfo, contactInfo } from "@/data/portfolioData";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact & Availability
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            Reach out directly for freelance projects, design system consultations, agency contracts, or full-time opportunities.
          </p>
          <div className="w-16 h-0.5 bg-neutral-700 rounded-full mt-2" />
        </div>

        {/* Contact Info Cards Grid */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email Card */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="bg-neutral-900/60 rounded-3xl p-8 border border-neutral-800 hover:border-white transition-all group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-neutral-800 w-fit text-white group-hover:bg-white group-hover:text-black transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-400 font-medium block">Direct Email</span>
                <h3 className="text-base font-bold text-white group-hover:text-neutral-200 transition-colors">
                  {contactInfo.email}
                </h3>
              </div>
            </div>

            <div className="flex items-center text-xs font-semibold text-neutral-400 group-hover:text-white gap-1 pt-2 border-t border-neutral-800">
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Phone Card */}
          <div className="bg-neutral-900/60 rounded-3xl p-8 border border-neutral-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-neutral-800 w-fit text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-400 font-medium block">Phone / WhatsApp</span>
                <h3 className="text-base font-bold text-white">
                  {contactInfo.phone}
                </h3>
              </div>
            </div>

            <div className="flex items-center text-xs font-semibold text-neutral-400 pt-2 border-t border-neutral-800">
              <span>Available on Call & WhatsApp</span>
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="bg-neutral-900/60 rounded-3xl p-8 border border-neutral-800 flex flex-col justify-between space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-neutral-800 w-fit text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-400 font-medium block">Location & Remote Work</span>
                <h3 className="text-base font-bold text-white">
                  {contactInfo.location}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-neutral-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-xs font-medium text-neutral-300">
                {personalInfo.status}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Note Box */}
        <div className="max-w-4xl mx-auto mt-8 bg-neutral-950 p-6 rounded-2xl border border-neutral-800 text-center space-y-1">
          <p className="text-xs font-semibold text-white">
            Available for New Projects & Immediate Hiring
          </p>
          <p className="text-xs text-neutral-400">
            Professional & Fluent in English • Native Albanian Speaker
          </p>
        </div>
      </div>
    </section>
  );
}
