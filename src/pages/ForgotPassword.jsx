import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent successfully.");
    } catch (err) {
      setError("Failed to send reset email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-[#b30000] mb-6">
          Forgot Password
        </h1>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-red-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-3 transition"
          >
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="text-green-600 text-sm mt-4 text-center">{message}</p>
        )}

        {error && (
          <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
        )}

        <div className="text-center mt-6">
          <Link
            to="/admin-login-2025"
            className="text-sm text-gray-600 hover:text-red-600"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;