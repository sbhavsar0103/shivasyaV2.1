import React from "react";

const AboutSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="inline-block bg-gray-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4">
                    About Company
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 leading-snug">
                    One-Stop Solution For All Your Visa Needs
                </h3>

                <p className="text-gray-600 max-w-5xl mx-auto mb-12 text-sm sm:text-base text-justify leading-relaxed">
                    Global Colliance is a leading study abroad consultant in India, providing expert guidance
                    and complete services for individuals seeking opportunities in overseas education. With
                    over a decade of experience, Global Colliance has established itself as a trusted name
                    among overseas education consultants in India, committed to delivering convenience and
                    excellence to aspiring students.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-[#3D1F14] font-semibold flex items-center mb-3">
                            <span className="mr-2">➤</span> Our Vision
                        </h3>
                        <hr />
                        <div className="pt-5">
                            <p className="text-gray-500 text-sm sm:text-base text-justify">
                                At Global Colliance, our vision is to create a world where every student has the
                                opportunity to broaden their horizons and gain global exposure through foreign
                                education. We believe studying abroad enhances one’s academic and professional
                                prospects and promotes personal growth and cultural understanding.
                            </p>
                            <p className="text-gray-500 text-sm sm:text-base mt-4 text-justify">
                                We strongly believe in a future where every student has the opportunity to participate
                                in unique study abroad programs around the world, allowing them to evolve into global
                                citizens with a mindset geared toward making a positive difference in our world.
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-[#3D1F14] font-semibold flex items-center mb-3">
                            <span className="mr-2">➤</span> Our Mission
                        </h3>
                        <hr />
                        <div className="pt-5">
                            <p className="text-gray-500 text-sm sm:text-base text-justify">
                                Our mission at Global Colliance is to provide students with exceptional study-abroad
                                experiences that inspire personal growth, academic achievement, and cross-cultural
                                understanding.
                            </p>
                            <p className="text-gray-500 text-sm sm:text-base mt-4 text-justify">
                                Global Colliance aims to provide students with diverse programs that help them master
                                their skills and encourage growth, critical thinking, self-expression, and
                                multitasking. In addition, our mission is to offer our students exceptional study-abroad
                                knowledge without compromising their interests or budget.
                            </p>
                            <p className="text-gray-500 text-sm sm:text-base mt-4 text-justify">
                                To achieve this, Global Colliance has committed to collaborating with top-notch colleges and universities in Canada, the UK, the USA,  Australia, New Zealand, Germany, France, and Dubai . Our goal is to ensure the best education for our students, fostering global leaders who can drive meaningful impact in the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
