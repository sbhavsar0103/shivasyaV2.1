import { CheckCircle } from "lucide-react";

export default function TermsAndConditionsSection() {

    const definitions = [
        "“Client,” “You,” “Your” refer to the individual accessing this website and accepting the Company’s terms.",
        "“Company,” “We,” “Our,” “Us” refer to Shivasya Education & Immigration Services Pvt. Ltd.",
        "“Party” or “Parties” refer to both the Client and the Company."
    ];

    const mustNot = [
        "Republish material from this website",
        "Sell, rent, or sub-license website material",
        "Reproduce, duplicate, or copy content",
        "Redistribute content without written permission"
    ];

    const userWarrants = [
        "You have the right and necessary permissions to post content",
        "Your content does not infringe intellectual property rights",
        "Your content is not defamatory, offensive, unlawful, or invasive of privacy",
        "Your content is not used for unlawful or promotional purposes"
    ];

    const hyperlinkOrgs = [
        "Government agencies",
        "Search engines",
        "News organizations",
        "Online directory distributors",
        "Accredited businesses (excluding certain non-profit solicitation groups)"
    ];

    const dataSharing = [
        "Payment processing service providers",
        "Email and communication service providers",
        "Technical support vendors",
        "Affiliate partners for transaction facilitation or referral tracking",
        "Legal authorities if required by law"
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

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    TERMS & CONDITIONS
                </h3>

                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                    Welcome to Shivasya. These Terms and Conditions outline the rules and regulations 
                    for the use of the website operated by <strong>Shivasya Education & Immigration Services Pvt. Ltd.</strong>, 
                    located in Ahmedabad, Gujarat, India.
                    By accessing this website, we assume you accept these Terms and Conditions. 
                    Do not continue to use the website if you do not agree to all terms stated on this page.
                </p>

                {/* 1. Definitions */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">1. Definitions</h4>
                    <ul className="space-y-3 mt-5">
                        {definitions.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        All terms relate to the offer, acceptance, and consideration of payment 
                        necessary to provide our services in accordance with applicable Indian law.
                    </p>
                </div>

                {/* 2. Cookies */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">2. Use of Cookies</h4>
                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        We employ the use of cookies to improve website functionality, enhance user experience, 
                        and store session information. By accessing our website, you agree to the use of cookies 
                        in accordance with our Privacy Policy.
                    </p>
                </div>

                {/* 3. Intellectual Property */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">3. Intellectual Property Rights (License)</h4>
                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        Unless otherwise stated, Shivasya Education & Immigration Services Pvt. Ltd. 
                        owns the intellectual property rights for all material on this website.
                    </p>

                    <h5 className="text-lg font-semibold mt-6">You must NOT:</h5>
                    <ul className="space-y-3 mt-3">
                        {mustNot.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. User Content */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">4. User Comments and Content</h4>
                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        Shivasya does not pre-screen user comments and is not responsible for user-posted content. 
                        However, we reserve the right to monitor and remove inappropriate material.
                    </p>

                    <h5 className="text-lg font-semibold mt-6">By posting content, you warrant that:</h5>
                    <ul className="space-y-3 mt-3">
                        {userWarrants.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 5. Hyperlinking */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">5. Hyperlinking to Our Website</h4>
                    <ul className="space-y-3 mt-4">
                        {hyperlinkOrgs.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 6. Data Sharing */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">6. Data Sharing Policies</h4>
                    <ul className="space-y-3 mt-4">
                        {dataSharing.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 7. Data Security */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">7. Data Security</h4>
                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        We implement reasonable security measures to protect personal information. 
                        However, no internet transmission or storage system is completely secure, 
                        and we cannot guarantee absolute security.
                    </p>
                </div>

                {/* 8. Limitation of Liability */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">8. Limitation of Liability</h4>
                    <ul className="space-y-3 mt-4">
                        {liabilityPoints.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 9. Governing Law */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">9. Governing Law</h4>
                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. 
                        Any disputes shall fall under the jurisdiction of competent courts in Ahmedabad, Gujarat.
                    </p>
                </div>

                {/* 10. Contact */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">10. Contact Information</h4>
                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        📧 info@shivasya.in <br />
                        📞 +91-7567981608
                    </p>
                </div>
            </div>
        </section>
    );
}