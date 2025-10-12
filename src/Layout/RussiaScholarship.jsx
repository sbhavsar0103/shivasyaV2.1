import React from "react";

export default function RussiaScholarship() {
  const scholarships = [
    {
      scholarships: "Government of Russian Federation Scholarships",
      awards: "Rs. 1.4K (RUB 1,500)",
    },
    {
      scholarships: "Open Doors: Russian Scholarship Project",
      awards: "Rs. 9.1K (RUB 10,000)",
    },
    {
      scholarships: "Benjamin A. Gilman Scholarships",
      awards: "Rs. 2.3K (RUB 2,500)",
    },
  ];

  return (
    <section className="w-full bg-[#3D1F14] text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Study in Russia Scholarship
        </h2>
        <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8">
          Russia has offered a huge range of scholarships to all of the
          applicants. Indian students who want to study in Russia have more than
          200 scholarship options, of which over 20 are for MBBS courses. To
          ease the burden of studies, students will focus on their growth. Some
          of the scholarships are mentioned below:
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-6">
          Scholarships in Russia for Indian Students
        </h3>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-white border-opacity-50 text-left text-white">
            <thead className="bg-[#C67B3E] text-white">
              <tr>
                <th className="border border-white border-opacity-50 px-4 py-3 font-semibold">
                  Particular
                </th>
                <th className="border border-white border-opacity-50 px-4 py-3 font-semibold">
                  Awards
                </th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#C67B3E]/80 transition duration-300"
                >
                  <td className="border border-white border-opacity-50 px-4 py-3">
                    {item.scholarships}
                  </td>
                  <td className="border border-white border-opacity-50 px-4 py-3">
                    {item.awards}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
