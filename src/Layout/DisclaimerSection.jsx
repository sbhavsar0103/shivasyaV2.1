import { CheckCircle } from "lucide-react";

export default function DisclaimerSection() {

    const warrantyPoints = [
        "Accuracy",
        "Completeness",
        "Reliability",
        "Suitability",
        "Availability",
        "Readability",
        "Fitness for a particular purpose"
    ];

    const availabilityReasons = [
        "Technical issues",
        "Server downtime",
        "Maintenance activities",
        "Network failures",
        "Events beyond our control"
    ];

    const liabilityPoints = [
        "Use of this website",
        "Reliance on website content",
        "Third-party services",
        "Technical interruptions"
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Title */}
                <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Disclaimer
                    </h3>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        The information provided on <strong>www.shivasya.in</strong> is prepared and published by the team at 
                        <strong> Shivasya Education & Immigration Services</strong> with references from various publicly available sources.
                        While we make every reasonable effort to ensure that the information on this website is accurate, current, 
                        and reliable, Shivasya makes no representations or warranties of any kind, express or implied, regarding:
                    </p>

                    <ul className="space-y-3 mt-5">
                        {warrantyPoints.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-800 text-base sm:text-lg mt-6">
                        Any reliance you place on such information is strictly at your own risk.
                    </p>
                </div>

                {/* General Information */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        General Information Only
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        The content, advice, and materials provided on this website are for general informational purposes only 
                        and should not be interpreted as professional, legal, immigration, or financial advice.
                    </p>

                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        Your decisions based on the information available on this website are made at your own discretion and risk. 
                        Shivasya shall not be held liable for any loss, damage, or consequences arising from such decisions.
                    </p>
                </div>

                {/* Third Party */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Third-Party Links and Services
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        This website may contain links to third-party websites, partners, or service providers for your convenience.
                        Please note:
                    </p>

                    <ul className="space-y-3 mt-5">
                        <li className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                            <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                            These third parties operate independently.
                        </li>
                        <li className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                            <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                            Shivasya does not control their content, policies, availability, or services.
                        </li>
                        <li className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                            <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                            We are not responsible for their data practices, procedures, or accuracy of information.
                        </li>
                    </ul>

                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        We recommend reviewing the legal and privacy policies of any third-party website before engaging with them.
                    </p>
                </div>

                {/* Website Availability */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Website Availability
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        While we strive to ensure uninterrupted access to <strong>www.shivasya.in</strong>, 
                        Shivasya shall not be liable for temporary unavailability due to:
                    </p>

                    <ul className="space-y-3 mt-5">
                        {availabilityReasons.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* User Info */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        User-Provided Information
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        We take reasonable measures to safeguard the information you provide to us. However:
                    </p>

                    <ul className="space-y-3 mt-5">
                        <li className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                            <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                            Shivasya is not responsible for errors, inaccuracies, or omissions in the information submitted by users.
                        </li>
                        <li className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                            <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                            It is your responsibility to ensure the correctness of the information you provide.
                        </li>
                    </ul>

                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        If you need to update, modify, or delete your personal information, please contact us at:
                        <br />📧 info@shivasya.in
                    </p>
                </div>

                {/* Limitation of Liability */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Limitation of Liability
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        Under no circumstances shall Shivasya, its employees, partners, or affiliates be liable for any direct, indirect,
                        incidental, consequential, or special damages arising from:
                    </p>

                    <ul className="space-y-3 mt-5">
                        {liabilityPoints.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}