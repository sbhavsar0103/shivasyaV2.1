import React from "react";
import FranceCountry from "../assets/study/france_country.png";
import SwedenCountry from "../assets/study/sweden_country.png";
import FinlandCountry from "../assets/study/finland_country.png";
import NetherlandsCountry from "../assets/study/netherland_country.png";
import DenmarkCountry from "../assets/study/denmark_country.png";
import SwitzerlandCountry from "../assets/study/switzerland_country.png";
import PolandCountry from "../assets/study/poland_country.png";
import PortugalCountry from "../assets/study/portugal_country.png";
import SpainCountry from "../assets/study/spain_country.png";
import CzechCountry from "../assets/study/czech-republic_country.png";
import MaltaCountry from "../assets/study/malta_country.png";

const countries = [
    { name: "France", image: FranceCountry, flag: "🇫🇷" },
    { name: "Sweden", image: SwedenCountry, flag: "🇸🇪" },
    { name: "Finland", image: FinlandCountry, flag: "🇫🇮" },
    { name: "Netherlands", image: NetherlandsCountry, flag: "🇳🇱" },
    { name: "Denmark", image: DenmarkCountry, flag: "🇩🇰" },
    { name: "Switzerland", image: SwitzerlandCountry, flag: "🇨🇭" },
    { name: "Poland", image: PolandCountry, flag: "🇵🇱" },
    { name: "Portugal", image: PortugalCountry, flag: "🇵🇹" },
    { name: "Spain", image: SpainCountry, flag: "🇪🇸" },
    { name: "Czech Republic", image: CzechCountry, flag: "🇨🇿" },
    { name: "Malta", image: MaltaCountry, flag: "🇲🇹" },
];

export default function EuropeCountries() {
    const firstRow = countries.slice(0, 7);
    const secondRow = countries.slice(7);

    return (
        <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mb-8">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center mb-12 sm:mb-16">
                    Most Popular Countries In{" "}
                    <span className="relative inline-block">
                        Europe
                        <span className="absolute bottom-0 left-0 w-full h-3 bg-lime-300 -z-10 rounded"></span>
                    </span>
                </h1>

                {/* First Row - Exactly 7 Countries */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 mb-10 justify-items-center">
                    {firstRow.map((country) => (
                        <div
                            key={country.name}
                            className="group relative w-36 sm:w-44 md:w-48 lg:w-40 xl:w-44"
                        >
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={country.image}
                                        alt={country.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-3xl sm:text-4xl border-4 border-white">
                                            {country.flag}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-10 pb-6 px-4 bg-white">
                                    <h3 className="text-center text-lg sm:text-xl font-medium text-gray-800">
                                        {country.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
                    {secondRow.map((country) => (
                        <div
                            key={country.name}
                            className="group relative w-36 sm:w-44 md:w-48 lg:w-40 xl:w-44"
                        >
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={country.image}
                                        alt={country.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-3xl sm:text-4xl border-4 border-white">
                                            {country.flag}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-10 pb-6 px-4 bg-white">
                                    <h3 className="text-center text-lg sm:text-xl font-medium text-gray-800">
                                        {country.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}