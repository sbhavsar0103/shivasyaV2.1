import NewZealandVisaConsultant from "../assets/study/new-zealand-visa-consultant.png";
import { CheckCircle } from "lucide-react";


export default function StudyInNewZealand() {

    const points = [
        "High - tech infrastructure",
        "Low cost of living",
        "Scope of skill development",
        "Globally recognized curriculum",
        "Research - driven education",
        "Engaging way of living",
        "Post - study opportunity",
        "Options of scholarships",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Why Study in New Zealand?
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Getting a chance to study in New Zealand could be the most fascinating dream for any student who wants to study considering the affordable lifestyle, education, and better employment opportunities. To brief you more about the benefits for students to study in New Zealand, take a look below:
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
                <div className="space-y-8">
                    <div>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Overall, It is the perfect blend of the globally qualified experience of getting a chance to study in New Zealand since it offers a fusion of educational excellence, cultural diversity, scenic beauty, and better quality of living. So, find what makes you excited to study in New Zealand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
