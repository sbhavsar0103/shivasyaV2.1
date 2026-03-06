import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ContactFormPopup from "../Layout/ContactFormPopup";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-col flex-1">
        <Navbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          openPopup={() => setPopupOpen(true)}
        />
        <main>
          <Outlet />
        </main>
      </div>

      <ContactFormPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        autoOpen={true}
      />
      <a href="/italy-study" className="fixed right-5 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-right bg-[#C67B3E] text-white px-6 py-2 rounded-t-lg shadow-lg hover:bg-[#a9652f] z-50">
        Study In Italy 🇮🇹 </a>

    </div>
  );
}