import React from "react";
import { FileText } from "lucide-react";

const requirements = [
  { id: 1, text: "All academic documents: 10th and 12th mark sheets", variant: "light" },
  { id: 2, text: "Bachelor's all marks sheets", variant: "dark" },
  { id: 3, text: "Statement of Purpose (SOP)", variant: "light" },
  { id: 4, text: "Experience certificate", variant: "dark" },
  { id: 5, text: "English proficiency test scorecard", variant: "light" },
  { id: 6, text: "Letter of Recommendation (LOR)", variant: "dark" },
  { id: 7, text: "IELTS score minimum 5.0 bands", variant: "light" },
  { id: 8, text: "TOEFL score minimum 79", variant: "dark" },
  { id: 9, text: "PTE score minimum 52", variant: "light" },
];

export default function RussiaAdmissionRequirement() {
  return (
    <section className="w-full bg-[#3D1F14] py-16 px-4 sm:px-6 lg:px-8 mb-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#C67B3E] mb-4">
            Admission Requirement
          </h2>
          <p className="text-white text-lg sm:text-xl font-light">
            Essential documents needed for admission in Russia
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((req) => {
            const isDark = req.variant === "dark";

            return (
              <div
                key={req.id}
                className={`group rounded-2xl p-6 border border-[#C67B3E]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDark
                    ? "bg-[#3D1F14] text-white"
                    : "bg-white text-[#3D1F14]"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 p-3 rounded-xl transition-colors duration-300 ${
                      isDark
                        ? "bg-[#C67B3E]/20 group-hover:bg-[#C67B3E]/30"
                        : "bg-[#C67B3E]/10 group-hover:bg-[#C67B3E]/20"
                    }`}
                  >
                    <FileText
                      className="w-8 h-8 text-[#C67B3E]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}
                  <p
                    className={`font-semibold text-base leading-tight ${
                      isDark ? "text-white" : "text-[#3D1F14]"
                    }`}
                  >
                    {req.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
