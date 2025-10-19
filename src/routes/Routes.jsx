import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import NewDetails from "../Pages/NewsDetails/NewDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: ()=> fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthenticationLayout></AuthenticationLayout>,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
        ]
    },
    {
        path: '/news-details/:id',
        element: <NewDetails></NewDetails>,
        loader: ()=> fetch('/news.json')
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>
    }

]);

export default router