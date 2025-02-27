import React from "react";
import { FaAward, FaRocket, FaUsers } from "react-icons/fa";
import PublicNavbar from "../common/customer/PublicNavbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-20 text-center px-6 md:px-20">
        <h2 className="text-5xl font-extrabold">About BorrowBox</h2>
        <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
          BorrowBox is your go-to platform for renting high-end gadgets without breaking the bank. 
          Our mission is to make technology more **accessible and affordable**.
        </p>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-extrabold mb-8 text-gray-800">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <FaUsers size={50} className="text-purple-700 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Community Driven</h4>
            <p className="text-gray-500 mt-2">
              We connect gadget lovers through a seamless rental experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <FaRocket size={50} className="text-purple-700 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Fast & Secure</h4>
            <p className="text-gray-500 mt-2">
              Hassle-free transactions with secure payments and verified users.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <FaAward size={50} className="text-purple-700 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Premium Quality</h4>
            <p className="text-gray-500 mt-2">
              Only top-quality, well-maintained gadgets for your best experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-800 text-white text-center px-6 md:px-20">
        <h3 className="text-3xl font-extrabold">Join BorrowBox Today!</h3>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Experience the future of gadget rentals. Sign up and start exploring.
        </p>
        <button className="mt-6 bg-orange-500 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
