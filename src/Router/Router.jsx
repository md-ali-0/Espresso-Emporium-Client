import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CoffeeAdd from "../Pages/Coffee/CoffeeAdd";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/coffee-add',
                element: <CoffeeAdd></CoffeeAdd>
            }
        ]
    }
])

export default Router;