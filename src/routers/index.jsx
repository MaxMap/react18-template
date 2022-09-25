import React from "react";
import {Navigate, useRoutes} from "react-router-dom";
import lazyLoad from "./unit/lazyLoad.jsx";
// import Home from '@/views/home/index'
import Login from '@/views/login/index'

export const rootRouter = [
    {
        path: "/",
        element: <Navigate to="/login" />
    },{
        path: "/home",
        element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        children:[
            {
                path: "/home/test",
                element: lazyLoad(React.lazy(() => import("@/views/text"))),
            },{
                path: "/home/mydata",
                element: lazyLoad(React.lazy(() => import("@/views/mydata"))),
            }
        ]
    },{
        path: "/login",
        element: <Login />
    },
]
const Router = () => {
    return useRoutes(rootRouter);
};
export default Router;
