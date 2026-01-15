import SideBar from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function AppLayout() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="relative flex min-h-screen w-full">
      <aside className="w-64 h-full sm:hidden md:block ">
        {isAuth === true ? (
          <SideBar />
        ) : (
          <img src="/download.png" className="hidden md:block" />
        )}
      </aside>

      <main className="flex-1 sm:p-6  overflow-x-auto  p-0 md:p-8 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
