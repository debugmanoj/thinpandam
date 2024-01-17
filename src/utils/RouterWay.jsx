import Signin from "../Customer/Signin";
import Home from "../Customer/Home"
import { Navigate } from 'react-router-dom'
import SignUp from "../Customer/SignUp";
import Cart from "../Customer/Cart"
import Delivery from "../Customer/Delivery";
const router=[
    {
        path:"/",
        exact:true,
        element:<Signin/>,
        children:[{
            path:"signUp",
            element:<SignUp/>
        }],
    },
    {
        path:"/home",
        exact:true,
        element:<Home/>
    },
    {
        path:"/Cart",
        exact:true,
        element:<Cart/>
    },
    {
        path:"/Delivery",
        exact:true,
        element:<Delivery/>
    },



]
export default router

// {
//     path:"*",
//     exact:false,
//     element:<Navigate to="/"/>
// } 