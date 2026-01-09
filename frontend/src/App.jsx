// frontend/src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Routes>
      {/* Layout Route - All pages will be wrapped with Layout */}
      <Route path="/" element={<Layout />}>
        {/* Index Route (Default Home Page) */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Admin Protected Route */}
        <Route
          path="admin/*"
          element={
            <PrivateRoute adminOnly>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* Future pages will go here */}
        {/* <Route path="videos" element={<Videos />} /> */}
        {/* <Route path="photos" element={<Photos />} /> */}
      </Route>

      {/* Not Found Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
