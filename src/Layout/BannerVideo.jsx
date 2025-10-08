import MainVideo from "../assets/video/venturi-bg-video.mp4";
import { Globe, Home, DollarSign, FileText, Plane } from "lucide-react";
import CountrySection from "../Layout/CountryTieUps";
import TrainingSection from "../Layout/TrainingSection";
import PopularCourses from "../Layout/PopularCourses";
import EightSteps from "../Layout/EightSteps";
import FewReasons from "../Layout/FewReasonstoChooseUs";
import Reviews from "../Layout/StudentReviews";
import Footer from "../Layout/footer";

export default function LoopVideo() {
    const services = [
        { icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Travel" },
        { icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Accommodation" },
        { icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Forex" },
        { icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Documentation" },
        { icon: <Plane className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Visa" },
    ];

    return (
        <>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    src={MainVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="absolute inset-0 bg-[#3D1F14] opacity-40"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-10 lg:px-24 text-white">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight uppercase tracking-wide drop-shadow-md">
                        Global
                        <br />
                        Admissions
                        <br />
                        Simplified
                    </h1>

                    <div className="mt-3 sm:mt-4 bg-white text-[#C67B3E] font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base shadow-md">
                        IELTS | ADMISSION COUNSELLING | VISA COUNSELLING
                    </div>

                    <div className="mt-6 sm:mt-8">
                        <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">
                            Our Ancillary Services:
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-5">
                            {services.map((service, index) => (
                                <div key={index} className="flex flex-col items-center justify-center bg-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                                    {service.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <CountrySection />
            <TrainingSection />
            <PopularCourses />
            <EightSteps />
            <FewReasons />
            <Reviews />
            <Footer />
        </>
    );
}