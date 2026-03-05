import { CheckCircle } from "lucide-react";

export default function CopyrightNoticeSection() {

    const permittedUse = [
        "Print or download content to a local hard disk for personal and non-commercial use only.",
        "Share content with individual third parties for their personal use, provided proper acknowledgment is given to www.shivasya.in as the original source of the material."
    ];

    const restrictions = [
        "Commercially exploit any website content.",
        "Republish, reproduce, duplicate, copy, sell, or redistribute content for commercial purposes.",
        "Upload or place content on another website.",
        "Store or use the content in any electronic retrieval system.",
        "Modify or create derivative works from the website material."
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Website Ownership */}
                <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Copyright Notice
                    </h3>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        The website <strong>www.shivasya.in</strong>, including all its content, design, text, graphics, logos, images,
                        documents, and other materials, is the exclusive property of 
                        <strong> Shivasya Education & Immigration Services</strong>.
                    </p>

                    <p className="text-gray-800 text-base sm:text-lg mt-3">
                        © 2025 – www.shivasya.in <br />
                        <strong>All Rights Reserved.</strong>
                    </p>
                </div>

                {/* Permitted Use */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Permitted Use
                    </h4>

                    <ul className="space-y-4">
                        {permittedUse.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Restrictions */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Restrictions
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg mb-4">
                        You may NOT:
                    </p>

                    <ul className="space-y-4">
                        {restrictions.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] mt-1 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-800 text-base sm:text-lg mt-4">
                        Without prior written consent from <strong>Shivasya Education & Immigration Services</strong>, 
                        any such use is strictly prohibited.
                    </p>
                </div>

                {/* Intellectual Property */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Intellectual Property Protection
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        All trademarks, service marks, trade names, logos, and branding displayed on this website 
                        are the property of <strong>Shivasya Education & Immigration Services</strong> unless otherwise stated.
                        Unauthorized use may result in legal action under applicable Indian intellectual property laws.
                    </p>
                </div>

                {/* Permission Requests */}
                <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Permission Requests
                    </h4>

                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        For permissions regarding content usage, please contact:
                    </p>

                    <div className="mt-4 space-y-2 text-gray-800 text-base sm:text-lg">
                        <p>📧 info@shivasya.in</p>
                        <p>📞 +91-7567981608</p>
                    </div>
                </div>

            </div>
        </section>
    );
}