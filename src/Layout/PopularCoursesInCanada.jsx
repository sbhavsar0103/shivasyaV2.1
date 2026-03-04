import { CheckCircle } from "lucide-react";

export default function PopularCoursesInCanada() {
    const points = [
        "Business and Finance",
        "Computer Science and IT",
        "Engineering",
        "Medicine and Healthcare",
        "Media and Journalism",
        "Agricultural Science and Forestry"
    ];

    const consultantPoints = [
        "Understanding and fulfilling eligibility and admission requirements",
        "Ensuring acceptance by a recognized Canadian university",
        "Managing financial documentation for tuition and living expenses",
        "Handling the complete visa application process",
        "Providing pre-departure and post-departure support"
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                
                {/* Popular Courses Section */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Popular Courses to Study in Canada
                </h3>

                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Canadian universities offer a wide variety of undergraduate and graduate programs 
                        designed to match global industry demands. Students can choose courses aligned 
                        with their career goals, interests, and future growth opportunities.
                    </p>
                    <p>
                        Some of the most popular and employment-oriented programs include:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
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
                        Enrolling in these programs significantly increases your chances of securing 
                        employment opportunities in Canada as well as internationally, 
                        especially in high-demand sectors.
                    </p>
                </div>

                {/* Consultant Role Section */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Role of Canadian Student Visa Consultants
                </h3>

                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Applying for a Canada Student Visa can be complex due to financial requirements, 
                        eligibility criteria, documentation standards, and the risk of visa refusal. 
                        This is where a professional Canada Student Visa Consultant plays a crucial role.
                    </p>
                    <p>
                        Consultants assist students in:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {consultantPoints.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Beyond visa approval, top consultants also provide guidance for accommodation, 
                        travel planning, and adapting to life in Canada, ensuring a smooth transition.
                    </p>
                    <p>
                        For example, Shivasya’s Canada Student Visa Consultants in Ahmedabad 
                        offer a transparent and structured visa process, helping students achieve 
                        their dream of studying in Canada with confidence.
                    </p>
                </div>

            </div>
        </section>
    );
}