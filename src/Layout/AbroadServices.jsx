import { Send, CheckCircle } from "lucide-react";
import ServiceBanner from "../assets/utility/banner-image.webp";
import OurServices from "../Layout/OurServices";
import ContactForm from "../Layout/ContactUsForm";
import Footer from "../Layout/footer";

export default function AbroadServices() {
    const points = [
        "Coaching - IELTS | PTE",
        "Career Counselling - Country and University Selection",
        "Application & SOP CV LOR Assistance",
        "Scholarship & Education Loan",
        "Visa Guidance",
        "Pre - departure Assistance - Accommodation | Airticket and Insurance | Forex Services",
        "Dependent & Visitor Visa for your family"
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

                            {/* List of Points */}
                            <ul className="space-y-4 mb-10 max-w-xl mx-auto lg:mx-0">
                                {points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 text-gray-800 text-base sm:text-lg"
                                    >
                                        <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Illustration */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <img
                                src={ServiceBanner}
                                alt="Italy Study Illustration"
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
