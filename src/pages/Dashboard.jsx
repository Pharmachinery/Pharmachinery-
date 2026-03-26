import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import PageHead from '../components/PageHead';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin-login-2025");
    } catch (error) {
      console.log(error);
    }
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-lg font-medium transition ${
      isActive
        ? "bg-red-600 text-white"
        : "hover:bg-white/10 text-white"
    }`;

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex">
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#111827] text-white min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-8 text-red-500"> Pharmachinery Dashboard</h2>

        <nav className="space-y-3">
          <NavLink to="/dashboard" end className={linkClass}>
            Overview
          </NavLink>

          <NavLink to="/dashboard/messages" className={linkClass}>
            Messages
          </NavLink>

          <NavLink to="/dashboard/users" className={linkClass}>
            Users
          </NavLink>

          <NavLink to="/dashboard/analytics" className={linkClass}>
            Analytics
          </NavLink>

          <NavLink to="/dashboard/settings" className={linkClass}>
            Settings
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-medium"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#111827]">Pharmachinery Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Welcome back, manage your website from here.
            </p>
          </div>

          <div className="bg-white shadow-sm border rounded-xl px-4 py-3">
            <p className="text-sm text-gray-500">Logged in as</p>
            <p className="font-semibold text-[#111827]">
              {auth.currentUser?.email || "Admin"}
            </p>
          </div>
        </div>

        {/* هنا الصفحات الداخلية */}
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;