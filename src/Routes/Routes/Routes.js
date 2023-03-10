import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Blog from "../../Pages/Blog/Blog";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import NewAddedProducts from "../../Pages/NewAddedProducts/NewAddedProducts";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Signup from "../../Pages/Signup/Signup";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
 


const { createBrowserRouter } = require("react-router-dom");

const router =createBrowserRouter([
    {
        path: '/',
        errorElement: <DisplayError></DisplayError>,
        element: <Main></Main>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/category/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://y-orpin-psi.vercel.app/category/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog> 
            },
            
            
        ]
    },
    {
        path: '/dashboard',
         element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
         errorElement:<DisplayError></DisplayError>,
         children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><NewAddedProducts></NewAddedProducts></SellerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

            },
            {
                path:'/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>

            },
            {
                path:'/dashboard/sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>

            }
            
            
         ]
     }
])
export default router;