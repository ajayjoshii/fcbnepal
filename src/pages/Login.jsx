import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // YOUR ADMIN LOGIN DETAILS
  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD = "admin123";

  // YOUR EXISTING ACCESS TOKEN
  const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzg4MTk1MDk0LCJpYXQiOjE3ODgxOTE0OTQsImp0aSI6ImU2YzJhYjBmY2Q4ODRkZjQ4MmZjYjRmNGU0MTI5MGE1IiwidXNlcl9pZCI6IjEifQ.Coame6l4JMja3dcKkJgi77ewQDnWrR4ITu1gii4fCHU";

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Remove accidental spaces from email
    const enteredEmail = email.trim();

    if (
      enteredEmail === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      // Save your existing token
      localStorage.setItem("accessToken", ACCESS_TOKEN);

      // Save login status
      localStorage.setItem("adminLoggedIn", "true");

      // Go to admin dashboard
      navigate("/admin");
    } else {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
            <Lock className="text-white" size={30} />
          </div>

          <h1 className="text-3xl font-bold text-slate-800 mt-4">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Login to access the dashboard
          </p>

        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 border border-red-300 text-red-600 rounded-lg p-3 mb-5 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-3 top-3.5 text-gray-400"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

            </div>

          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
          >
            <LogIn size={20} />
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;