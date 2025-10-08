import React from "react";
import bannerImage from "../assets/aboutus/college-students-pointing-globe-library-1.jpg";
import AboutSection from "../Layout/AboutSection";
import WorldMapSection from "../Layout/WorldMapSection";
import OurServicesSection from "../Layout/OurServicesSection";
import WhyChooseUs from "../Layout/WhyChooseUs";
import Destinations from "../Layout/Destinations";
import Achievements from "../Layout/Achievements";
// import AwardsRecognition from "../Layout/AwardsRecognition";
import Footer from "../Layout/footer";

const AboutBanner = () => {
    return (
        <>
            <section className="relative w-full h-[400px] lg:h-[500px]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>

                <div className="absolute inset-0 bg-[#3D1F14] opacity-40"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 mb-4 w-max">
                        <span className="hover:underline cursor-pointer text-white">Home</span>
                        <span className="text-white">&gt;</span>
                        <span className="text-white">About</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-white text-left">
                        About
                    </h1>
                </div>
            </section>
            <AboutSection />
            <WorldMapSection />
            <OurServicesSection />
            <WhyChooseUs />
            <Destinations />
            <Achievements />
            <Footer />
        </>
    );
};

export default AboutBanner;