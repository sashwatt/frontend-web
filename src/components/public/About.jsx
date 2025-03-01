import { motion } from "framer-motion";
import React from "react";
import { FaAward, FaRocket, FaUsers } from "react-icons/fa";
import PublicNavbar from "../common/customer/PublicNavbar";

const About = () => {
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
        <h2 className="text-3xl font-bold">About BorrowBox</h2>
        <p className="mt-2 text-sm opacity-90 max-w-lg mx-auto">
          BorrowBox is your go-to platform for renting high-end gadgets without breaking the bank. 
          Our mission is to make technology more **accessible and affordable**.
        </p>
      </motion.section>

      {/* Core Features */}
      <motion.section 
        className="py-10 px-6 md:px-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <FaUsers size={30} className="text-purple-600 mx-auto mb-2" />, title: "Community Driven", desc: "We connect gadget lovers through a seamless rental experience." },
            { icon: <FaRocket size={30} className="text-purple-600 mx-auto mb-2" />, title: "Fast & Secure", desc: "Hassle-free transactions with secure payments and verified users." },
            { icon: <FaAward size={30} className="text-purple-600 mx-auto mb-2" />, title: "Premium Quality", desc: "Only top-quality, well-maintained gadgets for your best experience." },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-4 rounded-md shadow-md transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              {feature.icon}
              <h4 className="text-lg font-medium">{feature.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-10 bg-purple-700 text-white text-center px-6 md:px-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold">Join BorrowBox Today!</h3>
        <p className="mt-2 text-sm opacity-90 max-w-md mx-auto">
          Experience the future of gadget rentals. Sign up and start exploring.
        </p>
        <motion.button 
          className="mt-4 bg-orange-500 py-2 px-5 rounded-md font-medium text-sm hover:bg-orange-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default About;

