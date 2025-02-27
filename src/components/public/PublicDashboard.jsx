// import React, { useState } from "react";
// import { FaClock, FaPiggyBank, FaShieldAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Typewriter from "typewriter-effect";
// import PublicNavbar from "../common/customer/PublicNavbar";

// const PublicDashboard = () => {
//   const navigate = useNavigate();

//   const [products] = useState([
//     { id: 1, name: "PS5 Pro", price: 2500, image: "/images/ps5.png" },
//     { id: 2, name: "PS5 Slim", price: 2000, image: "/images/ps5.png" },
//     { id: 3, name: "PS5", price: 1000, image: "/images/ps5.png" },
//     { id: 4, name: "Sony Camera", price: 3000, image: "/images/camera.png" },
//     { id: 5, name: "Sony Camera Handheld", price: 2000, image: "/images/camera.png" },
//     { id: 6, name: "Sony Camera Pro", price: 5000, image: "/images/camera.png" },
//   ]);

//   const [notification, setNotification] = useState(null);

//   const handleAddToCart = (product) => {
//     setNotification(`${product.name} added to cart!`);
//     setTimeout(() => {
//       setNotification(null);
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <PublicNavbar />

//       {/* Notification */}
//       {notification && (
//         <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition transform animate-bounce">
//           {notification}
//         </div>
//       )}

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-24 px-6 md:px-20 text-center">
//         <h1 className="text-6xl font-extrabold leading-tight animate-fade-in">
//           <Typewriter
//             options={{
//               strings: ["Experience Premium Gadget Rentals", "Rent the Latest Tech Effortlessly"],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </h1>
//         <p className="mt-4 text-xl opacity-90 max-w-3xl mx-auto">
//           Explore BorrowBox's premium gadget rental service. Get access to the latest gadgets at an affordable price.
//         </p>
//         <button
//           className="mt-6 bg-orange-500 text-white py-4 px-10 rounded-lg font-semibold text-lg shadow-md hover:bg-orange-600 transition transform hover:scale-105"
//           onClick={() => navigate("/all-gadgets")}
//         >
//           Explore Gadgets
//         </button>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//         <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
//           <FaClock size={60} className="mx-auto text-purple-700" />
//           <h3 className="mt-4 text-2xl font-bold">24/7 Availability</h3>
//           <p className="text-gray-500 mt-2">Rent anytime, anywhere with our seamless booking system.</p>
//         </div>
//         <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
//           <FaShieldAlt size={60} className="mx-auto text-purple-700" />
//           <h3 className="mt-4 text-2xl font-bold">100% Secure</h3>
//           <p className="text-gray-500 mt-2">Your transactions and rentals are protected with top security.</p>
//         </div>
//         <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
//           <FaPiggyBank size={60} className="mx-auto text-purple-700" />
//           <h3 className="mt-4 text-2xl font-bold">Affordable Pricing</h3>
//           <p className="text-gray-500 mt-2">Rent premium gadgets at the lowest rental prices.</p>
//         </div>
//       </section>

//       {/* Product Grid Section */}
//       <section className="py-16 px-6 md:px-20">
//         <h2 className="text-5xl font-extrabold mb-8 text-gray-800 text-center">🔥 Hot Deals from BorrowBox</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-110 hover:shadow-2xl flex flex-col items-center text-center">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
//               <h3 className="text-3xl font-bold">{product.name}</h3>
//               <p className="text-purple-700 text-lg font-semibold mt-2">NPR {product.price}/day</p>

//               {/* Buttons */}
//               <div className="mt-4 flex flex-col space-y-2 w-full">
//                 <button
//                   className="bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 transition w-full"
//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//                 <button className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-300 transition w-full">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-purple-800 to-indigo-700 text-white">
//         <h2 className="text-4xl font-extrabold mb-4">Your Trusted Gadget Rental Platform</h2>
//         <p className="text-lg opacity-80">Experience a seamless and affordable way to rent high-end gadgets.</p>
//       </footer>

//       {/* Floating CTA Button */}
//       <button
//         className="fixed bottom-10 right-10 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition transform hover:scale-110"
//         onClick={() => navigate("/all-gadgets")}
//       >
//         Browse Deals
//       </button>
//     </div>
    
//   );
// };

// export default PublicDashboard;


import React, { useState } from "react";
import { FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaPiggyBank, FaShieldAlt, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import PublicNavbar from "../common/customer/PublicNavbar";

const PublicDashboard = () => {
  const navigate = useNavigate();

  const [products] = useState([
    { id: 1, name: "PS5 Pro", price: 2500, image: "/images/ps5.png" },
    { id: 2, name: "PS5 Slim", price: 2000, image: "/images/ps5.png" },
    { id: 3, name: "PS5", price: 1000, image: "/images/ps5.png" },
    { id: 4, name: "Sony Camera", price: 3000, image: "/images/camera.png" },
    { id: 5, name: "Sony Camera Handheld", price: 2000, image: "/images/camera.png" },
    { id: 6, name: "Sony Camera Pro", price: 5000, image: "/images/camera.png" },
  ]);

  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product) => {
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <PublicNavbar />

      {/* Notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md z-50 text-sm animate-slide-in">
          {notification}
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16 px-4 text-center animate-fade-in">
        <h1 className="text-4xl font-bold">
          <Typewriter
            options={{
              strings: ["Premium Gadget Rentals", "Rent Latest Tech Easily"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="mt-2 text-sm opacity-90 max-w-md mx-auto">
          Get access to the latest gadgets at an affordable price with BorrowBox.
        </p>
        <button
          className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md text-sm hover:bg-orange-600 transition transform hover:scale-105"
          onClick={() => navigate("/all-gadgets")}
        >
          Explore Gadgets
        </button>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-4 bg-white shadow-md rounded-md transform transition duration-300 hover:scale-105">
          <FaClock size={40} className="mx-auto text-purple-600" />
          <h3 className="mt-2 text-lg font-semibold">24/7 Availability</h3>
          <p className="text-xs text-gray-500">Rent anytime, anywhere.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md transform transition duration-300 hover:scale-105">
          <FaShieldAlt size={40} className="mx-auto text-purple-600" />
          <h3 className="mt-2 text-lg font-semibold">100% Secure</h3>
          <p className="text-xs text-gray-500">Your transactions are protected.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md transform transition duration-300 hover:scale-105">
          <FaPiggyBank size={40} className="mx-auto text-purple-600" />
          <h3 className="mt-2 text-lg font-semibold">Affordable Pricing</h3>
          <p className="text-xs text-gray-500">Rent premium gadgets affordably.</p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center animate-fade-in">🔥 Hot Deals from BorrowBox</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow-md text-center transform transition duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto mb-3 animate-fade-in" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-purple-600 font-medium">NPR {product.price}/day</p>
              <div className="mt-3 flex flex-col space-y-2">
                <button
                  className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm hover:bg-orange-600 transition transform hover:scale-105"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md text-xs hover:bg-gray-300 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean & Aesthetic Footer */}
      <footer className="py-10 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-center animate-fade-in">
        <h2 className="text-2xl font-semibold">BorrowBox – Rent Smarter</h2>
        <p className="text-xs opacity-80 mt-1">Seamless gadget rentals at your fingertips.</p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white hover:text-orange-400 transition transform hover:scale-110">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition transform hover:scale-110">
            <FaTwitter size={16} />
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition transform hover:scale-110">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition transform hover:scale-110">
            <FaLinkedinIn size={16} />
          </a>
        </div>

        <p className="text-xs opacity-60 mt-4">© 2025 BorrowBox. All rights reserved.</p>
      </footer>

      {/* Floating CTA Button */}
      <button
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700 transition transform hover:scale-110 animate-bounce"
        onClick={() => navigate("/all-gadgets")}
      >
        Browse Deals
      </button>
    </div>
  );
};

export default PublicDashboard;

