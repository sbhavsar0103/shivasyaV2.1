import USAStudentImage from "../assets/study/usa-visa-consultant.png";

export default function StudyInCanada() {
    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* Main Left + Right Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side: Title + Paragraph */}
                    <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Why Study in Canada?
                        </h3>
                        <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
                            Canada is the most popular destination for international individuals. Studying in Canada is a highly desired dream for individuals who want to pursue career opportunities in an international environment. Likewise, one would want to study in Canada apart from any other country for multiple reasons. Here are some reasons why it is appealing to study in Canada:
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={USAStudentImage}
                            alt="Study in USA"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Canadian Education System:
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Canada is famous for its established education system and a vast amount of Canada study consultants, with internationally recognized universities and colleges that open doors to a wide range of programs and many overseas career opportunities. Canadian degrees are valued and prestigious throughout the world. Since it provides detailed and accessible knowledge to succeed in career-oriented adventures, the Canadian educational system has a well-deserved reputation for being focused on careers. Currently, the Canadian Education System is ranked seventh best in the world. The Canada Student Visa Consultant guides students in making correct choices regarding their career goals.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Employment Opportunities:
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            To gain more foreign students to their nation, the Canadian government has been progressively introducing appealing features. Canada currently permits students to work for a certain period after completing their studies. Moreover, the unemployment rate in Canada has not been substantially influenced in comparison to other countries. This way, international students can get the benefits of Canadian work experience that can help them to boost their careers ahead. Students who initiate their careers by passing the visa process through the best Canada Student Visa Consultants can get more affordable and growing opportunities. Several Counseling centers offer free guidance and knowledge about and language training along with work creation programs for beginners known as Human Resources Development Canada Centres.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Life in Canada:
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            Canada is a comparatively cheaper country than many other European and North American countries. It provides affordable access to quality medical care. International students enrolled under their respective education consultants in Canada can also be eligible for additional health benefits. Being one of the wealthiest nations in the world, it covers two-thirds part of the country’s GDP through the service sector and plays a major role in the export of several mineral resources including petroleum, Natural Gas, and much more. In 1971, Canada was the first nation which introduce multiculturalism which makes it an easy to adaptable country for international students who want to study by getting a Canada Student Visa. Considerably, After Scotland, Canada is the second most beautiful country in the world.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Cost of Study in Canada
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            The range of cost of study in Canada consultants can vary depending on factors such as the course program and duration, the location, the institution, and the student’s style. Generally, International students are likely to pay more tuition fees compared to Canadian Citizens and permanent residents. On average, the range of tuition fees for Universities for undergrad programs can be around CAD 36,000 per year while graduation can be around CAD 21,100. (Statistics Canada, 2022) Living expenses are greatly dependent on the student’s lifestyle. However, it is estimated that the average annual cost of living in Canada can be nearly $10,100 which is roughly 5,22,000 Indian rupees.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
