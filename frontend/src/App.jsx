import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/HomePage";
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
        { path: "/", element: <Homepage /> },
        { path: "/details/:slug", element: <ProductDetails /> },
        { path: "/profile", element: <UserProfile /> },
        { path: "/admin", element: <Admin /> },
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
    </CartProvider>
  );
}

export default App;
