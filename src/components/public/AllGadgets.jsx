// import React, { useState } from "react";
// import { FaCamera, FaGamepad, FaLaptop, FaMobileAlt, FaTv } from "react-icons/fa";
// import PublicNavbar from "../common/customer/PublicNavbar";

// const AllGadgets = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All Gadgets");

//   const categories = ["All Gadgets", "Playstation", "Laptops", "Phones", "Cameras", "TVs"];

//   const products = [
//     { id: 1, name: "Sony Camera", category: "Cameras", price: 2500, image: "/images/camera.png", features: ["Automatic", "HD", "Lightweight"] },
//     { id: 2, name: "Nikon Camera", category: "Cameras", price: 5000, image: "/images/camera.png", features: ["Manual", "4K", "Internal SSD"] },
//     { id: 3, name: "Sony Camera Pro", category: "Cameras", price: 4500, image: "/images/camera.png", features: ["Automatic", "8K", "Stabilizer"] },
//     { id: 4, name: "PS5 Pro", category: "Playstation", price: 4000, image: "/images/ps5.png", features: ["VR Ready", "4K HDR"] },
//     { id: 5, name: "PS5 Slim", category: "Playstation", price: 3500, image: "/images/ps5.png", features: ["Compact", "Energy Efficient"] },
//     { id: 6, name: "PS5", category: "Playstation", price: 5000, image: "/images/ps5.png", features: ["Exclusive Games", "Fast SSD"] },
//     { id: 7, name: "ASUS Laptop", category: "Laptops", price: 5000, image: "/images/laptop.png", features: ["Touchscreen", "Intel i7", "16GB RAM"] },
//     { id: 8, name: "ASUS Pro", category: "Laptops", price: 6000, image: "/images/laptop.png", features: ["4K Display", "RTX 3060"] },
//     { id: 9, name: "ASUS Ultra", category: "Laptops", price: 7000, image: "/images/laptop.png", features: ["OLED Screen", "32GB RAM", "Thunderbolt"] },
//   ];

//   const filteredProducts = selectedCategory === "All Gadgets"
//     ? products
//     : products.filter((product) => product.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <PublicNavbar />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-20 px-6 md:px-20 text-center">
//         <h1 className="text-5xl font-extrabold">Discover & Rent the Best Gadgets</h1>
//         <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
//           Explore high-quality gadgets for rent at the best prices. Choose your category and start renting today.
//         </p>
//       </section>

//       {/* Category Selection */}
//       <section className="py-8 px-6 md:px-20 text-center">
//         <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Select a Gadgets Group</h2>
//         <div className="flex justify-center space-x-4 flex-wrap">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
//                 selectedCategory === category
//                   ? "bg-orange-500 text-white shadow-md"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-12 px-6 md:px-20">
//         <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">Choose Your Gadget</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center text-center">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
//               <h3 className="text-2xl font-bold">{product.name}</h3>
//               <p className="text-purple-700 text-lg font-semibold mt-2">NPR {product.price}/day</p>

//               {/* Features */}
//               <div className="mt-2 text-gray-500 text-sm flex space-x-2 flex-wrap justify-center">
//                 {product.features.map((feature, index) => (
//                   <span key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded-md">
//                     {feature === "Automatic" && <FaGamepad className="mr-1" />}
//                     {feature === "Manual" && <FaLaptop className="mr-1" />}
//                     {feature === "PS5" && <FaGamepad className="mr-1" />}
//                     {feature === "Air Conditioner" && <FaTv className="mr-1" />}
//                     {feature}
//                   </span>
//                 ))}
//               </div>

//               {/* View Details Button */}
//               <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 transition">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Category Icons Footer */}
//       <section className="py-10 bg-gray-100 flex justify-center space-x-8">
//         <FaGamepad size={50} className="text-purple-700" />
//         <FaLaptop size={50} className="text-purple-700" />
//         <FaCamera size={50} className="text-purple-700" />
//         <FaMobileAlt size={50} className="text-purple-700" />
//         <FaTv size={50} className="text-purple-700" />
//       </section>

//       {/* Footer */}
//       <footer className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-purple-800 to-indigo-700 text-white">
//         <h2 className="text-4xl font-extrabold mb-4">Your Trusted Gadget Rental Platform</h2>
//         <p className="text-lg opacity-80">Experience a seamless and affordable way to rent high-end gadgets.</p>
//       </footer>
//     </div>
//   );
// };

// export default AllGadgets;

import React, { useState } from "react";
import { FaCamera, FaGamepad, FaLaptop, FaMobileAlt, FaTv } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-24 px-6 md:px-20 text-center">
        <h1 className="text-6xl font-extrabold animate-fade-in">Discover & Rent the Best Gadgets</h1>
        <p className="mt-4 text-xl opacity-90 max-w-3xl mx-auto">
          Explore high-quality gadgets for rent at unbeatable prices. Choose your category and start renting today!
        </p>
      </section>

      {/* Category Selection */}
      <section className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800"> Choose a Gadget Category</h2>
        <div className="flex justify-center space-x-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-5xl font-extrabold mb-8 text-gray-800 text-center"> Featured Gadgets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-110 hover:shadow-2xl flex flex-col items-center text-center">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-3xl font-bold">{product.name}</h3>
              <p className="text-purple-700 text-lg font-semibold mt-2">NPR {product.price}/day</p>

              {/* Features */}
              <div className="mt-3 text-gray-500 text-sm flex space-x-2 flex-wrap justify-center">
                {product.features.map((feature, index) => (
                  <span key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded-md shadow-sm">
                    {feature === "Automatic" && <FaGamepad className="mr-1 text-purple-600" />}
                    {feature === "Manual" && <FaLaptop className="mr-1 text-purple-600" />}
                    {feature === "VR Ready" && <FaGamepad className="mr-1 text-purple-600" />}
                    {feature === "4K" && <FaTv className="mr-1 text-purple-600" />}
                    {feature}
                  </span>
                ))}
              </div>

              {/* View Details Button */}
              <button className="mt-6 bg-orange-500 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-orange-600 transition transform hover:scale-105">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Category Icons Footer */}
      <section className="py-10 bg-gray-100 flex justify-center space-x-8">
        <FaGamepad size={50} className="text-purple-700 hover:scale-110 transition transform" />
        <FaLaptop size={50} className="text-purple-700 hover:scale-110 transition transform" />
        <FaCamera size={50} className="text-purple-700 hover:scale-110 transition transform" />
        <FaMobileAlt size={50} className="text-purple-700 hover:scale-110 transition transform" />
        <FaTv size={50} className="text-purple-700 hover:scale-110 transition transform" />
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-purple-800 to-indigo-700 text-white">
        <h2 className="text-4xl font-extrabold mb-4">Your Trusted Gadget Rental Platform</h2>
        <p className="text-lg opacity-80">Experience a seamless and affordable way to rent high-end gadgets.</p>
      </footer>
    </div>
  );
};

export default AllGadgets;
