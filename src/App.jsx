
import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";


// Lazy Imports for Better Performance
const Login = lazy(() => import("./components/public/Login"));
const Register = lazy(() => import("./components/public/Register"));
const Dashboard = lazy(() => import("./components/private/dashboard/Dashboard"));
const Layout = lazy(() => import("./components/private/Layout"));
const ViewProduct = lazy(() => import("./components/private/Products/ViewProduct"));
const AddProduct = lazy(() => import("./components/private/Products/AddProduct"));
const PublicDashboard = lazy(() => import("./components/public/PublicDashboard"));
const EditProduct = lazy(() => import("./components/private/Products/EditProduct"));
const Users = lazy(() => import("./components/private/Users/Users"));
const PublicNavbar = lazy(() => import("./components/common/customer/PublicNavbar"));
const AllGadgets = lazy(() => import("./components/public/AllGadgets"));
const About = lazy(() => import("./components/public/About"));
const Contact = lazy(() => import("./components/public/Contact"));

// ✅ Custom Loader Component
const Loader = () => (
  <div className="h-screen flex justify-center items-center text-purple-700 text-lg font-semibold">
    Loading BorrowBox...
  </div>
);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Check if the user is an admin (Using localStorage)
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin") === "true"; // Read from storage
    setIsAdmin(adminStatus);
  }, []);

  // ✅ Define Public Routes
  const publicRoutes = [
    { path: "/login", element: <Suspense fallback={<Loader />}><Login /></Suspense> },
    { path: "/", element: <Suspense fallback={<Loader />}><Register /></Suspense> },
    { path: "/register", element: <Suspense fallback={<Loader />}><Register /></Suspense> },
    { path: "/dashboard", element: <Suspense fallback={<Loader />}><PublicDashboard /></Suspense> },
    { path: "/all-gadgets", element: <Suspense fallback={<Loader />}><AllGadgets /></Suspense> },
    { path: "/about", element: <Suspense fallback={<Loader />}><About /></Suspense> },
    { path: "/contact", element: <Suspense fallback={<Loader />}><Contact /></Suspense> },
    { path: "*", element: <div className="text-center text-2xl font-bold text-red-600 mt-20">404: Page Not Found</div> },
  ];

  // ✅ Define Private Routes (For Admin)
  const privateRoutes = [
    {
      path: "/admin",
      element: isAdmin ? (
        <Suspense fallback={<Loader />}><Layout /></Suspense>
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        { path: "dashboard", element: isAdmin ? <Suspense fallback={<Loader />}><Dashboard /></Suspense> : <Navigate to="/login" replace /> },
        { path: "products/view-products", element: isAdmin ? <Suspense fallback={<Loader />}><ViewProduct /></Suspense> : <Navigate to="/login" replace /> },
        { path: "products/add-products", element: isAdmin ? <Suspense fallback={<Loader />}><AddProduct /></Suspense> : <Navigate to="/login" replace /> },
        { path: "users", element: isAdmin ? <Suspense fallback={<Loader />}><Users /></Suspense> : <Navigate to="/login" replace /> },
        { path: "products/edit-products/:productId", element: isAdmin ? <Suspense fallback={<Loader />}><EditProduct /></Suspense> : <Navigate to="/login" replace /> },
      ],
    },
  ];


  const routes = isAdmin ? privateRoutes : publicRoutes;

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;


