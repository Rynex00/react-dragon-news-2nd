import { createBrowserRouter } from "react-router-dom";
import Root from './../layouts/Root';
import Home from "../Pages/Home/Home";
import LogInPages from "../Pages/LogInPages/LogInPages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/logInPages',
                element: <LogInPages />,
            },
        ]
    },
]);

export default router;