"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";


export default function ContactPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Accessing form data
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "020ddf62-0ad6-455c-b032-c88906c56934");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();

      if (result.success) {
        // Reset the form fields
        (event.target as HTMLFormElement).reset();

        // Show an alert
        alert("Your message has been sent successfully!");
      } else {
        // Handle error case
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            Get in <span className="text-green-500 dark:text-green-300">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I&apos;d love to hear from you! Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaPhone className="text-green-500 dark:text-green-300 mr-4" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +92 (335) 379-1610
                  </span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-green-500 dark:text-green-300 mr-4" />
                  <span className="text-gray-600 dark:text-gray-300">
                    ahmednoorani258@gmail.com
                  </span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-green-500 dark:text-green-300 mr-4" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Karachi, Pakistan
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Follow Me
              </h2>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="https://www.linkedin.com/in/mahmednorani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-300 transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Ahmednoorani258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-300 transition duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.325928352286!2d67.05016657559597!3d24.88686184420016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef0aaf3bb6d%3A0x683dfc78735028ab!2sJamshed%20Rd%2C%20Government%20Quarters%20Jail%20Road%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731997029414!5m2!1sen!2s"
                width="100%"
                height="250"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 dark:text-gray-300 font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 dark:text-gray-300 font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 dark:text-gray-300 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  draggable="false"
                  rows={6}
                  className="w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
