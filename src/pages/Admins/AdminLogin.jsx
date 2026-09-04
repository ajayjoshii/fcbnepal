import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setError("");

        if (email !== "jajay@gmail.com" || password !== "admin") {
            setError("Invalid admin email or password");
            return;
        }

        // const token = btoa(`${email}:${password}`);
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzg4MTk1MDk0LCJpYXQiOjE3ODgxOTE0OTQsImp0aSI6ImU2YzJhYjBmY2Q4ODRkZjQ4MmZjYjRmNGU0MTI5MGE1IiwidXNlcl9pZCI6IjEifQ.Coame6l4JMja3dcKkJgi77ewQDnWrR4ITu1gii4fCHU"

        localStorage.setItem("adminToken", token);
        localStorage.setItem("adminEmail", email);
        localStorage.setItem("isAdmin", "true");

        navigate("/admin");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Admin Login
                    </h1>

                    <p className="text-gray-500 mt-2">
                        FCBC Nepal Administration
                    </p>
                </div>

                {error && (
                    <div className="mb-5 bg-red-100 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Admin email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Admin password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;