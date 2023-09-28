import Home from "./views/Home/index";
import About from "./views/About/index";
import HotelList from "./views/HotelList/index";
import Login from "./views/LogIn/Login";
import Register from "./views/Register/Register";
import HotelDetails from "./views/HotelDetails/index";

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
];

export default routes;
