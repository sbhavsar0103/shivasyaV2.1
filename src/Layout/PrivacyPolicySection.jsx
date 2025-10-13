import { Send, CheckCircle } from "lucide-react";

export default function PrivacyPolicySection() {
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
                    Privacy Policy
                </h3>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed text-justify">
                    <p>
                        One of the main priorities at Shivasya is to cater to the privacy needs of our customers. This privacy policy states various information that you handover to Shivasya at www.visazone.in to enhance your user experience as per this privacy statement.
                    </p>
                    <p>
                        In the below-mentioned policy, “we”, “us”, “Licensee”, “our”, and “Shivasya” signify the owner of the website who can be contacted at info@visazone.in . Whereas, “you”, “your” signifies the viewer or the user of the website.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    1. Data collection and use
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Shivasya is liable to not share, transfer, or rent the information collected through www.visazone.in from an identifiable physical person as it indirectly or directly includes sensitive personal information like name, address, email id.
                    </p>
                    <p>
                        This information collected from you on the sign-up page and through lead magnets on various pages to improve the content of our website, to get in touch with you for your queries, and provide you with personalized experiences.
                    </p>
                    <p>
                        Further, it can be used to update you regarding major changes in our website, launched services, and some offers that you might find valuable.
                    </p>
                    <p>
                        By using Shivasya’s website you confirm the use of your personal information which can be shared with our partners for your good.
                    </p>
                    <p>
                        This information may be transferred in case of the sale of our business / business assets as a part of the transaction as and when required.
                    </p>
                    <p>
                        We may use your information to respond to your inquiries, provide customer service support, send you important information about the services, and send you marketing communications (with your consent) via different channels, including but not limited to SMS, Email, WhatsApp, and Voice.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    2. Data Collector and controller
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Shivasya is the sole data collector and controller of your data uploaded at www.visazone.in .
                    </p>
                    <p>
                        The data is collected and used in line with the GDPR guidelines which Shivasya adheres to since 2016.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    3. Data protection
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Shivasya makes sure to fulfill all the precautionary measures required to protect your online as well as offline data to avoid any unauthorized breach.
                    </p>
                    <p>
                        The data collected might be used in various marketing initiatives such as e-mail marketing, printing catalogs along with giving necessary information to the purchaser of our services.
                    </p>
                    <p>
                        Names and email addresses can be shared with our partner also known as the third party from whom you will purchase certain services but payment information including credit cards used at our website will not be shared with anyone.
                    </p>
                    <p>
                        Your data might be shared under certain circumstances to protect the rights and interests of the Licensee that is “Shivasya.”
                    </p>
                    <p>
                        Those circumstances might include;
                    </p>

                    <ul className="space-y-4 mb-10 max-w-xl mx-auto lg:mx-0 mt-5">
                        {points.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    <p>
                        Apart from these situations, your data is completely secured with Shivasya.
                    </p>

                    <p>
                        In case you contact us via email, we may store your mail address in our database to regularly update you with valuable promotions and updates (unavailable at www.visazone.in ) through which you will be benefitted. These mails will be received by you only when you select the option of receiving emails from us or sign up for such promotions.
                    </p>

                    <p>
                        You can write to us at info@visazone.in in case you wish to stop receiving exclusive emails containing special promotions, discounts, and whatsoever or you can even follow instructions at the end of such emails to stop them. However, in any case, you will not be able to stop receiving communication emails related to your orders and purchases made with/through us.
                    </p>

                    <p>
                        You can write to us at info@visazone.in in case you wish to stop receiving exclusive emails containing special promotions, discounts, and whatsoever or you can even follow instructions at the end of such emails to stop them. However, in any case, you will not be able to stop receiving communication emails related to your orders and purchases made with/through us.
                    </p>

                    <p>
                        info@visazone.in might contain links to their partner or third-party websites; in that case, we are not liable for any information that you provide and they collect as their websites are not in control of Shivasya.
                    </p>

                    <p>
                        Therefore, we advise you to go through their legal policies before providing them with any personal or confidential information at your own risk as we are not responsible for notifying them of any change in information from your end at Shivasya’s platform.
                    </p>

                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    4. The third-party uses
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Shivasya has partnered with various organizations/firms to provide you with the best possible services including but not limited to couriers, loans, payments, and so on.
                    </p>
                    <p>
                        Limited information necessary to provide you with these services will be shared with third parties. A licensee might have partnered with companies that allow you to participate in memberships that provide access to digital wallets, payment or shipping services, and reward programs. If you choose to become a member of our partner service we might disclose limited information required by them to make such a program work but we will not be liable for their privacy practices and thus we advise you to go through the legal policies of companies you are planning to establish membership in.
                    </p>
                    <p>
                        For displaying advertisements either on www.visazone.in or across the internet we get into contracts with various agencies who serve ads on our behalf. These agencies might collect various information about your visits and your interaction with us on www.visazone.in to provide you with the best ads displaying our goods and services. These agencies can’t sell or share any of your information through the process but if they do, Shivasya is not liable for it.
                    </p>
                    <p>
                        www.visazone.in is not developed to be used by minors and underage children thus, we strictly advise parents and guardians to administer their child’s online activity or make use of various child protection software available online to secure the data provided by your child as it will not be possible without parental permission.
                    </p>
                    <p>
                        In case, minors update some confidential information by mistake, contact us via mail or through our website so that we can erase the data as soon as we are made aware of it.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    6. Cookies
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Minor pieces of information collected and stored by your browser are cookies. These cookies help us in improving your user experience by allowing us to provide you with steady services.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    8. Information update
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        If you wish to update or modify your information on www.visazone.in you can do so by logging into your account
                    </p>
                </div>


                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    9. Relevant Law
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        While visiting this website, you agree to the Indian laws stating that this website is governed and maintained according to the legal principles, and the possibilities of disagreement/dispute that might arise between you and Shivasya or the affiliates.
                    </p>
                </div>
                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    10. Consent
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        By accepting the terms of use of this website, you give your consent to the legal policies.
                    </p>
                </div>
                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    11. Security Statement
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        To protect all your crucial and private information, this website accepts orders only from browsers allowing communication through Secure Socket Layer(SSL) technology. This is because SSL encrypts all your personal information to avoid any misuse.
                    </p>
                    <p>
                        It is also advised that you sign off from any shared computer to protect your information, password, and computer from any virtual damage.
                    </p>
                </div>
                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    12. Queries
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        For any queries or concerns related to the legal policies of Shivasya, you can contact us at info@visazone.in or +91-74 8686 0001.
                    </p>
                    <p>
                        We assure you of the efforts from our team in resolving your queries. In absence of laws that require a mandatory response, we cannot ensure a response to your queries unrelated to this privacy policy or our practices.
                    </p>
                </div>
                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    13. Changes in Privacy Policy
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        This privacy policy is regularly reviewed, and updates may be made as needed. Notations such as "Revised(date)" or equivalent will be included each time the terms are updated and will take immediate effect on this website.
                    </p>
                    <p>
                        By visiting this website after a privacy policy update, you are consenting to all revisions. It is advised that you review the changes to stay informed about Shivasya's legal updates.
                    </p>
                </div>
            </div>
        </section>
    );
}
