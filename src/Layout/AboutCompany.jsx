import { Globe, BookOpen } from "lucide-react";
import OurMission from "../assets/aboutus/Ourmission.jpeg";
import OurVision from "../assets/aboutus/Ourvision.jpeg";

const visionMissionCards = [
  {
    title: "Our Vision",
    description:
      "Our vision is to empower students with meaningful global education opportunities that expand their horizons, foster personal growth, and shape them into confident global citizens.",
    icon: Globe,
    image: OurVision,
    bgColor: "#C67B3E",
    textColor: "#C67B3E",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to provide personalized, high-quality study-abroad guidance that promotes academic excellence and cross-cultural understanding, partnering with leading universities worldwide to help students achieve their goals.",
    icon: BookOpen,
    image: OurMission,
    bgColor: "#3D1F14",
    textColor: "#C67B3E",
  },
];

export default function AboutCompany() {
  return (
    <div className="bg-[#3D1F14] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 text-[#C67B3E]">
          Our AIM
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visionMissionCards.map((card, index) => (
            <div key={index}>
              
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />

              {/* Title */}
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: card.textColor }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="leading-relaxed"
                style={{ color: card.textColor }}
              >
                {card.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}