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

export default function ContactForm() {
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
        <section className="px-4 sm:px-8 lg:px-16 mb-20">
            <div className="max-w-7xl mx-auto mb-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    Book the Demo Class
                </h1>
                <p className="text-[#C67B3E] text-lg font-medium">
                    Drop us a line and our expert will get back to you shortly
                </p>
            </div>

            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name *"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] focus:border-transparent outline-none transition-all"
                            />
                            <input
                                type="tel"
                                placeholder="Phone *"
                                required
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email *"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] focus:border-transparent outline-none transition-all"
                        />

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
                                                setFormData({
                                                    ...formData,
                                                    coachingType: e.target.value,
                                                })
                                            }
                                            className="sr-only"
                                        />
                                        <span
                                            className={`px-6 py-3 rounded-lg border-2 font-medium transition-all ${formData.coachingType === type
                                                    ? type === "IELTS"
                                                        ? "border-red-500 bg-red-50 text-red-700"
                                                        : "border-blue-500 bg-blue-50 text-blue-700"
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
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                {countries.map((country) => (
                                    <label
                                        key={country.code}
                                        className="cursor-pointer flex items-center"
                                    >
                                        <input
                                            type="radio"
                                            name="country"
                                            value={country.code}
                                            checked={formData.country === country.code}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    country: e.target.value,
                                                })
                                            }
                                            className="sr-only"
                                        />
                                        <span
                                            className={`justify-center w-full flex items-center gap-2 rounded-lg border-2 text-sm transition-all font-medium ${formData.country === country.code
                                                    ? "border-[#3D1F14] bg-lime-50 text-lime-700"
                                                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                                                }`}
                                        >
                                            <span className="text-lg">{country.flag}</span>
                                            <span className="truncate">{country.name}</span>
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
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] focus:border-transparent outline-none transition-all resize-none"
                        />

                        {/* Privacy Notice */}
                        <p className="text-sm text-gray-600">
                            By submitting this form, I agree to the{" "}
                            <a
                                href="#"
                                className="text-[#C67B3E] font-medium hover:text-[#3D1F14] underline"
                            >
                                Privacy Policy
                            </a>{" "}
                            of Visazone.
                        </p>

                        {/* Status Message */}
                        {submitStatus === "success" && (
                            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                                ✅ Form submitted successfully! (Demo mode)
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 bg-[#3D1F14] hover:bg-[#C67B3E] hover:text-[#3D1F14]  text-[#C67B3E] font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                        >
                            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img
                        src={ContactImage}
                        alt="Contact Illustration"
                    />
                </div>
            </div>
        </section>
    );
}