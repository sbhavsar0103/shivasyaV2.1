import { Send, CheckCircle } from "lucide-react";

export default function TermsAndConditionsSection() {
    const terms = [
        `"Client," "You," and "Your" refer to you, the person visiting this website and complying with the Company's terms and conditions.`,
        `"The Company," "Ourselves," "We," "Our," and "Us" refer to our Company.`,
        `"Party," "Parties," or "Us" refer to both the Client and ourselves.`,
        `All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of assisting the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of the provision of the Company's stated services, in accordance with and subject to the prevailing law of India.`,
        `Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they are taken as interchangeable and therefore as referring to the same.`
    ];

    const Mustnot = [
        "Republish material from Shivasya",
        "Sell, rent or sub-license material from Shivasya",
        "Reproduce, duplicate or copy material from Shivasya",
        "Redistribute content from Shivasya",
    ]

    const warrantAndRepresent = [
        "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
        "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
        "The Comments do not contain any defamatory, libellous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
        "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity."
    ]

    const HyperlinkingContent = [
        "Government agencies;",
        "Search engines;",
        "News organizations;",
        "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;",
        "Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site."
    ]

    const WeMayConsider = [
        "commonly-known consumer and/or business information sources;",
        "dot.com community sites;",
        "associations or other groups representing charities;",
        "online directory distributors;",
        "internet portals;",
        "accounting, law and consulting firms; and",
        "educational institutions and trade associations.",
    ]

    const ApprovedOrganizations = [
        "By use of our corporate name;",
        "By use of the uniform resource locator being linked to;",
        "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site."
    ]

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-5">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    TERMS & CONDITIONS
                </h3>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed text-justify">
                    <p>
                        Welcome to Shivasya!̥
                    </p>
                    <p>
                        The following terms apply to these Terms and Conditions, Privacy Statement, and Disclaimer Notice, as well as all agreements:
                    </p>

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
                    Cookies
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        We employ the use of cookies. By accessing Shivasya, you agreed to use cookies in agreement with Shivasya Education & Immigration Services Pvt. Ltd.'s Privacy Policy.
                    </p>
                    <p>
                        Most interactive websites use cookies to let us retrieve the userâ€™s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    License
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Unless otherwise stated, Shivasya Private Limited and/or its licensors own the intellectual property rights for all material on Shivasya. All intellectual property rights are reserved. You may access this from Shivasya for your personal use subjected to restrictions set in these terms and conditions.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    You must not:
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <ul className="space-y-4 mb-10 max-w-xl mx-auto lg:mx-0 mt-5">
                        {Mustnot.map((point, index) => (
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
                        This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Generator and the Privacy Policy Generator.
                    </p>

                    <p>
                        Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Shivasya Private Limited does not filter, edit, publish or review Comments before to their presence on the website. Comments do not reflect the views and opinions of Shivasya Private Limited, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Shivasya Private Limited shall not be liable for the Comments or any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                    </p>

                    <p>
                        Shivasya Private Limited reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    You warrant and represent that:
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <ul className="w-full space-y-4 mb-10 mt-5">
                        {warrantAndRepresent.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0 mt-1" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    <p>
                        You hereby grant Shivasya Private Limited a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any all forms, formats or media.
                    </p>

                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Hyperlinking to our Content
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <ul className="w-full space-y-4 mb-10 mt-5">
                        {HyperlinkingContent.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0 mt-1" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    <p>
                        Organizations are permitted to link to our home page, publications, or other website information under the following conditions: (a) the link is not deceptive; (b) it does not falsely imply sponsorship, endorsement, or approval of the linking party and its products/services; and (c) the link fits within the context of the linking party's site.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    We may consider and approve other link requests from the following types of organizatins:
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <ul className="space-y-4 mb-10 max-w-xl mx-auto lg:mx-0 mt-5">
                        {WeMayConsider.map((point, index) => (
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
                        We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavourably to ourselves or our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Shivasya Private Limited, and (d) the link is in the context of general resource information.
                    </p>
                    <p>
                        Organizations are allowed to link to our home page under the following conditions: (a) the link is not deceptive; (b) it does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) the link fits within the context of the linking party's site.
                    </p>
                    <p>
                        If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Shivasya Private Limited. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                    </p>
                </div>


                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Approved organizations may hyperlink to our Website as follows:
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <ul className="w-full space-y-4 mb-10 mt-5">
                        {ApprovedOrganizations.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-2 text-gray-800 text-base sm:text-lg"
                            >
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0 mt-1" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    <p>
                        No use of Shivasya Education & Immigration Services Pvt. Ltd.'s logo or other artwork will be allowed for linking absent a trademark license agreement.
                    </p>
                </div>
                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    iFrames
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                    </p>
                </div>
                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    Content Liability
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                    </p>
                </div>
            </div>
        </section>
    );
}