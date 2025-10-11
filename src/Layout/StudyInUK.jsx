import NewZealandVisaConsultant from "../assets/study/new-zealand-visa-consultant.png";
import { CheckCircle } from "lucide-react";


export default function StudyInUK() {

    const points = [
        "Most renowned universities",
        "Learn from the best faculty",
        "High-standard of living",
        "Best academic system",
        "Shorter study duration courses",
        "Part-time work facilities",
        "Range of scholarships",
        "Wonderful student experience",
        "Option to stay for employment search",
        "Easy admission procedure",
        "Various research opportunities",
        "A welcoming and multicultural community",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Why study in UK?
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            The UK is one of the most popular educational destinations for students. Students choose UK Universities to gain academic excellence. Not only for academic achievements but the UK is preferred for work opportunities after completion of courses. With an 82% retention rate, the UK welcomes over 6,00,000 international students each year. The UK also has several social, cultural, and academic pleasures that can enlighten the educational journey of students.
                        </p>
                    </div>
                </div>
                {/* Main Left + Right Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side: Title + Paragraph */}
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
                            alt="Study in USA"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
