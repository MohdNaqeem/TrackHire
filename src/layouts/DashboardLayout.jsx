import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Header from "../components/Dashboard/Header/Header";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F7F7FB]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;