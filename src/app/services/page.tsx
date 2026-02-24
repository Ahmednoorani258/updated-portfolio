import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    num: "01",
    icon: "💻",
    title: "Frontend Development",
    description:
      "Crafting responsive, high-performance web apps with React, Next.js, TypeScript, and Tailwind CSS — optimised for speed, accessibility, and beautiful UX.",
  },
  {
    num: "02",
    icon: "🤖",
    title: "Agentic AI Development",
    description:
      "Building intelligent AI agents and automation pipelines using OpenAI Agents SDK, RAG (Retrieval-Augmented Generation), and Gemini CLI & MCP.",
  },
  {
    num: "03",
    icon: "💬",
    title: "Chatbot Engineering",
    description:
      "Designing context-aware chatbots with Dialogflow ES, Kommunicate, and Flowise AI — for customer support, onboarding, and internal tools.",
  },
  {
    num: "04",
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Automating repetitive business processes with Make.com, cron jobs, and custom scripts to boost efficiency and reduce manual overhead.",
  },
  {
    num: "05",
    icon: "🎨",
    title: "UI/UX & Graphic Design",
    description:
      "Creating intuitive, pixel-perfect interfaces and branding assets that leave lasting impressions across web and digital platforms.",
  },
  {
    num: "06",
    icon: "📱",
    title: "React Native Development",
    description:
      "Building cross-platform mobile modules and apps with React Native — delivering consistent, smooth experiences on iOS and Android.",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 dark:text-green-400 border border-green-500/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          What I Do
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          Services I{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22c55e, #4ade80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Offer
          </span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
          From modern web apps and AI agents to chatbots and workflow
          automation — here&apos;s how I help you build smarter, faster.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            key={service.num}
            className="group relative bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-card"
          >
            {/* Background number */}
            <span className="absolute top-4 right-5 text-6xl font-black text-gray-100 dark:text-white/[0.03] select-none pointer-events-none leading-none">
              {service.num}
            </span>

            {/* Top accent */}
            <div className="h-px w-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-green-500/15 transition-colors">
              {service.icon}
            </div>

            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
