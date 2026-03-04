import React from "react";

export default function IELTSBands() {
    return (
        <main className="mt-5 mx-20 px-2 sm:px-4">

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What is the IELTS Band Score?
            </h1>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p className="text-justify">
                    The International English Language Testing System (IELTS) band score reflects a candidate’s overall English proficiency level. It plays a crucial role in determining eligibility for study abroad programs, work visas, permanent residency applications, and professional registrations.
                </p>

                <p className="text-justify">
                    Achieving a higher band score improves opportunities for admission, employment, and immigration to countries such as the USA, UK, Canada, and Australia.
                </p>

                <p className="text-justify">
                    IELTS uses a band score scale from 0 to 9 to measure English proficiency. Each module (Listening, Reading, Writing, Speaking) receives an individual band score, and the overall band score is calculated as the average of all four modules.
                </p>
            </div>

            <section className="mt-8">
                <div className="flex justify-center">
                    <table className="w-1/2 border border-gray-300 text-gray-800 text-sm sm:text-base">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-center font-semibold">
                                    Band Score
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-center font-semibold">
                                    English Proficiency Level
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { score: 9, level: "Expert User" },
                                { score: 8, level: "Very Good" },
                                { score: 7, level: "Good" },
                                { score: 6, level: "Competent" },
                                { score: 5, level: "Modest" },
                                { score: 4, level: "Limited" },
                                { score: 3, level: "Extremely Limited" },
                                { score: 2, level: "Intermittent User" },
                                { score: 1, level: "Non-user" },
                                { score: 0, level: "No Attempt" },
                            ].map((item) => (
                                <tr key={item.score} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {item.score}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {item.level}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="mt-6 space-y-3 text-gray-700 text-base leading-relaxed">
                <p>
                    Band 9 indicates full operational command of English.
                </p>
                <p>
                    Band 0 indicates no attempt made in the test.
                </p>
                <p>
                    Universities, employers, and immigration authorities set their own required band scores depending on their criteria.
                </p>
            </div>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Achieve Your Target Band Score
            </h2>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                    With proper guidance, structured preparation, and expert feedback, candidates can significantly improve their IELTS performance. Professional coaching helps enhance:
                </p>

                <ul className="list-disc mx-10 space-y-2">
                    <li>Time management</li>
                    <li>Writing structure</li>
                    <li>Reading strategies</li>
                    <li>Speaking confidence</li>
                    <li>Listening accuracy</li>
                </ul>

                <p>
                    Start preparing strategically and move one step closer to your global ambitions.
                </p>
            </div>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                What is the Importance of IELTS Coaching?
            </h2>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                    For over 30 years, the International English Language Testing System (IELTS) has been the global benchmark for assessing English language proficiency. It is widely accepted by universities, employers, professional bodies, and immigration authorities worldwide.
                </p>

                <p>
                    As IELTS plays a crucial role in shaping academic and professional futures, enrolling in a professional IELTS coaching institute has become a strategic step for aspirants aiming to study, work, or migrate abroad.
                </p>

                <p>
                    More than 9,000 institutions globally recognize IELTS scores, making structured preparation essential for achieving competitive band scores.
                </p>
            </div>

            <h3 className="mt-8 text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Why IELTS Coaching Matters
            </h3>

            <ul className="list-disc mx-10 space-y-3 text-gray-700">
                <li>Structured Curriculum covering all four modules.</li>
                <li>Practice materials and regular mock tests.</li>
                <li>Expert guidance with personalized feedback.</li>
                <li>Effective time management techniques.</li>
                <li>Online and offline learning flexibility.</li>
            </ul>
        </main>
    );
}