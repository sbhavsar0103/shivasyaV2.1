import { CheckCircle } from "lucide-react";

export default function StudentVisaApplicationProcess() {

  const points = [
    "Free initial consultation to assess eligibility and outline next steps",
    "Detailed document checklist preparation for a strong application",
    "Accurate online application submission to UKVI (UK Visas and Immigration)",
    "Biometric appointment scheduling at the UK Visa Application Centre",
    "Application tracking and regular updates until visa decision",
  ];

  return (
    <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          UK Student Visa Application Process
        </h3>

        {/* Intro Paragraph */}
        <div className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
          <p>
            Applying for a UK Student Visa may seem complex, but with expert guidance, 
            the process becomes structured, smooth, and efficient. Our experienced 
            UK Student Visa Consultants support you at every stage to ensure 
            accuracy, compliance, and a higher chance of approval.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <ul className="flex-1 grid grid-cols-1 gap-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-800 text-base sm:text-lg">
                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                <span>
                  <strong>Step {index + 1}:</strong> {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}