import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Page/Error/Error";
import Donation from "../Page/Donation/Donation";
import Login from "../Page/Login/Login";
import Home from "../Components/Home";
import Statistics from "../Page/Statistics/Statistics";

const mycreaterouter = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<Error></Error>,

        children: [
          {
            path: "/home",
            element:<Home></Home>
          },
          {
            path: "/donation",
            element:<Donation></Donation>
          },
          {
            path: "/statistics",
            element:<Statistics></Statistics>
          },
          {
            path: "/login",
            element: <Login></Login>
          }

            
           
          
        ]
    }
])

export default mycreaterouter


  



