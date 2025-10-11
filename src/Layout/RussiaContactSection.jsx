import React from "react";
import worldMap from "../assets/utility/map-of-world-1.png";
import { CheckCircle } from "lucide-react";

export default function RussiaStudyContactSection() {
    const locations = [
        { name: "Russia", top: "30%", left: "57%" }, // Adjust top/left to match Russia position
    ];

    const points = [
        "Apply with IELTS or TOEFL",
        "Low cost of living",
    ];

    return (
        <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-16">
            <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
                {/* Left Side: World Map with Russia Highlight */}
                <div className="flex-1 relative flex justify-center lg:justify-start">
                    <img
                        src={worldMap}
                        alt="World Map"
                        className="w-full max-w-lg h-auto object-cover"
                    />

                    {locations.map((loc, index) => (
                        <div
                            key={index}
                            className="absolute flex items-center justify-center"
                            style={{
                                top: loc.top,
                                left: loc.left,
                                transform: "translate(10%, 50%)",
                            }}
                        >
                            <div className="relative">
                                {/* Smaller blur highlight */}
                                <div className="absolute inset-0 bg-[#C67B3E]/30 rounded-full blur-lg w-16 h-6" />
                                {/* Smaller label */}
                                <div className="relative bg-[#C67B3E]/20 text-[#3D1F14] px-2 py-0.5 rounded-full text-xs font-semibold border border-[#C67B3E]/50 shadow-sm">
                                    ⦿ {loc.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Contact Info */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Study in Russia
                    </h2>

                    <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
                        So, why should you study in Russia? International students with a wide range of interests, such as literature, art, history, or Russian language studies, often choose to study in Russia. In Russia, international students will obtain a high-quality education in a culturally varied setting.
                    </p>

                    <ul className="space-y-3">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0 mt-1" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
                        Anex Overseas provides profile evaluation, University & Course selection, Application Process, Post Admission Services, Visa Application & Post Visa services
                    </p>
                </div>
            </div>
        </section>
    );
}
