import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { urls } from "./urls";
import MainLayout from "../layouts/main.layout";
import AuthLayout from "../layouts/auth.layout";
import HomeLayout from "../layouts/home.layout";

const HomePage = lazy(() => import('../pages/home.page'))
const AdminPage = lazy(() => import('../pages/admin.page'))
const LoginPage = lazy(() => import('../pages/login.page'))
const RegisterPage = lazy(() => import('../pages/register.page'))

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: urls.login,
                element: <LoginPage />,
            },
            {
                path: urls.register,
                element: <RegisterPage />,
            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: urls.admin,
                element: <AdminPage />,
            },
        ],
    },
    {
        element: <HomeLayout />,
        children: [
            {
                path: urls.home,
                element: <HomePage />,
            },
        ],
    }
]);

export default router;