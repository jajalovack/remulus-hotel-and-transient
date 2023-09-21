import Home from "./views/Home/index"
import About from "./views/About/index"

const routes=[
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
];

export default routes;
