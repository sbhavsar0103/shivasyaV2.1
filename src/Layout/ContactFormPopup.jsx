import React, { useState, useEffect } from "react";
import ContactFormPopupSmall from "../Layout/ContactFormPopupSmall";

export default function ContactFormPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 1200); // 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-7xl h-[95vh] overflow-y-auto bg-white rounded-3xl shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>

            <ContactFormPopupSmall />
          </div>
        </div>
      )}
    </>
  );
}
