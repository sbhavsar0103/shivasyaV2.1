import { CheckCircle } from "lucide-react";

export default function BestUniversitiesEurope() {
    const points = [
        "Imperial College London",
        "King's College London",
        "University of Edinburgh",
        "London School of Economics and Political Science",
        "University of Manchester",
        "University of Copenhagen",
        "Sorbonne University",
        "University of Amsterdam",
        "University of Oslo",
        "KU Leuven",
        "University of Barcelona",
    ];

    return (
        <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* H2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Top Universities in Europe
                </h3>

                {/* Paragraph */}
                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Some of the most prestigious institutions in Europe include:
                    </p>
                </div>

                {/* University List */}
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
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
                </div>

            </div>
        </section>
    );
}