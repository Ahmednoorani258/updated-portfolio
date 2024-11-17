import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa";


interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  const services: Service[] = [
    {
      icon: <FaCode className="text-green-500 text-4xl" />,
      title: "Frontend Development",
      description: "Building responsive and high-performance web applications with modern technologies.",
    },
    {
      icon: <FaPalette className="text-green-500 text-4xl" />,
      title: "Graphic Design",
      description: "Creating visually stunning and user-friendly designs for digital platforms.",
    },
    {
      icon: <FaMobileAlt className="text-green-500 text-4xl" />,
      title: "Responsive Design",
      description: "Ensuring your website looks great on all devices and screen sizes.",
    },
  ];
  
export default function Service() {
    return (
        <section id="services" className=" py-16 mt-10 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 border-b-2   border-green-500 dark:border-green-300">My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  mt-16 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{service.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
    
}



