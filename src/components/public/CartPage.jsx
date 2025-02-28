import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update storage
  };

  const handleCashOnDelivery = (id) => {
    alert("Order placed with Cash on Delivery!");
    removeFromCart(id); // ✅ Remove only the selected item
  };

  const handlePayNow = () => {
    alert("Redirecting to payment gateway...");
    // You can replace this alert with actual payment logic (e.g., Stripe, PayPal, etc.)
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty. <Link to="/all-gadgets" className="text-blue-500">Browse Gadgets</Link>
        </p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">Rs {item.price}/day</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <button 
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  onClick={handlePayNow}
                >
                  Pay Now
                </button>
                <button 
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleCashOnDelivery(item.id)} // ✅ Only remove selected item
                >
                  Cash on Delivery
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
