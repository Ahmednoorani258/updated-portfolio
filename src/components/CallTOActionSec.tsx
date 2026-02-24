import Link from "next/link";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function CAllToActionSec() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Dark background — intentionally always dark */}
      <div className="absolute inset-0" style={{ background: "#050709" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial green glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
          <FaEnvelope size={10} />
          Open to Opportunities
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          Let&apos;s Build Something{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Amazing
          </span>{" "}
          Together.
        </h2>

        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Whether it&apos;s a web app, an AI agent, or a chatbot — I&apos;m ready to bring your idea to life. Let&apos;s talk.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-green-500 text-white transition-all duration-300 hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-intenseGlow"
          >
            Start a Conversation <FaArrowRight size={13} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/10 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-green-500/40 hover:text-white hover:-translate-y-0.5"
          >
            See My Work
          </Link>
        </div>

        {/* Bottom info */}
        <p className="mt-10 text-xs text-gray-500">
          📍 Karachi, Pakistan · ahmednoorani258@gmail.com · Available for remote & on-site
        </p>
      </div>
    </section>
  );
}
