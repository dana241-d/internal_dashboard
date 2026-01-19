import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Login from "@/pages/Login";
import {
  UsersIcon,
  LogOutIcon,
  LogInIcon,
  LayoutDashboardIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const links = [
  { to: "/users", icon: UsersIcon, title: "users" },
  { to: "/logout", icon: LogOutIcon, title: "Logout" },
];

import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function AppSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth === false) navigate("/login");
    console.log("auth after logout", isAuth);
  }, [isAuth, navigate]);

  function logoutLogic() {
    const confirmed = window.confirm(
      "Are you sure you want to complete logout?"
    );
    if (confirmed) {
      logout();
      // if (isAuth === false) navigate("/login");
      // console.log("logout logic", isAuth);
    }
  }

  function usersLogic() {
    navigate("/users");
  }

  return (
    <div>
      {/* {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden overflow-y-auto bg-white"
          onClick={() => setIsOpen(false)}
        />
      )} */}

      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white text-neutral-600 transform transition-transform
       ${
         isOpen ? "translate-x-0" : "-translate-x-full"
       }         md:translate-x-0 md:static md:h-auto md:flex md:flex-col`}
      >
        {/* closing button */}
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={() => setIsOpen(false)}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <SidebarHeader className="bg-red h-40 px-6 py-4 text-2xl font-bold border-gray-800 mb-18">
          <Link to="/users">
            <img src="src/assets/download.png" className=" md:block" />{" "}
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {links.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <SidebarMenuItem
                      onClick={() => {
                        setIsOpen(false);
                        link.to === "/logout" ? logoutLogic() : usersLogic();
                      }}
                      key={link.title}
                      className={`h-20 hover:bg-neutral-400 bg-white
                  rounded-2xl ${
                    isActive ? "bg-neutral-400" : ""
                  } flex items-center justify-center mb-5 `}
                    >
                      <link.icon /> <span>{link.title} </span>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
      </aside>
    </div>
  );
}

export default AppSidebar;
