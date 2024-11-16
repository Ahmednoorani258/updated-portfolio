import Image from "next/image";
export default function HeroSection() {
  return (
    <section className=" container min-h-screen mx-auto flex flex-col md:flex-row items-center justify-center md:mt-0" >
      <div className="  md:max-w-3xl md:pr-8 lg:xl ">
        <h6 className=" text-gray-400 py-4 mt-12 text-2xl italic font-serif">hello! </h6>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white lg:text-6xl">
          I am <span className="text-green-500 dark:text-green-300 ">A</span>hmed{" "}
          <span className="text-green-500 dark:text-green-300">N</span>oorani.
          <br />
          A{" "}
          <span className="text-green-500 dark:text-green-300">F</span>rontend{" "}
          <span className="text-green-500 dark:text-green-300">D</span>eveloper
          & <span className="text-green-500 dark:text-green-300">G</span>raphic{" "}
          <span className="text-green-500 dark:text-green-300">D</span>esigner.
        </h1>
        <h2 className="mt-6 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Crafting visually stunning and user-friendly web experiences.
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          With a passion for frontend development and design, I create
          responsive, aesthetic, and engaging digital experiences.
        </p>
        <div className="mt-6 space-x-2 sm:space-x-4">
          <button className="hover:shadow-intenseGlow px-4 sm:px-9 py-4  bg-green-500 dark:bg-green-300  text-white dark:text-black  font-bold rounded-lg hover:bg-green-600 dark:hover:bg-green-400 transition duration-300">
            Hire Me
          </button>
          <button className="hover:shadow-intenseGlow px-4 sm:px-9 py-4 border border-green-500 dark:border-green-300 text-green-500 dark:text-green-300 font-bold rounded-lg hover:bg-green-600 hover:text-white dark:hover:bg-green-300 dark:hover:text-black transition duration-300 ">
            View My Work
          </button>
        </div>
      </div>
      <div className="border-4 mt-5 border-green-500 dark:border-green-300  rounded-full">
        <Image
          src={"/"}
          alt="profilepic"
          width={280}
          height={280}
          className="rounded-full animate-glow"
        ></Image>
      </div>
    </section>
  );
}
