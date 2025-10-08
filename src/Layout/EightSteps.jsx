// import React from "react";

// // Import each icon individually
// import Step1 from "../assets/8-steps/Begin-Your-IELTS-Prep.png";
// import Step2 from "../assets/8-steps/Assess-Your-Profile-and-Shortlist-Universities.png";
// import Step3 from "../assets/8-steps/Prepare-Your-Supporting-Documents.png";
// import Step4 from "../assets/8-steps/Submit-Your-Applications.png";
// import Step5 from "../assets/8-steps/Evaluate-Your-Admits.png";
// import Step6 from "../assets/8-steps/Prep-For-All-Your-Interviews.png";
// import Step7 from "../assets/8-steps/Finish-Your-Visa-and-Financial-Documentation.png";
// import Step8 from "../assets/8-steps/Pre-Departure-Meet.png";

// import StepsImage from "../assets/utility/8step-image.png";

// const stepData = [
//   {
//     title: "Begin Your IELTS Prep",
//     text: "Personalized prep designed by in-house Certified IELTS experts to ensure you score 7.5+ bands on the first attempt itself.",
//     icon: Step1,
//   },
//   {
//     title: "Assess Your Profile and Shortlist Universities",
//     text: "Our team shortlists top-rank universities based on your profile, academic goals, location preferences, financial constraints, and program fit.",
//     icon: Step2,
//   },
//   {
//     title: "Prepare Your Supporting Documents",
//     text: "We help you craft a compelling profile supported by high-quality essays, SoPs, and LoRs",
//     icon: Step3,
//   },
//   {
//     title: "Submit Your Applications",
//     text: "Our team submits all your applications and documents in time and communicates with the admissions officer to fast-track your admission order.",
//     icon: Step4,
//   },
//   {
//     title: "Evaluate Your Admits",
//     text: "We help you choose the right admission offer based on parameters that are relevant to you and your goals.",
//     icon: Step5,
//   },
//   {
//     title: "Prep For All Your Interviews",
//     text: "We take you through mock interviews and masterclasses to help you ace all university interviews.",
//     icon: Step6,
//   },
//   {
//     title: "Finish Your Visa and Financial Documentation",
//     text: "We have a list of vendor-partners who personally work with you to get your visa, secure student loans and complete all other formalities.",
//     icon: Step7,
//   },
//   {
//     title: "Pre-Departure Meet",
//     text: "Our team ensures you transition easily to your new life abroad. We are with you at every step, making the journey as seamless as possible.",
//     icon: Step8,
//   },
// ];

// export default function EightSteps() {
//   return (
//     <section className="relative bg-[#C67B3E] py-12 md:py-20">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 flex flex-wrap lg:flex-nowrap gap-10">
//         <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start">
//           <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left leading-snug">
//             8 Steps to Getting <br /> Your Admit From a <br /> Top College
//           </h2>
//           <img src={StepsImage} alt="8 Steps" className="rounded-l mt-4" />
//         </div>

//         <div className="w-full lg:w-7/12 overflow-auto max-h-[600px] pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100" id="scrollbar2">
//           <div className="space-y-6">
//             {stepData.map((step, index) => (
//               <div key={index} className="relative flex items-start p-4 rounded-lg">
//                 <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center bg-white rounded-full mr-6">
//                   <img src={step.icon} alt={step.title} className="w-16 h-16 object-contain" />
//                 </div>
//                 <div>
//                   <h5 className="text-white text-xl font-semibold mb-2">{step.title}</h5>
//                   <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{step.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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

import StepsImage from "../assets/utility/8step-image.png";

const stepData = [
  {
    title: "Begin Your IELTS Prep",
    text: "Personalized prep designed by in-house Certified IELTS experts to ensure you score 7.5+ bands on the first attempt itself.",
    icon: Step1,
  },
  {
    title: "Assess Your Profile and Shortlist Universities",
    text: "Our team shortlists top-rank universities based on your profile, academic goals, location preferences, financial constraints, and program fit.",
    icon: Step2,
  },
  {
    title: "Prepare Your Supporting Documents",
    text: "We help you craft a compelling profile supported by high-quality essays, SoPs, and LoRs",
    icon: Step3,
  },
  {
    title: "Submit Your Applications",
    text: "Our team submits all your applications and documents in time and communicates with the admissions officer to fast-track your admission order.",
    icon: Step4,
  },
  {
    title: "Evaluate Your Admits",
    text: "We help you choose the right admission offer based on parameters that are relevant to you and your goals.",
    icon: Step5,
  },
  {
    title: "Prep For All Your Interviews",
    text: "We take you through mock interviews and masterclasses to help you ace all university interviews.",
    icon: Step6,
  },
  {
    title: "Finish Your Visa and Financial Documentation",
    text: "We have a list of vendor-partners who personally work with you to get your visa, secure student loans and complete all other formalities.",
    icon: Step7,
  },
  {
    title: "Pre-Departure Meet",
    text: "Our team ensures you transition easily to your new life abroad. We are with you at every step, making the journey as seamless as possible.",
    icon: Step8,
  },
];

export default function EightSteps() {
  return (
    <section className="relative bg-[#C67B3E] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 flex flex-wrap lg:flex-nowrap gap-10">
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left leading-snug">
            8 Steps to Getting <br /> Your Admit From a <br /> Top College
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
