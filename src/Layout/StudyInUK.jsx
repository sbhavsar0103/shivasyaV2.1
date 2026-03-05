import NewZealandVisaConsultant from "../assets/study/uk-banner.jpeg";
import { CheckCircle } from "lucide-react";

export default function StudyInUK() {

    const points = [
        "Globally renowned universities and expert faculty",
        "High academic standards with excellent quality of life",
        "Shorter course durations with flexible study options",
        "Part-time work opportunities during studies",
        "Wide range of scholarship programs",
        "Outstanding student life and cultural exposure",
        "Research-driven programs and innovation focus",
        "Post-study work opportunities in the UK",
        "Simplified admission procedures",
        "Safe, diverse, and welcoming multicultural environment",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* Heading + Intro */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Why Study in the UK?
                        </h4>
                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            The United Kingdom is one of the world’s most sought-after destinations 
                            for international students. Every year, over 600,000 students choose 
                            the UK for its globally recognized universities, innovative teaching 
                            methods, and strong career prospects. Studying in the UK offers the 
                            perfect blend of academic excellence, global exposure, and professional growth.
                        </p>
                    </div>
                </div>

                {/* Points + Image */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left Side Points */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    {/* Right Side Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={NewZealandVisaConsultant}
                            alt="Students studying in the United Kingdom"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>

                </div>

                {/* Closing Paragraph */}
                <div>
                    <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                        Studying in the UK not only provides a world-class qualification 
                        but also opens doors to global career opportunities, personal development, 
                        and international work exposure. It’s more than just earning a degree — 
                        it’s building a future with confidence and global recognition.
                    </p>
                </div>

            </div>
        </section>
    );
}