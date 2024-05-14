import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../Home/Home";
import ParentData from "../parentData/ParentData";
import Data from "../data";


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
            }
        ]
    }
])
export default router