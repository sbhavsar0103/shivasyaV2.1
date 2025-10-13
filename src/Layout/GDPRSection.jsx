import { Send, CheckCircle } from "lucide-react";

export default function GDPRSection() {

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white mt-5">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    GDPR DATA PROCESSING ADDENDUM (DPA)
                </h3>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed text-justify">
                    <p>
                        This Data Processing Addendum (this "DPA") is incorporated into the Terms of Service located at https://visazone.in/terms-and-conditions (the "Agreement") between the undersigned customer ("Customer") and Shivasya Education & Immigration Services Pvt. Ltd., an Indian corporation (the "Company").
                    </p>
                    <p>
                        Capitalized but undefined terms used in this DPA will have the meanings assigned to those terms in the Agreement.
                    </p>
                </div>

                <h4 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
                    DEFINITIONS
                </h4>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        "Affiliate" means any entity that directly or indirectly controls, is controlled by, or is under common control with the subject entity. "Control," for purposes of this definition, means direct or indirect ownership or control of more than 50% of the voting interests of the subject entity.
                    </p>
                    <p>
                        "Controller" means the entity which determines the purposes and means of the Processing of Personal Data.
                    </p>
                    <p>
                        <span className="font-semibold">Customer Data:</span> Any data, information, or material originated by Customer that Customer submits, collects, or provides in the course of using the Services, including any Customer Personal Data.
                    </p>
                    <p>
                        <span className="font-semibold">Data Protection Laws:</span> All laws and regulations, including laws and regulations of the European Union, the European Economic Area and their member states, and the United Kingdom, applicable to the Processing of Customer Personal Data by the Company under the Agreement.
                    </p>

                    <p>
                        <span className="font-semibold">Data Subject:</span> As applicable, (a) 25 May 2018, if the parties agreed to this DPA prior to or on such date; or (b) the date on which the parties agreed to this DPA, if such date is after 25 May 2018.
                    </p>

                    <p>
                        <span className="font-semibold">DPA Effective Date:</span> Any data, information, or material originated by Customer that Customer submits, collects, or provides in the course of using the Services, including any Customer Personal Data.
                    </p>
                    <p>
                        <span className="font-semibold">GDPR:</span> The EU General Data Protection Regulation 2016/679.
                    </p>
                    <p>
                        <span className="font-semibold">Personal Data:</span> Any information which relates to an identified or identifiable natural person, and to which Data Protection Laws apply.
                    </p>
                    <p>
                        <span className="font-semibold">Personal Data Breach:</span> : A breach of the Company’s security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Customer Personal Data in the Company’s possession, custody, or control. "Personal Data Breaches" will not include unsuccessful attempts or activities that do not compromise the security of Customer Personal Data, including unsuccessful log-in attempts, pings, port scans, denial of service attacks, and other network attacks on firewalls or networked systems.
                    </p>
                </div>
            </div>
        </section>
    );
}