import React from "react";

const reviews = [
  {
    name: "Kushal Joshi",
    initial: "K",
    rating: 5,
    text: "It was a great experience studying at Shivasya. The faculty here is amazing. I was thoroughly mentored by my faculty, Mr. Kartik Soni, not only for IELTS; he helped me in many aspects.",
  },
  {
    name: "Jay Garala",
    initial: "J",
    rating: 5,
    text: "It was a great experience of learning from the finest faculties of the subject. Their efforts need a big applause. The bands I have scored would not have been possible without them.",
  },
  {
    name: "Krishna Patel",
    initial: "K",
    rating: 5,
    text: "I am deeply grateful to faculties for guiding me to score overall 7.5 bands in IELTS exam. They are amazing and friendly too. The duration of a month I spent here for coaching at Shivasya would always be close to my heart.",
  },
  {
    name: "Manvendra Vaghela",
    initial: "M",
    rating: 5,
    text: "I hereby share my great experience at Shivasya. I feel obliged to have an immense support and teaching by Kartik Sir. And also thank my classmates and other faculty at Shivasya for their guidance.",
  },
  {
    name: "Luv Kareliya",
    initial: "L",
    rating: 5,
    text: "Shivasya Smart Academy made it possible to achieve my 'dream score' of 8.5 Bands. The preparation material and the support from the faculties were unmatched, especially Neelam Ma’am helped me improve my writing skills.",
  },
  {
    name: "Anushka Dufare",
    initial: "A",
    rating: 5,
    text: "Friendly and helpful services. The staff is very accommodating and professional in their approach.",
  },
  {
    name: "Priya Patel",
    initial: "P",
    rating: 5,
    text: "Outstanding results!",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A1F16] uppercase tracking-wide">
            WE'RE THRILLED TO BE PART OF OUR STUDENT'S SUCCESSES
          </h2>
          <p className="text-[#3A1F16] font-medium mt-2">(DON'T TAKE OUR WORD FOR IT!)</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10">
          {/* Google Rating Sticky Card */}
          <div className="sticky top-20">
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-200 text-center">
              <div className="text-5xl font-bold text-[#2c3e50] mb-4">4.9</div>
              <div className="flex justify-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
              </div>
              <h3 className="text-lg font-semibold text-[#2c3e50] mb-1">Overall Rating</h3>
              <p className="text-gray-600 font-medium">SHIVASYA</p>
            </div>
          </div>

          {/* Vertical Scrollable Masonry */}
          <div className="max-h-[80vh] overflow-y-auto pr-4">
            <div className="flex gap-6">
              {/* Split reviews into 3 columns */}
              {[0, 1, 2].map((colIndex) => (
                <div key={colIndex} className="flex flex-col gap-6 flex-1">
                  {reviews
                    .filter((_, idx) => idx % 3 === colIndex)
                    .map((review, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-transform transition-shadow"
                      >
                        {/* Reviewer Info */}
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-[#D8752C] flex items-center justify-center text-white font-bold mr-3">
                            {review.initial}
                          </div>
                          <h4 className="font-semibold text-[#3A1F16]">{review.name}</h4>
                        </div>
                        {/* Stars */}
                        <div className="flex mb-3">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <span key={i} className="text-yellow-400 text-xl">
                                ★
                              </span>
                            ))}
                        </div>
                        {/* Review Text */}
                        <p className="text-gray-700 text-sm">{review.text}</p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
