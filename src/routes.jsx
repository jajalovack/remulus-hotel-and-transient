import Home from "./views/Home/index";
import About from "./views/About/index";
import HotelList from "./views/HotelList/index";
import HotelDetails from "./views/HotelDetails/index";
import NotExist from "./views/NotExist";
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
    path: "/rooms",
    element: <HotelList />,
  },
  {
    path: "/rooms/:id",
    element: <HotelDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotExist errorType="noDir" />,
  },
];

export default routes;
