import { createBrowserRouter } from "react-router-dom";

// import Login from "@/pages/Login";
// import NotFound from "@/pages/NotFound";

// import Products from "@/pages/Products";
// import Checkout from "@/pages/Checkout";
// import Signup from "@/pages/Signup";
// import ProductDetails from "@/pages/ProductDetails";
import App from "../App";
import HomeOne from "../pages/HomeOne";
import HomeTwo from "../pages/HomeTwo";
import HomeThree from "../pages/HomeThree";
import HomeFour from "../pages/HomeFour";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeOne />,
      },
      {
        path: "/homeTwo",
        element: <HomeTwo />,
      },
      {
        path: "/homeThree",
        element: <HomeThree />,
      },
      {
        path: "/HomeFour",
        element: <HomeFour />,
      },
      // {
      //   path: "/product-details/:id",
      //   element: <ProductDetails />,
      // },
      // {
      //   path: "/checkout",
      //   element: <Checkout />,
      // },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

export default routes;
