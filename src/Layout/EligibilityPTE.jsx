import React from "react";

export default function EligibilityPTE() {
  return (
    <main className="mt-5 mx-20 px-2 sm:px-4">
      <h1 className="mt-8 text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        PTE Eligibility
      </h1>

      <div className="space-y-4 text-gray-700 text-base leading-relaxed">
        <ul className="list-disc mx-6 space-y-3">
          <li>
            <span className="font-semibold text-gray-900">Minimum Age:</span>{" "}
            Candidates must be at least 16 years old to take the PTE exam. 
            Applicants aged 16–18 are required to submit a parental consent form.
          </li>

          <li>
            <span className="font-semibold text-gray-900">No Upper Age Limit:</span>{" "}
            There is no maximum age restriction for appearing in the PTE exam.
          </li>

          <li>
            <span className="font-semibold text-gray-900">Educational Qualification:</span>{" "}
            PTE does not specify any minimum academic qualification. 
            However, universities or organizations may set their own academic requirements.
          </li>

          <li>
            <span className="font-semibold text-gray-900">Valid Identification:</span>{" "}
            Candidates must carry a valid passport or approved ID proof 
            on the exam day for verification purposes.
          </li>

          <li>
            <span className="font-semibold text-gray-900">Minimum Required Score:</span>{" "}
            Applicants must achieve the minimum PTE score required by their 
            target university, employer, or immigration authority.
          </li>
        </ul>

        <p className="text-justify">
          To meet eligibility expectations successfully, candidates should focus 
          on improving their English Reading, Writing, Speaking, and Listening skills 
          to secure opportunities for study, work, or migration abroad.
        </p>
      </div>
    </main>
  );
}