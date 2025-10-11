import { CheckCircle2 } from "lucide-react";
import BritishCouncilLogo from "../assets/achievements/british-council.png";
import Ieaa from "../assets/achievements/ieaa.png";
import Isana from "../assets/achievements/isana.png";
import Toefl from "../assets/achievements/toefl.png";
import Icef from "../assets/achievements/icef.png";
import Pearson from "../assets/achievements/pearson.png";
import Idp from "../assets/achievements/idp.png";
import Nafsa from "../assets/achievements/nafsa.png";

export default function Achievements() {
  const logos = [
    { id: 1, name: "British Council", image: BritishCouncilLogo },
    { id: 2, name: "IEAA", image: Ieaa },
    { id: 3, name: "ISANA", image: Isana },
    { id: 4, name: "TOEFL", image: Toefl },
    { id: 5, name: "ICEF", image: Icef },
    { id: 6, name: "Pearson", image: Pearson },
    { id: 7, name: "IDP", image: Idp },
    { id: 8, name: "NAFSA", image: Nafsa },
  ];

  const certifications = [
    "IDP Certified Node Agent",
    "Pearson PTE Certified Node Agent",
    "Additional Credentials: ICEF, IEAA, ISANA, NAFSA, TOEFL",
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D1F14] mb-4">
            Achievements & Accreditations
          </h2>
          <p className="text-[#3D1F14] text-lg max-w-2xl mx-auto">
            Our certifications and partnerships represent our commitment to
            excellence in global education.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#C67B3E]"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Certifications List */}
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#C67B3E]"
              >
                <CheckCircle2
                  className="w-6 h-6 text-[#C67B3E] flex-shrink-0 mt-1"
                />
                <p className="text-[#3D1F14] text-lg font-medium leading-relaxed">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}