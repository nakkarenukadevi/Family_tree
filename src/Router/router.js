import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../Home/Home";
import ParentData from "../parentData/ParentData";
import Data from "../data";
import GrandParent from "../grandParent";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/parentdata",
                element: <ParentData />
            },
            {
                path: "/data",
                element: <Data />
            },
            {
                path: "/grandparent",
                element: <GrandParent />
            }
        ]
    }
])
export default router