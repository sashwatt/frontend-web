import React, { useEffect, useState } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const PublicNavbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    };

    window.addEventListener("storage", updateCart);
    return () => window.removeEventListener("storage", updateCart);
  }, []);

  const toggleCartDropdown = () => {
    setCartOpen(!cartOpen);
    setProfileOpen(false); // Close profile dropdown if open
  };

  const toggleProfileDropdown = () => {
    setProfileOpen(!profileOpen);
    setCartOpen(false); // Close cart dropdown if open
  };

  const handleLogout = () => {
    navigate("/login"); // ✅ Redirects to login page
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* BorrowBox Redirects to Public Dashboard */}
        <div 
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer transition"
          onClick={() => navigate("/dashboard")} // ✅ Redirect to Public Dashboard
        >
          BorrowBox
        </div>

        <div className="flex justify-center space-x-6">
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/all-gadgets" className="text-gray-700 hover:text-blue-600">All Gadgets</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          
          {/* Cart Button */}
          <div className="relative" onClick={toggleCartDropdown}>
            <FiShoppingCart size={24} className="text-gray-700 hover:text-blue-600 cursor-pointer" />

            {/* Cart Item Count Badge */}
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            )}

            {/* Cart Dropdown */}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border p-2">
                {cartItems.length > 0 ? (
                  <div className="max-h-64 overflow-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between px-4 py-2 border-b">
                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
                        <div className="ml-2">
                          <span className="font-semibold">{item.name}</span>
                          <span className="text-gray-500 block">Rs {item.price}/day</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-2 text-gray-700">Your cart is empty</div>
                )}
                <Link to="/cart" className="block px-4 py-2 bg-blue-500 text-white text-center mt-2 rounded">
                  View Cart ({cartItems.length})
                </Link>
              </div>
            )}
          </div>

          {/* Profile Button */}
          <div className="relative" onClick={toggleProfileDropdown}>
            <FiUser size={24} className="text-gray-700 hover:text-blue-600 cursor-pointer" />

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border p-2">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Profile
                </Link>
                <button 
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  onClick={handleLogout} // ✅ Redirects to Login
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;

