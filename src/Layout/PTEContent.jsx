import React from "react";

export default function PTEContent() {
  return (
    <main className="mt-5 mx-20 px-2 sm:px-4">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        PTE Coaching Classes in Ahmedabad
      </h1>

      {/* Introduction Paragraphs */}
      <div className="space-y-4 text-gray-700 text-base leading-relaxed">
        <p className="text-justify">
          Are you one of those who want to work or study overseas and are willing to achieve your desired score in the PTE (Pearson Test of English) Exam? Finding one of the Best PTE Coaching classes can equip you with the skills and strategies needed to ace every section of the PTE test. PTE is a commonly recognized test by universities, colleges, and governments for the assessment of non-native speakers’ proficiency in the English language. PTE Coaching Institute facilitates the advancement of Communication in the English Language. This is why this testing system is highly recommended to measure one’s English proficiency in international education and migration. PTE Coaching can also assist in how one can upgrade their English reading, writing, speaking, and listening skills.
        </p>

        <p className="text-justify">
          PTE is a beneficial decision for non-native English speakers to adapt to the formal application of the English language in day-to-day life. Candidates who regularly show up at the PTE Coaching Center, perform all work allotted to them, and comply with the trainer’s directions will surely gain the targeted score through their PTE Preparation.
        </p>
      </div>

      {/* IELTS Test Types Section */}
      <section className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Types of the PTE Test
        </h2>

        <p className="text-gray-700 text-base leading-relaxed text-justify mb-6">
          There are several types available to qualify for PTE Tests tailored to different purposes and proficiency levels.
        </p>

        {/* Typical Components */}
        <article>
          <ul className="space-y-3 mx-10">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900">
                  PTE Academic:
                </span>{" "}
                <span className="text-gray-700 text-base">
                  This is the most common and preferred test format and is significantly applicable for academic purposes. It is considerable for the admission and immigration process. It measures the English Language Proficiency of non-native speakers by testing candidate’s writing, reading, speaking, and listening abilities.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900">
                  PTE General Test:
                </span>{" "}
                <span className="text-gray-700 text-base">
                  It is designed to analyze the general English language proficiency. It is mostly considered for immigration purposes, visa applications, and employment. It is divided into two parts: A written paper and Verbal Test. It contains five levels of the test format Foundation A1, Level 1, Level 2, Level 3, Level 4, and Level 5.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900">
                  PTE UKVI:
                </span>{" "}
                <span className="text-gray-700 text-base">
                  An accredited test for obtaining UK visas and admissions is PTE UKVI, which the UK Home Office acknowledges. In the UK, around 98% of universities comply with the scores.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900">
                  PTE young learners:
                </span>{" "}
                <span className="text-gray-700 text-base">
                  This test format is specifically created for young students of the age group (6 to 13) to analyze their English language skills in a fun and interactive way. It has four categories: First Words, Springboard, Quick March, and Breakthrough.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-gray-900">
                  PTE Home:
                </span>{" "}
                <span className="text-gray-700 text-base">
                  It is a computer-based English test accepted by the UK Home Office as evidence of language competency for several family and employment visas as well as for citizenship and settlement. It is an online speaking and listening test offered in a pas-fail format. If the candidates pass this test, their English proficiency will be measured by the Common European Framework of Reference (CEFR) levels A1, A2, and B1.
                </span>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
