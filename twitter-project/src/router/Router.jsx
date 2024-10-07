import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import AddTweet from "../pages/AddTweet"
import UserPage from "../pages/UserPage"
import Happen from "../pages/Happen"

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
path:"/userpage/:name",
element:<UserPage/>
        },{

            path:"/happen",
            element:<Happen/>
        },
        {

            path:"/addtwett/:id",
            element:<AddTweet/>
        }

    ]
  
)
export default Router