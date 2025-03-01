import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const Login = lazy(() => import("./components/public/Login"));
const Register = lazy(() => import("./components/public/Register"));
const Dashboard = lazy(() => import("./components/private/dashboard/Dashboard"));
const Layout = lazy(() => import("./components/private/Layout"));
const ViewProduct = lazy(() => import("./components/private/Products/ViewProduct"));
const AddProduct = lazy(() => import("./components/private/Products/AddProduct"));
const PublicDashboard = lazy(() => import("./components/public/PublicDashboard"));
const EditProduct = lazy(() => import("./components/private/Products/EditProduct"));
const Users = lazy(() => import("./components/private/Users/Users"));
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
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  // Detect changes in localStorage for real-time admin switch
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
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

  const privateRoutes = [
    {
      path: "/admin",
      element: isAdmin ? <Suspense fallback={<Loader />}><Layout /></Suspense> : <Navigate to="/login" replace />,
      children: [
        { path: "dashboard", element: isAdmin ? <Suspense fallback={<Loader />}><Dashboard /></Suspense> : <Navigate to="/login" replace /> },
        { path: "products/view-products", element: isAdmin ? <Suspense fallback={<Loader />}><ViewProduct /></Suspense> : <Navigate to="/login" replace /> },
        { path: "products/add-products", element: isAdmin ? <Suspense fallback={<Loader />}><AddProduct /></Suspense> : <Navigate to="/login" replace /> },
        { path: "users", element: isAdmin ? <Suspense fallback={<Loader />}><Users /></Suspense> : <Navigate to="/login" replace /> },
        { path: "products/edit-products/:productId", element: isAdmin ? <Suspense fallback={<Loader />}><EditProduct /></Suspense> : <Navigate to="/login" replace /> },
      ],
    },
  ];

  // Dynamically choose routes
  const routes = isAdmin ? privateRoutes : publicRoutes;
  const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

  return <RouterProvider router={router} />;
}

export default App;
