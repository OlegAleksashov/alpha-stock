import React from 'react'
import { useRoutes } from "react-router-dom";

// import Login from "../containers/Login/Login";
import AuthGuard from "../containers/AuthGuard/AuthGuard";
import MainLayout from "../containers/MainLayout/MainLayout";
import LiveChart from "../containers/LiveChart/LiveChart";
import {ROOTS_MAIN} from "./path";

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: (
                <AuthGuard>
                    <MainLayout />
                </AuthGuard>
            ),
            children: [
                {
                    path: ROOTS_MAIN,
                    element: <LiveChart symbol={undefined} />,
                },
            ],
        },
    ])
}

export default Router