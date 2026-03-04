import React from "react";
import { Link } from "react-router-dom";
import Few_1 from "../assets/utility/Few_1.jpeg";
import Few_2 from "../assets/utility/Few_2.jpeg";
import Few_3 from "../assets/utility/Few_3.jpeg";
import Few_4 from "../assets/utility/Few_4.jpeg";

const reasons = [
    {
        image: Few_1,
        title: "ADMISSION ASSURANCE",
        description:
            "Get access to top-ranked partner universities such as Johns Hopkins, Group of Eight universities like Monash, ANU, UNSW, UWA, leading Russell Group universities, and many more worldwide.",
    },
    {
        image: Few_2,
        title: "PERSONALIZED COUNSELLING",
        description:
            "Receive end-to-end expert guidance tailored to your academic background, career goals, and university preferences to secure the best possible admits.",
    },
    {
        image: Few_3,
        title: "BEYOND MARKS & TEST SCORES",
        description:
            "Your GRE/GMAT scores alone should not define your future. We focus on building a strong overall profile that highlights your true potential.",
    },
    {
        image: Few_4,
        title: "PERSONALIZED IELTS PREPARATION",
        description:
            "Get dedicated support from certified trainers until you achieve your desired IELTS band score with confidence.",
    },
];

export default function FewReasons() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-[#fff8f4] to-[#fff] overflow-hidden">
            <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3A1F16]">
                        FEW REASONS TO CHOOSE US
                    </h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group transition-transform duration-500 hover:-translate-y-1"
                        >
                            <div className="relative w-56 h-56 rounded-full flex items-center justify-center overflow-hidden mb-6 shadow-lg group">
                                <img
                                    src={reason.image}
                                    alt={reason.title}
                                    className="w-44 h-44 rounded-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:border-8 group-hover:border-[#D8752C]"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-[#3A1F16] mb-2">
                                {reason.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="text-center mt-14">
                    <Link to="/abroad-services">
                        <button className="inline-block bg-[#D8752C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3A1F16] transition-colors duration-300">
                            KNOW MORE
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
