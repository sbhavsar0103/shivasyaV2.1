import React, { useState, useEffect, useCallback } from "react";
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

const COURSE_DATA = [
  { title: "Management", items: ["Business Management", "Event Management", "Health Management", "Project Management", "Supply Chain Management"] },
  { title: "Engineering", items: ["Automotive Engineering", "Electrical Engineering", "Electronics Engineering", "Petroleum Engineering"] },
  { title: "Business", items: ["Business Analytics", "Business Management"] },
  { title: "Health Science", items: ["Cardiovascular Science", "Fitness", "Health Psychology", "Kinesiology", "Nursing"] },
  { title: "Biological & Life Sciences", items: ["Bioinformatics", "Clinical Science", "Genetics", "Zoology"] },
  { title: "Law & Legal Studies", items: ["LLB", "LLM", "Criminology", "Justice & Emergency Services", "Forensic Science"] },
  { title: "Computer Science & IT", items: ["Game Programming", "Software Development", "Cyber Security", "Mobile Applications", "Web Applications"] },
];

// ---------- Reusable Input Components ----------
const InputField = ({ type = "text", placeholder, value, onChange, required = false }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    required={required}
    onChange={onChange}
    className="px-3 py-2 border rounded-md outline-none w-full"
  />
);

const SelectField = ({ value, onChange, required = false, options }) => (
  <select value={value} onChange={onChange} required={required} className="px-3 py-2 border rounded-md outline-none w-full">
    <option value="">Select Course</option>
    {options.map((cat) => (
      <optgroup key={cat.title} label={cat.title}>
        {cat.items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </optgroup>
    ))}
  </select>
);

const RadioGroup = ({ label, options, selected, onChange }) => (
  <div>
    <p className="text-xs mb-1">{label}</p>
    <div className="flex gap-2">
      {options.map((option) => (
        <label key={option} className="text-xs flex items-center gap-1 cursor-pointer">
          <input type="radio" value={option} checked={selected === option} onChange={onChange} />
          {option}
        </label>
      ))}
    </div>
  </div>
);

const CountrySelector = ({ countries, selectedCountry, onChange }) => (
  <div className="flex flex-wrap gap-2 text-xs">
    {countries.map((country) => (
      <label key={country.code} className="text-center cursor-pointer">
        <input
          type="radio"
          name="country"
          value={country.code}
          checked={selectedCountry === country.code}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`flex items-center gap-1 border rounded-full px-2 py-[2px] ${selectedCountry === country.code ? "bg-[#C67B3E]/20 border-[#C67B3E]" : "border-gray-300"
            }`}
        >
          <div className="text-sm">{country.flag}</div>
          <div>{country.code}</div>
        </div>
      </label>
    ))}
  </div>
);

const Slideshow = ({ images, currentSlide }) => (
  <div className="bg-white hidden lg:flex w-1/2 relative overflow-hidden bg-gray-100">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index + 1}`}
        className={`absolute w-full h-full object-contain transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
      />
    ))}
  </div>
);

// ---------- Main Component ----------
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
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow auto change
  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slideshowImages.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = useCallback((field) => (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value })), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.coachingType || !formData.country) {
      alert("Please select a coaching type and country");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.shivasya.in/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          ielts_type: formData.coachingType,
          country: formData.country,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit form");
      await response.json();
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", coachingType: "", country: "", course: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full min-h-[560px]">
      {/* FORM SECTION */}
      <div className="w-full lg:w-1/2 p-6 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <InputField placeholder="Name" value={formData.name} onChange={handleChange("name")} required />
            <InputField placeholder="Phone" value={formData.phone} onChange={handleChange("phone")} required type="tel" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <InputField placeholder="Email" value={formData.email} onChange={handleChange("email")} required type="email" />
            <SelectField value={formData.course} onChange={handleChange("course")} required options={COURSE_DATA} />
          </div>
          <RadioGroup label="Coaching" options={["IELTS", "PTE"]} selected={formData.coachingType} onChange={handleChange("coachingType")} />
          <CountrySelector countries={countries} selectedCountry={formData.country} onChange={handleChange("country")} />
          <textarea
            rows={3}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange("message")}
            className="w-full px-2 py-1 border rounded-md outline-none resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#C67B3E] text-white py-1.5 rounded-md flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
            <Send className="w-4 h-4" />
          </button>
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                Form submitted successfully!
              </div>
            )}
        </form>
      </div>
      {/* IMAGE SLIDESHOW */}
      <Slideshow images={slideshowImages} currentSlide={currentSlide} />
    </div>
  );
}