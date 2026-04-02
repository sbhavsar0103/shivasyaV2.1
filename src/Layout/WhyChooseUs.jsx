"use client";

import React from "react";
import { motion } from "framer-motion";
import OurExperience from "../assets/utility/our-experience.jpg";

const features = [
  {
    title: "Unparalleled Placement Expertise",
    content: [
      "With years of experience in overseas student placement, Shivasya Education has earned a strong reputation for delivering successful outcomes. We act as your trusted guide and supporter throughout your study-abroad journey.",
      "Our services include personalized counselling, course guidance, university selection, and preparation for IELTS, TOEFL, PTE, GRE, GMAT, and SAT. We also provide German and French language training to expand global opportunities.",
    ],
  },
  {
    title: "Simplified Student Visa Process and Support",
    content: [
      "Navigating student visa requirements can be complex and time-consuming, but Shivasya Education makes the process simple and stress-free.",
      "Our experienced team provides step-by-step guidance, ensuring accurate documentation and timely submission for complete peace of mind.",
    ],
  },
  {
    title: "Personalized Approach to Your Sure Success",
    content: [
      "We provide individualized attention and customized solutions for every student.",
      "From course selection to arrival abroad, our counsellors ensure every decision aligns with your academic and career goals.",
    ],
  },
  {
    title: "Making Your Dream of Studying Abroad a Reality",
    content: [
      "We understand the challenges of studying abroad and strive to make the journey smooth and hassle-free.",
      "As one of India’s fastest-growing educational consultancies, we provide expert guidance and complete support for your success.",
    ],
  },
  {
    title: "Ethical Standards and Reliable Practices",
    content: [
      "We maintain the highest ethical standards with full transparency in every step of your application process.",
      "Our goal is to minimize delays, provide honest advice, and support your long-term academic and professional success.",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 min-h-screen"
      style={{ backgroundImage: `url(${OurExperience})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#D8752C]/95 z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-[#333]">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#3A1F16] text-[#D8752C] px-5 py-2 text-sm font-semibold uppercase tracking-[5px] rounded">
            Our Experience
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mt-6 text-[#3A1F16]">
            Why Choose Us?
          </h2>
        </div>

        {/* Animated Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-6 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative mb-5 pl-6">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#3A1F16] rounded"></div>
                <h3 className="text-2xl font-semibold text-[#3A1F16]">
                  {feature.title}
                </h3>
              </div>

              <div className="text-[#444] space-y-4 leading-relaxed">
                {feature.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium text-[#3A1F16]">
            Ready to start your study abroad journey?
          </p>
          <p className="mt-2 text-[#444]">
            Contact <strong>Shivasya Education</strong> today and take the first step toward a successful global future.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#3A1F16] text-white rounded-lg hover:text-[#D8752C] transition-all duration-300 shadow-md">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;