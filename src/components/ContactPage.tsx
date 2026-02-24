"use client"
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
    <div className="min-h-screen py-16 px-6" style={{ background: "var(--background)" }}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
            Get in{" "}
            <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            I&apos;d love to hear from you! Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="rounded-xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                Contact Information
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaPhone className="text-green-500 mr-4 shrink-0" />
                  <span style={{ color: "var(--muted)" }}>+92 (329) 224-1747</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-green-500 mr-4 shrink-0" />
                  <span style={{ color: "var(--muted)" }}>ahmednoorani258@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-green-500 mr-4 shrink-0" />
                  <span style={{ color: "var(--muted)" }}>Karachi, Pakistan</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="rounded-xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                Follow Me
              </h2>
              <div className="flex space-x-3 text-2xl">
                <a
                  href="https://www.linkedin.com/in/mahmednorani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg transition duration-300 hover:text-green-500"
                  style={{ background: "var(--surface-hover)", color: "var(--muted)", border: "1px solid var(--border)" }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Ahmednoorani258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg transition duration-300 hover:text-green-500"
                  style={{ background: "var(--surface-hover)", color: "var(--muted)", border: "1px solid var(--border)" }}
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl" style={{ border: "1px solid var(--border)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.325928352286!2d67.05016657559597!3d24.88686184420016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef0aaf3bb6d%3A0x683dfc78735028ab!2sJamshed%20Rd%2C%20Government%20Quarters%20Jail%20Road%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731997029414!5m2!1sen!2s"
                width="100%"
                height="250"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--foreground)" }}>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  style={{ background: "var(--surface-hover)", color: "var(--foreground)", border: "1px solid var(--border)" }}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  style={{ background: "var(--surface-hover)", color: "var(--foreground)", border: "1px solid var(--border)" }}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  draggable="false"
                  rows={6}
                  className="w-full rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
                  style={{ background: "var(--surface-hover)", color: "var(--foreground)", border: "1px solid var(--border)" }}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-3 rounded-lg transition duration-300 hover:-translate-y-0.5"
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