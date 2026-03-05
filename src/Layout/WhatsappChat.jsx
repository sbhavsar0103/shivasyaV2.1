import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import WhatsAppBg from "../assets/utility/whbg.svg";

export default function WhatsappChat() {
    const [open, setOpen] = useState(false);

    const phoneNumber = "917567981608";
    const message = "Hi, I want to know more about study abroad.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <>
            {/* Floating WhatsApp Icon */}
            <div className="fixed bottom-6 left-6 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg"
                >
                    <FaWhatsapp size={28} />
                </button>
            </div>

            {/* Chat Popup */}
            {open && (
                <div className="fixed bottom-24 left-6 w-72 bg-white rounded-xl shadow-xl overflow-hidden z-50">

                    {/* Header */}
                    <div className="bg-green-700 text-white p-3 flex justify-between items-center">
                        <div>
                            <h4 className="font-semibold text-sm">Shivasya</h4>
                            <p className="text-xs opacity-80">online</p>
                        </div>

                        <button onClick={() => setOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    {/* Message Area with Background */}
                    <div
                        className="p-4 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${WhatsAppBg})` }}
                    >
                        <div className="text-black bg-white p-3 rounded-lg shadow text-sm w-fit">
                            Hi,<br />
                            How can I help you?
                        </div>
                    </div>

                    {/* Button */}
                    <div className="p-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-full font-medium"
                        >
                            Chat with us
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}