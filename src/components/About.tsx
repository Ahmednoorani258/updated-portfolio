import Image from 'next/image'

export default function About() {
    return (
        <section className="py-20 "id="about">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 border-b-4 border-green-500 dark:border-green-300 ">
              About <span className="text-green-500 dark:text-green-300">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-200">
              I am a passionate frontend web developer and graphic designer.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/3 w-full text-center lg:text-left">
              <Image
                src={'/'} // Replace with your image
                alt="Ahmed Noorani"
                height={300}
                width={300}
                className="rounded-full mx-auto lg:mx-0 border-2 border-green-500 dark:border-green-300"
              />
            </div>
  
            {/* Right Column - Content */}
            <div className="lg:w-1/2 w-full shadow-glow p-3">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-slate-50 mb-4">
                Ahmed Noorani
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                I am a frontend web developer with a passion for creating beautiful,
                responsive, and user-friendly websites. I am also a graphic designer
                with expertise in designing intuitive and visually appealing user
                interfaces.My primary focus is to provide seamless and visually engaging
                experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                In addition to my skills in web development, I am experienced in using
                frameworks and libraries like <strong>Tailwind CSS, Aceternity UI, and ShadCN UI</strong>.
                I always strive to stay updated with the latest design trends and
                development techniques to ensure the best results in every project I undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}