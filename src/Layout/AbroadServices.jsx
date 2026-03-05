import { CheckCircle } from "lucide-react";
import ServiceBanner from "../assets/utility/VALUE-ADDED-SERVICES.png";
import OurServices from "../Layout/OurServices";
import ContactForm from "../Layout/ContactUsForm";
import Footer from "../Layout/footer";

export default function AbroadServices() {

    const points = [
        "Coaching: IELTS | PTE",
        "Career Counselling: Country & University Selection",
        "Application Support: SOP, CV, LOR Assistance",
        "Scholarship & Education Loan Guidance",
        "Visa Assistance: Student, Dependent & Visitor Visas",
        "Pre-departure Support: Accommodation, Airtickets, Insurance & Forex Services",
    ];

    return (
        <>
            <section className="bg-gradient-to-br to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">

                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                VALUE ADDED{" "}
                                <span className="relative inline-block">
                                    SERVICES
                                    <svg
                                        className="absolute -bottom-2 left-0 w-full"
                                        height="12"
                                        viewBox="0 0 300 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 10C50 3 250 3 298 10"
                                            stroke="#3D1F14"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h1>

                            {/* Intro Content */}
                            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                                At Shivasya, we guide you like a trusted friend — from your first admission counselling session 
                                to stepping foot in your dream destination.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Our Services Include:
                            </h3>

                            {/* Services List */}
                            <ul className="space-y-4 mb-10 max-w-xl mx-auto lg:mx-0">
                                {points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-gray-800 text-base sm:text-lg"
                                    >
                                        <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Closing Line */}
                            <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Your study abroad journey is our mission — we make it seamless, stress-free, 
                                and full of opportunities.
                            </p>
                        </div>

                        {/* Right Illustration */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <img
                                src={ServiceBanner}
                                alt="Study Abroad Services Illustration"
                                className="w-full max-w-md lg:max-w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <OurServices />
            <ContactForm />
            <Footer />
        </>
    );
}