import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import UsersList from "./features/users/UsersList";
import UserDetails from "./features/users/UserDetails";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              {" "}
              <UsersList />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path={`/users/:id`}
          element={
            <PrivateRoute>
              <UserDetails />{" "}
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
