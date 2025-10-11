import USAStudentImage from "../assets/study/usa-visa-consultant.png";
import { CheckCircle } from "lucide-react";

export default function StudyInUSASection() {
  const points = [
    "Highly-Experienced Faculty",
    "Ties to Leading Industries",
    "A Welcoming and Active Culture",
    "Guaranteed High-quality Education",
    "Variety of Course Study",
    "Opportunities for Comprehensive Training",
    "Monetary Support",
    "Working with learning Opportunities",
    "Strong Employability Rate",
    "The choice to set up a global network",
  ];

  return (
    <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* H2 */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Study in USA
        </h3>

        {/* Paragraphs */}
        <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
          <p>
            Significantly, studying in USA is the ultimate dream for many overseas students due to its renowned academic institutions, diverse cultural background, and room for personal and professional development. It reflects the values and education status of the society. Compassion for the diversity of the population, individual freedom, and dedication to democratic ideals are a few of them. Broadly speaking, the goal of the U.S. education system is to provide quality education that can empower every student to gain their full potential as individuals, contribute actively to their community as citizens, and thrive in the rapidly evolving worldwide economy.
          </p>
          <p>
            The United States of America has made substantial progress in international education since the mid-1950s. While international student enrollment was just about 35,000, as per the study conducted in 2017, there was an astounding 84% of students pursuing STEM (Science, Technology, Engineering, and Mathematics) while Study in USA, nearly all students belong to India.
          </p>
        </div>

        {/* UL + Image Section */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* UL Left */}
          <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          {/* Image Right */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={USAStudentImage}
              alt="Study in USA"
              className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
