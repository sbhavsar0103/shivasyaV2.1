import React from "react";

// Import each icon individually
import Step1 from "../assets/8-steps/Begin-Your-IELTS-Prep.png";
import Step2 from "../assets/8-steps/Assess-Your-Profile-and-Shortlist-Universities.png";
import Step3 from "../assets/8-steps/Prepare-Your-Supporting-Documents.png";
import Step4 from "../assets/8-steps/Submit-Your-Applications.png";
import Step5 from "../assets/8-steps/Evaluate-Your-Admits.png";
import Step6 from "../assets/8-steps/Prep-For-All-Your-Interviews.png";
import Step7 from "../assets/8-steps/Finish-Your-Visa-and-Financial-Documentation.png";
import Step8 from "../assets/8-steps/Pre-Departure-Meet.png";

import StepsImage from "../assets/utility/EightStepNewImage.png";

const stepData = [
  {
    title: "Start Your IELTS Preparation",
    text: "Get personalized preparation designed by our in-house certified IELTS experts to help you score 7.5+ bands in your very first attempt.",
    icon: Step1,
  },
  {
    title: "Profile Assessment & University Shortlisting",
    text: "Our expert team shortlists top-ranked universities based on your academic background, career goals, location preferences, financial considerations, and program fit.",
    icon: Step2,
  },
  {
    title: "Prepare Your Supporting Documents",
    text: "We help you craft a compelling profile with high-quality essays, Statements of Purpose (SOPs), and Letters of Recommendation (LORs).",
    icon: Step3,
  },
  {
    title: "Submit Your Applications",
    text: "Our team submits all your applications on time and communicates with university admissions officers to ensure a smooth and fast-tracked process.",
    icon: Step4,
  },
  {
    title: "Analyze Your Admission Offers",
    text: "We guide you in selecting the right admission offer based on important factors aligned with your academic and career goals.",
    icon: Step5,
  },
  {
    title: "Interview Preparation",
    text: "We conduct multiple mock interviews and masterclasses to help you confidently ace university interviews.",
    icon: Step6,
  },
  {
    title: "Visa & Financial Documentation",
    text: "Our experts assist you in securing your student visa, arranging education loans, and completing all necessary financial documentation.",
    icon: Step7,
  },
  {
    title: "Pre-Departure Briefing",
    text: "We ensure a smooth transition to your new life abroad with complete guidance and support at every step of your journey.",
    icon: Step8,
  },
];

export default function EightSteps() {
  return (
    <section className="relative bg-[#C67B3E] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 flex flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left leading-snug">
            8 Steps for Getting <br /> Your Admit From an <br /> Top University
          </h2>
          <img src={StepsImage} alt="8 Steps" className="rounded-l mt-4" />
        </div>

        <div
          className="w-full lg:w-7/12 overflow-auto max-h-[600px] pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          id="scrollbar2"
        >
          <div className="space-y-6">
            {stepData.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start p-4 rounded-lg ${
                  index !== stepData.length - 1 ? "border-b border-[#3D1F14]" : ""
                }`}
              >
                <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center bg-white rounded-full mr-6">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <h5 className="text-white text-xl font-semibold mb-2">
                    {step.title}
                  </h5>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
