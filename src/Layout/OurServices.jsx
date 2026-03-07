import CoachingImage from "../assets/utility/CoachingImage.jpeg";
import CareerCounselingImage from "../assets/utility/CareerCounseling.jpeg";
import UniversitySelectionImage from "../assets/utility/CountryAnduniversityselection.jpeg";
import ApplicationAssistanceImage from "../assets/utility/applicationassistance.jpeg";
import EducationLoanImage from "../assets/utility/education_loan_2.jpeg";
import AccommodationImage from "../assets/utility/Accomodation.jpeg";
import DependentVisaImage from "../assets/utility/Visitorvisa.jpeg";
import ScholarshipImage from "../assets/utility/scholarship-application-form-foundation-concept.jpg.jpeg";
import VisaGuidanceImage from "../assets/utility/Visa Guidance.jpg.jpeg";
import TravelInsuranceImage from "../assets/utility/flight and insurance.jpg.jpeg";
import SOPAssistanceImage from "../assets/utility/startup-hr-worker-identifying-right-candidates-job-opening-reviewing-resume.jpg.jpeg";


import { CheckCircle } from "lucide-react";

export default function OurServices() {
  const Coachingpoints = [
    "NODE partner of IDP, British Council, and Pearson",
    "Certified Faculty with over 10 years of experience",
    "Small batches: only 15–20 students for personalized attention",
    "Tailor-made materials, software, and library resources to achieve your target score",
    "Flexible batch timings with 1-year validity",
    "Mock tests every Saturday",
    "Specially designed mock tests to simulate the final exam",
    "Dedicated tutors for daily speaking practice",
  ];

  const careerCounseling = [
    "Understanding your career goals",
    "In-depth analysis of your profile",
    "Assessing your budget and resources",
    "Reviewing admission and visa possibilities",
    "Providing expert guidance with multiple options",
    "Guiding you to choose the best option for your future",
  ];

  const UniversitySelection = [
    "Researching the political, economic, and social stability of potential countries",
    "Assessing the availability and quality of education and research opportunities",
    "Investigating the cost of living and potential earning prospects",
    "Evaluating English proficiency requirements and academic standards",
    "Considering cultural and social compatibility with your values and lifestyle",
    "Reviewing the safety and security situation in the country",
  ];

  const ApplicationAssistance = [
    "Choosing the right universities and programs based on your profile and preferences",
    "Preparing a strong application package, including SOP, CV, and LOR",
    "Ensuring all application materials are complete and submitted on time",
    "Providing guidance to present yourself in the best possible light to increase acceptance chances",
    "Assisting with follow-up communications with universities, including interviews or additional information",
    "Offering support throughout the entire application process from start to finish",
  ];

  const SOPAssistance = [
    "Reviewing and editing Statement of Purpose (SOP) tailored to your program",
    "Assessing and enhancing your Curriculum Vitae (CV) for relevance and impact",
    "Assisting with Letters of Recommendation (LOR) selection, review, and editing",
    "Ensuring all materials meet university guidelines and expectations",
    "Highlighting your key skills, achievements, and experiences",
    "Improving coherence, structure, and narrative flow of all documents",
  ];

  const ScholarshipSupport = [
    "Evaluating your eligibility for scholarships",
    "Identifying scholarships aligned with your interests and goals",
    "Assisting with completing and submitting scholarship applications",
    "Reviewing essays, personal statements, and documents",
    "Guiding you on documentation, deadlines, and follow-ups",
    "Preparing for scholarship interviews, if required",
  ];

  const EducationLoanSupport = [
    "Explaining types of education loans available",
    "Evaluating financial needs and creditworthiness",
    "Identifying suitable loans for your goals",
    "Assisting in completing and submitting loan applications",
    "Reviewing financial documents for accuracy",
    "Preparing for loan interviews or counseling sessions",
    "Guiding on loan disbursement, repayment plans, and next steps",
  ];

  const VisaGuidance = [
    "Step-by-step guidance on visa requirements and procedures",
    "Assistance in preparing and organizing all documents",
    "Specialized SOP and financial document advice",
    "Mock interview preparation and guidance",
    "Continuous communication with universities and embassies",
    "Tracking application status and timelines",
    "Support for additional services like fee payments and courier",
  ];

  const AccommodationSupport = [
    "Assistance in finding suitable university housing, private apartments, or homestays",
    "Guidance on living expenses and housing costs",
    "Arranging viewings and appointments",
    "Support with rental agreements and lease contracts",
    "Help with local resources, utilities, and internet setup",
    "Move-in logistics including furniture and household items",
    "Ongoing support for smooth adjustment",
    "Community connections with other students",
  ];

  const TravelInsuranceSupport = [
    "Access to competitive flight ticket rates and insurance",
    "Travel advisory and journey preparation",
    "Support for flight delays, cancellations, or rescheduling",
    "Assistance with evacuation or repatriation in emergencies",
    "Airport pickup and transport to campus",
    "Overseas student insurance covering medical emergencies, travel, lost baggage, and more",
  ];

  const DependentVisaSupport = [
    "Step-by-step guidance for dependent and visitor visas",
    "Assistance with document preparation and submission",
    "Ensuring compliance with visa rules and regulations",
    "Facilitating communication with embassies and authorities",
    "Full support from application to approval",
    "Guidance on rights and responsibilities of family members abroad",
  ];

  const renderSection = (title, description1, description2, points, sectionImage, imageLeft = true) => (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 mt-12 mb-12">
      <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6">
        <span className="relative inline-block">
          {title}
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

      <div className="text-justify space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed">
        <p className="font-semibold">{description1}</p>
        {description2 && <p>{description2}</p>}
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-12">
        {imageLeft && (
          <div className="flex-1 flex justify-center lg:justify-start">
            <img
              src={sectionImage}
              alt={title}
              className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
        )}

        <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 self-center">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-gray-800 text-base sm:text-lg"
            >
              <CheckCircle className="w-5 h-5 text-[#3D1F14] flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {!imageLeft && (
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={sectionImage}
              alt={title}
              className="w-full max-w-md lg:max-w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="w-full pb-16 px-4 sm:px-6 lg:px-16 bg-white">
      {renderSection(
        "COACHING",
        "Why Shivasya is the best place for coaching?",
        "The most important step for anyone hoping to study abroad is appearing for the IELTS or PTE.",
        Coachingpoints,
        CoachingImage
      )}

      <hr />

      {renderSection(
        "CAREER COUNSELING",
        "Everything is available on Google, but your future deserves expert guidance.",
        "Studying abroad is not just an indicator of prestige and quality — it’s an investment that broadens your horizons and develops essential skills.",
        careerCounseling,
        CareerCounselingImage,
        false
      )}

      <hr />

      {renderSection(
        "COUNTRY & UNIVERSITY SELECTION",
        "After understanding your career goals and analyzing your profile, our counselors provide expert advice.",
        "Choosing the right university and country is about aligning your career aspirations, lifestyle, and long-term growth.",
        UniversitySelection,
        UniversitySelectionImage
      )}

      <hr />

      {renderSection(
        "APPLICATION ASSISTANCE",
        "We provide expert support to make your application process seamless, accurate, and strategic.",
        null,
        ApplicationAssistance,
        ApplicationAssistanceImage,
        false
      )}

      <hr />

      {renderSection(
        "SOP, LOR & CV ASSISTANCE",
        "Professional SOP, CV, and LOR assistance to help you stand out in competitive applications.",
        null,
        SOPAssistance,
        SOPAssistanceImage
      )}

      <hr />

      {renderSection(
        "SCHOLARSHIP",
        "Guidance on securing scholarships from international universities to make your study abroad journey more affordable.",
        null,
        ScholarshipSupport,
        ScholarshipImage,
        false
      )}

      <hr />

      {renderSection(
        "EDUCATION LOAN",
        "Expert assistance in obtaining education loans, helping you focus on enrolling in your dream university.",
        null,
        EducationLoanSupport,
        EducationLoanImage
      )}

      <hr />

      {renderSection(
        "VISA GUIDANCE",
        "Comprehensive visa guidance to navigate complex requirements and increase your chances of approval.",
        null,
        VisaGuidance,
        VisaGuidanceImage,
        false
      )}

      <hr />

      {renderSection(
        "ACCOMMODATION",
        "Find your ideal student home with our expert assistance, ensuring a smooth transition abroad.",
        null,
        AccommodationSupport,
        AccommodationImage
      )}

      <hr />

      {renderSection(
        "AIR TICKET & INSURANCE",
        "Helping you get the best deals on flight tickets and overseas student insurance for savings, safety, and peace of mind.",
        null,
        TravelInsuranceSupport,
        TravelInsuranceImage,
        false
      )}

      <hr />

      {renderSection(
        "DEPENDENT & VISITOR VISA",
        "Assistance for your spouse, children, and parents to join or visit you abroad.",
        null,
        DependentVisaSupport,
        DependentVisaImage
      )}
    </section>
  );
}