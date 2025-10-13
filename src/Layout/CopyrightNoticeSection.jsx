import { Send, CheckCircle } from "lucide-react";

export default function CopyrightNoticeSection() {
    const points = [
        "You are allowed to either print or download it to a local hard disk for your personal and non - commercial use only.",
        `You are allowed to provide it to individual third parties for their personal use.However, you need to acknowledge " www.visazone.in " as the content source.`,
        "You cannot commercially exploit the content, place it on any other website, or use it in any form of electronic retrieval system without Shivasya's written consent."
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-5">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Copyright Notice
                </h3>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed text-justify">
                    <ul className="w-full space-y-4 mb-10 mt-5">
                        {points.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0 mt-1" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
