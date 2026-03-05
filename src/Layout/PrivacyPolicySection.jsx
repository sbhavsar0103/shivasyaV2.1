import { CheckCircle } from "lucide-react";

export default function PrivacyPolicySection() {

    const collectedData = [
        "Name",
        "Address",
        "Email address",
        "Phone number",
        "Other relevant contact details"
    ];

    const purposes = [
        "Respond to your inquiries",
        "Provide customer service support",
        "Process services requested by you",
        "Improve website content and user experience",
        "Inform you about updates, new services, and offers",
        "Send marketing communications (with your consent) via SMS, Email, WhatsApp, or Voice"
    ];

    const legalSharing = [
        "With trusted partners strictly for service fulfillment",
        "In case of business sale, merger, or asset transfer",
        "When required by law or legal proceedings",
        "To protect our legal rights and interests"
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Title */}
                <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Privacy Policy
                    </h3>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        At <strong>Shivasya Education & Immigration Services</strong>, protecting your privacy is one of our highest priorities.
                        This Privacy Policy explains how we collect, use, store, and protect the information you provide while using our website
                        <strong> www.shivasya.in</strong>.
                    </p>

                    <p className="text-gray-800 text-base sm:text-lg mt-3">
                        By accessing or using our website, you agree to the terms outlined in this Privacy Policy.
                    </p>
                </div>

                {/* 1. Data Collection */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        1. Data Collection and Use
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg mb-4">
                        We collect personal information that you voluntarily provide to us, including:
                    </p>

                    <ul className="space-y-3 mb-6">
                        {collectedData.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-800 text-base sm:text-lg mb-4">
                        Your information may be used for:
                    </p>

                    <ul className="space-y-3 mb-6">
                        {purposes.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-800 text-base sm:text-lg mb-4">
                        We do not sell, rent, or trade your personal information.
                        However, your data may be shared:
                    </p>

                    <ul className="space-y-3">
                        {legalSharing.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Data Controller */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        2. Data Controller and Compliance
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        Shivasya Education & Immigration Services is the sole data controller of information collected through
                        <strong> www.shivasya.in</strong>. We process personal data in accordance with applicable data protection laws,
                        including adherence to GDPR principles where applicable.
                    </p>
                </div>

                {/* 3. Security */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        3. Data Protection & Security
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        We implement administrative, technical, and physical safeguards to protect your information from unauthorized access,
                        misuse, alteration, or destruction.
                    </p>

                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        Payment information is processed through secure SSL encryption.
                        We do not store or share payment card details with third parties.
                    </p>
                </div>

                {/* 4. Third Party */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        4. Third-Party Services
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        We may partner with third-party providers such as payment gateways, courier services,
                        loan providers, digital wallets, and advertising agencies. Only limited and necessary
                        information is shared for service delivery.
                        We are not responsible for third-party privacy practices.
                    </p>
                </div>

                {/* 5. Cookies */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        5. Cookies
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        We use cookies to improve user experience, analyze website traffic,
                        and provide consistent services. You may disable cookies in your browser settings,
                        though some features may not function properly.
                    </p>
                </div>

                {/* 6. Governing Law */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        6. Governing Law
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        This website is governed by the laws of India. Any disputes arising from the use
                        of this website shall be subject to the jurisdiction of Indian courts.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Queries & Contact Information
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg">
                        📧 info@shivasya.in <br />
                        📞 +91-7567981608
                    </p>
                </div>

                {/* Changes */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Changes to This Privacy Policy
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        This Privacy Policy may be updated periodically.
                        Continued use of the website after updates constitutes acceptance of the revised policy.
                    </p>
                </div>

            </div>
        </section>
    );
}