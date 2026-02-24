import { FaCode, FaPalette, FaMobileAlt, FaRobot, FaProjectDiagram, FaCogs } from "react-icons/fa";
import { JSX } from "react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaCode className="text-green-500 dark:text-green-300 text-4xl" />,
    title: "Frontend Development",
    description:
      "Building responsive, high-performance web applications with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaRobot className="text-blue-500 dark:text-blue-400 text-4xl" />,
    title: "Agentic AI Development",
    description:
      "Developing AI-powered agents and automation pipelines using OpenAI Agents SDK, RAG, and Gemini CLI & MCP.",
  },
  {
    icon: <FaProjectDiagram className="text-purple-500 dark:text-purple-400 text-4xl" />,
    title: "Chatbot Engineering",
    description:
      "Designing and deploying intelligent chatbots with Dialogflow ES, Kommunicate, and Flowise AI.",
  },
  {
    icon: <FaCogs className="text-yellow-500 dark:text-yellow-400 text-4xl" />,
    title: "Workflow Automation",
    description:
      "Automating business workflows using Make.com, cron jobs, and custom automation scripts.",
  },
  {
    icon: <FaPalette className="text-green-500 dark:text-green-300 text-4xl" />,
    title: "UI/UX & Graphic Design",
    description:
      "Creating visually stunning and user-friendly designs for web and digital platforms.",
  },
  {
    icon: <FaMobileAlt className="text-green-500 dark:text-green-300 text-4xl" />,
    title: "React Native Development",
    description:
      "Building cross-platform mobile modules and apps with React Native for iOS and Android.",
  },
];

export default function Service() {
  return (
    <section id="services" className="py-16 mt-10" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-green-500" style={{ color: "var(--foreground)" }}>
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg p-6 transition duration-300 transform hover:-translate-y-2"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
                {service.title}
              </h3>
              <p className="mt-2" style={{ color: "var(--muted)" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
