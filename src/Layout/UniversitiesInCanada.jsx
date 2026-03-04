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
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Top Universities for Students to Study in Canada
                </h3>

                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Canada is home to some of the world’s most prestigious universities, attracting international students from across the globe. 
                        These institutions are globally recognized for academic excellence, advanced research opportunities, innovation, 
                        and strong career-oriented programs.
                    </p>
                    <p>
                        Below are some of the leading universities where students can pursue higher education in Canada:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12">
                    
                    <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-800 text-base sm:text-lg">
                                <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg lg:text-xxl leading-relaxed">
                    <p>
                        Universities such as <strong>University of Toronto</strong>, <strong>University of British Columbia</strong>, 
                        <strong> McGill University</strong>, and <strong>University of Waterloo</strong> are widely known for 
                        their research excellence and global rankings.
                    </p>
                    <p>
                        Studying at these institutions not only ensures high-quality education but also provides strong employability prospects, 
                        internship opportunities, multicultural exposure, and long-term career growth in Canada and internationally.
                    </p>
                </div>

            </div>
        </section>
    );
}