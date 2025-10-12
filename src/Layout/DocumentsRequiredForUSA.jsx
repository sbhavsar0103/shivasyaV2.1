import USAStudentImage from "../assets/study/usa-visa-consultant.png";
import { CheckCircle } from "lucide-react";

export default function DocumentsRequiredForUSA() {
  const points = [
    "A Valid Passport",
    "University Certificates",
    "Financial Documents (Such as bank statements, sponsorship letters, and Bank balance Certificates)",
    "Proof of Language ( Such as TOEFL, IELTS, PTE)",
    "Passport size Photographs",
    "Employment Experience letter (If Applicable)",
    "Form DS-160",
    "Visa Application Form and Fee Receipt",
    "Form 1-20",
  ];

  return (
    <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* H2 */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          What are the Documents Required for USA Student Visa?
        </h3>

        {/* Paragraphs */}
        <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
          <p>
            USA Student Visa Consultant assists students regarding all the necessary steps they need to follow to get a US study Visa. Below you can find the required document list to enroll in the USA education consultancy to Study in USA:
          </p>
          <p>
            The United States of America has made substantial progress in international education since the mid-1950s. While international student enrollment was just about 35,000, as per the study conducted in 2017, there was an astounding 84% of students pursuing STEM (Science, Technology, Engineering, and Mathematics) while Study in USA, nearly all students belong to India.
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
        <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
          <p>
            The consular officer’s discretion would be considered last upon the approval of Visa. You would also need to pay additional issuance fees after approval.
          </p>
          <p>
            A visa denial can hugely hinder your potential to continue your Study in USA. To avoid hiccups in your easy and smooth US visa process, move to Shivasya now, one of the best USA student Visa Consultant in Ahmedabad.
          </p>
        </div>
      </div>
    </section>
  );
}
