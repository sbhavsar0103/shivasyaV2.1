import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

import Mainlogo from "../assets/logo/png/main-logo.png"

export default function Navbar({ toggleSidebar }) {
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
        <nav className="flex items-center justify-between bg-white border-b px-4 py-2 shadow-sm text-[#3D1F14]">
            <div className="flex items-center gap-6 w-full lg:w-auto">
                <button className="lg:hidden" onClick={toggleSidebar}>
                    <Menu className="w-6 h-6 text-[#3D1F14]" />
                </button>

                <a href="/" className="flex-1 lg:flex-none">
                    <img src={Mainlogo} alt="Logo" className="h-8 w-auto lg:h-12 mx-auto lg:mx-0" />
                </a>

                <ul className="hidden lg:flex gap-9 text-[#3D1F14]">
                    <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]">
                        <b>Home</b>
                    </li>
                    <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-3 hover:decoration-[#3D1F14]">
                        <Link to="/about"><b>About</b></Link>
                    </li>
                    <li onMouseEnter={() => setCoachingOpen(true)} className="relative cursor-pointer" onMouseLeave={() => setCoachingOpen(false)}>
                        <div className="flex items-center gap-1">
                            <b>Coaching</b> <ChevronDown className="w-4 h-4" />
                        </div>
                        {coachingOpen && (
                            <ul className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer"><Link to="/pte-coaching"></Link>PTE</li>
                                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer"><Link to="/ielts-coaching">ILTS</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className="relative  cursor-pointer" onMouseEnter={() => setStudyAbroadOpen(true)} onMouseLeave={() => setStudyAbroadOpen(false)}>
                        <div className="flex items-center gap-1">
                            <b>Study Abroad</b> <ChevronDown className="w-4 h-4" />
                        </div>
                        {studyAbroadOpen && (
                            <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
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
                </ul>
            </div>

            <div className="hidden lg:flex">
                <button className="bg-[#3D1F14] text-[#C67B3E] px-4 py-2 rounded-md hover:bg-[#C67B3E] hover:text-[#3D1F14] transition">
                    Book A Free Consultation
                </button>
            </div>
        </nav>
    );
}