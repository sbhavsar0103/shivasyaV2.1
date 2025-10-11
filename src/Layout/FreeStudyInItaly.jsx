import React from "react";
import freeCounsellingImg from "../assets/study/free-study-in-italy.png";
import scholarshipDemoImg from "../assets/study/100_-minimum-Scholarship.webp";
import experiencedFacultyImg from "../assets/study/Without-ielts.webp";
import flexibleBatchImg from "../assets/study/top-ranked-universities.webp";
import unlimitedPracticeImg from "../assets/study/admission-without-interview.webp";
import individualAttentionImg from "../assets/study/study-under-bologna-process.webp";
import latestStudyMaterialImg from "../assets/study/Can-take-transfer.webp";
import exhaustiveLibraryImg from "../assets/study/work-20-hours-week.webp";
import freeHeadphonesImg from "../assets/study/work-Full-Time.webp";
import weeklyMockTestImg from "../assets/study/no-visa.webp";
import modernFacilityImg from "../assets/study/1-Year-Job-Seeker.webp";
import smartReadingImg from "../assets/study/2-Years-Work-Permit.webp";
import writingTipsImg from "../assets/study/EASY-PR.webp";
import speakingTipsImg from "../assets/study/work-anywhere-in-Europe.webp";
import grammarTipsImg from "../assets/study/visa process.webp";
import highBandImg from "../assets/study/100_-minimum-Scholarship.webp";



export default function FreeStudyInItaly() {
    const benefits = [
        { id: "01", title: "Free Counselling Sessions", image: freeCounsellingImg },
        { id: "02", title: "Book a Scholarship Demo", image: scholarshipDemoImg },
        { id: "03", title: "Experienced Certified Faculty", image: experiencedFacultyImg },
        { id: "04", title: "Flexible Batch Timings", image: flexibleBatchImg },
        { id: "05", title: "Unlimited Practice Hours", image: unlimitedPracticeImg },
        { id: "06", title: "Individual Attention to Every Student", image: individualAttentionImg },
        { id: "07", title: "Exclusive Study Materials Provided", image: latestStudyMaterialImg },
        { id: "08", title: "Exhaustive Library & Resources", image: exhaustiveLibraryImg },
        { id: "09", title: "Free Headphones for Listening Practice", image: freeHeadphonesImg },
        { id: "10", title: "Weekly Mock Tests & Progress Tracking", image: weeklyMockTestImg },
        { id: "11", title: "Modern Learning Facilities", image: modernFacilityImg },
        { id: "12", title: "Smart Reading & Audio-Visual Learning", image: smartReadingImg },
        { id: "13", title: "Effective Writing Tips & Techniques", image: writingTipsImg },
        { id: "14", title: "Interactive Speaking Sessions", image: speakingTipsImg },
        { id: "15", title: "Comprehensive Grammar Lessons", image: grammarTipsImg },
        { id: "16", title: "Proven High Band Score Achievements", image: highBandImg },
    ];

    return (
        <div className="min-h-screen py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Visa zone is the Best for Free{" "}
                        <span className="relative inline-block">
                            Study in Italy?
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                height="12"
                                viewBox="0 0 300 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 10C50 3 250 3 298 10"
                                    stroke="#3D1F14"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>

                    </h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Here’s why choosing Visa zone is the most magnificent decision for your free study in Italy:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="relative group">
                            {/* Number Badge (half inside/outside) */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                                <div className="w-14 h-14 rounded-full bg-[#3D1F14] flex items-center justify-center shadow-lg border-4 border-white">
                                    <span className="text-white font-bold text-lg">
                                        {benefit.id}
                                    </span>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                                    <img
                                        src={benefit.image}
                                        alt={benefit.title}
                                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-center font-semibold text-gray-900 text-base leading-snug min-h-[3rem] flex items-center justify-center text-balance">
                                        {benefit.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
