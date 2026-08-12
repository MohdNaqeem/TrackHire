import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header/Header";


const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleToggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };


  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />


      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        <Header
          onMenuClick={handleToggleSidebar}
        />

        <Outlet />
      </main>
    </div>
  );
};


export default DashboardLayout;