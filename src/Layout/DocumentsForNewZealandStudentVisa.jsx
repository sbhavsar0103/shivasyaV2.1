import { CheckCircle } from "lucide-react";

export default function DocumentsForNewZealandStudentVisa() {
    const Documentpoints = [
        "Valid Passport",
        "Signed Visa Application Form",
        "Photographs",
        "A Cover letter outlining the purpose and spam of stay",
        "Comprehensive Transport Schedule",
        "Documents demonstrating financial status",
    ];

    const EligibilityCriteria = [
        "Offer of Enrollment",
        "Payment of Tuition Fees",
        "Financial proof to meet your living ends",
        "Health Insurance for the duration of your stay",
        "Required Medical Test Report",
        "No previous Criminal Record"
    ]

    const EducationSystem = [
        "Levels 1, 2, and 3 - Secondary School / Trades Certificate",
        "Level 4 - Certificate",
        "Level 5, 6 - Diploma / 1st & 2nd year in College",
        "Level 7 - Bachelor Degree / Graduate Certificate / Graduate Diploma",
        "Level 8 - Bachelor(Honors) / Postgraduate Certificate / PG Diploma",
        "Level 9 - Master Degree",
        "Level 10 - Doctoral Degree / PhD",
    ]

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Required Documents for New Zealand Student Visa
                </h3>

                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* UL Left */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {Documentpoints.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-12 mt-16">
                {/* H2 */}
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    Eligibility Criteria for New Zealand Student Visa
                </h4>
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        To get your desired New Zealand Student Visa you need to submit the following proof:
                    </p>
                </div>


                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* UL Left */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {EligibilityCriteria.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-12 mt-16">
                {/* H2 */}
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    The Education System in New Zealand
                </h4>
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        The education system in New Zealand is categorized into three stages Primary, Secondary, and Tertiary such as Universities, Institutes of technology, and polytechnic (ITPs), and Private Training Establishments (PTEs) for higher education. There are classrooms that provide supportive academic surroundings that comply with global standards considering limited student numbers and groups. Assuring quality standards and keeping an eye on academic institutions are the New Zealand Qualifications Authority (NZQA) and the New Zealand Qualifications Framework (NZQF). The credentials are broken down into ten levels:
                    </p>
                </div>


                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* UL Left */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {EducationSystem.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Best time for course inputs: February/ July
                    </p>
                    <p>
                        Rolling Inputs: November
                    </p>
                </div>
            </div>
        </section>
    );
}
