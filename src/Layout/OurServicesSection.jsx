import React, { useState } from "react";
import { ChevronRight } from "lucide-react";


const services = [
  {
    title: "Career Counselling",
    description: `
At Shivasya Education, we take pride in offering personalized and comprehensive study-abroad counselling tailored to your unique goals.

Our experienced team of consultants guides you through every step of the study-abroad journey, ensuring a smooth and stress-free experience. Through one-on-one support and expert insights, we help you make informed decisions about course selection, university choice, budget planning, and the best country to pursue your education.
    `,
  },
  {
    title: "Course, Country, and University / College Selection",
    description: `
Whether your interests lie in computer science, fashion design, AI technology, psychology, business, mechanical engineering, law, or any other field, Shivasya Education offers over 100 programs to choose from.

Our counsellors take the time to understand your academic background, career aspirations, and personal preferences to help you select courses that align with your passion and long-term goals.

Choosing the right country and institution is a critical part of your study-abroad journey. We have partnered with top-ranking colleges and universities across Canada, the UK, the USA, Australia, New Zealand, Germany, France, and Dubai.

Our team guides you in exploring options that match your preferences, considering reputation, faculty expertise, facilities, and overall educational experience—ensuring you make a confident and informed decision.
    `,
  },
  {
    title: "Coaching and Clearing Prerequisites",
    description: `
Every college and university has specific admission requirements, including proof of English proficiency.

For students from countries where English is not the first language, passing internationally recognised exams such as IELTS, TOEFL, or PTE is essential.

At Shivasya Education, we provide expert preparation for IELTS, TOEFL, and PTE exams with a personalized approach and small batch sizes to ensure individual attention.

With years of experience, we have successfully trained over 15,000 students, helping them achieve outstanding scores and move closer to their study-abroad dreams.
    `,
  },
  {
    title: "Complete Support: From Application to Visa Process",
    description: `
Studying abroad involves multiple important steps—from selecting the right program, university, and country to preparing for required examinations.

One of the most critical documents is the Statement of Purpose (SOP). This essay explains your academic goals, reasons for choosing a specific program and institution, and your future career plans. A strong, well-crafted SOP can significantly enhance your admission chances.

Once you receive your admission confirmation, the next crucial step is applying for a student visa. This involves detailed documentation, including academic history, financial records, medical documents, and application forms.

At Shivasya Education, we provide end-to-end support throughout the entire process, ensuring accuracy, completeness, and timely submission to make your journey smooth and stress-free.
    `,
  },
  {
    title: "Financial Aid & Education Loans",
    description: `
We help students explore various financial options, including merit-based scholarships, need-based grants, and education loans with competitive interest rates and flexible repayment plans.

Our team provides guidance throughout the funding process, maximizing your chances of securing financial assistance and making your study-abroad dream affordable and achievable.
    `,
  },
  {
    title: "Pre-Departure and Post-Landing Services",
    description: `
At Shivasya Education, studying abroad is more than just securing admission—it’s about ensuring a smooth transition into a new academic and cultural environment.

Our pre-departure support includes travel guidance, visa procedures, accommodation assistance, and preparation sessions.

After you arrive, we continue supporting you with post-landing assistance, orientation resources, and local network connections—helping you adapt quickly, feel confident, and thrive in your international education journey.
    `,
  },
];

const OurServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="text-center mb-6">
          <span className="inline-block bg-[#C67B3E]/10 text-[#3D1F14] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded">
            Our Services
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#3D1F14] mb-4">
          One-Stop Solution for All Your Study Abroad Queries
        </h2>

        <p className="text-[#3D1F14]/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed text-sm sm:text-base">
          Our services consist of counseling, course guidance, university selection, and much more. We meet your visa
          requirements in the most hassle-free manner. Our technically qualified professionals are always ready to
          assist you and clear your doubts at the time you prefer.
        </p>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#C67B3E]/30 rounded-md overflow-hidden shadow-sm transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between px-6 py-3 font-semibold text-white transition-colors duration-300 ${openIndex === index
                  ? "bg-[#C67B3E]"
                  : "bg-[#3D1F14] hover:bg-[#C67B3E]"
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-90" : "rotate-0"
                      }`}
                  />
                  <span>{service.title}</span>
                </div>
              </button>

              {/* Accordion Body */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[500px] py-5 px-6" : "max-h-0"
                  }`}
              >
                <p className="text-[#3D1F14]/80 text-sm sm:text-base leading-relaxed text-justify whitespace-pre-line">
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