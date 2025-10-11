import AustraliaVisaConsultant from "../assets/study/australia-visa-consultant_2.png";
import { CheckCircle } from "lucide-react";


export default function StudyInAustralia() {

    const points = [
        "Internationally renowned institutions",
        "Student support resources",
        "Work experience alongside studies",
        "Various employment prospects",
        "Safe learning environment",
        "Diverse, multicultural community",
        "A high quality of life",
        "Safe and secure living",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Why Study in Australia?
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            When students seek opportunities to excel in their careers, Australia comes to mind as another choice. From world-class institutions to a diverse environment, Australia offers a lot to students in terms of choosing Australian universities as their study destination or preferring to pursue further careers in the country. A student visa is required to open the gateway to study in Australia. As the process can be tedious and hectic, Student Visa Consultants for Australia are the best ones to contact for individuals who want to apply for study visas to study in Australia. The Visa Zone team has expertise in providing consulting services and helping students get successful study visa approval for Australia.
                        </p><br />
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Students are provided with high-quality skills in Australia study consultants which are immensely appreciated in the international job market as a result of the country’s dedication to research and innovation, which also establishes an intellectually challenging environment.
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
                            src={AustraliaVisaConsultant}
                            alt="Study in USA"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
