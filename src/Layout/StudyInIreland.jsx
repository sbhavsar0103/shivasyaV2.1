import IrelandVisaConsultant from "../assets/study/ireland-visa-consultant.png";

export default function StudyInIreland() {
    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* Main Left + Right Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side: Title + Paragraph */}
                    <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            High-Quality Education
                        </h3>
                        <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
                            Ireland is very well-known for offering a top-notch educational system. Many students across the world want to study in Ireland. There are Ireland education Consultants that offer a wide range of courses for students with the freedom of letting them opt for a program that piques their interest. Intending to help students prepare for today’s competitive and fast-paced world, some colleges and universities provide an innovative educational environment. Ireland also strives to enlighten the learning journey of international students by offering scholarship opportunities to study in Ireland.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <img
                            src={IrelandVisaConsultant}
                            alt="Study in USA"
                            className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            English-Speaking Environment
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            For non-native speakers who don’t have a native English-speaking background, getting an opportunity to study in Ireland consultants can provide an immersive language learning experience to enhance their language-speaking skills and fluency. It can also give a boost to their large-scale career goals during and after the journey of their study in Ireland.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Employment Opportunities:
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            As per the guidelines issued by the Ireland government, students are permitted to work both full-time and part-time to support their accommodation and other miscellaneous costs parallel to their study in Ireland. Depending on the duration of the course and the specific regulations of each university and college, there may be deviations. You can gain globalized recognition according to your qualifications. With the help of an Ireland Student visa Consultant, students can get guidance with finding colleges that allow them to work part-time without affecting their concerned study or courses.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                            Life in Ireland
                        </h4>
                        <p className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                            For international students who want to study in Ireland, it could be a wonderful and enriching experience. Ireland presents a rare combination of a high standard of living and scholastic excellence along with its stunning landscape, vibrant cities, welcoming environment, and rich culture. It has a culture engaged with folk music and art which receive recognition through festivals. Ireland is internationally recognized for its low crime rate and safety, which demonstrates it is an ideal destination for students who want to study in Ireland. It is known as a gateway to Europe because of its easy and quick access by rail, air, and sea to other European nations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
