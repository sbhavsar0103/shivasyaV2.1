import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Mainlogo from "../assets/logo/png/main-logo.png";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [coachingOpen, setCoachingOpen] = useState(false);
  const [studyAbroadOpen, setStudyAbroadOpen] = useState(false);

  const countries = [
    { name: "USA", code: "US" },
    { name: "Canada", code: "CA" },
    { name: "UK", code: "GB" },
    { name: "Europe", code: "EU" },
    { name: "Ireland", code: "IE" },
    { name: "New Zealand", code: "NZ" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <a href="/" className="flex-1">
            <img
              src={Mainlogo}
              alt="Logo"
              className="h-10 w-auto mx-auto"
            />
          </a>
          <button
            className="p-1 rounded hover:bg-gray-200 lg:hidden"
            onClick={toggleSidebar}
          >
            <X className="w-6 h-6 text-[#3D1F14]" />
          </button>
        </div>

        <ul className="p-4 space-y-2 text-[#3D1F14]">
          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]">
            <b>Home</b>
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]">
            <b>About</b>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setCoachingOpen(true)}
            onMouseLeave={() => setCoachingOpen(false)}
          >
            <div className="flex items-center justify-between gap-1 hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]">
              <b>Coaching</b>
              <ChevronDown className="w-4 h-4" />
            </div>
            {coachingOpen && (
              <ul className="ml-4 mt-1">
                <li className="px-4 py-2 cursor-pointer hover:bg-blue-100">
                  PTE
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-blue-100">
                  ILTS
                </li>
              </ul>
            )}
          </li>

          {/* Study Abroad Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setStudyAbroadOpen(true)}
            onMouseLeave={() => setStudyAbroadOpen(false)}
          >
            <div className="flex items-center justify-between gap-1 hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]">
              <b>Study Abroad</b>
              <ChevronDown className="w-4 h-4" />
            </div>
            {studyAbroadOpen && (
              <ul className="ml-4 mt-1">
                {countries.map((country) => (
                  <li
                    key={country.name}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center gap-2"
                  >
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{ width: "20px", height: "20px" }}
                    />
                    {country.name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]">
            <b>Contact Us</b>
          </li>

          <li className="pt-2">
            <button className="w-full bg-[#3D1F14] text-[#C67B3E] px-4 py-2 rounded-md hover:bg-[#C67B3E] hover:text-[#3D1F14] transition">
              Book A Free Consultation
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}
