import React from "react";

export default function TypesUKStudyVisa() {

    const visaTypes = [
        {
            visa: "Student Route Visa (formerly Tier 4 General)",
            eligibility: [
                "Age 16 years or above",
                "Accepted into a UK institution with a valid CAS (Confirmation of Acceptance for Studies)",
                "For foundation, undergraduate, postgraduate, PhD, or A-Level programs",
                "Allows part-time work during studies"
            ],
        },
        {
            visa: "Child Student Visa",
            eligibility: [
                "Age between 4–17 years",
                "Accepted into an independent school with a UK sponsoring license",
                "Parental consent required"
            ],
        },
        {
            visa: "Short-term Student Visa",
            eligibility: [
                "For English language courses lasting 6–11 months",
                "Cannot work during the course duration"
            ],
        },
        {
            visa: "Standard Visitor Visa (Study Purpose)",
            eligibility: [
                "Short courses up to 6 months",
                "Suitable for training programs or short academic courses",
                "No work permitted"
            ],
        },
        {
            visa: "Graduate Visa (Post-Study Work Visa)",
            eligibility: [
                "Completed an eligible UK undergraduate or postgraduate degree",
                "Stay in the UK for 2 years (3 years for PhD graduates)",
                "Allows full-time work without sponsorship"
            ],
        },
    ];

    return (
        <main className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Types of UK Student Visas
                </h2>

                <section>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-gray-800 text-sm sm:text-base">
                            
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold">
                                        Visa Type
                                    </th>
                                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold">
                                        Eligibility
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {visaTypes.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        
                                        <td className="border border-gray-300 px-6 py-4 font-medium align-top">
                                            {item.visa}
                                        </td>

                                        <td className="border border-gray-300 px-6 py-4">
                                            <ul className="list-disc list-inside space-y-1">
                                                {item.eligibility.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </section>

            </div>
        </main>
    );
}