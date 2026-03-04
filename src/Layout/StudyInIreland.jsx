import IrelandVisaConsultant from "../assets/study/ireland-visa-consultant.png";

export default function StudyInIreland() {
    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* Heading Section */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Study in Ireland
                    </h2>
                    <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                        Ireland is one of the most preferred destinations for international students seeking quality education, global exposure, and vibrant cultural experiences. With world-class universities, innovative programs, and a welcoming environment, it is an ideal place to pursue higher education.
                    </p>
                </div>

                {/* Main Left + Right Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Side */}
                    <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            High-Quality Education
                        </h3>
                        <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                            Ireland is renowned for its top-notch education system. Students can choose from a wide range of programs guided by experienced education consultants. Universities focus on preparing students for today’s competitive world through innovative teaching methods, strong research opportunities, and attractive scholarship programs.
                        </p>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={IrelandVisaConsultant}
                            alt="Study in Ireland"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>

                {/* Other Sections */}
                <div className="space-y-8">

                    <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                            English-Speaking Environment
                        </h4>
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
                            For non-native English speakers, studying in Ireland provides an immersive language-learning environment that enhances fluency and communication skills. This advantage significantly boosts career prospects during and after completing studies.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                            Employment Opportunities
                        </h4>
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
                            As per Irish government guidelines, students are permitted to work part-time during their studies to support living expenses. After graduation, options such as the Graduate Route allow students to gain valuable international work experience. With proper guidance, students can select programs aligned with strong career opportunities.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                            Life in Ireland
                        </h4>
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
                            Ireland offers an enriching student experience with high living standards, safe cities, stunning landscapes, and a vibrant cultural scene. Known for its music, art, and welcoming communities, Ireland provides a secure and enjoyable environment for international students. It also serves as a gateway to Europe, offering easy access to neighboring countries.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}