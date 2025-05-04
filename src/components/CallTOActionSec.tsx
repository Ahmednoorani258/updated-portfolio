export default function CAllToActionSec() {
    return (
        <section className="bg-gray-200 dark:bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Let&apos;s Work Together!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Have a project in mind? Feel free to reach out and let&apos;s build something amazing.
          </p>
          <div className="mt-6 flex justify-center gap-4 mb-12 md:mb-0">
            <a
              href="/contact"
              className="bg-green-500 dark:bg-green-300 text-white dark:text-black px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all"
            >
              Contact Me
            </a>
            <a
              href="/projects"
              className="border border-green-500 dark:border-green-300 text-green-500 dark:text-green-300 px-6 py-3 rounded-lg shadow-md hover:bg-green-500 hover:text-white transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    )
}