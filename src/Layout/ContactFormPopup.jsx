import React, { useState, useEffect } from "react";
import ContactFormPopupSmall from "../Layout/ContactFormPopupSmall";

export default function ContactFormPopup({ open, onClose, autoOpen = false }) {
  const [isOpen, setIsOpen] = useState(open || false);

  // Allow parent to control modal state
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  // Optional: auto open after delay (default 2 mins)
  useEffect(() => {
    if (!autoOpen) return;
    const interval = setInterval(() => {
      setIsOpen((prev) => (prev ? prev : true)); // Only open if currently closed
    }, 120000);
    return () => clearInterval(interval);
  }, [autoOpen]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => {
            setIsOpen(false);
            onClose && onClose();
          }}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        <ContactFormPopupSmall onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
