import CoachingImage from "../assets/utility/coaching.webp";
import { CheckCircle } from "lucide-react";

export default function OurServices() {
    const Coachingpoints = [
        "NODE partner of IDP, British Council and Pearson",
        "Certified Faculties with more than 10 years of experience",
        "Limited Students: only 15 to 20 Students in 1 batch for personal attention to each student",
        "Tailor made materials, software and library to achieve required score",
        "Flexible batch Timings and 1 year of validity",
        "Mock Test on every Saturday",
        "Specially designed Mock Tests for final exam",
        "Special tutors for the everyday speaking",
    ];

    const careerCounseling = [
        "We understand your career goal",
        "In-depth analyse your entire profile",
        "Understand your budget",
        "Review the admission and visa possibilities",
        "Expert opinion with the multiple options",
        "But at same time, we guide you what would be the best option for your future"
    ]
    const UnivercitySelection = [
        "Researching the political, economic and social stability of the country",
        "Assessing the availability and quality of education and research opportunities",
        "Investigating the cost of living and potential earning opportunities",
        "Evaluating the level of English proficiency in the country",
        "Considering cultural and social compatibility with one's own values and lifestyle",
        "Reviewing the safety and security situation in the country",
    ]

    const ApplicationAssistance = [
        "Choosing the right universities and programs based on your profile and preferences",
        "Preparing a strong application package, including a well-written statement of purpose (SOP), curriculum vitae (CV), and letters of recommendation (LOR)",
        "Ensuring that all application materials are complete and submitted on time",
        "Providing guidance on how to present yourself in the best possible light to increase your chances of acceptance",
        "Assisting with follow-up communications with universities, such as scheduling interviews or providing additional information as needed",
        "Offering support throughout the entire application process, from start to finish"
    ]



    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 mb-12">
                {/* H2 */}
                <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {" "}
                    <span className="relative inline-block">
                        COACHING
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

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p className="font-semibold">
                        Why Visa zone is the best place for Coaching ?
                    </p>
                    <p>
                        The most important step for any one hoping to go to another country for further studies is appearing for the IELTS or PTE.
                    </p>
                </div>

                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Image Left */}
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <img
                            src={CoachingImage}
                            alt="Study in USA"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>

                    {/* UL Right */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {Coachingpoints.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr />

            <div className="max-w-7xl mx-auto flex flex-col gap-6 mt-12 mb-12">
                {/* H2 */}
                <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">
                    <span className="relative inline-block">
                        CAREER COUNSELING
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

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p className="font-semibold">
                        Everything is available on Google but still you need the Expert for your future so, here we are.
                    </p>
                    <p>
                        Studying abroad is not just an indicator of prestige & quality — it’s an investment. It allows you to not only broaden your horizon and develop integral skills but also helps you become a good citizen.
                    </p>
                </div>

                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* UL Left */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {careerCounseling.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    {/* Image Right */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={CoachingImage}
                            alt="Career Counseling"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>

            <hr />

            <div className="max-w-7xl mx-auto flex flex-col gap-6 mt-12 mb-12">
                {/* H2 */}
                <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {" "}
                    <span className="relative inline-block">
                        COUNTRY & UNIVERSITY SELECTION
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

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p className="font-semibold">
                        After understanding your career goal and analysing your profile, our counsellors provide you with their expert opinion and advise
                    </p>
                    <p>
                        University and country guidance refers to the process of helping students and professionals choose the best universities and countries to pursue their education or career goals.
                    </p>
                </div>

                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Image Left */}
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <img
                            src={CoachingImage}
                            alt="Study in USA"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>

                    {/* UL Right */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {UnivercitySelection.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr />

            <div className="max-w-7xl mx-auto flex flex-col gap-6 mt-12 mb-12">
                {/* H2 */}
                <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">
                    <span className="relative inline-block">
                        APPLICATION ASSISTANCE
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

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p className="font-semibold">
                        Everything is available on Google but still you need the Expert for your future so, here we are.
                    </p>
                    <p>
                        Studying abroad is not just an indicator of prestige & quality — it’s an investment. It allows you to not only broaden your horizon and develop integral skills but also helps you become a good citizen.
                    </p>
                </div>

                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* UL Left */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {ApplicationAssistance.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    {/* Image Right */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={CoachingImage}
                            alt="Career Counseling"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}