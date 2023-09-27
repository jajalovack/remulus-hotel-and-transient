import Home from "./views/Home/index";
import About from "./views/About/index";
import HotelList from "./views/HotelList/index";
import Login from "./views/LogIn/Login";
import Register from "./views/Register/Register";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/book",
    element: <HotelList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default routes;
