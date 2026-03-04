import { CheckCircle } from "lucide-react";

export default function DocumentsRequiredForUSA() {
  const points = [
    "Valid Passport",
    "Academic / University Certificates & Transcripts",
    "Financial Documents (Bank Statements, Sponsorship Letters, Bank Balance Certificates)",
    "Proof of English Language Proficiency (TOEFL, IELTS, PTE)",
    "Recent Passport-Sized Photographs",
    "Employment Experience Letter (If Applicable)",
    "Form DS-160 – Nonimmigrant Visa Application",
    "Visa Application Form & Fee Payment Receipt",
    "Form I-20 – Certificate of Eligibility for Student Status",
  ];

  return (
    <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Documents Required for a USA Student Visa 🇺🇸
        </h3>

        {/* Intro Paragraph */}
        <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p>
            A USA Student Visa Consultant guides students through every step 
            of the U.S. study visa process. Preparing the correct documents 
            is crucial to avoid delays or rejection. Below is the essential 
            checklist required for a USA Student Visa:
          </p>
        </div>

        {/* Documents List */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <ul className="flex-1 grid grid-cols-1 gap-4 self-center">
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
        </div>

        {/* Closing Notes */}
        <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p>
            Final visa approval is granted at the discretion of the 
            consular officer. Additional visa issuance fees may apply 
            after approval.
          </p>
          <p>
            A visa refusal can significantly delay your plans to study in 
            the USA. To avoid complications and ensure a smooth process, 
            consult Shivasya — one of the trusted USA Student Visa 
            Consultants in Ahmedabad — for expert guidance and 
            documentation support.
          </p>
        </div>

      </div>
    </section>
  );
}