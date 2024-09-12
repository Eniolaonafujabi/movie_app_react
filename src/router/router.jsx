import NowPlayingMovie from "../components/NowPlayingMovie";
import Layout from "../layout/Layout";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";



const ROUTES = [
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <NowPlayingMovie/>
            }
        ]
    },
    
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]

export default ROUTES