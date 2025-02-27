import { motion } from "framer-motion";
import React from "react";
import { FaAward, FaRocket, FaUsers } from "react-icons/fa";
import PublicNavbar from "../common/customer/PublicNavbar";

const About = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <PublicNavbar />

      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-20 text-center px-6 md:px-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-5xl font-extrabold">About BorrowBox</h2>
        <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
          BorrowBox is your go-to platform for renting high-end gadgets without breaking the bank. 
          Our mission is to make technology more <strong>accessible and affordable</strong>.
        </p>
      </motion.section>

      {/* Core Features */}
      <motion.section 
        className="py-16 px-6 md:px-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-3xl font-extrabold mb-8 text-gray-800">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <FaUsers size={50} className="text-purple-700 mx-auto mb-4" />, title: "Community Driven", desc: "We connect gadget lovers through a seamless rental experience." },
            { icon: <FaRocket size={50} className="text-purple-700 mx-auto mb-4" />, title: "Fast & Secure", desc: "Hassle-free transactions with secure payments and verified users." },
            { icon: <FaAward size={50} className="text-purple-700 mx-auto mb-4" />, title: "Premium Quality", desc: "Only top-quality, well-maintained gadgets for your best experience." },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              {feature.icon}
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-gray-500 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-purple-800 text-white text-center px-6 md:px-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-3xl font-extrabold">Join BorrowBox Today!</h3>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Experience the future of gadget rentals. Sign up and start exploring.
        </p>
        <motion.button 
          className="mt-6 bg-orange-500 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
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
