import React from "react";

export default function TopUniversitiesIreland() {

    const universities = [
        { irishRank: 1, globalRank: "81", university: "Trinity College Dublin" },
        { irishRank: 2, globalRank: "171", university: "University College Dublin" },
        { irishRank: 3, globalRank: "289", university: "University of Galway" },
        { irishRank: 4, globalRank: "292", university: "University College Cork" },
        { irishRank: 5, globalRank: "426", university: "University of Limerick" },
        { irishRank: 6, globalRank: "436", university: "Dublin City University" },
        { irishRank: 7, globalRank: "801–850", university: "Maynooth University" },
        { irishRank: 8, globalRank: "851–900", university: "Technological University of Dublin" },
    ];

    return (
        <main className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Top Universities in Ireland
                </h2>

                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                    Ireland is home to several highly ranked universities according to the QS World University Rankings. Below is a list of the top universities in Ireland along with their Irish and global rankings.
                </p>

                <section className="mt-4 overflow-x-auto">
                    <table className="w-full border border-gray-300 text-gray-800 text-sm sm:text-base">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-center font-semibold">
                                    Irish Rank
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-center font-semibold">
                                    Global Rank (QS)
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                                    University
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {universities.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">
                                        {item.irishRank}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {item.globalRank}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.university}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

            </div>
        </main>
    );
}