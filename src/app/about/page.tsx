import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen px-6 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-300 dark:from-gray-900 dark:to-gray-700 py-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white">
            About <span className="text-green-500">Me</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Get to know me better! I'm a passionate Frontend Developer and Graphic Designer, always striving to create intuitive and visually appealing digital experiences.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <Image
                src={"/"}
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-full border-4 border-green-500 dark:border-green-300"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
                  Ahmed Noorani
                </h2>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Frontend Developer & Graphic Designer
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
              With expertise in <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and cutting-edge tools, I specialize in building responsive and aesthetic digital experiences. I believe in the power of creativity and code to make meaningful connections with users.
            </p>

            <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
              I'm committed to learning new technologies and continuously improving my skills to deliver high-quality work. Let's create something amazing together!
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="mailto:ahmednoorani258@gmail.com"
                className="px-6 py-2 bg-green-500 dark:bg-green-300 text-white dark:text-gray-900 rounded-lg hover:shadow-intenseGlow hover:bg-green-600 dark:hover:bg-green-400 transition"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/mahmednorani/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-green-500 dark:border-green-300 text-green-500 dark:text-green-300 rounded-lg hover:bg-green-500 hover:dark:bg-green-300 hover:text-white dark:hover:text-gray-800 transition hover:shadow-intenseGlow"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Ahmednoorani258"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-green-500 dark:border-green-300 text-green-500 dark:text-green-300 rounded-lg hover:bg-green-500 hover:dark:bg-green-300 hover:text-white dark:hover:text-gray-800 transition hover:shadow-intenseGlow"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Google Map */}
            <div className="w-auto h-64 lg:h-80 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.224029802975!2d67.04950017559604!3d24.89033884406089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef97b66b57d%3A0x2f6837174b551943!2sMartin%20Rd%2C%20Usmania%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731887593588!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-gray-700 dark:text-gray-400">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:ahmednoorani258@gmail.com"
                    className="text-green-500 dark:text-green-300 hover:underline"
                  >
                    ahmednoorani258@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  <strong>Phone:</strong> +92-335-379-1610
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  <strong>Location:</strong> Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
