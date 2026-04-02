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
            <div className="max-w-[1400px] w-full mx-auto px-2 sm:px-6 md:px-10">

                {/* ================= DESKTOP VIEW ================= */}
                <div className="hidden md:flex relative bg-[#C67B3E] rounded-[85px] py-10 px-6 justify-between items-center -mt-[90px]">

                    {countries.map((country, index) => (
                        <div key={index} className="flex flex-col items-center text-center flex-1">

                            {/* Flag (Top Floating Style) */}
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg -mt-16 mb-3 border-4 border-white">
                                <ReactCountryFlag
                                    countryCode={country.code}
                                    svg
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            {/* Text */}
                            <div className="text-white">
                                <div className="text-sm md:text-base font-bold">
                                    {country.name}
                                </div>
                                <p className="text-xs mt-1 leading-snug">
                                    {country.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* ================= MOBILE VIEW ================= */}
                <div className="md:hidden relative bg-[#C67B3E] rounded-[40px] py-6 px-4 -mt-[50px]">

                    <div className="flex flex-col gap-5">

                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 border-b border-[#3D1F14] pb-3"
                            >
                                {/* Flag */}
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
                                    <ReactCountryFlag
                                        countryCode={country.code}
                                        svg
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>

                                {/* Text */}
                                <div className="text-white">
                                    <div className="text-sm font-bold">
                                        {country.name}
                                    </div>
                                    <p className="text-xs mt-1">
                                        {country.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}