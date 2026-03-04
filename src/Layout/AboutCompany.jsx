import { Globe, BookOpen, ChevronRight } from 'lucide-react';

const visionMissionCards = [
  {
    title: "Our Vision",
    description:
      "Our vision is to empower students with meaningful global education opportunities that expand their horizons, foster personal growth, and shape them into confident global citizens.",
    icon: Globe,
    bgColor: "#C67B3E",
    textColor: "#3D1F14",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to provide personalized, high-quality study-abroad guidance that promotes academic excellence and cross-cultural understanding, partnering with leading universities worldwide to help students achieve their goals.",
    icon: BookOpen,
    bgColor: "#3D1F14",
    textColor: "#C67B3E",
  },
];

const aboutContent = {
  badge: "ABOUT COMPANY",
  heading: "Our Story Who We Are",
  intro:
    "Shivasya Education is a trusted study-abroad consultancy committed to guiding students toward global education opportunities with confidence and clarity.",
  description:
    "With a student-first approach, we provide comprehensive support throughout the study-abroad journey — from university selection and application assistance to test preparation and visa guidance. Our mission is to simplify the overseas education process while ensuring quality, transparency, and personalized mentorship at every stage.",
  buttonText: "READ MORE",
};

const features = [
  {
    title: "Strategic Guidance",
    description:
      "We design personalized admission strategies that align with each student’s academic profile, career aspirations, and financial considerations to maximize success.",
  },
  {
    title: "Comprehensive Preparation",
    description:
      "From IELTS preparation to application documentation and visa processes, we offer complete end-to-end support to ensure a seamless study-abroad experience.",
  },
];

export default function AboutCompany() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Column - Cards */}
        <div className="grid grid-cols-1 gap-8">
          {visionMissionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="relative rounded-3xl p-8 flex flex-col justify-start h-full" style={{ backgroundColor: card.bgColor, color: card.textColor }}>
                <div className="w-12 h-12 mb-4">
                  <Icon className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#C67B3E', color: '#3D1F14' }}>
            {aboutContent.badge}
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#3D1F14' }}>
            {aboutContent.heading}
          </h2>

          <p className="font-semibold mb-4 leading-relaxed" style={{ color: '#3D1F14' }}>
            {aboutContent.intro}
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#3D1F14' }}>
            {aboutContent.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#3D1F14' }}>
                  <ChevronRight className="w-5 h-5" style={{ color: '#C67B3E' }}/>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#3D1F14' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <button className="px-8 py-3 rounded-lg font-semibold transition-colors w-max" style={{ backgroundColor: '#3D1F14', color: '#C67B3E' }}>
            {aboutContent.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}