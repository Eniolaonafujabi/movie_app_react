import { Children } from "react";
import { Outlet } from "react-router-dom";


const ROUTES = [
    {
        path: '/',
        element: <Outlet/>,
        Children: [
            {
                path: 'home',
                element: <Home/>
            }
        ]
    }
]