import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductAdd from "../components/ProductAdd";
import { addProduct } from "../actions/product";
import List from "../pages/List";

export const router = createBrowserRouter([
    { path: "/", element: <div>Home Page</div> },
    { path: "/products", element: <List/> },
    { path: "/products/:id", element: <div>Detail Page</div> },
    {
        path: "/admin",
        element: (
            <div>
                This is Layout Admin <Outlet />
            </div>
        ),
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
                path: "products/:id/update",
                element: <div>Product Detail</div>,
            },
            {
                path: "products/add",
                element: <ProductAdd />,
            },
        ],
    },
]);