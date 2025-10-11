import { Send } from "lucide-react";
import FreeItalyStudy from "../assets/study/free-study-in-italy.png";
import FreeStudyInItaly from "../Layout/FreeStudyInItaly";
import TopUniversityItaly from "../Layout/TopUniversityItaly";
import ContactForm from "../Layout/ContactUsForm";
import Footer from "../Layout/footer";

export default function ItalyStudy() {
    return (
        <>
            <section className="bg-gradient-to-br to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Guaranteed scholarship of{" "}
                                <span className="relative inline-block">
                                    € 7,200 every year
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

                            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
                                Get your desire score with expert coaching
                            </p>

                            <button className="group bg-[#3D1F14] hover:bg-[#C67B3E] hover:text-[#3D1F14] text-[#C67B3E] font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-lg">
                                ENROLL NOW
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Right Illustration */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <img
                                src={FreeItalyStudy}
                                alt="USA Study Illustration"
                                className="w-full max-w-md lg:max-w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <FreeStudyInItaly />
            <TopUniversityItaly />
            <ContactForm />
            <Footer />
        </>
    );
}