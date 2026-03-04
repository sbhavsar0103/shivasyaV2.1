export default function InfoSection() {
    return (
        <>
            {/* Main Colored Section */}
            <section className="w-full bg-[#C67B3E] py-12 px-4 sm:px-6 lg:px-16">
                <div className="max-w-7xl mx-auto text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                        Best Student Visa Consultancy in Ahmedabad – Study in the USA
                    </h3>

                    <p className="text-justify text-base sm:text-lg text-white/90 leading-relaxed">
                        Planning to study in the USA but unsure where to begin? Our USA Student
                        Visa Consultants in Ahmedabad provide complete guidance to help
                        students navigate university admissions, documentation, and visa
                        procedures smoothly and confidently.
                    </p>
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="w-full py-10 px-4 sm:px-6 lg:px-16">
                <div className="max-w-7xl mx-auto text-center lg:text-left space-y-8">

                    <p className="text-justify text-base sm:text-lg text-gray-800 leading-relaxed">
                        Securing admission to a U.S. institution involves multiple steps,
                        including meeting the eligibility criteria of the Student and
                        Exchange Visitor Program (SEVP) and enrolling in SEVP-approved
                        institutions. Our consultants simplify the entire process,
                        ensuring accuracy, compliance, and timely submission of applications.
                    </p>

                    {/* Services List */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">
                            Our USA Student Visa Consultancy Services Include:
                        </h4>

                        <ul className="list-disc mx-6 space-y-3 text-gray-800 text-base sm:text-lg">

                            <li>
                                <span className="font-semibold text-gray-900">
                                    Profile Evaluation & Course Selection:
                                </span>{" "}
                                Personalized assessment to select the right university and program.
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900">
                                    Application & I-20 Support:
                                </span>{" "}
                                Assistance with application forms, documentation, and obtaining the I-20 form.
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900">
                                    Financial Guidance:
                                </span>{" "}
                                Support in arranging scholarships, education loans, sponsorships,
                                and preparing financial affidavits.
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900">
                                    Test Preparation Guidance:
                                </span>{" "}
                                Advice on English proficiency tests (IELTS, TOEFL, PTE) and
                                academic exams (GRE, GMAT, SAT, ACT).
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900">
                                    Visa Assistance:
                                </span>{" "}
                                Professional guidance for F1, M1, and other U.S. study visas,
                                including interview preparation.
                            </li>

                            <li>
                                <span className="font-semibold text-gray-900">
                                    SOP & Documentation Support:
                                </span>{" "}
                                Drafting compelling Statements of Purpose and reviewing required documents.
                            </li>

                        </ul>
                    </div>

                    <p className="text-justify text-base sm:text-lg text-gray-800 leading-relaxed">
                        With a student-centric approach, we ensure that your study abroad
                        journey is smooth, legitimate, and stress-free — allowing you to
                        focus on your academic ambitions while experts handle the complex
                        procedures.
                    </p>

                    {/* USA Promotion Section */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">
                            Study in the USA – Unlock Your Global Potential 🇺🇸
                        </h4>

                        <p className="text-justify text-base sm:text-lg text-gray-800 leading-relaxed">
                            The United States is home to world-class universities,
                            cutting-edge research opportunities, and a diverse cultural
                            environment. It empowers students with innovation,
                            independence, and global career opportunities.
                        </p>

                        <p className="text-justify text-base sm:text-lg text-gray-800 leading-relaxed">
                            Thousands of international students, especially from India,
                            pursue STEM (Science, Technology, Engineering, and Mathematics)
                            programs in the USA each year. With the right guidance and
                            preparation, you can be one of them.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}