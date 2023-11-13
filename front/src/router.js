import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { userLoader } from "./loaders/userLoader";
import ProtectedRoute from "./assets/components/ProtectedRoute/ProtectedRoute";
import { lazy } from "react";
const Home = lazy(() => import("./Pages/Homepage/Home.js"));
const Infos = lazy(() => import("./Pages/Infos/Infos.js"));
const Register = lazy(() => import("./Pages/Forms/Register/Register"));
const Login = lazy(() => import("./Pages/Forms/Login/Login"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Events = lazy(() => import("./Pages/Events/Events.js"));
const Delete = lazy(() => import("./Pages/Delete/Delete.js"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: userLoader,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "infos",
                element: <Infos />,
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
            {
                path: "events",
                element: <Events />,
            },
            {
                path: "delete",
                element: <Delete />,
            },
            {
                path: "contact",
                element: <Contact />,
            }
        ]
    }
]);