import React, { useState } from "react";
import { FaClock, FaPiggyBank, FaShieldAlt } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />

      {/* Notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition transform animate-bounce">
          {notification}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-24 px-6 md:px-20 text-center">
        <h1 className="text-6xl font-extrabold leading-tight animate-fade-in">
          <Typewriter
            options={{
              strings: ["Experience Premium Gadget Rentals", "Rent the Latest Tech Effortlessly"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="mt-4 text-xl opacity-90 max-w-3xl mx-auto">
          Explore BorrowBox's premium gadget rental service. Get access to the latest gadgets at an affordable price.
        </p>
        <button
          className="mt-6 bg-orange-500 text-white py-4 px-10 rounded-lg font-semibold text-lg shadow-md hover:bg-orange-600 transition transform hover:scale-105"
          onClick={() => navigate("/all-gadgets")}
        >
          Explore Gadgets
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
          <FaClock size={60} className="mx-auto text-purple-700" />
          <h3 className="mt-4 text-2xl font-bold">24/7 Availability</h3>
          <p className="text-gray-500 mt-2">Rent anytime, anywhere with our seamless booking system.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
          <FaShieldAlt size={60} className="mx-auto text-purple-700" />
          <h3 className="mt-4 text-2xl font-bold">100% Secure</h3>
          <p className="text-gray-500 mt-2">Your transactions and rentals are protected with top security.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
          <FaPiggyBank size={60} className="mx-auto text-purple-700" />
          <h3 className="mt-4 text-2xl font-bold">Affordable Pricing</h3>
          <p className="text-gray-500 mt-2">Rent premium gadgets at the lowest rental prices.</p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-5xl font-extrabold mb-8 text-gray-800 text-center">🔥 Hot Deals from BorrowBox</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-110 hover:shadow-2xl flex flex-col items-center text-center">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-3xl font-bold">{product.name}</h3>
              <p className="text-purple-700 text-lg font-semibold mt-2">NPR {product.price}/day</p>

              {/* Buttons */}
              <div className="mt-4 flex flex-col space-y-2 w-full">
                <button
                  className="bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-600 transition w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-300 transition w-full">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-purple-800 to-indigo-700 text-white">
        <h2 className="text-4xl font-extrabold mb-4">Your Trusted Gadget Rental Platform</h2>
        <p className="text-lg opacity-80">Experience a seamless and affordable way to rent high-end gadgets.</p>
      </footer>

      {/* Floating CTA Button */}
      <button
        className="fixed bottom-10 right-10 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition transform hover:scale-110"
        onClick={() => navigate("/all-gadgets")}
      >
        Browse Deals
      </button>
    </div>
    
  );
};

export default PublicDashboard;


