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
// import { isAuthenticated } from "@/services/authApi";
import {
  UsersIcon,
  LogOutIcon,
  LogInIcon,
  LayoutDashboardIcon,
} from "lucide-react";
// import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const links = [
  { to: "/users", icon: UsersIcon, title: "users" },
  { to: "/logout", icon: LogOutIcon, title: "Logout" },
];

// import { handleLOgout } from "@/services/authApi";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  // const [isOpen, setIsOpen] = useState(false);

  function logoutLogic() {
    const confirmed = window.confirm(
      "Are you sure you want to complete logout?"
    );
    if (confirmed) {
      logout();
      if (isAuth === false) navigate("/login");
    }

    console.log("logout logic", isAuth);
  }

  function usersLogic() {
    navigate("/users");
  }

  return (
    <Sidebar
      // className={`${isOpen ? `translate-x-0` : `translate-x-full`}
      //  md:w-60 pl-0 w-64 h-screen text-blue-950 flex flex-col shadow-lg`}
      className="w-64 h-screen  transition-transform  bg-white text-neutral-900 font-bold  flex-col shadow-lg"
    >
      <SidebarHeader className="bg-none  h-40 px-6 py-4 text-2xl font-bold border-gray-800 mb-18">
        <Link to="/users">
          <img src="public/download.png" />{" "}
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
    </Sidebar>
  );
}

export default AppSidebar;
