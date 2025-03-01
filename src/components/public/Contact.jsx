import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import PublicNavbar from "../common/customer/PublicNavbar";

const Contact = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <PublicNavbar />

      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-14 text-center px-6 md:px-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">Contact BorrowBox</h2>
        <p className="mt-2 text-sm opacity-90 max-w-lg mx-auto">
          Need help? Have questions? Reach out to us. Our team is ready to assist you!
        </p>
      </motion.section>

      {/* Contact Information */}
      <motion.section 
        className="py-10 px-6 md:px-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">How to Reach Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <FaEnvelope size={30} className="text-purple-600 mx-auto mb-2" />, title: "Email Us", desc: "support@borrowbox.com" },
            { icon: <FaPhone size={30} className="text-purple-600 mx-auto mb-2" />, title: "Call Us", desc: "+123 456 7890" },
            { icon: <FaMapMarkerAlt size={30} className="text-purple-600 mx-auto mb-2" />, title: "Visit Us", desc: "123 BorrowBox Street, TechCity" },
          ].map((info, index) => (
            <motion.div 
              key={index}
              className="bg-white p-4 rounded-md shadow-md transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              {info.icon}
              <h4 className="text-lg font-medium">{info.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{info.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="py-10 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
        <motion.form 
          className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-3 border rounded-md text-sm focus:ring focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-3 border rounded-md text-sm focus:ring focus:ring-purple-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 mb-3 border rounded-md text-sm focus:ring focus:ring-purple-400"
          />
          <motion.button 
            className="bg-orange-500 text-white py-2 px-5 rounded-md font-medium text-sm hover:bg-orange-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-10 bg-purple-700 text-white text-center px-6 md:px-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h3 className="text-2xl font-semibold">Let's Connect!</h3>
        <p className="mt-2 text-sm opacity-90 max-w-md mx-auto">
          Whether you have questions, feedback, or partnership opportunities, we're here for you.
        </p>
        <motion.button 
          className="mt-4 bg-orange-500 py-2 px-5 rounded-md font-medium text-sm hover:bg-orange-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.section>

      {/* Footer */}
      <section className="py-6 bg-gray-100 text-center">
        <p className="text-xs text-gray-600">© 2025 BorrowBox. All rights reserved.</p>
      </section>
    </motion.div>
  );
};

export default Contact;

