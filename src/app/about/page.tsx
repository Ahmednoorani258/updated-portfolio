import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const skillCategories = [
  {
    label: "Frontend & UI",
    color: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    skills: ["HTML5 / CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "React Native", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "AI & Automation",
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    skills: ["OpenAI Agents SDK", "RAG Pipelines", "Dialogflow ES", "Flowise AI", "Make.com", "Streamlit", "Prompt Engineering", "Gemini CLI & MCP"],
  },
  {
    label: "Backend & Databases",
    color: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Sanity CMS", "Laravel (Blade UI)", "Cron Jobs"],
  },
  {
    label: "Tools",
    color: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    skills: ["Git & GitHub", "Vercel", "Render", "Postman", "Hostinger", "OpenStreetMap"],
  },
];

const experience = [
  {
    title: "Frontend Developer",
    company: "IntactOne Solution",
    duration: "Apr 2025 – Present",
    current: true,
    points: [
      "Developed React & Next.js applications with optimised UI/UX.",
      "Integrated OpenStreetMap with district overlays for dynamic map visualisation.",
      "Built front-end UI components using Laravel Blade templating.",
      "Worked on React Native mobile modules for cross-platform apps.",
      "Implemented RAG pipelines and automation scripts for internal AI tools.",
    ],
  },
  {
    title: "Cost and Audit Officer",
    company: "CocoChan Restaurant, Karachi",
    duration: "Nov 2023 – Apr 2025",
    current: false,
    points: [
      "Conducted daily audits and data reconciliation with 100% accuracy.",
      "Optimised kitchen efficiency for meat items by 15% via analytical insights.",
      "Prevented fraud by evaluating internal controls and recommending improvements.",
    ],
  },
  {
    title: "Data Entry Operator & Store Keeper",
    company: "A.T.S Distribution, Karachi",
    duration: "Apr 2021 – Jul 2023",
    current: false,
    points: [
      "Managed inventory using FIFO method, reducing waste by 20%.",
      "Reconciled daily transactions in cloud-based software.",
    ],
  },
];

const education = [
  { title: "B.Sc. Computer Science (BSCS)", school: "Virtual University of Pakistan", duration: "2025 – Present", icon: "🎓" },
  { title: "Intermediate in Commerce", school: "Board of Intermediate Education, Karachi", duration: "Completed 2024", icon: "📚" },
  { title: "Matriculation – General", school: "Board of Secondary Education, Karachi", duration: "Completed 2023", icon: "🏫" },
];

const courses = [
  {
    title: "GIAIC",
    duration: "Feb 2024 – Present",
    icon: "🤖",
    topics: ["TypeScript", "Next.js", "Sanity CMS", "Python", "Streamlit", "OpenAI Agents SDK", "Gemini CLI & MCP", "Prompt Engineering"],
  },
  {
    title: "SMIT",
    duration: "Feb 2025 – Sep 2025",
    icon: "💡",
    topics: ["Dialogflow ES", "Kommunicate", "Make.com", "Streamlit", "Flowise AI"],
  },
];

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #22c55e, #4ade80)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* ── Intro ── */}
        <section>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 dark:text-green-400 border border-green-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            About Me
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Image */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/10 blur-2xl" />
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden border border-green-500/20 shadow-card">
                <Image src="/profile.png" alt="Muhammad Ahmed Noorani" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2">
                Muhammad Ahmed{" "}
                <span style={gradientText}>Noorani</span>
              </h1>
              <p className="text-green-500 dark:text-green-400 font-semibold mb-4 text-sm">
                Frontend Developer · Agentic AI Engineer · Chatbot Engineer
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                I build modern web UIs, AI-powered agents, chatbot workflows, and automation pipelines. My background in auditing gives me sharp analytical skills and meticulous attention to detail that carries through into every system I design.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <p>📧 ahmednoorani258@gmail.com</p>
                <p>📞 +92 329-2241747 · 📍 Karachi, Pakistan</p>
              </div>
              <a
                href="/Muhammad Ahmed Noorani Cv.docx"
                download
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold bg-green-500 text-white hover:bg-green-600 transition-all hover:-translate-y-0.5"
              >
                ⬇ Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">
            Skills &{" "}<span style={gradientText}>Technologies</span>
          </h2>
          <div className="space-y-7">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:-translate-y-0.5 ${cat.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">
            Work{" "}<span style={gradientText}>Experience</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-0 w-px bg-gradient-to-b from-green-500 via-green-500/30 to-transparent" />

            <div className="space-y-8 pl-12">
              {experience.map((item, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[2.15rem] top-1.5 w-3.5 h-3.5 rounded-full border-2
                      ${item.current
                        ? "border-green-500 bg-green-500"
                        : "border-green-500/40 bg-gray-50 dark:bg-gray-900"
                      }`}
                  >
                    {item.current && (
                      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
                    )}
                  </div>

                  <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-green-500/20 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full w-fit
                          ${item.current
                            ? "bg-green-500/10 text-green-500"
                            : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"
                          }`}
                      >
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.company}</p>
                    <ul className="space-y-1.5">
                      {item.points.map((pt, j) => (
                        <li key={j} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-green-500 mt-1 flex-shrink-0">▸</span> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education & Courses ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
              <span style={gradientText}>Education</span>
            </h2>
            <div className="space-y-4">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-2xl hover:border-green-500/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white leading-snug">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.school}</p>
                    <p className="text-xs text-green-500 dark:text-green-400 mt-1 font-medium">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
              <span style={gradientText}>Courses</span>
            </h2>
            <div className="space-y-4">
              {courses.map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-2xl hover:border-green-500/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-sm text-gray-900 dark:text-white">{item.title}</p>
                      <p className="text-xs text-green-500 dark:text-green-400">{item.duration}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
