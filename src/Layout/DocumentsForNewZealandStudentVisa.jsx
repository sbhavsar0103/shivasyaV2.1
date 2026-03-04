import { CheckCircle } from "lucide-react";

export default function DocumentsForNewZealandStudentVisa() {

    const documentPoints = [
        "Valid passport",
        "Completed and signed visa application form",
        "Recent passport-sized photographs",
        "Cover letter explaining the purpose and duration of stay",
        "Travel plan or transport details",
        "Proof of financial capacity to cover tuition fees and living expenses",
    ];

    const eligibilityCriteria = [
        "Offer of Place (Offer of Enrollment) from an approved institution",
        "Proof of tuition fee payment",
        "Evidence of sufficient funds for living expenses",
        "Valid health insurance for the entire duration of stay",
        "Medical examination report (if required)",
        "Police clearance certificate confirming no criminal record",
    ];

    const educationSystem = [
        "Levels 1–3: Secondary School / Trade Certificates",
        "Level 4: Certificate",
        "Levels 5–6: Diploma / First & Second Year of Degree",
        "Level 7: Bachelor’s Degree / Graduate Certificate / Graduate Diploma",
        "Level 8: Bachelor (Honours) / Postgraduate Certificate / Postgraduate Diploma",
        "Level 9: Master’s Degree",
        "Level 10: Doctoral Degree (PhD)",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">

            {/* Required Documents Section */}
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Required Documents for a New Zealand Student Visa
                </h3>

                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {documentPoints.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Eligibility Criteria Section */}
            <div className="max-w-7xl mx-auto flex flex-col gap-12 mt-16">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    Eligibility Criteria for a New Zealand Student Visa
                </h4>

                <div className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        To successfully obtain your New Zealand Student Visa, you must submit the following documents and meet the required eligibility standards:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {eligibilityCriteria.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Education System Section */}
            <div className="max-w-7xl mx-auto flex flex-col gap-12 mt-16">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    The Education System in New Zealand
                </h4>

                <div className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        New Zealand’s education system is globally respected and structured into three main stages: 
                        Primary Education, Secondary Education, and Tertiary Education. 
                        Tertiary institutions include Universities, Institutes of Technology and Polytechnics (ITPs), 
                        and Private Training Establishments (PTEs).
                    </p>

                    <p className="mt-4">
                        Institutions maintain small class sizes and supportive academic environments aligned with international standards. 
                        The quality of education is monitored by the New Zealand Qualifications Authority (NZQA) 
                        and structured under the New Zealand Qualifications Framework (NZQF), 
                        which categorizes qualifications into ten levels:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {educationSystem.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        <strong>Major Intakes:</strong> February and July
                    </p>
                    <p>
                        <strong>Rolling Intake:</strong> November (for selected programs)
                    </p>
                </div>
            </div>

        </section>
    );
}