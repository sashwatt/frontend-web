import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCreditCard, FaMoneyBillWave, FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setNotification("Item removed from cart!");
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCashOnDelivery = (id) => {
    alert("Order placed with Cash on Delivery!");
    removeFromCart(id);
  };

  const handlePayNow = () => {
    alert("Redirecting to payment gateway...");
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fancy Navbar Section */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaShoppingCart className="text-yellow-400" /> Your Cart
        </h1>
        <p className="mt-2 text-sm opacity-90">Review and checkout your selected gadgets.</p>
      </div>

      {/* Notification */}
      {notification && (
        <motion.div
          className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md z-50 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {notification}
        </motion.div>
      )}

      {/* Cart Section */}
      <div className="container mx-auto p-6">
        {cartItems.length === 0 ? (
          <motion.div 
            className="text-center text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
            <p>Explore our gadgets and add them to your cart.</p>
            <Link to="/all-gadgets" className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Browse Gadgets
            </Link>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                className="bg-white p-5 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mx-auto mb-3 rounded-lg" />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">Rs {item.price}/day</p>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-center gap-2">
                  <button 
                    className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash /> Remove
                  </button>
                  <button 
                    className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
                    onClick={handlePayNow}
                  >
                    <FaCreditCard /> Pay Now
                  </button>
                  <button 
                    className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={() => handleCashOnDelivery(item.id)}
                  >
                    <FaMoneyBillWave /> Cash on Delivery
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Footer Section */}
      <motion.footer 
        className="py-10 text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold">Secure & Fast Gadget Rentals</h2>
        <p className="text-xs opacity-80">Enjoy seamless checkout and secure transactions with BorrowBox.</p>
      </motion.footer>

      <section className="py-6 bg-gray-100 text-center">
        <p className="text-xs text-gray-600">© 2025 BorrowBox. All rights reserved.</p>
      </section>
    </motion.div>
  );
};

export default CartPage;