import { Send, CheckCircle } from "lucide-react";

export default function MonetaryPolicySection() {
    const terms = [
        "Program Packages and service that you purchase at Shivasya comes with a week that is 3 days refund policy wherein you can ask for a refund within 3 days of purchasing a package or if the purchased package has not been put into action.",
        "Once the deliverables in terms of service or package begin, the amount will not be refunded in any case.",
        "In case you receive a refund approval, the GST amount along with the service used will not be repaid.",
        "The amount to be refunded will be transferred to the bank account you paid that amount from within 3 working days.",
        "Shivasya is not liable for the amount you pay to third parties i.e. our partners use for availing any type of service. The payment information such as credit card details are not stored by any means by us and you provide that information to the third parties based upon your and your parentâ€™s consent."
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-5">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Monetary Policy
                </h3>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    1. Payment Policy
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Full payment for any service purchased is required to be made at the time of registration except in cases wherein part payment, instalments, or specific payment situations are agreed upon by Shivasya in writing.
                    </p>
                    <p>
                        In case of free trials for any service that you opt for, the payment criteria will be decided upon the conclusion of such trials on mutual consent by both the parties that is Shivasya and the customer.
                    </p>
                    <p>
                        For purchasing any of the services offered by Shivasya through its website, having internet access and a valid payment gateway as specified during the sign-up. As stated in Privacy Policy, Shivasya does not store your payment information such as credit card details and so on provided to third parties i.e. our partners for availing any sorts of service.
                    </p>
                    <p>
                        Therefore, you provide that information with your and your parents/guardians' consent, and it is advisable to go through the course and make sure that it satisfies you from every sphere.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    2. Refund Policy
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <ul className="w-full space-y-4 mb-10 mt-5">
                        {terms.map((point, index) => (
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

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    3. Cancellation Policy
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        You can avail of canceling your enrolment for any of the services purchased from us at any time but there will be no refund provided if the service delivery has already begun, is in process, or has been completed.
                    </p>
                </div>
            </div>
        </section>
    );
}