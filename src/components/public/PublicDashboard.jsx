
// import { motion } from "framer-motion";
// import React, { useState } from "react";
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
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = [...existingCart, product];

//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     setNotification(`${product.name} added to cart!`);
//     setTimeout(() => {
//       setNotification(null);
//     }, 3000);
//   };

//   return (
//     <motion.div 
//       className="min-h-screen bg-gray-50 text-gray-800"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <PublicNavbar />

//       {notification && (
//         <motion.div
//           className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md z-50 text-sm"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.3 }}
//         >
//           {notification}
//         </motion.div>
//       )}

//       {/* Hero Section */}
//       <motion.section
//         className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16 px-4 text-center"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <h1 className="text-4xl font-bold">
//           <Typewriter
//             options={{
//               strings: ["Premium Gadget Rentals", "Rent Latest Tech Easily"],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </h1>
//         <p className="mt-2 text-sm opacity-90 max-w-md mx-auto">
//           Get access to the latest gadgets at an affordable price with BorrowBox.
//         </p>
//         <motion.button
//           className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md text-sm hover:bg-orange-600 transition"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/all-gadgets")}
//         >
//           Explore Gadgets
//         </motion.button>
//       </motion.section>

//       {/* Product Grid Section */}
//       <motion.section className="py-12 px-4">
//         <h2 className="text-3xl font-semibold mb-6 text-center">🔥 Hot Deals from BorrowBox</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               className="bg-white p-4 rounded-md shadow-md text-center hover:scale-105 transition duration-300"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
//             >
//               <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto mb-3" />
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-sm text-purple-600 font-medium">NPR {product.price}/day</p>
//               <motion.button
//                 className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md text-sm hover:bg-orange-600 transition"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//     </motion.div>
//   );
// };

// export default PublicDashboard;


import { motion } from "framer-motion";
import React, { useState } from "react";
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
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setNotification(`${product.name} added to cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PublicNavbar />

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

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16 px-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
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
        <motion.button
          className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md text-sm hover:bg-orange-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/all-gadgets")}
        >
          Explore Gadgets
        </motion.button>
      </motion.section>

      {/* Product Grid Section */}
      <motion.section className="py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">🔥 Hot Deals from BorrowBox</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white p-4 rounded-md shadow-md text-center hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto mb-3" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-purple-600 font-medium">NPR {product.price}/day</p>
              <motion.button
                className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-md text-sm hover:bg-orange-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer (Added Back) */}
      <motion.footer 
        className="py-10 text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold">BorrowBox – Rent Smarter</h2>
        <p className="text-xs opacity-80">Seamless gadget rentals at your fingertips.</p>
      </motion.footer>
      
    </motion.div>
  );
};

export default PublicDashboard;
