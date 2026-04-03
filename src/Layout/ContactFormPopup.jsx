import React, { useState, useEffect } from "react";
import ContactFormPopupSmall from "../Layout/ContactFormPopupSmall";

export default function ContactFormPopup({ open, onClose, autoOpen = false }) {
  const [isOpen, setIsOpen] = useState(open || false);

  // Only sync with parent IF open is defined
  useEffect(() => {
    if (typeof open === "boolean") {
      setIsOpen(open);
    }
  }, [open]);

  // Auto open every 30 sec
  useEffect(() => {
    if (!autoOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [autoOpen, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-3xl shadow-xl overflow-hidden">

        <button
          onClick={() => {
            setIsOpen(false);
            onClose && onClose();
          }}
          className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow hover:bg-white"
        >
          &times;
        </button>

        <ContactFormPopupSmall onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}