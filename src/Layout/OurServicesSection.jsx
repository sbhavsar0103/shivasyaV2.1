import React, { useState } from "react";

const services = [
  {
    title: "Career Counseling",
    description: `
      Global Colliance study abroad consultancy takes pride in providing personalized and comprehensive counseling services that cater to your unique needs.

      Our dedicated, experienced team of study abroad consultants will guide you through every step of the study abroad process. To make your study abroad experience smooth and stress-free, we offer one-on-one support, providing valuable insights and information to help you make informed decisions regarding your course selection, college/university choice, budget, and the right country for you.
    `,
  },
  {
    title: "Course, Country, and College/University Selection",
    description: `
      Whether you are interested in computer science, fashion designing, AI technology, psychology, business school, mechanical engineering, law, or any other program, we have 100+ programs to help you choose from. Our counselors will get in touch with you to understand your academic interests, future prospects, career goals, and personal preferences. Global Colliance aims to help you discover courses that match your passion and long-term goals by providing detailed information about diverse programs in various fields.

      The choice of country and educational institute plays an important role in your study abroad journey. Thus, Global Colliance has collaborated with the best and highest-ranking colleges and universities across Canada, the UK, the USA, Australia, New Zealand, Germany, France, and Dubai. Our team will assist you in exploring options that match your course preferences, considering factors such as reputation, faculty expertise, facilities, and overall educational experience. We ensure that you comprehensively understand each institution to make an informed decision.
    `,
  },
  {
    title: "Visa Guidance & Documentation",
    description: `We provide complete support in preparing and filing your visa application with accuracy. Our team ensures youmeet all documentation and financial requirements to minimize delays or rejections. With years of experienceand in-depth country-wise knowledge, Global Colliance ensures that your visa process is seamless and transparent.
    `,
  },
  {
    title: "Pre-Departure & Post-Arrival Assistance",
    description: ` From travel arrangements to accommodation assistance, Global Colliance ensures that students have a hassle-free transition abroad. We provide orientation sessions covering lifestyle, culture, and academic preparation to help students adapt to their new environment smoothly. Our team continues to support you even after you’ve reached your study destination.
    `,
  },
];

const OurServicesSection = () => {
  // 👇 Default: first service is open (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    // If clicked item is already open, close it; otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="text-center mb-6">
          <span className="inline-block bg-gray-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded">
            Our Services
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
          One-Stop Solution for All Your Study Abroad Queries
        </h2>

        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12 leading-relaxed text-sm sm:text-base">
          Our services consist of counseling, course guidance, university selection, and much more. We meet your visa
          requirements in the most hassle-free manner. Our technically qualified professionals are always ready to
          assist you and clear your doubts at the time you prefer.
        </p>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition-colors duration-300 ${
                  openIndex === index ? "bg-yellow-500" : "hover:bg-yellow-300"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">›</span>
                  <span>{service.title}</span>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px] py-5 px-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;