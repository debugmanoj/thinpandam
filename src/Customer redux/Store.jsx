import { configureStore } from "@reduxjs/toolkit";
// import customerUserList from "./CustomerList";
import CartList from "./CartList";
// import DeliveryList from "./DeliveryList";
// import DeliveryHome from "./DeliveryHomeList";
import CustomerDeliveryLink from "./CustomerDeliveryLink";
// import CustomerDeliverBid from "./CustomerDeliverBid";

export default configureStore({
  reducer: {
    Cart: CartList, //Its important Ithu vanthu home page handle panra reducer

    cdLink: CustomerDeliveryLink, //Ithu vanthu delivery List handle

    //New Reducer
  },
});
