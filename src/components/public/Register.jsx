import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submits

  const { fName, email, password, termsAccepted } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    if (!termsAccepted) {
      alert("You must accept the Terms and Conditions.");
      return;
    }

    setIsSubmitting(true); // Disable further submissions

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        formData
      );
      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable submission
    }
  };

  useEffect(() => {
    return () => {
      setIsSubmitting(false); // Reset on component unmount
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left Side - Register Form */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
        {/* BorrowBox Icon */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/bbicon.png"
            alt="BorrowBox Icon"
            className="w-32 h-32 transform hover:scale-110 transition"
          />
        </div>

        <h2 className="text-5xl font-extrabold text-gray-800 text-center animate-fade-in">
          Join BorrowBox
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Create an account and start renting instantly!
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Floating Label Inputs */}
          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-gray-400 text-lg" />
            <input
              name="fName"
              type="text"
              value={fName}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none shadow-sm"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-gray-400 text-lg" />
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none shadow-sm"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-3 text-gray-400 text-lg" />
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none shadow-sm"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={termsAccepted}
              onChange={handleChange}
              className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="termsAccepted" className="ml-3 text-sm text-gray-600">
              I accept the{" "}
              <a href="#" className="text-purple-600 font-semibold hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Fancy Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-md text-lg font-semibold shadow-lg transition transform ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90 hover:scale-105"
            }`}
          >
            {isSubmitting ? "Processing..." : "Sign Up"}
          </button>
        </form>

        {/* Switch to Login */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>

      {/* Right Side - Graphics */}
      <div className="w-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center relative">
        <div className="text-center">
          <img
            src="/images/gadgets.png"
            alt="Gaming Concept"
            className="w-96 mx-auto transform hover:scale-105 transition"
          />
          <h3 className="text-white text-3xl font-semibold mt-6 animate-fade-in">
            Start Your Renting Journey Now
          </h3>
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

export default Register;
