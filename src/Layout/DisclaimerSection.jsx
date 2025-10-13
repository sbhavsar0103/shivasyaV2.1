import { Send, CheckCircle } from "lucide-react";

export default function DisclaimerSection() {
    const points = [
        "As and when required by the law or legal procedures",
        "When asked by the government",
        "At the time of protecting Licensee’s rights and interests",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-5">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Disclaimer
                </h3>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed text-justify">
                    <p>
                        All the information mentioned in visazone.in is drafted by team Shivasya with references from various websites. While we strive to provide you with accurate and up-to-date information, we are not liable for the website, service, product, or information in terms of any warranties, wholeness, accuracy, readability, suitability, or availability.
                    </p>
                    <p>
                        The information and advice mentioned on the website are for general purpose, and it should not affect your own decisions. If you intend to do so, Shivasya is not liable for your decisions as you took that decision at your own risk.
                    </p>
                    <p>
                        Third-parties along with the links used in this website to provide you with the best of services are not in control of www.visazone.in. They are independent in terms of data, content, procedures, nature, and availability.
                    </p>
                    <p>
                        All efforts and functionalities are developed with thoughts to improve your experience, but in case the website is unavailable due to technical issues, Shivasya is not liable for it.
                    </p>
                    <p>
                        All efforts and functionalities are developed with thoughts to improve your experience, but in case the website is unavailable due to technical issues, Shivasya is not liable for it.
                    </p>
                    <p>
                        No compromises are made to protect the information provided by you but Shivasya is not liable for any errors and omissions in the information from your end. In case, you need to change or omit your personal information, do contact us at info@visazone.in so that we can make immediate or quick changes.
                    </p>
                </div>
            </div>
        </section>
    );
}
