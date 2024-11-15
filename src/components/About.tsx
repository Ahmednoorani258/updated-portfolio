export default function About() {
    return (
        <section className="py-20 bg-gray-50" id="about">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600">
              I am a passionate frontend web developer and graphic designer.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <img
                src="https://via.placeholder.com/300" // Replace with your image
                alt="Ahmed Noorani"
                className="w-40 h-40 rounded-full mx-auto lg:mx-0 shadow-lg"
              />
            </div>
  
            {/* Right Column - Content */}
            <div className="lg:w-1/2 w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ahmed Noorani
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                I am a frontend web developer with a passion for creating beautiful,
                responsive, and user-friendly websites. I am also a graphic designer
                with expertise in designing intuitive and visually appealing user
                interfaces. Currently, I am working on a <strong>resume builder</strong> project
                that allows users to create, customize, and export professional resumes
                with ease. My primary focus is to provide seamless and visually engaging
                experiences.
              </p>
              <p className="text-lg text-gray-700">
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