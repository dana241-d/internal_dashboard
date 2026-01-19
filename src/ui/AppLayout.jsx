import SideBar from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { ArrowBigLeftDashIcon, Backpack, MenuIcon } from "lucide-react";

function AppLayout() {
  const { isAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex min-h-screen w-full">
      {isAuth ? (
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <div className="md:w-64 hidden md:block md:h-30 sm:h-12.5 justify-center">
          <img src="src/assets/download.png" />{" "}
        </div>
      )}

      <main className="flex-1 overflow-x-scroll overflow-y-auto p-10 md:p-0 h-full md:w-full ">
        {
          isAuth && (
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden fixed top-4 left-4 z-50 p-2 bg-neutral-500 
         text-white rounded  "
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          )
          // <div className="flex flex-row items-start justify-between bg-red-400"></div>
          /* <button
              className="md:hidden sm:block "
              onClick={() => window.history.back()}
            >
              <ArrowBigLeftDashIcon className=" h-8 w-8" />
            </button> */
        }
        <Outlet />
      </main>
    </div>
  );

  // return (
  //   <div className="flex min-h-screen relative">
  //     {/* Sidebar is fully handled inside Sidebar component */}
  //     <SideBar isOpen={isOpen} setIsOpen={setIsOpen} isAuth={isAuth} />

  //     {/* Main content */}
  //     <main className="flex-1 overflow-x-auto p-4 md:p-8">
  //       <button
  //         className="md:hidden fixed top-4 left-4 z-50 p-2 bg-neutral-500 text-white rounded"
  //         onClick={() => setIsOpen(true)}
  //       >
  //         {/* You can use a hamburger icon here */}
  //         <svg
  //           className="w-6 h-6"
  //           fill="none"
  //           stroke="currentColor"
  //           strokeWidth="2"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M4 6h16M4 12h16M4 18h16"
  //           />
  //         </svg>
  //       </button>
  //       <Outlet />
  //     </main>
  //   </div>
  // );
  // return (
  //   <div className="relative flex min-h-screen w-full">
  //     {/* //w-64 h-full sm:hidden md:block  */}
  //     <aside
  //       className={`z-20 fixed top-0 left-0 h-full bg-neutral-400 text-neutral-700 w-64  `}
  //     >
  //       {isAuth === true ? (
  //         <SideBar isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
  //       ) : (
  //         <img src="src/assets/download.png" className="hidden md:block" />
  //       )}
  //     </aside>

  //     <main className="flex-1 sm:p-6  overflow-x-auto  p-0 md:p-8 ">
  //       <Outlet />
  //     </main>
  //   </div>
  // );
}

export default AppLayout;
