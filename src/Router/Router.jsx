import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import CofeeUpdate from "../Pages/Coffee/CofeeUpdate";
import Coffee from "../Pages/Coffee/Coffee";
import CoffeeAdd from "../Pages/Coffee/CoffeeAdd";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                loader: ()=>fetch('http://localhost:8080/coffee'),
                element: <Home></Home>
            },
            {
                path: '/coffee-add',
                element: <CoffeeAdd></CoffeeAdd>
            },
            {
                path: '/coffee/:id',
                loader: ({params})=>fetch(`http://localhost:8080/coffee/${params.id}`),
                element: <Coffee></Coffee>
            },
            {
                path: '/coffee-edit/:id',
                loader: ({params})=>fetch(`http://localhost:8080/coffee/${params.id}`),
                element: <CofeeUpdate></CofeeUpdate>
            },
        ]
    }
])

export default Router;