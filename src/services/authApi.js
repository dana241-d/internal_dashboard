// import { Navigate } from "react-router-dom";
// import Logout from "@/pages/Logout";

// let isUserAuthenticated = false;

export function generateToken() {
  return (
    "token_" + Math.random().toString(36).slice(2) + Date.now().toString(36)
  );
}

// export function handleLogin({ email, password }) {
//   if (!email && !password) {
//     throw new Error("Invalid email or password");
//   }
//   const token = generateToken();

//   sessionStorage.setItem("token", token);
//   sessionStorage.setItem("user", JSON.stringify({ email }));
//   console.log("token", token);
//   return token;
// }

// export function handleLOgout() {
//   sessionStorage.removeItem("token");
//   sessionStorage.removeItem("user");
//   // console.log("our token now", sessionStorage.getItem("token"));
// }

// export function isAuthenticated() {
//   // console.log("is auth", isUserAuthenticated);
//   return (isUserAuthenticated = !!sessionStorage.getItem("token"));
// }
// export { isUserAuthenticated };
