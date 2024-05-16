import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../Home/Home";

import Addperson from "../Addperson/Addperson";
import EditPerson from "../Editperson/EditPerson";



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
                path: "/addperson",
                element: <Addperson />
            },
            {
                path: "/editperson",
                element: <EditPerson />

            }


        ]
    }
])
export default router