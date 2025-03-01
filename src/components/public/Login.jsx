import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white shadow-lg">
        {/* BorrowBox Icon */}
        <div className="flex justify-center mb-8">
          <img src="/images/bbicon.png" alt="BorrowBox Icon" className="w-32 h-32 transform hover:scale-110 transition" />
        </div>

        <h2 className="text-5xl font-extrabold text-gray-800 text-center animate-fade-in">Welcome Back!</h2>
        <p className="text-gray-500 text-center mb-6">Sign in to continue exploring gadgets.</p>

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Floating Label Inputs */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none shadow-sm"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-3 text-gray-400 text-lg" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none shadow-sm"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer" />
              Remember me
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Fancy Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-md text-lg font-semibold shadow-lg hover:opacity-90 transition transform hover:scale-105"
          >
            Login 
          </button>
        </form>

        {/* Switch to Register */}
        <p className="text-center text-gray-600 mt-4">
          New here?{" "}
          <a href="/register" className="text-purple-600 font-medium hover:underline">
            Create an account
          </a>
        </p>
      </div>

      {/* Right Side - Graphics */}
      <div className="w-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center relative">
        <div className="text-center">
          <img
            src="/images/gadgets.png"
            alt="Gadgets Concept"
            className="w-96 mx-auto transform hover:scale-105 transition"
          />
          <h3 className="text-white text-3xl font-semibold mt-6 animate-fade-in">Access the Best Gadgets Instantly</h3>
        </div>

        {/* Floating Call-to-Action */}
        <button
          className="absolute bottom-10 right-10 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition transform hover:scale-110"
          onClick={() => alert("Start exploring the latest gadgets!")}
        >
          🎮 Explore Now
        </button>
      </div>
    </div>
  );
};

export default Login;