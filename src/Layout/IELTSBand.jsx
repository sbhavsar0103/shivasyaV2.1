import React from "react";

export default function IELTSBands() {
    return (
        <main className="mt-5 mx-20 px-2 sm:px-4">

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What is the IELTS Band Score?
            </h1>

            {/* Introduction Paragraphs */}
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p className="text-justify">
                    IELTS, the International English Language Testing System, is a widely popular English Test that is specifically crafted for students and individuals who are willing to study, work, or immigrate to official English-speaking countries such as the USA, UK, Canada, and Australia. Significantly, the IELTS Coaching Institute is more focused on students’ IELTS Band Score. An IELTS scale score of 0 to 9 determines the eligibility for IELTS marking criteria. The overall performance of the IELTS aspirant is determined based on four English language competency skills Speaking, Listening, Writing, and Reading. According to the requirements of a particular organization or institution, the overall band score is decided based on the average or a combination of the scores of each skill.
                </p>

                <p className="text-justify">
                    0 band score represents unsuccessful attempts in the IELTS test and 9 is considered the highest band score that shows that the candidate has completed the eligible command of the English language. One can particularly achieve enhanced proficiency for IELTS through IELTS Coaching Center as favourable.
                </p>
            </div>

            {/* IELTS Test Types Section */}
            <section className="mt-8">
                <div className="flex justify-center">
                    <table className="w-1/2 border border-gray-300 text-gray-800 text-sm sm:text-base">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                                    Band Score
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                                    English Proficiency
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { score: 9, level: "Excellent" },
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

            <h1 className="mt-8  text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What is the Importance of IELTS Coaching?
            </h1>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p className="text-justify">
                    For more than 30 years, IELTS has been the industry standard for evaluating English proficiency, certifying that candidates who plan to go Abroad match the required standard of English. Acknowledging the crucial influence that IELTS Coaching possesses on scholastic and professional endeavours, coaching classes or IELTS Academy has become an essential medium for those seeking centres for IELTS Preparation. Results of the IELTS exam are highly considered for International recognition and have been granted authorization by more than 9000 institutions globally. These IELTS Coaching consultancies also offer structured curriculum guides that cover all four modules of the IELTS exam, practice materials like sample questions and mock tests, Online Learning Platforms with flexible timings, Time Management Skills to ace each section within limited time constraints, online study references & resources, and expert guidance to assist candidates in achieving their aspirations worldwide.
                </p>

                <p className="text-justify">
                    While consulting IELTS Coaching Classes can add value in preparation for the IELTS test, making an impeccable IELTS Coaching choice of reliable and reputed IELTS Classes is essential to ensure a positive and effective IELTS Training process.
                </p>
                <p className="text-justify">
                    Ultimately, while there are ways to prepare for the IELTS even without formal coaching, tapping into an IELTS coaching academy can significantly improve a candidate’s preparation and also the chances of achieving their desired scores.
                </p>
            </div>
        </main>
    );
}