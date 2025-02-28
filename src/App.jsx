
import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = lazy(() => import("./components/public/Login"));
const Register = lazy(() => import("./components/public/Register"));
const PublicDashboard = lazy(() => import("./components/public/PublicDashboard"));
const PublicNavbar = lazy(() => import("./components/common/customer/PublicNavbar"));
const AllGadgets = lazy(() => import("./components/public/AllGadgets"));
const About = lazy(() => import("./components/public/About"));
const Contact = lazy(() => import("./components/public/Contact"));
const CartPage = lazy(() => import("./components/public/CartPage"));

const Loader = () => (
  <div className="h-screen flex justify-center items-center text-purple-700 text-lg font-semibold">
    Loading BorrowBox...
  </div>
);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);
  }, []);

  const publicRoutes = [
    { path: "/login", element: <Suspense fallback={<Loader />}><Login /></Suspense> },
    { path: "/", element: <Suspense fallback={<Loader />}><Register /></Suspense> },
    { path: "/register", element: <Suspense fallback={<Loader />}><Register /></Suspense> },
    { path: "/dashboard", element: <Suspense fallback={<Loader />}><PublicDashboard /></Suspense> },
    { path: "/all-gadgets", element: <Suspense fallback={<Loader />}><AllGadgets /></Suspense> },
    { path: "/about", element: <Suspense fallback={<Loader />}><About /></Suspense> },
    { path: "/contact", element: <Suspense fallback={<Loader />}><Contact /></Suspense> },
    { path: "/cart", element: <Suspense fallback={<Loader />}><CartPage /></Suspense> },
    { path: "*", element: <div className="text-center text-2xl font-bold text-red-600 mt-20">404: Page Not Found</div> },
  ];

  const router = createBrowserRouter(publicRoutes);

  return <RouterProvider router={router} />;
}

export default App;
