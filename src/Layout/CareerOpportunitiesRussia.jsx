import React from "react";
import { CheckCircle, Award, CreditCard, LineChart, FlaskConical, Building2, Languages, Handshake, Network, LifeBuoy, Earth, UserLock } from "lucide-react";

export default function CareerOpportunitiesRussia() {
  const opportunities = [
    {
      icon: <CheckCircle className="w-10 h-10 text-[#3D1F14]" />,
      title: "Post-Study Work Visa",
      description:
        "After completing your studies in Russia, you can apply for an 18-month post-study work visa to search for a job related to your field of study.",
    },
    {
      icon: <Award className="w-10 h-10 text-[#3D1F14]" />,
      title: "High Demand for Skilled Professionals",
      description:
        "Russia has a strong demand for skilled professionals in various industries, including engineering, IT, healthcare, and finance. Graduates in these fields often find ample job opportunities.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-[#3D1F14]" />,
      title: "Blue Card for Highly Skilled Workers",
      description:
        "If you secure a job with an annual salary above a certain threshold, you can apply for the EU Blue Card. This card provides residence and work rights in Russia and other EU countries.",
    },
    {
      icon: <LineChart className="w-10 h-10 text-[#3D1F14]" />,
      title: "Strong Economy",
      description:
        "Russia boasts one of the largest and most stable economies in Europe. This economic strength translates into a wide range of job opportunities.",
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-[#3D1F14]" />,
      title: "Research and Innovation",
      description:
        "Russia is a global leader in research and innovation. Graduates with research skills are highly sought after in academia and industry.",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#3D1F14]" />,
      title: "Multinational Companies",
      description:
        "Many multinational corporations have their headquarters or regional offices in Russia, offering career prospects for international graduates.",
    },
    {
      icon: <Languages className="w-10 h-10 text-[#3D1F14]" />,
      title: "Language Proficiency",
      description:
        "While many jobs are available in English, having proficiency in Russian can significantly expand your job prospects, especially in smaller companies and certain sectors.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-[#3D1F14]" />,
      title: "Internship and Cooperative Programs",
      description: "Russian Universities often have strong ties with local companies and offer internship and cooperative programs, giving students practical experience during their studies."
    },
    {
      icon: <Network className="w-10 h-10 text-[#3D1F14]" />,
      title: "Networking Opportunities",
      description: "Russia provides a vibrant networking environment, with various industry events, conferences, and meetups that can help you connect with potential employers."
    },
    {
      icon: <LifeBuoy className="w-10 h-10 text-[#3D1F14]" />,
      title: "Quality of Life",
      description: "Russia offers a high quality of life, with excellent healthcare, education, and public services. It's also known for its work-life balance, making it an attractive place to build a career."
    },
    {
      icon: <Earth className="w-10 h-10 text-[#3D1F14]" />,
      title: "Global Mobility",
      description: "A career in Russia can open doors to opportunities not only in Europe but also worldwide, given its strong global economic ties."
    },
    {
      icon: <UserLock className="w-10 h-10 text-[#3D1F14]" />,
      title: "Job Security",
      description: "Russian labor laws often provide strong job security, with legal protections for employees."
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Career Opportunities
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#3D1F14] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
