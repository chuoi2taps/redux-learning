import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductAdd from "../components/ProductAdd";
import { addProduct } from "../actions/product";
import List from "../pages/List";
import AdminLayout from "../pages/Layouts/AdminLayout";
import WebsiteLayout from "../pages/Layouts/WebappLayout";
import ProductEdit from "../components/ProductEdit";
import Detail from "../pages/Detail";

export const router = createBrowserRouter([
    { path: "/", 
    element: <WebsiteLayout/>,
    children:[
        { index:true, element: <div>Home Page</div> },
        { path: "/products", element: <List/> },
        { path: "/products/:id", element: <Detail/> },
    ]},
    
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />,
            },
            {
                path: "dashboard",
                element: <div>Dashboard</div>,
            },
            {
                path: "products",
                element: <ProductList/>,
            },
            {
                path: "products/:id/edit",
                element: <ProductEdit />,
            },
            {
                path: "products/add",
                element: <ProductAdd />,
            },
        ],
    },
]);