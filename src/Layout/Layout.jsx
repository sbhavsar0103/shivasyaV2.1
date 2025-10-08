// import { useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// export default function Layout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//       <div className="flex flex-col flex-1">
//         <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//         <main>{children}</main>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main>
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>
    </div>
  );
}
