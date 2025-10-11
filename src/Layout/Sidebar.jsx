import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import Mainlogo from "../assets/logo/png/main-logo.png";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [coachingOpen, setCoachingOpen] = useState(false);
  const [studyAbroadOpen, setStudyAbroadOpen] = useState(false);

  const countries = [
    { name: "USA", code: "US", path: "/usa-study" },
    { name: "Canada", code: "CA", path: "/canada-study" },
    { name: "Australia", code: "AU", path: "/australia-study" },
    { name: "New Zealand", code: "NZ", path: "/new-zealand-study" },
    { name: "UK", code: "GB", path: "/uk-study" },
    { name: "Ireland", code: "IE", path: "/ireland-study" },
    { name: "Europe", code: "EU", path: "/europe-study" },
    { name: "Italy", code: "IT", path: "/italy-study" },
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
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r transform transition-transform duration-300 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-64"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-50">
          <Link to="/" className="flex-1">
            <img src={Mainlogo} alt="Logo" className="h-10 w-auto mx-auto" />
          </Link>
          <button
            className="p-1 rounded hover:bg-gray-200 lg:hidden"
            onClick={toggleSidebar}
          >
            <X className="w-6 h-6 text-[#3D1F14]" />
          </button>
        </div>

        {/* Scrollable Menu */}
        <ul className="p-4 space-y-2 text-[#3D1F14] h-[calc(100vh-64px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="block hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]"
              onClick={toggleSidebar}
            >
              <b>Home</b>
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              className="block hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]"
              onClick={toggleSidebar}
            >
              <b>About</b>
            </Link>
          </li>

          {/* Coaching Dropdown */}
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
                <li>
                  <Link
                    to="/ielts-coaching"
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={toggleSidebar}
                  >
                    IELTS Coaching
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pte-coaching"
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={toggleSidebar}
                  >
                    PTE Coaching
                  </Link>
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
                  <li key={country.name}>
                    <Link
                      to={country.path}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100"
                      onClick={toggleSidebar}
                    >
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{ width: "20px", height: "20px" }}
                      />
                      {country.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Abroad Services */}
          <li>
            <Link
              to="/abroad-services"
              className="block hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]"
              onClick={toggleSidebar}
            >
              <b>Abroad Services</b>
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className="block hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]"
              onClick={toggleSidebar}
            >
              <b>Contact Us</b>
            </Link>
          </li>

          {/* Button */}
          <li className="pt-2 pb-8">
            <button className="w-full bg-[#3D1F14] text-[#C67B3E] px-4 py-2 rounded-md hover:bg-[#C67B3E] hover:text-[#3D1F14] transition">
              Book A Free Consultation
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}