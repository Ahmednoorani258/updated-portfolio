import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const skills = [
  "React.js", "Next.js", "TypeScript", "React Native",
  "Tailwind CSS", "OpenAI Agents SDK", "RAG Pipelines",
  "Dialogflow ES", "Node.js", "PostgreSQL", "Python", "Sanity CMS",
];

export default function About() {
  return (
    <section className="py-20" id="about">
      <div className="section-tag">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        Who I Am
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-14">

        {/* Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-green-500/20 to-transparent blur-xl" />
          <div className="relative w-52 h-52 rounded-2xl overflow-hidden border border-green-500/30 shadow-card">
            <Image
              src="/profile.png"
              alt="Ahmed Noorani"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Floating stat */}
          <div className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl text-center"
            style={{ background: "var(--surface)", border: "1px solid rgba(34,197,94,0.2)", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
            <p className="text-lg font-extrabold text-gray-900 dark:text-white leading-none">25+</p>
            <p className="text-[10px] font-medium" style={{ color: "var(--muted)" }}>Projects</p>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Frontend Developer &{" "}
            <span className="gradient-text">Agentic AI Engineer</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Muhammad Ahmed Noorani</span> — a Frontend Developer and Agentic AI Engineer with hands-on experience building modern web UIs, AI-powered agents, chatbot workflows, and automation pipelines.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
            Skilled in React, Next.js, OpenAI Agents SDK, and RAG Pipelines. I bring a strong analytical mindset from auditing experience — enabling precise problem-solving and optimised system design.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-lg transition-colors hover:text-green-600 dark:hover:text-green-400"
              style={{ background: "var(--surface-hover)", color: "var(--muted)", border: "1px solid var(--border)" }}
              >
                {skill}
              </span>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-green-500 hover:text-green-600 transition-colors group"
          >
            Read full story
            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
