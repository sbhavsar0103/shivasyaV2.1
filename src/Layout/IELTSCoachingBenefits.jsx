import React from "react";

export default function IELTSCoachingBenefits() {
  const benefits = [
    {
      id: 1,
      title: "Enhanced English Language Proficiency",
      points: [
        "Listening",
        "Reading",
        "Writing",
        "Speaking",
      ],
      text: "IELTS coaching strengthens core language skills essential for international education and migration. Professional training helps candidates refine grammar, vocabulary, fluency, and comprehension — all crucial for global communication.",
    },
    {
      id: 2,
      title: "Achieving Required IELTS Scores",
      points: [
        "Student visas",
        "Work permits",
        "Permanent residency",
        "Professional registration",
      ],
      text: "Many countries and institutions require specific IELTS band scores. Coaching institutes train candidates with proven test-taking strategies, increasing the likelihood of achieving the desired band score.",
    },
    {
      id: 3,
      title: "Familiarity with IELTS Test Format",
      points: [
        "In-depth knowledge of question types",
        "Practice under real exam conditions",
        "Strategies for handling each module",
        "Confidence under time constraints",
      ],
      text: "Understanding exam structure is key to success. IELTS coaching provides structured preparation that builds confidence and improves performance in all four modules.",
    },
    {
      id: 4,
      title: "Academic Requirements",
      points: [],
      text: "Thousands of universities across the UK, Canada, Australia, New Zealand, and the USA require IELTS scores for admission into undergraduate and postgraduate programs. Coaching ensures candidates meet global English proficiency standards.",
    },
    {
      id: 5,
      title: "Better International Employment Opportunities",
      points: [
        "United Kingdom",
        "Australia",
        "United States",
        "Canada",
      ],
      text: "Many employers in English-speaking countries consider IELTS scores as proof of communication skills. These countries often require proof of English proficiency during immigration or employment processes.",
    },
  ];

  return (
    <main className="relative bg-[#C67B3E] pt-10 pb-10 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold text-[#3D1F14] mb-4 leading-tight">
            How is IELTS Coaching Necessary for Migration and International Education?
          </h2>
          <p className="text-lg text-[#3D1F14] max-w-4xl mx-auto">
            IELTS coaching plays a vital role in achieving international education and migration goals.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {benefits.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white text-[#3D1F14] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-4">
                {item.id}. {item.title}
              </h2>

              <p className="leading-relaxed text-justify mb-4">
                {item.text}
              </p>

              {item.points.length > 0 && (
                <ul className="list-disc ml-6 space-y-2">
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.slice(3).map((item) => (
            <div
              key={item.id}
              className="bg-white text-[#3D1F14] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-4">
                {item.id}. {item.title}
              </h2>

              <p className="leading-relaxed text-justify mb-4">
                {item.text}
              </p>

              {item.points.length > 0 && (
                <ul className="list-disc ml-6 space-y-2">
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}