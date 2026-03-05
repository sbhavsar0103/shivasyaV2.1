import USAStudentImage from "../assets/study/study in canada.jpg";

export default function StudyInCanada() {
    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left Content */}
                    <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Why Study in Canada?
                        </h3>

                        <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
                            Canada is one of the most preferred destinations for international students. 
                            With globally recognized universities, strong career opportunities, 
                            and a welcoming multicultural society, studying in Canada offers 
                            both academic excellence and global exposure.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={USAStudentImage}
                            alt="Study in Canada"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">

                    {/* Education System */}
                    <div>
                        <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                            1. Canadian Education System
                        </h4>
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
                            Canada is renowned for its world-class education system, offering 
                            internationally recognized degrees across a wide range of programs. 
                            Canadian universities emphasize career-focused and practical learning, 
                            helping students build real-world skills. Canadian degrees are highly 
                            respected worldwide, opening doors to global career opportunities.
                        </p>
                    </div>

                    {/* Employment Opportunities */}
                    <div>
                        <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                            2. Employment Opportunities
                        </h4>
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
                            Canada allows international students to work during their studies 
                            and offers post-graduation work opportunities. Gaining Canadian 
                            work experience significantly enhances career prospects. 
                            Government-supported employment programs and career guidance 
                            centers also help students transition smoothly into the workforce.
                        </p>
                    </div>

                    {/* Life in Canada */}
                    <div>
                        <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                            3. Life in Canada
                        </h4>
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
                            Canada offers a high quality of life with affordable healthcare 
                            access and a safe environment. Since officially adopting 
                            multiculturalism in 1971, Canada has become one of the most 
                            welcoming countries for international students. Its diverse 
                            communities and stunning natural landscapes make it an ideal 
                            place to live and study.
                        </p>
                    </div>

                    {/* Cost of Study */}
                    <div>
                        <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                            4. Cost of Study in Canada
                        </h4>
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
                            Tuition fees vary depending on the course, institution, and 
                            location. On average:
                        </p>

                        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-800 text-base sm:text-lg">
                            <li>Undergraduate Programs: ~CAD 36,000 per year</li>
                            <li>Graduate Programs: ~CAD 21,100 per year (Statistics Canada, 2022)</li>
                            <li>Average Living Expenses: ~CAD 10,100 per year (~INR 5,22,000)</li>
                        </ul>

                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify mt-4">
                            While costs vary by lifestyle and city, Canada remains more 
                            affordable compared to many other Western countries, making 
                            it a smart investment for international education.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}