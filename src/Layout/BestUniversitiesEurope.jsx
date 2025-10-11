import { CheckCircle } from "lucide-react";

export default function BestUniversitiesEurope() {
    const points = [
        "University of Oxford (United Kingdom)",
        "University of Cambridge (United Kingdom)",
        "Imperial College London (United Kingdom)",
        "ETH Zurich - Swiss Federal Institute of Technology(Switzerland)",
        "King’s College London",
        "University of Edinburgh(United Kingdom)",
        "London School of Economics and Political Science(United Kingdom)",
        "University of Bristol",
        "The University of Manchester(United Kingdom)",
        "University of Copenhagen(Denmark)",
        "University of Paris(France)",
        "Sorbonne University(France)",
        "University of Amsterdam(Netherlands)",
        "University of Oslo(Norway)",
        "KU Leuven(Belgium)",
        "University of Barcelona(Spain)",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Which Universities is best in Europe?
                </h3>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Europe is the best choice for students who want to pursue tier studies from the best universities. Overall, 688 universities are considered to be the best in Europe. The high caliber of teaching, cutting-edge facilities, advanced infrastructure, and numerous sustainable factors contribute to the top ranking of EU universities. Some are as follows:
                    </p>
                </div>

                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* UL Left */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
