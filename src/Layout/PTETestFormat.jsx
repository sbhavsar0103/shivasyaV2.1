import React from "react";

export default function PTETestFormat() {
  return (
    <main className="mt-5 mx-20 px-2 sm:px-4">
      <section className="mt-8">

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          PTE Test Format
        </h1>

        <p className="text-gray-700 text-base leading-relaxed text-justify mb-8">
          The PTE (Pearson Test of English) is a computer-based English proficiency
          exam of approximately 3 hours. It assesses your Reading, Writing,
          Listening, and Speaking skills. The format is standardized worldwide
          and divided into three main sections.
        </p>

        {/* Speaking & Writing */}
        <article className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Speaking & Writing
          </h2>

          <ul className="list-disc mx-6 space-y-2 text-gray-700">
            <li><span className="font-semibold text-gray-900">Duration:</span> 54–67 minutes</li>
            <li><span className="font-semibold text-gray-900">Tasks:</span> 7 Types</li>
            <li>
              Introduction, Read Aloud, Repeat Sentence, Describe Image,
              Retell Lecture, Essay Writing, Summarize Written Text
            </li>
            <li>
              <span className="font-semibold text-gray-900">Focus:</span> Fluency,
              pronunciation, grammar, vocabulary, and coherent expression
            </li>
          </ul>

          <div className="mt-4 text-gray-700 space-y-2">
            <p className="font-semibold text-gray-900">Tips:</p>
            <ul className="list-disc mx-6 space-y-1">
              <li>Practice speaking daily and listen to English podcasts or lectures.</li>
              <li>Work on essay structures and seek expert feedback.</li>
              <li>Improve vocabulary and grammatical accuracy consistently.</li>
            </ul>
          </div>
        </article>

        {/* Reading */}
        <article className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. Reading
          </h2>

          <ul className="list-disc mx-6 space-y-2 text-gray-700">
            <li><span className="font-semibold text-gray-900">Duration:</span> 29–30 minutes</li>
            <li><span className="font-semibold text-gray-900">Tasks:</span> 5 Types</li>
            <li>
              Fill in the Blanks, Multiple Choice (Single/Multiple Answer),
              Re-order Paragraphs, Reading & Writing
            </li>
            <li>
              <span className="font-semibold text-gray-900">Focus:</span> Comprehension,
              identifying main ideas, analyzing themes, and attention to detail
            </li>
          </ul>

          <div className="mt-4 text-gray-700 space-y-2">
            <p className="font-semibold text-gray-900">Tips:</p>
            <ul className="list-disc mx-6 space-y-1">
              <li>Read academic articles, newspapers, and books regularly.</li>
              <li>Practice timed reading exercises to improve speed.</li>
              <li>Develop skimming and scanning techniques.</li>
            </ul>
          </div>
        </article>

        {/* Listening */}
        <article className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Listening
          </h2>

          <ul className="list-disc mx-6 space-y-2 text-gray-700">
            <li><span className="font-semibold text-gray-900">Duration:</span> 30–43 minutes</li>
            <li><span className="font-semibold text-gray-900">Tasks:</span> 8 Types</li>
            <li>
              Summarize Spoken Text, Multiple Choice, Fill in the Blanks,
              Highlight Correct/Incorrect Words, Select Missing Words,
              Write from Dictation
            </li>
            <li>
              <span className="font-semibold text-gray-900">Focus:</span> Understanding
              spoken English, tone, attitude, and key details
            </li>
          </ul>

          <div className="mt-4 text-gray-700 space-y-2">
            <p className="font-semibold text-gray-900">Tips:</p>
            <ul className="list-disc mx-6 space-y-1">
              <li>Listen to different English accents through lectures and interviews.</li>
              <li>Practice note-taking while listening.</li>
              <li>Pay attention to stress, intonation, and rhythm.</li>
            </ul>
          </div>
        </article>

        {/* Key Strategy */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Strategy
          </h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Mastering the PTE requires consistent practice, familiarity with task
            types, effective time management, and expert guidance. Confidence,
            structured preparation, and regular performance analysis are essential
            to achieving your desired band score.
          </p>
        </section>

      </section>
    </main>
  );
}