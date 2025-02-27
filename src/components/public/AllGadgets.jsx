
import { motion } from "framer-motion";
import React, { useState } from "react";
import PublicNavbar from "../common/customer/PublicNavbar";

const AllGadgets = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Gadgets");

  const categories = ["All Gadgets", "Playstation", "Laptops", "Phones", "Cameras", "TVs"];

  const products = [
    { id: 1, name: "Sony Camera", category: "Cameras", price: 2500, image: "/images/camera.png", features: ["Automatic", "HD", "Lightweight"] },
    { id: 2, name: "Nikon Camera", category: "Cameras", price: 5000, image: "/images/camera.png", features: ["Manual", "4K", "Internal SSD"] },
    { id: 3, name: "Sony Camera Pro", category: "Cameras", price: 4500, image: "/images/camera.png", features: ["Automatic", "8K", "Stabilizer"] },
    { id: 4, name: "PS5 Pro", category: "Playstation", price: 4000, image: "/images/ps5.png", features: ["VR Ready", "4K HDR"] },
    { id: 5, name: "PS5 Slim", category: "Playstation", price: 3500, image: "/images/ps5.png", features: ["Compact", "Energy Efficient"] },
    { id: 6, name: "PS5", category: "Playstation", price: 5000, image: "/images/ps5.png", features: ["Exclusive Games", "Fast SSD"] },
    { id: 7, name: "ASUS Laptop", category: "Laptops", price: 5000, image: "/images/laptop.png", features: ["Touchscreen", "Intel i7", "16GB RAM"] },
    { id: 8, name: "ASUS Pro", category: "Laptops", price: 6000, image: "/images/laptop.png", features: ["4K Display", "RTX 3060"] },
    { id: 9, name: "ASUS Ultra", category: "Laptops", price: 7000, image: "/images/laptop.png", features: ["OLED Screen", "32GB RAM", "Thunderbolt"] },
  ];

  const filteredProducts = selectedCategory === "All Gadgets"
    ? products
    : products.filter((product) => product.category === selectedCategory);

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
        className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-20 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold">Discover & Rent the Best Gadgets</h1>
        <p className="mt-2 text-sm opacity-90 max-w-md mx-auto">
          Explore high-quality gadgets for rent at unbeatable prices. Choose your category and start renting today!
        </p>
      </motion.section>

      {/* Category Selection */}
      <motion.section 
        className="py-8 px-6 md:px-20 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Choose a Gadget Category</h2>
        <div className="flex justify-center space-x-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm font-medium transition transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section 
        className="py-10 px-6 md:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">🔥 Featured Gadgets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className="bg-white p-4 rounded-md shadow-md text-center transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto mb-3" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-purple-600 font-medium">NPR {product.price}/day</p>

              {/* View Details Button */}
              <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md text-sm hover:bg-orange-600 transition transform hover:scale-105">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-10 px-6 md:px-20 text-center bg-gradient-to-r from-purple-800 to-indigo-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold">Your Trusted Gadget Rental Platform</h2>
        <p className="text-xs opacity-80 mt-1">Experience a seamless and affordable way to rent high-end gadgets.</p>
      </motion.footer>
    </motion.div>
  );
};

export default AllGadgets;
