import React from "react";
import FreeCounselling from "../assets/IELTS/Free-Counseling.png";
import BookDemo from "../assets/IELTS/FREE-DEMO.png";
import ExperiencedFaculty from "../assets/IELTS/CERTIFIED-faculties.png";
import FlexibleBatch from "../assets/IELTS/Flexible-batch-timings.png";
import UnlimitedPractice from "../assets/IELTS/unlimited-working-hours.png";
import IndividualAttention from "../assets/IELTS/individual-attention.png";
import LatestStudyMetrial from "../assets/IELTS/latest-study-materials.png";
import ExhaustiveLib from "../assets/IELTS/excellent-infrastructure.png";
import FreeHeadPhone from "../assets/IELTS/free-headphones.png";
import WeekMockTest from "../assets/IELTS/mock-test.png";
import ModernFacility from "../assets/IELTS/excellent-infrastructure.png";
import SmartReading from "../assets/IELTS/reading.png";
import WritingTips from "../assets/IELTS/writing-tips.png";
import SpeakingTips from "../assets/IELTS/speaking.png";
import GrammarTips from "../assets/IELTS/grammar-session.png";
import HighBand from "../assets/IELTS/high-bands.png";

export default function Benefits() {
  const benefits = [
    { id: "01", title: "Free Counselling", image: FreeCounselling },
    { id: "02", title: "Book a Free Demo", image: BookDemo },
    { id: "03", title: "Well Experienced Certified Faculties", image: ExperiencedFaculty },
    { id: "04", title: "Flexible Batch Timings", image: FlexibleBatch },
    { id: "05", title: "Unlimited Practice Hours", image: UnlimitedPractice },
    { id: "06", title: "Individual Attention to Every Student", image: IndividualAttention },
    { id: "07", title: "Free Exclusive Study Materials", image: LatestStudyMetrial },
    { id: "08", title: "Exhaustive Library & Resources", image: ExhaustiveLib },
    { id: "09", title: "Free Headphones for Listening Practice", image: FreeHeadPhone },
    { id: "10", title: "Weekly Mock Tests & Progress Tracking", image: WeekMockTest },
    { id: "11", title: "Modern Learning Facilities", image: ModernFacility },
    { id: "12", title: "Smart Reading & Audio-Visual Learning", image: SmartReading },
    { id: "13", title: "Effective Writing Tips & Techniques", image: WritingTips },
    { id: "14", title: "Interactive Speaking Sessions", image: SpeakingTips },
    { id: "15", title: "Comprehensive Grammar Sessions", image: GrammarTips },
    { id: "16", title: "Proven Track Record of High Band Scores", image: HighBand },
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits of Choosing{" "}
            <span className="relative inline-block">
              Visa Zone
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 3 250 3 298 10"
                  stroke="#3D1F14"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>

          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the key reasons why Visa Zone’s IELTS coaching stands out —
            designed to empower your international education journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="relative group">
              {/* Number Badge (half inside/outside) */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-[#3D1F14] flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white font-bold text-lg">
                    {benefit.id}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-center font-semibold text-gray-900 text-base leading-snug min-h-[3rem] flex items-center justify-center text-balance">
                    {benefit.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
