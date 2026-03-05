import React, { useState } from "react";
import { Send } from "lucide-react";
import ContactImage from "../assets/contact/contant_us.jpeg";

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

// Course data
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

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        course: "",
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
                course: "",
                coachingType: "",
                country: "",
                message: "",
            });
        }, 1200);
    };

    return (
        <section className="px-4 sm:px-8 lg:px-16 mb-20">
            <div className="max-w-7xl mx-auto mb-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">Book the Demo Class</h1>
                <p className="text-[#C67B3E] text-lg font-medium">
                    Drop us a line and our expert will get back to you shortly
                </p>
            </div>

            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                {/* LEFT FORM */}
                <div className="w-full lg:w-3/5 p-8 sm:p-10 lg:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name + Phone */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name *"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#C67B3E] focus:border-transparent outline-none transition-all"
                            />
                            <input
                                type="tel"
                                placeholder="Phone *"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#C67B3E] focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Email + Course Dropdown */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email *"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#C67B3E] focus:border-transparent outline-none transition-all"
                            />

                            <select
                                value={formData.course}
                                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#C67B3E] focus:border-transparent outline-none transition-all hide-scrollbar"
                                required
                            >
                                <option value="">Select Course *</option>
                                {faqData.map((category) => (
                                    <optgroup key={category.title} label={category.title}>
                                        {category.items.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>


                        {/* Coaching Type */}
                        <div>
                            <p className="text-gray-700 font-medium mb-3">
                                Which coaching are you planning to attend?
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["IELTS", "PTE"].map((type) => (
                                    <label key={type} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="coaching"
                                            value={type}
                                            checked={formData.coachingType === type}
                                            onChange={(e) =>
                                                setFormData({ ...formData, coachingType: e.target.value })
                                            }
                                            className="sr-only"
                                        />
                                        <span
                                            className={`inline-block px-6 py-2.5 rounded-lg border-2 font-medium transition-all ${formData.coachingType === type
                                                ? "border-[#C67B3E] bg-[#C67B3E]/10 text-[#3D1F14]"
                                                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                                                }`}
                                        >
                                            {type}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Country Selection */}
                        <div>
                            <p className="text-gray-700 font-medium mb-3">
                                Which country are you planning to study in?
                            </p>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                {countries.map((country) => (
                                    <label key={country.code} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="country"
                                            value={country.code}
                                            checked={formData.country === country.code}
                                            onChange={(e) =>
                                                setFormData({ ...formData, country: e.target.value })
                                            }
                                            className="sr-only"
                                        />
                                        <span
                                            className={`flex flex-col items-center gap-1 p-2 rounded-lg border-2 transition-all ${formData.country === country.code
                                                ? "border-[#C67B3E] bg-[#C67B3E]/10 text-[#3D1F14]"
                                                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                                                }`}
                                        >
                                            <span className="text-2xl">{country.flag}</span>
                                            <span className="text-xs font-medium text-center leading-tight">
                                                {country.name}
                                            </span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <textarea
                            placeholder="Message *"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#C67B3E] focus:border-transparent outline-none transition-all resize-none"
                        />

                        {/* Success Message */}
                        {submitStatus === "success" && (
                            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                                Form submitted successfully!
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 bg-[#C67B3E] hover:bg-[#3D1F14] text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                        >
                            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img src={ContactImage} alt="Contact Illustration" />
                </div>
            </div>
            <style>
                {`
                    .hide-scrollbar {
                        scrollbar-width: none; /* Firefox */
                        -ms-overflow-style: none; /* IE 10+ */
                    }

                    .hide-scrollbar::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Opera */
                    }
                `}
            </style>

        </section>
    );
}
