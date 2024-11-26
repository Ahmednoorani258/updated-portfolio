import React from "react";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"Services"
} 

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 ">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            My <span className="text-green-500 dark:text-green-300">Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the services I provide to help you achieve your digital and design goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="shadow-glow hover:shadow-intenseGlow bg-white dark:bg-gray-800 rounded-xl  p-8 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 dark:text-green-300 mb-4">
              <i className="fas fa-code text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting responsive and dynamic websites using the latest technologies like React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-glow hover:shadow-intenseGlow p-8 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 dark:text-green-300 mb-4">
              <i className="fas fa-pencil-ruler text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Graphic Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Designing user-friendly interfaces and creating visually stunning graphics for various platforms.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-glow hover:shadow-intenseGlow p-8 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 dark:text-green-300 mb-4">
              <i className="fas fa-palette text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating intuitive and aesthetically pleasing designs that enhance user experiences.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-glow hover:shadow-intenseGlow p-8 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 dark:text-green-300 mb-4">
              <i className="fas fa-shopping-cart text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">E-Commerce Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building scalable and secure e-commerce applications tailored to your business needs.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-glow hover:shadow-intenseGlow p-8 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 dark:text-green-300 mb-4">
              <i className="fas fa-tools text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Maintenance & Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Offering ongoing support and maintenance to keep your applications running smoothly.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-glow hover:shadow-intenseGlow p-8 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 dark:text-green-300 mb-4">
              <i className="fas fa-cloud text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Cloud Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Integrating cloud services to ensure seamless data management and scalability for your projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
