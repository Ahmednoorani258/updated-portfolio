import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
      {/* Light/Dark Theme Background */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-900"></div>
        <div className="absolute top-10 right-20 w-36 h-36 bg-green-500 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500 opacity-10 rounded-full animate-bounce"></div>
      </div>

      {/* Main Intro Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            About <span className="text-green-500 dark:text-green-300">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I&lsquo;m <span className="text-green-500 dark:text-green-300">Ahmed Noorani</span>, a passionate Frontend Developer and Graphic Designer with expertise in crafting visually stunning and user-friendly web experiences. I bring ideas to life through modern web technologies and creative visuals.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From creating seamless user interfaces to branding and motion graphics, I aim to deliver experiences that leave a lasting impact.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white dark:text-black hover:shadow-intenseGlow dark:bg-green-300 dark:hover:bg-green-500 rounded-lg hover:bg-green-600 transition duration-300 font-bold">
            Download Resume
          </button>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full border-4 border-green-500 dark:border-green-300 relative overflow-hidden">
            <Image
              src="/profile.jpg" // Replace with actual image
              alt="Ahmed Noorani"
              layout="fill"
              objectFit="cover"
              className="animate-glow"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-8">
          My <span className="text-green-500 dark:text-green-300">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { skill: "HTML", level: "90%" },
            { skill: "CSS", level: "85%" },
            { skill: "JavaScript", level: "80%" },
            { skill: "TypeScript", level: "90%" },
            { skill: "React", level: "75%" },
            { skill: "NextJs", level: "65%" },
            { skill: "Tailwind CSS", level: "90%" },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            >
              <p className="text-gray-700 dark:text-gray-300">{skill.skill}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                <div
                  className="bg-green-500 dark:bg-green-300 h-2 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience and Education Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-8">
          Experience & <span className="text-green-500 dark:text-green-300">Education</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Experience
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Frontend Developer",
                  company: "CodeAN Tech",
                  duration: "2021 - Present",
                  description:
                    "Building responsive and user-friendly web applications.",
                },
                {
                  title: "Graphic Designer",
                  company: "Freelance",
                  duration: "2018 - Present",
                  description:
                    "Creating brand identities, motion graphics, and visual designs.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                >
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.company} ({item.duration})
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Education
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Intermediate in Commerce",
                  school: "(Biek) Board of Intermediate Education Karachi",
                  duration: "2021 - 2023",
                  // description:
                  //   "Specialized in web development and user experience design.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                >
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.school} ({item.duration})
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {/* {item.description}   */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
