import USAStudentImage from "../assets/study/usa-visa-consultant.png";
import { CheckCircle } from "lucide-react";

export default function StudentVisaApplicationProcess() {
  const points = [
    "Free First Consultation",
    "Enable a list of the essential additional documents",
    "Finalization and submission of your online application to UKVI",
    "Schedule an appointment for biometric processing at a UK visa center to submit the required documentation.",
    "Stay connected with immigration and UK visa formalities on your behalf",
  ];

  return (
    <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* H2 */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Student Visa Application Process
        </h3>

        {/* Paragraphs */}
        <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
          <p>
            In order to fasten the UK Study visa application process and boost the chances of approval, your immigration application will undertake the following steps:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <ul className="flex-1 grid grid-cols-1 sm:grid-cols-1 gap-4 self-center">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
