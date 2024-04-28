import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/LoginPage.tsx";
import Register from "./pages/RegisterPage.tsx";
import { Profile } from "./pages/ProfilePage.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/cadastro", element: <Register /> },
  { path: "/home", element: <Profile /> },
  { path: "*", element: <Navigate to="/cadastro" /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
