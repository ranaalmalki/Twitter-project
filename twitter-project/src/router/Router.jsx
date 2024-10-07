import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import AddTweet from "../pages/AddTweet"
import UserPage from "../pages/UserPage"

const Router = createBrowserRouter( 
    [


        {
            path: "/",
            element: <App />
        },
        {
            path: "/home",
            element: <AddTweet/>
        },
        {
path:"/userpage",
element:<UserPage/>
        }

    ]
  
)
export default Router