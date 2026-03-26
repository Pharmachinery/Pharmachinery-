import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app, { db } from "../../firebase";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const auth = getAuth(app);
  const functions = getFunctions(app, "us-central1");
  const createUserFunction = httpsCallable(functions, "createUser");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("AUTH USER:", user);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, [auth]);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(data);
    } catch (error) {
      console.log("Fetch users error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();

    if (!authReady) {
      alert("Auth is still loading, try again");
      return;
    }

    if (!auth.currentUser) {
      alert("You must login first");
      return;
    }

    console.log("CURRENT USER:", auth.currentUser);

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setSubmitting(true);

      const result = await createUserFunction({
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
      });

      console.log("FUNCTION RESULT:", result);

      if (result.data.success) {
        alert("User created successfully");

        setForm({
          name: "",
          email: "",
          password: "",
          role: "user",
        });

        await fetchUsers();
      } else {
        alert(result.data.error || "Failed to create user");
      }
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("ERROR CODE:", error.code);
      console.log("ERROR MESSAGE:", error.message);
      console.log("ERROR DETAILS:", error.details);

      alert(error.details || error.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow border">
        <h2 className="text-2xl font-bold text-[#111827] mb-4">Add New User</h2>

        <form onSubmit={handleAddUser} className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-3 rounded-lg outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-3 rounded-lg outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border p-3 rounded-lg outline-none"
          />

          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="border p-3 rounded-lg outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            disabled={submitting}
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg md:col-span-2 transition"
          >
            {submitting ? "Creating..." : "Add User"}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#111827]">All Users</h2>
          <span className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium">
            Total: {users.length}
          </span>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-500 text-sm">
                  <th className="py-3">Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b">
                    <td className="py-3 font-medium text-[#111827]">
                      {u.name || "-"}
                    </td>
                    <td className="text-gray-700">{u.email || "-"}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          u.role === "admin"
                            ? "bg-green-50 text-green-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {u.role || "user"}
                      </span>
                    </td>
                    <td className="text-gray-500">
                      {u.createdAt?.seconds
                        ? new Date(u.createdAt.seconds * 1000).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;