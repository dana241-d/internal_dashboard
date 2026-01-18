import { generateToken } from "@/services/authApi";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const login = (email, password) => {
    console.log("welcome login");
    if (!email && !password) {
      throw new Error("Invalid email or password");
    }

    const token = generateToken();
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify({ email }));
    setIsAuth(!!token);

    return !!token;
  };

  const logout = () => {
    console.log("logout logic");
    const removing = sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setIsAuth(removing);
    console.log("is authenticated", isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
