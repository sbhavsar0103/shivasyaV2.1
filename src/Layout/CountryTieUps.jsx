import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function CountrySection() {
    const countries = [
        { name: "AUSTRALIA", desc: "Tie Ups with Group of 8 Top Universities", code: "AU" },
        { name: "USA", desc: "Tie Ups with 500 + universities across 40+ States", code: "US" },
        { name: "CANADA", desc: "Tie Ups with 180 + Top Universities & Colleges", code: "CA" },
        { name: "UK", desc: "Tie Ups with Top Ranked Russel Group Universities", code: "GB" },
        { name: "EUROPE", desc: "Tie Ups with 200 + Universities", code: "EU" },
        { name: "NEW ZEALAND", desc: "Tie Ups with 50+ Universities", code: "NZ" },
    ];

    return (
        <section className="relative z-[1] w-full">
            <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-10">
                <div className="relative bg-[#C67B3E] rounded-[85px] py-9 px-6 sm:px-12 -mt-[90px]">
                    <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 -mt-12 flex-nowrap">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center w-[110px] sm:w-[130px] md:w-[150px] flex-shrink-0"
                            >
                                <div className="w-13 h-13 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg -mt-8 mb-2">
                                    <ReactCountryFlag
                                        countryCode={country.code}
                                        svg
                                        style={{
                                            width: "90%",
                                            height: "90%",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>

                                <div className="text-white">
                                    <div className="text-sm sm:text-base md:text-lg font-bold">
                                        {country.name}
                                    </div>
                                    <h6 className="text-xs sm:text-sm md:text-sm leading-snug mt-1">
                                        {country.desc}
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}