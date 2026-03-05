import React from "react";
import OurMission from "../assets/aboutus/Ourmission.jpeg";
import OurVision from "../assets/aboutus/Ourvision.jpeg";

const aboutData = {
  badge: "About Company",
  heading: "One-Stop Solution For All Your Visa Needs",
  intro:
    "Shivasya Education is a leading study-abroad consultancy in India, providing expert guidance and comprehensive services for students seeking overseas education opportunities. With over a decade of experience, we have established ourselves as a trusted name committed to delivering excellence, convenience, and personalized support to aspiring global students.",
};

const sections = [
  {
    title: "Our Vision",
    image: OurVision,
    paragraphs: [
      "At Shivasya Education, our vision is to create a world where every student has the opportunity to expand their horizons and gain meaningful global exposure through foreign education. We believe that studying abroad not only enhances academic and professional prospects but also fosters personal growth and cross-cultural understanding.",
      "We are committed to a future where every student can participate in transformative study-abroad programs, helping them evolve into global citizens with the mindset and skills to make a positive impact on the world.",
    ],
  },
  {
    title: "Our Mission",
    image: OurMission,
    paragraphs: [
      "At Shivasya Education, our mission is to provide students with exceptional study-abroad experiences that inspire personal growth, academic excellence, and cross-cultural understanding.",
      "We strive to offer diverse programs that help students develop their skills, enhance critical thinking, encourage self-expression, and master multitasking. Our goal is to deliver a world-class study-abroad experience aligned with each student’s interests and budget.",
      "To achieve this, we partner with leading colleges and universities across Canada, the UK, the USA, Australia, New Zealand, Germany, France, Italy, Europe, and Dubai. Through these collaborations, we empower students with the knowledge and experience needed to become global leaders capable of making a meaningful impact in the world.",
    ],
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <span className="inline-block bg-gray-100 text-[#3D1F14] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4">
          {aboutData.badge}
        </span>

        {/* Heading */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 leading-snug">
          {aboutData.heading}
        </h3>

        {/* Intro */}
        <p className="text-gray-600 max-w-5xl mx-auto mb-12 text-sm sm:text-base text-justify leading-relaxed">
          {aboutData.intro}
        </p>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              
              {/* Image */}
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="text-[#3D1F14] font-semibold flex items-center mb-3">
                  <span className="mr-2">➤</span> {section.title}
                </h3>

                <hr />

                <div className="pt-5">
                  {section.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-500 text-sm sm:text-base text-justify mt-4 first:mt-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;