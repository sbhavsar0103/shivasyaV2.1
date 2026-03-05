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

      {/* <ContactFormPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        autoOpen={true}
      /> */}
    </div>
  );
}