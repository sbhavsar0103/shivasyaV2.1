import React from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import bannerImage from "../assets/aboutus/aboutUsBanner.jpeg";
import AboutSection from "../Layout/AboutSection";
import WorldMapSection from "../Layout/WorldMapSection";
import OurServicesSection from "../Layout/OurServicesSection";
import WhyChooseUs from "../Layout/WhyChooseUs";
import Destinations from "../Layout/Destinations";
import ContactForm from "../Layout/ContactUsForm";
import Footer from "../Layout/footer";


const countries = [
    { name: "USA", code: "US", path: "/usa-study" },
    { name: "Canada", code: "CA", path: "/canada-study" },
    { name: "Australia", code: "AU", path: "/australia-study" },
    { name: "New Zealand", code: "NZ", path: "/new-zealand-study" },
    { name: "UK", code: "GB", path: "/uk-study" },
    { name: "Ireland", code: "IE", path: "/ireland-study" },
    { name: "Europe", code: "EU", path: "/europe-study" },
    { name: "Italy", code: "IT", path: "/italy-study" },
    { name: "Russia", code: "RU", path: "/russia-study" },
];

const AboutBanner = () => {
    return (
        <>
            <section className="relative w-full h-[500px] lg:h-[600px]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>

                <div className="absolute inset-0 bg-[#3D1F14] opacity-60"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm mb-6 w-max">
                        <span className="hover:underline cursor-pointer">Home</span>
                        <span>&gt;</span>
                        <span>About</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        Simplifying Your Visa Journey
                    </h1>

                    {/* Description */}
                    <p className="max-w-3xl text-base lg:text-lg leading-relaxed mb-6">
                        <strong>Shivasya Education</strong> is a premier study-abroad consultancy in Gujarat, offering expert guidance and comprehensive services to students aspiring to pursue education overseas. With over a decade of experience, we have built a reputation as a trusted partner, dedicated to providing convenience, excellence, and personalized support throughout your journey to global education.
                    </p>

                    {/* Country Flags */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        {countries.map((country, index) => (
                            <Link to={country.path}>
                                <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition">
                                    <span className="text-xl">
                                        <ReactCountryFlag
                                            countryCode={country.code}
                                            svg
                                            style={{ width: "20px", height: "20px" }}
                                        />
                                    </span>
                                    <span className="text-sm font-medium">{country.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <AboutSection />
            <WorldMapSection />
            <OurServicesSection />
            <WhyChooseUs />
            <Destinations />
            <ContactForm />
            <Footer />
        </>
    );
};

export default AboutBanner;