import React from "react";
import RussiaBackgroundImage from "../assets/study/russia-wallpaper-background.png";
import RussiaFlag from "../assets/study/russia-flag-300x300.webp";

export default function RussiaInfoSection() {
    return (
        <section
            className="w-full bg-center bg-cover flex items-center justify-center relative py-16"
            style={{ backgroundImage: `url(${RussiaBackgroundImage})` }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 px-4 sm:px-6 lg:px-16 py-8 justify-center">
                
                {/* Left Box: Text */}
                <div className="bg-white w-full sm:w-[70%] lg:w-[30%] p-8 rounded-2xl text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Discover Russia
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                        Russia is a large country, roughly 1.8 times the size of the United States, that covers the continent between Europe and the North Pacific Ocean. It has a population of almost 150 million people and covers an area of 10,672,000 square miles. Russia, which occupies a wide territory across Europe and Asia, is distributed over all climatic zones except tropical.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Although medicine and nursing programs attract most international students, other professions like engineering, art studies and culture, international business, physics and astronomy, and even law are also popular. Students can pick from over 400 fields of study as well as over 650 disciplines at all levels and over 740 universities in 82 different locations of the country.
                    </p>
                </div>

                {/* Right Box: Russia Flag */}
                <div className="bg-white p-4 rounded-xl flex items-center justify-center">
                    <img
                        src={RussiaFlag}
                        alt="Russia Flag"
                        className="w-32 sm:w-48 h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
