"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const stats = [
  { value: "2+", label: "Years Exp" },
  { value: "25+", label: "Projects" },
  { value: "2", label: "Companies" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 py-20 overflow-hidden">

      {/* Background: grid + radial glow */}
      <div className="absolute inset-0 -z-10 hero-grid-bg" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#080b10] dark:via-[#080b10] dark:to-[#0d1117]" />
      <div
        className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
      />

      {/* ── Left: text content ── */}
      <div className="flex-1 max-w-xl z-10">
        {/* Tag */}
        <div className="section-tag">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
          Available for freelance & full-time
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-gray-900 dark:text-white mt-2">
          Hi, I&rsquo;m{" "}
          <span className="gradient-text">Ahmed</span>
          <br />
          <span className="gradient-text">Noorani.</span>
        </h1>

        {/* Role animation */}
        <div className="mt-4 flex items-center gap-3">
          <span className="w-6 h-0.5 bg-green-500 rounded-full" />
          <p className="text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400">
            <TypeAnimation
              sequence={[
                "Agentic AI Engineer",
                1500,
                "Frontend Developer",
                1500,
                "Chatbot Engineer",
                1500,
                "React Native Developer",
                1500,
                "UI/UX Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </p>
        </div>

        {/* Bio */}
        <p className="mt-6 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
          Frontend Developer & Agentic AI Engineer skilled in React, Next.js,
          OpenAI Agents SDK, and RAG Pipelines — building scalable digital
          experiences from Karachi, Pakistan.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Hire Me <FaArrowRight size={13} />
          </Link>
          <Link href="/projects" className="btn-ghost">
            View My Work
          </Link>
          <a
            href="/Muhammad Ahmed Noorani Cv.docx"
            download
            className="btn-ghost"
          >
            <HiDownload size={16} /> Resume
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 flex items-center gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
                {s.value}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 font-medium tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
          <div className="hidden sm:flex items-center gap-3 ml-auto">
            <Link
              href="https://github.com/Ahmednoorani258"
              target="_blank"
              className="p-2.5 rounded-xl glass text-gray-500 hover:text-gray-900 dark:hover:text-white hover:shadow-glow transition-all"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mahmednorani/"
              target="_blank"
              className="p-2.5 rounded-xl glass text-gray-500 hover:text-blue-500 hover:shadow-glow transition-all"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Right: profile card ── */}
      <div className="relative z-10 flex-shrink-0 flex items-center justify-center">

        {/* Outer ambient glow blobs */}
        <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }} />
        <div className="absolute w-48 h-48 rounded-full blur-2xl opacity-10 dark:opacity-10 pointer-events-none -top-8 -right-8"
          style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }} />

        {/* Card container */}
        <div className="relative animate-float">

          {/* Rotating dashed orbit ring */}
          <div
            className="absolute rounded-full border border-dashed border-green-500/20 animate-spin-slow pointer-events-none"
            style={{ inset: "-28px" }}
          />
          {/* Slower counter-rotating ring */}
          <div
            className="absolute rounded-full border border-green-500/10 pointer-events-none"
            style={{
              inset: "-48px",
              animation: "spin_slow 20s linear infinite reverse",
            }}
          />

          {/* Orbit dots */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-green-400 shadow-glow pointer-events-none"
            style={{ top: "-30px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 pointer-events-none"
            style={{ bottom: "-26px", left: "50%", transform: "translateX(-50%)" }} />

          {/* Profile image — hexagonal clip via clip-path */}
          <div
            className="relative w-60 h-60 sm:w-72 sm:h-72 overflow-hidden shadow-card"
            style={{
              clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              border: "none",
            }}
          >
            {/* Green gradient border layer */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                background: "linear-gradient(135deg, rgba(34,197,94,0.5) 0%, transparent 60%)",
              }}
            />
            <Image
              src="/profile.png"
              alt="Ahmed Noorani"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Floating skill chips */}
          <div className="absolute -left-14 top-8 px-3 py-1.5 rounded-xl shadow-glass whitespace-nowrap animate-float"
            style={{ animationDelay: "0.5s", background: "var(--surface)", border: "1px solid rgba(34,197,94,0.25)" }}>
            <span className="text-[11px] font-semibold text-green-600 dark:text-green-400">⚡ Next.js 15</span>
          </div>
          <div className="absolute -right-16 top-1/3 px-3 py-1.5 rounded-xl shadow-glass whitespace-nowrap animate-float"
            style={{ animationDelay: "1s", background: "var(--surface)", border: "1px solid rgba(96,165,250,0.25)" }}>
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">🤖 AI Agents</span>
          </div>
          <div className="absolute -left-10 bottom-10 px-3 py-1.5 rounded-xl shadow-glass whitespace-nowrap animate-float"
            style={{ animationDelay: "1.5s", background: "var(--surface)", border: "1px solid rgba(168,85,247,0.25)" }}>
            <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400">💬 Chatbots</span>
          </div>

          {/* Bottom name badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap shadow-glass"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
              Ahmed Noorani
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400">
        <span className="text-[10px] uppercase tracking-widest font-medium">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
      </div>
    </section>
  );
}
