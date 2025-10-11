import React from "react";

export default function TypesUKStudyVisa() {
    return (
        <main className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Types of UK Student Visas
                </h1>

                <section className="mt-2">
                    <div className="flex justify-center">
                        <table className="border border-gray-300 text-gray-800 text-sm sm:text-base">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                                        Type of Student Visa
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                                        Who’s applicable?
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        visa: "Tier 4 (General) Student Visa",
                                        applicable: [
                                            "If a person is 16 years old or over.",
                                            "Seeking a foundation, undergraduate, PhD, postgraduate, or A-level program.",
                                        ],
                                    },
                                    {
                                        visa: "Student Route Visa",
                                        applicable: [
                                            "This visa category is for students arriving in the UK for post-16 education.",
                                            "It replaced the Tier-4 (General) Student Visa.",
                                            "All Tier-4 programs with other short-term programs.",
                                        ],
                                    },
                                    {
                                        visa: "Child Student Visa",
                                        applicable: [
                                            "If a person is between 4–17 years old.",
                                            "Desire to enroll in an independent school with a sponsoring license.",
                                        ],
                                    },
                                    {
                                        visa: "Short-term Student Visa",
                                        applicable: [
                                            "If you are enrolled in English Language Courses that last between 6–11 months.",
                                        ],
                                    },
                                    {
                                        visa: "Visitor Visa",
                                        applicable: [
                                            "It applies to students who wish to pursue short courses up to 6 months.",
                                        ],
                                    },
                                    {
                                        visa: "Graduate Visa",
                                        applicable: [
                                            "If you plan to stay in the UK for two years after successful completion of your undergraduate degree.",
                                        ],
                                    },
                                ].map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 text-center font-medium">
                                            {item.visa}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <ul className="list-disc list-inside space-y-1 text-left">
                                                {item.applicable.map((point, i) => (
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
