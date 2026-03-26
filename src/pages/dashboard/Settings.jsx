import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../firebase";

function Settings() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [profileForm, setProfileForm] = useState({
    displayName: "",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    dashboardAlerts: true,
    darkCards: false,
    compactMode: false,
  });

  const [savingProfile, setSavingProfile] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        setProfileForm({
          displayName: currentUser.displayName || "",
        });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!auth.currentUser) {
      setMessage("No authenticated user found.");
      return;
    }

    try {
      setSavingProfile(true);

      await updateProfile(auth.currentUser, {
        displayName: profileForm.displayName,
      });

      setUser({ ...auth.currentUser });
      setMessage("Profile updated successfully.");
    } catch (error) {
      console.log("PROFILE UPDATE ERROR:", error);
      setMessage(error.message || "Failed to update profile.");
    } finally {
      setSavingProfile(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin-login-2025");
    } catch (error) {
      console.log("LOGOUT ERROR:", error);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl border shadow-sm p-8">
        <p className="text-gray-500">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-[#fff7ed] p-1 rounded-[32px]">
      <div className="rounded-[32px] bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#7f1d1d] text-white p-8 shadow-[0_20px_60px_rgba(17,24,39,0.35)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-3">
              Admin Control Center
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Settings & Preferences
            </h1>
            <p className="text-white/80 max-w-2xl leading-7">
              Manage your profile, security controls, dashboard behavior, and
              account actions from one professional settings panel.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 min-w-[280px]">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-sm text-white/70">Account Status</p>
              <h3 className="text-2xl font-bold mt-1">Active</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-sm text-white/70">Role</p>
              <h3 className="text-2xl font-bold mt-1">Admin</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-4">
              {(user?.email?.charAt(0) || "A").toUpperCase()}
            </div>

            <h2 className="text-2xl font-bold text-[#111827]">
              {user?.displayName || "Administrator"}
            </h2>

            <p className="text-gray-500 mt-2 break-all">{user?.email || "No email"}</p>

            <div className="mt-5 w-full">
              <div className="rounded-2xl bg-[#f9fafb] border p-4 text-left">
                <p className="text-sm text-gray-500 mb-2">User UID</p>
                <p className="text-xs text-gray-700 break-all">
                  {user?.uid || "-"}
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-3 w-full">
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-2xl transition shadow-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#111827]">Profile Settings</h2>
              <p className="text-gray-500 text-sm mt-1">
                Update your display information and account profile.
              </p>
            </div>

            <form onSubmit={handleSaveProfile} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  value={profileForm.displayName}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, displayName: e.target.value })
                  }
                  className="w-full border rounded-2xl px-4 py-3 outline-none bg-white"
                  placeholder="Enter admin display name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  value={user?.email || ""}
                  disabled
                  className="w-full border rounded-2xl px-4 py-3 outline-none bg-gray-50 text-gray-400"
                />
              </div>

              <div className="md:col-span-2 flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={savingProfile}
                  className="bg-[#111827] hover:bg-black text-white px-6 py-3 rounded-2xl transition shadow-md"
                >
                  {savingProfile ? "Saving..." : "Save Changes"}
                </button>

                {message && (
                  <p className="text-sm text-green-600">{message}</p>
                )}
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
              <h3 className="text-xl font-bold text-[#111827] mb-4">
                Security Controls
              </h3>

              <div className="space-y-4">
                <div className="rounded-2xl border p-4 bg-[#fafafa]">
                  <p className="font-medium text-[#111827]">Authentication</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Protected by Firebase Authentication.
                  </p>
                </div>

                <div className="rounded-2xl border p-4 bg-[#fafafa]">
                  <p className="font-medium text-[#111827]">Session Status</p>
                  <p className="text-sm text-green-600 mt-1">Authenticated and active</p>
                </div>

                <div className="rounded-2xl border p-4 bg-[#fafafa]">
                  <p className="font-medium text-[#111827]">Password Reset</p>
                  <button
                    onClick={() => navigate("/forgot-password-2025")}
                    className="mt-3 bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm hover:bg-red-100 transition"
                  >
                    Open Password Recovery
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
              <h3 className="text-xl font-bold text-[#111827] mb-4">
                Dashboard Preferences
              </h3>

              <div className="space-y-4">
                <label className="flex items-center justify-between rounded-2xl border p-4 cursor-pointer">
                  <div>
                    <p className="font-medium text-[#111827]">Email Notifications</p>
                    <p className="text-sm text-gray-500">
                      Receive dashboard-related updates.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.emailNotifications}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        emailNotifications: e.target.checked,
                      })
                    }
                    className="w-5 h-5 accent-red-600"
                  />
                </label>

                <label className="flex items-center justify-between rounded-2xl border p-4 cursor-pointer">
                  <div>
                    <p className="font-medium text-[#111827]">Dashboard Alerts</p>
                    <p className="text-sm text-gray-500">
                      Show important admin alerts on the dashboard.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.dashboardAlerts}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        dashboardAlerts: e.target.checked,
                      })
                    }
                    className="w-5 h-5 accent-red-600"
                  />
                </label>

                <label className="flex items-center justify-between rounded-2xl border p-4 cursor-pointer">
                  <div>
                    <p className="font-medium text-[#111827]">Dark Cards Mode</p>
                    <p className="text-sm text-gray-500">
                      Enable deeper card styling.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.darkCards}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        darkCards: e.target.checked,
                      })
                    }
                    className="w-5 h-5 accent-red-600"
                  />
                </label>

                <label className="flex items-center justify-between rounded-2xl border p-4 cursor-pointer">
                  <div>
                    <p className="font-medium text-[#111827]">Compact Mode</p>
                    <p className="text-sm text-gray-500">
                      Reduce spacing across dashboard sections.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.compactMode}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        compactMode: e.target.checked,
                      })
                    }
                    className="w-5 h-5 accent-red-600"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#111827]">Quick Admin Actions</h3>
              <p className="text-sm text-gray-500 mt-1">
                Jump quickly to important dashboard sections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => navigate("/dashboard/messages")}
                className="rounded-2xl border p-5 text-left hover:shadow-md hover:border-red-200 transition bg-white"
              >
                <p className="text-lg font-semibold text-[#111827]">Messages</p>
                <p className="text-sm text-gray-500 mt-1">
                  Review latest website inquiries.
                </p>
              </button>

              <button
                onClick={() => navigate("/dashboard/analytics")}
                className="rounded-2xl border p-5 text-left hover:shadow-md hover:border-red-200 transition bg-white"
              >
                <p className="text-lg font-semibold text-[#111827]">Analytics</p>
                <p className="text-sm text-gray-500 mt-1">
                  Monitor performance and trends.
                </p>
              </button>

              <button
                onClick={() => navigate("/dashboard/users")}
                className="rounded-2xl border p-5 text-left hover:shadow-md hover:border-red-200 transition bg-white"
              >
                <p className="text-lg font-semibold text-[#111827]">Users</p>
                <p className="text-sm text-gray-500 mt-1">
                  Manage admin and user accounts.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;