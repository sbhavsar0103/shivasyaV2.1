import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ContactFormPopup from "../Layout/ContactFormPopup";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main>
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>

      {/* Contact form popup overlay */}
      <ContactFormPopup />
    </div>
  );
}