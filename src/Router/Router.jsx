import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Page/Error/Error";
import Donation from "../Page/Donation/Donation";
import Login from "../Page/Login/Login";
import Home from "../Components/Home";
import Statistics from "../Page/Statistics/Statistics";
// import Login2 from "../Page/Login/Login2";

const mycreaterouter = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<Error></Error>,

        children: [
          {
            path: "/home",
            element:<Home></Home>,
            loader: () => fetch("./data.json")
            
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


  



