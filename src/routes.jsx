import Home from "./views/Home/index"
import About from "./views/About/index"
import HotelList from "./views/HotelList/index"
import HotelDetails from "./views/HotelDetails/index";

const routes=[
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/rooms",
        element: <HotelList/>
    },
    {
        path: "/rooms/:id",
        element: <HotelDetails/>
    }
];



export default routes;
