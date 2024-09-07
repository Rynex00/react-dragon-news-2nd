import { createBrowserRouter } from "react-router-dom";
import Root from './../layouts/Root';
import Home from "../Pages/Home/Home";
import LogInPages from "../Pages/LogInPages/LogInPages";
import Register from "../Pages/Register/Register";
import NewDetailes from "../Pages/NewDetailes/NewDetailes";
import PrivatRoute from './PrivatRoute';

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
                path: '/neww/:id',
                element: <PrivatRoute><NewDetailes/></PrivatRoute>,
            },
            {
                path: '/logInPages',
                element: <LogInPages />,
            },
            {
                path: '/register',
                element: <Register/>,
            },
        ]
    },
]);

export default router;