import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Homepage, { HomepageLoader } from "./components/Homepage/HomePage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import UserProfile from "./components/UserProfile/UserProfile";
import Admin from "./components/Admin/Admin";
import CartProvider from "./store/CartProvider";
import Register from "./components/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage />, loader: HomepageLoader},
        { path: "/details/:slug", element: <ProductDetails /> },
        {
          path: "/profile",
          element: <UserProfile />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
