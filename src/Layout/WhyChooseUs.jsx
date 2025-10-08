import React from "react";
import OurExperience from "../assets/utility/our-experience.jpg";

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 min-h-screen"
      style={{ backgroundImage: `url(${OurExperience})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#D8752C]/95 z-10"></div>

      {/* Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-[#333]">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-[#3A1F16] text-[#D8752C] px-5 py-2 text-sm font-semibold uppercase tracking-[5px] rounded">
            Our Experience
          </span>
        </div>

        {/* Features */}
        <div className="grid gap-5 mb-12">
          {/* Title */}
          <div className="p-6 rounded-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-left text-[#3A1F16]">
              Why Choose Us?
            </h2>
          </div>

          {/* Feature 1 */}
          <div className="relative p-6 rounded-md transition-all duration-300 hover:bg-white/10">
            <div className="relative mb-5 pl-6">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#3A1F16] rounded"></div>
              <h3 className="text-2xl font-semibold text-[#3A1F16] leading-snug">
                Unparalleled Placement Expertise
              </h3>
            </div>
            <div className="text-[#444] space-y-1 leading-relaxed">
              <p>
                With years of experience in student placement for overseas
                education, Shiva Consultants has built a strong reputation for
                successful outcomes. We are well-known and respected, connecting
                with top universities and helping students achieve their dreams.
              </p>
              <p>
                Our wide network spans several countries, including Canada, USA,
                UK, and Australia, with expertise in counseling, career
                preparation, and training for IELTS, PTE, TOEFL, GRE, GMAT, and
                SAT, along with language courses like German and French.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative p-6 rounded-md transition-all duration-300 hover:bg-white/10">
            <div className="relative mb-5 pl-6">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#3A1F16] rounded"></div>
              <h3 className="text-2xl font-semibold text-[#3A1F16] leading-snug">
                Simplified Student Visa Processing and Support
              </h3>
            </div>
            <div className="text-[#444] leading-relaxed">
              <p>
                Navigating student visa requirements can be complex. Our expert
                team ensures a smooth and straightforward process, assisting you
                every step of the way and answering all your questions promptly.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative p-6 rounded-md transition-all duration-300 hover:bg-white/10">
            <div className="relative mb-5 pl-6">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#3A1F16] rounded"></div>
              <h3 className="text-2xl font-semibold text-[#3A1F16] leading-snug">
                Personalised Approach to Your Success
              </h3>
            </div>
            <div className="text-[#444] leading-relaxed">
              <p>
                At Shivasya, we provide personalized attention and tailored
                guidance from course selection to arrival abroad. Our counselors
                ensure you make the right choices for a strong academic and
                professional future.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative p-6 rounded-md transition-all duration-300 hover:bg-white/10">
            <div className="relative mb-5 pl-6">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#3A1F16] rounded"></div>
              <h3 className="text-2xl font-semibold text-[#3A1F16] leading-snug">
                Making Your Dream of Studying Abroad a Reality
              </h3>
            </div>
            <div className="text-[#444] space-y-4 leading-relaxed">
              <p>
                We understand the challenges of studying abroad and strive to
                make it hassle-free. With six branches across India, Shivasya is
                one of the fastest-growing and most trusted education consulting
                firms.
              </p>
              <p>
                Our qualified consultants are committed to providing guidance
                and support to help you succeed internationally.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="relative p-6 rounded-md transition-all duration-300 hover:bg-white/10">
            <div className="relative mb-5 pl-6">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#3A1F16] rounded"></div>
              <h3 className="text-2xl font-semibold text-[#3A1F16] leading-snug">
                Ethical Standards and Reliable Practices
              </h3>
            </div>
            <div className="text-[#444] leading-relaxed">
              <p>
                We are dedicated to ethical service, ensuring transparency and
                efficiency throughout your application. Shivasya minimizes
                delays and provides reliable, honest advice for your career
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
