import NewZealandVisaConsultant from "../assets/study/new-zealand-visa-consultant.png";
import { CheckCircle } from "lucide-react";

export default function StudyInNewZealand() {

    const points = [
        "Advanced infrastructure with modern campuses",
        "Affordable cost of living for international students",
        "Strong focus on skill development and practical learning",
        "Globally recognized and respected qualifications",
        "Research-focused and innovation-driven education",
        "Safe, vibrant, and multicultural lifestyle",
        "Post-study work opportunities",
        "Scholarship options for eligible students",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Why Study in New Zealand?
                        </h4>

                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Studying in New Zealand is a dream for many international students seeking 
                            high-quality education, an affordable lifestyle, and promising global career 
                            opportunities. The country offers a perfect balance of academic excellence, 
                            practical learning, and cultural enrichment — making it one of the most 
                            preferred study destinations worldwide.
                        </p>
                    </div>
                </div>

                {/* Main Left + Right Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left Side: Bullet Points */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    {/* Image Right */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={NewZealandVisaConsultant}
                            alt="Study in New Zealand"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Overall, studying in New Zealand provides more than just a degree — 
                            it delivers a globally enriching experience. With world-class education, 
                            cultural diversity, breathtaking natural beauty, and a high quality of life, 
                            students graduate with the skills, confidence, and international exposure 
                            needed for long-term career success.
                        </p>

                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed mt-4">
                            If you are planning your academic journey abroad, consulting a trusted 
                            New Zealand Student Visa expert can help you clearly understand the process 
                            and confidently begin your path toward studying in New Zealand.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}