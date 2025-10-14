import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/png/main-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronUp,
} from "react-icons/fa";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-wrap -mx-4">
          {/* Logo & Address */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 md:mb-0">
            <div>
              <Link to="/">
                <img src={logo} alt="Shivasya Education & Immigration Services" className="h-14 mb-6" />
              </Link>
              <div className="space-y-2 text-sm text-gray-400">
                <p>117, Univeristy Plaza1, 120 Feet</p>
                <p>Ring Road, Near Vijay Cross Road</p>
                <p>Navrangpura, Ahmedabad, Gujarat</p>
                <p>380009</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-orange-600 w-4 h-4" />
                  <a href="tel:+917486860001" className="hover:text-orange-600">+91 7567981608</a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-orange-600 w-4 h-4" />
                  <a href="mailto:inquiry@shivasya.in" className="hover:text-orange-600">services@shivasya.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-1/2 sm:w-1/4 lg:w-1/6 px-4 mb-10 md:mb-0">
            <h4 className="text-white font-semibold text-lg mb-5 border-b-2 border-orange-600 inline-block pb-1">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
              <li><Link to="/ielts-coaching" className="hover:text-orange-600">IELTS Coaching</Link></li>
              <li><Link to="/pte-coaching" className="hover:text-orange-600">PTE Coaching</Link></li>
              <li><Link to="/abroad-services" className="hover:text-orange-600">Abroad Services</Link></li>
              <li><Link to="/contact-us" className="hover:text-orange-600">Contact</Link></li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div className="w-1/2 sm:w-1/4 lg:w-1/6 px-4 mb-10 md:mb-0">
            <h4 className="text-white font-semibold text-lg mb-5 border-b-2 border-orange-600 inline-block pb-1">Study Destination</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/usa-study" className="hover:text-orange-600">USA</Link></li>
              <li><Link to="/canada-study" className="hover:text-orange-600">Canada</Link></li>
              <li><Link to="/australia-study" className="hover:text-orange-600">Australia</Link></li>
              <li><Link to="/new-zealand-study" className="hover:text-orange-600">New Zealand</Link></li>
              <li><Link to="/uk-study" className="hover:text-orange-600">UK</Link></li>
              <li><Link to="/ireland-study" className="hover:text-orange-600">Ireland</Link></li>
              <li><Link to="/europe-study" className="hover:text-orange-600">Europe</Link></li>
              <li><Link to="/italy-study" className="hover:text-orange-600">Italy</Link></li>
              <li><Link to="/russia-study" className="hover:text-orange-600">Russia</Link></li>
            </ul>
          </div>

          {/* Contact Info & Social */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <h4 className="text-white font-semibold text-lg mb-5 border-b-2 border-orange-600 inline-block pb-1">Contact Information</h4>
            <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Shivasya Education Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9234567890123!2d72.5647890123456!3d23.0358901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f123456789%3A0x123456789abcdef0!2sVisa%20Zone%20Education%20%26%20Immigration%20Services!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                className="w-full h-48 border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex space-x-3">
              <a href="https://facebook.com/shivasyaeducation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-600 transition">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/shivasyaeducation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-600 transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/shivasyaeducation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-600 transition">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/shivasyaeducation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-600 transition">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com/shivasyaeducation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 border-t border-gray-700 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-2 md:mb-0">
            &copy; 2009 - 2024 <Link to="/" className="text-orange-600 hover:underline">Shivasya Education & Immigration Services Pvt. Ltd.</Link> All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li><Link to="/privacy-policy" className="hover:text-orange-600">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-orange-600">Disclaimer</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-orange-600">Terms & Conditions</Link></li>
            <li><Link to="/copyright-notice" className="hover:text-orange-600">Copyright Notice</Link></li>
            <li><Link to="/gdpr" className="hover:text-orange-600">GDPR</Link></li>
            <li><Link to="/monetary-policy" className="hover:text-orange-600">Monetary Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:bg-green-600 hover:-translate-y-1 z-50 ${showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    </footer>
  );
}