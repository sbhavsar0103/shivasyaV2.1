import EuropeVisaConsultant from "../assets/study/europe-visa-consultant.png";

export default function StudyInEurope() {
    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* Main Left + Right Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Side: Title + Paragraph */}
                    <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Why Study in Europe ?
                        </h3>

                        <div className="space-y-4 text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                            <p>
                                Europe has consistently remained one of the most attractive and preferred destinations for students across the globe. Studying in Europe is not just about earning a degree — it is an opportunity to experience a rich blend of cultures, traditions, and lifestyles.
                            </p>

                            <p>
                                As a student, you get the chance to interact with people from diverse backgrounds while exploring different countries and cities. This exposure helps you grow personally and professionally, building a global outlook for your future.
                            </p>

                            <p>
                                One of the added advantages of studying in Europe is the wide range of student benefits available. Students can often enjoy special discounts on:
                            </p>

                            <ul className="list-disc pl-6 space-y-1">
                                <li>Museum entries and exhibitions</li>
                                <li>Concerts and cultural programs</li>
                                <li>Travel passes and guided tours</li>
                                <li>Visits to historical and heritage landmarks</li>
                            </ul>

                            <p>
                                This allows you to explore some of the world’s most iconic and culturally significant destinations while continuing your studies.
                            </p>

                            <p>
                                With endless academic, cultural, and travel opportunities, it’s easy to see why Europe continues to be a top choice for study visa aspirants worldwide.
                            </p>

                            <p>
                                Europe continues to be one of the most preferred destinations for international students. From academic excellence to global career exposure, studying in Europe opens doors to world-class opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={EuropeVisaConsultant}
                            alt="Study in Europe"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-8">

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Quality of Education
                        </h4>
                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            European universities are globally recognized for their academic excellence, advanced research, and industry-oriented programs. As the birthplace of the Industrial Revolution and home to centuries of academic heritage, Europe offers a strong educational foundation across disciplines such as technology, business, arts, and sciences.
                        </p>
                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Institutions like the University of Oxford, University of Cambridge, and ETH Zurich – Swiss Federal Institute of Technology consistently rank among the best in the world.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Career Opportunities
                        </h4>
                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            International exposure has become a major advantage in today’s competitive job market. Many European countries encourage international students to stay back after graduation to explore employment opportunities. This increases your chances of securing a job and building a long-term career abroad.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Lower Tuition Fees
                        </h4>
                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Compared to countries like the USA, Canada, and Australia, tuition fees at many European public universities are significantly lower. Some countries even offer tuition-free education at public institutions. Additionally, students can apply for scholarships and financial aid to further reduce expenses.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Historically and Culturally Rich
                        </h4>
                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Europe is home to some of the world’s most iconic cities and architectural wonders. Studying here means living amidst centuries of history and culture. Cities such as Paris, Berlin, Amsterdam, Vienna, Copenhagen, and Prague are globally admired for their heritage and vibrant student life.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Part-time Job Opportunities
                        </h4>
                        <p className="text-justify text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Many European countries allow international students to work part-time during their studies (subject to visa rules). This helps students manage living expenses while gaining practical experience. Additionally, studying in Europe provides exposure to multiple languages such as French, German, Italian, Spanish, and Polish—enhancing global career prospects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}