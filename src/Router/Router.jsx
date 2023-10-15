import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import CofeeUpdate from "../Pages/Coffee/CofeeUpdate";
import Coffee from "../Pages/Coffee/Coffee";
import CoffeeAdd from "../Pages/Coffee/CoffeeAdd";
import Home from "../Pages/Home/Home";
import Users from "../Pages/Users/Users";

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
            {
                path: '/users',
                loader: ()=>fetch('http://localhost:8080/users'),
                element: <Users></Users>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;