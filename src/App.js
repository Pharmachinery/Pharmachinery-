import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";

// Website Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Innovative from "./pages/Innovative";
import Partners from "./pages/Partners";
import Projects from "./pages/Projects";
import Newpage from "./pages/Newpage";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

// Hidden Admin Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";

// Dashboard Inner Pages
import Overview from "./pages/dashboard/Overview";
import Messages from "./pages/dashboard/Messages";
import Users from "./pages/dashboard/Users";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/admin-login-2025" ||
    location.pathname === "/forgot-password-2025" ||
    location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <AnnouncementBar />}
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Website */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/innovative" element={<Innovative />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/odf" element={<Newpage />} />
        <Route path="/services" element={<Services />} />

        {/* Hidden Admin */}
        <Route path="/admin-login-2025" element={<Login />} />
        <Route path="/forgot-password-2025" element={<ForgotPassword />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="messages" element={<Messages />} />
          <Route path="users" element={<Users />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;