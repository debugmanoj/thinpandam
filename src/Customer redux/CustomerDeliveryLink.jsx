import { createSlice } from "@reduxjs/toolkit";
import AxiosService from "../utils/Api";
import deliveryApi from "../utils/DeliveryApiRoutes";

const changeIsClicked = async (datas) => {
  try {
    let res = await AxiosService.patch(
      `${deliveryApi.updateStatus.path}`,
      datas
    );
    if (res.status === 200) {
      console.log(res.data.message);
      //  navigator? setnavigateToggle(true) :"Enter the data"
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const CustomerDeliveryLink = createSlice({
  name: "cdLink",
  initialState: [],
  reducers: {
    //Updated the delivery person list in customer delivery list
    updateCustomerDelivery: (state, action) => {
      return action.payload;
    },

    //Updating the deliverying isClikced
    handleBid: (state, action) => {
      // let {customerId,person}=action.payload
      // let {_id}=person

      changeIsClicked(action.payload);
    },
  },
});
export const { updateCustomerDelivery, handleBid } =
  CustomerDeliveryLink.actions;
export default CustomerDeliveryLink.reducer;
