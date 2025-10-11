import { CheckCircle } from "lucide-react";

export default function UniversitiesInCanada() {
    const points = [
        "University of Toronto",
        "University of British Columbia (UBC)",
        "McGill University",
        "University of Alberta",
        "University of Waterloo",
        "McMaster University",
        "University of Montreal",
        "Western University",
        "Simon Fraser University (SFU)",
        "University of Ottawa",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Top Universities for Students to Study in Canada
                </h3>

                {/* Paragraphs */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Canada is the home of one of the most prestigious Universities for international students who want to study in Canada. Here you can explore some of the top universities in Canada:
                    </p>
                </div>

                {/* UL + Image Section */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* UL Left */}
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
