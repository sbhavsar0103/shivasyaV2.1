import React from "react";
import { Link } from "react-router-dom";
import admitImg from "../assets/utility/admit-guarantee.jpg";
import counsellingImg from "../assets/utility/personalised-counselling.jpg";
import testsImg from "../assets/utility/standardised-tests.jpg";
import ieltsImg from "../assets/utility/scholarship-guarantee.jpg";
import pattern6 from "../assets/utility/pattern-6.png";

const reasons = [
    {
        image: admitImg,
        title: "ADMIT GUARANTEE",
        description:
            "To top-ranked partner universities such as John Hopkins, Group of Eight Universities like ANU, UNSW, Russell Group Universities, and many more",
    },
    {
        image: counsellingImg,
        title: "PERSONALIZED COUNSELLING",
        description:
            "To ensure you receive the end-to-end support needed to get the best admits",
    },
    {
        image: testsImg,
        title: "LOOK BEYOND STANDARDIZED TESTS",
        description:
            "Because only GMAT/GRE score should not decide the quality of education you deserve",
    },
    {
        image: ieltsImg,
        title: "TAILORED IELTS TEST PREP",
        description: "Support until you secure your desired band",
    },
];

export default function FewReasons() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-[#fff8f4] to-[#fff] overflow-hidden">
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20"
                style={{ backgroundImage: `url(${pattern6})` }}
                aria-hidden="true"
            ></div>

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
