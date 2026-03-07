import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";

import image_1 from "../assets/contact/image_1.jpeg";
import image_2 from "../assets/contact/image_2.jpeg";
import image_3 from "../assets/contact/image_3.jpeg";

const slideshowImages = [image_1, image_2, image_3];

const countries = [
  { code: "USA", name: "USA", flag: "🇺🇸" },
  { code: "Canada", name: "Canada", flag: "🇨🇦" },
  { code: "Australia", name: "Australia", flag: "🇦🇺" },
  { code: "New Zealand", name: "New Zealand", flag: "🇳🇿" },
  { code: "UK", name: "UK", flag: "🇬🇧" },
  { code: "Ireland", name: "Ireland", flag: "🇮🇪" },
  { code: "France", name: "France", flag: "🇫🇷" },
  { code: "Sweden", name: "Sweden", flag: "🇸🇪" },
  { code: "Finland", name: "Finland", flag: "🇫🇮" },
  { code: "Netherlands", name: "Netherlands", flag: "🇳🇱" },
  { code: "Denmark", name: "Denmark", flag: "🇩🇰" },
  { code: "Switzerland", name: "Switzerland", flag: "🇨🇭" },
  { code: "Poland", name: "Poland", flag: "🇵🇱" },
  { code: "Portugal", name: "Portugal", flag: "🇵🇹" },
  { code: "Spain", name: "Spain", flag: "🇪🇸" },
  { code: "Czech Republic", name: "Czech Republic", flag: "🇨🇿" },
  { code: "Malta", name: "Malta", flag: "🇲🇹" },
  { code: "Europe", name: "Europe", flag: "🇪🇺" },
  { code: "Italy", name: "Italy", flag: "🇮🇹" },
  { code: "Germany", name: "Germany", flag: "🇩🇪" },
  { code: "Norway", name: "Norway", flag: "🇳🇴" },
  { code: "Austria", name: "Austria", flag: "🇦🇹" },
];

const faqData = [
  {
    title: "Management",
    items: ["MBA/ MIM", "Luxury Brand Management", "Sports Management"],
  },
  {
    title: "Business",
    items: [
      "International Business",
      "Entrepreneurship",
      "Sales, Marketing and Finance",
    ],
  },
  {
    title: "Computer Science & IT",
    items: ["Artificial Intelligence", "Robotics", "Data Science & Business Analyst"],
  },
  {
    title: "Engineering",
    items: ["Computer Engineering", "Mechanical Engineering", "Civil Engineering"],
  },
  {
    title: "Health Science",
    items: ["Public Health", "Healthcare Administration", "Health Informatics"],
  },
  {
    title: "Law & Legal Studies",
    items: ["Legal Studies", "International Law", "Business and Commercial"],
  },
  {
    title: "Biological & Life Sciences",
    items: ["Biotechnology", "Biological Sciences", "Biomedical Engineering"],
  },
];

export default function ContactFormPopupSmall() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    coachingType: "",
    country: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // slideshow auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.coachingType || !formData.country) {
      alert("Please select a coaching type and country");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        coachingType: "",
        country: "",
        course: "",
        message: "",
      });

      alert("Form Submitted Successfully!");
    }, 1200);
  };

  return (
    // <div className="flex flex-col lg:flex-row w-full h-full">
    <div className="flex flex-col lg:flex-row w-full h-full min-h-[560px]">

      {/* FORM SECTION */}
      <div className="w-full lg:w-1/2 p-6 overflow-y-auto">

        <h3 className="text-lg font-semibold mb-2">
          Contact Us
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">

          {/* Name + Phone */}
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-3 py-2 border rounded-md outline-none"
            />

            <input
              type="tel"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="px-3 py-2 border rounded-md outline-none"
            />
          </div>

          {/* Email + Course */}
          <div className="grid grid-cols-2 gap-2">
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-3 py-2 border rounded-md outline-none"
            />

            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              required
              className="px-3 py-2 border rounded-md outline-none"
            >
              <option value="">Course</option>

              {faqData.map((cat) => (
                <optgroup key={cat.title} label={cat.title}>
                  {cat.items.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </optgroup>
              ))}

            </select>
          </div>

          {/* Coaching */}
          <div>
            <p className="text-xs mb-1">Coaching</p>

            <div className="flex gap-2">
              {["IELTS", "PTE"].map((type) => (
                <label key={type} className="text-xs flex items-center gap-1">

                  <input
                    type="radio"
                    value={type}
                    checked={formData.coachingType === type}
                    onChange={(e) => setFormData({ ...formData, coachingType: e.target.value })}
                  />

                  {type}

                </label>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div className="flex flex-wrap gap-2 text-xs">

            {countries.map((country) => (
              <label key={country.code} className="text-center cursor-pointer">

                <input
                  type="radio"
                  name="country"
                  value={country.code}
                  checked={formData.country === country.code}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="sr-only"
                />

                <div
                  className={`flex items-center gap-1 border rounded-full px-2 py-[2px] ${formData.country === country.code
                    ? "bg-[#C67B3E]/20 border-[#C67B3E]"
                    : "border-gray-300"
                    }`}
                >

                  <div className="text-sm">{country.flag}</div>
                  <div>{country.code}</div>

                </div>

              </label>
            ))}

          </div>

          {/* Message */}
          <textarea
            rows={3}
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-2 py-1 border rounded-md outline-none resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#C67B3E] text-white py-1.5 rounded-md flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
            <Send className="w-4 h-4" />
          </button>

        </form>

      </div>

      {/* IMAGE SLIDESHOW */}
      <div className="bg-white hidden lg:flex w-1/2 relative overflow-hidden bg-gray-100">

        {slideshowImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Slide"
            className={`absolute w-full h-full object-contain transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

      </div>
    </div>
  );
}