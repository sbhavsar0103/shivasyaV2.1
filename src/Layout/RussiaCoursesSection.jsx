import React from "react";
import {
  BookOpen,
  FlaskConical,
  Palette,
  Briefcase,
  Code,
  GraduationCap,
  Wrench,
  Heart,
  UtensilsCrossed,
  Building2,
  Film,
  Scale,
} from "lucide-react";

const courses = [
  { id: 1, name: "MBBS in Russia", icon: BookOpen, variant: "light" },
  { id: 2, name: "Science in Russia", icon: FlaskConical, variant: "dark" },
  { id: 3, name: "Arts in Russia", icon: Palette, variant: "light" },
  { id: 4, name: "Management in Russia", icon: Briefcase, variant: "dark" },
  { id: 5, name: "Information Technology (IT)", icon: Code, variant: "dark" },
  { id: 6, name: "Education & Training", icon: GraduationCap, variant: "light" },
  { id: 7, name: "Engineering in Russia", icon: Wrench, variant: "dark" },
  { id: 8, name: "Medicine and HealthCare", icon: Heart, variant: "light" },
  { id: 9, name: "Hospitality & Tourism", icon: UtensilsCrossed, variant: "light" },
  { id: 10, name: "Banking & Finance", icon: Building2, variant: "dark" },
  { id: 11, name: "Media & Films", icon: Film, variant: "light" },
  { id: 12, name: "Law in Russia", icon: Scale, variant: "dark" },
];

export default function RussiaCoursesSection() {
  return (
    <section className="w-full bg-[#C67B3E] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D1F14] mb-4">
            Top Courses to Study in Russia
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white font-light">
            What do you want to study abroad?
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const Icon = course.icon;
            const isDark = course.variant === "dark";

            return (
              <button
                key={course.id}
                className={`group relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDark
                    ? "bg-[#3D1F14] text-white border border-[#3D1F14]/20"
                    : "bg-white text-[#3D1F14] border border-[#3D1F14]/20"
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div
                    className={`p-4 rounded-xl transition-colors duration-300 ${
                      isDark
                        ? "bg-[#C67B3E]/20 group-hover:bg-[#C67B3E]/30"
                        : "bg-[#C67B3E]/10 group-hover:bg-[#C67B3E]/20"
                    }`}
                  >
                    <Icon
                      className="w-10 h-10 text-[#3D1F14]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text */}
                  <h3
                    className={`text-center font-semibold text-lg leading-tight ${
                      isDark ? "text-white" : "text-[#3D1F14]"
                    }`}
                  >
                    {course.name}
                  </h3>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark ? "bg-white/5" : "bg-[#3D1F14]/5"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
