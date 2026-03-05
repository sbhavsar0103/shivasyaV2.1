import USAStudentImage from "../assets/study/Study in usa.jpg";
import { CheckCircle } from "lucide-react";

export default function StudyInUSASection() {
  const points = [
    "Highly Experienced Faculty – Learn from world-class educators",
    "Strong Industry Connections – Access to leading companies",
    "Welcoming & Multicultural Campus Life",
    "Guaranteed High-Quality Education Standards",
    "Wide Variety of Courses Across Diverse Fields",
    "Comprehensive Training & Research Opportunities",
    "Financial Support – Scholarships & Assistantships",
    "Internships & Practical Work Opportunities",
    "Strong Employability & Career Prospects",
    "Global Networking Opportunities",
  ];

  return (
    <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Why Students Choose to Study in the USA
        </h3>

        {/* Paragraphs */}
        <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p>
            Studying in the United States is a dream for many international students 
            due to its globally recognized universities, diverse culture, and 
            exceptional opportunities for academic and professional growth. 
            The U.S. education system promotes innovation, independence, 
            diversity, and critical thinking — preparing students to thrive 
            in the global economy.
          </p>
          <p>
            Over the decades, the United States has become one of the top 
            destinations for international education. A significant number 
            of students from India pursue STEM (Science, Technology, 
            Engineering, and Mathematics) programs, benefiting from 
            world-class infrastructure and research exposure.
          </p>
        </div>

        {/* List + Image */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* Bullet Points */}
          <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-800 text-base sm:text-lg"
              >
                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0 mt-1" />
                {point}
              </li>
            ))}
          </ul>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={USAStudentImage}
              alt="Students studying in the USA"
              className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-gray-900 font-semibold text-base sm:text-lg text-center lg:text-left">
          Studying in the USA not only ensures academic excellence but also 
          equips students with global exposure, practical skills, and 
          lifelong professional networks.
        </p>

      </div>
    </section>
  );
}