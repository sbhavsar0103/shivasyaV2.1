import React, { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";
import Footer from "../Layout/footer";

const socialMedia = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "text-[#3D1F14]",
    bgColor: "bg-[#C67B3E]/10",
    href: "https://www.instagram.com/shivasya_services?igsh=MWJzamx3Nmo5ZHRjbg==",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "text-[#3D1F14]",
    bgColor: "bg-[#C67B3E]/10",
    href: "https://www.facebook.com/share/17DahFaa27/?mibextid=wwXIfr",
  },
  // {
  //   name: "Twitter",
  //   icon: MessageCircle,
  //   color: "text-[#3D1F14]",
  //   bgColor: "bg-[#C67B3E]/10",
  //   href: "#",
  // },
  {
    name: "Whatsapp",
    icon: MessageCircle,
    color: "text-[#3D1F14]",
    bgColor: "bg-[#C67B3E]/10",
    href: "https://wa.me/message/FZN2DAMDZCISK1",
  },
  // {
  //   name: "Youtube",
  //   icon: Youtube,
  //   color: "text-[#3D1F14]",
  //   bgColor: "bg-[#C67B3E]/10",
  //   href: "#",
  // },
  {
    name: "Google",
    icon: Mail,
    color: "text-[#3D1F14]",
    bgColor: "bg-[#C67B3E]/10",
    href: "https://www.shivasya.in",
  },
];

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
    <>
      <section className="min-h-screen flex flex-col bg-gray-50">
        {/* SOCIAL MEDIA BAR */}
        <div className="bg-[#E8EDD5] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {socialMedia.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex flex-col items-center gap-2 group transition-transform hover:scale-110"
                  >
                    <div
                      className={`p-3 rounded-full ${social.bgColor} ${social.color} group-hover:bg-[#C67B3E] group-hover:text-white transition-all`}
                    >
                      <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#C67B3E] transition-colors">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="px-4 sm:px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center sm:text-left">
              Contact Us
            </h1>
            <p className="text-[#C67B3E] text-lg font-medium text-center sm:text-left">
              Drop us a line & one of our experts will get back to you shortly
            </p>
          </div>

          <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            {/* FORM SECTION */}
            <div className="w-full lg:w-3/5 p-8 sm:p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] outline-none transition-all"
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
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] outline-none transition-all"
                />

                {/* Coaching Selection */}
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
                            setFormData({
                              ...formData,
                              country: e.target.value,
                            })
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
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] outline-none transition-all resize-none"
                />

                {/* Submission Feedback */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                    Form submitted successfully!
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#3D1F14] hover:bg-[#C67B3E] text-white font-bold py-4 rounded-full shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* CONTACT INFO SECTION */}
            <div className="w-full lg:w-2/5 bg-[#F9FAF5] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  CORPORATE OFFICE
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#C67B3E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        117, Univeristy Plaza1, 120 Feet
                        <br />
                        Ring Road, Near Vijay Cross Road
                        <br />
                        Navrangpura, Ahmedabad, Gujarat
                        <br />
                        380009
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-[#C67B3E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Mobile</h3>
                      <p className="text-gray-600">+91 7567981608</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-[#C67B3E] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">services@shivasya.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.facebook.com/share/17DahFaa27/?mibextid=wwXIfr"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/shivasya_services?igsh=MWJzamx3Nmo5ZHRjbg=="
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-md hover:shadow-lg"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/message/FZN2DAMDZCISK1"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-600 hover:bg-red-600 hover:text-white transition-all shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}