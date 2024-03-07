import Signin from "../Customer/Signin";
import Home from "../Customer/Home";
import { Navigate } from "react-router-dom";
import SignUp from "../Customer/SignUp";
import Cart from "../Customer/Cart";
import Delivery from "../Customer/Delivery";
import DeliverySignIn from "../DeliveryPerson/DeliverySignIn";
import DeliverySignUp from "../DeliveryPerson/DeliverySignUp";
import DeliveryHome from "../DeliveryPerson/DeliveryHome";
import Bid from "../Customer/Bid";
import DeliverBid from "../DeliveryPerson/DeliveryBid";
import ReadysignIn from "../Customer/ReadysignIn";
import ThankYou from "../DeliveryPerson/ThankYou";
import Payment from "../Customer/Payment";
import GotCustomer from "../DeliveryPerson/GotCustomer";
import MyCustomer from "../DeliveryPerson/MyCustomer";
import TakeCustomerBid from "../DeliveryPerson/TakeCustomerBid";
import Bill from "../Customer/Bill";
import ThanksForOrder from "../Customer/ThanksForOrder";
import Profile from "../Customer/Profile";
import TotalOrderedFood from "../Customer/TotalOrderedFood";
import EditProfiel from "../Customer/EditProfiel";
import Delivered from "../DeliveryPerson/Delivered";
import UserProtected from "./UserProtected";
import NotAllowed from "../NotAllowed";
import DeliveryProtectedRoute from "./DeliveryProtectedRoute";
import NotAUser from "./NotAUser";
import HomePage from "../HomePage";
import AdminSignIn from "../admin/AdminSignIn";
import AdminHome from "../admin/AdminHome";
import AdminFoods from "../admin/AdminFoods";
import AdminAddFood from "../admin/AdminAddFood";
const router = [
  {
    path: "/signIn",
    exact: true,
    element: <Signin />,
  },
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/signUp",
    exact: true,
    element: <SignUp />,
  },
  {
    path: "/readySignIn",
    exact: true,
    element: <ReadysignIn />,
  },

  {
    path: "/DeliverySignIn",
    exact: true,
    element: <DeliverySignIn />,
  },
  {
    path: "/deliverySignUp",
    exact: true,
    element: <DeliverySignUp />,
  },
  {
    path: "/ThankYou",
    exact: true,
    element: <ThankYou />,
  },

  {
    path: "/home/:id",
    exact: true,
    element: (
      <UserProtected>
        <Home />
      </UserProtected>
    ),
  },
  {
    path: "/profile/:id",
    exact: true,
    element: (
      <UserProtected>
        <Profile />
      </UserProtected>
    ),
    children: [
      {
        path: "totalOrderedFood",
        element: (
          <UserProtected>
            <TotalOrderedFood />
          </UserProtected>
        ),
      },
      {
        path: "EditProfile",
        element: (
          <UserProtected>
            <EditProfiel />
          </UserProtected>
        ),
      },
    ],
  },
  // {
  //     path:"/deliveryHome/:id",
  //     exact:true,
  //     element:<DeliveryHome/>
  // },
  {
    path: "/deliveryHome/:id",
    element: (
      <DeliveryProtectedRoute>
        <DeliveryHome />
      </DeliveryProtectedRoute>
    ),
    children: [
      {
        path: "myCustomer",
        element: (
          <DeliveryProtectedRoute>
            <MyCustomer />
          </DeliveryProtectedRoute>
        ),
      },
      {
        path: "takeCustomerBid",
        element: (
          <DeliveryProtectedRoute>
            <TakeCustomerBid />
          </DeliveryProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/myCustomer/:id",
    exact: true,
    element: (
      <DeliveryProtectedRoute>
        <MyCustomer />
      </DeliveryProtectedRoute>
    ),
  },

  {
    path: "/Cart/:id",
    exact: true,
    element: (
      <UserProtected>
        <Cart />
      </UserProtected>
    ),
  },
  {
    path: "/Payment/:id",
    exact: true,
    element: (
      <UserProtected>
        <Payment />
      </UserProtected>
    ),
  },
  {
    path: "/Bill/:id",
    exact: true,
    element: (
      <UserProtected>
        <Bill />
      </UserProtected>
    ),
  },

  {
    path: "/Delivery/:id",
    exact: true,
    element: (
      <UserProtected>
        <Delivery />
      </UserProtected>
    ),
  },
  {
    path: "/Bid/:id",
    exact: true,
    element: (
      <UserProtected>
        <Bid />
      </UserProtected>
    ),
  },
  {
    path: "/DeliveryBid/:id",
    exact: true,
    element: (
      <DeliveryProtectedRoute>
        <DeliverBid />
      </DeliveryProtectedRoute>
    ),
  },
  {
    path: "/gotCustomer/:id",
    exact: true,
    element: (
      <DeliveryProtectedRoute>
        <GotCustomer />
      </DeliveryProtectedRoute>
    ),
  },
  {
    path: "/ThanksforOrdering/:id",
    exact: true,
    element: (
      <UserProtected>
        <ThanksForOrder />
      </UserProtected>
    ),
  },
  {
    path: "/ThanksforDeliverying/:id",
    exact: true,
    element: (
      <DeliveryProtectedRoute>
        <Delivered />
      </DeliveryProtectedRoute>
    ),
  },
  {
    path: "/NotAllowed",
    exact: true,
    element: <NotAllowed />,
  },
  {
    path: "/NotUser",
    exact: true,
    element: <NotAUser />,
  },
  {
    path: "/adminsignIn",
    exact: true,
    element: <AdminSignIn />,
  },
  {
    path: "/adminHome/:id",
    exact: true,
    element: <AdminHome />,
    children:
    [
      {
        path:"Foods",
        element:<AdminFoods/>
      },
      {
        path:"AddFoods",
        element:<AdminAddFood/>
      }
    ]
  },

  {
    path: "*",
    exact: false,
    element: <Navigate to="/" />,
  },
];
export default router;

// {
//     path:"*",
//     exact:false,
//     element:<Navigate to="/"/>
// }
