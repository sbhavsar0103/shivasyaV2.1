import { useState } from "react";
import PointIcon from "../assets/utility/pointer.png";
import PatternBg from "../assets/utility/pattern-15.jpg";

const faqData = [
  {
    title: "Management",
    items: ["Business Management", "Event Management", "Health Management", "Project Management", "Supply Chain Management"],
  },
  {
    title: "Engineering",
    items: [
      "Automotive Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
      "Petroleum Engineering",
    ],
  },
  {
    title: "Business",
    items: [
      "Business Analytics",
      "Business Management"
    ],
  },
  {
    title: "Health Science",
    items: ["Cardiovascular Science", "Fitness", "Health Psychology", "Kinesiology", "Nursing"],
  },
  {
    title: "Biological & Life Sciences",
    items: ["Bioinformatics", "Clinical Science", "Genetics", "Zoology"],
  },
  {
    title: "Law & Legal Studies",
    items: ["LLB", "LLM", "Criminology", "Justice & Emergency Services", "Forensic Science"],
  },
  {
    title: "Computer Science & IT",
    items: ["Game Programming", "Software Development", "Cyber Security", "Mobile Applications", "Web Applications"],
  },
];

export default function PopularCourses() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split data into 3 columns
  const columns = [faqData.slice(0, 3), faqData.slice(3, 5), faqData.slice(5)];

  return (
    <section
      className="relative py-8 sm:py-12 md:py-16 bg-gray-50"
      style={{ backgroundImage: `url(${PatternBg})`, backgroundSize: "cover" }}
    >
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D1F14]">
            {/* POPULAR COURSES */}
            POPULAR COURSES
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="space-y-4">
                {col.map((faq, index) => {
                  const globalIndex = colIndex * 3 + index;
                  const isActive = activeIndex === globalIndex;
                  return (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                      <button
                        onClick={() => toggleAccordion(globalIndex)}
                        className={`w-full flex justify-between items-center p-4 text-left font-semibold ${
                          isActive ? "bg-[#f3f3f3]" : "bg-white"
                        }`}
                      >
                        {faq.title}
                        <span
                          className={`transition-transform duration-300 ${
                            isActive ? "rotate-90" : ""
                          }`}
                        >
                          &gt;
                        </span>
                      </button>
                      {isActive && (
                        <div className="p-4 bg-white">
                          <ul className="space-y-2">
                            {faq.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <img src={PointIcon} alt="point" className="w-4 h-4" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
