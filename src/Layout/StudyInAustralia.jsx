import AustraliaVisaConsultant from "../assets/study/australia-visa-consultant_2.png";
import { CheckCircle } from "lucide-react";

export default function StudyInAustralia() {

    const points = [
        "Globally recognized universities and institutions",
        "Strong student support services",
        "Work opportunities while studying",
        "Excellent post-graduation career prospects",
        "Safe and secure learning environment",
        "Diverse and multicultural community",
        "High standard of living",
        "Outstanding quality of life",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* Content Section */}
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Why Study in Australia?
                        </h4>

                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Australia is one of the most preferred study destinations for international students 
                            seeking globally recognized qualifications and strong career opportunities. 
                            With world-class universities, innovative research programs, and a welcoming 
                            multicultural environment, Australia provides an ideal platform for academic 
                            and professional growth.
                        </p>

                        <br />

                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            However, obtaining an Australian Student Visa is an essential step in making 
                            this dream a reality. Since the visa process can sometimes be complex and 
                            time-consuming, seeking guidance from experienced Australia Student Visa 
                            Consultants ensures a smooth and hassle-free journey. The Shivasya team 
                            specializes in providing professional consultation services — assisting 
                            students from selecting the right course and university to securing 
                            successful study visa approval.
                        </p>

                        <br />

                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Australia’s strong commitment to research, innovation, and practical learning 
                            equips students with high-quality skills that are highly valued in the global 
                            job market. The education system encourages critical thinking, creativity, 
                            and real-world exposure, preparing students for long-term success.
                        </p>
                    </div>
                </div>

                {/* Main Left + Right Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Bullet Points */}
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
                            alt="Study in Australia - Student Visa Consultant"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}