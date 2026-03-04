import React from "react";

export default function IELTSModules() {
    return (
        <main className="mt-5 mx-20 px-2 sm:px-4">
            <section className="mt-8">

                <article className="mb-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Listening Module
                    </h3>
                    <p className="text-gray-700 text-base mb-2">
                        <span className="font-semibold">Duration: 40 Minutes</span>
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        The Listening module assesses your ability to understand spoken English in different accents and contexts.
                    </p>

                    <ul className="list-disc mx-10 space-y-2 text-gray-700">
                        <li>4 sections</li>
                        <li>40 questions</li>
                        <li>Recordings include conversations and monologues</li>
                        <li>Audio is played only once</li>
                    </ul>

                    <p className="font-semibold text-gray-900 mt-4 mb-2">Question Types:</p>
                    <ul className="list-disc mx-10 space-y-2 text-gray-700">
                        <li>Multiple choice</li>
                        <li>Diagram/Map labelling</li>
                        <li>Form completion</li>
                        <li>Short answers</li>
                    </ul>

                    <p className="text-gray-700 text-base mt-4">
                        Tip: Active concentration is crucial since recordings are not repeated.
                    </p>
                </article>

                <article className="mb-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Reading Module
                    </h3>
                    <p className="text-gray-700 text-base mb-2">
                        <span className="font-semibold">Duration: 60 Minutes</span>
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        This module evaluates reading comprehension and analytical skills. Candidates must answer 40 questions based on multiple passages.
                    </p>

                    <p className="font-semibold text-gray-900 mb-2">Question Types:</p>
                    <ul className="list-disc mx-10 space-y-2 text-gray-700 mb-4">
                        <li>Sentence completion</li>
                        <li>Multiple choice</li>
                        <li>Matching information</li>
                        <li>Data interpretation</li>
                        <li>Identifying writer’s views</li>
                    </ul>

                    <p className="text-gray-700 text-base mb-4">
                        The Reading section differs for Academic and General Training candidates.
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        IELTS Academic Reading
                    </h4>
                    <ul className="list-disc mx-10 space-y-2 text-gray-700 mb-4">
                        <li>3 long passages</li>
                        <li>Sources: journals, newspapers, research articles, books, magazines</li>
                        <li>Focus: analytical and academic content</li>
                        <li>Suitable for higher education and professional registration</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        IELTS General Training Reading
                    </h4>
                    <ul className="list-disc mx-10 space-y-2 text-gray-700">
                        <li>Short and long passages</li>
                        <li>Sources: advertisements, brochures, company guidelines, handbooks</li>
                        <li>Focus: everyday social and workplace contexts</li>
                        <li>Suitable for migration and work purposes</li>
                    </ul>
                </article>

                <article className="mb-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Writing Module
                    </h3>
                    <p className="text-gray-700 text-base mb-2">
                        <span className="font-semibold">Duration: 60 Minutes</span>
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        The Writing module assesses your ability to express ideas clearly and effectively in written English. It includes two tasks.
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        IELTS Academic Writing
                    </h4>
                    <p className="text-gray-700 text-base mb-2">
                        <span className="font-semibold">Task 1:</span> Describe visual information (graph, chart, table, process, or diagram) in a formal tone.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        <span className="font-semibold">Task 2:</span> Write a structured essay responding to an argument, problem, or opinion.
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        IELTS General Training Writing
                    </h4>
                    <p className="text-gray-700 text-base mb-2">
                        <span className="font-semibold">Task 1:</span> Write a letter (formal, informal, or semi-formal).
                    </p>
                    <p className="text-gray-700 text-base">
                        <span className="font-semibold">Task 2:</span> Write an essay similar to the Academic format but based on general topics.
                    </p>
                </article>

                <article className="mb-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Speaking Module
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        The Speaking test evaluates spoken English proficiency through a face-to-face interview with a certified examiner.
                    </p>

                    <p className="text-gray-700 text-base mb-2">
                        <span className="font-semibold">Part 1 – Introduction & Interview:</span> Questions about yourself, work, studies, hobbies, etc.
                    </p>
                    <p className="text-gray-700 text-base mb-2">
                        <span className="font-semibold">Part 2 – Long Turn:</span> You will receive a topic and speak for 1–2 minutes.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        <span className="font-semibold">Part 3 – Discussion:</span> In-depth discussion based on the topic from Part 2.
                    </p>

                    <p className="font-semibold text-gray-900 mb-2">This module assesses:</p>
                    <ul className="list-disc mx-10 space-y-2 text-gray-700">
                        <li>Fluency & coherence</li>
                        <li>Vocabulary usage</li>
                        <li>Grammar accuracy</li>
                        <li>Pronunciation</li>
                    </ul>
                </article>

            </section>
        </main>
    );
}