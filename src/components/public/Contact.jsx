import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import PublicNavbar from "../common/customer/PublicNavbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-20 text-center px-6 md:px-20">
        <h2 className="text-5xl font-extrabold">Contact BorrowBox</h2>
        <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
          Need help? Have questions? Reach out to us. Our team is ready to assist you!
        </p>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-extrabold mb-8 text-gray-800">How to Reach Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <FaEnvelope size={50} className="text-purple-700 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Email Us</h4>
            <p className="text-gray-500 mt-2">support@borrowbox.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <FaPhone size={50} className="text-purple-700 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Call Us</h4>
            <p className="text-gray-500 mt-2">+123 456 7890</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <FaMapMarkerAlt size={50} className="text-purple-700 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Visit Us</h4>
            <p className="text-gray-500 mt-2">123 BorrowBox Street, TechCity</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-extrabold mb-8 text-gray-800">Send Us a Message</h3>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-md focus:ring focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-md focus:ring focus:ring-purple-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 mb-4 border rounded-md focus:ring focus:ring-purple-400"
          />
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-800 text-white text-center px-6 md:px-20">
        <h3 className="text-3xl font-extrabold">Let's Connect!</h3>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Whether you have questions, feedback, or partnership opportunities, we're here for you.
        </p>
        <button className="mt-6 bg-orange-500 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 transition">
          Get in Touch
        </button>
      </section>

      {/* Footer */}
      <section className="py-10 bg-gray-100 text-center">
        <p className="text-gray-600">© 2025 BorrowBox. All rights reserved.</p>
      </section>
    </div>
  );
};

export default Contact;
