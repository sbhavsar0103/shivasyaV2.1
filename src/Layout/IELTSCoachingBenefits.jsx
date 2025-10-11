import React from "react";

export default function IELTSCoachingBenefits() {
  const benefits = [
    {
      id: 1,
      title: "Enhanced English Language Proficiency",
      text: "Candidates can enhance their English language skills by attending the Best IELTS Coaching Classes that play a significant role in getting successful migration and International Education. The IELTS test evaluates the proficiency level of candidates in Listening, Writing, Reading, and Speaking, and getting into the IELTS Academy in Ahmedabad for residential IELTS students can help them enhance their skills in each of these criteria.",
    },
    {
      id: 2,
      title: "To achieve the Required IELTS Scores",
      text: "Several countries and educational institutions mandate specific IELTS scores for candidate's immigration and academic purposes. By enrolling in IELTS Coaching classes, candidates can learn test-taking tactics, improve English language proficiency, and raise their chances of receiving the necessary scores.",
    },
    {
      id: 3,
      title: "Familiarity with IELTS Test Format",
      text: "For individuals who are willing to work in an English-speaking environment, proving English language proficiency is often a required foundation. To sync with that environment, getting IELTS Coaching is the most significant part of your journey. IELTS Candidates can gain in-depth familiarity with the test formats, understanding the types of IELTS questions to meet each IELTS test eligibility section in a well-qualified manner with required time constraints.",
    },
    {
      id: 4,
      title: "Academically Required",
      text: "To meet certain academic eligibility criteria of Global English proficiency, IELTS is the most recommended and recognized test by thousands of universities for their international students looking for admission to undergraduate, postgraduate, and other programs.",
    },
    {
      id: 5,
      title: "To gain better International Employment Opportunities",
      text: "Some employers in English-speaking countries often consider IELTS scores to evaluate the language skills of potential candidates. Similarly, individuals hunting for employment or permanent residency in countries like the United Kingdom, Australia, the United States, and Canada are often required to demonstrate proficiency in English as a part of their immigration applications.",
    },
  ];

  return (
    <main className="relative bg-[#C67B3E] pt-10 pb-10 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-5">
          <h2 className="text-3xl md:text-3xl font-bold text-[#3D1F14] mb-4 leading-tight">
            How is IELTS Coaching Necessary for Migration and International Education?
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            IELTS Courses are extremely beneficial for several reasons for international education and migration:
          </p>
        </header>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          {benefits.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white text-[#3D1F14] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-4 text-[#3D1F14]">
                {item.id}. {item.title}
              </h2>
              <p className="leading-relaxed text-justify text-[#3D1F14]">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* Two-Column Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.slice(3).map((item) => (
            <div
              key={item.id}
              className="text-[#3D1F14] bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-[#3D1F14] mb-4">
                {item.id}. {item.title}
              </h2>
              <p className="text-[#3D1F14] leading-relaxed text-justify">
                {item.text}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
