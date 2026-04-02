import { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import Mainlogo from "../assets/logo/png/main-logo.png";
import MiniNavbar from "./MiniNavbar";

export default function Navbar({ toggleSidebar, openPopup }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    const dropdownRef = useRef(null);

    const studyAbroadCountries = [
        { name: "USA", code: "US", path: "/usa-study" },
        { name: "Canada", code: "CA", path: "/canada-study" },
        { name: "Australia", code: "AU", path: "/australia-study" },
        { name: "New Zealand", code: "NZ", path: "/new-zealand-study" },
        { name: "UK", code: "GB", path: "/uk-study" },
        { name: "Ireland", code: "IE", path: "/ireland-study" },
        { name: "Europe", code: "EU", path: "/europe-study" },
        { name: "Russia", code: "RU", path: "/russia-study" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <MiniNavbar />
            <nav
                ref={dropdownRef}
                className="sticky top-0 z-50 flex items-center justify-between bg-white border-b px-4 py-2 shadow-sm text-[#3D1F14]"
            >
                <div className="flex items-center justify-between lg:justify-start w-full lg:w-auto lg:gap-6">
                    {/* Mobile Menu Button */}
                    <button className="lg:hidden" onClick={toggleSidebar}>
                        <Menu className="w-6 h-6 text-[#3D1F14]" />
                    </button>

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src={Mainlogo}
                            alt="Logo"
                            className="h-8 md:h-10 w-auto lg:h-12"
                        />
                    </Link>

                    {/* Invisible spacer to center logo in mobile properly */}
                    <div className="w-6 lg:hidden"></div>

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
                                onClick={() =>
                                    setOpenDropdown(openDropdown === "coaching" ? null : "coaching")
                                }
                            >
                                <b>Coaching</b> <ChevronDown className="w-4 h-4" />
                            </div>

                            {openDropdown === "coaching" && (
                                <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                                    <Link to="/ielts-coaching" onClick={() => setOpenDropdown(null)}>
                                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                                            IELTS
                                        </li>
                                    </Link>
                                    <Link to="/pte-coaching" onClick={() => setOpenDropdown(null)}>
                                        <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                                            PTE
                                        </li>
                                    </Link>
                                </ul>
                            )}
                        </li>

                        {/* Study Abroad Dropdown */}
                        {/* <li className="relative cursor-pointer">
                            <div
                                className="flex items-center gap-1"
                                onClick={() =>
                                    setOpenDropdown(openDropdown === "study" ? null : "study")
                                }
                            >
                                <b>Study Abroad</b> <ChevronDown className="w-4 h-4" />
                            </div>

                            {openDropdown === "study" && (
                                <ul className="absolute left-0 mt-2 w-52 bg-white border rounded shadow-lg z-50">
                                    {studyAbroadCountries.map((country) => (
                                        <Link
                                            to={country.path}
                                            key={country.name}
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center gap-2">
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
                        </li> */}

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

                        <li className="relative">
                            <button className="flex items-center gap-2 bg-[#C67B3E] text-white font-semibold px-3 py-2 rounded-full shadow-md hover:bg-[#3D1F14] hover:text-[#C67B3E] transition-all" onClick={() =>
                                    setOpenDropdown(openDropdown === "study" ? null : "study")}>
                                Study Abroad <ChevronDown className="w-4 h-4" />
                            </button>

                            {openDropdown === "study" && (
                                <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-xl z-50">
                                    {studyAbroadCountries.map((country) => (
                                        <Link
                                            to={country.path}
                                            key={country.name}
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            <li className="px-4 py-3 hover:bg-blue-100 cursor-pointer flex items-center gap-3">
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

                        {/* Work Abroad Button */}
                        <li>
                            <button onClick={openPopup} className="bg-[#C67B3E] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#3D1F14] hover:text-[#C67B3E] transition-all">
                                Work Abroad
                            </button>
                        </li>
                    </ul>
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex">
                    <Link
                        to="/contact-us"
                        className="bg-[#3D1F14] text-[#C67B3E] px-4 py-2 rounded-md hover:bg-[#C67B3E] hover:text-[#3D1F14] transition"
                    >
                        Book A Free Consultation
                    </Link>
                </div>
            </nav>
        </>
    );
}