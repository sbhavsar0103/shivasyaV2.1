import React, { useState } from "react";
import {
  Send,
  Phone,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import Footer from "../Layout/footer";

// --- DATA ---
const SOCIAL_MEDIA = [
  { name: "Instagram", icon: Instagram, color: "text-[#3D1F14]", bgColor: "bg-[#C67B3E]/10", href: "https://www.instagram.com/shivasya_services?igsh=MWJzamx3Nmo5ZHRjbg==" },
  { name: "Facebook", icon: Facebook, color: "text-[#3D1F14]", bgColor: "bg-[#C67B3E]/10", href: "https://www.facebook.com/share/17DahFaa27/?mibextid=wwXIfr" },
  { name: "Whatsapp", icon: MessageCircle, color: "text-[#3D1F14]", bgColor: "bg-[#C67B3E]/10", href: "https://wa.me/message/FZN2DAMDZCISK1" },
  { name: "Google", icon: Mail, color: "text-[#3D1F14]", bgColor: "bg-[#C67B3E]/10", href: "https://www.shivasya.in" },
];

const COUNTRIES = [
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

// --- COMPONENTS ---
const SocialIcon = ({ social }) => {
  const Icon = social.icon;
  return (
    <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group transition-transform hover:scale-110">
      <div className={`p-3 rounded-full ${social.bgColor} ${social.color} group-hover:bg-[#C67B3E] group-hover:text-white transition-all`}>
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-[#C67B3E] transition-colors">{social.name}</span>
    </a>
  );
};

const RadioOption = ({ options, selected, onChange, label }) => (
  <div>
    <p className="text-gray-700 font-medium mb-3">{label}</p>
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <label key={option} className="cursor-pointer">
          <input type="radio" name={label} value={option} checked={selected === option} onChange={(e) => onChange(e.target.value)} className="sr-only" />
          <span className={`inline-block px-6 py-2.5 rounded-lg border-2 font-medium transition-all ${selected === option ? "border-[#C67B3E] bg-[#C67B3E]/10 text-[#3D1F14]" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"}`}>{option}</span>
        </label>
      ))}
    </div>
  </div>
);

const CountryOption = ({ countries, selected, onChange }) => (
  <div>
    <p className="text-gray-700 font-medium mb-3">Which country are you planning to study in?</p>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {countries.map((country) => (
        <label key={country.code} className="cursor-pointer">
          <input type="checkbox" name="country" value={country.code} checked={selected.includes(country.code)} onChange={() => onChange(country.code)} className="sr-only" />
          <span className={`flex flex-col items-center gap-1 p-2 rounded-lg border-2 transition-all ${selected.includes(country.code) ? "border-[#C67B3E] bg-[#C67B3E]/10 text-[#3D1F14]" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"}`}>
            <span className="text-2xl">{country.flag}</span>
            <span className="text-xs font-medium text-center leading-tight">{country.name}</span>
          </span>
        </label>
      ))}
    </div>
  </div>
);

const CourseDropdown = ({ courses, selected, onChange }) => (
  <div>
    <p className="text-gray-700 font-medium mb-3">Select a Course</p>
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] outline-none transition-all"
      required
    >
      <option value="" disabled>
        -- Select Course --
      </option>
      {courses.map((group) => (
        <optgroup key={group.title} label={group.title}>
          {group.items.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  </div>
);

// --- MAIN COMPONENT ---
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    coachingType: "",
    country: [],
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (key) => (value) => setFormData({ ...formData, [key]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.coachingType || formData.country.length === 0 || !formData.course) {
      alert("Please select coaching type, at least one country, and course");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("https://api.shivasya.in/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          course: formData.course,
          ielts_type: formData.coachingType,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit form");
      await res.json();
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", coachingType: "", country: [], course: "", message: "" });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="min-h-screen flex flex-col bg-gray-50">
        {/* Social Media */}
        <div className="bg-[#E8EDD5] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {SOCIAL_MEDIA.map((social) => (
                <SocialIcon key={social.name} social={social} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-4 sm:px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto mb-10 text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
            <p className="text-[#C67B3E] text-lg font-medium">Drop us a line & one of our experts will get back to you shortly</p>
          </div>

          <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            {/* Form */}
            <div className="w-full lg:w-3/5 p-8 sm:p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {["name", "phone"].map((field) => (
                    <input
                      key={field}
                      type={field === "phone" ? "tel" : "text"}
                      placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                      required
                      value={formData[field]}
                      onChange={(e) => handleChange(field)(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] outline-none transition-all"
                    />
                  ))}
                </div>

                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email")(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] outline-none transition-all"
                />

                <RadioOption options={["IELTS", "PTE"]} selected={formData.coachingType} onChange={handleChange("coachingType")} label="Which coaching are you planning to attend?" />

                <CourseDropdown courses={COURSE_DATA} selected={formData.course} onChange={handleChange("course")} />

                <CountryOption countries={COUNTRIES} selected={formData.country} onChange={(code) => setFormData(prev => ({
                  ...prev,
                  country: prev.country.includes(code)
                    ? prev.country.filter(c => c !== code)
                    : [...prev.country, code]
                }))} />

                <textarea
                  placeholder="Message *"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message")(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#3D1F14] outline-none transition-all resize-none"
                />

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                    Form submitted successfully!
                  </div>
                )}

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

            {/* Contact Info */}
            <div className="w-full lg:w-2/5 bg-[#F9FAF5] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">CORPORATE OFFICE</h2>
                <div className="space-y-8">
                  {[
                    { icon: MapPin, title: "Address", content: <>117, University Plaza<br />120 Feet Ring Road<br />Near Vijay Cross Road<br />Navrangpura, Ahmedabad<br />Gujarat 380009</> },
                    { icon: Phone, title: "Mobile", content: "+91 7567981608" },
                    { icon: Mail, title: "Email", content: "services@shivasya.in" },
                  ].map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <info.icon className="w-6 h-6 text-[#C67B3E] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4 justify-center">
                {SOCIAL_MEDIA.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.name} href={social.href} className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-[#C67B3E] hover:text-white transition-all shadow-md hover:shadow-lg">
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}