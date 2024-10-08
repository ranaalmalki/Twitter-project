import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import AddTweet from "../pages/AddTweet"
import UserPage from "../pages/UserPage"
import Happen from "../pages/Happen"
import LikesPage from "../pages/LikesPage"
import Login from "../pages/Login"

const Router = createBrowserRouter(
    [


        {
            path: "/",
            element: <App />
        },
        {
            path: "/home",
            element: <AddTweet />
        },
        {
            path: "/userpage/:user",
            element: <UserPage />
        }, {

            path: "/happen",
            element: <Happen />
        },
        {

            path: "/addtwett/:user",
            element: <AddTweet />
        }
        ,
        {

            path: "/likes/:user",
            element: <LikesPage />
        }
        ,
        {

            path: "/login",
            element: <Login />
        }


    ]

)
export default Router