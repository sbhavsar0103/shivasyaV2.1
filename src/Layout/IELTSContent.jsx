import React from "react";

export default function IELTSCoachingPage() {
  const introParagraphs = [
    `Begin your global journey with expert IELTS coaching in Ahmedabad.
     Planning to study, work, or migrate abroad but unsure how to choose
     the right IELTS coaching? We simplify your search and guide you toward
     the best IELTS coaching classes in Ahmedabad.`,

    `English language proficiency has become a key requirement for
     international education and immigration. The International English
     Language Testing System (IELTS) is one of the most trusted and globally
     recognized English language tests for non-native speakers.`,

    `IELTS evaluates candidates on four essential language skills:`,
  ];

  const skills = ["Listening", "Reading", "Writing", "Speaking"];

  const testTypes = [
    {
      title: "1. IELTS Academic Test",
      description:
        "The IELTS Academic test is designed for:",
      points: [
        "Students applying for higher education in English-speaking countries",
        "Professionals seeking registration in international organizations",
      ],
      content:
        "This test evaluates whether a candidate is ready to study or train in an environment where English is the primary language of communication. The Reading and Writing sections focus on academic-style content and analytical skills.",
    },
    {
      title: "2. IELTS General Training",
      description:
        "The IELTS General Training test is ideal for:",
      points: [
        "Individuals planning to migrate",
        "Candidates seeking work experience abroad",
        "Applicants pursuing non-academic training programs",
      ],
      content:
        "It focuses more on practical, everyday English used in social and workplace environments. While the Listening and Speaking sections remain the same for both formats, the Reading and Writing sections differ in structure and content.",
    },
  ];

  const coachingApproach = [
    {
      title: "Diagnostic Assessment",
      content:
        "Initial evaluation to understand your current proficiency level and identify improvement areas.",
    },
    {
      title: "Focused Practice in All Four Modules",
      content:
        "Targeted exercises and mock tests for Listening, Reading, Writing, and Speaking.",
    },
    {
      title: "Vocabulary & Grammar Enhancement",
      content:
        "Strengthening grammar, sentence structure, and vocabulary usage with real-time exposure to various accents.",
    },
    {
      title: "Reading Strategies",
      content:
        "Techniques for skimming, scanning, and identifying key ideas quickly and accurately.",
    },
    {
      title: "Writing Skill Development",
      content:
        "Guidance on brainstorming, structuring essays, and mastering Task 1 and Task 2 with detailed corrections.",
    },
    {
      title: "Speaking Practice Sessions",
      content:
        "Mock interviews and daily speaking practice to boost confidence and fluency.",
    },
    {
      title: "Regular Evaluations",
      content:
        "Frequent mock tests and quizzes to track progress and highlight improvement areas.",
    },
    {
      title: "Time Management Techniques",
      content:
        "Learn effective strategies to manage time efficiently during the exam.",
    },
    {
      title: "Personalized Feedback & Review",
      content:
        "Detailed performance analysis with constructive feedback to help you continuously improve.",
    },
  ];

  return (
    
    <main className="mt-5 mx-20 px-2 sm:px-4">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        IELTS Coaching Classes in Ahmedabad
      </h1>

      {/* Introduction */}
      <section className="space-y-4 text-gray-700 text-base leading-relaxed">
        {introParagraphs.map((para, index) => (
          <p key={index} className="text-justify">
            {para}
          </p>
        ))}

        <ul className="list-disc ml-8 space-y-1">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p className="text-justify">
          The test is jointly administered by the British Council, IDP
          Education, and Cambridge Assessment English. It is accepted by
          thousands of universities, employers, professional bodies, and
          immigration authorities worldwide.
        </p>
      </section>

      {/* IELTS Test Types */}
      <section className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          IELTS Test Types
        </h2>

        <p className="text-gray-700 text-base leading-relaxed text-justify mb-6">
          The IELTS exam is available in two formats, each designed for specific purposes:
        </p>

        {testTypes.map((test, index) => (
          <article key={index} className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {test.title}
            </h3>

            <p className="text-gray-700 text-base text-justify mb-2">
              {test.description}
            </p>

            <ul className="list-disc ml-8 space-y-1 mb-3 text-gray-700">
              {test.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="text-gray-700 text-base text-justify">
              {test.content}
            </p>
          </article>
        ))}
      </section>

      {/* Coaching Approach */}
      <section className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Our IELTS Coaching Approach
        </h2>

        <ul className="space-y-4">
          {coachingApproach.map((item, index) => (
            <li key={index}>
              <span className="font-semibold text-gray-900">
                {item.title}:{" "}
              </span>
              <span className="text-gray-700">
                {item.content}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}