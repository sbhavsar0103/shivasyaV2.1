import React, { useEffect } from "react";

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
  { title: "Start Your IELTS Preparation", text: "", icon: Step1 },
  { title: "Profile Assessment & University Shortlisting", text: "", icon: Step2 },
  { title: "Prepare Your Supporting Documents", text: "", icon: Step3 },
  { title: "Submit Your Applications", text: "", icon: Step4 },
  { title: "Analyze Your Admission Offers", text: "", icon: Step5 },
  { title: "Interview Preparation", text: "", icon: Step6 },
  { title: "Visa & Financial Documentation", text: "", icon: Step7 },
  { title: "Pre-Departure Briefing", text: "", icon: Step8 },
];

export default function EightSteps() {

  // ✅ Scroll animation hook (for airplane or any animation)
  useEffect(() => {
    const container = document.getElementById("scrollbar2");

    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      // 👉 Example: you can connect this with airplane position
      // console.log(scrollTop);

      // Example:
      // document.getElementById("airplane").style.transform =
      //   `translateY(${scrollTop}px)`;
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#C67B3E] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left leading-snug">
            8 Steps for Getting <br /> Your Admit From an <br /> Top University
          </h2>

          {/* Image hidden on mobile */}
          <img
            src={StepsImage}
            alt="8 Steps"
            className="rounded-l mt-4 hidden lg:block"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-7/12">

          {/* ✅ MOBILE VIEW */}
          <div className="flex flex-col gap-4 lg:hidden">
            {stepData.map((step, index) => (
              <div
                key={index}
                className="text-white text-base font-semibold border-b border-[#3D1F14] pb-2"
              >
                {index + 1}. {step.title}
              </div>
            ))}
          </div>

          {/* ✅ DESKTOP VIEW WITH SCROLL + ID FIX */}
          <div
            id="scrollbar2"
            className="hidden lg:block overflow-auto max-h-[600px] pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          >
            <div className="space-y-6">
              {stepData.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start p-4 rounded-lg ${
                    index !== stepData.length - 1
                      ? "border-b border-[#3D1F14]"
                      : ""
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
      </div>
    </section>
  );
}