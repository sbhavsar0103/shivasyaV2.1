import React, { useState } from "react";
import { Send } from "lucide-react";
import ContactImage from "../assets/contact/form-image.png";

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

export default function ContactFormPopupSmall({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    coachingType: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.coachingType || !formData.country) {
      alert("Please select a coaching type and country");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        coachingType: "",
        country: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="flex flex-col lg:flex-row h-[90vh] w-full">
      {/* Form Section */}
      <div className="w-full lg:w-2/3 p-6 lg:p-8 overflow-y-auto flex flex-col">
        <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
          <div className="grid sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#C67B3E] outline-none"
            />
            <input
              type="tel"
              placeholder="Phone *"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#C67B3E] outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#C67B3E] outline-none"
          />

          {/* Coaching Type */}
          <div>
            <p className="text-sm font-medium mb-1">Coaching Type</p>
            <div className="flex gap-2">
              {["IELTS", "PTE"].map((type) => (
                <label key={type} className="cursor-pointer">
                  <input
                    type="radio"
                    name="coaching"
                    value={type}
                    checked={formData.coachingType === type}
                    onChange={(e) => setFormData({ ...formData, coachingType: e.target.value })}
                    className="sr-only"
                  />
                  <span
                    className={`px-3 py-1 rounded-lg border text-sm ${
                      formData.coachingType === type
                        ? "border-[#C67B3E] bg-[#C67B3E]/10 text-[#3D1F14]"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Country */}
          <div>
            <p className="text-sm font-medium mb-1">Country</p>
            <div className="grid grid-cols-3 gap-1 max-h-24 overflow-y-auto">
              {countries.map((country) => (
                <label key={country.code} className="cursor-pointer text-xs">
                  <input
                    type="radio"
                    name="country"
                    value={country.code}
                    checked={formData.country === country.code}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="sr-only"
                  />
                  <span
                    className={`flex flex-col items-center gap-1 p-1 rounded-lg border ${
                      formData.country === country.code
                        ? "border-[#C67B3E] bg-[#C67B3E]/10 text-[#3D1F14]"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <span className="text-lg">{country.flag}</span>
                    {country.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Message *"
            required
            rows={2}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#C67B3E] outline-none flex-1"
          />

          {submitStatus === "success" && (
            <div className="p-2 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
              Form submitted successfully!
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#C67B3E] hover:bg-[#3D1F14] text-white font-bold py-2 rounded-full text-sm transition-all"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex w-1/3 items-center justify-center p-4">
        <img src={ContactImage} alt="Contact Illustration" className="h-full object-contain" />
      </div>
    </div>
  );
}
