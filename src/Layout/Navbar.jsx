import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import Mainlogo from "../assets/logo/png/main-logo.png";
import ContactFormPopup from "../Layout/ContactFormPopup";

export default function Navbar({ toggleSidebar }) {
    const [coachingOpen, setCoachingOpen] = useState(false);
    const [studyAbroadOpen, setStudyAbroadOpen] = useState(false);
    const [isWorkAbroadOpen, setIsWorkAbroadOpen] = useState(false);

    const studyAbroadCountries = [
        { name: "USA", code: "US", path: "/usa-study" },
        { name: "Canada", code: "CA", path: "/canada-study" },
        { name: "Australia", code: "AU", path: "/australia-study" },
        { name: "New Zealand", code: "NZ", path: "/new-zealand-study" },
        { name: "UK", code: "GB", path: "/uk-study" },
        { name: "Ireland", code: "IE", path: "/ireland-study" },
        { name: "Europe", code: "EU", path: "/europe-study" },
        { name: "Italy", code: "IT", path: "/italy-study" },
        { name: "Russia", code: "RU", path: "/russia-study" },
    ];

    return (
        <>
            <nav className="sticky top-0 z-50 flex items-center justify-between bg-white border-b px-4 py-2 shadow-sm text-[#3D1F14]">
                <div className="flex items-center gap-6 w-full lg:w-auto">
                    {/* Mobile Menu Button */}
                    <button className="lg:hidden" onClick={toggleSidebar}>
                        <Menu className="w-6 h-6 text-[#3D1F14]" />
                    </button>

                    {/* Logo */}
                    <Link to="/" className="flex-1 lg:flex-none">
                        <img
                            src={Mainlogo}
                            alt="Logo"
                            className="h-8 w-auto lg:h-12 mx-auto lg:mx-0"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-9 text-[#3D1F14] font-medium items-center">
                        <li>
                            <Link to="/" className="hover:underline hover:underline-offset-4">
                                <b>Home</b>
                            </Link>
                        </li>

                        <li>
                            <Link to="/about" className="hover:underline hover:underline-offset-4">
                                <b>About</b>
                            </Link>
                        </li>

                        {/* Coaching Dropdown */}
                        <li className="relative">
                            <div
                                className="flex items-center gap-1 cursor-pointer"
                                onClick={() => setCoachingOpen((prev) => !prev)}
                            >
                                <b>Coaching</b> <ChevronDown className="w-4 h-4" />
                            </div>

                            {coachingOpen && (
                                <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                                    <Link to="/ielts-coaching" onClick={() => setCoachingOpen(false)}>
                                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                                            IELTS
                                        </li>
                                    </Link>
                                    <Link to="/pte-coaching" onClick={() => setCoachingOpen(false)}>
                                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                                            PTE
                                        </li>
                                    </Link>
                                </ul>
                            )}
                        </li>

                        {/* Study Abroad Dropdown */}
                        <li className="relative cursor-pointer">
                            <div
                                className="flex items-center gap-1"
                                onClick={() => setStudyAbroadOpen((prev) => !prev)}
                            >
                                <b>Study Abroad</b> <ChevronDown className="w-4 h-4" />
                            </div>

                            {studyAbroadOpen && (
                                <ul className="absolute left-0 mt-2 w-52 bg-white border rounded shadow-lg z-50">
                                    {studyAbroadCountries.map((country) => (
                                        <Link to={country.path} key={country.name}>
                                            <li
                                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center gap-2"
                                                onClick={() => setStudyAbroadOpen(false)}
                                            >
                                                <ReactCountryFlag
                                                    countryCode={country.code}
                                                    svg
                                                    style={{ width: "20px", height: "20px" }}
                                                />
                                                {country.name}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Services */}
                        <li>
                            <Link
                                to="/abroad-services"
                                className="hover:underline hover:underline-offset-4"
                            >
                                <b>Abroad Services</b>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact-us"
                                className="hover:underline hover:underline-offset-4"
                            >
                                <b>Contact Us</b>
                            </Link>
                        </li>

                        {/* 🔹 Work Abroad Capsule Button */}
                        <li>
                            <button
                                onClick={() => setIsWorkAbroadOpen(true)}
                                className="bg-[#C67B3E] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#3D1F14] hover:text-[#C67B3E] transition-all"
                            >
                                Work Abroad
                            </button>
                        </li>
                    </ul>
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex">
                    <button className="bg-[#3D1F14] text-[#C67B3E] px-4 py-2 rounded-md hover:bg-[#C67B3E] hover:text-[#3D1F14] transition">
                        Book A Free Consultation
                    </button>
                </div>
            </nav>

            {/* 🔹 Modal appears when clicked */}
            <ContactFormPopup
                open={isWorkAbroadOpen}
                onClose={() => setIsWorkAbroadOpen(false)}
            />
        </>
    );
}