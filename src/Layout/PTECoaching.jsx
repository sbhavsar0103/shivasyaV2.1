import { Send } from "lucide-react";
import PTEContent from "../Layout/PTEContent";
import EligibilityPTE from "../Layout/EligibilityPTE";
import PTETestFormat from "../Layout/PTETestFormat";
import WhyChoosePTECoaching from "../Layout/WhyChoosePTECoaching";
import Benefits from "../Layout/Benefits";
import ContactForm from "../Layout/ContactUsForm";
import Footer from "../Layout/footer";

export default function PTECoaching() {
    return (
        <>
            <section className="bg-gradient-to-br to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                PTE COACHING BY{" "}
                                <span className="relative inline-block">
                                    THE LEADER
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
                        <div className="flex-1">
                            <div className="relative w-full max-w-2xl mx-auto">
                                {/* Main illustration container */}
                                <div className="bg-[#3D1F14] rounded-lg shadow-2xl p-8 relative overflow-hidden">
                                    {/* Screen header */}
                                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 mb-4">
                                        <h3 className="text-3xl font-bold text-[#3D1F14] mb-4">
                                            PTE
                                        </h3>
                                        <div className="space-y-3">
                                            {[1, 2, 3, 4].map((item) => (
                                                <div key={item} className="flex items-center gap-3 relative">
                                                    <div className="w-5 h-5 bg-[#C67B3E] rounded flex items-center justify-center flex-shrink-0">
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={3}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="h-2 bg-[#C67B3E]/30 rounded flex-1 relative overflow-hidden">
                                                        <div
                                                            className="absolute left-0 top-0 h-full bg-[#C67B3E]"
                                                            style={{ width: `${item * 20}%` }}
                                                        ></div>
                                                    </div>
                                                    {item === 3 && (
                                                        <div className="absolute right-0 -translate-y-1">
                                                            <div className="bg-[#C67B3E] rounded-full p-2 shadow-lg animate-bounce">
                                                                <svg
                                                                    className="w-4 h-4 text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Person illustration */}
                                    <div className="absolute bottom-4 right-8 z-10 flex flex-col items-center">
                                        <div className="w-12 h-12 bg-[#3D1F14] rounded-full mb-2"></div>
                                        <div className="w-16 h-20 bg-[#C67B3E] rounded-t-full"></div>
                                        <div className="flex gap-2">
                                            <div className="w-6 h-12 bg-[#3D1F14]"></div>
                                            <div className="w-6 h-12 bg-[#3D1F14]"></div>
                                        </div>
                                    </div>

                                    {/* Keyboard base */}
                                    <div className="mt-4 grid grid-cols-5 gap-2">
                                        {[...Array(10)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="h-8 bg-[#C67B3E] rounded shadow-md"
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Books/Steps at bottom */}
                                <div className="flex gap-3 mt-4 justify-start">
                                    <div className="w-32 h-8 bg-[#C67B3E] rounded shadow-md"></div>
                                    <div className="w-24 h-8 bg-[#C67B3E]/80 rounded shadow-md"></div>
                                    <div className="w-20 h-8 bg-[#C67B3E]/60 rounded shadow-md"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PTEContent />
            <EligibilityPTE />
            <PTETestFormat />
            <WhyChoosePTECoaching />
            <Benefits />
            <ContactForm />
            <Footer />
        </>
    );
}
